import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function Suppliers() {
  const { language } = useLanguage();

  const title = { ar: 'كن مورداً لنا', en: 'Become Our Supplier' };
  const subtitle = { ar: 'تسجيل الموردين', en: 'Supplier Registration' };

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
              ? 'نحن نرحب بالتعاون مع الموردين الذين يقدمون منتجات عالية الجودة لتوسيع محفظتنا وتلبية احتياجات السوق السعودي.'
              : 'We welcome collaboration with suppliers who offer high-quality products to expand our portfolio and meet the needs of the Saudi market.'}
          </p>
          <div className="inline-block p-6 bg-green-50 rounded-2xl border border-green-100">
             <p className="text-green-800 font-medium">
               {language === 'ar' ? 'للتسجيل كمورد، يرجى التواصل عبر:' : 'To register as a supplier, please contact us at:'} <br/>
               <a href="mailto:info@rawafedj.com" className="font-bold text-green-600 hover:underline">info@rawafedj.com</a>
             </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
