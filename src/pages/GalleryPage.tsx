import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, ArrowRight, Calendar, MessageSquare, Maximize2, X } from 'lucide-react';
import { customerLooksData } from '../data/initialData';
import { CustomImage } from '../components/CustomImage';
import { BusinessConfig, CustomerLook } from '../types';

interface GalleryPageProps {
  config: BusinessConfig;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ config }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxLook, setLightboxLook] = useState<CustomerLook | null>(null);

  const categories = [
    'All',
    'Bouncy Curls',
    'Sleek Straight',
    'Bob Cuts',
    'Colored Hair',
    'Pixie & Waves',
    'Braided Styles'
  ];

  const filteredLooks = customerLooksData.filter(
    (look) => selectedCategory === 'All' || look.category === selectedCategory
  );

  return (
    <div className="bg-[#151515] text-white min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Transformations</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-100">
            Real Customer Transformations
          </h1>
          <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            Every crown reflects precision artistry and personalized confidence. Browse real photographs of our clients wearing their custom installed units.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C6A56B] text-[#151515] font-semibold shadow-md'
                    : 'bg-stone-900 border border-stone-800 text-stone-300 hover:bg-stone-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredLooks.map((look) => (
            <div
              key={look.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-[#C6A56B]/50 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Frame with Link to Details */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  <Link to={`/gallery/${look.id}`} className="block w-full h-full">
                    <CustomImage
                      photoKey={look.originalFilename || look.id}
                      originalFilename={look.originalFilename}
                      defaultSrc={look.image}
                      alt={look.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </Link>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90 pointer-events-none" />

                  {/* Tag Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#151515]/85 backdrop-blur-md text-[#C6A56B] border border-[#C6A56B]/30">
                    {look.tag}
                  </span>

                  {/* Lightbox Trigger Icon */}
                  <button
                    onClick={() => setLightboxLook(look)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#C6A56B] hover:text-[#151515] transition-all duration-200 cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                    title="Enlarge photo"
                    aria-label="Enlarge photo"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A56B]">
                      {look.category}
                    </span>
                    <Link to={`/gallery/${look.id}`} className="block">
                      <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#C6A56B] transition-colors line-clamp-1">
                        {look.title}
                      </h3>
                    </Link>
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed">
                    {look.technique}
                  </p>
                  <span className="text-[11px] text-[#C6A56B] font-mono block">
                    {look.hairUsed}
                  </span>
                </div>
              </div>

              {/* Action Buttons (>= 44px touch targets) */}
              <div className="p-4 pt-0 grid grid-cols-2 gap-2 border-t border-stone-800/80 mt-2">
                <Link
                  to={`/gallery/${look.id}`}
                  className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-stone-200 bg-stone-800 hover:bg-stone-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </Link>

                <Link
                  to={`/booking?notes=${encodeURIComponent(`Recreate look: "${look.title}" with hair unit ${look.hairUsed}`)}`}
                  className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-[#151515] bg-[#C6A56B] hover:bg-[#d8b97d] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Recreate</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxLook && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setLightboxLook(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[90vh] bg-stone-900 rounded-2xl overflow-hidden border border-stone-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxLook(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-10 min-w-[44px] min-h-[44px] rounded-full bg-black/70 text-white hover:text-[#C6A56B] flex items-center justify-center cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={lightboxLook.image}
                  alt={lightboxLook.title}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="p-6 bg-stone-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-semibold block">{lightboxLook.category}</span>
                  <h3 className="font-serif text-xl font-semibold text-white">{lightboxLook.title}</h3>
                  <p className="text-stone-400 text-xs">{lightboxLook.hairUsed}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/gallery/${lightboxLook.id}`}
                    onClick={() => setLightboxLook(null)}
                    className="min-h-[44px] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Read Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
