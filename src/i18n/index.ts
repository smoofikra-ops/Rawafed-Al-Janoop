import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// In a real app, split these into JSON files
const resources = {
  ar: {
    translation: {
      "common": {
        "readMore": "اقرأ المزيد",
        "requestQuote": "طلب عرض سعر",
        "contactUs": "تواصل معنا",
        "allRightsReserved": "جميع الحقوق محفوظة",
        "loading": "جاري التحميل...",
        "language": "English",
      },
      "home": {
        "heroTitle": "روافد موثوقة لتوزيع المنتجات الغذائية في المملكة",
        "heroSubtitle": "شريكك الاستراتيجي في الإمداد والتوزيع بشبكة فروع مستودعات تغطي جميع مدن ومناطق المملكة.",
        "exploreBrands": "استكشف علاماتنا",
        "aboutUs": "نبذة عن الشركة",
        "ourStats": "أرقامنا تتحدث",
        "ourServices": "خدماتنا",
        "ourBrands": "العلامات التجارية",
        "ourBranches": "الفروع والمستودعات",
        "whyUs": "لماذا روافد الجنوب؟",
        "ctaTitle": "تدور على شريك موثوق يورد لك منتجات غذائية؟",
        "ctaSubtitle": "عندنا شبكة واسعة من الفروع والمستودعات عشان نضمن إن منتجاتنا توصلكم بأعلى جودة وفي وقتها.",
      }
    }
  },
  en: {
    translation: {
      "common": {
        "readMore": "Read More",
        "requestQuote": "Request a Quote",
        "contactUs": "Contact Us",
        "allRightsReserved": "All Rights Reserved",
        "loading": "Loading...",
        "language": "العربية",
      },
      "home": {
        "heroTitle": "Reliable Food Distribution Network in the Kingdom",
        "heroSubtitle": "Your strategic partner in supply and distribution, with a network of branches and warehouses covering all cities and regions of the Kingdom.",
        "exploreBrands": "Explore Brands",
        "aboutUs": "About Us",
        "ourStats": "Our Numbers",
        "ourServices": "Our Services",
        "ourBrands": "Our Brands",
        "ourBranches": "Branches & Warehouses",
        "whyUs": "Why Rawafed Al Janoob?",
        "ctaTitle": "Looking for a reliable food supply partner?",
        "ctaSubtitle": "We have an extensive network of branches and warehouses to ensure our products reach you with the highest quality and on time.",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar", // default language
    fallbackLng: "ar",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
