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
      className="relative min-h-[75vh] flex flex-col justify-center py-14 sm:py-24 overflow-hidden bg-transparent scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10">
        <div className="max-w-xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 mb-2.5 text-[#F2A62B] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-5 h-[2px] bg-[#F2A62B]" />
            THE OPPORTUNITY
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-white mb-2.5">
            Indian Products. <br />
            <span className="text-[#F2A62B]">
              GLOBAL DEMAND.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/80 font-normal leading-relaxed mb-4">
            From everyday essentials to specialized goods, Indian products are valued across international markets.
          </p>

          <button
            onClick={onOpenCourseModal}
            className="px-5 py-2.5 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore the Opportunity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Global Markets Stats */}
        <div className="p-3.5 sm:p-5 rounded-2xl bg-black/55 backdrop-blur-xl border border-[#D45A20]/30 max-w-xl mb-4 shadow-xl">
          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FFD86A] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F2A62B] animate-pulse" />
            Global Markets are Waiting for Indian Products
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="font-display text-2xl sm:text-3xl text-white">
                $800B+
              </div>
              <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">
                Export Target
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl text-white">
                200+
              </div>
              <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">
                Active Ports
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl text-[#FFD86A]">
                10.5x
              </div>
              <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium">
                Peak Multiplier
              </div>
            </div>
          </div>
        </div>

        {/* Arbitrage comparison card with interactive tabs */}
        <div className="max-w-xl p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-xl">
          {/* Product selector tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/10 mb-4 overflow-x-auto scrollbar-none">
            {ARBITRAGE_EXAMPLES.map((ex, idx) => (
              <button
                key={ex.product}
                onClick={() => setActiveArbitrage(idx)}
                className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex-1 text-center ${
                  activeArbitrage === idx
                    ? "bg-[#F2A62B] text-black shadow-md"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {ex.product.split(" ")[0]} {ex.product.split(" ")[1]}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mb-3 text-xs">
            <div>
              <span className="font-sans font-bold text-sm sm:text-base text-white tracking-tight">
                {ARBITRAGE_EXAMPLES[activeArbitrage].product}
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#F2A62B]/20 border border-[#F2A62B]/40 text-xs font-mono font-bold text-[#FFD86A]">
              {ARBITRAGE_EXAMPLES[activeArbitrage].multiplier}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] sm:text-xs text-white/60 uppercase font-medium">🇮🇳 Sourcing (India)</div>
              <div className="font-display text-xl sm:text-2xl text-white mt-1">
                {ARBITRAGE_EXAMPLES[activeArbitrage].domestic}
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-[#D45A20]/25 border border-[#F2A62B]/40">
              <div className="text-[10px] sm:text-xs text-[#FFD86A] uppercase font-medium">🌐 Export Price {ARBITRAGE_EXAMPLES[activeArbitrage].flag}</div>
              <div className="font-display text-xl sm:text-2xl text-[#FFD86A] mt-1">
                {ARBITRAGE_EXAMPLES[activeArbitrage].export}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
