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
      className="relative min-h-[75vh] flex flex-col justify-center py-14 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        {/* Section 3: Opportunity Header & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#F2A62B] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#F2A62B]" />
              THE OPPORTUNITY
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-white mb-4">
              Indian Products. Gulf Demand. <br />
              <span className="text-[#F2A62B]">
                A Practical Business Opportunity.
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-white/85 font-normal leading-relaxed mb-3">
              {OPPORTUNITY_CONTENT.body1}
            </p>

            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed mb-6">
              {OPPORTUNITY_CONTENT.body2}
            </p>

            <button
              onClick={scrollToHowItWorks}
              className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all inline-flex items-center gap-2 cursor-pointer shadow-md mb-6"
            >
              <span>{OPPORTUNITY_CONTENT.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-[11px] sm:text-xs text-white/70 italic leading-relaxed">
              <strong className="text-[#FFD86A] font-semibold not-italic">Compliance note: </strong>
              {OPPORTUNITY_CONTENT.complianceNote}
            </div>
          </div>

          {/* Right Column: Product categories may include */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-4 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F2A62B]" />
                Product categories may include:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {OPPORTUNITY_CONTENT.categoriesList.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-white/90"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F2A62B] shrink-0" />
                    <span className="font-medium">{cat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: What Export Easy Hai Helps You Do */}
        <div className="p-6 sm:p-8 rounded-3xl bg-black/70 backdrop-blur-2xl border border-white/15 shadow-2xl">
          <div className="max-w-2xl mb-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FFD86A] mb-1 font-semibold">
              WHAT EXPORT EASY HAI HELPS YOU DO
            </div>
            <h3 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight leading-snug mb-2">
              {WHAT_WE_HELP_DO.heading}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              {WHAT_WE_HELP_DO.subcopy}
            </p>
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-3 font-semibold">
            You will learn how to:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
            {WHAT_WE_HELP_DO.learningPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-white/90"
              >
                <div className="w-5 h-5 rounded-full bg-[#F2A62B]/20 text-[#FFD86A] text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
            <button
              onClick={scrollToHowItWorks}
              className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs bg-[#E50920] hover:bg-[#FF172F] text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E50920]/30"
            >
              <span>{WHAT_WE_HELP_DO.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
