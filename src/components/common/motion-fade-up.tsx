"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { fadeUpDelayed } from "@/lib/motion-variables";

interface MotionFadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

const MotionFadeUp = ({ children, delay = 0, ...props }: MotionFadeUpProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpDelayed(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeUp;
