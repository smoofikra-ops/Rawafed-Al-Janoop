import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, ArrowLeft, TrendingUp, Package, Truck, ShieldCheck, Map, MapPin, Mail, Phone } from 'lucide-react';
import { stats, brands, services, branches, companyInfo } from '../data';
import { Counter } from '../components/ui/Counter';
import { BranchContactInfo } from '../components/BranchContactInfo';
import { ChairmanMessage } from '../components/corporate/ChairmanMessage';
import { VisionMission } from '../components/corporate/VisionMission';
import { WhyUs } from '../components/corporate/WhyUs';
import { JourneyTimeline } from '../components/corporate/JourneyTimeline';
import { LogisticsCapabilities } from '../components/corporate/LogisticsCapabilities';
import { CorporateSocialResponsibility } from '../components/corporate/CorporateSocialResponsibility';
import { GlobalPartners } from '../components/corporate/GlobalPartners';
import { WhyClientsChooseUs } from '../components/corporate/WhyClientsChooseUs';
import { BranchesSlider } from '../components/corporate/BranchesSlider';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export default function Home() {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const { scrollY } = useScroll();
  const blurOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <div className="flex flex-col gap-8 md:gap-20 pb-8 md:pb-20 relative">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white min-h-[90vh] flex items-center pt-20 z-10 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90 brightness-125 contrast-105 scale-105"
          >
            <source src="https://d.top4top.io/m_3844494b91.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-gray-900/90"></div>
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[45px] text-center sm:text-start sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-xl"
            >
              {t('home.heroTitle')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed drop-shadow-md font-medium text-center sm:text-start"
            >
              {t('home.heroSubtitle')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 items-center sm:items-start justify-center sm:justify-start"
            >
              <Link
                to="/quote"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-green-600 px-8 text-lg font-bold text-white transition-all hover:bg-green-500 hover:scale-[1.03] shadow-2xl hover:shadow-green-600/40 w-full sm:w-auto"
              >
                {t('common.requestQuote')}
              </Link>
              <Link
                to="/brands"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-white/10 px-8 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-[1.03] border border-white/20 w-full sm:w-auto"
              >
                {t('home.exploreBrands')}
              </Link>
              <Link
                to="/agent-application"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-white/5 px-8 text-lg font-bold text-gray-200 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white hover:scale-[1.03] border border-white/10 w-full sm:w-auto"
              >
                {language === 'ar' ? 'كن وكيلنا المعتمد' : 'Become an Agent'}
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-6 text-gray-300"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-500" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors font-medium">{companyInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-500" />
                <a dir="ltr" href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors font-medium">{companyInfo.phone}</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 md:py-20 overflow-hidden z-20 -mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <ScrollReveal 
                key={stat.id}
                direction={index % 2 === 0 ? (isRTL ? "up-right" : "up-left") : (isRTL ? "up-left" : "up-right")} 
                delay={index * 0.1}
              >
                <div 
                  className="text-center p-6 sm:p-8 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 h-full"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 tracking-tight flex justify-center items-center gap-1 drop-shadow-md">
                    <Counter from={0} to={stat.value} duration={2.5} />
                    {stat.suffix && <span className="text-green-500">{stat.suffix}</span>}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-gray-300 uppercase tracking-wider">{stat.label[language as 'ar' | 'en']}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-6 md:my-10">
        <ScrollReveal direction="left">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-7xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 sm:p-16 shadow-2xl">
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-md">{t('home.aboutUs')}</h2>
                <div className="h-1 w-24 bg-green-500 rounded"></div>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                {companyInfo.about[language as 'ar' | 'en']}
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors group text-lg"
              >
                {t('common.readMore')}
                <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://res.cloudinary.com/x6mkqvcj/image/upload/v1785723389/about-team.jpg.jpg" 
                  alt={t('home.aboutUs')} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[10s] ease-out"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <ChairmanMessage />
      <VisionMission />
      <WhyUs />
      <WhyClientsChooseUs />
      <JourneyTimeline />

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-32 relative">
        <div className="absolute top-1/2 right-0 w-[30rem] h-[30rem] bg-green-500/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">{t('home.ourServices')}</h2>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded"></div>
          </div>
        </ScrollReveal>
          
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto relative z-10">
          {services.map((service, index) => {
            const Icon = service.icon === 'Package' ? Package : service.icon === 'Truck' ? Truck : TrendingUp;
            return (
              <ScrollReveal 
                key={service.id} 
                direction={index % 2 === 0 ? (isRTL ? "up-right" : "up-left") : (isRTL ? "up-left" : "up-right")} 
                delay={index * 0.15}
                className="h-full"
              >
                <div 
                  className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-12 rounded-[2.5rem] hover:-translate-y-2 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 hover:bg-black/60 transition-all duration-500 group flex flex-col items-center sm:items-start text-center sm:text-start h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-green-500/20 transition-colors duration-700 pointer-events-none"></div>
                  
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-500 relative z-10">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 drop-shadow-sm leading-tight relative z-10">{service.title[language as 'ar' | 'en']}</h3>
                  <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors text-base sm:text-lg relative z-10">
                    {service.description[language as 'ar' | 'en']}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <LogisticsCapabilities />

      {/* Brands Section (Modified Layout) */}
      <section className="relative py-12 md:py-10 md:py-16 overflow-hidden z-20 my-6 md:my-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">{t('home.ourBrands')}</h2>
              <div className="h-1 w-24 bg-green-500 mx-auto rounded mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                {language === 'ar' ? 'نفخر بتقديم أفضل العلامات التجارية التي تضمن الجودة والمذاق الرائع.' : 'We are proud to present the best brands that guarantee quality and great taste.'}
              </p>
            </div>
          </ScrollReveal>
          
          {/* Row 1 */}
          <div className="flex justify-center mb-8">
            <ScrollReveal direction="up">
              <Link 
                to="/brands" 
                className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 md:p-12 hover:-translate-y-2 hover:bg-black/60 transition-all duration-500 group flex flex-col items-center shadow-2xl min-w-[300px] w-full max-w-md overflow-hidden relative"
              >
                {brands[0].logo ? (
                  <div className="w-full h-32 md:h-48 flex items-center justify-center mb-6 bg-white/5 rounded-2xl p-4 md:p-6 group-hover:bg-white/10 transition-colors">
                    <img src={brands[0].logo} alt={brands[0].name[language as 'ar' | 'en']} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                ) : (
                  <div className="h-32 flex items-center justify-center mb-6 w-full bg-white/5 rounded-2xl p-4">
                    <h3 className="text-4xl font-bold text-white group-hover:text-green-400 transition-colors text-center">{brands[0].name[language as 'ar' | 'en']}</h3>
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">{brands[0].name[language as 'ar' | 'en']}</h3>
                <p className="text-gray-400 font-medium text-center text-sm md:text-base">{brands[0].description[language as 'ar' | 'en']}</p>
              </Link>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-3 md:gap-8 justify-center">
            {brands.slice(1).map((brand, index) => (
              <ScrollReveal direction="up" key={brand.id}>
                <Link 
                  to="/brands" 
                  className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[1rem] md:rounded-[2.5rem] p-3 md:p-8 hover:-translate-y-2 hover:bg-black/60 transition-all duration-500 group flex flex-col items-center shadow-2xl w-full h-full"
                >
                  <div className="h-16 md:h-32 flex items-center justify-center mb-3 md:mb-6 w-full bg-white/5 rounded-lg md:rounded-2xl p-2 md:p-4 group-hover:bg-white/10 transition-colors">
                    {brand.logo ? (
                      <img src={brand.logo} alt={brand.name[language as 'ar' | 'en']} className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    ) : (
                      <span className="text-sm md:text-3xl font-bold text-gray-300 group-hover:text-white transition-colors">{brand.name[language as 'ar' | 'en']}</span>
                    )}
                  </div>
                  <h3 className="text-xs md:text-2xl font-bold text-white mb-1 md:mb-3 text-center line-clamp-1">{brand.name[language as 'ar' | 'en']}</h3>
                  <p className="text-[10px] md:text-base text-gray-400 font-medium text-center line-clamp-2 md:line-clamp-none">{brand.description[language as 'ar' | 'en']}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="text-center mt-16">
              <Link 
                to="/brands" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-md"
              >
                {t('home.exploreBrands')}
                <ArrowIcon className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <GlobalPartners />
      <CorporateSocialResponsibility />

      {/* Distribution Network Section */}
      <section className="relative py-24 md:py-32 overflow-hidden my-6 md:my-10 w-full z-20 shadow-2xl">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/x6mkqvcj/image/upload/v1785953713/c6b6e1ae-1d6e-49ac-a126-fd02ea44228a.png" 
            alt="Distribution Network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up">
            <div className="max-w-4xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight drop-shadow-lg">
                {language === 'ar' ? 'نغطي جميع مدن ومناطق المملكة' : 'Covering All Cities and Regions of the Kingdom'}
              </h2>
              <div className="h-1.5 w-32 bg-green-500 rounded mb-10 shadow-lg shadow-green-500/20"></div>
              <p className="text-xl md:text-3xl text-gray-200 leading-relaxed font-medium drop-shadow-md">
                {language === 'ar' 
                  ? 'نمتلك شبكة توزيع ضخمة تغطي جميع أنحاء المملكة العربية السعودية، لضمان وصول منتجاتنا بجودة عالية وفي الوقت المحدد.'
                  : 'We own a massive distribution network covering all parts of Saudi Arabia, ensuring our products reach you in high quality and on time.'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Branches Map Section */}
      <BranchesSlider />

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 z-20">
        <ScrollReveal direction="zoom">
          <div className="relative overflow-hidden rounded-[3rem] p-12 sm:p-24 text-center max-w-5xl mx-auto shadow-2xl group bg-black/50 backdrop-blur-xl border border-white/10">
            <ShieldCheck className="w-24 h-24 text-green-500 mx-auto mb-10 drop-shadow-2xl" />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-md tracking-tight leading-tight max-w-3xl mx-auto">
              {t('home.ctaTitle')}
            </h2>
            <p className="text-2xl text-gray-300 mb-14 font-medium drop-shadow-sm leading-relaxed max-w-2xl mx-auto">
              {t('home.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/quote"
                className="inline-flex h-16 items-center justify-center rounded-2xl bg-green-600 px-12 text-xl font-bold text-white transition-all hover:bg-green-500 hover:scale-105 shadow-2xl hover:shadow-green-500/40 w-full sm:w-auto"
              >
                {t('common.requestQuote')}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
