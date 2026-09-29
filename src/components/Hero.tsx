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
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden"
    >
      {/* Background Cinematic Visual Layer */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-blood-moon.jpg"
          alt="Indian container port at night with blood moon and young Indian exporter silhouette"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Soft atmospheric gradient transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120607] via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3 text-[#FF172F] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-[2px] bg-[#FF172F]" />
            STUCK IN A 9 TO 5?
          </div>

          {/* Main Headline — balanced, impactful, not oversized */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase text-white mb-4">
            QUIT 9 TO 5. <br />
            <span className="text-[#FF172F]">
              BUILD BIGGER.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-md font-normal leading-relaxed mb-6">
            Learn how to start and grow an export business from India with practical guidance, real strategies and zero confusion.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
            <button
              onClick={onOpenCourseModal}
              className="px-6 py-3 rounded-full bg-[#E50920] hover:bg-[#FF172F] text-white font-semibold text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#E50920]/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="px-5 py-3 rounded-full bg-black/40 hover:bg-white/10 border border-white/20 text-white font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer group"
            >
              <div className="w-4 h-4 rounded-full bg-[#E50920]/30 flex items-center justify-center text-[#FF172F]">
                <Play className="w-2 h-2 fill-current ml-0.5" />
              </div>
              <span>Watch Free Webinar</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-5 border-t border-white/10 max-w-sm mb-6">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Feature List (Clean & Compact) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-[11px] text-white/75 max-w-lg">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
              <span>Practical Learning (No Theory Gyan)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
              <span>Fraud Prevention &amp; Buyer Verification</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
              <span>Step-by-Step Guidance (India to Global)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F]" />
              <span>Lifetime Access &amp; Community Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
