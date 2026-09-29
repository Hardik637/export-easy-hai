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
      className="relative min-h-screen flex flex-col justify-between pt-20 pb-10 overflow-hidden"
    >
      {/* Background Image - Clean with subtle atmospheric grading, NOT blacked out */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-blood-moon.jpg"
          alt="Indian container port at night with blood moon and young Indian exporter silhouette"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center filter brightness-90 contrast-105"
        />
        {/* Soft top gradient only for header readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* Top Content: Headline & Action Buttons (Compact, elegant, airy) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 pt-4 sm:pt-8">
        <div className="max-w-md sm:max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 mb-2 text-[#FF172F] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="w-4 h-[1.5px] bg-[#FF172F]" />
            STUCK IN A 9 TO 5?
          </div>

          {/* Main Headline — compact & balanced */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight uppercase text-white mb-2.5">
            QUIT 9 TO 5. <br />
            <span className="text-[#FF172F]">
              BUILD BIGGER.
            </span>
          </h1>

          {/* Supporting Copy — brief 1 line */}
          <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed mb-4 max-w-sm">
            Learn how to start and grow an export business from India with practical guidance and zero confusion.
          </p>

          {/* Compact Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenCourseModal}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#E50920] hover:bg-[#FF172F] text-white font-semibold text-[11px] sm:text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3 h-3" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-black/40 hover:bg-white/10 border border-white/20 text-white font-medium text-[11px] sm:text-xs tracking-wider uppercase transition-all backdrop-blur-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 fill-[#FF172F] text-[#FF172F]" />
              <span>Watch Webinar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Middle Breathing Room: Lets the Moon, Cranes, Container, and Man Silhouette shine */}
      <div className="flex-1 min-h-[140px] sm:min-h-[200px]" />

      {/* Bottom Dock Floor: 3 Stats & 4 Feature Pills */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="pt-4 border-t border-white/15 bg-black/40 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10">
          {/* 3 Stats */}
          <div className="grid grid-cols-3 gap-3 mb-4 text-center sm:text-left">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl sm:text-2xl text-white">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Feature Items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/10 text-[10px] sm:text-[11px] text-white/75">
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Practical Learning</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Buyer Verification</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Step-by-Step Guidance</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#FF172F] shrink-0" />
              <span className="truncate">Lifetime Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
