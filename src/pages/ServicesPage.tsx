import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, Sparkles, HelpCircle, ArrowRight, Calendar, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { servicesData } from '../data/initialData';
import { CustomImage } from '../components/CustomImage';
import { BusinessConfig } from '../types';

interface ServicesPageProps {
  config: BusinessConfig;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ config }) => {
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'proposed'>('all');

  const filteredServices = servicesData.filter((service) => {
    if (filter === 'confirmed') return service.isConfirmed;
    if (filter === 'proposed') return !service.isConfirmed;
    return true;
  });

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16 text-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Suite Artistry</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900">
            Installation & Hair Care Menu
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            From seamless lace frontal melts and closure alignments to restorative revamps and custom coloring, our lead stylists ensure an undetectable finish that protects your natural hairline.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setFilter('all')}
              className={`min-h-[40px] px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#151515] text-[#C6A56B] shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-black'
              }`}
            >
              All Services ({servicesData.length})
            </button>
            <button
              onClick={() => setFilter('confirmed')}
              className={`min-h-[40px] px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'confirmed'
                  ? 'bg-[#151515] text-[#C6A56B] shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-black'
              }`}
            >
              Verified Confirmed Services
            </button>
            <button
              onClick={() => setFilter('proposed')}
              className={`min-h-[40px] px-5 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filter === 'proposed'
                  ? 'bg-[#151515] text-[#C6A56B] shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-black'
              }`}
            >
              Proposed Examples
            </button>
          </div>
        </div>

        {/* Business Transparency Notice */}
        <div className="max-w-3xl mx-auto mb-10 p-4 bg-amber-50/90 border border-amber-200 rounded-xl text-amber-950 text-xs flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Transparency for Salon Owner:</strong> Verified services (like Free Installation on select wigs) are marked with <span className="font-semibold text-emerald-800">Confirmed</span>. Services awaiting your specific salon pricing or duration are badged as <span className="font-semibold text-amber-800">Proposed Example</span>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <Link to={`/service/${service.id}`} className="block relative h-52 w-full overflow-hidden bg-stone-100">
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
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        ✓ Confirmed Service
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        Proposed Example
                      </span>
                    )}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#151515]/85 backdrop-blur-md border border-[#C6A56B]/30 text-white text-xs font-semibold">
                    {service.priceText}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="uppercase tracking-wider font-semibold text-[#C6A56B]">{service.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {service.duration}
                    </span>
                  </div>

                  <Link to={`/service/${service.id}`} className="block">
                    <h3 className="font-serif text-xl font-semibold text-stone-900 group-hover:text-[#C6A56B] transition-colors">
                      {service.title}
                    </h3>
                  </Link>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-1.5 pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 block">
                      Includes:
                    </span>
                    {service.includes.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                    {service.includes.length > 3 && (
                      <span className="text-[11px] text-[#C6A56B] font-medium block">
                        + {service.includes.length - 3} more inclusions
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons (>= 44px touch targets) */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                <Link
                  to={`/service/${service.id}`}
                  className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/booking?service=${service.id}`}
                  className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#151515] hover:bg-[#C6A56B] hover:text-[#151515] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Now</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
