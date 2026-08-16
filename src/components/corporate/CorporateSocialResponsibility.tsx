import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, TrendingUp } from 'lucide-react';

export function CorporateSocialResponsibility() {
  const { language } = useLanguage();
  const title = { ar: 'المسؤولية المجتمعية', en: 'Corporate Social Responsibility' };
  
  const items = [
    { 
      icon: Leaf, 
      title: { ar: 'الاستدامة البيئية', en: 'Environmental Sustainability' },
      description: { ar: 'نلتزم بتطبيق ممارسات صديقة للبيئة لتقليل البصمة الكربونية في جميع عملياتنا التشغيلية.', en: 'Committed to implementing eco-friendly practices to reduce our carbon footprint in all operations.' }
    },
    { 
      icon: Heart, 
      title: { ar: 'دعم المجتمع', en: 'Community Support' },
      description: { ar: 'نساهم بفعالية في المبادرات الاجتماعية والخيرية لدعم الفئات المحتاجة وتعزيز التكافل.', en: 'Actively contributing to social and charitable initiatives to support those in need and foster solidarity.' }
    },
    { 
      icon: Users, 
      title: { ar: 'التوطين', en: 'Job Localization' },
      description: { ar: 'ندعم الكفاءات الوطنية من خلال توفير فرص عمل وتطوير مهارات الشباب السعودي.', en: 'Supporting national talents by providing job opportunities and developing the skills of Saudi youth.' }
    },
    { 
      icon: TrendingUp, 
      title: { ar: 'التطوير', en: 'Continuous Development' },
      description: { ar: 'الاستثمار في تدريب وتطوير فريق العمل لضمان تقديم أعلى مستويات الخدمة لعملائنا.', en: 'Investing in training and developing our team to ensure providing the highest levels of service.' }
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32 relative">
      <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-green-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      
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
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="snap-center shrink-0 w-[260px] sm:w-[320px] lg:w-auto relative group"
            >
              <div className="backdrop-blur-md bg-black/40 border border-white/5 rounded-3xl p-6 sm:p-8 hover:bg-gradient-to-br hover:from-green-900/30 hover:to-black/60 hover:border-green-500/30 shadow-xl hover:shadow-green-500/10 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-500 relative z-10">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-green-400 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 relative z-10 drop-shadow-sm group-hover:-translate-y-1 transition-transform duration-300">
                  {item.title[language as 'ar' | 'en']}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors relative z-10 flex-grow">
                  {item.description[language as 'ar' | 'en']}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
