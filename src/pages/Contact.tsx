import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { branches, companyInfo } from '../data';

export default function Contact() {
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
            {t('common.contactUs')}
          </motion.h1>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded mb-6"></div>
          <p className="text-xl text-gray-600">
            {language === 'ar' 
              ? 'نسعد بتواصلكم معنا عبر القنوات التالية أو بزيارة فروعنا' 
              : 'We are happy to communicate with you through the following channels or by visiting our branches'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <Phone className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'ar' ? 'الهاتف' : 'Phone'}</h3>
            <a href={`tel:${companyInfo.phone}`} className="text-gray-600 hover:text-green-600 text-lg font-medium" dir="ltr">
              {companyInfo.phone}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <Mail className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h3>
            <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-green-600 text-lg font-medium">
              {companyInfo.email}
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
              <Globe className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}</h3>
            <a href="https://rawafedj.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 text-lg font-medium" dir="ltr">
              www.rawafedj.com
            </a>
          </motion.div>
        </div>

        {/* Branches */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {language === 'ar' ? 'فروعنا ومستودعاتنا' : 'Our Branches & Warehouses'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl flex flex-col"
              >
                <div className="h-48 bg-gray-100 w-full relative">
                   {branch.iframe ? (
                     <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full" dangerouslySetInnerHTML={{ __html: branch.iframe }} />
                   ) : (
                     <div className="flex items-center justify-center w-full h-full text-gray-400">
                       <MapPin className="w-12 h-12 opacity-50" />
                     </div>
                   )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      branch.type === 'headquarters' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {branch.type === 'headquarters' 
                        ? (language === 'ar' ? 'المركز الرئيسي' : 'Headquarters')
                        : (language === 'ar' ? 'فرع' : 'Branch')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{branch.name[language as 'ar' | 'en']}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{branch.address[language as 'ar' | 'en']} - {branch.city[language as 'ar' | 'en']}</span>
                    </div>
                    {branch.phones?.map((phone, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                        <a href={`tel:${phone}`} className="text-sm text-gray-600 hover:text-green-600" dir="ltr">{phone}</a>
                      </div>
                    ))}
                    {branch.hours && (
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{branch.hours[language as 'ar' | 'en']}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
