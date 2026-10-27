import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Sparkles, SlidersHorizontal, Calendar, ArrowRight } from 'lucide-react';
import { BusinessConfig } from '../types';

interface NavbarProps {
  config: BusinessConfig;
  onOpenSettings: () => void;
  onOpenPhotoManager?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  onOpenSettings,
  onOpenPhotoManager
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/shop', label: 'Shop Wigs' },
    { path: '/gallery', label: 'Transformations' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#151515]/95 backdrop-blur-md shadow-md py-3 text-white border-b border-[#C6A56B]/20'
            : 'bg-gradient-to-b from-[#151515]/95 via-[#151515]/75 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Name */}
            <Link
              to="/"
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C6A56B]/70 shadow-md flex items-center justify-center bg-black group-hover:scale-105 transition-transform shrink-0">
                <img
                  src={config.logo || '/assets/aistudio/logo_ee8b5b46.jpg'}
                  alt={config.brandName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-semibold text-white block uppercase group-hover:text-[#C6A56B] transition-colors">
                  {config.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] -mt-1 block font-sans">
                  Luxury Wigs & Installs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium tracking-wide">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-1 transition-colors hover:text-[#C6A56B] focus:outline-none min-h-[44px] flex items-center ${
                      active ? 'text-[#C6A56B] font-semibold' : 'text-stone-200'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && (
                      <span className="absolute bottom-1 left-0 w-full h-[2px] bg-[#C6A56B] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Hotline, Book CTA & Settings */}
            <div className="hidden lg:flex items-center space-x-3.5">
              <a
                href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20I%20would%20like%20to%20enquire%20about%20your%20wigs%20and%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{config.phone}</span>
              </a>

              <Link
                to="/booking"
                className="min-h-[44px] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d4b47a] shadow-sm hover:shadow transition-all duration-200 active:scale-95 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </Link>

              <button
                onClick={onOpenSettings}
                className="min-w-[44px] min-h-[44px] p-2 rounded-full text-stone-300 hover:text-[#C6A56B] hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
                title="Business Settings & Hours"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/booking"
                className="min-h-[40px] px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#C6A56B] text-[#151515] flex items-center"
              >
                Book
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] p-2 text-stone-200 hover:text-white focus:outline-none flex items-center justify-center cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer with touch targets >= 44x44px */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#151515] border-b border-[#C6A56B]/30 px-4 pt-3 pb-6 shadow-2xl">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[48px] flex items-center justify-between px-4 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? 'bg-[#C6A56B]/15 text-[#C6A56B] font-semibold border-l-4 border-[#C6A56B]'
                        : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-4 mt-4 border-t border-stone-800 space-y-2.5">
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[48px] py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#C6A56B] text-[#151515] flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </Link>

              <a
                href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3 px-4 rounded-xl text-xs font-semibold bg-[#25D366] text-white flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp: {config.phone}</span>
              </a>

              <div className="flex items-center justify-between pt-2 px-1 text-xs text-stone-400">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenSettings();
                  }}
                  className="min-h-[44px] flex items-center gap-1.5 hover:text-[#C6A56B]"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Business Settings</span>
                </button>
                {onOpenPhotoManager && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenPhotoManager();
                    }}
                    className="min-h-[44px] flex items-center gap-1.5 text-[#C6A56B] hover:underline"
                  >
                    <span>Photo Manager</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
