import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { getAdminSecret } from "@/lib/auth";
import UserRequestDashboard from "@/components/core/user-request/UserRequestDashboard";

export const metadata: Metadata = {
  title: "User Requests",
  robots: { index: false, follow: false },
};

export const instant = false;

export default async function UserRequestPage() {
  const cookieStore = await cookies();
  const val = cookieStore.get("admin_session")?.value;
  if (val !== getAdminSecret()) {
    redirect("/login?next=/user-request");
  }
  return <UserRequestDashboard />;
}