"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { TIMELINE_STEPS } from "@/data/siteData";
import MobileCarousel from "@/components/MobileCarousel";

interface HowItWorksProps {
  onOpenCourseModal?: () => void;
}

export default function HowItWorks({ onOpenCourseModal }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="relative min-h-[75vh] flex flex-col justify-center py-14 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      {/* Script note in sky */}
      <div className="absolute top-16 right-8 sm:top-24 sm:right-16 text-right pointer-events-none z-10 hidden sm:block">
        <div className="font-script text-3xl sm:text-4xl text-[#FFD86A] rotate-[-5deg] drop-shadow-md">
          Same Products. <br />
          Bigger Markets.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-2 mb-3 text-[#FFD86A] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-[2px] bg-[#FFD86A]" />
            HOW IT WORKS
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-3">
            Small Steps. <br />
            <span className="text-[#FFD86A]">
              BIG DREAMS.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed mb-5">
            Follow a simple, step-by-step process to start your export journey with confidence.
          </p>

          <button
            onClick={onOpenCourseModal}
            className="px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>See the Full Process</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Connected Horizontal Timeline on Desktop */}
        <div className="hidden lg:block relative pt-6 pb-4">
          <div className="absolute top-[38px] left-6 right-6 h-[2px] bg-gradient-to-r from-[#E50920] via-[#D45A20] to-[#F2A62B] -z-10" />

          <div className="grid grid-cols-7 gap-3">
            {TIMELINE_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E50920] to-[#D45A20] border-2 border-white/50 flex items-center justify-center font-display text-xl text-white shadow-lg mb-3 transform group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="font-sans font-bold text-xs uppercase tracking-wider text-white group-hover:text-[#FFD86A] transition-colors leading-tight">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Interactive Carousel (smooth slide, centered card, pagination dots & arrows) */}
        <div className="lg:hidden">
          <MobileCarousel activeColor="#FFD86A">
            {TIMELINE_STEPS.map((step) => (
              <div
                key={step.number}
                className="p-5 rounded-2xl bg-black/65 backdrop-blur-xl border border-white/15 flex flex-col justify-between shadow-2xl min-h-[210px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E50920] to-[#D45A20] text-white flex items-center justify-center font-display text-lg font-bold shadow-md">
                      {step.number}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD86A] px-2.5 py-1 rounded-full bg-white/10 border border-white/10">
                      Step {step.number} of 07
                    </span>
                  </div>
                  <div className="font-sans font-bold text-base text-white mb-2 tracking-tight">
                    {step.title}
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#FFD86A]">
                  <span>Action Phase</span>
                  <span className="text-[11px] text-white/50">Next-gen Exporter</span>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
