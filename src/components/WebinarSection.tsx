"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Clock, Video, Users, ArrowRight } from "lucide-react";

interface WebinarSectionProps {
  onOpenWebinarModal?: () => void;
}

export default function WebinarSection({ onOpenWebinarModal }: WebinarSectionProps) {
  return (
    <section
      id="webinar"
      className="relative py-16 sm:py-24 overflow-hidden bg-[#FAF6EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Industrial Container Port Banner (Visual Callback to Night) */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0B0607] border border-[#E50920]/40">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/webinar-cover.jpg"
              alt="Night container port logistics webinar backdrop"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-40 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-[#26090B]/80 pointer-events-none" />
          </div>

          <div className="p-8 sm:p-12 lg:p-14 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50920] text-white text-[10px] font-bold tracking-widest uppercase mb-4 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  FREE WEBINAR
                </div>

                <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.9] text-white tracking-tight mb-4">
                  Your First Step <br />
                  <span className="text-[#FF172F]">
                    Towards Global Business.
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-[#F5F0E8]/85 font-normal leading-relaxed max-w-xl">
                  Join our upcoming free webinar and learn how to start exporting from India with a simple and practical approach.
                </p>
              </div>

              {/* Right Column: Schedule Info & Red CTA Button */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="space-y-3 mb-6 text-xs text-white/90">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#FF172F] shrink-0" />
                    <span>Sat, 28 Sep 2026 • 7:00 PM (IST)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-[#FF172F] shrink-0" />
                    <span>Live on Zoom (Interactive Q&amp;A)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-[#FFD86A] shrink-0" />
                    <span className="text-[#FFD86A] font-semibold">Limited Seats • Apply to Reserve</span>
                  </div>
                </div>

                <button
                  onClick={onOpenWebinarModal}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#E50920] hover:bg-[#FF172F] text-white transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register for Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
