import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { navigation } from '../../data';
import { Globe, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { companyInfo } from '../../data';
import { TikTokIcon, InstagramIcon, FacebookIcon, XIcon, SnapchatIcon } from '../ui/SocialIcons';

function Header() {
  const { t } = useTranslation();
  const { language, toggleLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://www.rawafedj.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" 
                alt={companyInfo.name[language as 'ar' | 'en']} 
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                {companyInfo.name[language as 'ar' | 'en']}
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-600",
                  location.pathname === item.href ? "text-primary-600" : "text-gray-600"
                )}
              >
                {item.label[language as 'ar' | 'en']}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline-block">{t('common.language')}</span>
            </button>
            <Link
              to="/quote"
              className="hidden sm:inline-flex h-10 items-center justify-center rounded-md bg-primary-600 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {t('common.requestQuote')}
            </Link>
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className={cn(
                  "block text-base font-medium transition-colors hover:text-primary-600",
                  location.pathname === item.href ? "text-primary-600" : "text-gray-600"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label[language as 'ar' | 'en']}
              </Link>
            ))}
            <Link
              to="/quote"
              className="flex h-10 w-full items-center justify-center rounded-md bg-primary-600 px-4 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('common.requestQuote')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <footer className="relative bg-gray-950 text-gray-300 py-12 md:py-16 overflow-hidden">
      {/* Background animated wave effect with identity colors */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-[50%] -left-[20%] w-[150%] h-[150%] bg-gradient-to-br from-green-600/30 via-transparent to-transparent rounded-[40%] mix-blend-screen animate-[spin_25s_linear_infinite] blur-[100px]"></div>
        <div className="absolute top-[10%] -right-[20%] w-[120%] h-[120%] bg-gradient-to-tl from-red-600/20 via-transparent to-transparent rounded-[40%] mix-blend-screen animate-[spin_30s_linear_infinite_reverse] blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-green-900/20 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="https://www.rawafedj.com/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" 
                  alt={companyInfo.name[language as 'ar' | 'en']} 
                  className="h-10 w-auto brightness-0 invert"
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
                <a href={companyInfo.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="TikTok">
                  <TikTokIcon className="w-5 h-5" />
                </a>
                <a href={companyInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href={companyInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="Facebook">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href={companyInfo.social.x} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all duration-300 hover:-translate-y-1" aria-label="X (Twitter)">
                  <XIcon className="w-4 h-4" />
                </a>
                <a href={companyInfo.social.snapchat} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#FFFC00] hover:text-black transition-all duration-300 hover:-translate-y-1" aria-label="Snapchat">
                  <SnapchatIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('home.aboutUs')}</h3>
            <ul className="space-y-2">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label[language as 'ar' | 'en']}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('home.ourServices')}</h3>
            <ul className="space-y-2">
              {navigation.slice(4).map((item) => (
                <li key={item.id}>
                  <Link to={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label[language as 'ar' | 'en']}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">{t('common.contactUs')}</h3>
            <ul className="space-y-4 text-sm">
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
        
        <div className="mt-12 pt-8 border-t border-gray-800/60 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
