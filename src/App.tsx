import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Branches from './pages/Branches';
import About from './pages/About';
import Quote from './pages/Quote';
import AgentApplication from './pages/AgentApplication';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UsagePolicy from './pages/UsagePolicy';
import TermsConditions from './pages/TermsConditions';
import ConditionsOfUse from './pages/ConditionsOfUse';

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
          <Route path="/quote" element={<Quote />} />
          <Route path="/agent-application" element={<AgentApplication />} />
          <Route path="/contact" element={<PlaceholderPage title="تواصل معنا" />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms-use" element={<UsagePolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/conditions" element={<ConditionsOfUse />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
