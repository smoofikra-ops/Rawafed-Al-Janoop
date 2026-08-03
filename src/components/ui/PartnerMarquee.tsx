import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { successPartners } from '../../data';

export function PartnerMarquee() {
  const { language } = useLanguage();

  return (
    <div 
      className="relative max-w-7xl mx-auto overflow-hidden py-4"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-8 sm:gap-12 items-center">
        {/* We duplicate the list multiple times to ensure continuous scrolling */}
        {[...successPartners, ...successPartners, ...successPartners, ...successPartners].map((partner, index) => (
          <div
            key={`${partner.id}-${index}`}
            className="flex-shrink-0 w-36 sm:w-48 h-20 sm:h-28 bg-white rounded-2xl shadow-lg border-2 border-gray-100 flex items-center justify-center p-4 hover:shadow-2xl hover:scale-[1.05] hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            style={{
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 -4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
          >
            {partner.logo ? (
              <img src={partner.logo} alt={partner.name[language as 'ar' | 'en']} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110 drop-shadow-sm" />
            ) : (
              <span className="text-lg sm:text-xl font-bold text-gray-500 group-hover:text-primary-600 transition-colors text-center drop-shadow-sm">
                {partner.name[language as 'ar' | 'en']}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
