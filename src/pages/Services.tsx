import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { services } from '../data';
import { Package, Truck, TrendingUp, ShieldCheck, Box, BarChart3, Star, Map } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Package,
  Truck,
  TrendingUp,
  ShieldCheck,
  Box,
  BarChart3,
  Star,
  Map
};

export default function Services() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h1>
          <p className="text-xl text-gray-600">
            {language === 'ar' 
              ? 'حلول لوجستية متكاملة مصممة خصيصاً لتلبية احتياجات أعمالك'
              : 'Comprehensive logistics solutions tailored to meet your business needs'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Package;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/30 transition-all duration-500 group flex flex-col relative overflow-hidden h-full"
              >
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-500"></div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-green-500/10 group-hover:scale-110 transition-all duration-500 relative z-10 border border-gray-100 group-hover:border-green-500/20">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  {service.title[language as 'ar' | 'en']}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow relative z-10">
                  {service.description[language as 'ar' | 'en']}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
