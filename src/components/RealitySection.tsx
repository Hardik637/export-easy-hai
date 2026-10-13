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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Context & Core Problem */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2.5 mb-3 text-[#FF4D5E] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#FF4D5E]" />
              THE REALITY
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.96] tracking-tight uppercase text-white mb-4">
              Your Job Pays the Bills. <br />
              <span className="text-[#FF4D5E]">
                But Is It Building Your Future?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-4">
              {PROBLEM_CONTENT.subcopy1}
            </p>

            <p className="text-sm sm:text-base text-white/80 font-medium leading-relaxed mb-6">
              {PROBLEM_CONTENT.subcopy2}
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.04] border-l-2 border-[#E50920] border-y border-r border-white/10 text-sm sm:text-base text-white font-medium leading-relaxed">
              {PROBLEM_CONTENT.closingLine}
            </div>
          </div>

          {/* Right Column: 6 Core Questions */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 max-w-2xl lg:ml-auto">
              {PROBLEM_CONTENT.questions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-4.5 rounded-xl bg-black/45 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex items-start gap-3 shadow-md"
                >
                  <span className="text-xs font-mono font-bold text-[#FF4D5E] shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div className="font-sans font-medium text-sm sm:text-base text-white/95 leading-snug">
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
