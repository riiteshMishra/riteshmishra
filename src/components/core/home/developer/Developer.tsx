"use client";

import { motion } from "motion/react";

import MotionFadeUp from "@/components/common/motion-fade-up";

import DeveloperGlow from "./DeveloperGlow";
import DeveloperRing from "./DeveloperRing";
import DeveloperImage from "./DeveloperImage";
import DeveloperIcons from "./DeveloperIcons";

const Developer = () => {
  return (
    <MotionFadeUp delay={0.4} className="mt-14">
      <motion.div
        className="relative mx-auto size-52 sm:size-60"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DeveloperGlow />

        <DeveloperRing />

        <DeveloperIcons />

        <DeveloperImage />
      </motion.div>
    </MotionFadeUp>
  );
};

export default Developer;
