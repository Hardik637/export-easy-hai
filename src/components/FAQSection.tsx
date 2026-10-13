"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS_CONTENT } from "@/data/siteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-12 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="editorial-container max-w-4xl">
        <div className="rounded-2xl bg-white/95 border border-[#EAD5AF] p-4.5 sm:p-10 lg:p-14 shadow-2xl">
          <div className="max-w-xl mb-6 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3.5 text-[#D45A20] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#D45A20]" />
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[0.95] tracking-tight uppercase text-[#111111]">
              Questions Beginners Ask
            </h2>
          </div>

          {/* Clean, compact unified accordion container */}
          <div className="rounded-xl border border-[#EAD5AF] bg-[#FAF6EE] overflow-hidden divide-y divide-[#EAD5AF] shadow-sm">
            {FAQS_CONTENT.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left py-3 px-3.5 sm:py-4.5 sm:px-5 flex items-center justify-between gap-2.5 sm:gap-4 cursor-pointer hover:bg-white/70 transition-colors focus:outline-none focus:bg-white/60"
                  >
                    <span className="font-sans font-bold text-xs sm:text-base text-[#111111] tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white border border-[#EAD5AF] flex items-center justify-center text-[#D45A20] shrink-0 font-bold shadow-2xs">
                      {isOpen ? <Minus className="w-3 h-3 sm:w-4 sm:h-4" /> : <Plus className="w-3 h-3 sm:w-4 sm:h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-3.5 pb-3.5 pt-1 sm:px-5 sm:pb-5 sm:pt-2 text-[11px] sm:text-sm text-[#222222] leading-relaxed font-normal bg-white/50 border-t border-[#EAD5AF]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
