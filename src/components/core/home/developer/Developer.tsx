"use client";

import { motion } from "motion/react";

import { fadeUpItem } from "@/lib/animations";

import DeveloperGlow from "./DeveloperGlow";
import DeveloperRing from "./DeveloperRing";
import DeveloperImage from "./DeveloperImage";
import DeveloperIcons from "./DeveloperIcons";

const Developer = () => {
  return (
    <motion.div variants={fadeUpItem} className="mt-14">
      <motion.div
        className="relative mx-auto size-52 will-change-transform sm:size-60"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DeveloperGlow />

        <DeveloperRing />

        <DeveloperIcons />

        <DeveloperImage />
      </motion.div>
    </motion.div>
  );
};

export default Developer;
