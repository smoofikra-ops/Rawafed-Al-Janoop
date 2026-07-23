import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'motion/react';
import { companyInfo } from '../data';

export default function About() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {t('home.aboutUs')}
          </motion.h1>
          <div className="h-1 w-24 bg-primary-600 mx-auto rounded"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-md flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{language === 'ar' ? 'تاريخنا وانطلاقتنا' : 'Our History'}</h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {companyInfo.about?.[language as 'ar' | 'en']}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 w-full"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Rawafed Al Janoob" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
