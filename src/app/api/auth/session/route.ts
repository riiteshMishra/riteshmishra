import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const val = cookieStore.get("admin_session")?.value;
  const secret = process.env.AUTH_SECRET || process.env.ADMIN_TOKEN || process.env.ADMIN_PASSWORD ||
    (process.env.NODE_ENV !== "production" ? "admin123" : "");
  const authed = !!secret && val === secret;
  return NextResponse.json({ authenticated: authed });
}