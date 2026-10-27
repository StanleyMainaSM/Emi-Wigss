import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { CustomerLook } from '../types';
import { CustomImage } from './CustomImage';

interface GallerySectionProps {
  looks: CustomerLook[];
  onBookLook: (look: CustomerLook) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ looks, onBookLook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxLook, setActiveLightboxLook] = useState<CustomerLook | null>(null);

  const categories = [
    'All',
    'Bouncy Curls',
    'Sleek Straight',
    'Bob Cuts',
    'Colored Hair',
    'Pixie & Waves',
    'Braided Styles'
  ];

  const filteredLooks = looks.filter(
    (look) => selectedCategory === 'All' || look.category === selectedCategory
  );

  return (
    <section id="gallery" className="py-24 bg-[#151515] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Portfolio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-50">
            Transformations & Customer Looks
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Every crown tells a story of elegance and bespoke artistry. Explore genuine installation results, melted HD lace lines, and signature curl patterns.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C6A56B] text-[#151515] font-semibold shadow-md'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#C6A56B]/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div
                className="relative aspect-[4/5] overflow-hidden cursor-pointer"
                onClick={() => setActiveLightboxLook(look)}
              >
                <CustomImage
                  photoKey={look.originalFilename || look.id}
                  originalFilename={look.originalFilename}
                  defaultSrc={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90" />

                {/* Tag Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#151515]/80 backdrop-blur-md text-[#C6A56B] border border-[#C6A56B]/30">
                  {look.tag}
                </span>

                {/* Zoom Icon on Hover */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Details Overlaid at bottom */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A56B]">
                    {look.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#C6A56B] transition-colors">
                    {look.title}
                  </h3>
                  <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed">
                    {look.technique}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer Action */}
              <div className="p-4 bg-stone-900/90 border-t border-stone-800 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-mono">
                  {look.hairUsed}
                </span>
                <button
                  onClick={() => onBookLook(look)}
                  className="text-xs font-semibold text-[#C6A56B] hover:text-[#e0c28d] flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Recreate Look</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Ready for Your New Look? Booking Banner */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-stone-900 via-[#1d1b18] to-stone-900 p-8 sm:p-12 border border-[#C6A56B]/30 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#C6A56B]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">
              Experience Flawless Melted Lace
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white">
              Ready for Your New Look?
            </h3>
            <p className="text-stone-300 text-sm font-light leading-relaxed">
              Whether you are purchasing a brand-new unit with complimentary installation or bringing your favorite wig for a master lace melt, reserve your seat today.
            </p>
            <div className="pt-2">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d4b47a] transition-all shadow-lg active:scale-95"
              >
                <span>Book Your Session Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxLook && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveLightboxLook(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#151515] rounded-2xl overflow-hidden border border-[#C6A56B]/30 shadow-2xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxLook(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center">
              <CustomImage
                photoKey={activeLightboxLook.originalFilename || activeLightboxLook.id}
                originalFilename={activeLightboxLook.originalFilename}
                defaultSrc={activeLightboxLook.image}
                alt={activeLightboxLook.title}
                className="max-h-[80vh] w-full object-contain"
              />
            </div>

            {/* Metadata */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C6A56B]">
                  {activeLightboxLook.category}
                </span>
                <h4 className="font-serif text-2xl font-semibold text-white">
                  {activeLightboxLook.title}
                </h4>
                <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 text-xs space-y-1">
                  <span className="text-stone-400 block font-medium">Hair Unit Used:</span>
                  <span className="text-[#C6A56B] font-semibold">{activeLightboxLook.hairUsed}</span>
                </div>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {activeLightboxLook.description}
                </p>
                <div className="space-y-1 pt-2 border-t border-stone-800 text-xs text-stone-400">
                  <span className="font-semibold text-stone-300 block">Styling Breakdown:</span>
                  <p>{activeLightboxLook.technique}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-800">
                <button
                  onClick={() => {
                    const look = activeLightboxLook;
                    setActiveLightboxLook(null);
                    onBookLook(look);
                  }}
                  className="w-full py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book This Style</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
