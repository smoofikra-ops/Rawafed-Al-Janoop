import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function Careers() {
  const { language } = useLanguage();

  const title = { ar: 'انضم إلى فريقنا', en: 'Join Our Team' };
  const subtitle = { ar: 'فرص التوظيف', en: 'Employment Opportunities' };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title[language as 'ar' | 'en']}
          </h1>
          <p className="text-xl text-gray-500 mb-8">{subtitle[language as 'ar' | 'en']}</p>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            {language === 'ar' 
              ? 'نحن نبحث دائماً عن الكفاءات والمواهب التي تشاركنا شغفنا ورؤيتنا للتميز في قطاع التوزيع.'
              : 'We are always looking for talents who share our passion and vision for excellence in the distribution sector.'}
          </p>
          <div className="inline-block p-6 bg-green-50 rounded-2xl border border-green-100">
             <p className="text-green-800 font-medium">
               {language === 'ar' ? 'يرجى إرسال سيرتك الذاتية إلى:' : 'Please send your CV to:'} <br/>
               <a href="mailto:hr@rawafedj.com" className="font-bold text-green-600 hover:underline">hr@rawafedj.com</a>
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
