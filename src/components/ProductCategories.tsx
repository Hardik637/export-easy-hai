"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/data/siteData";

interface ProductCategoriesProps {
  onOpenCourseModal?: () => void;
  onSelectCategory?: (category: ProductCategory) => void;
}

export default function ProductCategories({
  onOpenCourseModal,
  onSelectCategory,
}: ProductCategoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="products"
      className="relative py-20 sm:py-28 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3 text-[#FFD86A] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#FFD86A]" />
              WHAT CAN YOU EXPORT
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-2">
              Every Indian Product <br />
              Has a{" "}
              <span className="text-[#FFD86A]">
                Global Market.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-white/85 font-normal">
              Explore high-demand product categories and real business opportunities in international markets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCourseModal}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 hover:bg-white text-white hover:text-black transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Row with Mobile Snap Scrolling */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x -mx-5 px-5 sm:mx-0 sm:px-0"
        >
          {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat);
              }}
              className="min-w-[220px] sm:min-w-[240px] lg:min-w-0 snap-start rounded-2xl overflow-hidden bg-black/55 backdrop-blur-xl border border-white/15 hover:border-[#FFD86A]/50 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between shrink-0"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-mono text-[#FFD86A] border border-white/10">
                  {cat.hsCode}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-sans font-bold text-sm sm:text-base text-white tracking-tight leading-snug group-hover:text-[#FFD86A] transition-colors">
                    {cat.title}
                  </div>
                  <p className="text-[11px] text-white/70 mt-1 line-clamp-1 leading-normal">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#FFD86A]">
                  <span className="font-semibold">Margin: {cat.margin}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden text-center mt-3 text-[11px] text-white/60 font-medium">
          ← Swipe to explore categories →
        </div>
      </div>
    </section>
  );
}
