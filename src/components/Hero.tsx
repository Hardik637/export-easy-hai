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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 pt-4 sm:pt-8">
        <div className="max-w-md sm:max-w-xl">
          <div className="inline-flex items-center gap-1.5 mb-2 text-[#FF172F] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="w-4 h-[1.5px] bg-[#FF172F]" />
            STUCK IN A 9 TO 5?
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase text-white mb-3">
            QUIT 9 TO 5. <br />
            <span className="text-[#FF172F]">
              BUILD BIGGER.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed mb-5 max-w-sm">
            Learn how to start and grow an export business from India with practical guidance and zero confusion.
          </p>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenCourseModal}
              className="px-5 py-2.5 rounded-full bg-[#E50920] hover:bg-[#FF172F] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E50920]/40 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="px-4 py-2.5 rounded-full bg-black/50 hover:bg-white/10 border border-white/20 text-white font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 fill-[#FF172F] text-[#FF172F]" />
              <span>Watch Webinar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Breathing Room */}
      <div className="flex-1 min-h-[140px] sm:min-h-[200px]" />

      {/* Bottom Dock Stats & Feature Bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10">
          <div className="grid grid-cols-3 gap-3 mb-3 text-center sm:text-left">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl sm:text-2xl text-white">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/10 text-[10px] sm:text-[11px] text-white/80">
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
              <span className="truncate">Step-by-Step Guidance</span>
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
