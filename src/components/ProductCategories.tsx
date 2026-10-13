"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS_CONTENT, ProductCategory } from "@/data/siteData";
import MobileCarousel from "@/components/MobileCarousel";

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
      className="relative py-16 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="editorial-container">
        {/* Section Header */}
        <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          {/* Localized dark scrim behind header */}
          <div
            className="absolute -inset-x-5 -inset-y-6 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/85 via-black/70 to-black/30 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2.5 mb-3.5 text-[#FFD86A] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#FFD86A]" />
              EXPORT PRODUCT CATEGORIES
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.95] tracking-tight uppercase text-white mb-4 drop-shadow-sm">
              {PRODUCTS_CONTENT.heading}
            </h2>

            <p className="text-base text-white/95 font-normal leading-relaxed mb-2">
              {PRODUCTS_CONTENT.subcopy1}
            </p>

            <p className="text-sm text-white/80 font-normal leading-relaxed">
              {PRODUCTS_CONTENT.subcopy2}
            </p>
          </div>

          <div className="flex items-center gap-3 relative z-10">
            <button
              onClick={onOpenCourseModal}
              className="btn-primary"
            >
              <span>{PRODUCTS_CONTENT.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Product Cards Grid (6 Columns) */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {PRODUCTS_CONTENT.categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                if (onSelectCategory) onSelectCategory(cat);
              }}
              className="rounded-xl overflow-hidden bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all duration-300 shadow-lg group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-square w-full overflow-hidden shrink-0 bg-black">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="16vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[10px] font-mono text-[#FFD86A] border border-white/10">
                  {cat.hsCode}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-sans font-bold text-sm sm:text-base text-white tracking-tight leading-snug group-hover:text-[#FFD86A] transition-colors">
                    {cat.title}
                  </div>
                  <p className="text-xs text-white/85 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#FFD86A]">
                  <span className="font-semibold text-[11px]">Gulf Market</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Interactive Touch Carousel */}
        <div className="lg:hidden mb-8">
          <MobileCarousel activeColor="#FFD86A" theme="dark">
            {PRODUCTS_CONTENT.categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(cat);
                }}
                className="w-full rounded-xl overflow-hidden bg-black/60 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all duration-300 shadow-xl group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden shrink-0 bg-black">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 340px, 340px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#FFD86A] border border-white/15">
                    {cat.hsCode}
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-sans font-bold text-base text-white tracking-tight leading-snug group-hover:text-[#FFD86A] transition-colors">
                      {cat.title}
                    </div>
                    <p className="text-sm text-white/85 mt-1.5 leading-relaxed font-normal">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#FFD86A]">
                    <span className="font-semibold text-xs">Gulf Opportunity</span>
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>

        {/* Responsible claim */}
        <div className="p-4 sm:p-5 rounded-lg bg-black/50 border-l-2 border-[#D45A20] border-y border-r border-white/10 text-xs sm:text-sm text-white/90 leading-relaxed backdrop-blur-sm shadow-md">
          <strong className="text-[#FFD86A] font-semibold not-italic">Responsible claim: </strong>
          {PRODUCTS_CONTENT.responsibleClaim}
        </div>
      </div>
    </section>
  );
}
