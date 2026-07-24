"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[90] h-[2px] w-full origin-left bg-gradient-to-r from-gold via-accent to-gold"
      style={{ scaleX }}
    />
  );
}
