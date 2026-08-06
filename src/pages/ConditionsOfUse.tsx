import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function ConditionsOfUse() {
  const { language } = useLanguage();

  const content = {
    title: {
      ar: 'شروط الاستخدام',
      en: 'Conditions of Use'
    },
    lastUpdated: {
      ar: 'آخر تحديث: أغسطس 2026',
      en: 'Last Updated: August 2026'
    },
    sections: [
      {
        title: { ar: '1. الالتزام بالأنظمة', en: '1. Compliance with Regulations' },
        body: {
          ar: 'باستخدامك لموقع شركة روافد الجنوب للتجارة، فإنك توافق على الالتزام بجميع القوانين واللوائح المعمول بها محليًا ودوليًا فيما يتعلق باستخدامك للموقع والخدمات المتوفرة عليه.',
          en: 'By using the Rawafed Al Janoob Trading Company website, you agree to comply with all applicable local and international laws and regulations regarding your use of the site and the services provided.'
        }
      },
      {
        title: { ar: '2. حسابات المستخدمين', en: '2. User Accounts' },
        body: {
          ar: 'إذا تم منحك إمكانية الوصول إلى بوابة الوكلاء أو الموزعين، فأنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور وتقييد الوصول إلى جهاز الكمبيوتر الخاص بك، وتوافق على قبول المسؤولية عن جميع الأنشطة التي تحدث تحت حسابك.',
          en: 'If you are granted access to the agents or distributors portal, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account.'
        }
      },
      {
        title: { ar: '3. التواصل الإلكتروني', en: '3. Electronic Communications' },
        body: {
          ar: 'عندما تزور موقعنا أو ترسل رسائل بريد إلكتروني إلينا، أو تتواصل معنا عبر نماذج الواتساب، فإنك تتواصل معنا إلكترونيًا وتوافق على تلقي الاتصالات منا إلكترونيًا لتلبية طلباتك.',
          en: 'When you visit our site or send emails to us, or communicate via WhatsApp forms, you are communicating with us electronically and consent to receive communications from us electronically to fulfill your requests.'
        }
      },
      {
        title: { ar: '4. تعديلات الموقع', en: '4. Site Modifications' },
        body: {
          ar: 'نحتفظ بالحق في إجراء تغييرات على موقعنا، والسياسات، وشروط الاستخدام هذه في أي وقت. استمرارك في استخدام الموقع بعد أي تعديل يعتبر قبولاً لهذه التغييرات.',
          en: 'We reserve the right to make changes to our site, policies, and these Conditions of Use at any time. Your continued use of the site following any modification constitutes your acceptance of such changes.'
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
