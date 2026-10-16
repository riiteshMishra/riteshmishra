"use client";

import { motion } from "motion/react";

const NavOrb = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Left Orb */}
      <motion.div
        className="absolute -left-10 -top-10 size-28 rounded-full bg-emerald-500/20 blur-2xl will-change-transform"
        animate={{
          transform: [
            "translate3d(0, 0, 0) scale(1)",
            "translate3d(10px, 6px, 0) scale(1.05)",
            "translate3d(-6px, -4px, 0) scale(0.98)",
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
        className="absolute -right-10 -top-6 size-24 rounded-full bg-violet-500/15 blur-2xl will-change-transform"
        animate={{
          transform: [
            "translate3d(0, 0, 0) scale(1)",
            "translate3d(-10px, -6px, 0) scale(0.97)",
            "translate3d(6px, 5px, 0) scale(1.04)",
            "translate3d(0, 0, 0) scale(1)",
          ],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Orb */}
      <motion.div
        className="absolute -bottom-12 left-1/2 size-32 -translate-x-1/2 rounded-full bg-teal-400/10 blur-[50px] will-change-transform"
        animate={{
          transform: [
            "translate3d(-50%, 0, 0) scale(1)",
            "translate3d(-47%, -8px, 0) scale(1.04)",
            "translate3d(-53%, 5px, 0) scale(0.98)",
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

export default NavOrb;
