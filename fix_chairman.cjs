const fs = require('fs');

const code = `import React, { useMemo } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';

export function ChairmanMessage() {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  
  const content = {
    title: { ar: 'كلمة رئيس مجلس الإدارة', en: 'Chairman Message' },
    name: { ar: 'علي احمد دهباش', en: 'Ali Ahmed Dahbash' },
    button: { ar: 'اقرأ الكلمة الكاملة', en: 'Read Full Message' }
  };

  const segmentsAr = [
    { text: 'في شركة روافد الجنوب للتجارة، نفخر برحلتنا التي بدأناها برؤية ' },
    { words: ['طموحة', 'واعدة', 'رائدة', 'طموحة'] },
    { text: ' لتطوير قطاع توزيع الأغذية في المملكة، مستندين بعد توفيق الله إلى شراكاتنا الاستراتيجية والتزامنا بـ ' },
    { words: ['الجودة', 'الإتقان', 'التميز', 'الجودة'] },
    { text: ' في كل مرحلة من مراحل أعمالنا، واضعين ' },
    { words: ['الثقة', 'المصداقية', 'الالتزام', 'الثقة'] },
    { text: ' أساسًا لعلاقتنا مع شركائنا وعملائنا، ومواصلين العمل نحو مستقبل أكثر ' },
    { words: ['نموًا', 'تطورًا', 'استدامةً', 'نموًا'] },
    { text: '.' }
  ];

  const segmentsEn = [
    { text: 'At Rawafed Al-Janoob Trading Company, we are proud of our journey, which began with an ' },
    { words: ['ambitious', 'promising', 'leading', 'ambitious'] },
    { text: ' vision to develop the food distribution sector in the Kingdom, relying, after God\\'s success, on our strategic partnerships and commitment to ' },
    { words: ['quality', 'perfection', 'excellence', 'quality'] },
    { text: ' at every stage of our operations, placing ' },
    { words: ['trust', 'credibility', 'commitment', 'trust'] },
    { text: ' as the foundation of our relationships with partners and clients, and continuing to work towards a more ' },
    { words: ['growth-oriented', 'developed', 'sustainable', 'growth-oriented'] },
    { text: ' future.' }
  ];

  // Mobile speed adjustments
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const speed = isMobile ? 30 : 45;
  const wordPause = isMobile ? 600 : 800;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      <div className="flex flex-col items-center text-center max-w-7xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 sm:p-16 shadow-2xl overflow-hidden relative">
        <Quote className="absolute top-8 right-8 w-32 h-32 text-white/5 rotate-180 pointer-events-none" />
        
        <div className="flex-1 space-y-8 relative z-10 w-full">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
              {content.title[language as 'ar' | 'en']}
            </h2>
            <div className="h-1 w-24 bg-green-500 rounded mx-auto"></div>
          </div>
          
          <div className="text-lg md:text-2xl text-gray-300 leading-relaxed font-medium max-w-4xl mx-auto min-h-[200px] md:min-h-[160px]">
            <TypewriterEffect 
              key={language}
              segments={language === 'ar' ? segmentsAr : segmentsEn} 
              speed={speed}
              wordPause={wordPause}
              className="inline"
              wordClassName="text-green-400 font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.3)] transition-all duration-300 mx-1"
            />
          </div>
          
          <div className="pt-4">
            <h3 className="text-xl font-bold text-white mb-1">{content.name[language as 'ar' | 'en']}</h3>
            <p className="text-green-500 font-medium">{language === 'ar' ? 'رئيس مجلس الإدارة' : 'Chairman'}</p>
          </div>
          
          <div className="pt-4 flex justify-center">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors group text-lg bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10"
            >
              {content.button[language as 'ar' | 'en']}
              <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/corporate/ChairmanMessage.tsx', code);
