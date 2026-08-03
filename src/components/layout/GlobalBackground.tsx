import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

export const GlobalBackground = () => {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  
  const bg1Opacity = useTransform(smoothScroll, [0, 0.15, 0.25], [1, 1, 0]);
  const bg2Opacity = useTransform(smoothScroll, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
  const bg3Opacity = useTransform(smoothScroll, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const bg4Opacity = useTransform(smoothScroll, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const bg5Opacity = useTransform(smoothScroll, [0.75, 0.85, 1, 1], [0, 1, 1, 1]);

  // Subtle Parallax & Zoom Effects
  const yBg = useTransform(smoothScroll, [0, 1], ["0%", "15%"]);
  
  const images = [
    { src: "https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723387/hero-logistics.jpg.jpg", opacity: bg1Opacity },
    { src: "https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723388/brand-banner.jpg.jpg", opacity: bg2Opacity },
    { src: "https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723718/products-banner.jpg.jpg", opacity: bg3Opacity },
    { src: "https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723389/distribution-network.jpg.jpg", opacity: bg4Opacity },
    { src: "https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723869/contact-office.jpg.jpg", opacity: bg5Opacity },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {images.map((img, index) => (
        <motion.img 
          key={index}
          style={{ opacity: img.opacity, y: yBg }} 
          animate={{ scale: [1, 1.05, 1], x: index % 2 === 0 ? ["0%", "-1%", "0%"] : ["-1%", "0%", "-1%"] }}
          transition={{ duration: 40 + index * 5, repeat: Infinity, ease: "linear" }}
          src={img.src} 
          className="absolute inset-0 w-[105%] h-[105%] object-cover origin-center" 
          alt={`Background ${index + 1}`} 
          loading="lazy"
        />
      ))}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
    </div>
  );
};
