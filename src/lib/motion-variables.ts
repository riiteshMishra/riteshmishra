import type { Variants } from "motion/react";
import { fadeUpItem } from "@/lib/animations";

export const fadeUp = fadeUpItem;

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
