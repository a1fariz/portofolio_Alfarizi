import type { Transition, Variants } from "framer-motion";

export const springSmooth: Transition = {
  type: "spring",
  damping: 26,
  stiffness: 240,
  mass: 0.8,
};

export const springGentle: Transition = {
  type: "spring",
  damping: 30,
  stiffness: 180,
  mass: 1,
};

export const springSnappy: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
  mass: 0.6,
};

export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSmooth,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};
