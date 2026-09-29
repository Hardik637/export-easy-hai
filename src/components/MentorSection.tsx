"use client";

import React from "react";
import Image from "next/image";
import { Video, FileSpreadsheet, ShieldAlert, FileCheck } from "lucide-react";

export default function MentorSection() {
  const highlights = [
    {
      title: "Live Webinars with Q&A",
      desc: "Direct answers to your export questions and live product evaluations.",
      icon: Video,
    },
    {
      title: "Practical Case Studies & Examples",
      desc: "Real breakdown of actual shipments from Nhava Sheva and Mundra ports.",
      icon: FileSpreadsheet,
    },
    {
      title: "Fraud Prevention & Buyer Verification",
      desc: "Battle-tested protocols to safeguard your cargo and advance payments.",
      icon: ShieldAlert,
    },
    {
      title: "Templates, Checklists & Resources",
      desc: "Plug-and-play proforma invoices, quotation sheets, and contract drafts.",
      icon: FileCheck,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#F2A62B] via-[#FFF1D2] to-[#FAF6EE] text-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline, Portrait, Signature */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-4 text-[#D45A20] text-xs font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#D45A20]" />
              LEARN FROM EXPERIENCE
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-[#111111] mb-6">
              Not Just Theory. <br />
              <span className="text-[#D45A20]">
                REAL GUIDANCE.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#333333] font-normal leading-relaxed mb-8 max-w-xl">
              Get practical insights from Rahul Makwana&apos;s experience in the export industry. Learn what works, avoid costly mistakes and get step-by-step support.
            </p>

            {/* Rahul's Portrait & Signature */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 pt-4">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 shrink-0">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Export Expert, Mentor & Educator"
                  fill
                  sizes="210px"
                  className="object-cover object-top"
                />
              </div>

              <div>
                <div className="font-script text-5xl sm:text-6xl text-[#111111] mb-1">
                  Rahul Makwana
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-[#D45A20]">
                  EXPORT EXPERT • MENTOR • EDUCATOR
                </div>
                <p className="text-xs text-[#555555] mt-1 max-w-xs">
                  Trained 10,000+ entrepreneurs to launch profitable export ventures from India.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Clean Minimalist Feature Rows */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-[#D45A20]/20 hover:border-[#D45A20] transition-all shadow-sm flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D45A20]/10 flex items-center justify-center text-[#D45A20] shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#111111] uppercase tracking-wide leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
