import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Truck, Map, Warehouse, Users, Award, Handshake } from 'lucide-react';

export function WhyUs() {
  const { language } = useLanguage();
  
  const title = { ar: 'لماذا روافد الجنوب؟', en: 'Why Rawafed Al-Janoob?' };
  
  const strengths = [
    { 
      icon: ShieldCheck, 
      title: { ar: 'شراكات حصرية', en: 'Exclusive Partnerships' },
      image: 'https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723389/about-team.jpg.jpg',
      className: "col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-green-900/30 to-black/40 flex flex-col justify-end text-center md:text-center relative overflow-hidden group min-h-[200px] md:min-h-0",
      iconPlacement: "absolute top-4 rtl:left-4 ltr:right-4 md:top-8 md:rtl:left-8 md:ltr:right-8 w-16 h-16 md:w-24 md:h-24 opacity-20 text-green-400 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 z-10",
      contentClass: "mt-16 md:mt-32 relative z-10 flex flex-col items-center"
    },
    { 
      icon: Globe2, 
      title: { ar: 'علامات عالمية', en: 'International Brands' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-black/40 flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-0",
      iconPlacement: "w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500",
      contentClass: ""
    },
    { 
      icon: Truck, 
      title: { ar: 'شبكة لوجستية', en: 'Strong Logistics' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-black/40 flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-0",
      iconPlacement: "w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500",
      contentClass: ""
    },
    { 
      icon: Map, 
      title: { ar: 'تغطية شاملة', en: 'Nationwide Coverage' },
      className: "col-span-2 md:col-span-2 md:row-span-1 bg-gradient-to-r from-black/40 to-green-900/20 flex flex-col md:flex-col items-center text-center justify-center gap-2 md:gap-4 min-h-[120px] md:min-h-0",
      iconPlacement: "w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500",
      contentClass: "flex flex-col items-center"
    },
    { 
      icon: Warehouse, 
      title: { ar: 'مستودعات حديثة', en: 'Modern Warehouses' },
      className: "col-span-2 md:col-span-1 md:row-span-2 bg-gradient-to-b from-green-900/20 to-black/40 flex flex-col justify-center items-center text-center relative overflow-hidden min-h-[140px] md:min-h-0",
      iconPlacement: "w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center mb-2 md:mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500",
      contentClass: ""
    },
    { 
      icon: Users, 
      title: { ar: 'فريق محترف', en: 'Professional Team' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-black/40 flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-0",
      iconPlacement: "w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500",
      contentClass: ""
    },
    { 
      icon: Award, 
      title: { ar: 'ضمان الجودة', en: 'Quality Assurance' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-gradient-to-l from-black/40 to-green-900/20 flex flex-col items-center text-center justify-center gap-2 md:gap-4 min-h-[120px] md:min-h-0",
      iconPlacement: "w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500",
      contentClass: "flex flex-col items-center"
    },
    { 
      icon: Handshake, 
      title: { ar: 'شراكات مستدامة', en: 'Long-Term Partnerships' },
      className: "col-span-2 md:col-span-1 md:row-span-1 bg-black/40 flex flex-col items-center text-center justify-center min-h-[120px] md:min-h-0",
      iconPlacement: "w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500",
      contentClass: ""
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          {title[language as 'ar' | 'en']}
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[minmax(120px,auto)] gap-3 md:gap-6 max-w-7xl mx-auto relative z-10">
        {strengths.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-3 md:p-8 hover:border-green-500/30 transition-all duration-500 group shadow-xl hover:shadow-2xl hover:shadow-green-500/10 cursor-default ${item.className}`}
            >
              {'image' in item && item.image && (
                <>
                  <img src={item.image} alt={item.title[language as 'ar' | 'en']} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </>
              )}
              {item.className.includes('absolute') ? (
                <>
                  <Icon className={item.iconPlacement} />
                  <div className={item.contentClass}>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 group-hover:bg-green-500/40 transition-all duration-500 relative z-10">
                       <Icon className="w-6 h-6 md:w-8 md:h-8 text-green-400 group-hover:text-white" />
                    </div>
                    <h3 className="text-lg md:text-3xl font-bold text-white leading-tight relative z-10 drop-shadow-sm text-center">
                      {item.title[language as 'ar' | 'en']}
                    </h3>
                  </div>
                </>
              ) : item.className.includes('md:flex-col') || item.className.includes('gap-') ? (
                <>
                  <div className={item.iconPlacement}>
                    <Icon className="w-5 h-5 md:w-8 md:h-8 text-green-400 group-hover:text-white" />
                  </div>
                  <div className={item.contentClass}>
                    <h3 className="text-[11px] md:text-2xl font-bold text-white leading-tight drop-shadow-sm text-center">
                      {item.title[language as 'ar' | 'en']}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <div className={item.iconPlacement}>
                    <Icon className="w-4 h-4 md:w-7 md:h-7 text-green-400 group-hover:text-white" />
                  </div>
                  <div className={item.contentClass}>
                    <h3 className="text-[11px] md:text-xl font-bold text-white leading-tight drop-shadow-sm text-center">
                      {item.title[language as 'ar' | 'en']}
                    </h3>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}