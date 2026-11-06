"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FAQItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const isOpen = openFaqIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl bg-[#0A090D] border border-white/10 overflow-hidden transition-colors duration-200"
          >
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-semibold text-white">
                {faq.question}
              </span>
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/60 shrink-0">
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
