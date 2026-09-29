"use client";

import React from "react";
import { Calendar, TrendingDown, Lock, Briefcase } from "lucide-react";

export default function RealitySection() {
  const painPoints = [
    { title: "Same routine every day", icon: Calendar },
    { title: "Limited income growth", icon: TrendingDown },
    { title: "No financial freedom", icon: Lock },
    { title: "Someone else's dreams", icon: Briefcase },
  ];

  return (
    <section
      id="reality"
      className="relative min-h-[80vh] flex flex-col justify-center py-20 sm:py-28 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3 text-[#FF172F] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-5 h-[2px] bg-[#FF172F]" />
              THE REALITY
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-4">
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

          {/* Right Column: 4 Clean Minimalist Glass Chips */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 max-w-md ml-auto">
              {painPoints.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 hover:border-[#FF172F]/40 transition-colors flex flex-col justify-between"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E50920]/20 flex items-center justify-center text-[#FF172F] mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg text-white uppercase tracking-wide leading-tight">
                      {item.title}
                    </h3>
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
