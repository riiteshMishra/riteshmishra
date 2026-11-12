// Shared IP-based rate limiting using Upstash Redis REST API.
// No in-memory state is used, so limits are consistent across serverless instances.

const WINDOW_SECONDS = 15 * 60;
const MAX_REQUESTS = 5;

function getUpstashConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return { url: url.replace(/\/$/, ""), token };
}

async function redisCommand(command: string[]) {
  const cfg = getUpstashConfig();
  if (!cfg) return null;
  const res = await fetch(cfg.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${cfg.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });
  if (!res.ok) return null;
  const data = await res.json().catch(() => null);
  return data?.result ?? null;
}

export async function checkIpRateLimit(ip: string): Promise<boolean> {
  const cfg = getUpstashConfig();
  if (!cfg) {
    // If Upstash is not configured, skip IP limiting (documented for dev).
    return true;
  }
  const key = `rl:ip:${ip}`;
  const count = await redisCommand(["INCR", key]);
  if (count === 1) {
    await redisCommand(["EXPIRE", key, String(WINDOW_SECONDS)]);
  }
  if (typeof count !== "number") return true;
  return count <= MAX_REQUESTS;
}

export function getClientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  const xr = req.headers.get("x-real-ip");
  if (xr) return xr.trim();
  return "unknown";
}