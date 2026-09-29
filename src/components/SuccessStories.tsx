"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, TrendingUp } from "lucide-react";
import { SUCCESS_STORIES, TestimonialItem } from "@/data/siteData";

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState<TestimonialItem | null>(null);

  return (
    <section
      id="success-stories"
      className="relative py-20 sm:py-28 overflow-hidden bg-transparent text-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3 text-[#E50920] text-[11px] font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#E50920]" />
            SUCCESS STORIES
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-[#111111] mb-2">
            From Learners <br />
            to{" "}
            <span className="text-[#E50920]">
              Exporters.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-[#555555] font-normal">
            Real people. Real businesses. Real results.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SUCCESS_STORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveStory(item)}
              className="rounded-2xl overflow-hidden bg-white/85 backdrop-blur-md border border-[#EAD5AF] hover:border-[#E50920] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#E50920] group-hover:text-white transition-all">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>

                <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded-md bg-black/60 text-[9px] text-white font-mono">
                  {item.turnover}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl text-[#111111] uppercase tracking-wide group-hover:text-[#E50920] transition-colors leading-tight mb-0.5">
                    {item.name}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#D45A20] mb-2">
                    {item.business}
                  </div>
                  <p className="text-[11px] text-[#666666] leading-relaxed line-clamp-2 italic mb-2">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F0E6D2] text-[10px] text-[#222222] font-medium flex items-center gap-1.5">
                  <TrendingUp className="w-3 h-3 text-[#E50920]" />
                  <span>{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Player */}
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl text-[#111111] border border-[#EAD5AF]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-display text-2xl uppercase leading-tight">
                    {activeStory.name}
                  </h3>
                  <span className="text-xs text-[#D45A20] font-medium">{activeStory.business}</span>
                </div>
                <button
                  onClick={() => setActiveStory(null)}
                  className="p-1.5 rounded-full bg-black/5 text-[#555555] hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-black">
                <Image
                  src={activeStory.image}
                  alt={activeStory.name}
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#E50920] text-white flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] mb-4 text-xs text-[#333333] space-y-1.5">
                <p><strong>Result:</strong> {activeStory.result}</p>
                <p className="italic text-[#111111]">&ldquo;{activeStory.quote}&rdquo;</p>
              </div>

              <button
                onClick={() => setActiveStory(null)}
                className="w-full py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-black text-white hover:bg-[#E50920] transition-all cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
