import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Globe, Truck, Map, Package, TrendingUp, Award, ShieldCheck, Store } from 'lucide-react';
import { services } from '../data';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Truck,
  Map,
  Package,
  TrendingUp,
  Award,
  ShieldCheck,
  Store
};

export default function Services() {
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
            {t('home.ourServices')}
          </motion.h1>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  <Icon className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title[language as 'ar' | 'en']}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{service.description[language as 'ar' | 'en']}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
