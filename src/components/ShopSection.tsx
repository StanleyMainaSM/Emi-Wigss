import React, { useState } from 'react';
import { Search, Sparkles, MessageSquare, Eye, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { WigProduct, BusinessConfig } from '../types';
import { CustomImage } from './CustomImage';

interface ShopSectionProps {
  products: WigProduct[];
  config: BusinessConfig;
  onOpenProductModal: (product: WigProduct) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  products,
  config,
  onOpenProductModal
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const categories = [
    'All',
    'Curls & Waves',
    'Lace Wigs',
    'Bobs & Pixies',
    'Braided Wigs',
    'Hair Care & Accessories'
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  const formatPrice = (amount: number) => {
    return `${config.currency} ${amount.toLocaleString()}`;
  };

  return (
    <section id="shop" className="py-24 bg-white text-[#151515] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            Shop Wigs & Beauty Products
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Crafted from 100% human hair and single donor virgin bundles. All catalog items reflect the actual inventory, lengths, and pricing of Emmi Wigs.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#151515] text-[#C6A56B] font-semibold shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search wigs, bobs, curls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#C6A56B] focus:bg-white text-stone-900 transition-colors"
              />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort wigs by price or featured"
                className="appearance-none pl-3 pr-8 py-2 text-xs rounded-full bg-stone-50 border border-stone-300 text-stone-700 font-medium focus:outline-none focus:border-[#C6A56B] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-stone-50 rounded-2xl mt-8">
            <p className="text-stone-500 text-sm">No wigs or products match your search or filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#C6A56B] underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-stone-200/80 hover:border-[#C6A56B]/60 transition-all duration-300 group flex flex-col justify-between hover:shadow-lg"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative aspect-square overflow-hidden bg-stone-200">
                    <CustomImage
                      photoKey={product.originalFilename || product.id}
                      originalFilename={product.originalFilename}
                      defaultSrc={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#151515] text-[#C6A56B] border border-[#C6A56B]/30 shadow">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={() => onOpenProductModal(product)}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 text-stone-800 hover:bg-[#151515] hover:text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-all duration-200 shadow cursor-pointer"
                      title="Quick View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A56B] block">
                      {product.category}
                    </span>

                    <h3
                      onClick={() => onOpenProductModal(product)}
                      className="font-serif text-lg font-semibold text-stone-900 group-hover:text-[#C6A56B] transition-colors line-clamp-1 cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Price Block */}
                    <div className="pt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-stone-900 text-base sm:text-lg">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs line-through text-stone-400">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      {product.priceNote && (
                        <span className="text-[11px] text-[#C6A56B] font-medium block">
                          {product.priceNote}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenProductModal(product)}
                    className="py-2 px-3 rounded-xl text-xs font-semibold text-stone-800 bg-white border border-stone-300 hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  <a
                    href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
                      `Hello ${config.brandName}, I would like to order or enquire about the ${product.name} priced at ${formatPrice(product.price)}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
