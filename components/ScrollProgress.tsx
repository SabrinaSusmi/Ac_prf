"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[999] h-[3px] w-full origin-left bg-accent shadow-[0_0_20px_#610C27]"
    />
  );
}
