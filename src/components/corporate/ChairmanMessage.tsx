import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';

export function ChairmanMessage() {
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const content = {
    title: { ar: 'كلمة رئيس مجلس الإدارة', en: 'Chairman Message' },
    name: { ar: 'رئيس مجلس الإدارة', en: 'Chairman of the Board' },
    message: { 
      ar: 'نحن في شركة روافد الجنوب للتجارة، نفخر برحلتنا التي بدأناها برؤية طموحة لتطوير قطاع توزيع الأغذية في المملكة. بفضل الله ثم بشراكاتنا الاستراتيجية والتزامنا بالجودة، تمكنا من بناء شبكة توزيع قوية وموثوقة.', 
      en: 'At Rawafed Al Janoob Trading Company, we take pride in our journey, which began with an ambitious vision to develop the food distribution sector in the Kingdom. Thanks to our strategic partnerships and commitment to quality, we have built a strong and reliable distribution network.' 
    },
    button: { ar: 'اقرأ الكلمة الكاملة', en: 'Read Full Message' }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 sm:p-16 shadow-2xl overflow-hidden relative">
        <Quote className="absolute top-8 right-8 w-32 h-32 text-white/5 rotate-180" />
        
        <div className="flex-1 space-y-8 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-md">
              {content.title[language as 'ar' | 'en']}
            </h2>
            <div className="h-1 w-24 bg-green-500 rounded"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
            {content.message[language as 'ar' | 'en']}
          </p>
          
          <div className="pt-4">
            <h3 className="text-xl font-bold text-white mb-1">{content.name[language as 'ar' | 'en']}</h3>
            <p className="text-green-500 font-medium">{language === 'ar' ? 'رئيس مجلس الإدارة' : 'Chairman'}</p>
          </div>
          
          <div className="pt-4">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors group text-lg bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10"
            >
              {content.button[language as 'ar' | 'en']}
              <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        <div className="w-full max-w-md lg:w-1/3 shrink-0">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-gray-800 flex items-center justify-center">
             {/* Placeholder for executive portrait */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
               alt="Chairman"
               className="w-full h-full object-cover opacity-80"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
