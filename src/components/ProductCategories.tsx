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
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#A83A19] via-[#D45A20] to-[#F2A62B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-3 text-[#FFD86A] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#FFD86A]" />
              WHAT CAN YOU EXPORT
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-3">
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

        {/* Product Cards Row */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-6 gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-none"
        >
          {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat);
              }}
              className="min-w-[200px] sm:min-w-[240px] lg:min-w-0 rounded-2xl overflow-hidden bg-black/40 border border-white/20 hover:border-white/50 transition-all duration-300 shadow-md group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/70 text-[9px] font-mono text-[#FFD86A]">
                  {cat.hsCode}
                </div>
              </div>

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-white uppercase tracking-wide group-hover:text-[#FFD86A] transition-colors leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] text-white/70 mt-0.5 line-clamp-1">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#FFD86A]">
                  <span>Margin: {cat.margin}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
