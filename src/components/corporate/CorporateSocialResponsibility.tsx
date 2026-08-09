import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { HeartHandshake, Leaf, Users, GraduationCap } from 'lucide-react';

export function CorporateSocialResponsibility() {
  const { language } = useLanguage();
  const title = { ar: 'المسؤولية المجتمعية', en: 'Corporate Social Responsibility' };
  
  const initiatives = [
    {
      icon: Leaf,
      title: { ar: 'الاستدامة البيئية', en: 'Environmental Sustainability' },
      description: { ar: 'تقليل البصمة الكربونية من خلال تحسين مسارات أسطول النقل واعتماد ممارسات صديقة للبيئة.', en: 'Reducing carbon footprint through optimized transport fleet routes and adopting eco-friendly practices.' },
      className: "col-span-2 md:col-span-2 md:row-span-2 bg-gradient-to-br from-green-900/40 to-black/60",
      isPrimary: true
    },
    {
      icon: HeartHandshake,
      title: { ar: 'دعم المجتمع', en: 'Community Support' },
      description: { ar: 'المشاركة الفعالة في رعاية الفعاليات والمبادرات الخيرية في مختلف المناطق.', en: 'Active participation in sponsoring events and charitable initiatives in various regions.' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-black/40",
      isPrimary: false
    },
    {
      icon: Users,
      title: { ar: 'التوطين', en: 'Job Localization' },
      description: { ar: 'دعم وتمكين الكفاءات الوطنية الشابة في قطاع المبيعات والتوزيع.', en: 'Supporting and empowering young national talents in the sales and distribution sector.' },
      className: "col-span-1 md:col-span-1 md:row-span-1 bg-black/40",
      isPrimary: false
    },
    {
      icon: GraduationCap,
      title: { ar: 'التطوير', en: 'Continuous Development' },
      description: { ar: 'توفير برامج تدريبية لرفع كفاءة العاملين في القطاع.', en: 'Providing training programs to raise the efficiency of workers in the sector.' },
      className: "col-span-2 md:col-span-2 md:row-span-1 bg-gradient-to-r from-black/60 to-green-900/20 md:flex-row items-center",
      isPrimary: false
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

      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(140px,auto)] gap-3 md:gap-6 max-w-6xl mx-auto relative z-10">
        {initiatives.map((item, index) => {
          const Icon = item.icon;
          const isRowLayout = item.className.includes('md:flex-row');
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 group overflow-hidden relative cursor-default ${item.className} ${item.isPrimary ? 'p-6 sm:p-12 flex flex-col justify-end min-h-[200px] md:min-h-[220px]' : isRowLayout ? 'p-4 sm:p-8 flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-start justify-center items-center' : 'p-4 sm:p-8 flex flex-col justify-center text-center items-center'}`}
            >
              {item.isPrimary && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-green-500/20 transition-colors duration-700 pointer-events-none"></div>
              )}
              {isRowLayout && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors duration-700 pointer-events-none"></div>
              )}
              
              <div className={`${item.isPrimary ? 'w-16 h-16 md:w-20 md:h-20 mb-auto mt-2 md:mt-4' : isRowLayout ? 'w-10 h-10 md:w-16 md:h-16 shrink-0 mb-2 md:mb-0' : 'w-10 h-10 md:w-14 md:h-14 mb-2 md:mb-4'} rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 relative z-10`}>
                <Icon className={`${item.isPrimary ? 'w-8 h-8 md:w-10 md:h-10' : 'w-5 h-5 md:w-7 md:h-7'} text-green-400 group-hover:text-white transition-colors`} />
              </div>
              
              <div className="relative z-10 flex-1 w-full">
                <h3 className={`${item.isPrimary ? 'text-2xl sm:text-4xl font-bold text-white mb-2 md:mb-4' : 'text-[11px] sm:text-lg md:text-2xl font-bold text-white mb-1 md:mb-3'} drop-shadow-sm`}>
                  {item.title[language as 'ar' | 'en']}
                </h3>
                <p className={`${item.isPrimary ? 'text-sm md:text-lg sm:text-xl' : 'hidden md:block text-sm md:text-base'} text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors`}>
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
