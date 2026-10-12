"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { LIVE_BATCH_CONTENT } from "@/data/siteData";

export default function CourseSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="live-batch"
      className="relative py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div id="courses" className="absolute -top-24 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#EAD5AF] p-6 sm:p-10 lg:p-12 shadow-xl">
          {/* Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#E50920] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#E50920]" />
              LIVE BATCH SECTION
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight uppercase text-[#111111] mb-3">
              {LIVE_BATCH_CONTENT.heading}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#111111] font-semibold mb-2">
              {LIVE_BATCH_CONTENT.subcopy1}
            </p>

            <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed">
              {LIVE_BATCH_CONTENT.subcopy2}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* What the batch includes (10 points) */}
            <div className="lg:col-span-7">
              <h3 className="font-sans font-bold text-sm sm:text-base text-[#E50920] uppercase tracking-wider mb-4">
                {LIVE_BATCH_CONTENT.includesTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {LIVE_BATCH_CONTENT.includes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] flex items-start gap-2.5 text-xs text-[#222222]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected outcome & Action Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-[#FAF6EE] border border-[#EAD5AF] shadow-md">
              <div>
                <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#D45A20] mb-2">
                  {LIVE_BATCH_CONTENT.expectedOutcomeTitle}
                </h4>

                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed mb-4">
                  {LIVE_BATCH_CONTENT.expectedOutcome}
                </p>

                <div className="p-3 rounded-xl bg-white border border-[#EAD5AF] text-[11px] text-[#666666] italic leading-relaxed mb-6">
                  {LIVE_BATCH_CONTENT.disclaimer}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="min-h-[48px] w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#E50920] hover:bg-[#B80014] text-white transition-all shadow-md shadow-[#E50920]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                >
                  <span>{LIVE_BATCH_CONTENT.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl text-[#111111] border border-[#EAD5AF]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="font-sans font-bold text-xl uppercase tracking-tight leading-tight">
                  {LIVE_BATCH_CONTENT.heading}
                </div>
                <span className="text-xs text-[#D45A20] font-medium">Application Form</span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-9 h-9 rounded-full bg-black/5 text-[#555555] hover:text-black flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#555555] mb-4 leading-relaxed">
              {LIVE_BATCH_CONTENT.expectedOutcome}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your application for the Next Live Batch has been received.");
                setModalOpen(false);
              }}
              className="space-y-3 mb-4"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAD5AF] text-xs bg-[#FAF6EE] focus:outline-none focus:border-[#E50920]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                  WhatsApp Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAD5AF] text-xs bg-[#FAF6EE] focus:outline-none focus:border-[#E50920]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#333333] mb-1">
                  Current Occupation
                </label>
                <input
                  type="text"
                  placeholder="e.g. Working Professional / Business"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EAD5AF] text-xs bg-[#FAF6EE] focus:outline-none focus:border-[#E50920]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#E50920] text-white flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                <span>Submit Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
