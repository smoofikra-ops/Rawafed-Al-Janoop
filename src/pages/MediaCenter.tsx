import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function MediaCenter() {
  const { language } = useLanguage();

  const title = { ar: 'المركز الإعلامي', en: 'Media Center' };
  const subtitle = { ar: 'أخبار وفعاليات الشركة', en: 'Company News & Events' };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title[language as 'ar' | 'en']}
          </h1>
          <p className="text-xl text-gray-500">{subtitle[language as 'ar' | 'en']}</p>
        </motion.div>
        
        <div className="flex items-center justify-center min-h-[40vh]">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-lg">
             <p className="text-gray-500 font-medium text-lg">
               {language === 'ar' ? 'ترقبوا قريباً تغطيتنا لأحدث الأخبار والمعارض والإطلاقات الجديدة.' : 'Stay tuned for our coverage of the latest news, exhibitions, and product launches.'}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
