import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Truck, Navigation, Box, Zap } from 'lucide-react';
import { Counter } from '../ui/Counter';

export function LogisticsCapabilities() {
  const { language } = useLanguage();

  const title = { ar: 'القدرات اللوجستية', en: 'Logistics Capabilities' };
  
  const stats = [
    { icon: Truck, value: 150, suffix: '+', label: { ar: 'شاحنة مبردة وجافة', en: 'Refrigerated & Dry Trucks' } },
    { icon: Box, value: 50000, suffix: '', label: { ar: 'نقطة بيع مدعومة', en: 'Supported Points of Sale' } },
    { icon: Navigation, value: 13, suffix: '', label: { ar: 'منطقة إدارية مغطاة', en: 'Covered Admin Regions' } },
    { icon: Zap, value: 24, suffix: 'h', label: { ar: 'سرعة استجابة وتوصيل', en: 'Response & Delivery Time' } },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32">
      <div className="bg-gradient-to-br from-green-900/40 to-black/60 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Truck className="w-64 h-64 text-white" />
        </div>

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black/40 border border-white/10 rounded-3xl p-8 text-center hover:bg-black/60 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight flex justify-center items-center gap-1">
                  <Counter from={0} to={stat.value} duration={2} />
                  {stat.suffix && <span className="text-green-500">{stat.suffix}</span>}
                </div>
                <h3 className="text-lg font-bold text-gray-300">
                  {stat.label[language as 'ar' | 'en']}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
