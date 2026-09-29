"use client";

import React from "react";
import Image from "next/image";
import { Calendar, TrendingDown, Lock, Briefcase } from "lucide-react";

export default function RealitySection() {
  const painPoints = [
    {
      title: "Same routine every day",
      icon: Calendar,
      desc: "Fixed repetitive routine without true upside.",
    },
    {
      title: "Limited income growth",
      icon: TrendingDown,
      desc: "Annual appraisals lagging behind actual inflation.",
    },
    {
      title: "No financial freedom",
      icon: Lock,
      desc: "Dependent on a single paycheck and company approval.",
    },
    {
      title: "Someone else's dreams",
      icon: Briefcase,
      desc: "Investing your peak decades into someone else's equity.",
    },
  ];

  return (
    <section
      id="reality"
      className="relative min-h-[90vh] flex flex-col justify-center py-24 sm:py-32 overflow-hidden"
    >
      {/* Seamless Pre-Dawn Harbor Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/reality-predawn.jpg"
          alt="Pre-dawn shipping dock with young Indian man sitting and contemplating"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75] contrast-110"
        />
        {/* Continuous gradient blend: flows seamlessly from section above to section below */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#26090B] via-transparent to-[#120607] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120607]/90 via-[#120607]/60 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Introspective Headline & Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-4 text-[#FF172F] text-xs font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#FF172F]" />
              THE REALITY
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-white mb-6">
              A Stable Job <br />
              Gives{" "}
              <span className="text-[#FF172F] drop-shadow-[0_10px_25px_rgba(255,23,47,0.5)]">
                Security.
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#F5F0E8]/85 font-normal leading-relaxed max-w-lg mb-8">
              Monthly salary, fixed routine, limited growth. It feels safe, but is it enough for the life you want?
            </p>

            <div className="inline-block p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-md">
              <p className="font-script text-2xl text-[#FFD86A] mb-1">
                &ldquo;Trading time for a salary or building an export empire?&rdquo;
              </p>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">
                Port of Mumbai • Pre-Dawn Horizon
              </p>
            </div>
          </div>

          {/* Right Column: 4 Clean Glass Tiles (2x2) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {painPoints.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 sm:p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-white/10 hover:border-[#FF172F]/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E50920]/15 flex items-center justify-center text-[#FF172F] mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide mb-1 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#F5F0E8]/60 leading-relaxed">
                      {item.desc}
                    </p>
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
