import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { companyInfo } from '../data';
import { motion } from 'framer-motion';
import { SearchableSelect } from '../components/ui/SearchableSelect';

const CUSTOMER_TYPES = [
  'فرد', 'متجر', 'بقالة', 'سوبرماركت', 'مطعم', 'مقهى', 'مؤسسة', 'شركة', 'موزع', 'تاجر جملة', 'تاجر تجزئة', 'جهة حكومية', 'جهة غير ربحية', 'أخرى'
];

const CITIES = [
  'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 'الظهران', 'الأحساء', 'الطائف', 'أبها', 'خميس مشيط', 'جازان', 'صبيا', 'نجران', 'تبوك', 'حائل', 'بريدة', 'عنيزة', 'الباحة', 'ينبع', 'الجبيل', 'القطيف', 'سكاكا', 'عرعر', 'القنفذة', 'بيشة', 'شرورة', 'جميع مدن المملكة', 'أخرى'
];

const ORDER_TYPES = [
  'طلب عرض سعر', 'طلب توريد', 'استفسار عن منتج', 'استفسار عن علامة تجارية', 'طلب توزيع', 'شراكة تجارية', 'طلب كتالوج', 'تواصل عام', 'أخرى'
];

export default function Quote() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    customerType: '',
    otherCustomerType: '',
    phone: '',
    email: '',
    city: '',
    otherCity: '',
    orderType: '',
    otherOrderType: '',
    brand: '',
    products: '',
    quantity: '',
    note: '',
    privacyAccepted: false
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const customerTypeOptions = CUSTOMER_TYPES.map(type => ({ value: type, label: type }));
  const cityOptions = CITIES.map(city => ({ value: city, label: city }));
  const orderTypeOptions = ORDER_TYPES.map(type => ({ value: type, label: type }));

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
        `*طلب عبر الموقع الإلكتروني*%0a%0a*الاسم:* ${formData.name}%0a*نوع العميل:* ${formData.customerType === 'أخرى' ? formData.otherCustomerType : formData.customerType}%0a*المدينة:* ${formData.city === 'أخرى' ? formData.otherCity : formData.city}%0a*الجوال:* ${formData.phone}%0a*نوع الطلب:* ${formData.orderType === 'أخرى' ? formData.otherOrderType : formData.orderType}%0a*المنتجات المطلوبة:* ${formData.products}%0a*الكمية التقديرية شهرياً:* ${formData.quantity}%0a*ملاحظات:* ${formData.note}` :
        `*New Website Request*%0a%0a*Name:* ${formData.name}%0a*Client Type:* ${formData.customerType === 'أخرى' ? formData.otherCustomerType : formData.customerType}%0a*City:* ${formData.city === 'أخرى' ? formData.otherCity : formData.city}%0a*Phone:* ${formData.phone}%0a*Order Type:* ${formData.orderType === 'أخرى' ? formData.otherOrderType : formData.orderType}%0a*Products Required:* ${formData.products}%0a*Estimated Monthly Qty:* ${formData.quantity}%0a*Notes:* ${formData.note}`;
      
      window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'طلب عرض سعر' : 'Request a Quote'}
            </h1>
            <p className="text-gray-600">
              {language === 'ar' 
                 ? 'يسعدنا تلبية احتياجاتكم وتوفير أفضل المنتجات الغذائية بمعايير عالية.' 
                 : 'We are happy to meet your needs and provide the best food products with high standards.'}
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
                <p className="text-gray-600 mb-6">{language === 'ar' ? 'سيتم تحويلك إلى واتساب الآن' : 'You will be redirected to WhatsApp now'}</p>
                <button onClick={() => setStatus('idle')} className="text-primary-600 font-medium hover:underline">
                  {language === 'ar' ? 'إرسال طلب آخر' : 'Send another request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'الاسم الكامل / اسم المنشأة' : 'Full Name / Entity Name'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'نوع العميل' : 'Client Type'} <span className="text-red-500">*</span>
                    </label>
                    <SearchableSelect
                      required
                      options={customerTypeOptions}
                      value={formData.customerType}
                      onChange={(val) => setFormData({...formData, customerType: val})}
                      placeholder={language === 'ar' ? 'اختر...' : 'Select...'}
                      searchPlaceholder={language === 'ar' ? 'بحث...' : 'Search...'}
                    />
                  </div>
                </div>

                {formData.customerType === 'أخرى' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'يرجى توضيح نوع العميل' : 'Please specify client type'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.otherCustomerType}
                      onChange={(e) => setFormData({...formData, otherCustomerType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'رقم الجوال' : 'Phone Number'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="tel" 
                      dir="ltr"
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'نوع الطلب' : 'Order Type'} <span className="text-red-500">*</span>
                    </label>
                    <SearchableSelect
                      required
                      options={orderTypeOptions}
                      value={formData.orderType}
                      onChange={(val) => setFormData({...formData, orderType: val})}
                      placeholder={language === 'ar' ? 'اختر...' : 'Select...'}
                      searchPlaceholder={language === 'ar' ? 'بحث...' : 'Search...'}
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
                
                {formData.orderType === 'أخرى' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'يرجى توضيح نوع الطلب' : 'Please specify order type'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.otherOrderType}
                      onChange={(e) => setFormData({...formData, otherOrderType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'المنتجات أو الخدمة المطلوبة' : 'Required Products or Service'} <span className="text-red-500">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={formData.products}
                      onChange={(e) => setFormData({...formData, products: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'ar' ? 'الكمية المتوقعة (إن وجدت)' : 'Expected Quantity (if any)'}
                    </label>
                    <input 
                      type="text" 
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'الرسالة / تفاصيل إضافية' : 'Message / Additional Details'}
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
                    {language === 'ar' ? 'أوافق على سياسة الخصوصية واستخدام البيانات للتواصل معي' : 'I agree to the privacy policy and the use of data to contact me'} <span className="text-red-500">*</span>
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
                    ? (status === 'loading' ? 'جارٍ التحميل...' : 'إرسال الطلب')
                    : (status === 'loading' ? 'Loading...' : 'Submit Request')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
