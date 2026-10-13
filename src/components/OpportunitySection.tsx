"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { OPPORTUNITY_CONTENT, WHAT_WE_HELP_DO } from "@/data/siteData";

interface OpportunityProps {
  onOpenCourseModal?: () => void;
}

export default function OpportunitySection({ onOpenCourseModal }: OpportunityProps) {
  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="opportunity"
      className="relative min-h-[75vh] flex flex-col justify-center py-16 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="editorial-container z-10">
        {/* Section 3: Opportunity Header & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-16 sm:mb-24">
          <div className="relative lg:col-span-6">
            {/* Localized dark scrim behind left content block */}
            <div
              className="absolute -inset-x-5 -inset-y-6 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/85 via-black/70 to-black/30 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-transparent"
              aria-hidden="true"
            />

            <div className="inline-flex items-center gap-2.5 mb-3.5 text-[#F2A62B] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#F2A62B]" />
              THE OPPORTUNITY
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.95] tracking-tight uppercase text-white mb-5 drop-shadow-sm">
              Indian Products. Gulf Demand. <br />
              <span className="text-[#F2A62B]">
                A Practical Business Opportunity.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/95 font-normal leading-relaxed mb-4">
              {OPPORTUNITY_CONTENT.body1}
            </p>

            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-6">
              {OPPORTUNITY_CONTENT.body2}
            </p>

            <button
              onClick={scrollToHowItWorks}
              className="btn-primary mb-6"
            >
              <span>{OPPORTUNITY_CONTENT.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="p-4 sm:p-5 rounded-lg bg-black/50 border-l-2 border-[#F2A62B] border-y border-r border-white/10 text-xs sm:text-sm text-white/90 leading-relaxed backdrop-blur-sm shadow-md">
              <strong className="text-[#FFD86A] font-semibold not-italic">Compliance note: </strong>
              {OPPORTUNITY_CONTENT.complianceNote}
            </div>
          </div>

          {/* Right Column: Product categories */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 shadow-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-5 font-semibold flex items-center justify-between border-b border-white/10 pb-3.5">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2A62B]" />
                  Product categories may include:
                </span>
                <span className="text-[11px] font-mono text-white/50">Market Sectors</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {OPPORTUNITY_CONTENT.categoriesList.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors flex items-center gap-2.5 text-xs sm:text-sm text-white font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2A62B] shrink-0" />
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: What Export Easy Hai Helps You Do */}
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-6">
            <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-2.5 font-semibold">
              WHAT EXPORT EASY HAI HELPS YOU DO
            </div>
            <h3 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight leading-snug mb-3">
              {WHAT_WE_HELP_DO.heading}
            </h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              {WHAT_WE_HELP_DO.subcopy}
            </p>
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-4 font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD86A]" />
            You will learn how to:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
            {WHAT_WE_HELP_DO.learningPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors flex items-start gap-3.5 text-sm sm:text-base text-white"
              >
                <div className="w-6 h-6 rounded bg-[#F2A62B]/20 text-[#FFD86A] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#F2A62B]/30">
                  {idx + 1}
                </div>
                <span className="leading-snug font-medium text-white/95">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
            <button
              onClick={scrollToHowItWorks}
              className="btn-primary"
            >
              <span>{WHAT_WE_HELP_DO.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-white/50">
              Practical Step-by-Step Curriculum
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
