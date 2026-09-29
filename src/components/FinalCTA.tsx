"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";

interface FinalCTAProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function FinalCTA({ onOpenWebinarModal, onOpenCourseModal }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="relative min-h-[90vh] flex flex-col justify-between py-20 sm:py-28 overflow-hidden bg-transparent text-[#111111]"
    >
      {/* Script note in sky */}
      <div className="absolute bottom-16 right-8 sm:bottom-24 sm:right-16 text-right pointer-events-none z-10 hidden sm:block">
        <div className="font-script text-4xl sm:text-5xl text-[#8A4A1C] drop-shadow-md rotate-[-4deg]">
          Bigger Tomorrow <br />
          Is Possible.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 my-auto">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-3 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-[2px] bg-[#D45A20]" />
            FROM INDIA. TO THE WORLD.
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase text-[#111111] mb-4">
            YOUR NEXT CHAPTER. <br />
            <span className="text-[#E50920]">
              STARTS HERE.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#222222] font-normal leading-relaxed mb-6 max-w-md">
            Join Export Easy Hai and get the knowledge, tools and support to build your export business with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={onOpenCourseModal}
              className="min-h-[48px] px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#FF172F] text-white hover:from-[#FF172F] hover:to-[#B80014] transition-all shadow-lg shadow-[#E50920]/30 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
            >
              <span>Explore All Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="min-h-[48px] px-6 py-3.5 rounded-full bg-white/80 hover:bg-white border border-[#D45A20]/30 text-[#111111] font-bold text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] shadow-sm"
            >
              <div className="w-4 h-4 rounded-full bg-[#E50920] flex items-center justify-center text-white">
                <Play className="w-2 h-2 fill-current ml-0.5" />
              </div>
              <span>Watch Free Webinar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
