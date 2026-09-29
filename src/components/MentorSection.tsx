"use client";

import React from "react";
import Image from "next/image";
import { Video, FileSpreadsheet, ShieldAlert, FileCheck, CheckCircle2, Award } from "lucide-react";
import { MENTOR_HIGHLIGHTS } from "@/data/siteData";

export default function MentorSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Video":
        return <Video className="w-6 h-6 text-[#F2A62B]" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="w-6 h-6 text-[#F2A62B]" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-[#F2A62B]" />;
      case "FileCheck":
        return <FileCheck className="w-6 h-6 text-[#F2A62B]" />;
      default:
        return <Award className="w-6 h-6 text-[#F2A62B]" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black/40 group">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Export Expert, Mentor & Educator"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Verified Exporter Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#F2A62B]/30 flex items-center gap-1.5 text-xs text-[#FFD86A]">
                  <CheckCircle2 className="w-4 h-4 text-[#F2A62B]" />
                  <span className="font-semibold">Industry Practitioner</span>
                </div>

                {/* Bottom Signature & Bio Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  {/* Handwritten Signature */}
                  <div className="font-script text-4xl sm:text-5xl text-white tracking-wide mb-1 drop-shadow-md">
                    Rahul Makwana
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-[#FFC83D] flex items-center gap-2">
                    <span>EXPORT EXPERT</span>
                    <span>•</span>
                    <span>MENTOR</span>
                    <span>•</span>
                    <span>EDUCATOR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing amber aura behind portrait */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F2A62B]/15 rounded-full blur-[100px] pointer-events-none -z-10" />
          </div>

          {/* Right Column: Copy & Feature Blocks */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D45A20]/20 border border-[#D45A20]/40 text-[#F2A62B] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              LEARN FROM EXPERIENCE
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-6">
              Not Just Theory. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D45A20] via-[#F2A62B] to-[#FFD86A]">
                REAL GUIDANCE.
              </span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-[#F5F0E8]/85 leading-relaxed font-normal mb-10 max-w-2xl">
              Get practical insights from Rahul Makwana&apos;s experience in the export industry. Learn what works, avoid costly mistakes, and get step-by-step support from real container dispatch to international payment recovery.
            </p>

            {/* 4 Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MENTOR_HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 hover:border-[#F2A62B]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F2A62B]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#F2A62B]/20 transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl text-white tracking-wide uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F5F0E8]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
