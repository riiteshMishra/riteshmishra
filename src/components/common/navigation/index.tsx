"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navigationRoutes } from "@/utils/navigationRoutes";
import Link from "next/link";
import { NavOrb } from "../backgrounds";

export const handleHaptic = () => {
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(10);
  }
};

export const isRouteActive = (pathname: string, href: string) =>
  href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);

const Navigaion = () => {
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", () => {
    setHidden(true);

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      setHidden(false);
    }, 150);
  });

  // FIX: UNMOUNT PAR TIMER CLEAR
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  return (
    <div>
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: hidden ? 100 : 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around p-2 bg-card border-t border-border sm:hidden overflow-hidden"
      >
        <NavOrb />

        {navigationRoutes.map(({ href, label, icon: Icon }) => {
          const isActive = isRouteActive(pathname, href);

          return (
            <motion.div
              key={href}
              className="flex-1 min-w-0"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Link
                href={href}
                onClick={handleHaptic}
                className={`flex flex-col items-center gap-1 text-sm transition-colors hover:text-accent-green ${
                  isActive ? "text-accent-green" : "text-text-muted"
                }`}
              >
                <Icon size={18} />
                <span className="text-xs font-headline-sans">{label}</span>
              </Link>
            </motion.div>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Navigaion;
