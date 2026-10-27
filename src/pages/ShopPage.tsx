import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Eye, MessageSquare, ArrowUpDown, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { productsData } from '../data/initialData';
import { CustomImage } from '../components/CustomImage';
import { BusinessConfig } from '../types';

interface ShopPageProps {
  config: BusinessConfig;
}

export const ShopPage: React.FC<ShopPageProps> = ({ config }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const categories = [
    'All',
    'Lace Wigs',
    'Bobs & Pixies',
    'Curls & Waves',
    'Braided Wigs',
    'Hair Care & Accessories'
  ];

  const filteredProducts = useMemo(() => {
    return productsData
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const formatPrice = (amount: number) => {
    return `${config.currency} ${amount.toLocaleString()}`;
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 sm:py-16 text-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A56B]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Raw Human Hair & Luxury Accessories</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-stone-900">
            Our Wig & Beauty Collection
          </h1>
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Every piece is crafted from 100% single donor drawn virgin hair. Enjoy pre-plucked natural hairlines, bleached knots, and free salon installation on select units.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-sm space-y-4">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#151515] text-[#C6A56B] shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar and Sorting */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-stone-100">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search wigs, bobs, bone straight, curls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full min-h-[44px] pl-10 pr-4 py-2.5 rounded-full text-xs bg-stone-50 border border-stone-300 focus:outline-none focus:border-[#C6A56B] focus:bg-white text-stone-900 transition-colors"
              />
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-3">
              <span className="text-xs text-stone-500 font-medium">
                {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''} found
              </span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label="Sort wigs by price or featured"
                  className="min-h-[44px] appearance-none pl-3.5 pr-8 py-2 text-xs rounded-full bg-stone-50 border border-stone-300 text-stone-700 font-medium focus:outline-none focus:border-[#C6A56B] cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl mt-8 border border-stone-200">
            <p className="text-stone-500 text-sm">No wigs or products match your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-[#C6A56B] underline cursor-pointer min-h-[44px] px-4"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
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

                    <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 text-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow">
                      <Eye className="w-4 h-4" />
                    </div>
                  </Link>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C6A56B] block">
                      {product.category}
                    </span>

                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="font-serif text-lg font-semibold text-stone-900 group-hover:text-[#C6A56B] transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-stone-500 text-xs line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="pt-2">
                      <span className="font-bold text-stone-900 text-base sm:text-lg block">
                        {formatPrice(product.price)}
                      </span>
                      {product.priceNote && (
                        <span className="text-[11px] text-[#C6A56B] font-medium block">
                          {product.priceNote}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (>= 44px touch targets) */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="min-h-[44px] py-2.5 px-3 rounded-xl text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-[#151515] hover:text-[#C6A56B] transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
        )}

      </div>
    </div>
  );
};
