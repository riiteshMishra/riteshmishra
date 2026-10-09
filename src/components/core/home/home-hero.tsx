"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

import { staggerContainer } from "@/lib/animations";

interface HomeHeroProps {
  children: ReactNode;
}

const HomeHero = ({ children }: HomeHeroProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative overflow-hidden py-16"
    >
      {children}
    </motion.div>
  );
};

export default HomeHero;
