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
      className="relative min-h-[95vh] flex flex-col justify-center py-24 sm:py-32 overflow-hidden"
    >
      {/* Seamless Golden Sunrise Port Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/how-it-works-sunrise.jpg"
          alt="Golden sunrise rising over shipping port terminal with cranes and traveler silhouette"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Continuous gradient blend: transitions from opportunity amber to golden dawn */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#A83A19] via-transparent to-[#5A1D12] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Handwritten Script Note in Sky */}
      <div className="absolute top-20 right-8 sm:top-28 sm:right-16 text-right pointer-events-none z-10 hidden sm:block">
        <div className="font-script text-4xl lg:text-5xl text-[#FFD86A] rotate-[-5deg] drop-shadow-lg">
          Same Products. <br />
          Bigger Markets.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-4 text-[#FFD86A] text-xs font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#FFD86A]" />
            HOW IT WORKS
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-white mb-6">
            Small Steps. <br />
            <span className="text-[#FFD86A] drop-shadow-[0_10px_35px_rgba(255,216,106,0.5)]">
              BIG DREAMS.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#F5F0E8]/90 font-normal leading-relaxed mb-6">
            Follow a simple, step-by-step process to start your export journey with confidence.
          </p>

          <button
            onClick={onOpenCourseModal}
            className="px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#F2A62B]/30 flex items-center gap-2 cursor-pointer"
          >
            <span>See the Full Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Connected Horizontal Timeline on Desktop / Connected Vertical on Mobile */}
        {/* Desktop View */}
        <div className="hidden lg:block relative pt-10 pb-6">
          {/* Continuous Red/Orange Connecting Line */}
          <div className="absolute top-[68px] left-8 right-8 h-[3px] bg-gradient-to-r from-[#E50920] via-[#D45A20] to-[#F2A62B] -z-10 shadow-[0_0_12px_rgba(229,9,32,0.8)]" />

          <div className="grid grid-cols-7 gap-4">
            {TIMELINE_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center group">
                {/* Number Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#E50920] to-[#B80014] border-2 border-white/40 flex items-center justify-center font-display text-2xl text-white shadow-xl shadow-[#E50920]/50 mb-4 transform group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Step Label */}
                <h3 className="font-display text-lg text-white uppercase tracking-wide leading-tight group-hover:text-[#FFD86A] transition-colors">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View: Connected Vertical Timeline */}
        <div className="lg:hidden relative pl-8 space-y-6">
          {/* Continuous Vertical Line */}
          <div className="absolute top-4 bottom-4 left-[27px] w-[3px] bg-gradient-to-b from-[#E50920] via-[#D45A20] to-[#F2A62B] -z-10 shadow-[0_0_10px_rgba(229,9,32,0.8)]" />

          {TIMELINE_STEPS.map((step) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#E50920] to-[#B80014] border-2 border-white/30 flex items-center justify-center font-display text-xl text-white shadow-lg shrink-0">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="font-display text-xl text-white uppercase tracking-wide leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-[#F5F0E8]/70 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
