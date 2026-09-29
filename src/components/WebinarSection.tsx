"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, Video, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface WebinarSectionProps {
  onOpenWebinarModal?: () => void;
}

export default function WebinarSection({ onOpenWebinarModal }: WebinarSectionProps) {
  return (
    <section
      id="webinar"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner with dark port image overlay to provide visual callback to night */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E50920]/40 bg-[#090909]">
          {/* Background image with dark crimson grading */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/webinar-cover.jpg"
              alt="Night container port logistics webinar backdrop"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center filter brightness-[0.35] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-[#26090B]/80 pointer-events-none" />
          </div>

          <div className="p-8 sm:p-12 lg:p-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Copy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50920] text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-lg shadow-[#E50920]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  FREE LIVE WEBINAR
                </div>

                <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.95] text-white tracking-tight mb-4">
                  Your First Step <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF172F] via-[#F2A62B] to-[#FFD86A]">
                    Towards Global Business.
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#F5F0E8]/85 font-normal leading-relaxed max-w-xl mb-8">
                  Join our upcoming free webinar with Rahul Makwana and learn how to start exporting from India with a simple and practical approach. No guesswork, no costly mistakes.
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2 mb-8 text-xs sm:text-sm text-[#F5F0E8]/80">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF172F] shrink-0" />
                    <span>How to find your first 3 overseas buyers with ₹0 marketing budget</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF172F] shrink-0" />
                    <span>The complete 5-point buyer background verification checklist</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF172F] shrink-0" />
                    <span>Live Q&A: Get direct feedback on your product ideas</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Info Card & Register Action */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/15 shadow-2xl">
                  <div className="space-y-4 mb-8">
                    {/* Date */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="p-2.5 rounded-lg bg-[#E50920]/15 text-[#FF172F]">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Date</div>
                        <div className="font-semibold text-white text-sm">Saturday, 28 Sep 2026</div>
                      </div>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="p-2.5 rounded-lg bg-[#E50920]/15 text-[#FF172F]">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Time</div>
                        <div className="font-semibold text-white text-sm">7:00 PM (IST)</div>
                      </div>
                    </div>

                    {/* Mode */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="p-2.5 rounded-lg bg-[#E50920]/15 text-[#FF172F]">
                        <Video className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Access</div>
                        <div className="font-semibold text-white text-sm">Live on Zoom (Interactive)</div>
                      </div>
                    </div>

                    {/* Capacity */}
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="p-2.5 rounded-lg bg-[#E50920]/15 text-[#FF172F]">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider">Seats</div>
                        <div className="font-semibold text-[#FFD86A] text-sm">Limited to 150 Attendees Only</div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={onOpenWebinarModal}
                    className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#FF172F] hover:from-[#FF172F] hover:to-[#B80014] text-white transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Register for Free</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[11px] text-center text-white/40 mt-3">
                    Instant confirmation link sent to your WhatsApp & Email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
