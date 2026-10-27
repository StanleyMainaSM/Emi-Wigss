import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Check, Calendar, MessageSquare, Sparkles, ShieldCheck, HeartHandshake, ArrowRight, HelpCircle } from 'lucide-react';
import { servicesData } from '../data/initialData';
import { BusinessConfig } from '../types';
import { CustomImage } from '../components/CustomImage';

interface ServiceDetailPageProps {
  config: BusinessConfig;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ config }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900">Service Not Found</h2>
          <p className="text-stone-600 text-sm">
            We couldn't find the requested salon service. Browse our complete menu to find the perfect styling experience.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/services')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>View All Services</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Safe back navigation handler
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/services');
    }
  };

  const whatsappConsultUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${config.brandName}, I would like to consult or book the service: "${service.title}" (${service.priceText}). When is your next available slot?`
  )}`;

  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Arrow Bar */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            {/* Clickable Back Arrow with at least 44x44px touch target on mobile */}
            <button
              onClick={handleBack}
              aria-label="Go back to services"
              className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white border border-stone-300 text-stone-800 hover:text-[#C6A56B] hover:border-[#C6A56B] hover:bg-stone-50 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer active:scale-95 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="text-xs text-stone-500 hidden sm:flex items-center gap-1.5">
              <Link to="/" className="hover:text-[#C6A56B] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-[#C6A56B] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-stone-900 font-medium truncate max-w-[200px]">{service.title}</span>
            </div>
            <button
              onClick={handleBack}
              className="text-xs font-semibold text-stone-600 hover:text-[#C6A56B] transition-colors sm:hidden flex items-center gap-1"
            >
              <span>Back to Services</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white border border-stone-200 text-stone-700 shadow-xs hidden sm:inline-block">
              Salon Suite, Nairobi CBD
            </span>
          </div>
        </div>

        {/* Main Service Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          
          {/* Left Column: Visual & Status */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-lg aspect-[4/3] sm:aspect-square group">
              <CustomImage
                photoKey={service.originalFilename || service.id}
                originalFilename={service.originalFilename}
                defaultSrc={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                {service.isConfirmed ? (
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/85 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow">
                    ✓ Confirmed Service
                  </span>
                ) : (
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-950/85 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow">
                    Proposed Example
                  </span>
                )}
              </div>

              {/* Price Tag Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#151515]/85 backdrop-blur-md border border-[#C6A56B]/30 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-semibold block">Pricing</span>
                  <span className="font-serif text-base font-semibold">{service.priceText}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-300">
                  <Clock className="w-4 h-4 text-[#C6A56B]" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-stone-800">
                <ShieldCheck className="w-4 h-4 text-[#C6A56B]" />
                <span>Edge Protection Priority</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                We never use harsh glues that strip your natural edges. All adhesives are gentle, skin-safe, and water-resistant.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Breakdown & Booking */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">
                {service.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
                {service.title}
              </h1>
            </div>

            {/* Description */}
            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 pb-2 border-b border-stone-100">
                Service Overview
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            {/* What's Included */}
            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 pb-2 border-b border-stone-100 flex items-center justify-between">
                <span>Everything Included in this Service</span>
                <span className="text-[11px] text-[#C6A56B] lowercase font-normal">all-inclusive</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <Check className="w-4 h-4 text-[#C6A56B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Appointment Preparation Checklist */}
            <div className="p-5 rounded-xl bg-stone-100/90 border border-stone-200/80 space-y-2">
              <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-[#C6A56B]" />
                <span>How to Prepare for Your Appointment</span>
              </h4>
              <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside leading-relaxed">
                <li>Arrive with your natural hair washed and fully blown out, or request our prep wash service.</li>
                <li>If bringing your own wig, ensure it is 100% human hair and clean.</li>
                <li>Appointments can be rescheduled with at least 24 hours notice.</li>
              </ul>
            </div>

            {/* CTAs: Book Appointment & WhatsApp Consult */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                to={`/booking?service=${service.id}&notes=${encodeURIComponent(`Booking inquiry for: ${service.title}`)}`}
                className="min-h-[48px] py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service Online</span>
              </Link>

              <a
                href={whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] py-3.5 px-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Other Services Recommendations */}
        {otherServices.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C6A56B]">Explore More</span>
                <h2 className="font-serif text-2xl font-semibold text-stone-900">Other Salon Services</h2>
              </div>
              <Link
                to="/services"
                className="text-xs font-semibold text-[#C6A56B] hover:text-[#b39257] flex items-center gap-1 group"
              >
                <span>Full Service Menu</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherServices.map((other) => (
                <div
                  key={other.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <Link to={`/service/${other.id}`} className="block">
                    <div className="relative h-44 overflow-hidden bg-stone-100">
                      <CustomImage
                        photoKey={other.originalFilename || other.id}
                        originalFilename={other.originalFilename}
                        defaultSrc={other.image}
                        alt={other.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded bg-black/80 text-white text-[11px] font-semibold">
                        {other.priceText}
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <span className="text-[10px] uppercase font-semibold text-[#C6A56B] block">
                        {other.category}
                      </span>
                      <h4 className="font-serif text-base font-semibold text-stone-900 group-hover:text-[#C6A56B] line-clamp-1">
                        {other.title}
                      </h4>
                      <p className="text-stone-500 text-xs line-clamp-2">
                        {other.description}
                      </p>
                    </div>
                  </Link>
                  <div className="p-4 pt-0">
                    <Link
                      to={`/service/${other.id}`}
                      className="w-full min-h-[44px] py-2 px-3 rounded-xl text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-[#151515] hover:text-[#C6A56B] transition-colors flex items-center justify-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
