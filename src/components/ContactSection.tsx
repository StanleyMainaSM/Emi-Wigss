import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Mail, Instagram, ExternalLink, Sparkles, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { BusinessConfig } from '../types';

interface ContactSectionProps {
  config: BusinessConfig;
  onOpenSettings: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config, onOpenSettings }) => {
  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] text-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            Contact & Studio Inquiries
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Have a question about wig textures, custom installs, or wholesale orders? Reach out directly via WhatsApp, call, or email.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          
          {/* Card 1: WhatsApp Hotline (Verified from photos) */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                WhatsApp Hotline
              </h3>
              <p className="text-xs text-stone-500">
                Verified number printed on catalog:
              </p>
              <p className="text-sm font-bold text-stone-900 font-mono">
                {config.phoneDisplay}
              </p>
            </div>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20I%20have%20an%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Start Chat</span>
            </a>
          </div>

          {/* Card 2: Direct Phone Call */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 text-[#151515] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Direct Phone Call
              </h3>
              <p className="text-xs text-stone-500">
                For urgent appointment bookings & questions:
              </p>
              <p className="text-sm font-bold text-stone-900 font-mono">
                {config.phone}
              </p>
            </div>
            <a
              href={`tel:${config.phone}`}
              className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-100 text-stone-900 hover:bg-[#151515] hover:text-[#C6A56B] transition-colors flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 3: Location / Delivery */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-[#C6A56B] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Studio Location
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {config.address}
              </p>
              <span className="text-[11px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-medium inline-block">
                Exact studio suite editable in settings
              </span>
            </div>
            <button
              onClick={onOpenSettings}
              className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Update Location</span>
            </button>
          </div>

          {/* Card 4: Working Hours */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">
                Operating Hours
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {config.openingHours}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Taking Bookings for Tomorrow</span>
              </div>
            </div>
            <a
              href="#booking"
              className="py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#151515] text-[#C6A56B] hover:bg-stone-800 transition-colors text-center"
            >
              Reserve a Slot
            </a>
          </div>

        </div>

        {/* Social Media & Verification Transparency */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-semibold text-stone-900">
              Social Media Channels
            </h4>
            <p className="text-xs text-stone-500">
              Only verified and confirmed handles are linked publicly. Update your official profile links via the Demo Settings panel.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSettings}
              className="px-4 py-2 rounded-full text-xs font-semibold border border-stone-300 text-stone-700 hover:border-[#C6A56B] hover:text-[#C6A56B] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Configure Socials</span>
            </button>
            <a
              href={`https://wa.me/${config.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-[#25D366] text-white flex items-center gap-1.5 hover:bg-[#20ba59]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
