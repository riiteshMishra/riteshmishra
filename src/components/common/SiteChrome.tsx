"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/core/navbar";
import { publicRoutes } from "@/lib/public-routes";
import Footer from "../core/footer/Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isPublicRoute = publicRoutes.some((route) => {
    if (route === "/") return pathname === "/";

    return pathname === route || pathname.startsWith(`${route}/`);
  });

  return (
    <>
      {isPublicRoute && <Navbar />}

      <div id="main-content" tabIndex={-1}>
        {children}
      </div>

      {isPublicRoute && <Footer />}
    </>
  );
}
