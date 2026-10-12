"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { OBJECTION_CONTENT } from "@/data/siteData";

export default function FraudPrevention() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="fraud-prevention"
      className="relative py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Shield Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#D45A20]/30 group">
              <Image
                src="/images/fraud-shield.jpg"
                alt="Golden security shield emblem on shipping container port at dawn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-black/65 backdrop-blur-sm text-white">
                <div className="font-display text-base sm:text-lg uppercase">
                  Identify Risks Earlier. Ship Smarter.
                </div>
                <div className="text-[10px] text-[#FFD86A] mt-0.5">
                  Organised Process • Documented Compliance • Verified Contacts
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#D45A20]" />
              RISK MANAGEMENT &amp; SAFETY
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-[#111111] mb-3">
              {OBJECTION_CONTENT.heading}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#444444] font-normal leading-relaxed mb-3">
              {OBJECTION_CONTENT.body1}
            </p>

            <p className="text-xs sm:text-sm text-[#444444] font-normal leading-relaxed mb-5">
              {OBJECTION_CONTENT.body2}
            </p>

            <div className="text-xs font-mono uppercase tracking-wider text-[#D45A20] font-bold mb-3">
              {OBJECTION_CONTENT.weHelpTitle}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {OBJECTION_CONTENT.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#EAD5AF] shadow-sm text-xs font-medium text-[#222222]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                  <span className="leading-snug">{pt}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToHowItWorks}
              className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs bg-[#E50920] hover:bg-[#B80014] text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>{OBJECTION_CONTENT.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
