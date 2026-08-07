import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Map as MapIcon, Globe } from 'lucide-react';

export function GlobalPartners() {
  const { language } = useLanguage();

  const title = { ar: 'شركاؤنا العالميون', en: 'Global Partners' };
  const desc = { 
    ar: 'نمتد بشراكاتنا الاستراتيجية إلى الأسواق العالمية لنجلب أفضل المنتجات للسوق السعودي.', 
    en: 'We extend our strategic partnerships to global markets to bring the best products to the Saudi market.' 
  };

  const regions = [
    { name: { ar: 'تركيا', en: 'Turkey' } },
    { name: { ar: 'دول الخليج', en: 'Gulf Countries' } },
    { name: { ar: 'الشرق الأوسط', en: 'Middle East' } },
    { name: { ar: 'شركاء دوليون', en: 'International Partners' } },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          {title[language as 'ar' | 'en']}
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded mb-6"></div>
        <p className="text-xl text-gray-300 font-medium">
          {desc[language as 'ar' | 'en']}
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Abstract Map Background Simulation */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
           <MapIcon className="w-[120%] h-[120%] text-green-500/20" strokeWidth={0.5} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors"
            >
              <Globe className="w-8 h-8 text-green-400 shrink-0" />
              <h3 className="text-xl font-bold text-white">
                {region.name[language as 'ar' | 'en']}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
