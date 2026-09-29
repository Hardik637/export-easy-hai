"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { TRUST_STATS, ARBITRAGE_EXAMPLES } from "@/data/siteData";

interface OpportunityProps {
  onOpenCourseModal?: () => void;
}

export default function OpportunitySection({ onOpenCourseModal }: OpportunityProps) {
  const [activeArbitrage, setActiveArbitrage] = useState(0);

  return (
    <section
      id="opportunity"
      className="relative min-h-[85vh] flex flex-col justify-center py-20 sm:py-28 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="max-w-xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3 text-[#F2A62B] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-[2px] bg-[#F2A62B]" />
            THE OPPORTUNITY
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-3">
            Indian Products. <br />
            <span className="text-[#F2A62B]">
              GLOBAL DEMAND.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed mb-5">
            From everyday essentials to specialized goods, Indian products are valued across international markets.
          </p>

          <button
            onClick={onOpenCourseModal}
            className="px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore the Opportunity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Global Markets Stats */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-[#D45A20]/30 max-w-xl mb-5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#FFD86A] mb-2">
            Global Markets are Waiting for Indian Products
          </div>
          <div className="grid grid-cols-3 gap-3">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl sm:text-3xl text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arbitrage comparison card */}
        <div className="max-w-xl p-4 sm:p-5 rounded-2xl bg-black/65 backdrop-blur-md border border-white/10">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-display text-lg sm:text-xl text-white uppercase tracking-wide">
              Same Products. <span className="text-[#FFD86A]">Bigger Markets.</span>
            </span>
            <span className="text-[11px] font-mono text-[#F2A62B]">
              {ARBITRAGE_EXAMPLES[activeArbitrage].multiplier}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-white/50 uppercase">🇮🇳 In India</div>
              <div className="font-display text-xl text-white mt-0.5">
                {ARBITRAGE_EXAMPLES[activeArbitrage].domestic}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#D45A20]/25 border border-[#F2A62B]/30">
              <div className="text-[10px] text-[#FFD86A] uppercase">🌐 Global Market {ARBITRAGE_EXAMPLES[activeArbitrage].flag}</div>
              <div className="font-display text-xl text-[#FFD86A] mt-0.5">
                {ARBITRAGE_EXAMPLES[activeArbitrage].export}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
