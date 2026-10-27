import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Calendar, MessageSquare, ShieldCheck, ArrowRight, Eye, Tag } from 'lucide-react';
import { customerLooksData, productsData } from '../data/initialData';
import { BusinessConfig } from '../types';
import { CustomImage } from '../components/CustomImage';

interface LookDetailPageProps {
  config: BusinessConfig;
}

export const LookDetailPage: React.FC<LookDetailPageProps> = ({ config }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const look = customerLooksData.find((l) => l.id === id);

  if (!look) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#151515] text-white">
        <div className="max-w-md w-full text-center bg-stone-900 p-8 rounded-2xl border border-stone-800 shadow-sm space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-stone-800 flex items-center justify-center text-stone-400">
            <Sparkles className="w-8 h-8 text-[#C6A56B]" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-100">Look Not Found</h2>
          <p className="text-stone-400 text-sm">
            We couldn't find the requested client transformation in our portfolio.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/gallery')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Browse All Transformations</span>
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
      navigate('/gallery');
    }
  };

  const whatsappRecreateUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${config.brandName}, I saw the transformation "${look.title}" (${look.hairUsed}) on your website gallery. I would love to recreate this exact look! Can we schedule an appointment?`
  )}`;

  // Find matching product if name overlaps
  const matchingProduct = productsData.find(
    (p) => look.hairUsed.toLowerCase().includes(p.name.slice(0, 10).toLowerCase()) ||
           look.title.toLowerCase().includes(p.category.toLowerCase())
  );

  const otherLooks = customerLooksData.filter((l) => l.id !== look.id).slice(0, 3);

  return (
    <div className="bg-[#151515] text-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Arrow Bar */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-stone-800">
          <div className="flex items-center gap-3">
            {/* Clickable Back Arrow with at least 44x44px touch target on mobile */}
            <button
              onClick={handleBack}
              aria-label="Go back to transformations gallery"
              className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-stone-900 border border-stone-700 text-stone-200 hover:text-[#C6A56B] hover:border-[#C6A56B] hover:bg-stone-800 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer active:scale-95 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="text-xs text-stone-400 hidden sm:flex items-center gap-1.5">
              <Link to="/" className="hover:text-[#C6A56B] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/gallery" className="hover:text-[#C6A56B] transition-colors">Transformations</Link>
              <span>/</span>
              <span className="text-stone-100 font-medium truncate max-w-[200px]">{look.title}</span>
            </div>
            <button
              onClick={handleBack}
              className="text-xs font-semibold text-stone-400 hover:text-[#C6A56B] transition-colors sm:hidden flex items-center gap-1"
            >
              <span>Back to Gallery</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-stone-900 border border-stone-800 text-[#C6A56B] shadow-xs">
              Verified Client Install
            </span>
          </div>
        </div>

        {/* Main Transformation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          
          {/* Left Column: Full Client Photograph */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-black border border-stone-800 shadow-2xl aspect-[4/5] group">
              <CustomImage
                photoKey={look.originalFilename || look.id}
                originalFilename={look.originalFilename}
                defaultSrc={look.image}
                alt={look.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/80 text-[#C6A56B] border border-[#C6A56B]/40 backdrop-blur-md shadow">
                  {look.tag}
                </span>
              </div>
            </div>

            {/* Hair Unit Used Chip */}
            <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 block">Hair Unit Installed:</span>
                <span className="font-mono text-sm font-semibold text-[#C6A56B]">{look.hairUsed}</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#C6A56B]/15 border border-[#C6A56B]/30 flex items-center justify-center text-[#C6A56B]">
                <Tag className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Column: Technique Breakdown & Recreate Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">
                {look.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-100 leading-tight">
                {look.title}
              </h1>
            </div>

            {/* Technique Details */}
            <div className="p-5 rounded-xl bg-stone-900 border border-stone-800 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A56B] pb-2 border-b border-stone-800">
                Installation & Styling Technique
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                {look.technique}
              </p>
            </div>

            {/* Client Experience / Story */}
            <div className="p-5 rounded-xl bg-stone-900 border border-stone-800 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#C6A56B] pb-2 border-b border-stone-800">
                Client Result Notes
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed font-light">
                {look.description}
              </p>
            </div>

            {/* Matching Wig Link */}
            {matchingProduct && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-stone-900 to-stone-800/80 border border-[#C6A56B]/30 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-black shrink-0 border border-stone-700">
                    <CustomImage
                      photoKey={matchingProduct.originalFilename || matchingProduct.id}
                      originalFilename={matchingProduct.originalFilename}
                      defaultSrc={matchingProduct.image}
                      alt={matchingProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block uppercase">Shop This Wig:</span>
                    <span className="text-xs font-semibold text-stone-100 line-clamp-1">{matchingProduct.name}</span>
                  </div>
                </div>
                <Link
                  to={`/product/${matchingProduct.id}`}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-colors shrink-0"
                >
                  View Wig
                </Link>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <Link
                to={`/booking?notes=${encodeURIComponent(`Recreate look: "${look.title}" with hair unit ${look.hairUsed}`)}`}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Look Appointment</span>
              </Link>

              <a
                href={whatsappRecreateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* More Client Looks */}
        {otherLooks.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C6A56B]">More Transformations</span>
                <h2 className="font-serif text-2xl font-semibold text-stone-100">Other Customer Looks</h2>
              </div>
              <Link
                to="/gallery"
                className="text-xs font-semibold text-[#C6A56B] hover:text-[#d8b97d] flex items-center gap-1 group"
              >
                <span>Full Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherLooks.map((other) => (
                <div
                  key={other.id}
                  className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-[#C6A56B]/50 transition-all group flex flex-col justify-between"
                >
                  <Link to={`/gallery/${other.id}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-black">
                      <CustomImage
                        photoKey={other.originalFilename || other.id}
                        originalFilename={other.originalFilename}
                        defaultSrc={other.image}
                        alt={other.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-[10px] text-[#C6A56B] uppercase font-semibold block">{other.category}</span>
                        <h4 className="font-serif text-base font-semibold text-white line-clamp-1">{other.title}</h4>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4 pt-2">
                    <Link
                      to={`/gallery/${other.id}`}
                      className="w-full min-h-[44px] py-2 px-3 rounded-xl text-xs font-semibold text-stone-200 bg-stone-800 hover:bg-[#C6A56B] hover:text-[#151515] transition-colors flex items-center justify-center gap-1"
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
