import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { branches } from '../data';
import { MapPin, Phone, Globe, Mail } from 'lucide-react';

export function BranchContactInfo() {
  const { language } = useLanguage();

  return (
    <div className="mt-16 sm:mt-24 w-full max-w-6xl mx-auto">
      {/* Desktop Layout (Bilingual) */}
      <div className="hidden lg:flex w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden" dir="ltr">
        {/* English Column (Left side) */}
        <div className="flex-1 p-12 text-left" dir="ltr">
          <h3 className="text-3xl font-bold text-white mb-10 border-b border-white/10 pb-6">
            Contact Information
          </h3>
          <div className="space-y-10">
            {branches.map((branch) => (
              <div key={`en-${branch.id}`} className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 bg-white/10 rounded-2xl group-hover:bg-primary-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{branch.name.en}</h4>
                    <p className="text-gray-400 mb-3 leading-relaxed font-medium">{branch.city.en} - {branch.address.en}</p>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">Mobile:</span>
                      {branch.phones?.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone}`} className="text-green-400 hover:text-green-300 transition-colors inline-block font-bold tracking-wide">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/10 flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-primary-500/20 transition-colors">
                <Globe className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Website</span>
                <a href="https://www.rawafedj.com" target="_blank" rel="noopener noreferrer" className="text-lg text-green-400 hover:text-green-300 transition-colors font-bold">
                  www.rawafedj.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-primary-500/20 transition-colors">
                <Mail className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">Email</span>
                <a href="mailto:info@rawafedj.com" className="text-lg text-green-400 hover:text-green-300 transition-colors font-bold">
                  info@rawafedj.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] bg-white/10 my-12 hidden lg:block"></div>

        {/* Arabic Column (Right side) */}
        <div className="flex-1 p-12 text-right" dir="rtl">
          <h3 className="text-3xl font-bold text-white mb-10 border-b border-white/10 pb-6">
            معلومات التواصل
          </h3>
          <div className="space-y-10">
            {branches.map((branch) => (
              <div key={`ar-${branch.id}`} className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-3 bg-white/10 rounded-2xl group-hover:bg-primary-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{branch.name.ar}</h4>
                    <p className="text-gray-400 mb-3 leading-relaxed font-medium">{branch.city.ar} - {branch.address.ar}</p>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-gray-500 font-bold">رقم الجوال:</span>
                      {branch.phones?.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone}`} className="text-green-400 hover:text-green-300 transition-colors inline-block font-bold tracking-wide" dir="ltr">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/10 flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-primary-500/20 transition-colors">
                <Globe className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold mb-1">الموقع الإلكتروني</span>
                <a href="https://www.rawafedj.com" target="_blank" rel="noopener noreferrer" className="text-lg text-green-400 hover:text-green-300 transition-colors font-bold" dir="ltr">
                  www.rawafedj.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-primary-500/20 transition-colors">
                <Mail className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
              </div>
              <div>
                <span className="block text-sm text-gray-500 font-bold mb-1">البريد الإلكتروني</span>
                <a href="mailto:info@rawafedj.com" className="text-lg text-green-400 hover:text-green-300 transition-colors font-bold" dir="ltr">
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
          <div key={`mobile-${branch.id}`} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl group">
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
                    <a key={idx} href={`tel:${phone}`} className={`text-green-400 hover:text-green-300 transition-colors font-bold tracking-wide ${language === 'ar' ? 'text-right inline-block w-fit' : ''}`} dir="ltr">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Mobile Website & Email */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl mt-2 flex flex-col gap-6 group">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-2xl shrink-0 group-hover:bg-primary-500/20 transition-colors">
              <Globe className="w-6 h-6 text-primary-400 group-hover:text-primary-300" />
            </div>
            <div>
              <span className="block text-sm text-gray-500 font-bold mb-1">
                {language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
              </span>
              <a href="https://www.rawafedj.com" target="_blank" rel="noopener noreferrer" className={`text-lg text-green-400 hover:text-green-300 transition-colors font-bold ${language === 'ar' ? 'text-right inline-block w-fit' : ''}`} dir="ltr">
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
              <a href="mailto:info@rawafedj.com" className={`text-lg text-green-400 hover:text-green-300 transition-colors font-bold ${language === 'ar' ? 'text-right inline-block w-fit' : ''}`} dir="ltr">
                info@rawafedj.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
