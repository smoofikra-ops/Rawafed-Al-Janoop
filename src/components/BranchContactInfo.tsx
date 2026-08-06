import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { branches } from '../data';
import { MapPin, Phone, Globe, Mail } from 'lucide-react';

export function BranchContactInfo() {
  const { language } = useLanguage();

  return (
    <div className="mt-16 sm:mt-24 w-full max-w-6xl mx-auto">
      {/* Desktop Layout (Bilingual) */}
      <div className="hidden lg:flex w-full bg-white/95 backdrop-blur-md border border-gray-100 rounded-[3rem] shadow-xl overflow-hidden" dir="ltr">
        {/* English Column (Left side) */}
        <div className="flex-1 p-12 text-left" dir="ltr">
          <h3 className="text-3xl font-bold text-green-700 mb-10 border-b border-gray-200 pb-6">
            Contact Information
          </h3>
          <div className="space-y-10">
            {branches.map((branch) => (
              <div key={`en-${branch.id}`} className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-700 mb-2">{branch.name.en}</h4>
                    <p className="text-gray-600 mb-3 leading-relaxed font-medium">{branch.city.en} - {branch.address.en}</p>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Mobile:</span>
                      {branch.phones?.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone}`} className="text-green-700 hover:text-green-500 transition-colors inline-block font-bold tracking-wide">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Website</span>
                <a href="https://www.rawafedj.com" target="_blank" rel="noopener noreferrer" className="text-lg text-green-700 hover:text-green-500 transition-colors font-bold">
                  www.rawafedj.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:info@rawafedj.com" className="text-lg text-green-700 hover:text-green-500 transition-colors font-bold">
                  info@rawafedj.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] bg-gray-200 my-12 hidden lg:block"></div>

        {/* Arabic Column (Right side) */}
        <div className="flex-1 p-12 text-right" dir="rtl">
          <h3 className="text-3xl font-bold text-green-700 mb-10 border-b border-gray-200 pb-6">
            معلومات التواصل
          </h3>
          <div className="space-y-10">
            {branches.map((branch) => (
              <div key={`ar-${branch.id}`} className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-700 mb-2">{branch.name.ar}</h4>
                    <p className="text-gray-600 mb-3 leading-relaxed font-medium">{branch.city.ar} - {branch.address.ar}</p>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500 font-bold">رقم الجوال:</span>
                      {branch.phones?.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone}`} className="text-green-700 hover:text-green-500 transition-colors inline-block font-bold tracking-wide" dir="ltr">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-10 border-t border-gray-200 flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold mb-1">الموقع الإلكتروني</span>
                <a href="https://www.rawafedj.com" target="_blank" rel="noopener noreferrer" className="text-lg text-green-700 hover:text-green-500 transition-colors font-bold" dir="ltr">
                  www.rawafedj.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-red-50 rounded-2xl group-hover:bg-red-100 transition-colors">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold mb-1">البريد الإلكتروني</span>
                <a href="mailto:info@rawafedj.com" className="text-lg text-green-700 hover:text-green-500 transition-colors font-bold" dir="ltr">
                  info@rawafedj.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Stacked based on language) */}
      <div className="lg:hidden flex flex-col gap-6" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {branches.map((branch) => (
          <div key={`mobile-${branch.id}`} className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-3 bg-red-50 rounded-2xl shrink-0">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-green-700 mb-2">{branch.name[language]}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed font-medium">{branch.city[language]} - {branch.address[language]}</p>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-500 font-bold">
                    {language === 'ar' ? 'رقم الجوال:' : 'Mobile:'}
                  </span>
                  {branch.phones?.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone}`} className={`text-green-700 hover:text-green-500 transition-colors font-bold tracking-wide ${language === 'ar' ? 'text-right inline-block w-fit' : ''}`} dir="ltr">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Mobile Website & Email */}
        <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl mt-2 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-50 rounded-2xl shrink-0">
              <Globe className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <span className="block text-sm text-gray-500 font-bold mb-1">
                {language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
              </span>
              <a href="https://www.rawafedj.com" target="_blank" rel="noopener noreferrer" className={`text-lg text-green-700 hover:text-green-500 transition-colors font-bold ${language === 'ar' ? 'text-right inline-block w-fit' : ''}`} dir="ltr">
                www.rawafedj.com
              </a>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-100"></div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-50 rounded-2xl shrink-0">
              <Mail className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <span className="block text-sm text-gray-500 font-bold mb-1">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </span>
              <a href="mailto:info@rawafedj.com" className={`text-lg text-green-700 hover:text-green-500 transition-colors font-bold ${language === 'ar' ? 'text-right inline-block w-fit' : ''}`} dir="ltr">
                info@rawafedj.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
