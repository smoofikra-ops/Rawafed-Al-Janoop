import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }: { children: React.ReactNode, direction?: "up" | "left" | "right" | "none" | "up-left" | "up-right" | "zoom", delay?: number, className?: string, key?: React.Key }) => {
  let y = 0;
  let x = 0;
  
  if (direction.includes("up")) y = 40;
  if (direction.includes("right")) x = 40;
  if (direction.includes("left")) x = -40;
  
  const initial = direction === "zoom" ? { opacity: 0, scale: 0.85 } : { opacity: 0, y, x };
  const whileInView = direction === "zoom" ? { opacity: 1, scale: 1 } : { opacity: 1, y: 0, x: 0 };
  
  if (direction === "none") {
    return <div className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
