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
      className="relative py-16 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="editorial-container">
        {/* Section 7: Why Learn With Us */}
        <div className="relative mb-16 sm:mb-24">
          {/* Localized dark gradient behind the text block fading into the port photograph */}
          <div
            className="absolute -inset-x-5 -inset-y-6 sm:-inset-x-8 sm:-inset-y-8 rounded-2xl pointer-events-none -z-10 bg-gradient-to-b from-black/90 via-black/75 to-black/35 sm:bg-gradient-to-r sm:from-black/92 sm:via-black/70 sm:to-transparent"
            aria-hidden="true"
          />

          <div className="max-w-3xl mb-8 relative z-10">
            <div className="inline-flex items-center gap-2.5 mb-3.5 text-[#F2A62B] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#F2A62B]" />
              WHY LEARN WITH US
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.95] tracking-tight uppercase text-white mb-5 drop-shadow-sm">
              {WHY_LEARN_WITH_US.heading}
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-6 max-w-2xl">
              {WHY_LEARN_WITH_US.subcopy}
            </p>

            <button
              onClick={scrollToHowItWorks}
              className="btn-primary"
            >
              <span>{WHY_LEARN_WITH_US.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-4 font-semibold relative z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD86A]" />
            What makes the approach practical:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            {WHY_LEARN_WITH_US.practicalPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-black/55 backdrop-blur-md border border-white/10 flex flex-col justify-between shadow-xl hover:border-white/25 transition-all group"
              >
                <div>
                  <div className="font-sans font-bold text-base text-white tracking-tight leading-snug mb-2 flex items-center gap-2.5 group-hover:text-[#FFD86A] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#F2A62B] shrink-0" />
                    <span>{point.title}</span>
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Founder / Mentor Section */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-2xl bg-white/95 border border-[#EAD5AF] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Portrait & Title */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-xl overflow-hidden shadow-md border border-[#EAD5AF] shrink-0 mb-4 bg-black">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Founder, Mentor & Export Educator"
                  fill
                  sizes="240px"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                {MENTOR_CONTENT.name}
              </h3>
              <div className="text-xs font-semibold tracking-wider uppercase text-[#D45A20] mt-1">
                {MENTOR_CONTENT.role}
              </div>
            </div>

            {/* Right Column: Bio & Experience Proof */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-2.5 text-[#D45A20] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-[2px] bg-[#D45A20]" />
                FOUNDER &amp; MENTOR
              </div>

              <h4 className="font-display text-2xl sm:text-4xl text-[#111111] uppercase tracking-tight leading-snug mb-4">
                {MENTOR_CONTENT.title}
              </h4>

              <p className="text-base sm:text-lg text-[#222222] leading-relaxed mb-4">
                {MENTOR_CONTENT.bio1}
              </p>

              <p className="text-sm sm:text-base text-[#444444] leading-relaxed mb-6">
                {MENTOR_CONTENT.bio2}
              </p>

              <div className="p-5 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D45A20] font-bold mb-3">
                  Experience &amp; Approach
                </div>
                <div className="space-y-2 text-sm text-[#222222]">
                  {MENTOR_CONTENT.experienceProof.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#D45A20] shrink-0" />
                      <span className="font-semibold text-[#111111]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollToHowItWorks}
                className="btn-primary"
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
