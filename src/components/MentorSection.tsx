"use client";

import React from "react";
import Image from "next/image";
import { Video, FileSpreadsheet, ShieldAlert, FileCheck } from "lucide-react";

export default function MentorSection() {
  const highlights = [
    { title: "Live Webinars with Q&A", icon: Video },
    { title: "Practical Case Studies & Examples", icon: FileSpreadsheet },
    { title: "Fraud Prevention & Buyer Verification", icon: ShieldAlert },
    { title: "Templates, Checklists & Resources", icon: FileCheck },
  ];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 overflow-hidden bg-transparent text-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#D45A20]" />
              LEARN FROM EXPERIENCE
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-[#111111] mb-3">
              Not Just Theory. <br />
              <span className="text-[#D45A20]">
                REAL GUIDANCE.
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#444444] font-normal leading-relaxed mb-6 max-w-lg">
              Get practical insights from Rahul Makwana&apos;s experience in the export industry. Learn what works, avoid costly mistakes and get step-by-step support.
            </p>

            {/* Portrait & Signature */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 pt-2">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-xl border-2 border-white/80 shrink-0">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Export Expert, Mentor & Educator"
                  fill
                  sizes="180px"
                  className="object-cover object-top"
                />
              </div>

              <div>
                <div className="font-script text-4xl sm:text-5xl text-[#111111]">
                  Rahul Makwana
                </div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-[#D45A20]">
                  EXPORT EXPERT • MENTOR • EDUCATOR
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Minimal Feature Tiles */}
          <div className="lg:col-span-5 space-y-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white/75 backdrop-blur-md border border-[#D45A20]/20 flex items-center gap-3.5 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D45A20]/10 flex items-center justify-center text-[#D45A20] shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg text-[#111111] uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
