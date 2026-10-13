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
      className="relative py-12 sm:py-24 overflow-hidden bg-transparent scroll-mt-24 text-white"
    >
      <div className="editorial-container">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0c0a09]/95 border border-white/10 p-3 sm:p-10 lg:p-14">
          {/* Header */}
          <div className="max-w-3xl mb-3 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#E50920]/15 border border-[#E50920]/30 text-[#FF4D5E] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-1 sm:mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50920]" />
              {WEBINAR_CONTENT.eyebrow}
            </div>

            <h2 className="font-display text-2xl sm:text-5xl md:text-6xl lg:text-[68px] uppercase leading-[0.98] sm:leading-[0.95] text-white tracking-tight mb-1 sm:mb-4">
              {WEBINAR_CONTENT.subhead}
            </h2>

            <p className="text-[11px] sm:text-lg text-white/90 font-normal leading-relaxed">
              {WEBINAR_CONTENT.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 lg:gap-12 items-start mb-3 sm:mb-10">
            {/* Event details card — On mobile, compact ticket layout with prominent fee, schedule & CTA */}
            <div className="order-first lg:order-last lg:col-span-5 flex flex-col justify-between p-2.5 sm:p-7 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-xl">
              <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-1.5 sm:mb-4 font-semibold pb-1 sm:pb-2 border-b border-white/10">
                <span>Event details</span>
                <span className="text-white/50 text-[9px] sm:text-[10px]">Live Workshop</span>
              </div>

              {/* Price & Schedule Shared Row */}
              <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-white/[0.04] border border-white/10 mb-1.5 sm:mb-3">
                <div>
                  <div className="text-[8.5px] sm:text-[10px] uppercase font-mono text-white/50 tracking-wider">Registration Fee</div>
                  <div className="font-bold text-lg sm:text-2xl text-[#FF4D5E] leading-none mt-0.5">
                    {WEBINAR_CONTENT.details.fee}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[8.5px] sm:text-[10px] uppercase font-mono text-white/50 tracking-wider">Live Schedule</div>
                  <div className="font-bold text-[11px] sm:text-sm text-[#FFD86A] leading-tight mt-0.5">
                    {WEBINAR_CONTENT.details.schedule}
                  </div>
                </div>
              </div>

              {/* Tight Two-Column Info Grid */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 sm:block sm:space-y-2.5 mb-2 sm:mb-5 text-[10.5px] sm:text-sm text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-0.5 sm:py-1.5 border-b border-white/5 sm:border-white/10">
                  <span className="text-white/50 text-[8.5px] sm:text-xs font-mono uppercase tracking-wider">Format</span>
                  <span className="font-medium text-white text-[10.5px] sm:text-sm leading-tight">{WEBINAR_CONTENT.details.format}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-0.5 sm:py-1.5 border-b border-white/5 sm:border-white/10">
                  <span className="text-white/50 text-[8.5px] sm:text-xs font-mono uppercase tracking-wider">Platform</span>
                  <span className="font-medium text-white text-[10.5px] sm:text-sm leading-tight">{WEBINAR_CONTENT.details.platform}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-0.5 sm:py-1.5 border-b border-white/5 sm:border-white/10">
                  <span className="text-white/50 text-[8.5px] sm:text-xs font-mono uppercase tracking-wider">Language</span>
                  <span className="font-medium text-white text-[10.5px] sm:text-sm leading-tight">{WEBINAR_CONTENT.details.language}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-0.5 sm:py-1.5 border-b border-white/5 sm:border-white/10">
                  <span className="text-white/50 text-[8.5px] sm:text-xs font-mono uppercase tracking-wider">Seats</span>
                  <span className="font-medium text-white text-[10.5px] sm:text-sm leading-tight">{WEBINAR_CONTENT.details.seats}</span>
                </div>
                <div className="col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between py-0.5 sm:py-1.5 border-b border-white/5 sm:border-white/10">
                  <span className="text-white/50 text-[8.5px] sm:text-xs font-mono uppercase tracking-wider">Recording</span>
                  <span className="font-medium text-white text-[10.5px] sm:text-sm leading-tight">{WEBINAR_CONTENT.details.recording}</span>
                </div>
              </div>

              <button
                onClick={onOpenWebinarModal}
                className="btn-primary w-full py-2.5 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm mb-2 sm:mb-4 justify-center shadow-lg shadow-red-950/40"
              >
                <span>{WEBINAR_CONTENT.primaryCTA}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <div className="space-y-1 sm:space-y-1.5 text-[9px] sm:text-xs text-white/70 leading-snug pt-1.5 border-t border-white/5">
                <p>
                  <strong className="text-white/90 font-semibold">Payment and access note: </strong>
                  {WEBINAR_CONTENT.paymentNote}
                </p>
                <p>
                  <strong className="text-white/90 font-semibold">Refund note: </strong>
                  {WEBINAR_CONTENT.refundNote}
                </p>
              </div>
            </div>

            {/* In this live session, you will learn & receive */}
            <div className="order-last lg:order-first lg:col-span-7 space-y-3 sm:space-y-7">
              <div>
                <h3 className="font-sans font-bold text-[10.5px] sm:text-sm text-[#FFD86A] uppercase tracking-wider mb-1.5 sm:mb-4 pb-1 sm:pb-2 border-b border-white/10">
                  In this live session, you will learn:
                </h3>
                {/* Compact, clean 2-column checklist on mobile */}
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-1.5 sm:gap-3">
                  {WEBINAR_CONTENT.learnList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 sm:p-3.5 rounded-lg bg-white/[0.03] sm:bg-white/[0.04] border border-white/5 sm:border-white/10 hover:border-white/20 transition-colors flex items-start gap-1.5 sm:gap-3 text-[10px] sm:text-sm text-white/90 leading-tight"
                    >
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E50920] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* You will also receive */}
              <div>
                <h3 className="font-sans font-bold text-[10.5px] sm:text-sm text-[#FFD86A] uppercase tracking-wider mb-1.5 sm:mb-4 pb-1 sm:pb-2 border-b border-white/10">
                  You will also receive:
                </h3>
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-1 sm:gap-3">
                  {WEBINAR_CONTENT.receiveList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-1.5 sm:p-3.5 rounded-lg bg-white/[0.03] sm:bg-white/[0.04] border border-white/5 sm:border-white/10 hover:border-white/20 transition-colors flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-sm text-white/90 leading-tight"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD86A] shrink-0" />
                      <span className="font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-2.5 sm:pt-5 border-t border-white/15 text-[10px] sm:text-xs text-white/80 leading-relaxed italic">
            <strong className="text-white font-semibold not-italic">Disclaimer: </strong>
            {WEBINAR_CONTENT.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
}
