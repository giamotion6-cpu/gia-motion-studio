"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const visible = { opacity: 1, y: 0, rotateX: 0 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? visible : { opacity: 0, y: 48, rotateX: 3 }}
      whileInView={visible}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "50% 100%", transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}
