"use client";

import { motion } from "motion/react";

const DeveloperGlow = () => {
  return (
    <motion.div
      className="absolute -inset-6 rounded-full bg-accent-green/15 blur-3xl"
      animate={{
        scale: [1, 1.12, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default DeveloperGlow;
