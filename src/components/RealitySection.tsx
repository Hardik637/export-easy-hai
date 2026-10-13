"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { PROBLEM_CONTENT } from "@/data/siteData";

export default function RealitySection() {
  return (
    <section
      id="reality"
      className="relative min-h-[75vh] flex flex-col justify-center py-16 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="editorial-container z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Context & Core Problem */}
          <div className="relative lg:col-span-5">
            {/* Localized dark scrim behind left content block */}
            <div
              className="absolute -inset-x-5 -inset-y-6 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/85 via-black/70 to-black/30 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-transparent"
              aria-hidden="true"
            />

            <div className="inline-flex items-center gap-2.5 mb-3.5 text-[#FF4D5E] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#FF4D5E]" />
              THE REALITY
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.95] tracking-tight uppercase text-white mb-5 drop-shadow-sm">
              Your Job Pays the Bills. <br />
              <span className="text-[#FF4D5E]">
                But Is It Building Your Future?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/95 font-normal leading-relaxed mb-4">
              {PROBLEM_CONTENT.subcopy1}
            </p>

            <p className="text-sm sm:text-base text-white/80 font-normal leading-relaxed mb-6">
              {PROBLEM_CONTENT.subcopy2}
            </p>

            <div className="p-4 sm:p-5 rounded-lg bg-black/50 border-l-2 border-[#E50920] border-y border-r border-white/10 text-sm sm:text-base text-white font-medium leading-relaxed backdrop-blur-sm shadow-md">
              {PROBLEM_CONTENT.closingLine}
            </div>
          </div>

          {/* Right Column: 6 Core Questions as an Audit Diagnostic */}
          <div className="lg:col-span-7">
            <div className="border border-white/10 rounded-xl overflow-hidden bg-black/50 backdrop-blur-md shadow-2xl divide-y divide-white/10 max-w-2xl lg:ml-auto">
              <div className="px-5 py-3.5 bg-white/[0.03] border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF4D5E] font-semibold">
                  Diagnostic Questions
                </span>
                <span className="text-[11px] font-mono text-white/50">
                  Self-Assessment • 6 Points
                </span>
              </div>
              <div className="divide-y divide-white/10">
                {PROBLEM_CONTENT.questions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-4.5 hover:bg-white/[0.04] transition-colors flex items-start gap-4 group"
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#FF4D5E] shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="font-sans font-medium text-sm sm:text-base text-white/95 group-hover:text-white leading-relaxed">
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
