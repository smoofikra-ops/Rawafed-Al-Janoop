import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';

export function JourneyTimeline() {
  const { language } = useLanguage();

  const title = { ar: 'مسيرتنا', en: 'Our Journey' };

  const milestones = [
    { year: '2018', title: { ar: 'انطلاقة الشركة', en: 'Company Launch' } },
    { year: '2019', title: { ar: 'توسع العمليات', en: 'Operations Expansion' } },
    { year: '2021', title: { ar: 'شراكات استراتيجية', en: 'Strategic Partnerships' } },
    { year: '2023', title: { ar: 'إطلاق العلامات الخاصة', en: 'Private Brands Launch' } },
    { year: '2025', title: { ar: 'شبكة توزيع وطنية', en: 'National Distribution Network' } },
    { year: '2026', title: { ar: 'اليوم', en: 'Today' } },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          {title[language as 'ar' | 'en']}
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 hidden md:block rounded-full"></div>
        <div className="absolute top-0 bottom-0 left-8 w-1 bg-white/10 md:hidden rounded-full"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-12 md:gap-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-row md:flex-col items-center gap-6 md:gap-8 w-full md:w-auto relative"
            >
              {/* Node */}
              <div className="w-16 h-16 rounded-full bg-black/60 border-4 border-green-500 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(34,197,94,0.3)] z-10 relative">
                <span className="text-green-400 font-bold text-lg">{milestone.year}</span>
              </div>
              
              {/* Content */}
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl md:text-center w-full md:w-48 shadow-xl">
                <h3 className="text-white font-bold text-lg">
                  {milestone.title[language as 'ar' | 'en']}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
