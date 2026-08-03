import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { companyInfo } from '../data';
import { motion } from 'framer-motion';

export default function Quote() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    type: 'company',
    city: '',
    sector: '',
    quantity: '',
    note: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = language === 'ar' ? 
      `*طلب عرض سعر جديد*%0a%0a*الاسم:* ${formData.name}%0a*نوع العميل:* ${formData.type === 'company' ? 'شركة/مؤسسة' : 'فرد'}%0a*المدينة:* ${formData.city}%0a*المنتجات المطلوبة:* ${formData.sector}%0a*الكمية التقديرية شهرياً:* ${formData.quantity}%0a*ملاحظات:* ${formData.note}` :
      `*New Quote Request*%0a%0a*Name:* ${formData.name}%0a*Client Type:* ${formData.type === 'company' ? 'Company' : 'Individual'}%0a*City:* ${formData.city}%0a*Products Required:* ${formData.sector}%0a*Estimated Monthly Qty:* ${formData.quantity}%0a*Notes:* ${formData.note}`;
    
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${text}`, '_blank');
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'الاسم / الجهة' : 'Name / Entity'}
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
                    {language === 'ar' ? 'نوع العميل' : 'Client Type'}
                  </label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  >
                    <option value="company">{language === 'ar' ? 'شركة / مؤسسة' : 'Company / Establishment'}</option>
                    <option value="individual">{language === 'ar' ? 'فرد' : 'Individual'}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'المدينة' : 'City'}
                  </label>
                  <input 
                    required
                    type="text" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ar' ? 'المنتجات المطلوبة (قطاع)' : 'Required Products (Sector)'}
                  </label>
                  <input 
                    required
                    type="text" 
                    placeholder={language === 'ar' ? 'مثال: مواد استهلاكية، عصائر، حلويات' : 'e.g., Consumer goods, juices, sweets'}
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'الكمية التقديرية شهرياً' : 'Estimated Monthly Quantity'}
                </label>
                <input 
                  required
                  type="text" 
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}
                </label>
                <textarea 
                  rows={4}
                  value={formData.note}
                  onChange={(e) => setFormData({...formData, note: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary-600/30"
              >
                {language === 'ar' ? 'إرسال الطلب عبر واتساب' : 'Send Request via WhatsApp'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
