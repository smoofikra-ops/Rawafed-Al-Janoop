import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

export function Counter({ from, to, duration = 2, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-45% 0px -45% 0px" });
  const controls = useAnimation();
  const animationFrameRef = useRef<number>();

  const startAnimation = useCallback(() => {
    let startTime: number;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    setCount(from);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(from + (to - from) * progress));
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    controls.start({ scale: [0.8, 1.2, 1], transition: { duration: 0.5 } });
  }, [from, to, duration, controls]);

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isInView, startAnimation]);

  return (
    <motion.div 
      ref={ref} 
      animate={controls} 
      onMouseEnter={startAnimation}
      onClick={startAnimation}
      className="flex items-center justify-center font-bold text-3xl sm:text-6xl text-primary-600 mb-2 cursor-pointer hover:text-primary-500 transition-colors duration-300"
      style={{
        textShadow: "2px 4px 6px rgba(0, 0, 0, 0.2), 0 -1px 1px rgba(255,255,255,0.3)"
      }}
      dir="ltr"
    >
      {count}
      {suffix && <span className="text-xl sm:text-3xl ml-1">{suffix}</span>}
    </motion.div>
  );
}
