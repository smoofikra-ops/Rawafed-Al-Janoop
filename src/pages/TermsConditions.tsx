import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function TermsConditions() {
  const { language } = useLanguage();

  const content = {
    title: {
      ar: 'الشروط والأحكام',
      en: 'Terms & Conditions'
    },
    lastUpdated: {
      ar: 'آخر تحديث: أغسطس 2026',
      en: 'Last Updated: August 2026'
    },
    sections: [
      {
        title: { ar: '1. مقدمة', en: '1. Introduction' },
        body: {
          ar: 'مرحبًا بك في موقع شركة روافد الجنوب للتجارة. تحكم هذه الشروط والأحكام استخدامك لموقعنا والخدمات المتعلقة بتوزيع وتسويق المنتجات الغذائية والحلويات في المملكة العربية السعودية.',
          en: 'Welcome to the Rawafed Al Janoob Trading Company website. These Terms & Conditions govern your use of our website and services related to the distribution and marketing of food products and sweets in Saudi Arabia.'
        }
      },
      {
        title: { ar: '2. طبيعة الخدمات', en: '2. Nature of Services' },
        body: {
          ar: 'الخدمات المقدمة عبر هذا الموقع تشمل استعراض المنتجات الغذائية، طلبات الجملة، التقديم للحصول على وكالات توزيع، والتواصل التجاري. تخضع جميع الطلبات لموافقة الشركة وتوافر المخزون.',
          en: 'Services provided through this site include browsing food products, wholesale requests, applying for distribution agencies, and commercial communication. All requests are subject to company approval and stock availability.'
        }
      },
      {
        title: { ar: '3. حقوق الملكية الفكرية', en: '3. Intellectual Property Rights' },
        body: {
          ar: 'جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والصور والعلامات التجارية، هي ملك لشركة روافد الجنوب للتجارة أو شركائها ومحمية بموجب قوانين حقوق النشر.',
          en: 'All content on this site, including text, graphics, logos, images, and trademarks, is the property of Rawafed Al Janoob Trading Company or its partners and is protected by copyright laws.'
        }
      },
      {
        title: { ar: '4. التسعير والدفع', en: '4. Pricing and Payment' },
        body: {
          ar: 'الأسعار المعروضة أو المقدمة عبر عروض الأسعار تخضع للتغيير بناءً على ظروف السوق وتكاليف التوريد. يتم تحديد شروط الدفع للطلبات التجارية في العقود والفواتير الرسمية المنفصلة.',
          en: 'Prices displayed or provided via quotes are subject to change based on market conditions and supply costs. Payment terms for commercial orders are specified in separate official contracts and invoices.'
        }
      },
      {
        title: { ar: '5. إخلاء المسؤولية', en: '5. Disclaimer' },
        body: {
          ar: 'نقدم خدماتنا "كما هي". لا تتحمل شركة روافد الجنوب للتجارة أي مسؤولية عن أي أضرار غير مباشرة أو عرضية تنشأ عن استخدام الموقع أو الاعتماد على المعلومات المقدمة فيه.',
          en: 'We provide our services "as is". Rawafed Al Janoob Trading Company shall not be liable for any indirect or incidental damages arising from the use of the site or reliance on the information provided.'
        }
      },
      {
        title: { ar: '6. القانون المطبق', en: '6. Governing Law' },
        body: {
          ar: 'تخضع هذه الشروط والأحكام وتُفسر وفقًا لأنظمة وقوانين المملكة العربية السعودية. تخضع أي نزاعات للاختصاص الحصري للمحاكم السعودية.',
          en: 'These Terms & Conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the Saudi courts.'
        }
      }
    ]
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {content.title[language as 'ar' | 'en']}
            </h1>
            <p className="text-gray-500 mb-10 pb-6 border-b border-gray-100">
              {content.lastUpdated[language as 'ar' | 'en']}
            </p>

            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">
                    {section.title[language as 'ar' | 'en']}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.body[language as 'ar' | 'en']}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
