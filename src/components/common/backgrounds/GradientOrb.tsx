"use client";

import { motion } from "motion/react";

const GradientOrb = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Left Orb */}
      <motion.div
        className="absolute -left-40 -top-40 size-125 rounded-full bg-emerald-500/20 blur-[120px] will-change-transform"
        animate={{
          transform: [
            "translate3d(0, 0, 0) scale(1)",
            "translate3d(25px, 20px, 0) scale(1.05)",
            "translate3d(-15px, -10px, 0) scale(0.98)",
            "translate3d(0, 0, 0) scale(1)",
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Orb */}
      <motion.div
        className="absolute -right-40 top-20 size-112.5 rounded-full bg-violet-500/15 blur-[110px] will-change-transform"
        animate={{
          transform: [
            "translate3d(0, 0, 0) scale(1)",
            "translate3d(-25px, -20px, 0) scale(0.97)",
            "translate3d(15px, 15px, 0) scale(1.04)",
            "translate3d(0, 0, 0) scale(1)",
          ],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Orb */}
      <motion.div
        className="absolute -bottom-75 left-1/2 size-162.5 -translate-x-1/2 rounded-full bg-teal-400/10 blur-[140px] will-change-transform"
        animate={{
          transform: [
            "translate3d(-50%, 0, 0) scale(1)",
            "translate3d(-47%, -25px, 0) scale(1.04)",
            "translate3d(-53%, 15px, 0) scale(0.98)",
            "translate3d(-50%, 0, 0) scale(1)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GradientOrb;
