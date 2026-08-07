import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { companyInfo } from '../data';
import { Building2, TrendingUp, Target, ShieldCheck, MapPin, Truck } from 'lucide-react';

export default function About() {
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
            {t('home.aboutUs')}
          </motion.h1>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-xl flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{language === 'ar' ? 'نظرة عامة على الشركة' : 'Company Overview'}</h2>
            <div className="flex items-center gap-3 mb-6 bg-green-50 w-fit px-4 py-2 rounded-full border border-green-100">
               <Building2 className="w-5 h-5 text-green-600" />
               <span className="text-green-800 font-bold">{language === 'ar' ? 'تأسست عام 2018' : 'Established in 2018'}</span>
            </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
             <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-green-600" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'ar' ? 'أنشطة الأعمال' : 'Business Activities'}</h3>
             <p className="text-gray-600 leading-relaxed">
               {language === 'ar' 
                 ? 'نتخصص في استيراد وتوزيع السلع الاستهلاكية، المواد الغذائية الأساسية، والحلويات، مع تقديم خدمات لوجستية متكاملة لدعم سلاسل الإمداد للعلامات التجارية.' 
                 : 'We specialize in importing and distributing FMCG, basic food commodities, and sweets, providing integrated logistics services to support brand supply chains.'}
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
             <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-green-600" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'ar' ? 'التواجد في السوق' : 'Market Presence'}</h3>
             <p className="text-gray-600 leading-relaxed">
               {language === 'ar' 
                 ? 'نغطي بشبكتنا التوزيعية الموثوقة كافة مناطق الرياض، جازان، وعسير، لضمان وصول المنتجات إلى كافة نقاط البيع بكفاءة عالية وفي الوقت المحدد.' 
                 : 'Our reliable distribution network covers all areas of Riyadh, Jazan, and Asir, ensuring products reach all points of sale with high efficiency and on time.'}
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
             <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-green-600" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">{language === 'ar' ? 'نقاط القوة' : 'Company Strengths'}</h3>
             <p className="text-gray-600 leading-relaxed">
               {language === 'ar' 
                 ? 'نمتلك شراكات استراتيجية قوية، وفريق عمل احترافي مدرب، وأسطول نقل مجهز، ومستودعات حديثة، مما يجعلنا الشريك الموثوق للعلامات التجارية العالمية.' 
                 : 'We possess strong strategic partnerships, a professionally trained team, an equipped transport fleet, and modern warehouses, making us a trusted partner for global brands.'}
             </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
