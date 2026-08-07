import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Download, FileText, FileBadge } from 'lucide-react';

export default function DownloadCenter() {
  const { language } = useLanguage();

  const title = { ar: 'مركز التحميل', en: 'Download Center' };

  const documents = [
    { icon: FileText, title: { ar: 'ملف الشركة التعريفي', en: 'Company Profile' } },
    { icon: FileBadge, title: { ar: 'الشهادات والاعتمادات', en: 'Certificates & Accreditations' } },
    { icon: FileText, title: { ar: 'كتالوج المنتجات', en: 'Product Catalogues' } },
    { icon: FileText, title: { ar: 'الهوية المؤسسية', en: 'Corporate Identity' } },
  ];

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title[language as 'ar' | 'en']}
          </h1>
          <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex-grow">
                  {doc.title[language as 'ar' | 'en']}
                </h3>
                <button className="flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 bg-green-50 px-4 py-2 rounded-full w-full justify-center transition-colors">
                  <Download className="w-4 h-4" />
                  {language === 'ar' ? 'تحميل' : 'Download'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
