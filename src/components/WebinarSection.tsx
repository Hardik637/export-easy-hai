"use client";

import React from "react";
import { Calendar, Video, Users, CheckCircle, ArrowRight } from "lucide-react";
import { WEBINAR_CONTENT } from "@/data/siteData";

interface WebinarSectionProps {
  onOpenWebinarModal?: () => void;
}

export default function WebinarSection({ onOpenWebinarModal }: WebinarSectionProps) {
  return (
    <section
      id="webinar"
      className="relative py-14 sm:py-20 overflow-hidden bg-transparent scroll-mt-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1C0D0A] via-[#28130E] to-[#120806] border border-[#D45A20]/40 p-6 sm:p-10 lg:p-12">
          {/* Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50920]/20 border border-[#E50920]/40 text-[#FF5A6B] text-[10px] font-bold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] animate-ping" />
              {WEBINAR_CONTENT.eyebrow}
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase leading-[0.95] text-white tracking-tight mb-3">
              {WEBINAR_CONTENT.subhead}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-white/85 font-normal leading-relaxed">
              {WEBINAR_CONTENT.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* In this live session, you will learn */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#FFD86A] uppercase tracking-wider mb-3">
                  In this live session, you will learn:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {WEBINAR_CONTENT.learnList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start gap-2.5 text-xs text-white/90"
                    >
                      <CheckCircle className="w-4 h-4 text-[#FF172F] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* You will also receive */}
              <div>
                <h3 className="font-sans font-bold text-sm sm:text-base text-[#FFD86A] uppercase tracking-wider mb-3">
                  You will also receive:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {WEBINAR_CONTENT.receiveList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5 text-xs text-white/90"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#FFD86A] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event details card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-4 font-semibold">
                Event details
              </div>

              <div className="space-y-2.5 mb-6 text-xs text-white/90">
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Format</span>
                  <span className="font-medium">{WEBINAR_CONTENT.details.format}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Platform</span>
                  <span className="font-medium">{WEBINAR_CONTENT.details.platform}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Language</span>
                  <span className="font-medium">{WEBINAR_CONTENT.details.language}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Schedule</span>
                  <span className="font-bold text-[#FFD86A]">{WEBINAR_CONTENT.details.schedule}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Fee</span>
                  <span className="font-bold text-lg text-[#FF172F]">{WEBINAR_CONTENT.details.fee}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                  <span className="text-white/60">Seats</span>
                  <span className="font-medium">{WEBINAR_CONTENT.details.seats}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-white/60">Recording</span>
                  <span className="font-medium">{WEBINAR_CONTENT.details.recording}</span>
                </div>
              </div>

              <button
                onClick={onOpenWebinarModal}
                className="min-h-[48px] w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#FF172F] hover:from-[#FF172F] hover:to-[#B80014] text-white transition-all shadow-lg shadow-[#E50920]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] mb-4"
              >
                <span>{WEBINAR_CONTENT.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-2 text-[10px] sm:text-[11px] text-white/65 leading-relaxed">
                <p>
                  <strong className="text-white/80 font-semibold">Payment and access note: </strong>
                  {WEBINAR_CONTENT.paymentNote}
                </p>
                <p>
                  <strong className="text-white/80 font-semibold">Refund note: </strong>
                  {WEBINAR_CONTENT.refundNote}
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-4 border-t border-white/10 text-[10px] sm:text-[11px] text-white/60 leading-relaxed italic">
            <strong className="text-white/75 font-semibold not-italic">Disclaimer: </strong>
            {WEBINAR_CONTENT.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
}
