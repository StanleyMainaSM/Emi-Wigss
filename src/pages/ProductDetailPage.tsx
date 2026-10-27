import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Check, Sparkles, MessageSquare, ShieldCheck, Heart, Share2, Calendar, ShoppingBag, Eye, ArrowRight } from 'lucide-react';
import { productsData } from '../data/initialData';
import { BusinessConfig, WigProduct } from '../types';
import { CustomImage } from '../components/CustomImage';

interface ProductDetailPageProps {
  config: BusinessConfig;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ config }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedLength, setSelectedLength] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);

  // Find product by id or slug
  const product = productsData.find((p) => p.id === id);

  // Fallback if not found
  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900">Product Not Found</h2>
          <p className="text-stone-600 text-sm">
            We couldn't find the wig or product you were looking for. It may have been renamed or updated in our catalog.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/shop')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C6A56B] text-[#151515] hover:bg-[#d8b97d] transition-all cursor-pointer min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Browse All Wigs</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Format currency
  const formatPrice = (amount: number) => {
    return `${config.currency} ${amount.toLocaleString()}`;
  };

  // Safe back navigation handler
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/shop');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} | ${config.brandName}`,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // WhatsApp Order message
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${config.brandName}, I would like to order or enquire about the ${product.name} priced at ${formatPrice(product.price)}${
      selectedLength ? ` (Length: ${selectedLength})` : ''
    }${selectedColor ? ` (Color: ${selectedColor})` : ''}. Is this in stock?`
  )}`;

  // Related products
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && (p.category === product.category || p.category.includes('Wig')))
    .slice(0, 4);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back Arrow Bar */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            {/* Clickable Back Arrow with at least 44x44px touch target on mobile */}
            <button
              onClick={handleBack}
              aria-label="Go back to previous page"
              className="min-w-[44px] min-h-[44px] w-11 h-11 rounded-full bg-white border border-stone-300 text-stone-800 hover:text-[#C6A56B] hover:border-[#C6A56B] hover:bg-stone-50 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer active:scale-95 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="text-xs text-stone-500 hidden sm:flex items-center gap-1.5">
              <Link to="/" className="hover:text-[#C6A56B] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-[#C6A56B] transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-stone-900 font-medium truncate max-w-[200px]">{product.name}</span>
            </div>
            <button
              onClick={handleBack}
              className="text-xs font-semibold text-stone-600 hover:text-[#C6A56B] transition-colors sm:hidden flex items-center gap-1"
            >
              <span>Back to Products</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label="Share product"
              className="min-w-[44px] min-h-[44px] px-3.5 py-2 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:border-[#C6A56B] hover:text-[#C6A56B] transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{isCopied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Main Product Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-start">
          
          {/* Left Column: High-Res Authentic Image Frame */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-lg aspect-square group">
              <CustomImage
                photoKey={product.originalFilename || product.id}
                originalFilename={product.originalFilename}
                defaultSrc={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#151515]/90 text-[#C6A56B] border border-[#C6A56B]/40 shadow-md backdrop-blur">
                  {product.badge}
                </span>
              )}

              {/* In-Stock Indicator */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 backdrop-blur flex items-center gap-1.5 shadow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>In Stock & Ready</span>
              </div>
            </div>

            {/* Quality Seals */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                <Sparkles className="w-4 h-4 mx-auto text-[#C6A56B] mb-1" />
                <span className="font-semibold text-stone-800 block text-[11px]">100% Raw Hair</span>
                <span className="text-stone-500 text-[10px]">Cuticle aligned</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                <ShieldCheck className="w-4 h-4 mx-auto text-[#C6A56B] mb-1" />
                <span className="font-semibold text-stone-800 block text-[11px]">HD Invisible Lace</span>
                <span className="text-stone-500 text-[10px]">Scalp illusion</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-stone-200/80 shadow-xs">
                <Check className="w-4 h-4 mx-auto text-[#C6A56B] mb-1" />
                <span className="font-semibold text-stone-800 block text-[11px]">Melt Guaranteed</span>
                <span className="text-stone-500 text-[10px]">Zero glue visible</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Product Specifications & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Category & Title */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#C6A56B]">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-stone-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-stone-400">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.priceNote && (
                <p className="text-xs font-semibold text-[#C6A56B]">
                  {product.priceNote}
                </p>
              )}
              <p className="text-[11px] text-stone-500 pt-1">
                ✓ Available for pick-up in Nairobi CBD studio or nationwide courier delivery.
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                About This Crown
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Key Specifications Grid */}
            <div className="rounded-xl bg-white border border-stone-200 p-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 pb-2 border-b border-stone-100">
                Wig Specifications
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {product.lengths && product.lengths.length > 0 && (
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Available Lengths</span>
                    <span className="font-semibold text-stone-800">{product.lengths.join(', ')}</span>
                  </div>
                )}
                {product.laceType && (
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Lace Construction</span>
                    <span className="font-semibold text-stone-800">{product.laceType}</span>
                  </div>
                )}
                {product.density && (
                  <div>
                    <span className="text-stone-400 block text-[10px] uppercase">Fullness / Density</span>
                    <span className="font-semibold text-stone-800">{product.density}</span>
                  </div>
                )}
                {product.colors && product.colors.length > 0 && (
                  <div className="col-span-2">
                    <span className="text-stone-400 block text-[10px] uppercase">Colorway</span>
                    <span className="font-semibold text-stone-800">{product.colors.join(' • ')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features Bullet List */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Included Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-white p-2.5 rounded-lg border border-stone-100">
                      <Check className="w-4 h-4 text-[#C6A56B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons: Order via WhatsApp & Book Install */}
            <div className="pt-2 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order on WhatsApp: {config.phone}</span>
              </a>

              <Link
                to={`/booking?service=lace-front-install&notes=${encodeURIComponent(`Interested in purchasing and installing: ${product.name} (${formatPrice(product.price)})`)}`}
                className="w-full min-h-[48px] py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#151515] text-[#C6A56B] hover:bg-black hover:text-white border border-[#C6A56B]/40 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Installation with this Wig</span>
              </Link>
            </div>

            {/* Care Guide Notice */}
            <div className="p-3.5 bg-stone-100/80 rounded-xl text-stone-600 text-xs space-y-1">
              <span className="font-semibold text-stone-900 block">Lead Stylist Recommendation:</span>
              <p className="text-[11px] leading-relaxed">
                Maintain this unit with alcohol-free leave-in conditioner and a silk bonnet at night. We recommend the Enzo Keratin Hair Serum for thermal protection.
              </p>
            </div>

          </div>

        </div>

        {/* Related Products Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-stone-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C6A56B]">More From Our Collection</span>
                <h2 className="font-serif text-2xl font-semibold text-stone-900">You May Also Love</h2>
              </div>
              <Link
                to="/shop"
                className="text-xs font-semibold text-[#C6A56B] hover:text-[#b39257] flex items-center gap-1 group"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#C6A56B]/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-md"
                >
                  <Link to={`/product/${rel.id}`} className="block">
                    <div className="relative aspect-square overflow-hidden bg-stone-100">
                      <CustomImage
                        photoKey={rel.originalFilename || rel.id}
                        originalFilename={rel.originalFilename}
                        defaultSrc={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {rel.badge && (
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase bg-[#151515] text-[#C6A56B]">
                          {rel.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4 space-y-1.5">
                      <span className="text-[10px] uppercase font-semibold text-[#C6A56B] block">
                        {rel.category}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-stone-900 group-hover:text-[#C6A56B] line-clamp-1">
                        {rel.name}
                      </h4>
                      <span className="font-bold text-stone-900 text-sm block">
                        {formatPrice(rel.price)}
                      </span>
                    </div>
                  </Link>
                  <div className="p-4 pt-0">
                    <Link
                      to={`/product/${rel.id}`}
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
