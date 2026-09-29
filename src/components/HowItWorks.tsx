"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { TIMELINE_STEPS } from "@/data/siteData";

interface HowItWorksProps {
  onOpenCourseModal?: () => void;
}

export default function HowItWorks({ onOpenCourseModal }: HowItWorksProps) {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D45A20]/20 border border-[#D45A20]/40 text-[#FFD86A] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD86A]" />
            HOW IT WORKS
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-6">
            Small Steps. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A62B] via-[#FFD86A] to-[#FFF1D2]">
              BIG DREAMS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#F5F0E8]/85 leading-relaxed max-w-xl font-normal">
            Follow a simple, step-by-step process to start your export journey with confidence. No complex jargon or unneeded complications.
          </p>
        </div>

        {/* Content Grid: Interactive Step Timeline on Left, Golden Sunrise Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline Steps */}
          <div className="lg:col-span-7 space-y-4">
            {TIMELINE_STEPS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-[#D45A20]/25 to-[#F2A62B]/15 border-[#FFD86A]/50 shadow-xl"
                      : "bg-black/35 hover:bg-black/50 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Number Badge */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-display text-2xl shrink-0 transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-[#E50920] to-[#D45A20] text-white shadow-lg shadow-[#E50920]/30 scale-105"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Step Title & Details */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#FFD86A]">
                          {step.tag}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] text-white/60 font-semibold px-2 py-0.5 rounded-full bg-white/10">
                            Active Step
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide uppercase mt-1 mb-1.5">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#F5F0E8]/75 leading-relaxed">
                        {step.description}
                      </p>

                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-white/10 text-xs text-[#FFD86A]/90 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#FFD86A] shrink-0" />
                          <span>{step.details}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom Timeline CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenCourseModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#F2A62B]/25 group cursor-pointer"
              >
                <span>See the Full Process</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Golden Sunrise Port with Traveler Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#F2A62B]/30 group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/how-it-works-sunrise.jpg"
                  alt="Golden sunrise rising over Indian container port with cranes and ships"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Handwritten script overlay */}
                <div className="absolute top-8 right-8 text-right">
                  <div className="font-script text-4xl sm:text-5xl text-[#FFD86A] rotate-[-6deg] drop-shadow-lg">
                    Same Products. <br />
                    Bigger Markets.
                  </div>
                </div>

                {/* Bottom Card Spotlight */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/15">
                  <div className="text-[11px] font-mono uppercase text-[#F2A62B] mb-1">
                    Step {TIMELINE_STEPS[selectedStep].number} Spotlight
                  </div>
                  <div className="font-display text-2xl text-white uppercase mb-1">
                    {TIMELINE_STEPS[selectedStep].title}
                  </div>
                  <p className="text-xs text-[#F5F0E8]/80">
                    {TIMELINE_STEPS[selectedStep].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
