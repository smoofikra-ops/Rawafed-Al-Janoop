import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { brands } from '../data';

export default function Brands() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {t('home.ourBrands')}
          </motion.h1>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="h-32 w-full flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-gray-50/50 p-4">
                <img 
                  src={brand.logo} 
                  alt={brand.name[language as 'ar' | 'en']} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                />
              </div>
              {brand.badge && (
                <div className="mb-3 text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                  {brand.badge[language as 'ar' | 'en']}
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{brand.name[language as 'ar' | 'en']}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow whitespace-pre-line">{brand.description[language as 'ar' | 'en']}</p>
              
              {brand.origin && (
                <div className="mb-4 text-sm font-medium text-gray-500">
                  {language === 'ar' ? 'بلد المنشأ: ' : 'Country of Origin: '}
                  <span className="font-semibold text-gray-800">{brand.origin[language as 'ar' | 'en']}</span>
                </div>
              )}

              <div className="flex flex-wrap justify-center gap-2 mt-auto mb-6">
                {brand.categories.map((category, idx) => (
                  <span key={idx} className="bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold border border-green-100">
                    {category[language as 'ar' | 'en']}
                  </span>
                ))}
              </div>

              <button className="w-full bg-gray-900 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300">
                {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
