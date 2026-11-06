"use client";

import React, { useState, useEffect, useCallback } from "react";
import { UserCheck, ChevronLeft, ChevronRight } from "lucide-react";

interface AudienceItem {
  role: string;
  tag: string;
  desc: string;
}

interface AudienceCarouselProps {
  audiences: AudienceItem[];
}

export function AudienceCarousel({ audiences }: AudienceCarouselProps) {
  const [audienceIndex, setAudienceIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-advance every 4 seconds in isolation
  useEffect(() => {
    const timer = setInterval(() => {
      setAudienceIndex((prev) => (prev + 1) % audiences.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [audiences.length]);

  const handleNextAudience = useCallback(() => {
    setAudienceIndex((prev) => (prev + 1) % audiences.length);
  }, [audiences.length]);

  const handlePrevAudience = useCallback(() => {
    setAudienceIndex((prev) => (prev - 1 + audiences.length) % audiences.length);
  }, [audiences.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNextAudience();
    } else if (diff < -45) {
      handlePrevAudience();
    }
    setTouchStart(null);
  };

  const currentAudience = audiences[audienceIndex];

  return (
    <div
      className="sm:hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="rounded-2xl bg-[#0D0B0F] border border-[#E50920]/40 p-5 relative overflow-hidden shadow-xl min-h-[190px] flex flex-col justify-between">
        <div>
          {/* Card Header */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50920] bg-[#E50920]/10 px-2.5 py-1 rounded border border-[#E50920]/30 font-semibold">
              {currentAudience.tag}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono text-white/40">
                0{audienceIndex + 1} / 0{audiences.length}
              </span>
              <UserCheck className="w-4 h-4 text-[#E50920]" />
            </div>
          </div>

          {/* Card Content with animation key */}
          <div key={audienceIndex} className="animate-in fade-in duration-300">
            <h4 className="text-base text-white font-semibold mb-1.5 leading-snug">
              {currentAudience.role}
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              {currentAudience.desc}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Navigation Controls & Bottom-Right Minimalist Loading Bar */}
        <div className="pt-3.5 border-t border-white/10 flex items-center justify-between mt-3.5">
          {/* Nav Arrows & Dots */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrevAudience}
              className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous audience card"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-white/70" />
            </button>
            <button
              type="button"
              onClick={handleNextAudience}
              className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next audience card"
            >
              <ChevronRight className="w-3.5 h-3.5 text-white/70" />
            </button>
            <div className="flex items-center gap-1 ml-1">
              {audiences.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAudienceIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === audienceIndex ? "w-3 bg-[#E50920]" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Minimalistic Progress Bar at Bottom Right (hardware-accelerated scaleX) */}
          <div className="flex items-center gap-2 pl-3">
            <div className="w-14 h-1 bg-white/15 rounded-full overflow-hidden">
              <div
                key={audienceIndex}
                className="h-full w-full bg-[#E50920] rounded-full animate-progress-fill origin-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
