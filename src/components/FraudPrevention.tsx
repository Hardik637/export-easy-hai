"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function FraudPrevention() {
  const points = [
    "Verify genuine buyers across international registries",
    "Identify fraud warning signs and suspicious payment requests",
    "Use trusted trade tools and DGFT-verified platforms",
    "Real-case studies of scams and cargo dispute prevention",
    "Checklists and bulletproof export contract templates",
  ];

  return (
    <section
      id="fraud-prevention"
      className="relative py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Shield Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#D45A20]/30 group">
              <Image
                src="/images/fraud-shield.jpg"
                alt="Golden security shield emblem on shipping container port at dawn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-black/65 backdrop-blur-sm text-white">
                <div className="font-display text-base sm:text-lg uppercase">
                  Zero Cargo Dispatch Without Financial Guarantee
                </div>
                <div className="text-[10px] text-[#FFD86A] mt-0.5">
                  Verified Payment Terms: 100% Risk vs 0% Risk
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#D45A20]" />
              EXPORT SAFELY
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-[#111111] mb-2.5">
              Export Safely. <br />
              <span className="text-[#E50920]">
                Avoid Scams.
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#444444] font-normal leading-relaxed mb-5 max-w-lg">
              Learn how to verify buyers, identify red flags and protect your business from export frauds before shipping a single carton.
            </p>

            <div className="space-y-2.5">
              {points.map((pt) => (
                <div key={pt} className="flex items-center gap-3 p-3 rounded-xl bg-white/85 backdrop-blur-md border border-[#EAD5AF] shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-[#E50920]/15 flex items-center justify-center text-[#E50920] shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-current text-white" />
                  </div>
                  <span className="text-xs font-semibold text-[#222222]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
