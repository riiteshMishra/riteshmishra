import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const ADMIN_SECRET =
  process.env.AUTH_SECRET || process.env.ADMIN_TOKEN || process.env.ADMIN_PASSWORD ||
  (process.env.NODE_ENV !== "production" ? "admin123" : "");

function isAuthed(req: NextRequest) {
  // Cookie
  const cookie = req.cookies.get("admin_session")?.value;
  if (cookie && ADMIN_SECRET && cookie === ADMIN_SECRET) return true;

  // Header token
  const headerToken =
    req.headers.get("x-admin-token") ||
    req.headers.get("x-admin-key") ||
    req.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ||
    "";
  if (headerToken && ADMIN_SECRET && headerToken === ADMIN_SECRET) return true;
  if (headerToken && process.env.ADMIN_TOKEN && headerToken === process.env.ADMIN_TOKEN) return true;
  if (headerToken && process.env.ADMIN_PASSWORD && headerToken === process.env.ADMIN_PASSWORD) return true;

  return false;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect /user-request pages
  if (pathname.startsWith("/user-request")) {
    // allow login page
    if (pathname === "/user-request/login" || pathname.startsWith("/user-request/login/")) {
      return NextResponse.next();
    }
    if (!isAuthed(req)) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // Protect API routes except auth and public contact POST
  if (pathname.startsWith("/api/")) {
    if (pathname.startsWith("/api/auth")) return NextResponse.next();

    // Allow public POST to /api/contact
    if (pathname === "/api/contact" && req.method === "POST") return NextResponse.next();

    if (!isAuthed(req)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user-request/:path*", "/api/:path*"],
};