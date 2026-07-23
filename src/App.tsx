import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Branches from './pages/Branches';
import About from './pages/About';

// Lazy loading for other pages can be added here
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20 min-h-[60vh] flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-gray-500 bg-yellow-50 p-4 rounded-md border border-yellow-200">
        [بانتظار تزويدنا بالمعلومة - قيد التطوير]
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<PlaceholderPage title="الخدمات" />} />
          <Route path="/brands" element={<PlaceholderPage title="العلامات التجارية" />} />
          <Route path="/products" element={<PlaceholderPage title="المنتجات" />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/quote" element={<PlaceholderPage title="طلب عرض سعر" />} />
          <Route path="/contact" element={<PlaceholderPage title="تواصل معنا" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
