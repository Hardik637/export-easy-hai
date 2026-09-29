"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

interface FinalCTAProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function FinalCTA({ onOpenWebinarModal, onOpenCourseModal }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="relative min-h-screen flex flex-col justify-between py-24 sm:py-32 overflow-hidden text-[#111111]"
    >
      {/* Seamless Full-Bleed Daylight Sunrise Harbor Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/final-cta-ship.jpg"
          alt="Container ship sailing towards the golden horizon in bright morning sunlight with young Indian exporter on the dock"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-100 contrast-105"
        />
        {/* Soft daylight sky gradient blends */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent pointer-events-none" />
      </div>

      {/* Floating handwritten script note in sky */}
      <div className="absolute bottom-20 right-8 sm:bottom-28 sm:right-16 text-right pointer-events-none z-10 hidden sm:block">
        <div className="font-script text-6xl lg:text-7xl text-[#8A4A1C] drop-shadow-md rotate-[-4deg]">
          Bigger Tomorrow <br />
          Is Possible.
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 text-[#D45A20] text-xs font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#D45A20]" />
            FROM INDIA. TO THE WORLD.
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.88] tracking-tight uppercase text-[#111111] mb-6">
            YOUR NEXT CHAPTER. <br />
            <span className="text-[#E50920] drop-shadow-[0_8px_25px_rgba(229,9,32,0.4)]">
              STARTS HERE.
            </span>
          </h2>

          {/* Body */}
          <p className="text-sm sm:text-base lg:text-lg text-[#222222] font-normal leading-relaxed mb-8 max-w-lg">
            Join Export Easy Hai and get the knowledge, tools and support to build your export business with confidence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenCourseModal}
              className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#F2A62B]/35 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenWebinarModal}
              className="px-7 py-4 rounded-full bg-white/40 hover:bg-white/70 border border-black/20 text-[#111111] font-semibold text-xs tracking-wider uppercase transition-all backdrop-blur-sm flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-[#E50920] flex items-center justify-center text-white">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Free Webinar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
