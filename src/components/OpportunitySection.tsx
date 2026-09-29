"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { TRUST_STATS, ARBITRAGE_EXAMPLES } from "@/data/siteData";

interface OpportunityProps {
  onOpenCourseModal?: () => void;
}

export default function OpportunitySection({ onOpenCourseModal }: OpportunityProps) {
  const [activeArbitrage, setActiveArbitrage] = useState(0);

  return (
    <section
      id="opportunity"
      className="relative min-h-[95vh] flex flex-col justify-center py-24 sm:py-32 overflow-hidden"
    >
      {/* Seamless Glowing World Trade Route Map Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/opportunity-map.jpg"
          alt="World map glowing trade routes originating from Indian shipping ports to global markets"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.85] contrast-110"
        />
        {/* Continuous gradient blend from pre-dawn to golden dawn */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#5A1D12] via-transparent to-[#26090B] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-[#D45A20]/25 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 text-[#F2A62B] text-xs font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#F2A62B]" />
            THE OPPORTUNITY
          </div>

          {/* Headline */}
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-white mb-6">
            Indian Products. <br />
            <span className="text-[#F2A62B] drop-shadow-[0_10px_35px_rgba(242,166,43,0.5)]">
              GLOBAL DEMAND.
            </span>
          </h2>

          {/* Body */}
          <p className="text-sm sm:text-base lg:text-lg text-[#F5F0E8]/85 font-normal leading-relaxed max-w-xl mb-8">
            From everyday essentials to specialized goods, Indian products are valued across the world. What sells for hundreds of rupees locally commands hundreds of dollars overseas.
          </p>

          <button
            onClick={onOpenCourseModal}
            className="px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#F2A62B]/30 flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore the Opportunity</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Global Market Stats Strip */}
        <div className="p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-[#D45A20]/30 max-w-3xl mb-10">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#FFD86A] mb-3">
            Global Markets are Waiting for Indian Products
          </div>
          <div className="grid grid-cols-3 gap-6">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-[#F5F0E8]/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arbitrage Card (Same Products. Bigger Markets.) */}
        <div className="max-w-2xl p-6 rounded-2xl bg-[#120607]/80 backdrop-blur-md border border-[#F2A62B]/30">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide">
              Same Products. <span className="text-[#FFD86A]">Bigger Markets.</span>
            </span>
            <span className="text-xs font-mono text-[#F2A62B] uppercase">
              {ARBITRAGE_EXAMPLES[activeArbitrage].multiplier}
            </span>
          </div>

          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {ARBITRAGE_EXAMPLES.map((item, idx) => (
              <button
                key={item.product}
                onClick={() => setActiveArbitrage(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeArbitrage === idx
                    ? "bg-[#D45A20] text-white"
                    : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.product.split(" ")[1] || item.product}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[10px] text-white/50 uppercase tracking-wider mb-1">
                🇮🇳 Domestic Rate
              </div>
              <div className="font-display text-2xl text-white">
                {ARBITRAGE_EXAMPLES[activeArbitrage].domestic}
              </div>
              <div className="text-[11px] text-white/40 mt-0.5">
                Indian wholesale price
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#D45A20]/25 border border-[#F2A62B]/40">
              <div className="text-[10px] text-[#FFD86A] uppercase tracking-wider mb-1">
                🌐 Global Export Price {ARBITRAGE_EXAMPLES[activeArbitrage].flag}
              </div>
              <div className="font-display text-2xl text-[#FFD86A]">
                {ARBITRAGE_EXAMPLES[activeArbitrage].export}
              </div>
              <div className="text-[11px] text-[#F2A62B] font-semibold mt-0.5">
                Direct international buyer rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
