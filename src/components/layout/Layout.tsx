import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { navigation } from '../../data';
import { Globe, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { companyInfo } from '../../data';
import { TikTokIcon, InstagramIcon, FacebookIcon, XIcon, SnapchatIcon } from '../ui/SocialIcons';

import { GlobalBackground } from './GlobalBackground';
import { AnnouncementBar } from './AnnouncementBar';

function Header() {
  const { t } = useTranslation();
  const { language, toggleLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled 
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/60 shadow-sm py-2 sm:py-3" 
          : "bg-white/60 backdrop-blur-lg border-b border-gray-200/30 py-4 sm:py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">          
          {/* Mobile Navigation Toggle (Start on Mobile) */}
          <div className="lg:hidden flex items-center justify-start w-1/3">
            <button
              className="p-2 -mx-2 text-gray-600 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Logo & Company Name */}
          <div className="flex items-center justify-center lg:justify-start w-1/3 lg:w-1/4">
            <Link to="/" className="flex flex-col items-center lg:items-start gap-1 group">
              <img 
                src="https://www.rawafedj.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" 
                alt={companyInfo.name[language as 'ar' | 'en']} 
                className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-500 origin-center lg:origin-left"
              />
            </Link>
          </div>

          {/* Mobile Language Switch (End on Mobile) */}
          <div className="lg:hidden flex items-center justify-end w-1/3">
            <button
              onClick={toggleLanguage}
              className="p-2 -mx-2 text-gray-600 hover:text-primary-700 transition-colors"
            >
              <Globe className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Navigation (Center) */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-4">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "px-4 py-2.5 rounded-full text-[13.5px] xl:text-[14.5px] font-medium whitespace-nowrap transition-all duration-300 backdrop-blur-md border shadow-sm",
                  location.pathname === item.href 
                    ? "bg-white/80 border-primary-200 text-primary-700 shadow-md" 
                    : "bg-white/30 border-white/50 text-gray-700 hover:bg-white/60 hover:border-white/80 hover:text-primary-600 hover:-translate-y-0.5 hover:shadow-md"
                )}
              >
                {item.label[language as 'ar' | 'en']}
              </Link>
            ))}
          </nav>

          {/* Controls (End) */}
          <div className="hidden lg:flex items-center justify-end gap-4 xl:gap-6 lg:w-1/4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[14px] font-medium text-gray-600 hover:text-primary-700 transition-colors group px-3 py-2 rounded-full bg-white/30 border border-white/50 backdrop-blur-md shadow-sm hover:bg-white/60 hover:-translate-y-0.5 hover:shadow-md"
            >
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>{t('common.language')}</span>
            </button>
            <Link
              to="/quote"
              className="h-11 inline-flex items-center justify-center rounded-full bg-green-600 px-6 text-[14px] font-bold text-white transition-all duration-300 hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t('common.requestQuote')}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl shadow-xl absolute w-full transition-all">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "block text-[15px] font-medium transition-colors hover:text-primary-700 p-3 rounded-lg hover:bg-gray-50",
                  location.pathname === item.href ? "text-primary-700 bg-primary-50/50" : "text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label[language as 'ar' | 'en']}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                to="/quote"
                className="flex h-12 w-full items-center justify-center rounded-lg bg-green-600 px-4 text-[15px] font-medium text-white transition-all hover:bg-green-500 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('common.requestQuote')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="relative bg-black/40 text-gray-300 py-12 md:py-16 overflow-hidden backdrop-blur-md border-t border-white/10">
      {/* Background animated wave effect with identity colors */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-[50%] -left-[20%] w-[150%] h-[150%] bg-gradient-to-br from-green-600/30 via-transparent to-transparent rounded-[40%] mix-blend-screen animate-[spin_25s_linear_infinite] blur-[100px]"></div>
        <div className="absolute top-[10%] -right-[20%] w-[120%] h-[120%] bg-gradient-to-tl from-red-600/20 via-transparent to-transparent rounded-[40%] mix-blend-screen animate-[spin_30s_linear_infinite_reverse] blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-green-900/20 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Social */}
          <div className="space-y-6 mb-6 lg:mb-0 lg:col-span-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="https://www.rawafedj.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" 
                  alt={companyInfo.name[language as 'ar' | 'en']} 
                  className="h-10 w-auto"
                />
                <span className="text-xl font-bold text-white">
                  {companyInfo.name[language as 'ar' | 'en']}
                </span>
              </div>
              <p className="text-sm text-gray-400">
                {t('home.heroSubtitle')}
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 text-sm">{language === 'ar' ? 'الصفحات الرسمية للشركة' : 'Official Company Pages'}</h4>
              <div className="flex flex-wrap items-center gap-4">
                <a href={companyInfo.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-all duration-300 hover:-translate-y-1" aria-label="TikTok">
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:opacity-80 transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-all duration-300 hover:-translate-y-1" aria-label="Facebook">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href={companyInfo.social.x} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white hover:opacity-80 transition-all duration-300 hover:-translate-y-1" aria-label="X (Twitter)">
                  <XIcon className="w-4 h-4" />
                </a>
                <a href={companyInfo.social.snapchat} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#FFFC00] flex items-center justify-center text-black hover:opacity-80 transition-all duration-300 hover:-translate-y-1" aria-label="Snapchat">
                  <SnapchatIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* About Us (Accordion on mobile) */}
          <div className="border-t border-gray-800 lg:border-none pt-4 lg:pt-0">
            <button 
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none"
              onClick={() => toggleSection('about')}
            >
              <h3 className="text-white font-semibold">{t('home.aboutUs')}</h3>
              <span className="lg:hidden text-gray-400">
                {openSection === 'about' ? '−' : '+'}
              </span>
            </button>
            <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 ${openSection === 'about' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full'}`}>
              <ul className="space-y-2 pb-2 lg:pb-0">
                <li><Link to="/about" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'من نحن' : 'About Us'}</Link></li>
                <li><Link to="/brands" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'العلامات التجارية' : 'Brands'}</Link></li>
                <li><Link to="/careers" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'التوظيف' : 'Careers'}</Link></li>
                <li><Link to="/quote" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'طلب عرض سعر' : 'Request a Quote'}</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Services (Accordion on mobile) */}
          <div className="border-t border-gray-800 lg:border-none pt-4 lg:pt-0">
            <button 
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none"
              onClick={() => toggleSection('services')}
            >
              <h3 className="text-white font-semibold">{t('home.ourServices')}</h3>
              <span className="lg:hidden text-gray-400">
                {openSection === 'services' ? '−' : '+'}
              </span>
            </button>
            <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 ${openSection === 'services' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full'}`}>
              <ul className="space-y-2 pb-2 lg:pb-0">
                <li><Link to="/services" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'الخدمات' : 'Services'}</Link></li>
                <li><Link to="/branches" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'الفروع والمستودعات' : 'Branches & Warehouses'}</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</Link></li>
              </ul>
            </div>
          </div>

          {/* Policies (Accordion on mobile) */}
          <div className="border-t border-gray-800 lg:border-none pt-4 lg:pt-0">
            <button 
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none"
              onClick={() => toggleSection('policies')}
            >
              <h3 className="text-white font-semibold">{language === 'ar' ? 'السياسات' : 'Policies'}</h3>
              <span className="lg:hidden text-gray-400">
                {openSection === 'policies' ? '−' : '+'}
              </span>
            </button>
            <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 ${openSection === 'policies' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full'}`}>
              <ul className="space-y-2 pb-2 lg:pb-0">
                <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link></li>
                <li><Link to="/terms-use" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'سياسة الاستخدام' : 'Usage Policy'}</Link></li>
                <li><Link to="/terms" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</Link></li>
                <li><Link to="/conditions" className="text-sm hover:text-white transition-colors">{language === 'ar' ? 'شروط الاستخدام' : 'Conditions of Use'}</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Contact (Accordion on mobile) */}
          <div className="border-t border-gray-800 lg:border-none pt-4 lg:pt-0">
            <button 
              className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none"
              onClick={() => toggleSection('contact')}
            >
              <h3 className="text-white font-semibold">{t('common.contactUs')}</h3>
              <span className="lg:hidden text-gray-400">
                {openSection === 'contact' ? '−' : '+'}
              </span>
            </button>
            <div className={`mt-4 space-y-4 text-sm overflow-hidden transition-all duration-300 lg:h-auto lg:opacity-100 ${openSection === 'contact' ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 lg:max-h-full'}`}>
              <ul className="space-y-4 pb-2 lg:pb-0">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{companyInfo.address[language as 'ar' | 'en']}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                  <a dir="ltr" href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">{companyInfo.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">{companyInfo.email}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-12 pt-8 border-t border-gray-800/60 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p>© {new Date().getFullYear()} {companyInfo.name[language as 'ar' | 'en']}. {t('common.allRightsReserved')}</p>
          <p className="flex items-center gap-2">
            {language === 'ar' ? 'تطوير' : 'Developed by'}
            <a href="https://www.nmolabs.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors font-medium">
              نمو لابز NmoLabs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  // Initialize language hook to ensure correct dir is set on render
  useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-transparent relative">
      <GlobalBackground />
      <div className="relative z-10 flex flex-col flex-grow">
        <AnnouncementBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
