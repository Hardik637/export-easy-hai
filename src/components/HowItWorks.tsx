"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { TIMELINE_STEPS } from "@/data/siteData";

interface HowItWorksProps {
  onOpenCourseModal?: () => void;
}

export default function HowItWorks({ onOpenCourseModal }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      className="relative min-h-[90vh] flex flex-col justify-center py-20 sm:py-28 overflow-hidden"
    >
      {/* Golden Sunrise Port Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/how-it-works-sunrise.jpg"
          alt="Golden sunrise over shipping terminal with cranes and traveler silhouette"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#A83A19] via-transparent to-[#5A1D12] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />
      </div>

      {/* Script note in sky */}
      <div className="absolute top-16 right-8 sm:top-24 sm:right-16 text-right pointer-events-none z-10 hidden sm:block">
        <div className="font-script text-3xl sm:text-4xl text-[#FFD86A] rotate-[-5deg] drop-shadow-md">
          Same Products. <br />
          Bigger Markets.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-xl mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 text-[#FFD86A] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-[2px] bg-[#FFD86A]" />
            HOW IT WORKS
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-4">
            Small Steps. <br />
            <span className="text-[#FFD86A]">
              BIG DREAMS.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed mb-6">
            Follow a simple, step-by-step process to start your export journey with confidence.
          </p>

          <button
            onClick={onOpenCourseModal}
            className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>See the Full Process</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Connected Horizontal Timeline on Desktop */}
        <div className="hidden lg:block relative pt-6 pb-4">
          <div className="absolute top-[38px] left-6 right-6 h-[2px] bg-gradient-to-r from-[#E50920] via-[#D45A20] to-[#F2A62B] -z-10" />

          <div className="grid grid-cols-7 gap-3">
            {TIMELINE_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                <div className="w-11 h-11 rounded-full bg-[#E50920] border-2 border-white/40 flex items-center justify-center font-display text-xl text-white shadow-lg mb-3 transform group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <h3 className="font-display text-base text-white uppercase tracking-wide leading-tight group-hover:text-[#FFD86A] transition-colors">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Connected Vertical Timeline on Mobile */}
        <div className="lg:hidden relative pl-6 space-y-4">
          <div className="absolute top-2 bottom-2 left-[21px] w-[2px] bg-gradient-to-b from-[#E50920] via-[#D45A20] to-[#F2A62B] -z-10" />

          {TIMELINE_STEPS.map((step) => (
            <div key={step.number} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#E50920] border border-white/40 flex items-center justify-center font-display text-base text-white shadow-md shrink-0">
                {step.number}
              </div>
              <div className="pt-1.5">
                <h3 className="font-display text-base text-white uppercase tracking-wide leading-tight">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
