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
    },
    { 
      id: 'pos',
      icon: Box, 
      value: 50000, 
      suffix: '+', 
      label: { ar: 'نقطة بيع', en: 'POS' },
    },
    { 
      id: 'regions',
      icon: Navigation, 
      value: 13, 
      suffix: '', 
      label: { ar: 'منطقة إدارية', en: 'Regions' },
    },
    { 
      id: 'speed',
      icon: Timer, 
      value: 24, 
      suffix: 'h', 
      label: { ar: 'سرعة استجابة', en: 'Response' },
    }
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

      <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto relative z-10 pb-8 snap-x snap-mandatory hide-scrollbar">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="snap-center shrink-0 w-[260px] sm:w-[300px] lg:w-auto relative group backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-gradient-to-br hover:from-green-900/30 hover:to-black/60 hover:border-green-500/30 shadow-xl hover:shadow-green-500/10 transition-all duration-500 overflow-hidden flex flex-col justify-center items-center text-center"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-green-500/10 transition-colors duration-700 pointer-events-none"></div>
              
              <Icon className="absolute -bottom-8 -right-8 w-40 h-40 text-green-500/5 group-hover:text-green-500/10 group-hover:scale-110 transition-all duration-700 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-500 relative z-10">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 group-hover:text-white transition-colors" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight flex items-center justify-center gap-1 drop-shadow-md w-full">
                  {stat.id === 'pos' ? (
                    <Counter from={0} to={50} duration={2.5} />
                  ) : (
                    <Counter from={0} to={stat.value} duration={2.5} />
                  )}
                  {stat.id === 'pos' && <span className="text-3xl sm:text-4xl lg:text-5xl">K</span>}
                  {stat.suffix && <span className="text-green-500 font-bold">{stat.suffix}</span>}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-300 w-full group-hover:text-white transition-colors">
                  {stat.label[language as 'ar' | 'en']}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
