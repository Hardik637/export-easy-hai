"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { TRUST_STATS } from "@/data/siteData";

interface HeroProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function Hero({ onOpenWebinarModal, onOpenCourseModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-transparent"
    >
      {/* Top Headline & CTAs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 pt-4 sm:pt-6">
        <div className="max-w-md sm:max-w-xl">
          <div className="inline-flex items-center gap-2 mb-2.5 text-[#FF172F] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-4 h-[2px] bg-[#FF172F]" />
            STUCK IN A 9 TO 5?
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase text-white mb-3 drop-shadow-lg">
            QUIT 9 TO 5. <br />
            <span className="text-[#FF172F]">BUILD BIGGER.</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed mb-6 max-w-sm drop-shadow-md">
            Learn how to start and grow an export business from India with practical guidance and zero confusion.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCourseModal}
              className="group min-h-[48px] px-6 py-3 rounded-full bg-[#E50920] hover:bg-[#FF172F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="min-h-[48px] px-5 py-3 rounded-full bg-black/65 hover:bg-white/10 active:scale-[0.98] border border-white/20 text-white font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <div className="w-4 h-4 rounded-full bg-[#E50920] flex items-center justify-center text-white">
                <Play className="w-2 h-2 fill-current ml-0.5" />
              </div>
              <span>Watch Webinar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Breathing Room */}
      <div className="flex-1 min-h-[100px] sm:min-h-[160px]" />

      {/* Bottom Dock Stats & Feature Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 shadow-2xl">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 text-center sm:text-left">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="px-1">
                <div className="font-display text-2xl sm:text-3xl text-white tracking-wide">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/10 text-[10px] sm:text-xs text-white/85">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Practical Learning</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Buyer Verification</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Step-by-Step Guide</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
