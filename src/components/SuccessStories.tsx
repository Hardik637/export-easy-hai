"use client";

import React from "react";
import { CheckCircle2, Milestone } from "lucide-react";
import { STORIES_REPLACEMENT_CONTENT } from "@/data/siteData";
import MobileCarousel from "@/components/MobileCarousel";

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="relative py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5 text-[#E50920] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#E50920]" />
            LEARNER JOURNEY
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-[#111111] mb-3">
            {STORIES_REPLACEMENT_CONTENT.heading}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#444444] font-normal leading-relaxed mb-4">
            {STORIES_REPLACEMENT_CONTENT.subcopy}
          </p>

          <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#EAD5AF] text-xs sm:text-sm text-[#111111] font-semibold leading-relaxed shadow-sm">
            {STORIES_REPLACEMENT_CONTENT.temporaryCopy}
          </div>
        </div>

        {/* Future proof section */}
        <div className="mb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#D45A20] font-bold mb-1">
            {STORIES_REPLACEMENT_CONTENT.futureProofTitle}
          </div>
          <p className="text-xs text-[#666666] leading-relaxed mb-4">
            {STORIES_REPLACEMENT_CONTENT.futureProofDesc}
          </p>
        </div>

        {/* Desktop 6 Milestones Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4">
          {STORIES_REPLACEMENT_CONTENT.milestones.map((milestone, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAD5AF] hover:border-[#E50920] transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-xl bg-[#E50920]/10 text-[#E50920] flex items-center justify-center shrink-0 font-display text-sm font-bold">
                {idx + 1}
              </div>
              <div>
                <div className="font-sans font-bold text-sm text-[#111111] tracking-tight mb-1">
                  {milestone}
                </div>
                <div className="text-[11px] text-[#777777] flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D45A20]" />
                  <span>Execution Milestone</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Interactive Touch Carousel */}
        <div className="lg:hidden">
          <MobileCarousel activeColor="#E50920" theme="light">
            {STORIES_REPLACEMENT_CONTENT.milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="w-full p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAD5AF] shadow-md flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-[#E50920]/10 text-[#E50920] flex items-center justify-center font-display text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D45A20] px-2 py-0.5 rounded-full bg-[#FAF6EE] border border-[#EAD5AF]">
                      Milestone
                    </span>
                  </div>
                  <div className="font-sans font-bold text-base text-[#111111] tracking-tight leading-snug">
                    {milestone}
                  </div>
                </div>
                <div className="pt-3 border-t border-[#F0E6D2] text-[11px] text-[#777777] flex items-center gap-1.5 font-medium">
                  <Milestone className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>Verified Learner Progress</span>
                </div>
              </div>
            ))}
          </MobileCarousel>
        </div>
      </div>
    </section>
  );
}
