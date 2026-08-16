import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Timer, Users2, ShieldCheck, Map, ArrowRight, ArrowLeft } from 'lucide-react';

export function WhyClientsChooseUs() {
  const { language, isRTL } = useLanguage();
  
  const title = { ar: 'لماذا يختارنا العملاء؟', en: 'Why Clients Choose Us?' };
  
  const reasons = [
    { icon: Star, title: { ar: 'الجودة العالية', en: 'High Quality' } },
    { icon: ShieldCheck, title: { ar: 'الموثوقية التامة', en: 'Complete Reliability' } },
    { icon: Map, title: { ar: 'التغطية الوطنية', en: 'Nationwide Distribution' } },
    { icon: Timer, title: { ar: 'سرعة التوصيل', en: 'Fast Delivery' } },
    { icon: Users2, title: { ar: 'فريق عمل محترف', en: 'Professional Team' } },
    { icon: CheckCircle2, title: { ar: 'شراكات موثوقة', en: 'Trusted Partnerships' } }
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
        <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Connecting Line (Desktop only) */}
        <div className="hidden lg:block absolute top-[50%] left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent -translate-y-1/2 z-0"></div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-6 gap-4 sm:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar relative z-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const Arrow = isRTL ? ArrowLeft : ArrowRight;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[240px] sm:w-[280px] lg:w-auto relative group"
              >
                <div className="backdrop-blur-xl border border-white/5 rounded-2xl p-6 sm:p-8 bg-black/40 hover:bg-gradient-to-b hover:from-green-900/20 hover:to-black/60 hover:border-green-500/30 shadow-xl hover:shadow-green-500/10 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
                  
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500"></div>

                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-500 relative z-10">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white relative z-10 drop-shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                    {reason.title[language as 'ar' | 'en']}
                  </h3>

                  {/* Connectors for desktop */}
                  {index < reasons.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 ltr:-right-6 rtl:-left-6 w-8 justify-center items-center -translate-y-1/2 z-0 text-green-500/30 group-hover:text-green-500 transition-colors">
                      <Arrow className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
