import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Star, Flame, Eye, Calendar, MessageSquare, Award } from 'lucide-react';
import { Hero } from '../components/Hero';
import { CustomImage } from '../components/CustomImage';
import { productsData, servicesData, customerLooksData, clientReviews } from '../data/initialData';
import { BusinessConfig } from '../types';

interface HomePageProps {
  config: BusinessConfig;
}

export const HomePage: React.FC<HomePageProps> = ({ config }) => {
  const navigate = useNavigate();

  // Highlight curated selections for homepage
  const featuredWigs = productsData.slice(0, 4);
  const featuredServices = servicesData.slice(0, 3);
  const featuredLooks = customerLooksData.slice(0, 3);

  const formatPrice = (amount: number) => {
    return `${config.currency} ${amount.toLocaleString()}`;
  };

  return (
    <div className="bg-[#FAF7F2] text-[#151515]">
      
      {/* 1. Hero Section */}
      <Hero
        config={config}
        onBookNow={() => navigate('/booking')}
        onExploreShop={() => navigate('/shop')}
      />

      {/* 2. Trust Assurance Strip */}
      <section className="bg-stone-900 text-stone-300 py-6 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
            <div className="space-y-1">
              <span className="text-[#C6A56B] font-serif text-lg font-bold block">100% Raw Hair</span>
              <span className="text-stone-400 text-[11px]">Single donor drawn cuticles</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#C6A56B] font-serif text-lg font-bold block">Melted HD Lace</span>
              <span className="text-stone-400 text-[11px]">Bleached knots & baby hairs</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#C6A56B] font-serif text-lg font-bold block">Free Installation</span>
              <span className="text-stone-400 text-[11px]">Included with select wig units</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#C6A56B] font-serif text-lg font-bold block">Fast Dispatch</span>
              <span className="text-stone-400 text-[11px]">Nairobi CBD & nationwide courier</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products Showcase */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bestselling Units</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
              Featured Luxury Wigs
            </h2>
            <p className="text-stone-600 text-sm max-w-xl font-light">
              Explore our most requested raw human hair units, featuring pre-plucked HD lace frontals and razor-sharp cuts.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A56B] hover:text-[#b09054] transition-colors group self-start md:self-auto min-h-[44px]"
          >
            <span>View All Wigs & Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWigs.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#C6A56B]/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-stone-100">
                  <CustomImage
                    photoKey={product.originalFilename || product.id}
                    originalFilename={product.originalFilename}
                    defaultSrc={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#151515] text-[#C6A56B] border border-[#C6A56B]/30 shadow">
                      {product.badge}
                    </span>
                  )}
                </Link>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A56B] block">
                    {product.category}
                  </span>
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-serif text-base font-semibold text-stone-900 group-hover:text-[#C6A56B] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="pt-1">
                    <span className="font-bold text-stone-900 text-base">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons with min 44px height */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <Link
                  to={`/product/${product.id}`}
                  className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-[#151515] hover:text-[#C6A56B] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </Link>
                <a
                  href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                    `Hello ${config.brandName}, I would like to order or enquire about the ${product.name} priced at ${formatPrice(product.price)}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Signature Services Teaser */}
      <section className="py-20 sm:py-24 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Salon Suite Artistry</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900">
                Signature Installation Services
              </h2>
              <p className="text-stone-600 text-sm max-w-xl font-light">
                Professional lace customization, tinting to your exact undertone, and precision installs that look naturally grown from your scalp.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A56B] hover:text-[#b09054] transition-colors group self-start md:self-auto min-h-[44px]"
            >
              <span>Explore All Salon Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#C6A56B]/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-md"
              >
                <div>
                  <Link to={`/service/${service.id}`} className="block relative h-52 overflow-hidden bg-stone-900">
                    <CustomImage
                      photoKey={service.originalFilename || service.id}
                      originalFilename={service.originalFilename}
                      defaultSrc={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      {service.isConfirmed ? (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                          ✓ Confirmed
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                          Proposed Example
                        </span>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#151515]/85 text-white text-xs font-semibold">
                      {service.priceText}
                    </div>
                  </Link>

                  <div className="p-6 space-y-3">
                    <span className="text-[10px] uppercase font-semibold text-[#C6A56B] block">
                      {service.category} • {service.duration}
                    </span>
                    <Link to={`/service/${service.id}`} className="block">
                      <h3 className="font-serif text-xl font-semibold text-stone-900 group-hover:text-[#C6A56B] transition-colors">
                        {service.title}
                      </h3>
                    </Link>
                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                  <Link
                    to={`/service/${service.id}`}
                    className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-stone-800 bg-white border border-stone-300 hover:bg-stone-100 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/booking?service=${service.id}`}
                    className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#151515] hover:bg-[#C6A56B] hover:text-[#151515] transition-colors flex items-center justify-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transformations & Real Customer Looks */}
      <section className="py-20 sm:py-24 bg-[#151515] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Real Transformations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-100">
                Customer Looks & Studio Results
              </h2>
              <p className="text-stone-300 text-sm max-w-xl font-light">
                Witness real clients wearing their installed Emmi Wigs. Seamless HD hairlines and vibrant colors.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A56B] hover:text-[#d8b97d] transition-colors group self-start md:self-auto min-h-[44px]"
            >
              <span>View Full Transformation Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLooks.map((look) => (
              <div
                key={look.id}
                className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-[#C6A56B]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <Link to={`/gallery/${look.id}`} className="block relative aspect-[4/5] overflow-hidden bg-black">
                    <CustomImage
                      photoKey={look.originalFilename || look.id}
                      originalFilename={look.originalFilename}
                      defaultSrc={look.image}
                      alt={look.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold bg-black/80 text-[#C6A56B] border border-[#C6A56B]/30">
                      {look.tag}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] text-[#C6A56B] uppercase tracking-wider font-semibold block">{look.category}</span>
                      <h3 className="font-serif text-lg font-semibold text-white line-clamp-1">{look.title}</h3>
                    </div>
                  </Link>

                  <div className="p-5 space-y-2">
                    <p className="text-stone-400 text-xs line-clamp-2 leading-relaxed">
                      {look.technique}
                    </p>
                    <span className="text-[11px] font-mono text-stone-500 block">
                      Unit: {look.hairUsed}
                    </span>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/gallery/${look.id}`}
                    className="w-full min-h-[44px] py-2.5 px-4 rounded-xl text-xs font-semibold text-[#151515] bg-[#C6A56B] hover:bg-[#d8b97d] transition-all flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Transformation Details</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. About Teaser with Emmi Wigs Artistry */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 shadow-xl aspect-[3/4]">
              <img
                src="/assets/aistudio/EE_bab6f1cd.jpg"
                alt="Emmi Wigs Artisan Hair Craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#C6A56B] font-semibold">
                  Founder & Craft
                </span>
                <p className="font-serif text-xl font-medium">
                  Flawless Hairlines. Uncompromised Confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About {config.brandName}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
              Elevating the Art of the Invisible Lace Melt
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
              At <strong>{config.brandName}</strong>, we curate premium 100% human hair wigs with hand-crafted lace customization. Every piece is treated as a personal crown, ensuring healthy natural edge protection, customized knots, and effortless luxury.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-1">
                <span className="font-semibold text-stone-900 text-xs block">✓ 100% Single Donor Drawn</span>
                <p className="text-[11px] text-stone-500">Fullness from roots to ends, tangle-resistant shine.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-1">
                <span className="font-semibold text-stone-900 text-xs block">✓ Customized Skin Tone Match</span>
                <p className="text-[11px] text-stone-500">Lace tinting and bleached knots for an undetectable melt.</p>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#151515] text-[#C6A56B] hover:bg-black hover:text-white transition-all min-h-[44px]"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Reviews Strip */}
      <section className="py-20 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">
              Verified Client Experiences
            </span>
            <h2 className="font-serif text-3xl font-semibold text-stone-900">
              Loved by Women Across Kenya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientReviews.map((rev) => (
              <div key={rev.id} className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
                <div className="flex items-center gap-1 text-[#C6A56B]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-semibold text-stone-900 text-xs">{rev.name}</span>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">✓ Verified Client</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Booking Call to Action */}
      <section className="py-16 bg-[#151515] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">
            Reserve Your Styling Session
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-100">
            Ready to Experience the Ultimate Melt?
          </h2>
          <p className="text-stone-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Book your appointment online or contact our hotline directly on WhatsApp. We look forward to crowning your beauty.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/booking"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </Link>
            <a
              href={`https://wa.me/${config.whatsappNumber}?text=Hello%20${encodeURIComponent(config.brandName)},%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: {config.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
