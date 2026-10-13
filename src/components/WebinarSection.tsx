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
      className="relative py-16 sm:py-24 overflow-hidden bg-transparent scroll-mt-24 text-white"
    >
      <div className="editorial-container">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0c0a09]/95 border border-white/10 p-6 sm:p-10 lg:p-14">
          {/* Header */}
          <div className="max-w-3xl mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E50920]/15 border border-[#E50920]/30 text-[#FF4D5E] text-xs font-semibold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50920]" />
              {WEBINAR_CONTENT.eyebrow}
            </div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] uppercase leading-[0.95] text-white tracking-tight mb-4">
              {WEBINAR_CONTENT.subhead}
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed">
              {WEBINAR_CONTENT.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
            {/* In this live session, you will learn */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <h3 className="font-sans font-bold text-xs sm:text-sm text-[#FFD86A] uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                  In this live session, you will learn:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WEBINAR_CONTENT.learnList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors flex items-start gap-3 text-sm text-white/90"
                    >
                      <CheckCircle className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* You will also receive */}
              <div>
                <h3 className="font-sans font-bold text-xs sm:text-sm text-[#FFD86A] uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                  You will also receive:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WEBINAR_CONTENT.receiveList.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors flex items-center gap-3 text-sm text-white/90"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#FFD86A] shrink-0" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event details card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-4 font-semibold pb-2 border-b border-white/10">
                Event details
              </div>

              <div className="space-y-3 mb-6 text-sm text-white">
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Format</span>
                  <span className="font-medium text-white">{WEBINAR_CONTENT.details.format}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Platform</span>
                  <span className="font-medium text-white">{WEBINAR_CONTENT.details.platform}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Language</span>
                  <span className="font-medium text-white">{WEBINAR_CONTENT.details.language}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Schedule</span>
                  <span className="font-bold text-[#FFD86A]">{WEBINAR_CONTENT.details.schedule}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Fee</span>
                  <span className="font-bold text-xl text-[#FF4D5E]">{WEBINAR_CONTENT.details.fee}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-white/75">Seats</span>
                  <span className="font-medium text-white">{WEBINAR_CONTENT.details.seats}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-white/75">Recording</span>
                  <span className="font-medium text-white">{WEBINAR_CONTENT.details.recording}</span>
                </div>
              </div>

              <button
                onClick={onOpenWebinarModal}
                className="btn-primary w-full mb-5"
              >
                <span>{WEBINAR_CONTENT.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="space-y-2 text-xs text-white/85 leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">Payment and access note: </strong>
                  {WEBINAR_CONTENT.paymentNote}
                </p>
                <p>
                  <strong className="text-white font-semibold">Refund note: </strong>
                  {WEBINAR_CONTENT.refundNote}
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-5 border-t border-white/15 text-xs text-white/85 leading-relaxed italic">
            <strong className="text-white font-semibold not-italic">Disclaimer: </strong>
            {WEBINAR_CONTENT.disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
}
