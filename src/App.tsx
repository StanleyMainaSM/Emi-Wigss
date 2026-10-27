import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BusinessSettingsModal } from './components/BusinessSettingsModal';
import { PhotoManagerModal } from './components/PhotoManagerModal';
import { initialBusinessConfig } from './data/initialData';
import { BusinessConfig } from './types';
import { MessageSquare, Upload, SlidersHorizontal, Sparkles } from 'lucide-react';

// Code-split pages for high performance and fast initial load
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const ShopPage = lazy(() => import('./pages/ShopPage').then(m => ({ default: m.ShopPage })));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const LookDetailPage = lazy(() => import('./pages/LookDetailPage').then(m => ({ default: m.LookDetailPage })));
const BookingPage = lazy(() => import('./pages/BookingPage').then(m => ({ default: m.BookingPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Lightweight Route Loading Skeleton to prevent layout shifts
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#FAF7F2]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-9 h-9 rounded-full border-2 border-stone-200 border-t-[#C6A56B] animate-spin" />
      <span className="text-xs uppercase tracking-widest text-[#C6A56B] font-semibold">
        Loading Emmi Wigs...
      </span>
    </div>
  </div>
);

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    const saved = localStorage.getItem('emmi_wigs_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Ensure official uploaded logo takes precedence
        return { ...initialBusinessConfig, ...parsed, logo: initialBusinessConfig.logo };
      } catch (e) {
        return initialBusinessConfig;
      }
    }
    return initialBusinessConfig;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState<boolean>(false);

  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    localStorage.setItem('emmi_wigs_config', JSON.stringify(newConfig));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#151515] flex flex-col font-sans selection:bg-[#C6A56B]/30 overflow-x-hidden">
      <ScrollToTop />

      {/* Top Banner: Verification & Hotline */}
      <div className="bg-[#111111] text-[#E9DFD2] text-[11px] py-2 px-4 text-center border-b border-[#C6A56B]/20 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline text-stone-400">
            Professional Wig Installs & Raw Hair Boutique
          </span>
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <span className="text-[#C6A56B] font-semibold">
              Hotline & WhatsApp: {config.phoneDisplay}
            </span>
            <span className="hidden xs:inline">•</span>
            <span className="hidden xs:inline text-stone-300">Free Installation on select wigs</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPhotoManagerOpen(true)}
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] bg-[#C6A56B] text-[#151515] font-bold px-2.5 py-1 rounded-full hover:bg-[#d8b97d] transition-all cursor-pointer shadow min-h-[30px]"
              title="Manage photo slots"
            >
              <Upload className="w-3 h-3" />
              <span>Photo Manager</span>
            </button>
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="hidden md:inline-flex items-center gap-1 text-[10px] text-stone-300 hover:text-[#C6A56B] underline cursor-pointer"
            >
              Business Setup
            </button>
          </div>
        </div>
      </div>

      {/* Persistent Navigation Header */}
      <Navbar
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
      />

      {/* Main Multi-Page Routed Views */}
      <main className="flex-1 pt-16 sm:pt-20">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage config={config} />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<AboutPage config={config} />} />
            <Route path="/services" element={<ServicesPage config={config} />} />
            <Route path="/service/:id" element={<ServiceDetailPage config={config} />} />
            <Route path="/shop" element={<ShopPage config={config} />} />
            <Route path="/product/:id" element={<ProductDetailPage config={config} />} />
            <Route path="/gallery" element={<GalleryPage config={config} />} />
            <Route path="/gallery/:id" element={<LookDetailPage config={config} />} />
            <Route path="/look/:id" element={<LookDetailPage config={config} />} />
            <Route path="/booking" element={<BookingPage config={config} />} />
            <Route path="/contact" element={<ContactPage config={config} />} />
            <Route path="*" element={<NotFoundPage config={config} />} />
          </Routes>
        </Suspense>
      </main>

      {/* Persistent Footer */}
      <Footer
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Button for Mobile & Desktop */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20I%20am%20browsing%20your%20website%20and%20have%20a%20question.`}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[48px] min-h-[48px] px-3.5 py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 group"
          aria-label="Chat directly on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Business Setup Modal for Owner */}
      <BusinessSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      {/* Photo Manager Modal */}
      <PhotoManagerModal
        isOpen={isPhotoManagerOpen}
        onClose={() => setIsPhotoManagerOpen(false)}
        config={config}
      />

    </div>
  );
}
