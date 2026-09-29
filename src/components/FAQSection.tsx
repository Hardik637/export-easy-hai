"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS } from "@/data/siteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D45A20]/20 border border-[#D45A20]/40 text-[#F2A62B] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <HelpCircle className="w-3.5 h-3.5 text-[#F2A62B]" />
            FREQUENT QUESTIONS
          </div>

          <h2 className="font-display text-4xl sm:text-6xl uppercase leading-[0.95] text-white tracking-tight mb-4">
            Got Questions? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A62B] via-[#FFD86A] to-[#FFF1D2]">
              WE&apos;VE GOT ANSWERS.
            </span>
          </h2>

          <p className="text-base text-[#F5F0E8]/80 font-normal">
            Straightforward, practical clarity on everything from company registration to buyer verification.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-black/60 border-[#F2A62B]/50 shadow-xl"
                    : "bg-black/30 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl sm:text-2xl text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? "bg-[#F2A62B] text-black rotate-180"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#F5F0E8]/85 leading-relaxed border-t border-white/10 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#D45A20]/20 text-[#FFD86A]">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Have a specific product or buyer scenario?
            </h4>
            <p className="text-xs text-[#F5F0E8]/70 mt-0.5">
              Ask in our upcoming live Q&amp;A session or speak with our export mentorship desk.
            </p>
          </div>
          <a
            href="#webinar"
            className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shrink-0"
          >
            Join Live Q&amp;A
          </a>
        </div>
      </div>
    </section>
  );
}
