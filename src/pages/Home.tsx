import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowLeft, TrendingUp, Package, Truck, ShieldCheck, Map, MapPin } from 'lucide-react';
import { stats, brands, services, branches, companyInfo } from '../data';

export default function Home() {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          >
            <source src="https://d.top4top.io/m_3844494b91.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Animated Blur Overlay */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-48 sm:h-64 z-[5] pointer-events-none"
          style={{ 
            opacity: blurOpacity,
            backdropFilter: 'blur(12px)',
            maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[29px] text-center sm:text-start sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {t('home.heroTitle')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            >
              {t('home.heroSubtitle')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/quote"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary-600 px-8 text-base font-medium text-white transition-colors hover:bg-primary-700 shadow-lg shadow-primary-600/20"
              >
                {t('common.requestQuote')}
              </Link>
              <Link
                to="/brands"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white/10 px-8 text-base font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                {t('home.exploreBrands')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 sm:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 rtl:divide-x-reverse">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2 flex items-center justify-center" dir="ltr">
                  {stat.value}
                  {stat.suffix && <span className="text-2xl ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-sm sm:text-base font-medium text-gray-600">
                  {stat.label[language as 'ar' | 'en']}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.aboutUs')}</h2>
            <div className="h-1 w-20 bg-primary-600 rounded mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {companyInfo.about?.[language as 'ar' | 'en']}
            </p>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                {t('common.readMore')} <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 relative shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Rawafed Al Janoob Warehouse" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.ourServices')}</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white/80 backdrop-blur-sm p-3 sm:p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-2xl hover:border-green-300 hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col items-center sm:items-start text-center sm:text-start"
            >
              {/* Distinctive background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-50 rounded-lg sm:rounded-xl flex items-center justify-center text-gray-700 mb-2 sm:mb-6 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-green-600 group-hover:to-red-600 group-hover:text-white transition-all duration-500 relative z-10 shadow-sm group-hover:shadow-green-900/20">
                {service.icon === 'Truck' && <Truck className="w-5 h-5 sm:w-7 sm:h-7" />}
                {service.icon === 'Package' && <Package className="w-5 h-5 sm:w-7 sm:h-7" />}
                {service.icon === 'TrendingUp' && <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7" />}
              </div>
              <h3 className="text-[11px] sm:text-xl font-bold text-gray-900 mb-1 sm:mb-3 group-hover:text-green-700 transition-colors relative z-10 leading-tight">
                {service.title[language as 'ar' | 'en']}
              </h3>
              <p className="text-[9px] sm:text-base text-gray-500 leading-snug sm:leading-relaxed relative z-10 hidden sm:block">
                {service.description[language as 'ar' | 'en']}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-gray-900 py-20 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('home.ourBrands')}</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            {/* Fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-6 sm:gap-10 items-stretch py-4">
              {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0 w-64 sm:w-80 bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-900/50 hover:scale-[1.03] hover:-translate-y-1 transform transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
                >
                  <div className="w-full h-32 sm:h-40 shrink-0 bg-white rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {brand.logo ? (
                      <img src={brand.logo} alt={brand.name[language as 'ar' | 'en']} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="text-sm sm:text-3xl font-bold text-gray-900">{brand.name[language as 'ar' | 'en']}</div>
                    )}
                  </div>
                  <div className="flex flex-col flex-grow w-full">
                    <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-3 group-hover:text-primary-400 transition-colors truncate">{brand.name[language as 'ar' | 'en']}</h3>
                    <p className="text-xs sm:text-base text-gray-400 mb-0 sm:mb-4 flex-grow line-clamp-2">{brand.description[language as 'ar' | 'en']}</p>
                    
                    {brand.categories && (
                      <div className="flex flex-row flex-wrap justify-center gap-1 sm:gap-2 mt-auto pt-2 sm:pt-4 border-t border-gray-700/50">
                        {brand.categories.map((cat, i) => (
                          <span key={i} className="inline-flex items-center rounded-full bg-gray-700/50 px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-sm font-medium text-gray-300 border border-gray-600 group-hover:border-primary-500/30 group-hover:text-primary-100 transition-colors">
                            {cat[language as 'ar' | 'en']}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Branches Map Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.ourBranches')}</h2>
          <div className="h-1 w-20 bg-primary-600 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl sm:rounded-2xl p-[2px] sm:p-[3px] bg-gradient-to-tr from-green-600 via-white to-red-600 hover:shadow-2xl hover:shadow-green-900/20 hover:scale-105 transition-all duration-500 group animate-wave-gradient bg-[length:300%_300%]"
            >
              <div className="bg-white rounded-[10px] sm:rounded-[13px] overflow-hidden flex flex-col h-full">
                <div className="h-32 sm:h-64 w-full bg-gray-100 relative overflow-hidden">
                  {branch.iframe ? (
                    <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full group-hover:scale-105 transition-transform duration-500" dangerouslySetInnerHTML={{ __html: branch.iframe }} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Map className="w-8 h-8 sm:w-12 sm:h-12" />
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-8 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-1 sm:mb-4">
                    <div>
                      <h3 className="text-[11px] sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-green-600 transition-colors leading-tight">{branch.name[language as 'ar' | 'en']}</h3>
                      <p className="text-[9px] sm:text-base text-gray-500 flex items-center gap-1 sm:gap-2 leading-snug">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" /> {branch.address[language as 'ar' | 'en']}
                      </p>
                    </div>
                    <span className="self-start sm:self-auto inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-xs font-medium text-green-700 whitespace-nowrap">
                      {branch.city[language as 'ar' | 'en']}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-16 text-center max-w-5xl mx-auto shadow-2xl border border-green-200 bg-gradient-to-br from-green-600 via-green-400 to-white animate-wave-gradient bg-[length:300%_300%] group">
          
          {/* Wave Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
            <div className="absolute -top-1/2 -left-1/4 w-[150%] h-full bg-white/40 rounded-[100%] mix-blend-overlay group-hover:scale-110 transition-transform duration-1000 ease-in-out"></div>
            <div className="absolute top-1/4 -right-1/4 w-[150%] h-[150%] bg-green-300/30 rounded-[100%] mix-blend-overlay group-hover:scale-110 transition-transform duration-1000 ease-in-out delay-75"></div>
          </div>
          
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/60 rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-green-800/30 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
          
          <div className="relative z-10">
            <ShieldCheck className="w-16 h-16 text-white mx-auto mb-6 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 drop-shadow-md">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-lg text-green-50 mb-10 max-w-2xl mx-auto font-medium drop-shadow-sm">
              {t('home.ctaSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/quote"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-lg font-bold text-green-700 transition-all hover:bg-gray-50 hover:scale-105 hover:shadow-xl hover:shadow-green-900/20 shadow-lg"
              >
                {t('common.requestQuote')}
              </Link>
              <Link
                to="/branches"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-green-800/20 backdrop-blur-md px-10 text-lg font-bold text-white border border-white/40 transition-all hover:bg-green-800/40 hover:scale-105 hover:border-white/60 shadow-lg"
              >
                {t('home.ourBranches')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
