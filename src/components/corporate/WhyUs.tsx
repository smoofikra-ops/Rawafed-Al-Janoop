import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Truck, Map, Warehouse, Users, Award, Handshake } from 'lucide-react';

export function WhyUs() {
  const { language } = useLanguage();

  const title = { ar: 'لماذا روافد الجنوب؟', en: 'Why Rawafed Al-Janoob?' };

  const strengths = [
    { icon: ShieldCheck, title: { ar: 'شراكات حصرية', en: 'Exclusive Partnerships' } },
    { icon: Globe2, title: { ar: 'علامات عالمية', en: 'International Brands' } },
    { icon: Truck, title: { ar: 'شبكة لوجستية قوية', en: 'Strong Logistics' } },
    { icon: Map, title: { ar: 'تغطية شاملة', en: 'Nationwide Coverage' } },
    { icon: Warehouse, title: { ar: 'مستودعات حديثة', en: 'Modern Warehouses' } },
    { icon: Users, title: { ar: 'فريق مبيعات محترف', en: 'Professional Sales Team' } },
    { icon: Award, title: { ar: 'ضمان الجودة', en: 'Quality Assurance' } },
    { icon: Handshake, title: { ar: 'شراكات طويلة الأمد', en: 'Long-Term Partnerships' } }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          {title[language as 'ar' | 'en']}
        </h2>
        <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {strengths.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center hover:bg-white/10 transition-colors group cursor-default shadow-xl"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 group-hover:text-green-300" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                {item.title[language as 'ar' | 'en']}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
