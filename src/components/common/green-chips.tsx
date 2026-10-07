"use client";

import { motion } from "motion/react";

interface ChipsProps {
  title?: string;
}

const GreenChip = ({ title = "Available for new projects" }: ChipsProps) => {
  return (
    <div className="w-fit mx-auto bg-accent-green/20 rounded-full py-1.5">
      <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full px-4 ">
        <motion.span className="relative flex size-2.5 shrink-0 items-center justify-center">
          {/* Soft Wave */}
          <motion.span
            className="absolute size-2.5 rounded-full border border-accent-green/70"
            animate={{
              scale: [1, 2.2, 3],
              opacity: [0.5, 0.2, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Ball */}
          <motion.span
            className="size-2 rounded-full bg-accent-green shadow-[0_0_10px_var(--accent-green)]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        </motion.span>

        <span className="leading-none font-headline-sans font-semibold text-sm tracking-wider">
          {title}
        </span>
      </div>
    </div>
  );
};

export default GreenChip;
