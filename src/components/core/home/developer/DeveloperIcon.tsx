"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";

interface DeveloperIconProps {
  icon: LucideIcon;
  position: string;
  color: "green" | "purple";
  href: string;
  label: string;
  animate: {
    x?: number[];
    y?: number[];
    rotate?: number[];
  };
  duration: number;
}

const DeveloperIcon = ({
  icon: Icon,
  position,
  color,
  href,
  label,
  animate,
  duration,
}: DeveloperIconProps) => {
  return (
    <motion.div
      className={`absolute ${position}`}
      animate={animate}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Learn about ${label}`}
        title={`Learn about ${label}`}
        className={`flex rounded-xl border border-border bg-card/80 p-2.5 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-accent-green/50 ${
          color === "green" ? "text-accent-green" : "text-accent-purple"
        }`}
      >
        <Icon className="size-5" />
      </Link>
    </motion.div>
  );
};

export default DeveloperIcon;
