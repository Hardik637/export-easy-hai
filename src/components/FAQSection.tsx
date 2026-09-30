"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/data/siteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-2.5 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#D45A20]" />
            FREQUENT QUESTIONS
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-[#111111]">
            Got Questions? <br />
            <span>WE&apos;VE GOT ANSWERS.</span>
          </h2>
        </div>

        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-[#EAD5AF] bg-white/90 backdrop-blur-md transition-all overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="min-h-[52px] w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer active:bg-[#FAF6EE]/50 transition-colors"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-[#111111] tracking-tight leading-snug">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] border border-[#EAD5AF] flex items-center justify-center text-[#D45A20] shrink-0 font-bold">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F0E6D2] pt-3.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
