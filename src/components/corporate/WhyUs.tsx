import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe2, Truck, Map, Warehouse, Users, Award, Handshake, ArrowRight, ArrowLeft } from 'lucide-react';

export function WhyUs() {
  const { language, isRTL } = useLanguage();
  
  const title = { ar: 'لماذا روافد الجنوب؟', en: 'Why Rawafed Al-Janoob?' };
  
  const strengths = [
    { 
      icon: Globe2, 
      title: { ar: 'علامات عالمية', en: 'International Brands' }
    },
    { 
      icon: Truck, 
      title: { ar: 'شبكة لوجستية', en: 'Strong Logistics' }
    },
    { 
      icon: Map, 
      title: { ar: 'تغطية شاملة', en: 'Nationwide Coverage' }
    },
    { 
      icon: Warehouse, 
      title: { ar: 'مستودعات حديثة', en: 'Modern Warehouses' }
    },
    { 
      icon: Users, 
      title: { ar: 'فريق محترف', en: 'Professional Team' }
    },
    { 
      icon: Award, 
      title: { ar: 'ضمان الجودة', en: 'Quality Assurance' }
    },
    { 
      icon: Handshake, 
      title: { ar: 'شراكات مستدامة', en: 'Long-Term Partnerships' }
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

      <div className="flex flex-col gap-8 max-w-7xl mx-auto relative z-10">
        
        {/* Main Card: Exclusive Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden relative group min-h-[300px] flex flex-col justify-end p-8 sm:p-12"
        >
          <img src="https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723389/about-team.jpg.jpg" alt="Exclusive Partnerships" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <ShieldCheck className="absolute top-8 rtl:left-8 ltr:right-8 w-24 h-24 opacity-20 text-green-400 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700 z-10" />
          
          <div className="relative z-10 flex items-center gap-4">
             <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
               <ShieldCheck className="w-8 h-8 text-green-400" />
             </div>
             <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md">
               {language === 'ar' ? 'شراكات حصرية' : 'Exclusive Partnerships'}
             </h3>
          </div>
        </motion.div>

        {/* Secondary Strengths (Horizontal scroll on mobile, grid on desktop) */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 xl:grid-cols-7 gap-4 pb-4 snap-x snap-mandatory hide-scrollbar">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[200px] sm:w-[220px] lg:w-auto relative group"
              >
                <div className="backdrop-blur-md border border-white/5 rounded-2xl p-6 bg-black/40 hover:bg-gradient-to-br hover:from-green-900/30 hover:to-black/60 hover:border-green-500/30 shadow-xl hover:shadow-green-500/10 transition-all duration-300 flex flex-col items-center text-center h-full gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-500/20 group-hover:border-green-500/40 transition-all duration-500 relative z-10">
                    <Icon className="w-7 h-7 text-green-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-white relative z-10 drop-shadow-sm group-hover:-translate-y-0.5 transition-transform duration-300">
                    {item.title[language as 'ar' | 'en']}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
