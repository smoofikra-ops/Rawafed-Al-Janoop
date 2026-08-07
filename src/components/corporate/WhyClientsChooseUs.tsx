import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Clock, Users2, ShieldCheck, ThumbsUp, Map } from 'lucide-react';

export function WhyClientsChooseUs() {
  const { language } = useLanguage();

  const title = { ar: 'لماذا يختارنا العملاء؟', en: 'Why Clients Choose Us?' };

  const reasons = [
    { icon: Star, title: { ar: 'الجودة العالية', en: 'High Quality' } },
    { icon: ShieldCheck, title: { ar: 'الموثوقية التامة', en: 'Complete Reliability' } },
    { icon: Map, title: { ar: 'توزيع وطني شامل', en: 'Nationwide Distribution' } },
    { icon: Clock, title: { ar: 'سرعة التوصيل', en: 'Fast Delivery' } },
    { icon: CheckCircle2, title: { ar: 'شراكات موثوقة', en: 'Trusted Partnerships' } },
    { icon: Users2, title: { ar: 'فريق عمل محترف', en: 'Professional Team' } }
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

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 sm:p-8 flex items-center gap-4 hover:bg-black/60 transition-colors shadow-xl group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                <Icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {reason.title[language as 'ar' | 'en']}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
