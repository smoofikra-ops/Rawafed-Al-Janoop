import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Eye, Target, Gem, Flag } from 'lucide-react';

export function VisionMission() {
  const { language } = useLanguage();

  const cards = [
    {
      id: 'vision',
      icon: Eye,
      title: { ar: 'رؤيتنا', en: 'Our Vision' },
      description: { 
        ar: 'الريادة في قطاع توزيع السلع الاستهلاكية، لنكون الخيار الأول للعملاء والموردين في المملكة.', 
        en: 'Leadership in the FMCG distribution sector, to be the first choice for customers and suppliers in the Kingdom.' 
      }
    },
    {
      id: 'mission',
      icon: Target,
      title: { ar: 'رسالتنا', en: 'Our Mission' },
      description: { 
        ar: 'توفير منتجات غذائية عالية الجودة بأسعار تنافسية، مع ضمان التوزيع الفعال والموثوق.', 
        en: 'Providing high-quality food products at competitive prices, while ensuring efficient and reliable distribution.' 
      }
    },
    {
      id: 'values',
      icon: Gem,
      title: { ar: 'قيمنا', en: 'Our Values' },
      description: { 
        ar: 'الجودة، الموثوقية، النزاهة، الشراكة المستدامة، ورضا العملاء.', 
        en: 'Quality, Reliability, Integrity, Sustainable Partnership, and Customer Satisfaction.' 
      }
    },
    {
      id: 'goals',
      icon: Flag,
      title: { ar: 'أهدافنا', en: 'Our Goals' },
      description: { 
        ar: 'توسيع شبكة التوزيع، تعزيز محفظة العلامات التجارية، وتطوير الكفاءات التشغيلية.', 
        en: 'Expanding the distribution network, enhancing the brand portfolio, and developing operational efficiencies.' 
      }
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:bg-black/60 hover:-translate-y-2 transition-all duration-500 group flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-500">
                <Icon className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-sm">
                {card.title[language as 'ar' | 'en']}
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                {card.description[language as 'ar' | 'en']}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
