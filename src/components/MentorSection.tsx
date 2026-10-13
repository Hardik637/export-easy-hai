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
      className="relative py-16 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section 7: Why Learn With Us */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2.5 mb-3 text-[#D45A20] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#D45A20]" />
              WHY LEARN WITH US
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.96] tracking-tight uppercase text-[#111111] mb-4">
              {WHY_LEARN_WITH_US.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#333333] font-normal leading-relaxed mb-6">
              {WHY_LEARN_WITH_US.subcopy}
            </p>

            <button
              onClick={scrollToHowItWorks}
              className="px-6 py-3 rounded-lg text-sm font-semibold tracking-wide bg-[#111111] text-white hover:bg-[#E50920] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{WHY_LEARN_WITH_US.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-[#D45A20] mb-4 font-semibold">
            What makes the approach practical:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WHY_LEARN_WITH_US.practicalPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-xl bg-white/95 border border-[#EAD5AF] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="font-sans font-bold text-base text-[#111111] tracking-tight leading-snug mb-2 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D45A20] shrink-0" />
                    <span>{point.title}</span>
                  </div>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Founder / Mentor Section */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white/95 border border-[#EAD5AF] shadow-xl">
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
                <span className="w-4 h-[2px] bg-[#D45A20]" />
                FOUNDER &amp; MENTOR
              </div>

              <h4 className="font-display text-2xl sm:text-4xl text-[#111111] uppercase tracking-tight leading-snug mb-4">
                {MENTOR_CONTENT.title}
              </h4>

              <p className="text-base text-[#333333] leading-relaxed mb-4">
                {MENTOR_CONTENT.bio1}
              </p>

              <p className="text-base text-[#333333] leading-relaxed mb-6">
                {MENTOR_CONTENT.bio2}
              </p>

              <div className="p-5 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-[#D45A20] font-bold mb-3">
                  Experience &amp; Approach
                </div>
                <div className="space-y-2 text-sm text-[#333333]">
                  {MENTOR_CONTENT.experienceProof.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#D45A20] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollToHowItWorks}
                className="px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide bg-[#E50920] hover:bg-[#c8071a] text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
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
