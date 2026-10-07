"use client";

import { motion } from "motion/react";

const DeveloperRing = () => {
  return (
    <motion.div
      className="absolute -inset-2 rounded-full border border-accent-green/30"
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default DeveloperRing;
