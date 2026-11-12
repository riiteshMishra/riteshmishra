import { cookies } from "next/headers";

export function getAdminSecret() {
  const secret = process.env.AUTH_SECRET || process.env.ADMIN_TOKEN || process.env.ADMIN_PASSWORD;
  if (secret) return secret;
  // Only allow a dev fallback outside production.
  if (process.env.NODE_ENV !== "production") return "admin123";
  return "";
}

export async function isAdminRequest(req: Request): Promise<boolean> {
  // Cookie session
  try {
    const cookieStore = await cookies();
    const val = cookieStore.get("admin_session")?.value;
    if (val && val === getAdminSecret()) return true;
  } catch {
    // ignore
  }

  // Header token
  const headerToken =
    req.headers.get("x-admin-token") ||
    req.headers.get("x-admin-key") ||
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ||
    "";
  if (headerToken && (headerToken === getAdminSecret() || headerToken === process.env.ADMIN_TOKEN || headerToken === process.env.ADMIN_PASSWORD)) {
    return true;
  }

  return false;
}