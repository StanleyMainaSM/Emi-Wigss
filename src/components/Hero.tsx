import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Flame, HeartHandshake } from 'lucide-react';
import { BusinessConfig } from '../types';
import { CustomImage } from './CustomImage';

interface HeroProps {
  config: BusinessConfig;
  onBookNow: () => void;
  onExploreShop: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onBookNow, onExploreShop }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#151515] text-white pt-24 pb-16 overflow-hidden">
      {/* Subtle background glow & texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A56B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C6A56B]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A56B]/15 border border-[#C6A56B]/30 text-[#C6A56B] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#C6A56B]" />
              <span>Nairobi's Destination for Flawless Installs</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-stone-50 font-medium">
              Your Hair. <br />
              <span className="italic font-normal text-[#C6A56B]">Your Crown.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Beautiful wig installs, melted HD lace, and custom styling that inspires unapologetic confidence in every look. Crafted with 100% premium virgin hair.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all duration-300 shadow-lg shadow-[#C6A56B]/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Your Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreShop}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-transparent text-stone-200 border border-stone-600 hover:border-[#C6A56B] hover:text-[#C6A56B] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Wigs</span>
              </button>
            </div>

            {/* Verified Trust Badges from actual business photos */}
            <div className="pt-6 border-t border-stone-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>Free Install on select wigs</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>100% SDD Human Hair</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <HeartHandshake className="w-4 h-4 text-[#C6A56B] shrink-0" />
                <span>Invisible HD Lace Melts</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative framing border */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#C6A56B]/30 rotate-1 pointer-events-none transition-transform duration-500 hover:rotate-0" />
              
              {/* Main photographic card */}
              <div className="relative rounded-xl overflow-hidden bg-stone-900 shadow-2xl border border-stone-800 aspect-[4/5] group">
                <CustomImage
                  photoKey="hero"
                  originalFilename="Emmi.jpg"
                  defaultSrc="/assets/aistudio/Emmi.jpg"
                  alt="Emmi - Founder of Emmi Wigs"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />

                {/* Floating highlight card on image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#151515]/85 backdrop-blur-md border border-[#C6A56B]/30 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#C6A56B] font-semibold block">
                        Emmi Wigs • Founder & Lead Stylist
                      </span>
                      <p className="font-serif text-lg font-medium text-stone-100">
                        Custom Crown & Wig Styling
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#C6A56B] text-[#151515] flex items-center justify-center font-bold text-xs shadow">
                      ✓ HD
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] text-stone-400 mt-2 pt-2 border-t border-stone-800">
                    <span>Signature Spiral Curls</span>
                    <span>•</span>
                    <span>Melted Hairlines</span>
                    <span>•</span>
                    <span className="text-[#C6A56B]">Bespoke Craft</span>
                  </div>
                </div>

                {/* Top Brand Logo Emblem Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151515]/90 backdrop-blur border border-[#C6A56B]/50 text-white shadow-xl">
                  <img
                    src={config.logo || '/assets/aistudio/logo_ee8b5b46.jpg'}
                    alt="Emmi Wigs"
                    className="w-6 h-6 rounded-full object-cover bg-black"
                  />
                  <span className="text-[11px] font-serif tracking-wider uppercase text-[#C6A56B]">
                    {config.brandName}
                  </span>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#151515]/80 backdrop-blur border border-[#C6A56B]/40 text-[#C6A56B] text-[11px] font-semibold flex items-center gap-1 shadow">
                  <Flame className="w-3 h-3 text-[#C6A56B]" />
                  <span>Signature Melt</span>
                </div>
              </div>

              {/* Quick style preview gallery chips underneath hero */}
              <div className="mt-4 grid grid-cols-4 gap-2.5">
                {[
                  { name: 'Burmese Curl', img: '/assets/aistudio/5_864c0718.jpg', file: '5_864c0718.jpg', link: '/product/burmese-curly-16' },
                  { name: '12" SDD Bob', img: '/assets/aistudio/12_660c150e.jpg', file: '12_660c150e.jpg', link: '/product/sdd-bob-12-collection' },
                  { name: 'Bouncy Wave', img: '/assets/aistudio/10_b63f9771.jpg', file: '10_b63f9771.jpg', link: '/product/sdd-bouncy-18' },
                  { name: '28" Straight', img: '/assets/aistudio/1_ddaf70cd.jpg', file: '1_ddaf70cd.jpg', link: '/product/sdd-straight-28' },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.link}
                    className="group/thumb cursor-pointer bg-stone-900/80 hover:bg-stone-800 rounded-xl p-1.5 border border-stone-800 hover:border-[#C6A56B]/50 transition-all flex flex-col items-center text-center min-h-[44px]"
                  >
                    <div className="w-full aspect-square rounded-lg overflow-hidden mb-1">
                      <CustomImage
                        photoKey={item.file}
                        originalFilename={item.file}
                        defaultSrc={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[10px] text-stone-300 group-hover/thumb:text-[#C6A56B] font-medium truncate w-full">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
