import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Truck, Navigation, Box, Timer } from 'lucide-react';
import { Counter } from '../ui/Counter';

export function LogisticsCapabilities() {
  const { language } = useLanguage();
  const title = { ar: 'القدرات اللوجستية', en: 'Logistics Capabilities' };
  
  const stats = [
    { 
      id: 'fleet',
      icon: Truck, 
      value: 150, 
      suffix: '+', 
      label: { ar: 'شاحنة مبردة وجافة', en: 'Refrigerated & Dry Trucks' },
      className: "col-span-3 md:col-span-2 md:row-span-2 bg-gradient-to-br from-green-900/40 to-black/60",
      isPrimary: true
    },
    { 
      id: 'pos',
      icon: Box, 
      value: 50000, 
      suffix: '+', 
      label: { ar: 'نقطة بيع', en: 'POS' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-black/40",
      isPrimary: false
    },
    { 
      id: 'regions',
      icon: Navigation, 
      value: 13, 
      suffix: '', 
      label: { ar: 'منطقة إدارية', en: 'Regions' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-black/40",
      isPrimary: false
    },
    { 
      id: 'speed',
      icon: Timer, 
      value: 24, 
      suffix: 'h', 
      label: { ar: 'سرعة استجابة', en: 'Response' },
      className: "col-span-1 md:col-span-2 md:row-span-1 bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-green-900/20",
      isPrimary: false
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32 relative">
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-green-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

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

      <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[minmax(140px,auto)] gap-3 md:gap-6 max-w-6xl mx-auto relative z-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group overflow-hidden relative ${stat.className} ${stat.isPrimary ? 'p-6 sm:p-12 flex flex-col justify-end min-h-[220px]' : 'p-3 sm:p-8 flex flex-col justify-center items-center text-center'}`}
            >
              {/* Background Accent for Primary */}
              {stat.isPrimary && (
                <>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-green-500/20 transition-colors duration-700 pointer-events-none"></div>
                  <Icon className="absolute -top-10 rtl:-left-10 ltr:-right-10 w-48 h-48 md:w-64 md:h-64 text-green-500 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                </>
              )}
              
              {/* Icon Container */}
              <div className={`${stat.isPrimary ? 'w-16 h-16 md:w-20 md:h-20 mb-auto mt-2 md:mt-4' : 'w-10 h-10 md:w-16 md:h-16 mx-auto mb-2 md:mb-6'} rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 relative z-10`}>
                <Icon className={`${stat.isPrimary ? 'w-8 h-8 md:w-10 md:h-10' : 'w-5 h-5 md:w-8 md:h-8'} text-green-400 group-hover:text-white transition-colors`} />
              </div>

              {/* Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className={`w-full flex flex-col ${stat.isPrimary ? 'items-center md:items-start text-center md:text-start' : 'items-center text-center'}`}>
                  <div className={`${stat.isPrimary ? 'text-5xl md:text-8xl mt-4 md:mt-8 justify-center md:justify-start' : 'text-xl sm:text-2xl md:text-5xl justify-center'} font-black text-white mb-1 md:mb-2 tracking-tight flex items-center gap-1 drop-shadow-md w-full`}>
                    {stat.id === 'pos' ? (
                      <Counter from={0} to={50} duration={2.5} />
                    ) : (
                      <Counter from={0} to={stat.value} duration={2.5} />
                    )}
                    {stat.id === 'pos' && <span className="text-xl sm:text-2xl md:text-5xl">K</span>}
                    {stat.suffix && <span className="text-green-500 font-bold">{stat.suffix}</span>}
                  </div>
                  <h3 className={`${stat.isPrimary ? 'text-xl sm:text-3xl text-center md:text-start' : 'text-[11px] sm:text-sm md:text-lg text-center'} font-bold text-gray-300 w-full`}>
                    {stat.label[language as 'ar' | 'en']}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
