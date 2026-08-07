import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export default function Products() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-12 border border-gray-100 text-center"
        >
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <Package className="w-12 h-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {language === 'ar' ? 'المنتجات' : 'Products'}
          </h1>
          <p className="text-2xl text-gray-500 mb-8 font-medium">
            {language === 'ar' ? 'قريباً...' : 'Coming Soon...'}
          </p>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded mb-8"></div>
          <p className="text-gray-600 leading-relaxed text-lg">
            {language === 'ar' 
              ? 'نعمل حالياً على تحديث قائمة منتجاتنا لنقدم لكم الأفضل. يرجى العودة لاحقاً.' 
              : 'We are currently updating our product list to bring you the best. Please check back later.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
