import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export const AnnouncementBar = () => {
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const messagesAr = [
    "نوفر حلول التوزيع والتوريد للمتاجر والمنشآت في مختلف مناطق المملكة",
    "تواصل معنا للحصول على عرض سعر مخصص",
    "شراكات موثوقة وخدمات احترافية لدعم نمو أعمالك",
    "اكتشف علاماتنا التجارية ومنتجاتنا"
  ];

  const messagesEn = [
    "We provide distribution and supply solutions for stores and establishments across the Kingdom",
    "Contact us to get a custom quote",
    "Reliable partnerships and professional services to support your business growth",
    "Discover our brands and products"
  ];

  const messages = language === 'ar' ? messagesAr : messagesEn;
  
  // Combine with separators
  const combinedText = messages.join(" ● ");

  return (
    <div 
      className="bg-primary-600 text-white text-sm font-medium py-2 overflow-hidden relative z-[60]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex whitespace-nowrap">
        {/* We use two identical text blocks to create a seamless infinite marquee */}
        <div 
          className={`flex-shrink-0 px-4 flex items-center ${isPaused ? 'animate-none' : 'animate-marquee'} motion-reduce:animate-none`}
        >
          {combinedText} <span className="mx-4">●</span>
        </div>
        <div 
          className={`flex-shrink-0 px-4 flex items-center ${isPaused ? 'animate-none' : 'animate-marquee'} motion-reduce:animate-none`}
          aria-hidden="true"
        >
          {combinedText} <span className="mx-4">●</span>
        </div>
      </div>
    </div>
  );
};
