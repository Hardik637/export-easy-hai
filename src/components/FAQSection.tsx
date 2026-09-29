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
      className="relative py-20 sm:py-28 overflow-hidden bg-transparent text-[#111111]"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="max-w-xl mb-10">
          <div className="inline-flex items-center gap-2 mb-3 text-[#D45A20] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#D45A20]" />
            FREQUENT QUESTIONS
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-[#111111]">
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
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-lg sm:text-xl text-[#111111] uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#D45A20] shrink-0 font-bold">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-[#555555] leading-relaxed border-t border-[#F0E6D2] pt-3">
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
