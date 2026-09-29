"use client";

import React from "react";
import Image from "next/image";
import { Calendar, TrendingDown, Lock, Briefcase, AlertCircle } from "lucide-react";
import { PAIN_POINTS } from "@/data/siteData";

export default function RealitySection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Calendar":
        return <Calendar className="w-6 h-6 text-[#FF172F]" />;
      case "TrendingDown":
        return <TrendingDown className="w-6 h-6 text-[#FF172F]" />;
      case "Lock":
        return <Lock className="w-6 h-6 text-[#FF172F]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#FF172F]" />;
      default:
        return <AlertCircle className="w-6 h-6 text-[#FF172F]" />;
    }
  };

  return (
    <section
      id="reality"
      className="relative py-24 sm:py-32 overflow-hidden transition-colors"
    >
      {/* Background visual integration */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introspective copy & Pain Points */}
          <div className="lg:col-span-6 z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50920]/15 border border-[#E50920]/30 text-[#FF172F] text-xs font-bold tracking-widest uppercase mb-6">
              THE REALITY
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-6">
              A Stable Job <br />
              Gives{" "}
              <span className="text-[#FF172F] underline decoration-[#FF172F]/40 underline-offset-8">
                Security.
              </span>
            </h2>

            {/* Body */}
            <p className="text-base sm:text-lg text-[#F5F0E8]/80 leading-relaxed mb-10 max-w-xl font-normal">
              Monthly salary, fixed routine, limited growth. It feels safe, but is it enough for the life you want?
            </p>

            {/* 2x2 Grid of Emotional Pain Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PAIN_POINTS.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#E50920]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E50920]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#E50920]/20 transition-all">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-white tracking-wide uppercase mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F5F0E8]/70 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cinematic Photography of Person Sitting at Pre-Dawn Port */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/reality-predawn.jpg"
                alt="Young Indian professional sitting on dock at pre-dawn twilight contemplating export business"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <p className="font-script text-2xl text-[#FFD86A] mb-0.5">
                  &ldquo;Trading time for a fixed salary or building an asset for the world?&rdquo;
                </p>
                <p className="text-[11px] text-[#F5F0E8]/70 tracking-wider uppercase font-medium">
                  Pre-Dawn Horizon • Jawaharlal Nehru Port, Mumbai
                </p>
              </div>
            </div>

            {/* Glowing amber aura behind image */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#D45A20]/20 rounded-full blur-[90px] pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
