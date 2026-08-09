import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { MapPin, Map } from 'lucide-react';
import { branches } from '../../data';
import { BranchContactInfo } from '../BranchContactInfo';
import { ScrollReveal } from '../ui/ScrollReveal';

export function BranchesSlider() {
  const { language, isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const title = { ar: 'فروعنا', en: 'Our Branches' };

  // Infinite scroll logic
  const baseX = useMotionValue(0);
  
  useAnimationFrame((t, delta) => {
    if (!isHovered) {
      let moveBy = isRTL ? 1 : -1;
      moveBy *= 0.5; // speed
      baseX.set(baseX.get() + moveBy);
    }
  });

  // Calculate the wrapping using modular arithmetic
  const x = useTransform(baseX, (v) => {
    // Assuming card width ~ 400px + gap 32px = 432px per card.
    // 3 cards = 1296px. Wrap around point.
    const wrapWidth = 432 * branches.length;
    let clampedV = v % wrapWidth;
    if (clampedV > 0 && !isRTL) clampedV -= wrapWidth;
    if (clampedV < 0 && isRTL) clampedV += wrapWidth;
    return `${clampedV}px`;
  });

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 my-16 md:my-32 z-20 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-green-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <ScrollReveal direction="up">
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            {title[language as 'ar' | 'en']}
          </h2>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
        </div>
      </ScrollReveal>

      {/* Slider Container */}
      <div 
        className="relative w-full max-w-[100vw] mx-auto py-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111827] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111827] to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-8 cursor-grab active:cursor-grabbing w-max"
          style={{ x }}
        >
          {/* Duplicate the branches array to create infinite loop effect */}
          {[...branches, ...branches, ...branches, ...branches].map((branch, index) => {
            return (
              <div 
                key={`${branch.id}-${index}`} 
                className="w-[calc(50vw-1rem)] md:w-[400px] shrink-0"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileInView={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(34,197,94,0.15)" }}
                  className="rounded-2xl md:rounded-[2.5rem] bg-gray-900/80 md:bg-black/40 backdrop-blur-xl border border-white/10 hover:border-green-500/30 hover:bg-black/60 shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full group"
                >
                  <div className="h-32 md:h-64 w-full bg-white/5 relative overflow-hidden pointer-events-none">
                    {branch.iframe ? (
                      <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full transition-opacity duration-700 pointer-events-none" dangerouslySetInnerHTML={{ __html: branch.iframe }} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <Map className="w-6 h-6 md:w-10 md:h-10" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 md:p-8 flex-grow z-10 relative bg-gray-900 md:bg-transparent -mt-4 md:-mt-12 md:bg-gradient-to-b md:from-black/50 md:to-transparent rounded-t-xl md:rounded-none">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-green-500/20 transition-colors duration-700 pointer-events-none"></div>
                    
                    <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4 mb-2 relative z-10">
                      <div>
                        <h3 className="text-[13px] md:text-2xl font-bold text-white mb-1 md:mb-3 group-hover:text-green-400 transition-colors leading-tight">{branch.name[language as 'ar' | 'en']}</h3>
                        <p className="text-[10px] md:text-base text-gray-300 flex items-center gap-1 md:gap-2 font-medium leading-relaxed">
                          <MapPin className="w-3 h-3 md:w-5 md:h-5 text-green-500 shrink-0" /> {branch.address[language as 'ar' | 'en']}
                        </p>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-white/5 px-2 py-1 md:px-4 md:py-2 text-[9px] md:text-sm font-bold text-gray-200 border border-white/10 shadow-sm group-hover:bg-green-500/20 group-hover:text-green-300 group-hover:border-green-500/30 transition-colors whitespace-nowrap">
                        {branch.city[language as 'ar' | 'en']}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Contact Info Panel inside Branches section */}
      <ScrollReveal direction="up">
        <BranchContactInfo />
      </ScrollReveal>
    </section>
  );
}
