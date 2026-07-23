import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Map } from 'lucide-react';
import { branches } from '../data';

export default function Branches() {
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
            {t('home.ourBranches')}
          </motion.h1>
          <div className="h-1 w-24 bg-primary-600 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl hover:border-primary-200 hover:scale-105 transition-all duration-300 group"
            >
              <div className="h-80 w-full bg-gray-100 relative overflow-hidden">
                {branch.iframe ? (
                  <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full group-hover:scale-105 transition-transform duration-500" dangerouslySetInnerHTML={{ __html: branch.iframe }} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Map className="w-16 h-16" />
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{branch.name[language as 'ar' | 'en']}</h2>
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                      {branch.city[language as 'ar' | 'en']}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{language === 'ar' ? 'العنوان' : 'Address'}</p>
                      <p className="text-gray-600">{branch.address[language as 'ar' | 'en']}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</p>
                      <p className="text-gray-600" dir="ltr">{branch.hours[language as 'ar' | 'en']}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{language === 'ar' ? 'رقم التواصل' : 'Phone Number'}</p>
                      <p className="text-gray-600" dir="ltr">{branch.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
