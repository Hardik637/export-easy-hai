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
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 overflow-hidden bg-transparent scroll-mt-24"
    >
      {/* Top Headline & CTAs */}
      <div className="editorial-container z-10 pt-4 sm:pt-6">
        <div className="relative max-w-xl lg:max-w-2xl">
          {/* Localized dark scrim behind left content area, fading into the port scene on the right */}
          <div
            className="absolute -inset-x-5 -inset-y-6 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/80 via-black/55 to-transparent sm:bg-gradient-to-r sm:from-black/85 sm:via-black/50 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="inline-flex items-center gap-2.5 mb-3 text-[#FF4D5E] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-5 h-[2px] bg-[#FF4D5E]" />
            {HERO_CONTENT.eyebrow}
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.96] tracking-tight uppercase text-white mb-4 drop-shadow-md">
            {HERO_CONTENT.headlineMain} <br />
            <span className="text-[#FF4D5E]">{HERO_CONTENT.headlineSub}</span>
          </h1>

          <p className="text-base sm:text-lg text-white/95 font-normal leading-relaxed mb-5 max-w-xl drop-shadow-sm">
            {HERO_CONTENT.supportingCopy}
          </p>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-8 max-w-xl border-l-2 border-[#E50920]/60 pl-3.5 italic">
            {HERO_CONTENT.positioningNote}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenWebinarModal}
              className="btn-primary group"
            >
              <span>{HERO_CONTENT.primaryCTA}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToHowItWorks}
              className="btn-secondary"
            >
              <Compass className="w-4 h-4 text-[#FF4D5E]" />
              <span>{HERO_CONTENT.secondaryCTA}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Breathing Room */}
      <div className="flex-1 min-h-[40px] sm:min-h-[100px]" />

      {/* Bottom Dock Trust Strip */}
      <div className="editorial-container z-10">
        <div className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-black/45 backdrop-blur-md border border-white/10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm text-white/90">
            {HERO_CONTENT.trustStrip.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50920] shrink-0" />
                <span className="font-medium tracking-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
