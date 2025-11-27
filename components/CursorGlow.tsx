"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-40 h-40 rounded-full bg-accent/10 blur-3xl z-[9999]"
      animate={{ x: position.x - 80, y: position.y - 80 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    />
  );
}
