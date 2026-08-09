import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Clock, Users2, ShieldCheck, Map } from 'lucide-react';

export function WhyClientsChooseUs() {
  const { language } = useLanguage();
  const title = { ar: 'لماذا يختارنا العملاء؟', en: 'Why Clients Choose Us?' };
  
  const reasons = [
    { 
      icon: Star, 
      title: { ar: 'الجودة العالية', en: 'High Quality' },
      className: "col-span-6 md:col-span-2 bg-gradient-to-br from-green-900/40 to-black/60",
      layout: "horizontal"
    },
    { 
      icon: ShieldCheck, 
      title: { ar: 'الموثوقية التامة', en: 'Complete Reliability' },
      className: "col-span-3 md:col-span-1 bg-black/40",
      layout: "vertical"
    },
    { 
      icon: Map, 
      title: { ar: 'التغطية الوطنية', en: 'Nationwide Distribution' },
      className: "col-span-3 md:col-span-1 bg-black/40",
      layout: "vertical"
    },
    { 
      icon: Clock, 
      title: { ar: 'سرعة التوصيل', en: 'Fast Delivery' },
      className: "col-span-2 md:col-span-1 bg-black/40",
      layout: "vertical"
    },
    { 
      icon: CheckCircle2, 
      title: { ar: 'شراكات موثوقة', en: 'Trusted Partnerships' },
      className: "col-span-2 md:col-span-2 bg-gradient-to-bl from-green-900/30 to-black/60",
      layout: "responsive"
    },
    { 
      icon: Users2, 
      title: { ar: 'فريق عمل محترف', en: 'Professional Team' },
      className: "col-span-2 md:col-span-1 bg-black/40",
      layout: "vertical"
    }
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto relative z-10">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const isHorizontal = reason.layout === 'horizontal';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`backdrop-blur-md border border-white/10 rounded-[2rem] p-6 sm:p-8 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group overflow-hidden relative cursor-default ${reason.className} ${isHorizontal ? 'flex flex-row items-center gap-6' : 'flex flex-col items-center text-center justify-center'}`}
            >
              {isHorizontal && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors duration-700"></div>
              )}
              
              <div className={`${isHorizontal ? 'w-16 h-16 shrink-0' : 'w-14 h-14 mb-4'} rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 relative z-10`}>
                <Icon className={`${isHorizontal ? 'w-8 h-8' : 'w-7 h-7'} text-green-400 group-hover:text-white transition-colors`} />
              </div>
              <h3 className={`${isHorizontal ? 'text-2xl sm:text-3xl text-start' : 'text-lg sm:text-xl text-center'} font-bold text-white relative z-10 leading-tight drop-shadow-sm`}>
                {reason.title[language as 'ar' | 'en']}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}