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
      className="relative min-h-[75vh] flex flex-col justify-center py-16 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 mb-3 text-[#FFD86A] text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="w-5 h-[2px] bg-[#FFD86A]" />
            THE ROADMAP
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.96] tracking-tight uppercase text-white mb-4">
            {HOW_IT_WORKS_CONTENT.heading}
          </h2>

          <button
            onClick={onOpenCourseModal}
            className="px-6 py-3 rounded-lg font-semibold text-sm tracking-wide bg-[#E50920] hover:bg-[#c8071a] text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>{HOW_IT_WORKS_CONTENT.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Structured Roadmap Grid (4 + 3 layout with ample reading space) */}
        <div className="hidden lg:block space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {HOW_IT_WORKS_CONTENT.steps.slice(0, 4).map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-xl bg-black/45 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#E50920] px-2.5 py-0.5 rounded bg-[#E50920]/10 border border-[#E50920]/20">
                      STEP {step.number}
                    </span>
                  </div>
                  <div className="font-sans font-bold text-base text-white tracking-tight mb-2">
                    {step.title}
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {HOW_IT_WORKS_CONTENT.steps.slice(4, 7).map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-xl bg-black/45 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#F2A62B] px-2.5 py-0.5 rounded bg-[#F2A62B]/10 border border-[#F2A62B]/20">
                      STEP {step.number}
                    </span>
                  </div>
                  <div className="font-sans font-bold text-base text-white tracking-tight mb-2">
                    {step.title}
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Interactive Carousel */}
        <div className="lg:hidden">
          <MobileCarousel activeColor="#FFD86A">
            {HOW_IT_WORKS_CONTENT.steps.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 flex flex-col justify-between shadow-xl min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-mono font-bold text-[#E50920] px-2.5 py-1 rounded bg-[#E50920]/15 border border-[#E50920]/25">
                      STEP {step.number} OF 07
                    </span>
                  </div>
                  <div className="font-sans font-bold text-base text-white mb-2 tracking-tight">
                    {step.title}
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
