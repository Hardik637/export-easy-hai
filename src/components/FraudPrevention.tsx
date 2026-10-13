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
      className="relative py-16 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="editorial-container">
        <div className="rounded-2xl bg-white/95 border border-[#EAD5AF] p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Shield Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#EAD5AF] group">
                <Image
                  src="/images/fraud-shield.jpg"
                  alt="Security shield emblem on shipping container port at dawn"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md text-white border border-white/15">
                  <div className="font-display text-base sm:text-lg uppercase">
                    Identify Risks Earlier. Ship Smarter.
                  </div>
                  <div className="text-xs text-[#FFD86A] mt-0.5">
                    Organised Process • Documented Compliance • Verified Contacts
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Copy & Checklist */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 mb-3.5 text-[#D45A20] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                <span className="w-5 h-[2px] bg-[#D45A20]" />
                RISK MANAGEMENT &amp; SAFETY
              </div>

              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.95] tracking-tight uppercase text-[#111111] mb-4">
                {OBJECTION_CONTENT.heading}
              </h2>

              <p className="text-base sm:text-lg text-[#222222] font-normal leading-relaxed mb-3">
                {OBJECTION_CONTENT.body1}
              </p>

              <p className="text-sm sm:text-base text-[#444444] font-normal leading-relaxed mb-6">
                {OBJECTION_CONTENT.body2}
              </p>

              <div className="text-xs font-mono uppercase tracking-wider text-[#D45A20] font-bold mb-3.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D45A20]" />
                {OBJECTION_CONTENT.weHelpTitle}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {OBJECTION_CONTENT.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] shadow-sm text-sm font-medium text-[#111111]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToHowItWorks}
                className="btn-primary"
              >
                <span>{OBJECTION_CONTENT.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
