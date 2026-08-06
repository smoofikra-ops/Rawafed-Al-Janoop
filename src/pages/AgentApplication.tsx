import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { companyInfo } from '../data';
import { motion } from 'framer-motion';
import { SearchableSelect } from '../components/ui/SearchableSelect';

const REGIONS = [
  'المنطقة الوسطى', 'المنطقة الغربية', 'المنطقة الشرقية', 'المنطقة الجنوبية', 'المنطقة الشمالية', 'جميع المناطق'
];

const CITIES = [
  'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 'الظهران', 'الأحساء', 'الطائف', 'أبها', 'خميس مشيط', 'جازان', 'صبيا', 'نجران', 'تبوك', 'حائل', 'بريدة', 'عنيزة', 'الباحة', 'ينبع', 'الجبيل', 'القطيف', 'سكاكا', 'عرعر', 'القنفذة', 'بيشة', 'شرورة', 'أخرى'
];

const BUSINESS_TYPES = [
  'شركة توزيع', 'مؤسسة تجارية', 'تاجر جملة', 'سلسلة سوبرماركت', 'أخرى'
];

const YEARS_IN_BUSINESS = [
  'أقل من سنة', '1 - 3 سنوات', '3 - 5 سنوات', 'أكثر من 5 سنوات'
];

export default function AgentApplication() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    phone: '',
    email: '',
    region: '',
    city: '',
    otherCity: '',
    businessType: '',
    otherBusinessType: '',
    yearsInBusiness: '',
    expectedSales: '',
    note: '',
    privacyAccepted: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const regionOptions = REGIONS.map(region => ({ value: region, label: region }));
  const cityOptions = CITIES.map(city => ({ value: city, label: city }));
  const businessTypeOptions = BUSINESS_TYPES.map(type => ({ value: type, label: type }));
  const yearsOptions = YEARS_IN_BUSINESS.map(year => ({ value: year, label: year }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyAccepted) {
      alert(language === 'ar' ? 'يرجى الموافقة على سياسة الخصوصية' : 'Please agree to the privacy policy');
      return;
    }

    setStatus('loading');
    
    setTimeout(() => {
      setStatus('success');
      
      const text = language === 'ar' ? 
        `*طلب انضمام كوكيل*%0a%0a*اسم المنشأة/الشركة:* ${formData.companyName}%0a*اسم المسؤول:* ${formData.fullName}%0a*المنطقة:* ${formData.region}%0a*المدينة:* ${formData.city === 'أخرى' ? formData.otherCity : formData.city}%0a*الجوال:* ${formData.phone}%0a*البريد الإلكتروني:* ${formData.email}%0a*نوع النشاط:* ${formData.businessType === 'أخرى' ? formData.otherBusinessType : formData.businessType}%0a*سنوات الخبرة:* ${formData.yearsInBusiness}%0a*حجم المبيعات المتوقع:* ${formData.expectedSales}%0a*ملاحظات:* ${formData.note}` :
        `*Agent Application*%0a%0a*Company Name:* ${formData.companyName}%0a*Contact Name:* ${formData.fullName}%0a*Region:* ${formData.region}%0a*City:* ${formData.city === 'أخرى' ? formData.otherCity : formData.city}%0a*Phone:* ${formData.phone}%0a*Email:* ${formData.email}%0a*Business Type:* ${formData.businessType === 'أخرى' ? formData.otherBusinessType : formData.businessType}%0a*Years in Business:* ${formData.yearsInBusiness}%0a*Expected Sales:* ${formData.expectedSales}%0a*Notes:* ${formData.note}`;
      
      window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'نموذج الانضمام كـ وكيل' : 'Agent Application Form'}
            </h1>
            <p className="text-gray-600">
              {language === 'ar' 
                ? 'يسعدنا انضمامك إلى شبكة وكلائنا المعتمدين في المملكة. نرجو تعبئة النموذج أدناه للتواصل معك.' 
                : 'We are delighted to have you join our network of authorized agents. Please fill out the form below.'}
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-100"
          >
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{language === 'ar' ? 'تم الإرسال بنجاح' : 'Sent Successfully'}</h3>
                <p className="text-gray-600 mb-6">{language === 'ar' ? 'سيتم تحويلك إلى واتساب الآن لإرسال الطلب' : 'You will be redirected to WhatsApp now to send the request'}</p>
                <button onClick={() => setStatus('idle')} className="text-primary-600 font-medium hover:underline">
                  {language === 'ar' ? 'إرسال طلب آخر' : 'Send another application'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'اسم المنشأة / الشركة' : 'Company / Store Name'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'اسم المسؤول المباشر' : 'Full Name'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'رقم الجوال (للتواصل عبر واتساب)' : 'Phone Number (WhatsApp)'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="tel"
                      dir="ltr" 
                      placeholder="+9665xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-left"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <input 
                      type="email" 
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-left"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'المنطقة' : 'Region'} <span className="text-red-500">*</span>
                    </label>
                    <SearchableSelect
                      required
                      options={regionOptions}
                      value={formData.region}
                      onChange={(val) => setFormData({...formData, region: val})}
                      placeholder={language === 'ar' ? 'اختر المنطقة...' : 'Select Region...'}
                      searchPlaceholder={language === 'ar' ? 'ابحث...' : 'Search...'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'المدينة' : 'City'} <span className="text-red-500">*</span>
                    </label>
                    <SearchableSelect
                      required
                      options={cityOptions}
                      value={formData.city}
                      onChange={(val) => setFormData({...formData, city: val})}
                      placeholder={language === 'ar' ? 'اختر المدينة...' : 'Select City...'}
                      searchPlaceholder={language === 'ar' ? 'ابحث عن مدينة...' : 'Search for a city...'}
                    />
                  </div>
                </div>

                {formData.city === 'أخرى' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'اكتب اسم المدينة' : 'Enter city name'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.otherCity}
                      onChange={(e) => setFormData({...formData, otherCity: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'نوع النشاط التجاري' : 'Business Type'} <span className="text-red-500">*</span>
                    </label>
                    <SearchableSelect
                      required
                      options={businessTypeOptions}
                      value={formData.businessType}
                      onChange={(val) => setFormData({...formData, businessType: val})}
                      placeholder={language === 'ar' ? 'اختر...' : 'Select...'}
                      searchPlaceholder={language === 'ar' ? 'بحث...' : 'Search...'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'سنوات الخبرة في السوق' : 'Years in Business'} <span className="text-red-500">*</span>
                    </label>
                    <SearchableSelect
                      required
                      options={yearsOptions}
                      value={formData.yearsInBusiness}
                      onChange={(val) => setFormData({...formData, yearsInBusiness: val})}
                      placeholder={language === 'ar' ? 'اختر...' : 'Select...'}
                      searchPlaceholder={language === 'ar' ? 'بحث...' : 'Search...'}
                    />
                  </div>
                </div>

                {formData.businessType === 'أخرى' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'يرجى توضيح النشاط' : 'Please specify business type'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.otherBusinessType}
                      onChange={(e) => setFormData({...formData, otherBusinessType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'حجم المبيعات المتوقع شهرياً / سنوياً (اختياري)' : 'Expected Sales Volume (Optional)'}
                  </label>
                  <input 
                    type="text" 
                    value={formData.expectedSales}
                    onChange={(e) => setFormData({...formData, expectedSales: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'ملاحظات / رسالة إضافية' : 'Notes / Additional Message'}
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 mt-1">
                    <input 
                      id="privacy"
                      required
                      type="checkbox"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({...formData, privacyAccepted: e.target.checked})}
                      className="w-4 h-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
                    />
                  </div>
                  <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer select-none">
                    {language === 'ar' ? 'أقر بأن البيانات المدخلة صحيحة وأوافق على التواصل معي بناءً عليها' : 'I declare the information provided is correct and agree to be contacted'} <span className="text-red-500">*</span>
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {status === 'loading' && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {language === 'ar' 
                    ? (status === 'loading' ? 'جارٍ التحميل...' : 'إرسال طلب الانضمام')
                    : (status === 'loading' ? 'Loading...' : 'Submit Application')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
