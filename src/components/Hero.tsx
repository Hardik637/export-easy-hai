"use client";

import React from "react";
import { ArrowRight, Compass } from "lucide-react";
import { HERO_CONTENT } from "@/data/siteData";

interface HeroProps {
  onOpenCourseModal?: () => void;
}

export default function Hero({ onOpenCourseModal }: HeroProps) {
  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (onOpenCourseModal) onOpenCourseModal();
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-between pt-16 sm:pt-28 pb-4 sm:pb-12 overflow-hidden bg-transparent scroll-mt-24"
    >
      {/* Top Headline & CTAs */}
      <div className="editorial-container z-10 pt-2 sm:pt-6">
        <div className="relative max-w-xl lg:max-w-2xl">
          {/* Localized dark scrim behind left content area, fading into the port scene on the right */}
          <div
            className="absolute -inset-x-4 -inset-y-4 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/90 via-black/70 to-transparent sm:bg-gradient-to-r sm:from-black/85 sm:via-black/50 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3 text-[#FF4D5E] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-4 sm:w-5 h-[2px] bg-[#FF4D5E]" />
            {HERO_CONTENT.eyebrow}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.95] sm:leading-[0.96] tracking-tight uppercase text-white mb-3 sm:mb-4 drop-shadow-md">
            {HERO_CONTENT.headlineMain}{" "}
            <span className="text-[#FF4D5E] block sm:inline">{HERO_CONTENT.headlineSub}</span>
          </h1>

          <p className="text-sm sm:text-lg text-white/95 font-normal leading-relaxed mb-3 sm:mb-5 max-w-xl drop-shadow-sm">
            {HERO_CONTENT.supportingCopy}
          </p>

          <div className="p-2.5 sm:p-3 rounded-lg bg-black/60 border border-white/10 text-[11px] sm:text-xs text-white/85 leading-relaxed mb-4 sm:mb-6 max-w-xl backdrop-blur-sm">
            <span className="text-[#FFD86A] font-semibold uppercase tracking-wider text-[10px] block sm:inline mr-1.5">Note:</span>
            {HERO_CONTENT.positioningNote}
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <button
              onClick={scrollToCourses}
              className="btn-primary py-3 px-5 sm:px-6 text-xs sm:text-sm group justify-center w-full sm:w-auto"
            >
              <span>Explore Featured Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToHowItWorks}
              className="btn-secondary py-2.5 px-4 sm:px-6 text-xs sm:text-sm text-white/90 justify-center w-full sm:w-auto"
            >
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF4D5E]" />
              <span>{HERO_CONTENT.secondaryCTA}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Breathing Room */}
      <div className="flex-1 min-h-[16px] sm:min-h-[80px]" />

      {/* Bottom Dock Trust Strip */}
      <div className="editorial-container z-10 pt-3 sm:pt-0">
        <div className="px-3.5 sm:px-6 py-2 sm:py-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 text-[11px] sm:text-sm text-white/90">
            {HERO_CONTENT.trustStrip.map((item) => (
              <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50920] shrink-0" />
                <span className="font-medium tracking-normal leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
