import React, { useRef } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Map as MapIcon, Globe, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

export function GlobalPartners() {
  const { language, isRTL } = useLanguage();
  const title = { ar: 'شركاؤنا العالميون', en: 'Global Partners' };
  const desc = { 
    ar: 'نمتد بشراكاتنا الاستراتيجية عبر القارات لنجلب أفضل العلامات التجارية والمنتجات للسوق السعودي.',
    en: 'We extend our strategic partnerships across continents to bring the best brands and products to the Saudi market.' 
  };
  
  const regions = [
    { name: { ar: 'السعودية', en: 'Saudi Arabia' }, coord: { x: '55%', y: '45%' }, active: true, isHome: true },
    { name: { ar: 'دول الخليج', en: 'Gulf Countries' }, coord: { x: '58%', y: '48%' }, active: true },
    { name: { ar: 'تركيا', en: 'Turkey' }, coord: { x: '52%', y: '35%' }, active: true },
    { name: { ar: 'مصر', en: 'Egypt' }, coord: { x: '49%', y: '43%' }, active: true },
    { name: { ar: 'جنوب شرق آسيا', en: 'Southeast Asia' }, coord: { x: '75%', y: '50%' }, active: true },
    { name: { ar: 'أوروبا', en: 'Europe' }, coord: { x: '45%', y: '25%' }, active: true },
    { name: { ar: 'أمريكا الجنوبية', en: 'South America' }, coord: { x: '25%', y: '65%' }, active: true },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-1/2 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md tracking-tight">
          {title[language as 'ar' | 'en']}
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
          {desc[language as 'ar' | 'en']}
        </p>
      </motion.div>

      <motion.div 
        style={{ y, opacity }}
        className="max-w-6xl mx-auto bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-4 sm:p-8 md:p-12 shadow-2xl relative"
      >
        {/* World Map Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-gray-900/50 border border-white/5 flex items-center justify-center">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Map Image/Silhouette */}
          <div className="absolute inset-0 opacity-30 select-none pointer-events-none flex items-center justify-center p-4">
             <img 
               src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" 
               alt="World Map"
               className="w-full h-full object-contain filter invert"
             />
          </div>

          {/* Connection Lines (Simulated with SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            {regions.filter(r => !r.isHome).map((region, idx) => (
               <motion.line 
                 key={`line-${idx}`}
                 x1="55%" y1="45%" 
                 x2={region.coord.x} y2={region.coord.y} 
                 stroke="#22c55e" 
                 strokeWidth="2"
                 strokeDasharray="4 4"
                 initial={{ pathLength: 0, opacity: 0 }}
                 whileInView={{ pathLength: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, delay: 0.5 + (idx * 0.2) }}
               />
            ))}
          </svg>

          {/* Nodes */}
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute group z-10"
              style={{ left: region.coord.x, top: region.coord.y, transform: 'translate(-50%, -50%)' }}
            >
              <div className={`relative flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 cursor-pointer`}>
                {region.isHome ? (
                  <>
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)] border-2 border-white"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <div className="relative w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:bg-green-400 transition-colors"></div>
                  </>
                )}
              </div>
              
              {/* Tooltip */}
              <div className={`absolute ${region.isHome ? 'bottom-full mb-2' : 'top-full mt-2'} left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20`}>
                <div className="bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-white font-bold text-sm sm:text-base shadow-xl">
                  {region.name[language as 'ar' | 'en']}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { value: '30+', label: { ar: 'دولة', en: 'Countries' } },
            { value: '15+', label: { ar: 'شريك عالمي', en: 'Global Partners' } },
            { value: '100%', label: { ar: 'تغطية بالمملكة', en: 'KSA Coverage' } },
            { value: '24/7', label: { ar: 'عمليات لوجستية', en: 'Logistics Ops' } },
          ].map((stat, i) => (
             <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors">
               <div className="text-2xl sm:text-3xl font-black text-green-400 mb-1">{stat.value}</div>
               <div className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider">{stat.label[language as 'ar' | 'en']}</div>
             </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
