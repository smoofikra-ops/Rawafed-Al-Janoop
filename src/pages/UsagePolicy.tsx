import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function UsagePolicy() {
  const { language } = useLanguage();

  const content = {
    title: {
      ar: 'سياسة الاستخدام',
      en: 'Usage Policy'
    },
    lastUpdated: {
      ar: 'آخر تحديث: أغسطس 2026',
      en: 'Last Updated: August 2026'
    },
    sections: [
      {
        title: { ar: '1. قبول السياسة', en: '1. Acceptance of Policy' },
        body: {
          ar: 'من خلال الوصول إلى موقع شركة روافد الجنوب للتجارة واستخدامه، فإنك توافق على الالتزام بسياسة الاستخدام هذه. إذا كنت لا توافق على هذه السياسة، يرجى عدم استخدام الموقع.',
          en: 'By accessing and using the Rawafed Al Janoob Trading Company website, you agree to comply with this Usage Policy. If you do not agree, please do not use the website.'
        }
      },
      {
        title: { ar: '2. الاستخدام المسموح به', en: '2. Permitted Use' },
        body: {
          ar: 'يُسمح باستخدام هذا الموقع للأغراض المشروعة المتعلقة بالاستفسار عن منتجاتنا الغذائية، تقديم طلبات عروض الأسعار، أو التقديم لتكون وكيلًا معتمدًا لنا. يجب عليك استخدام الموقع بطريقة لا تنتهك حقوق الآخرين أو تقيد استخدامهم.',
          en: 'This website may be used for lawful purposes related to inquiring about our food products, submitting quote requests, or applying to become an authorized agent. You must use the site in a manner that does not infringe the rights of, or restrict the use by, others.'
        }
      },
      {
        title: { ar: '3. السلوك المحظور', en: '3. Prohibited Conduct' },
        body: {
          ar: 'يُحظر تمامًا استخدام الموقع لنشر مواد مسيئة، أو ضارة، أو تحتوي على فيروسات برمجية، أو محاولة الوصول غير المصرح به إلى أنظمة الموقع، أو استخدام أدوات استخراج البيانات (Scraping) بطريقة تضر بخوادمنا.',
          en: 'It is strictly prohibited to use the site to post offensive or harmful materials, transmit software viruses, attempt unauthorized access to our systems, or use data scraping tools in a way that harms our servers.'
        }
      },
      {
        title: { ar: '4. المحتوى والمعلومات', en: '4. Content and Information' },
        body: {
          ar: 'جميع المعلومات المعروضة على الموقع، بما في ذلك تفاصيل المنتجات الغذائية والوكالات التجارية، مُقدمة لأغراض معلوماتية. نسعى جاهدين لضمان دقتها، ولكننا لا نضمن خلوها من الأخطاء.',
          en: 'All information displayed on the site, including details of food products and commercial agencies, is provided for informational purposes. We strive to ensure accuracy, but we do not guarantee it is error-free.'
        }
      },
      {
        title: { ar: '5. إيقاف الخدمة', en: '5. Termination of Service' },
        body: {
          ar: 'نحتفظ بالحق في تعليق أو إنهاء وصولك إلى الموقع في أي وقت، دون إشعار مسبق، إذا اعتقدنا أنك قمت بانتهاك سياسة الاستخدام هذه.',
          en: 'We reserve the right to suspend or terminate your access to the site at any time, without prior notice, if we believe you have violated this Usage Policy.'
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
