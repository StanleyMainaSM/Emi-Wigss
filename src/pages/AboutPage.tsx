import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Heart, Award, CheckCircle, ArrowRight, Calendar, MessageSquare, Star, Users } from 'lucide-react';
import { BusinessConfig } from '../types';

interface AboutPageProps {
  config: BusinessConfig;
}

export const AboutPage: React.FC<AboutPageProps> = ({ config }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16 text-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Hero Banner: About Emmi Wigs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900 leading-tight">
              Where Hair Meets Bespoke Artistry
            </h1>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              Founded in Nairobi, Kenya, <strong>{config.brandName}</strong> was born from a singular passion: helping women experience hair that feels like an authentic, regal crown without sacrificing comfort or edge health.
            </p>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
              We specialize in curating strictly 100% single donor drawn virgin human hair, combined with advanced lace customization techniques that make hairlines virtually undetectable under both natural sunlight and high-definition studio cameras.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="min-h-[48px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>
              <Link
                to="/shop"
                className="min-h-[48px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white border border-stone-300 text-stone-800 hover:border-[#C6A56B] hover:text-[#C6A56B] transition-all flex items-center gap-2"
              >
                <span>Browse Wig Collection</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 shadow-2xl aspect-[4/5] border border-stone-200">
              <img
                src="/assets/aistudio/Emmi.jpg"
                alt="Emmi - Founder of Emmi Wigs"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-[#C6A56B] font-semibold block">
                  Founder & Lead Stylist
                </span>
                <p className="font-serif text-2xl font-medium">
                  Emmi • Master Lace Customizer
                </p>
                <p className="text-stone-300 text-xs font-light">
                  "Every hairline is unique. Our job is to sculpt an installation so natural that the world sees only your beauty."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars of Excellence */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">The Emmi Wigs Standard</span>
            <h2 className="font-serif text-3xl font-semibold text-stone-900">Why Women Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C6A56B]/15 text-[#C6A56B] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">100% Single Donor Hair</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                We reject mixed synthetic fibers. All our raw hair bundles have intact cuticles aligned in one direction to resist tangling and shedding.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C6A56B]/15 text-[#C6A56B] flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">Custom Skin Tone Melt</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                HD transparent lace tinted precisely to match your melanin undertones, paired with fine bleached knots that eliminate grid lines.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C6A56B]/15 text-[#C6A56B] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">Edge-Safe Installation</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Protective braid foundations and gentle glueless options that safeguard your real edges and foster continuous natural hair growth.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C6A56B]/15 text-[#C6A56B] flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-stone-900">Free Installation Included</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                Select flagship units come with complimentary salon installation in our Nairobi studio suite, including braid-down and styling.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Craftsmanship Feature */}
        <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-square">
              <img
                src="/assets/aistudio/4_ad2655cc.jpg"
                alt="Precision lace cap and wig interior construction"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#C6A56B]">
              Attention to Detail
            </span>
            <h2 className="font-serif text-3xl font-semibold text-stone-900">
              The Anatomy of an Emmi Wig
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              A luxury wig is defined not just by how it looks on the outside, but by how it is engineered on the inside. Our caps are built with breathable Swiss and HD lace, secure internal combs, and an elastic tension band for all-day comfort without slipping.
            </p>
            <div className="space-y-2 pt-2 text-xs text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C6A56B]" />
                <span>Adjustable comfort straps tailored to small, medium, and large head circumferences.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C6A56B]" />
                <span>Pre-bleached knots for a true scalp illusion.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C6A56B]" />
                <span>Soft graduated baby edges tailored to your personal aesthetic.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nationwide Delivery & Studio Location */}
        <div className="rounded-2xl bg-stone-900 text-white p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">
            Studio & Nationwide Shipping
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-100">
            Visit Our Nairobi Studio or Order Nationwide
          </h2>
          <p className="text-stone-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Whether you want to sit in our chair for a full luxury melt or have your unit customized and shipped directly to your doorstep in Mombasa, Kisumu, Nakuru, Eldoret, or across Kenya, we deliver exceptional beauty with speed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/booking"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20I%20would%20like%20to%20enquire%20about%20ordering%20a%20wig%20for%20delivery.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Delivery Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
