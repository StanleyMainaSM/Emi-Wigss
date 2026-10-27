import React, { useState } from 'react';
import { X, MessageSquare, Check, ShieldCheck, Sparkles, Tag } from 'lucide-react';
import { WigProduct, BusinessConfig } from '../types';
import { CustomImage } from './CustomImage';

interface ProductModalProps {
  product: WigProduct | null;
  onClose: () => void;
  config: BusinessConfig;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, config }) => {
  if (!product) return null;

  const [selectedLength, setSelectedLength] = useState<string>(
    product.lengths && product.lengths.length > 0 ? product.lengths[0] : ''
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors && product.colors.length > 0 ? product.colors[0] : ''
  );

  const formatPrice = (amount: number) => {
    return `${config.currency} ${amount.toLocaleString()}`;
  };

  // Build formatted WhatsApp message
  const whatsappText = `Hello ${config.brandName}, I would like to order/enquire about:
• Product: ${product.name}
• Price: ${formatPrice(product.price)}${product.priceNote ? ` (${product.priceNote})` : ''}
${selectedLength ? `• Preferred Length: ${selectedLength}\n` : ''}${selectedColor ? `• Preferred Color: ${selectedColor}\n` : ''}
Please let me know about current availability and payment/delivery details. Thank you!`;

  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="relative bg-[#FAF7F2] text-[#151515] rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#C6A56B]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-black shadow transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative bg-stone-900 min-h-[300px] md:min-h-full">
            <CustomImage
              photoKey={product.originalFilename || product.id}
              originalFilename={product.originalFilename}
              defaultSrc={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#C6A56B] text-[#151515] shadow">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C6A56B] bg-[#C6A56B]/10 px-2.5 py-0.5 rounded-full">
                  {product.category}
                </span>
                {product.inStock && (
                  <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available to Order
                  </span>
                )}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 leading-snug">
                {product.name}
              </h2>

              {/* Price */}
              <div className="pb-3 border-b border-stone-200">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-stone-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-stone-400">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                {product.priceNote && (
                  <span className="text-xs text-[#C6A56B] font-medium block mt-1">
                    {product.priceNote}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {product.description}
              </p>

              {/* Specifications: Lengths */}
              {product.lengths && product.lengths.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                    Available Length:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.lengths.map((len) => (
                      <button
                        key={len}
                        type="button"
                        onClick={() => setSelectedLength(len)}
                        className={`px-3 py-1 text-xs rounded-lg border transition-all cursor-pointer ${
                          selectedLength === len
                            ? 'bg-[#151515] text-[#C6A56B] border-[#151515] font-semibold'
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications: Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                    Color Variation:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 text-xs rounded-lg border transition-all cursor-pointer ${
                          selectedColor === color
                            ? 'bg-[#151515] text-[#C6A56B] border-[#151515] font-semibold'
                            : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                  Product Highlights:
                </span>
                <div className="grid grid-cols-1 gap-1 text-xs text-stone-700">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C6A56B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-stone-200 space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold tracking-wider uppercase bg-[#25D366] text-white hover:bg-[#20b858] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire & Order on WhatsApp</span>
              </a>
              <p className="text-[11px] text-stone-400 text-center">
                Honest ordering demonstration: Connects directly with Emmi Wigs on WhatsApp ({config.phone}) with your selected item pre-filled.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
