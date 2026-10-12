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
      className="relative min-h-[80vh] flex flex-col justify-between py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 my-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-2.5 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-[2px] bg-[#D45A20]" />
            FINAL CHAPTER
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase text-[#111111] mb-3">
            {FINAL_CTA_CONTENT.headline}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#222222] font-normal leading-relaxed mb-6 max-w-lg">
            {FINAL_CTA_CONTENT.subcopy}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-6">
            <button
              onClick={onOpenWebinarModal}
              className="min-h-[48px] px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#FF172F] text-white hover:from-[#FF172F] hover:to-[#B80014] transition-all shadow-lg shadow-[#E50920]/30 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
            >
              <span>{FINAL_CTA_CONTENT.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToLiveBatch}
              className="min-h-[48px] px-6 py-3.5 rounded-full bg-white/90 hover:bg-white border border-[#D45A20]/30 text-[#111111] font-bold text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] shadow-sm"
            >
              <span>{FINAL_CTA_CONTENT.secondaryCTA}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-white/75 backdrop-blur-sm border border-[#EAD5AF] text-xs sm:text-sm text-[#8A4A1C] font-semibold italic">
            {FINAL_CTA_CONTENT.closingLine}
          </div>
        </div>
      </div>
    </section>
  );
}
