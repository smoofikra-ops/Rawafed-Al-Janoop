import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { branches } from '../data';
import { MapPin, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function BranchContactInfo() {
  const { language } = useLanguage();

  const getAnimationProps = (index: number) => {
    switch(index) {
      case 0: return { initial: { opacity: 0, x: -50, y: -50 }, animate: { opacity: 1, x: 0, y: 0 } }; // Top left
      case 1: return { initial: { opacity: 0, x: 50, y: -50 }, animate: { opacity: 1, x: 0, y: 0 } };  // Top right
      case 2: return { initial: { opacity: 0, x: -50, y: 50 }, animate: { opacity: 1, x: 0, y: 0 } };  // Bottom left
      case 3: return { initial: { opacity: 0, x: 50, y: 50 }, animate: { opacity: 1, x: 0, y: 0 } };   // Bottom right
      default: return { initial: { opacity: 0 }, animate: { opacity: 1 } };
    }
  };

  return (
    <div className="mt-16 sm:mt-24 w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {branches.slice(0, 3).map((branch, index) => (
          <motion.div 
            key={branch.id} 
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl group hover:bg-black/60 transition-colors"
            {...getAnimationProps(index)}
            transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-3 bg-white/10 rounded-2xl shrink-0 group-hover:bg-primary-500/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{branch.name[language]}</h4>
                <p className="text-gray-400 mb-4 leading-relaxed font-medium">{branch.city[language]} - {branch.address[language]}</p>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 font-bold">
                    {language === 'ar' ? 'رقم الجوال:' : 'Mobile:'}
                  </span>
                  {branch.phones?.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className="text-green-400 hover:text-green-300 transition-colors font-bold tracking-wide inline-block w-fit" dir="ltr">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Card 4: Website & Email */}
        <motion.div 
          className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col gap-6 justify-center group hover:bg-black/60 transition-colors"
          {...getAnimationProps(3)}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 group-hover:bg-primary-500/20 transition-colors">
              <Globe className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
            </div>
            <div>
              <span className="block text-sm text-gray-500 font-bold mb-1">
                {language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
              </span>
              <a href="https://www.rawafedj.com" target="_blank" rel="noopener noreferrer" className="text-lg text-green-400 hover:text-green-300 transition-colors font-bold inline-block w-fit" dir="ltr">
                www.rawafedj.com
              </a>
            </div>
          </div>
          <div className="w-full h-[1px] bg-white/10"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 group-hover:bg-primary-500/20 transition-colors">
              <Mail className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
            </div>
            <div>
              <span className="block text-sm text-gray-500 font-bold mb-1">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </span>
              <a href="mailto:info@rawafedj.com" className="text-lg text-green-400 hover:text-green-300 transition-colors font-bold inline-block w-fit" dir="ltr">
                info@rawafedj.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
