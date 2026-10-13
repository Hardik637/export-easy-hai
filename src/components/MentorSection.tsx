"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { WHY_LEARN_WITH_US, MENTOR_CONTENT } from "@/data/siteData";

export default function MentorSection() {
  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-12 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="editorial-container">
        {/* Section 7: Why Learn With Us */}
        <div className="relative mb-10 sm:mb-24">
          {/* Localized dark gradient behind the text block fading into the port photograph */}
          <div
            className="absolute -inset-x-4 -inset-y-4 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/90 via-black/75 to-black/35 sm:bg-gradient-to-r sm:from-black/92 sm:via-black/70 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="max-w-3xl mb-6 sm:mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3.5 text-[#F2A62B] text-[11px] sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-4 sm:w-5 h-[2px] bg-[#F2A62B]" />
              WHY LEARN WITH US
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.98] sm:leading-[0.95] tracking-tight uppercase text-white mb-3 sm:mb-5 drop-shadow-sm">
              {WHY_LEARN_WITH_US.heading}
            </h2>

            <p className="text-sm sm:text-lg text-white/90 font-normal leading-relaxed mb-4 sm:mb-6 max-w-2xl">
              {WHY_LEARN_WITH_US.subcopy}
            </p>

            <button
              onClick={scrollToHowItWorks}
              className="btn-primary py-3 px-5 sm:px-6 text-xs sm:text-sm"
            >
              <span>{WHY_LEARN_WITH_US.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-3 sm:mb-4 font-semibold relative z-10 flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD86A]" />
            What makes the approach practical:
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 relative z-10 mb-6 sm:mb-0">
            {WHY_LEARN_WITH_US.practicalPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-2.5 sm:p-6 rounded-lg sm:rounded-xl bg-black/55 backdrop-blur-md border border-white/10 flex flex-col justify-between shadow-md hover:border-white/25 transition-all group"
              >
                <div>
                  <div className="font-sans font-bold text-xs sm:text-base text-white tracking-tight leading-snug mb-1 sm:mb-2 flex items-start gap-1.5 sm:gap-2.5 group-hover:text-[#FFD86A] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F2A62B] shrink-0 mt-0.5" />
                    <span>{point.title}</span>
                  </div>
                  <p className="text-[10px] sm:text-sm text-white/80 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Founder / Mentor Section */}
        <div className="p-4 sm:p-12 lg:p-14 rounded-2xl bg-white/95 border border-[#EAD5AF] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-center">
            {/* Left Column: Portrait & Title */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col items-center lg:items-start gap-3.5 lg:gap-0 text-left">
              <div className="relative w-20 h-20 sm:w-56 sm:h-56 rounded-xl overflow-hidden shadow-md border border-[#EAD5AF] shrink-0 lg:mb-4 bg-black">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Founder, Mentor & Export Educator"
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>

              <div>
                <div className="lg:hidden inline-flex items-center gap-1.5 mb-0.5 text-[#D45A20] text-[10px] font-semibold tracking-wider uppercase">
                  <span className="w-3 h-[2px] bg-[#D45A20]" />
                  FOUNDER &amp; MENTOR
                </div>
                <h3 className="font-display text-lg sm:text-3xl text-[#111111] uppercase tracking-tight leading-tight">
                  {MENTOR_CONTENT.name}
                </h3>
                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#D45A20] mt-0.5">
                  {MENTOR_CONTENT.role}
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Experience Proof */}
            <div className="lg:col-span-8">
              <div className="hidden lg:inline-flex items-center gap-2 mb-2.5 text-[#D45A20] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-[2px] bg-[#D45A20]" />
                FOUNDER &amp; MENTOR
              </div>

              <h4 className="font-display text-lg sm:text-4xl text-[#111111] uppercase tracking-tight leading-snug mb-2 sm:mb-4">
                {MENTOR_CONTENT.title}
              </h4>

              <p className="text-xs sm:text-lg text-[#222222] leading-relaxed mb-2 sm:mb-4 font-normal">
                {MENTOR_CONTENT.bio1}
              </p>

              <p className="text-xs sm:text-base text-[#444444] leading-relaxed mb-3 sm:mb-6 font-normal">
                {MENTOR_CONTENT.bio2}
              </p>

              {/* Experience proofs side-by-side */}
              <div className="mb-3.5 sm:mb-6">
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#D45A20] font-bold mb-2">
                  Experience &amp; Approach
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 sm:gap-2.5">
                  {MENTOR_CONTENT.experienceProof.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-3 rounded-lg bg-[#FAF6EE] border border-[#EAD5AF] flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-[#111111]"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D45A20] shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollToHowItWorks}
                className="btn-primary py-2.5 px-5 sm:py-3 sm:px-7 text-xs sm:text-sm w-full sm:w-auto justify-center"
              >
                <span>{MENTOR_CONTENT.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
