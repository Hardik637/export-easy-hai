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
      className="relative py-16 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-white/95 border border-[#EAD5AF] p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="max-w-xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2.5 mb-3 text-[#D45A20] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-5 h-[2px] bg-[#D45A20]" />
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.96] tracking-tight uppercase text-[#111111]">
              Questions Beginners Ask
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_CONTENT.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#EAD5AF] bg-[#FAF6EE] transition-all overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="min-h-[56px] w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D45A20] focus:ring-offset-2"
                  >
                    <span className="font-sans font-bold text-base sm:text-lg text-[#111111] tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#EAD5AF] flex items-center justify-center text-[#D45A20] shrink-0 font-bold">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 text-sm sm:text-base text-[#222222] leading-relaxed border-t border-[#EAD5AF] pt-4 font-normal">
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
