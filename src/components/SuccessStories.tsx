"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Star, Quote, ArrowRight, CheckCircle2, Globe, TrendingUp } from "lucide-react";
import { SUCCESS_STORIES, TestimonialItem } from "@/data/siteData";

interface SuccessStoriesProps {
  onPlayVideo?: (item: TestimonialItem) => void;
}

export default function SuccessStories({ onPlayVideo }: SuccessStoriesProps) {
  const [activeStory, setActiveStory] = useState<TestimonialItem | null>(null);

  const handlePlay = (item: TestimonialItem) => {
    setActiveStory(item);
    if (onPlayVideo) onPlayVideo(item);
  };

  return (
    <section
      id="success-stories"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D45A20]/20 border border-[#D45A20]/40 text-[#F2A62B] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            SUCCESS STORIES
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-4">
            From Learners <br />
            to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D45A20] via-[#F2A62B] to-[#FFD86A]">
              Exporters.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#F5F0E8]/85 font-normal">
            Real people. Real businesses. Real export journeys. See how everyday Indian professionals quit the corporate treadmill to build global trade enterprises.
          </p>
        </div>

        {/* Stories Grid: 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUCCESS_STORIES.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl overflow-hidden bg-black/45 backdrop-blur-md border border-white/15 hover:border-[#F2A62B]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* Photo & Video Play Trigger */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Play Button Trigger */}
                <button
                  onClick={() => handlePlay(item)}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#E50920]/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#FF172F] transition-all cursor-pointer"
                  aria-label={`Play story of ${item.name}`}
                >
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </button>

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-mono text-white/90">
                  {item.videoDuration}
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl text-white uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <div className="text-[11px] font-mono text-[#FFD86A] bg-[#D45A20]/20 px-2 py-0.5 rounded-md">
                      {item.turnover}
                    </div>
                  </div>

                  <div className="text-xs text-[#F2A62B] font-medium mb-3">
                    {item.business}
                  </div>

                  <p className="text-xs text-[#F5F0E8]/75 leading-relaxed mb-4 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#FFD86A] font-semibold mb-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.result}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-white/50">
                    <Globe className="w-3 h-3" />
                    <span>{item.countries}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-3xl bg-[#120607] border border-[#F2A62B]/40 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono text-[#F2A62B] uppercase">
                    Verified Exporter Case Study
                  </span>
                  <h3 className="font-display text-3xl text-white uppercase mt-1">
                    {activeStory.name} • {activeStory.business}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveStory(null)}
                  className="p-2 rounded-full bg-white/10 text-white/70 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Simulated Video Player with poster & playback UI */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-black flex items-center justify-center">
                <Image
                  src={activeStory.image}
                  alt={activeStory.name}
                  fill
                  className="object-cover opacity-60"
                />
                <div className="relative z-10 text-center p-6 bg-black/60 rounded-2xl backdrop-blur-md border border-white/15 max-w-md">
                  <div className="w-14 h-14 rounded-full bg-[#E50920] mx-auto flex items-center justify-center text-white mb-3 shadow-lg">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <div className="font-display text-xl text-white uppercase">
                    &ldquo;{activeStory.result}&rdquo;
                  </div>
                  <div className="text-xs text-[#FFD86A] mt-1 font-mono">
                    Total Export Volume: {activeStory.turnover} to {activeStory.countries}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-[#F5F0E8]/90 mb-6">
                <p className="mb-2"><strong>Case Study Background:</strong> {activeStory.story}</p>
                <p className="italic text-[#FFD86A]">&ldquo;{activeStory.quote}&rdquo;</p>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
