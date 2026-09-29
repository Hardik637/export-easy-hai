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
      const offset = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="products"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#A83A19] via-[#D45A20]/90 to-[#F2A62B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 text-[#FFD86A] text-xs font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#FFD86A]" />
              WHAT CAN YOU EXPORT
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-white mb-4">
              Every Indian Product <br />
              Has a{" "}
              <span className="text-[#FFD86A] drop-shadow-[0_10px_35px_rgba(255,216,106,0.4)]">
                Global Market.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-normal max-w-xl">
              Explore high-demand product categories and real business opportunities in international markets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCourseModal}
              className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 hover:bg-white text-white hover:text-black transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Carousel navigation arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards: Horizontal scroll on desktop & tablet, 2-col on mobile */}
        <div
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-6 gap-4 sm:gap-6 overflow-x-auto pb-6 scrollbar-none snap-x"
        >
          {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat);
              }}
              className="min-w-[240px] sm:min-w-[280px] lg:min-w-0 rounded-2xl overflow-hidden bg-black/40 border border-white/20 hover:border-white/60 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
            >
              {/* Product Photo */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Tag pill */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[9px] font-bold text-[#FFD86A] uppercase tracking-wider">
                  {cat.hsCode}
                </div>
              </div>

              {/* Meta */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl text-white uppercase tracking-wide group-hover:text-[#FFD86A] transition-colors leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-[#F5F0E8]/75 mt-1 line-clamp-2">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#FFD86A]">
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
