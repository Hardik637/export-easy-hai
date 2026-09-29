"use client";

import React from "react";
import Image from "next/image";
import { Calendar, Video, Users, ArrowRight } from "lucide-react";

interface WebinarSectionProps {
  onOpenWebinarModal?: () => void;
}

export default function WebinarSection({ onOpenWebinarModal }: WebinarSectionProps) {
  return (
    <section
      id="webinar"
      className="relative py-14 sm:py-20 overflow-hidden bg-[#FAF6EE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#0B0607] border border-[#E50920]/40">
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

          <div className="p-6 sm:p-10 lg:p-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E50920] text-white text-[9px] font-bold tracking-widest uppercase mb-3 shadow-md">
                  FREE WEBINAR
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.92] text-white tracking-tight mb-2">
                  Your First Step <br />
                  <span className="text-[#FF172F]">
                    Towards Global Business.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-lg">
                  Join our upcoming free webinar and learn how to start exporting from India with a simple and practical approach.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <div className="space-y-2 mb-4 text-xs text-white/90">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FF172F] shrink-0" />
                    <span>Sat, 28 Sep 2026 • 7:00 PM (IST)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Video className="w-3.5 h-3.5 text-[#FF172F] shrink-0" />
                    <span>Live on Zoom (Interactive)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Users className="w-3.5 h-3.5 text-[#FFD86A] shrink-0" />
                    <span className="text-[#FFD86A]">Limited Seats Available</span>
                  </div>
                </div>

                <button
                  onClick={onOpenWebinarModal}
                  className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#E50920] hover:bg-[#FF172F] text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Register for Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
