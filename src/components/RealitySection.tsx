"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { PROBLEM_CONTENT } from "@/data/siteData";

export default function RealitySection() {
  return (
    <section
      id="reality"
      className="relative min-h-[75vh] flex flex-col justify-center py-14 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#FF172F] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#FF172F]" />
              THE PROBLEM
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-white mb-4">
              Your Job Pays the Bills. <br />
              <span className="text-[#FF172F]">
                But Is It Building Your Future?
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed mb-4">
              {PROBLEM_CONTENT.subcopy1}
            </p>

            <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed mb-4">
              {PROBLEM_CONTENT.subcopy2}
            </p>

            <div className="p-3.5 rounded-xl bg-[#E50920]/15 border border-[#E50920]/30 text-xs text-white/90 leading-relaxed font-semibold">
              {PROBLEM_CONTENT.closingLine}
            </div>
          </div>

          {/* Right Column: 6 questions in clean responsive grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-xl lg:ml-auto">
              {PROBLEM_CONTENT.questions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 hover:border-[#FF172F]/40 transition-all flex items-start gap-3 shadow-lg"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#E50920]/20 border border-[#E50920]/30 flex items-center justify-center text-[#FF172F] shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className="font-sans font-medium text-xs sm:text-sm text-white leading-snug">
                    {q}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
