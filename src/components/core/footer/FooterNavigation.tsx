"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const FooterNavigation = () => {
  return (
    <section aria-labelledby="footer-navigation-title">
      <motion.h2
        id="footer-navigation-title"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="font-roboto text-sm font-semibold tracking-wide text-(--text-primary)"
      >
        Navigation
      </motion.h2>

      <motion.nav
        aria-label="Footer navigation"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="mt-4 grid grid-cols-2 gap-2"
      >
        {navigationLinks.map((item, index) => (
          <motion.div key={item.href} variants={itemVariants}>
            <Link
              href={item.href}
              className="group relative flex min-h-11 items-center justify-between gap-2 overflow-hidden rounded-xl border border-(--border-color) bg-(--card-bg) px-3.5 py-2.5 transition-colors duration-300 hover:border-(--accent-green)/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-green)"
            >
              {/* Subtle hover background */}
              <span className="pointer-events-none absolute inset-0 bg-(--accent-green)/6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Animated bottom accent */}
              <span className="absolute inset-x-3 bottom-0 h-px origin-left scale-x-0 bg-(--accent-green) transition-transform duration-300 ease-out group-hover:scale-x-100" />

              <span className="relative z-10 flex min-w-0 items-center gap-2.5">
                <span className="font-roboto text-xs tabular-nums text-(--text-muted)/60">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-roboto text-sm font-medium text-(--text-muted) transition-colors duration-300 group-hover:text-(--accent-green)">
                  {item.label}
                </span>
              </span>

              <motion.span
                initial={false}
                className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-md text-(--text-muted) transition-colors duration-300 group-hover:text-(--accent-green)"
              >
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                />
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </section>
  );
};

export default FooterNavigation;
