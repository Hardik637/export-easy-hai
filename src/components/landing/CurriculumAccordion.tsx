"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CurriculumModule {
  number: string;
  title: string;
  desc: string;
}

interface CurriculumAccordionProps {
  items: CurriculumModule[];
}

export function CurriculumAccordion({ items }: CurriculumAccordionProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <div className="sm:hidden space-y-2">
      {items.map((item) => {
        const isOpen = expandedModule === item.number;
        return (
          <div
            key={item.number}
            className={`rounded-xl transition-colors duration-200 border ${
              isOpen
                ? "bg-[#0D0B0F] border-[#E50920]/60 shadow-[0_0_20px_rgba(229,9,32,0.15)]"
                : "bg-[#09080A] border-white/10 hover:border-white/20"
            }`}
          >
            <button
              type="button"
              onClick={() => setExpandedModule(isOpen ? null : item.number)}
              className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 min-h-[50px] cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex-1 min-w-0 pr-1">
                <span className="text-[10px] font-mono font-bold text-[#E50920] tracking-widest uppercase block mb-1">
                  MODULE {item.number}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isOpen
                    ? "bg-[#E50920]/20 text-[#E50920]"
                    : "bg-white/5 text-white/50"
                }`}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#E50920]" : ""
                  }`}
                />
              </div>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-3.5 pt-1 text-xs text-white/75 leading-relaxed border-t border-white/5 mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
