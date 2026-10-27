import React, { useState } from 'react';
import { Sparkles, Clock, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { BeautyService } from '../types';
import { CustomImage } from './CustomImage';

interface ServicesSectionProps {
  services: BeautyService[];
  onSelectService: (service: BeautyService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, onSelectService }) => {
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'proposed'>('all');

  const filteredServices = services.filter((svc) => {
    if (filter === 'confirmed') return svc.isConfirmed;
    if (filter === 'proposed') return !svc.isConfirmed;
    return true;
  });

  return (
    <section id="services" className="py-24 bg-[#FAF7F2] text-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon & Craftsmanship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            Wig Services & Professional Installation
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            From seamless lace melts and customized hairlines to deep restorative revamps. Review our confirmed offerings alongside proposed service options pending owner confirmation.
          </p>

          {/* Transparent Status Filter */}
          <div className="inline-flex p-1 bg-stone-200/70 rounded-full text-xs font-medium pt-1 mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#151515] text-white shadow-sm'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              All Services ({services.length})
            </button>
            <button
              onClick={() => setFilter('confirmed')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                filter === 'confirmed'
                  ? 'bg-[#151515] text-white shadow-sm'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              Confirmed Services
            </button>
            <button
              onClick={() => setFilter('proposed')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                filter === 'proposed'
                  ? 'bg-[#151515] text-white shadow-sm'
                  : 'text-stone-600 hover:text-black'
              }`}
            >
              Proposed Examples
            </button>
          </div>
        </div>

        {/* Notice for transparency */}
        <div className="mt-8 max-w-2xl mx-auto p-3.5 bg-amber-50/80 border border-amber-200/60 rounded-xl text-amber-900 text-xs flex items-start gap-2.5">
          <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            <strong>Note for Business Owner:</strong> Verified services (like Free Installation on select wigs) are marked with <span className="font-semibold text-emerald-800">Confirmed</span>. Services awaiting your specific salon pricing or duration are clearly badged as <span className="font-semibold text-amber-800">Proposed Example</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                  <CustomImage
                    photoKey={service.originalFilename || service.id}
                    originalFilename={service.originalFilename}
                    defaultSrc={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    {service.isConfirmed ? (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        ✓ Confirmed Service
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        Proposed Example
                      </span>
                    )}
                  </div>

                  {/* Price Tag if provided */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#151515]/85 backdrop-blur-md border border-[#C6A56B]/30 text-white text-xs font-semibold">
                    {service.priceText}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="uppercase tracking-wider font-semibold text-[#C6A56B]">{service.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-stone-900 group-hover:text-[#C6A56B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                      Includes:
                    </span>
                    {service.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-stone-100 text-stone-800 hover:bg-[#151515] hover:text-[#C6A56B] transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
