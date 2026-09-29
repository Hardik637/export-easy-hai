"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Globe2, TrendingUp, Sparkles, DollarSign } from "lucide-react";
import { TRUST_STATS, ARBITRAGE_EXAMPLES } from "@/data/siteData";

interface OpportunityProps {
  onOpenCourseModal?: () => void;
}

export default function OpportunitySection({ onOpenCourseModal }: OpportunityProps) {
  const [activeArbitrage, setActiveArbitrage] = useState(0);

  return (
    <section
      id="opportunity"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Visual backdrop container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D45A20]/20 border border-[#D45A20]/40 text-[#F2A62B] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F2A62B]" />
            THE OPPORTUNITY
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-6">
            Indian Products. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D45A20] via-[#F2A62B] to-[#FFD86A] drop-shadow-[0_8px_20px_rgba(212,90,32,0.4)]">
              GLOBAL DEMAND.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#F5F0E8]/85 leading-relaxed font-normal">
            From everyday essentials to specialized goods, Indian products are valued across international markets. What sells for hundreds of rupees locally commands hundreds of dollars overseas.
          </p>
        </div>

        {/* Cinematic Map Visual Layer with Glow */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D45A20]/30 mb-12 group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src="/images/opportunity-map.jpg"
              alt="World map glowing trade routes originating from Indian shipping ports to global markets"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
          </div>

          {/* Floating Stats Bar on the Map */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-4 sm:p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center sm:text-left">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="border-r border-white/10 last:border-none pr-2">
                  <div className="font-display text-2xl sm:text-4xl text-[#FFD86A] tracking-wider">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="hidden sm:block text-[11px] text-[#F5F0E8]/60">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arbitrage Value Comparison Card ("Same Products. Bigger Markets.") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-3xl bg-black/45 backdrop-blur-xl border border-[#D45A20]/30">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold tracking-widest text-[#F2A62B] uppercase mb-2">
              REALITY CHECK
            </div>
            <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide mb-3">
              Same Products. <br />
              <span className="text-[#FFD86A]">Bigger Markets.</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F0E8]/80 leading-relaxed mb-6 font-normal">
              Indian raw materials and finished goods are in massive demand globally. Notice the price arbitrage when exported directly.
            </p>

            {/* Selectable product tabs */}
            <div className="flex flex-col gap-2">
              {ARBITRAGE_EXAMPLES.map((item, idx) => (
                <button
                  key={item.product}
                  onClick={() => setActiveArbitrage(idx)}
                  className={`text-left px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-between ${
                    activeArbitrage === idx
                      ? "bg-[#D45A20]/30 text-white border border-[#F2A62B]/50 shadow-md"
                      : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span>{item.product}</span>
                  <span className="text-[11px] text-[#FFD86A] font-mono">{item.multiplier}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Comparison Display */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-2xl bg-[#120607]/80 border border-[#D45A20]/40">
              <div className="text-xs font-mono uppercase text-[#F2A62B] mb-4 flex items-center justify-between">
                <span>Direct Exporter Comparison</span>
                <span>Destination {ARBITRAGE_EXAMPLES[activeArbitrage].flag}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Domestic Price */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-white/50 uppercase tracking-wider mb-1">
                    🇮🇳 India Domestic Market
                  </div>
                  <div className="font-display text-3xl text-white/80">
                    {ARBITRAGE_EXAMPLES[activeArbitrage].domestic}
                  </div>
                  <div className="text-[11px] text-white/40 mt-1">
                    Standard local wholesale rate
                  </div>
                </div>

                {/* International Export Price */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#D45A20]/20 to-[#F2A62B]/10 border border-[#F2A62B]/40">
                  <div className="text-xs text-[#FFD86A] uppercase tracking-wider mb-1">
                    🌐 Global Importer Price
                  </div>
                  <div className="font-display text-3xl text-[#FFD86A]">
                    {ARBITRAGE_EXAMPLES[activeArbitrage].export}
                  </div>
                  <div className="text-[11px] text-[#F2A62B] font-semibold mt-1">
                    {ARBITRAGE_EXAMPLES[activeArbitrage].multiplier} in international markets
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <span className="text-xs text-white/70 text-center sm:text-left">
                  Global markets are waiting for quality Indian products.
                </span>
                <button
                  onClick={onOpenCourseModal}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#F2A62B] to-[#FFC83D] text-[#111111] hover:from-[#FFC83D] hover:to-[#FFD86A] transition-all flex items-center gap-2 group cursor-pointer shadow-lg shadow-[#F2A62B]/20"
                >
                  <span>Explore the Opportunity</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
