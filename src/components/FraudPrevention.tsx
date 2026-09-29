"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";

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
      className="relative py-24 sm:py-32 overflow-hidden bg-[#FAF6EE] text-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Shield Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D45A20]/30 group">
              <Image
                src="/images/fraud-shield.jpg"
                alt="Golden security shield emblem standing on Indian shipping container port at dawn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                <div className="font-display text-2xl uppercase">
                  Zero Cargo Dispatch Without Financial Guarantee
                </div>
                <div className="text-[11px] text-[#FFD86A] mt-0.5 font-medium">
                  Verified Payment Terms: 100% Risk vs 0% Risk
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & 5 Checklist Points */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4 text-[#D45A20] text-xs font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#D45A20]" />
              EXPORT SAFELY
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-[#111111] mb-6">
              Export Safely. <br />
              <span className="text-[#E50920]">
                Avoid Scams.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#444444] font-normal leading-relaxed mb-8 max-w-xl">
              Learn how to verify buyers, identify red flags and protect your business from export frauds before shipping a single carton.
            </p>

            <div className="space-y-3.5">
              {points.map((pt) => (
                <div key={pt} className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-[#EAD5AF] shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-[#E50920]/15 flex items-center justify-center text-[#E50920] shrink-0">
                    <CheckCircle2 className="w-4 h-4 fill-current text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#222222]">
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
