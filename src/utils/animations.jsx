import { motion } from "framer-motion";
import React from "react";

/* Animation Presets */
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

/* Stagger Animations */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* Hover Effects */
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 },
};

export const hoverLift = {
  whileHover: { y: -8 },
  whileTap: { y: 0 },
  transition: { duration: 0.2 },
};

export const hoverGlow = {
  whileHover: { boxShadow: "0 0 20px rgba(239, 68, 68, 0.6)" },
  transition: { duration: 0.2 },
};

/* Scroll Animations */
export const scrollIntoView = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.3 },
};

/* Floating Animation */
export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* Pulse Animation */
export const pulseAnimation = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* Shimmer/Skeleton Loading */
export const shimmerAnimation = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/* Utility Components */
export const AnimatedBox = ({ children, variant = fadeInUp, ...props }) => (
  <motion.div variants={variant} {...props}>
    {children}
  </motion.div>
);

export const AnimatedButton = ({ children, onClick, ...props }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    {...props}
  >
    {children}
  </motion.button>
);

export const AnimatedContainer = ({ children, staggered = true, ...props }) => (
  <motion.div
    variants={staggered ? containerVariants : {}}
    initial="hidden"
    animate="visible"
    {...props}
  >
    {children}
  </motion.div>
);

export const ScrollReveal = ({ children, ...props }) => (
  <motion.div variants={scrollIntoView} {...props}>
    {children}
  </motion.div>
);
