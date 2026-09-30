"use client";

import React from "react";
import { Calendar, TrendingDown, Lock, Briefcase } from "lucide-react";

export default function RealitySection() {
  const painPoints = [
    {
      title: "Same routine daily",
      desc: "Trading 40+ hours every week for a fixed paycheck.",
      icon: Calendar,
    },
    {
      title: "Limited income growth",
      desc: "Annual increments barely keep pace with inflation.",
      icon: TrendingDown,
    },
    {
      title: "No true freedom",
      desc: "Tied to fixed hours with zero equity or ownership.",
      icon: Lock,
    },
    {
      title: "Someone else's dream",
      desc: "Working hard while others build global scale.",
      icon: Briefcase,
    },
  ];

  return (
    <section
      id="reality"
      className="relative min-h-[75vh] flex flex-col justify-center py-14 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#FF172F] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#FF172F]" />
              THE REALITY
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-3">
              A Stable Job <br />
              Gives{" "}
              <span className="text-[#FF172F]">
                Security.
              </span>
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed max-w-md">
              Monthly salary, fixed routine, limited growth. It feels safe, but is it enough for the life you want?
            </p>
          </div>

          {/* Right Column: Clean 2x2 Glass Grid on Mobile & Desktop */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg lg:ml-auto">
              {painPoints.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 hover:border-[#FF172F]/40 transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E50920]/20 border border-[#E50920]/30 flex items-center justify-center text-[#FF172F] mb-2 sm:mb-3 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xs sm:text-sm text-white tracking-tight leading-snug">
                        {item.title}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-white/65 mt-1 leading-normal line-clamp-2">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
