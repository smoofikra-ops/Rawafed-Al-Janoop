import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function DistributionPartner() {
  const { language } = useLanguage();

  const title = { ar: 'كن شريك توزيع', en: 'Become a Distribution Partner' };
  const subtitle = { ar: 'للشركات المصنعة والعلامات التجارية', en: 'For Manufacturers and Brands' };

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
              ? 'ندعو الشركات المصنعة والعلامات التجارية الدولية لتعيين شركة روافد الجنوب للتجارة كموزع رسمي في المملكة العربية السعودية للاستفادة من شبكتنا اللوجستية القوية وتغطيتنا الواسعة.'
              : 'We invite manufacturers and international brands to appoint Rawafed Al Janoob Trading Company as an official distributor in Saudi Arabia to benefit from our strong logistics network and wide coverage.'}
          </p>
          <div className="inline-block p-6 bg-green-50 rounded-2xl border border-green-100">
             <p className="text-green-800 font-medium">
               {language === 'ar' ? 'لبحث فرص الشراكة، يرجى التواصل عبر:' : 'To discuss partnership opportunities, please contact us at:'} <br/>
               <a href="mailto:info@rawafedj.com" className="font-bold text-green-600 hover:underline">info@rawafedj.com</a>
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
