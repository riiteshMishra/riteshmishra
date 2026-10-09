"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { fadeUpItem } from "@/lib/animations";

interface MotionFadeUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

const MotionFadeUp = ({ children, delay = 0, ...props }: MotionFadeUpProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpItem}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionFadeUp;
