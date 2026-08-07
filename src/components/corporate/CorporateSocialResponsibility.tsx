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
      description: { ar: 'تقليل البصمة الكربونية من خلال تحسين مسارات أسطول النقل.', en: 'Reducing carbon footprint through optimized transport fleet routes.' }
    },
    {
      icon: HeartHandshake,
      title: { ar: 'دعم المجتمع المحلي', en: 'Local Community Support' },
      description: { ar: 'المشاركة الفعالة في رعاية الفعاليات والمبادرات الخيرية في جنوب المملكة.', en: 'Active participation in sponsoring events and charitable initiatives in the southern region.' }
    },
    {
      icon: Users,
      title: { ar: 'توطين الوظائف', en: 'Job Localization' },
      description: { ar: 'دعم وتمكين الكفاءات الوطنية الشابة في قطاع المبيعات والتوزيع.', en: 'Supporting and empowering young national talents in the sales and distribution sector.' }
    },
    {
      icon: GraduationCap,
      title: { ar: 'التطوير المستمر', en: 'Continuous Development' },
      description: { ar: 'توفير برامج تدريبية لرفع كفاءة العاملين في القطاع.', en: 'Providing training programs to raise the efficiency of workers in the sector.' }
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {initiatives.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title[language as 'ar' | 'en']}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{item.description[language as 'ar' | 'en']}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
