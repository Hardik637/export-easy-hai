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
      className="relative py-24 sm:py-32 overflow-hidden bg-[#FAF6EE] text-[#111111]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4 text-[#D45A20] text-xs font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#D45A20]" />
            FREQUENT QUESTIONS
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-[#111111] mb-4">
            Got Questions? <br />
            <span>WE&apos;VE GOT ANSWERS.</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#EAD5AF] bg-white transition-all overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display text-xl sm:text-2xl text-[#111111] uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF6EE] flex items-center justify-center text-[#D45A20] shrink-0 font-bold">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F0E6D2] pt-4">
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
