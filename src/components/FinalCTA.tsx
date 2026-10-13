"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { FINAL_CTA_CONTENT } from "@/data/siteData";

interface FinalCTAProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function FinalCTA({ onOpenWebinarModal, onOpenCourseModal }: FinalCTAProps) {
  const scrollToLiveBatch = () => {
    const el = document.getElementById("live-batch");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenCourseModal) {
      onOpenCourseModal();
    }
  };

  return (
    <section
      id="final-cta"
      className="relative flex flex-col justify-between py-8 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="editorial-container z-10 my-auto">
        <div className="relative max-w-2xl">
          {/* Localized light scrim behind left content area, fading into the daylight open horizon */}
          <div
            className="absolute -inset-x-4 -inset-y-4 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-white/90 via-white/75 to-white/35 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/75 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3.5 text-[#D45A20] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-4 sm:w-5 h-[2px] bg-[#D45A20]" />
            YOUR CHAPTER
          </div>

          <h2 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.94] tracking-tight uppercase text-[#111111] mb-2.5 sm:mb-5">
            {FINAL_CTA_CONTENT.headline}
          </h2>

          <p className="text-xs sm:text-lg text-[#111111] font-normal leading-relaxed mb-4 sm:mb-8 max-w-xl">
            {FINAL_CTA_CONTENT.subcopy}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3.5 mb-4 sm:mb-8">
            <button
              onClick={onOpenWebinarModal}
              className="btn-primary py-3 px-5 text-xs sm:text-sm justify-center w-full sm:w-auto"
            >
              <span>{FINAL_CTA_CONTENT.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToLiveBatch}
              className="btn-secondary-light py-2.5 px-4 text-xs sm:text-sm justify-center w-full sm:w-auto"
            >
              <span>{FINAL_CTA_CONTENT.secondaryCTA}</span>
            </button>
          </div>

          <div className="p-2.5 sm:p-5 rounded-lg bg-white/95 border-l-2 border-[#D45A20] border-y border-r border-[#EAD5AF] text-[11px] sm:text-base text-[#8A4A1C] font-semibold italic shadow-sm">
            {FINAL_CTA_CONTENT.closingLine}
          </div>
        </div>
      </div>
    </section>
  );
}
