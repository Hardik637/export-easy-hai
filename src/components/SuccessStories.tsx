"use client";

import React from "react";
import { CheckCircle2, Milestone } from "lucide-react";
import { STORIES_REPLACEMENT_CONTENT } from "@/data/siteData";
import MobileCarousel from "@/components/MobileCarousel";

export default function SuccessStories() {
  return (
    <section
      id="success-stories"
      className="relative py-12 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="editorial-container">
        <div className="rounded-2xl bg-white/95 border border-[#EAD5AF] p-4.5 sm:p-10 lg:p-14 shadow-2xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2.5 mb-2.5 sm:mb-3.5 text-[#E50920] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#E50920]" />
              LEARNER JOURNEY &amp; MILESTONES
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.95] tracking-tight uppercase text-[#111111] mb-3 sm:mb-4">
              {STORIES_REPLACEMENT_CONTENT.heading}
            </h2>

            <p className="text-sm sm:text-lg text-[#222222] font-normal leading-relaxed mb-4 sm:mb-6">
              {STORIES_REPLACEMENT_CONTENT.subcopy}
            </p>

            <div className="p-3.5 sm:p-5 rounded-xl bg-[#FAF6EE] border-l-2 border-[#E50920] border-y border-r border-[#EAD5AF] text-xs sm:text-base text-[#111111] font-semibold leading-relaxed shadow-sm">
              {STORIES_REPLACEMENT_CONTENT.temporaryCopy}
            </div>
          </div>

          {/* Future proof section */}
          <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-lg bg-[#FAF6EE]/70 border border-[#EAD5AF] flex items-start gap-2.5 sm:gap-3">
            <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#D45A20] font-bold shrink-0 pt-0.5">
              {STORIES_REPLACEMENT_CONTENT.futureProofTitle}:
            </div>
            <p className="text-xs sm:text-sm text-[#222222] leading-relaxed font-normal">
              {STORIES_REPLACEMENT_CONTENT.futureProofDesc}
            </p>
          </div>

          {/* Desktop 6 Milestones Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4">
            {STORIES_REPLACEMENT_CONTENT.milestones.map((milestone, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] hover:border-[#E50920]/60 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E50920]/10 text-[#E50920] flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <div className="font-sans font-bold text-sm sm:text-base text-[#111111] tracking-tight mb-2 leading-snug">
                    {milestone}
                  </div>
                  <div className="text-xs text-[#555555] flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D45A20]" />
                    <span>Execution Milestone</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Interactive Touch Carousel with clear progress indicators */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#555555] mb-2 px-1">
              <span className="font-semibold text-[#D45A20] uppercase tracking-wider">Learner Progression</span>
              <span className="text-[#888888]">6 Milestones • Swipe →</span>
            </div>

            <MobileCarousel activeColor="#E50920" theme="light">
              {STORIES_REPLACEMENT_CONTENT.milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="w-full p-4.5 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] shadow-md flex flex-col justify-between min-h-[150px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded bg-[#E50920]/10 text-[#E50920] font-mono text-xs font-bold border border-[#E50920]/20">
                        Milestone 0{idx + 1} / 06
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#D45A20] px-2 py-0.5 rounded bg-white border border-[#EAD5AF]">
                        Execution
                      </span>
                    </div>
                    <div className="font-sans font-bold text-sm sm:text-base text-[#111111] tracking-tight leading-snug">
                      {milestone}
                    </div>
                  </div>
                  <div className="pt-2.5 mt-3 border-t border-[#EAD5AF] text-[11px] text-[#444444] flex items-center justify-between font-medium">
                    <span className="flex items-center gap-1.5">
                      <Milestone className="w-3.5 h-3.5 text-[#E50920]" />
                      <span>Verified Learner Progress</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#888888]">
                      {idx < 5 ? `Next: 0${idx + 2} →` : `Completed ✓`}
                    </span>
                  </div>
                </div>
              ))}
            </MobileCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
