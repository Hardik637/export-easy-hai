"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, TrendingUp, Globe } from "lucide-react";
import { SUCCESS_STORIES, TestimonialItem } from "@/data/siteData";

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState<TestimonialItem | null>(null);

  return (
    <section
      id="success-stories"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#FAF6EE] text-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-4 text-[#E50920] text-xs font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#E50920]" />
            SUCCESS STORIES
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-[#111111] mb-4">
            From Learners <br />
            to{" "}
            <span className="text-[#E50920]">
              Exporters.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#444444] font-normal">
            Real people. Real businesses. Real results.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUCCESS_STORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveStory(item)}
              className="rounded-3xl overflow-hidden bg-white border border-[#EAD5AF] hover:border-[#E50920] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group cursor-pointer"
            >
              {/* Image & Play Button */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-white/90 text-[#111111] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E50920] group-hover:text-white transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>

                <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded-md bg-black/60 text-[10px] text-white font-mono">
                  {item.turnover}
                </div>
              </div>

              {/* Story Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-[#111111] uppercase tracking-wide group-hover:text-[#E50920] transition-colors leading-tight mb-1">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#D45A20] mb-3">
                    {item.business}
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed line-clamp-3 italic mb-3">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0E6D2] text-[11px] text-[#222222] font-medium flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Player */}
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl text-[#111111] border border-[#EAD5AF]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono uppercase text-[#D45A20]">
                    Verified Exporter Story
                  </span>
                  <h3 className="font-display text-3xl uppercase mt-1 leading-tight">
                    {activeStory.name} • {activeStory.business}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveStory(null)}
                  className="p-2 rounded-full bg-black/5 text-[#555555] hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-black">
                <Image
                  src={activeStory.image}
                  alt={activeStory.name}
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#E50920] text-white flex items-center justify-center shadow-xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#EAD5AF] mb-5 text-xs text-[#333333] space-y-2">
                <p><strong>Background:</strong> {activeStory.story}</p>
                <p className="italic text-[#111111] font-medium">&ldquo;{activeStory.quote}&rdquo;</p>
                <div className="pt-2 border-t border-[#EAD5AF] flex justify-between font-mono text-[11px] text-[#D45A20]">
                  <span>Export Turnover: {activeStory.turnover}</span>
                  <span>Destinations: {activeStory.countries}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveStory(null)}
                className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-black text-white hover:bg-[#E50920] transition-all cursor-pointer"
              >
                Close Case Study
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
