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
      className="relative py-14 sm:py-20 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1C0D0A] via-[#28130E] to-[#120806] border border-[#D45A20]/40">
          <div className="p-6 sm:p-10 lg:p-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50920]/20 border border-[#E50920]/40 text-[#FF5A6B] text-[10px] font-bold tracking-widest uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] animate-ping" />
                  EXCLUSIVE FREE MASTERCLASS
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.92] text-white tracking-tight mb-3">
                  Your First Step <br />
                  <span className="text-[#FFD86A]">
                    Towards Global Business.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-lg">
                  Join our upcoming free live session with Rahul Makwana. Learn the exact 5-stage blueprint to start exporting Indian products to global buyers.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-black/45 backdrop-blur-xl border border-white/15 shadow-xl">
                <div className="space-y-3 mb-5 text-xs text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E50920]/20 flex items-center justify-center text-[#FF5A6B] shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Saturday, 28 Sep 2026</div>
                      <div className="text-[11px] text-white/60">7:00 PM IST (90 Mins)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E50920]/20 flex items-center justify-center text-[#FF5A6B] shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Live Interactive Zoom</div>
                      <div className="text-[11px] text-white/60">Live Q&amp;A Session</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F2A62B]/20 flex items-center justify-center text-[#FFD86A] shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#FFD86A]">Only 42 Seats Remaining</div>
                      <div className="text-[11px] text-white/60">100% Free Registration</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenWebinarModal}
                  className="min-h-[48px] w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#FF172F] hover:from-[#FF172F] hover:to-[#B80014] text-white transition-all shadow-lg shadow-[#E50920]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>Claim Your Free Pass</span>
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
