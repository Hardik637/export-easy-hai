"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, GraduationCap, ShieldCheck, Compass, Users } from "lucide-react";
import { TRUST_STATS, HERO_PILLS } from "@/data/siteData";

interface HeroProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function Hero({ onOpenWebinarModal, onOpenCourseModal }: HeroProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#FF172F]" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-[#FF172F]" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-[#FF172F]" />;
      case "Users":
        return <Users className="w-5 h-5 text-[#FF172F]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#FF172F]" />;
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden"
    >
      {/* Background Cinematic Visual Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/hero-blood-moon.jpg"
          alt="Indian container shipping port at night with giant blood moon and young Indian exporter looking out"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-90 contrast-110"
        />

        {/* Ambient Dark Red Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-[#E50920]/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Fog / Atmospheric glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E50920]/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E50920]/15 border border-[#E50920]/40 text-[#FF172F] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50920] animate-ping" />
            STUCK IN A 9 TO 5?
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] tracking-tight uppercase text-white mb-6">
            QUIT 9 TO 5. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50920] via-[#FF172F] to-[#D45A20] drop-shadow-[0_10px_25px_rgba(229,9,32,0.5)]">
              BUILD BIGGER.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F5F0E8]/90 max-w-xl font-normal leading-relaxed mb-8">
            Learn how to start and grow an export business from India with practical guidance, real strategies and zero confusion.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenCourseModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E50920] to-[#B80014] text-white font-bold text-sm uppercase tracking-wider hover:from-[#FF172F] hover:to-[#E50920] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-3 group cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="px-7 py-4 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-[#F5F0E8] font-medium text-sm tracking-wide transition-all backdrop-blur-md flex items-center justify-center gap-3 cursor-pointer group"
            >
              <div className="w-6 h-6 rounded-full bg-[#E50920]/20 flex items-center justify-center text-[#FF172F] group-hover:scale-110 transition-transform">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Free Webinar</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 border-t border-white/15 max-w-lg">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#F5F0E8]/70 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Strip at bottom of Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-black/55 backdrop-blur-xl border border-[#E50920]/20 shadow-2xl">
          {HERO_PILLS.map((pill) => (
            <div
              key={pill.title}
              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors"
            >
              <div className="p-2 rounded-lg bg-[#E50920]/15 shrink-0">
                {getIcon(pill.icon)}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {pill.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#F5F0E8]/60">
                  {pill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
