"use client";

import React from "react";
import { ArrowRight, Compass } from "lucide-react";
import { HERO_CONTENT } from "@/data/siteData";

interface HeroProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function Hero({ onOpenWebinarModal }: HeroProps) {
  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden bg-transparent scroll-mt-24"
    >
      {/* Top Headline & CTAs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 pt-4 sm:pt-6">
        <div className="max-w-md sm:max-w-xl">
          <div className="inline-flex items-center gap-2 mb-2 text-[#FF172F] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
            <span className="w-4 h-[2px] bg-[#FF172F]" />
            {HERO_CONTENT.eyebrow}
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase text-white mb-2.5 sm:mb-3 drop-shadow-lg">
            {HERO_CONTENT.headlineMain} <br />
            <span className="text-[#FF172F]">{HERO_CONTENT.headlineSub}</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-4 max-w-lg drop-shadow-md">
            {HERO_CONTENT.supportingCopy}
          </p>

          <p className="text-[11px] sm:text-xs text-white/70 italic leading-relaxed mb-6 max-w-lg drop-shadow-sm border-l-2 border-[#FF172F]/50 pl-3">
            {HERO_CONTENT.positioningNote}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
            <button
              onClick={onOpenWebinarModal}
              className="group min-h-[46px] px-6 py-3 rounded-full bg-[#E50920] hover:bg-[#FF172F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{HERO_CONTENT.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToHowItWorks}
              className="min-h-[46px] px-5 py-3 rounded-full bg-black/65 hover:bg-white/10 active:scale-[0.98] border border-white/20 text-white font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Compass className="w-4 h-4 text-[#FF172F]" />
              <span>{HERO_CONTENT.secondaryCTA}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Breathing Room */}
      <div className="flex-1 min-h-[40px] sm:min-h-[140px]" />

      {/* Bottom Dock Trust Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="p-3.5 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="text-[10px] font-mono tracking-widest text-[#FFD86A] uppercase mb-2">
            TRUST STRIP
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm text-white/90">
            {HERO_CONTENT.trustStrip.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
