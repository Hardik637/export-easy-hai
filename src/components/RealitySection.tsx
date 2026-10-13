"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { PROBLEM_CONTENT } from "@/data/siteData";

export default function RealitySection() {
  return (
    <section
      id="reality"
      className="relative min-h-[70vh] flex flex-col justify-center py-12 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="editorial-container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
          {/* Left Column: Context & Core Problem */}
          <div className="relative lg:col-span-5">
            {/* Localized dark scrim behind left content block */}
            <div
              className="absolute -inset-x-4 -inset-y-4 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/85 via-black/70 to-black/30 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-transparent"
              aria-hidden="true"
            />

            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3.5 text-[#FF4D5E] text-[11px] sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-4 sm:w-5 h-[2px] bg-[#FF4D5E]" />
              THE REALITY
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.98] sm:leading-[0.95] tracking-tight uppercase text-white mb-3 sm:mb-5 drop-shadow-sm">
              Your Job Pays the Bills. <br />
              <span className="text-[#FF4D5E]">
                But Is It Building Your Future?
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-white/95 font-normal leading-relaxed mb-2.5 sm:mb-4">
              {PROBLEM_CONTENT.subcopy1}
            </p>

            <p className="text-xs sm:text-base text-white/80 font-normal leading-relaxed mb-4 sm:mb-6">
              {PROBLEM_CONTENT.subcopy2}
            </p>

            <div className="p-3.5 sm:p-5 rounded-lg bg-black/50 border-l-2 border-[#E50920] border-y border-r border-white/10 text-xs sm:text-base text-white font-medium leading-relaxed backdrop-blur-sm shadow-md mb-6 lg:mb-0">
              {PROBLEM_CONTENT.closingLine}
            </div>
          </div>

          {/* Right Column: 6 Core Questions as an Audit Diagnostic */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 rounded-xl overflow-hidden bg-black/50 backdrop-blur-md shadow-xl max-w-2xl lg:ml-auto">
              <div className="px-3.5 sm:px-5 py-2 sm:py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FF4D5E] font-semibold">
                  Diagnostic Questions
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-white/50">
                  Self-Assessment • 6 Points
                </span>
              </div>

              {/* Mobile 2-column grid / Desktop clean audit list */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 p-2.5 sm:p-3 lg:p-0 lg:gap-0 lg:divide-y lg:divide-white/10">
                {PROBLEM_CONTENT.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3.5 lg:p-4.5 rounded-lg lg:rounded-none bg-white/[0.04] lg:bg-transparent border border-white/10 lg:border-none hover:bg-white/[0.08] transition-colors flex items-start gap-2 sm:gap-3 lg:gap-4 group"
                  >
                    <span className="font-mono text-[11px] sm:text-xs lg:text-sm font-bold text-[#FF4D5E] shrink-0 pt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="font-sans font-medium text-[11px] sm:text-xs lg:text-base text-white/95 group-hover:text-white leading-snug">
                      {q}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
