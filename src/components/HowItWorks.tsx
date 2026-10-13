"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_CONTENT } from "@/data/siteData";
import MobileCarousel from "@/components/MobileCarousel";

interface HowItWorksProps {
  onOpenCourseModal?: () => void;
}

export default function HowItWorks({ onOpenCourseModal }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="relative min-h-[70vh] flex flex-col justify-center py-12 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="editorial-container z-10">
        <div className="relative max-w-2xl mb-6 sm:mb-14">
          {/* Localized dark scrim behind header */}
          <div
            className="absolute -inset-x-4 -inset-y-4 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/85 via-black/70 to-black/30 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="inline-flex items-center gap-2 mb-2 sm:mb-3.5 text-[#FFD86A] text-[11px] sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-4 sm:w-5 h-[2px] bg-[#FFD86A]" />
            THE ROADMAP
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.98] sm:leading-[0.95] tracking-tight uppercase text-white mb-3 sm:mb-5 drop-shadow-sm">
            {HOW_IT_WORKS_CONTENT.heading}
          </h2>

          <button
            onClick={onOpenCourseModal}
            className="btn-primary py-3 px-5 sm:px-6 text-xs sm:text-sm"
          >
            <span>{HOW_IT_WORKS_CONTENT.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Structured Roadmap Grid (4 + 3 layout with progression connectors) */}
        <div className="hidden lg:block space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {HOW_IT_WORKS_CONTENT.steps.slice(0, 4).map((step, idx) => (
              <div
                key={step.number}
                className="p-5 sm:p-6 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between shadow-xl group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-mono font-bold text-[#FF4D5E] px-2.5 py-0.5 rounded bg-[#E50920]/15 border border-[#E50920]/30">
                      STEP {step.number}
                    </span>
                    {idx < 3 ? (
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FFD86A] group-hover:translate-x-0.5 transition-all" />
                    ) : (
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Phase 2 ↳</span>
                    )}
                  </div>
                  <div className="font-sans font-bold text-base text-white tracking-tight mb-2 group-hover:text-[#FFD86A] transition-colors">
                    {step.title}
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {HOW_IT_WORKS_CONTENT.steps.slice(4, 7).map((step, idx) => (
              <div
                key={step.number}
                className="p-5 sm:p-6 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between shadow-xl group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-mono font-bold text-[#FFD86A] px-2.5 py-0.5 rounded bg-[#F2A62B]/15 border border-[#F2A62B]/30">
                      STEP {step.number}
                    </span>
                    {idx < 2 ? (
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FFD86A] group-hover:translate-x-0.5 transition-all" />
                    ) : (
                      <span className="text-[10px] font-mono text-[#FFD86A] uppercase font-semibold">Continuous Cycle ✓</span>
                    )}
                  </div>
                  <div className="font-sans font-bold text-base text-white tracking-tight mb-2 group-hover:text-[#FFD86A] transition-colors">
                    {step.title}
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Compact Station Roadmap Track inside a unified container */}
        <div className="lg:hidden rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 p-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] font-mono">
            <span className="text-[#FFD86A] font-semibold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50920]" />
              7-Step Export Progression
            </span>
            <span className="text-white/50 text-[10px]">Complete Roadmap</span>
          </div>

          <div className="relative pl-6 before:absolute before:left-2.5 before:top-2 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#E50920] before:via-[#F2A62B] before:to-[#FFD86A] space-y-3">
            {HOW_IT_WORKS_CONTENT.steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative pl-2 pb-2.5 border-b border-white/5 last:border-b-0 last:pb-0"
              >
                {/* Timeline Node */}
                <div className="absolute -left-6 top-0.5 w-5 h-5 rounded-full bg-black border border-white/25 flex items-center justify-center font-mono font-bold text-[9px] text-[#FFD86A] shadow-sm">
                  {step.number}
                </div>

                <div className="font-sans font-bold text-xs sm:text-sm text-white tracking-tight leading-snug">
                  {step.title}
                </div>
                <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-normal mt-0.5">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
