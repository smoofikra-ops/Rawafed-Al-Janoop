import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { companyInfo } from '../data';
import { Phone, Globe, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function BranchContactInfo() {
  const { language } = useLanguage();

  const getAnimationProps = (index: number) => {
    return {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-10%" },
      transition: { duration: 0.8, delay: index * 0.1, ease: 'easeOut' }
    };
  };

  const contactCards = [
    {
      id: 'phone',
      icon: Phone,
      label: { ar: 'رقم الهاتف', en: 'Phone Number' },
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone}`,
      dir: "ltr" as const
    },
    {
      id: 'email',
      icon: Mail,
      label: { ar: 'البريد الإلكتروني', en: 'Email Address' },
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      dir: "ltr" as const
    },
    {
      id: 'website',
      icon: Globe,
      label: { ar: 'الموقع الإلكتروني', en: 'Website' },
      value: 'www.rawafedj.com',
      href: 'https://www.rawafedj.com',
      dir: "ltr" as const,
      target: "_blank"
    }
  ];

  return (
    <div className="mt-8 sm:mt-16 w-full max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {contactCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div 
              key={card.id} 
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 sm:p-8 shadow-xl flex flex-col items-center text-center justify-center group hover:bg-black/60 transition-all duration-500 hover:border-green-500/30 hover:-translate-y-1"
              {...getAnimationProps(index)}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-500">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-sm sm:text-base font-bold text-gray-400 mb-2 uppercase tracking-wider">
                {card.label[language as 'ar' | 'en']}
              </h4>
              <a 
                href={card.href} 
                target={card.target}
                rel={card.target === '_blank' ? "noopener noreferrer" : undefined}
                className="text-lg sm:text-2xl font-bold text-white group-hover:text-green-400 transition-colors w-fit mx-auto" 
                dir={card.dir}
              >
                {card.value}
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
