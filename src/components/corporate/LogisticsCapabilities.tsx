import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Truck, Navigation, Box, Zap, Map } from 'lucide-react';
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
      className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-green-900/40 to-black/60",
      isPrimary: true
    },
    { 
      id: 'pos',
      icon: Box, 
      value: 50000, 
      suffix: '+', 
      label: { ar: 'نقطة بيع مدعومة', en: 'Supported POS' },
      className: "md:col-span-1 md:row-span-1 bg-black/40",
      isPrimary: false
    },
    { 
      id: 'regions',
      icon: Navigation, 
      value: 13, 
      suffix: '', 
      label: { ar: 'منطقة إدارية', en: 'Covered Regions' },
      className: "md:col-span-1 md:row-span-1 bg-black/40",
      isPrimary: false
    },
    { 
      id: 'speed',
      icon: Zap, 
      value: 24, 
      suffix: 'h', 
      label: { ar: 'سرعة استجابة', en: 'Response Time' },
      className: "md:col-span-2 md:row-span-1 bg-gradient-to-r from-black/60 to-green-900/20",
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

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-4 md:gap-6 max-w-6xl mx-auto relative z-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`backdrop-blur-xl border border-white/10 rounded-[2rem] hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group overflow-hidden relative ${stat.className} ${stat.isPrimary ? 'p-8 sm:p-12 flex flex-col justify-end' : 'p-6 sm:p-8 flex flex-col justify-center items-center text-center'}`}
            >
              {/* Background Accent for Primary */}
              {stat.isPrimary && (
                <>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-green-500/20 transition-colors duration-700 pointer-events-none"></div>
                  <Icon className="absolute -top-10 rtl:-left-10 ltr:-right-10 w-64 h-64 text-green-500 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
                </>
              )}

              {/* Background Accent for Speed */}
              {stat.id === 'speed' && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors duration-700 pointer-events-none"></div>
              )}

              {/* Icon Container */}
              <div className={`${stat.isPrimary ? 'w-20 h-20 mb-auto mt-4' : stat.id === 'speed' ? 'w-16 h-16 mr-auto rtl:ml-auto rtl:mr-0 shrink-0' : 'w-16 h-16 mx-auto mb-6'} rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 relative z-10`}>
                <Icon className={`${stat.isPrimary ? 'w-10 h-10' : 'w-8 h-8'} text-green-400 group-hover:text-white transition-colors`} />
              </div>

              {/* Content */}
              <div className={`${stat.id === 'speed' ? 'flex flex-row items-center gap-6 w-full' : ''} relative z-10`}>
                {stat.id === 'speed' && (
                  <div className="w-16 h-16 shrink-0 md:hidden"></div> 
                )}
                <div className={stat.id === 'speed' ? 'flex-1 rtl:text-right ltr:text-left flex flex-row items-center justify-between' : ''}>
                  <div>
                    <div className={`${stat.isPrimary ? 'text-6xl md:text-8xl mt-8' : 'text-4xl md:text-5xl'} font-black text-white mb-2 tracking-tight flex items-center gap-1 drop-shadow-md`}>
                      <Counter from={0} to={stat.value} duration={2.5} />
                      {stat.suffix && <span className="text-green-500 font-bold">{stat.suffix}</span>}
                    </div>
                    <h3 className={`${stat.isPrimary ? 'text-2xl sm:text-3xl font-bold text-gray-200' : 'text-lg font-bold text-gray-300'}`}>
                      {stat.label[language as 'ar' | 'en']}
                    </h3>
                  </div>
                  {stat.id === 'speed' && (
                     <div className="hidden sm:block">
                       <Truck className="w-24 h-24 text-white/5 group-hover:text-green-500/20 group-hover:translate-x-4 rtl:group-hover:-translate-x-4 transition-all duration-700" />
                     </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
