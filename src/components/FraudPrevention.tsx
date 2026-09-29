"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  ArrowRight,
  Search,
  Lock,
  Cpu,
} from "lucide-react";
import { FRAUD_PILLARS } from "@/data/siteData";

export default function FraudPrevention() {
  const [activeChecklist, setActiveChecklist] = useState<number[]>([0, 1]);

  const toggleCheck = (index: number) => {
    if (activeChecklist.includes(index)) {
      setActiveChecklist(activeChecklist.filter((i) => i !== index));
    } else {
      setActiveChecklist([...activeChecklist, index]);
    }
  };

  return (
    <section
      id="fraud-prevention"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column: Copy & Core Safety Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E50920]/15 border border-[#E50920]/40 text-[#FF172F] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF172F]" />
              EXPORT SAFELY
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-6">
              Avoid Scams. <br />
              <span className="text-[#FF172F]">
                Export Smarter.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#F5F0E8]/85 leading-relaxed font-normal mb-8 max-w-xl">
              The single biggest fear holding Indian entrepreneurs back is foreign payment default or fraudulent overseas brokers. We teach you how to foolproof every shipment.
            </p>

            {/* Safety Pillars */}
            <div className="space-y-4">
              {FRAUD_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-[#E50920]/40 transition-colors flex items-start gap-4"
                >
                  <div className="p-2 rounded-xl bg-[#E50920]/15 text-[#FF172F] shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#F5F0E8]/70 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Shield Image & Interactive Scam Radar Widget */}
          <div className="lg:col-span-6 space-y-6">
            {/* Holographic Shield Container Visual */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-[#F2A62B]/30 group">
              <Image
                src="/images/fraud-shield.jpg"
                alt="Golden holographic security shield emblem standing on Indian shipping container dock at sunrise"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15">
                <div className="text-[11px] font-mono text-[#FFD86A] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#FFD86A]" />
                  <span>100% Protected Payment Protocol</span>
                </div>
                <div className="font-display text-xl text-white uppercase">
                  Zero Cargo Dispatch Without Financial Guarantee
                </div>
              </div>
            </div>

            {/* Interactive Buyer Verification Radar */}
            <div className="p-6 rounded-3xl bg-black/55 backdrop-blur-xl border border-white/15">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#F2A62B]" />
                  <span className="text-xs font-mono uppercase text-[#FFD86A] tracking-wider">
                    Interactive Fraud Red-Flag Radar
                  </span>
                </div>
                <span className="text-[10px] text-white/50">
                  {activeChecklist.length} / 4 Checks Cleared
                </span>
              </div>

              <div className="space-y-2 mb-4">
                {[
                  "Official corporate domain email (not @gmail or @yahoo)",
                  "Valid company registration with overseas ministry or chamber",
                  "Verified D&B / credit rating with zero bankruptcy flags",
                  "Letter of Credit (LC) authenticated by tier-1 Indian bank",
                ].map((item, idx) => {
                  const isChecked = activeChecklist.includes(idx);
                  return (
                    <button
                      key={item}
                      onClick={() => toggleCheck(idx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? "bg-[#D45A20]/20 border-[#F2A62B]/50 text-white"
                          : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                      }`}
                    >
                      <span>{item}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center ${
                          isChecked
                            ? "bg-[#F2A62B] text-black font-bold"
                            : "border border-white/30"
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-4 h-4 fill-current" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-xs text-white/70">
                  {activeChecklist.length === 4
                    ? "Safe to proceed with formal export contract."
                    : "Caution: Do not release goods until all 4 checks pass."}
                </span>
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                    activeChecklist.length === 4
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-[#E50920]/20 text-[#FF172F] border border-[#E50920]/30"
                  }`}
                >
                  {activeChecklist.length === 4 ? "VERIFIED" : "HIGH RISK"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
