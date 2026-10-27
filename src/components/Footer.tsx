import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MessageSquare, MapPin, Clock, ArrowUp, SlidersHorizontal } from 'lucide-react';
import { BusinessConfig } from '../types';

interface FooterProps {
  config: BusinessConfig;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSettings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-stone-300 pt-16 sm:pt-20 pb-12 border-t border-[#C6A56B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-16 border-b border-stone-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-13 h-13 rounded-full overflow-hidden border border-[#C6A56B]/70 shadow-lg flex items-center justify-center bg-black shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={config.logo || '/assets/aistudio/logo_ee8b5b46.jpg'}
                  alt={config.brandName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.18em] font-semibold text-white block uppercase group-hover:text-[#C6A56B] transition-colors">
                  {config.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] block">
                  Luxury Wigs & Installations
                </span>
              </div>
            </Link>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Your crown, handcrafted with precision. Specializing in flawless melted lace-front installations, Burmese curly textures, razor-sharp bobs, and custom wig revamps in Nairobi, Kenya.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {config.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6A56B]">
              Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#C6A56B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C6A56B] transition-colors">
                  Salon Services
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">
                  Shop Wigs & Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C6A56B] transition-colors">
                  Customer Transformations
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C6A56B] transition-colors">
                  About Us & Emmi
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-[#C6A56B] transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C6A56B] transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6A56B]">
              Hair Textures
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">
                  Single Donor Bone Straight
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">
                  Burmese Curly & Roma Ringlets
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">
                  Precision Blunt Bobs & Pixies
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">
                  Handcrafted Braided Wigs
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">
                  Piano Highlights & Burgundy Colors
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">
                  Enzo Keratin & Shine Mist
                </Link>
              </li>
            </ul>
          </div>

          {/* Salon Hours & Studio */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6A56B]">
              Studio Hours
            </h4>
            <div className="text-xs space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C6A56B] shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM<br />Sun: By Appointment</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#C6A56B] shrink-0 mt-0.5" />
                <span>Nairobi CBD Studio Suite<br />Nationwide Courier Dispatch</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSettings}
                className="inline-flex items-center gap-1.5 text-[11px] text-[#C6A56B] hover:underline cursor-pointer"
              >
                <SlidersHorizontal className="w-3 h-3" />
                <span>Owner Business Settings</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {config.brandName}. All Rights Reserved. Handcrafted in Nairobi, Kenya.</p>
          
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-stone-400 hover:text-[#C6A56B] transition-colors cursor-pointer min-h-[44px] px-3"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
