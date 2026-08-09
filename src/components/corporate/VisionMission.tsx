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
      },
      className: "md:col-span-2 bg-gradient-to-br from-green-900/40 to-black/60",
      delay: 0.1
    },
    {
      id: 'mission',
      icon: Target,
      title: { ar: 'رسالتنا', en: 'Our Mission' },
      description: { 
        ar: 'توفير منتجات غذائية عالية الجودة بأسعار تنافسية، مع ضمان التوزيع الفعال والموثوق.', 
        en: 'Providing high-quality food products at competitive prices, while ensuring efficient and reliable distribution.' 
      },
      className: "md:col-span-3 bg-black/40",
      delay: 0.2
    },
    {
      id: 'values',
      icon: Gem,
      title: { ar: 'قيمنا', en: 'Our Values' },
      description: { 
        ar: 'الجودة، الموثوقية، النزاهة، الشراكة المستدامة، ورضا العملاء.', 
        en: 'Quality, Reliability, Integrity, Sustainable Partnership, and Customer Satisfaction.' 
      },
      className: "md:col-span-3 bg-black/40",
      delay: 0.3
    },
    {
      id: 'goals',
      icon: Flag,
      title: { ar: 'أهدافنا', en: 'Our Goals' },
      description: { 
        ar: 'توسيع شبكة التوزيع، تعزيز محفظة العلامات التجارية، وتطوير الكفاءات التشغيلية.', 
        en: 'Expanding the distribution network, enhancing the brand portfolio, and developing operational efficiencies.' 
      },
      className: "md:col-span-2 bg-gradient-to-br from-black/60 to-green-900/20",
      delay: 0.4
    }
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 xl:gap-8 max-w-7xl mx-auto">
        {cards.map((card) => {
          const Icon = card.icon;
          const isLarge = card.className.includes('col-span-3');
          // On mobile, to achieve Row 1: Small | Large and Row 2: Large | Small
          // Mission is Large (col-span-1 on mobile?), Vision is Small.
          // Wait, if grid-cols-2, we can't easily do different widths unless one is col-span-1 and one is col-span-2... but the requirement says 2 cards per row.
          // So both are col-span-1 on mobile. But we can change their heights to create rhythm!
          return (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: card.delay, ease: [0.23, 1, 0.32, 1] }}
              className={`backdrop-blur-xl border border-white/10 p-4 sm:p-12 rounded-2xl sm:rounded-[2.5rem] shadow-2xl hover:-translate-y-2 hover:shadow-green-500/20 transition-all duration-500 group flex flex-col relative overflow-hidden ${card.className} ${isLarge ? 'min-h-[220px] md:min-h-[250px]' : 'min-h-[160px] md:min-h-[200px]'}`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-green-500/20 transition-colors duration-700"></div>
              
              <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-8 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 relative z-10">
                <Icon className="w-6 h-6 sm:w-10 sm:h-10 text-green-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-sm relative z-10">
                {card.title[language as 'ar' | 'en']}
              </h3>
              <p className="text-[12px] sm:text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors flex-grow relative z-10 font-medium">
                {card.description[language as 'ar' | 'en']}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
