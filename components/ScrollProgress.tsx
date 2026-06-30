"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[110] h-1 w-full origin-left bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
