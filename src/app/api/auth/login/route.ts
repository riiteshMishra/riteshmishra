import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: { password?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const password = body.password || "";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  const secret =
    process.env.AUTH_SECRET || process.env.ADMIN_TOKEN || adminPassword;

  if (!adminPassword || password !== adminPassword)
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });

  const res = NextResponse.json({ success: true });

  res.cookies.set("admin_session", secret, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
