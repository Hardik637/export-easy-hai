"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Layers } from "lucide-react";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/siteData";

interface ProductCategoriesProps {
  onOpenCourseModal?: () => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export default function ProductCategories({
  onOpenCourseModal,
  onSelectCategory,
}: ProductCategoriesProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductCategory | null>(null);

  return (
    <section
      id="products"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D45A20]/20 border border-[#D45A20]/40 text-[#F2A62B] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F2A62B]" />
              WHAT CAN YOU EXPORT?
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-4">
              Every Indian Product <br />
              Has a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A62B] via-[#FFC83D] to-[#FFF1D2]">
                Global Market.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#F5F0E8]/85 font-normal">
              Explore high-demand product categories and real business opportunities in international markets.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCourseModal}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center gap-2 transition-all cursor-pointer group"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid: 2-column on mobile, 3-column on tablet, 4/3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedProduct(cat);
                if (onSelectCategory) onSelectCategory(cat);
              }}
              className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/15 hover:border-[#F2A62B]/60 transition-all duration-300 shadow-xl cursor-pointer flex flex-col justify-between"
            >
              {/* Product Photo */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Tag pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-[#FFD86A] tracking-wider uppercase">
                  {cat.tag}
                </div>

                {/* Margin indicator */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#D45A20]/80 backdrop-blur-sm text-[10px] font-mono text-white">
                  {cat.margin}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#F2A62B] uppercase tracking-wider mb-1">
                    {cat.hsCode}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-[#FFD86A] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#F5F0E8]/70 mt-1 line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#FFD86A] font-medium">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Product Quick Inspector Drawer / Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-3xl bg-[#120607] border border-[#F2A62B]/40 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-[#F2A62B] uppercase">
                    {selectedProduct.hsCode} • {selectedProduct.tag}
                  </span>
                  <h3 className="font-display text-3xl text-white uppercase mt-1">
                    {selectedProduct.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 rounded-full bg-white/10 text-white/70 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-xs sm:text-sm text-[#F5F0E8]/80 mb-4">
                {selectedProduct.subtitle}. High export profitability through direct overseas buyer agreements.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                <div>
                  <div className="text-[10px] text-white/50 uppercase">Expected Profit Margin</div>
                  <div className="font-display text-2xl text-[#FFD86A]">{selectedProduct.margin}</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/50 uppercase">Top Target Destinations</div>
                  <div className="text-xs font-medium text-white/90 mt-1">
                    {selectedProduct.topMarkets.join(", ")}
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    if (onOpenCourseModal) onOpenCourseModal();
                  }}
                  className="flex-1 py-3 px-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F2A62B]/20"
                >
                  <span>Learn How to Export This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
