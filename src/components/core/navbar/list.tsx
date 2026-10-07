"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface NavListProps {
  navlist: NavItem[];
}

const NavList = ({ navlist }: NavListProps) => {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex items-center gap-2">
      {navlist.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <motion.li key={item.id} className="relative font-headline-sans">
            <Link href={item.href} className="relative block px-4 py-1">
              {isActive && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-full border border-accent-green/30 bg-accent-green/15 shadow-[0_0_20px_var(--accent-green)]/10"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 50,
                    mass: 0.7,
                  }}
                >
                  <span className="absolute inset-px rounded-full bg-accent-green/5" />
                </motion.span>
              )}

              <span
                className={
                  isActive
                    ? "relative text-accent-green text-sm"
                    : "relative text-text-primary/70 transition-colors duration-200 hover:text-text-primary text-sm"
                }
              >
                {item.label}
              </span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavList;
