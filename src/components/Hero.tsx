"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play, ShieldAlert, GraduationCap, Compass, Users } from "lucide-react";
import { TRUST_STATS } from "@/data/siteData";

interface HeroProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function Hero({ onOpenWebinarModal, onOpenCourseModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 overflow-hidden"
    >
      {/* Seamless Full-Bleed Atmospheric Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-blood-moon.jpg"
          alt="Indian container port at night with blood moon and young Indian exporter silhouette"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Cinematic gradient overlays that naturally fade downward into the harbor */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120607] via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-[#E50920]/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 text-[#FF172F] text-xs font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#FF172F]" />
            STUCK IN A 9 TO 5?
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.86] tracking-tight uppercase text-white mb-6">
            QUIT 9 TO 5. <br />
            <span className="text-[#FF172F] drop-shadow-[0_10px_35px_rgba(255,23,47,0.6)]">
              BUILD BIGGER.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-[#F5F0E8]/90 max-w-xl font-normal leading-relaxed mb-8">
            Learn how to start and grow an export business from India with practical guidance, real strategies and zero confusion.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenCourseModal}
              className="px-8 py-4 rounded-full bg-[#E50920] hover:bg-[#FF172F] text-white font-bold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="px-7 py-4 rounded-full bg-black/40 hover:bg-white/10 border border-white/25 text-[#F5F0E8] font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <div className="w-5 h-5 rounded-full bg-[#E50920]/30 flex items-center justify-center text-[#FF172F] group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Free Webinar</span>
            </button>
          </div>

          {/* Three Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/15 max-w-lg mb-10">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl text-white tracking-wide">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-[#F5F0E8]/70 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Sleek Feature Row (Not bulky cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs text-[#F5F0E8]/85 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#E50920]/20 flex items-center justify-center text-[#FF172F] shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white">Practical Learning</span>{" "}
                <span className="text-white/60">(No Theory Gyan)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#E50920]/20 flex items-center justify-center text-[#FF172F] shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white">Fraud Prevention</span>{" "}
                <span className="text-white/60">&amp; Buyer Verification</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#E50920]/20 flex items-center justify-center text-[#FF172F] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white">Step-by-Step Guidance</span>{" "}
                <span className="text-white/60">(From India to Global)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#E50920]/20 flex items-center justify-center text-[#FF172F] shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-white">Lifetime Access</span>{" "}
                <span className="text-white/60">&amp; Community Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
