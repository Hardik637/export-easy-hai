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
      className="relative min-h-[80vh] flex flex-col justify-between py-16 sm:py-28 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 my-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 mb-3 text-[#D45A20] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-5 h-[2px] bg-[#D45A20]" />
            YOUR CHAPTER
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.94] tracking-tight uppercase text-[#111111] mb-4">
            {FINAL_CTA_CONTENT.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#222222] font-normal leading-relaxed mb-8 max-w-xl">
            {FINAL_CTA_CONTENT.subcopy}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
            <button
              onClick={onOpenWebinarModal}
              className="min-h-[52px] px-8 py-4 rounded-lg font-semibold text-sm tracking-wide bg-[#E50920] hover:bg-[#c8071a] text-white transition-all shadow-lg shadow-red-950/20 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-[0.99]"
            >
              <span>{FINAL_CTA_CONTENT.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToLiveBatch}
              className="min-h-[52px] px-7 py-4 rounded-lg bg-white/95 hover:bg-white border border-[#D45A20]/30 text-[#111111] font-semibold text-sm tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <span>{FINAL_CTA_CONTENT.secondaryCTA}</span>
            </button>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white/85 border-l-2 border-[#D45A20] border-y border-r border-[#EAD5AF] text-sm sm:text-base text-[#8A4A1C] font-semibold italic">
            {FINAL_CTA_CONTENT.closingLine}
          </div>
        </div>
      </div>
    </section>
  );
}
