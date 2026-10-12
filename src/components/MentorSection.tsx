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
      className="relative py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section 7: Why Learn With Us */}
        <div className="mb-14 sm:mb-20">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#D45A20]" />
              WHY LEARN WITH US
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-[#111111] mb-3">
              {WHY_LEARN_WITH_US.heading}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#444444] font-normal leading-relaxed mb-5">
              {WHY_LEARN_WITH_US.subcopy}
            </p>

            <button
              onClick={scrollToHowItWorks}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-[#D45A20] transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>{WHY_LEARN_WITH_US.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-[#D45A20] mb-3 font-semibold">
            What makes the approach practical:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {WHY_LEARN_WITH_US.practicalPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#D45A20]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="font-sans font-bold text-sm text-[#111111] tracking-tight leading-snug mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D45A20] shrink-0" />
                    <span>{point.title}</span>
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Founder / Mentor Section */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-2xl border border-[#EAD5AF] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Portrait & Title */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 shrink-0 mb-4 bg-black">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Founder, Mentor & Export Educator"
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight">
                {MENTOR_CONTENT.name}
              </h3>
              <div className="text-xs font-bold tracking-widest uppercase text-[#D45A20] mt-0.5">
                {MENTOR_CONTENT.role}
              </div>
            </div>

            {/* Right Column: Bio & Experience Proof */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-2 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
                <span className="w-5 h-[2px] bg-[#D45A20]" />
                FOUNDER / MENTOR
              </div>

              <h4 className="font-display text-2xl sm:text-4xl text-[#111111] uppercase tracking-tight leading-tight mb-3">
                {MENTOR_CONTENT.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-3">
                {MENTOR_CONTENT.bio1}
              </p>

              <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-5">
                {MENTOR_CONTENT.bio2}
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#EAD5AF] mb-5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#D45A20] font-bold mb-2">
                  Experience &amp; Approach
                </div>
                <div className="space-y-1.5 text-xs text-[#333333]">
                  {MENTOR_CONTENT.experienceProof.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D45A20] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollToHowItWorks}
                className="px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs bg-[#E50920] hover:bg-[#FF172F] text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
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
