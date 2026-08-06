import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  const content = {
    title: {
      ar: 'سياسة الخصوصية',
      en: 'Privacy Policy'
    },
    lastUpdated: {
      ar: 'آخر تحديث: أغسطس 2026',
      en: 'Last Updated: August 2026'
    },
    sections: [
      {
        title: { ar: '1. مقدمة', en: '1. Introduction' },
        body: {
          ar: 'تلتزم شركة روافد الجنوب للتجارة بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا لمعلوماتك الشخصية واستخدامها وحمايتها عند زيارتك لموقعنا الإلكتروني واستخدام خدماتنا في توزيع المنتجات الغذائية.',
          en: 'Rawafed Al Janoob Trading Company is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and use our food distribution services.'
        }
      },
      {
        title: { ar: '2. المعلومات التي نجمعها', en: '2. Information We Collect' },
        body: {
          ar: 'قد نقوم بجمع معلومات شخصية مثل اسمك، ورقم هاتفك، وبريدك الإلكتروني، وعنوان منشأتك (المدينة والمنطقة) عندما تتواصل معنا لطلب عرض سعر، أو تقديم طلب انضمام كوكيل، أو الاستفسار عن منتجاتنا.',
          en: 'We may collect personal information such as your name, phone number, email address, and facility address (city and region) when you contact us to request a quote, submit an agent application, or inquire about our products.'
        }
      },
      {
        title: { ar: '3. كيف نستخدم معلوماتك', en: '3. How We Use Your Information' },
        body: {
          ar: 'نستخدم معلوماتك لتقديم الخدمات التي طلبتها، والرد على استفساراتك، ومعالجة طلبات التوريد، وتحسين جودة موقعنا الإلكتروني، والتواصل معك بشأن العروض أو التحديثات المتعلقة بمنتجاتنا.',
          en: 'We use your information to provide the requested services, respond to inquiries, process supply requests, improve our website quality, and communicate with you regarding offers or updates related to our products.'
        }
      },
      {
        title: { ar: '4. حماية البيانات', en: '4. Data Protection' },
        body: {
          ar: 'نحن نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. يتم الحفاظ على سرية معلومات طلبات الجملة وعقود التوزيع.',
          en: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Information regarding wholesale orders and distribution contracts is kept confidential.'
        }
      },
      {
        title: { ar: '5. مشاركة المعلومات', en: '5. Information Sharing' },
        body: {
          ar: 'لا نقوم ببيع أو تأجير معلوماتك الشخصية لأطراف ثالثة. قد نشارك بياناتك فقط مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا أو إدارة أعمالنا، بشرط موافقتهم على الحفاظ على سرية هذه المعلومات.',
          en: 'We do not sell or rent your personal information to third parties. We may only share your data with trusted service providers who assist us in operating our website or managing our business, provided they agree to keep this information confidential.'
        }
      },
      {
        title: { ar: '6. التغييرات على سياسة الخصوصية', en: '6. Changes to this Privacy Policy' },
        body: {
          ar: 'نحتفظ بالحق في تحديث سياسة الخصوصية هذه في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث".',
          en: 'We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date.'
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
