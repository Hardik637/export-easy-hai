"use client";

import React, { useState, useRef, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  activeColor?: string; // Accent color for active dot & controls (e.g. #E50920, #FFD86A)
  className?: string;
  showArrows?: boolean;
  theme?: "dark" | "light";
}

export default function MobileCarousel({
  children,
  activeColor = "#E50920",
  className = "",
  showArrows = true,
  theme = "dark",
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const total = children.length;

  const minSwipeDistance = 40;

  const onTouchStart = (e: TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(Math.max(0, Math.min(idx, total - 1)));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(total - 1, prev + 1));
  };

  return (
    <div className={`w-full flex flex-col ${className}`}>
      {/* Sliding Viewport */}
      <div
        className="w-full overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, idx) => (
            <div
              key={idx}
              className="w-full shrink-0 flex justify-center px-1"
            >
              <div
                className={`w-full max-w-[340px] transition-all duration-300 ${
                  currentIndex === idx
                    ? "scale-100 opacity-100"
                    : "scale-[0.98] opacity-80"
                }`}
              >
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Navigation Bar (Dots + Prev/Next Controls) */}
      <div className="flex items-center justify-between mt-4 px-2 select-none">
        {/* Left Arrow Button */}
        {showArrows && (
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              currentIndex === 0
                ? theme === "light"
                  ? "opacity-25 pointer-events-none text-black/30"
                  : "opacity-25 pointer-events-none text-white/30"
                : theme === "light"
                ? "bg-black/5 hover:bg-black/15 active:scale-95 text-black shadow-sm border border-black/10"
                : "bg-white/10 hover:bg-white/20 active:scale-95 text-white shadow-md border border-white/10"
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 flex-1">
          {children.map((_, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-6 shadow-md"
                    : theme === "light"
                    ? "w-2 bg-black/20 hover:bg-black/40"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
                style={isActive ? { backgroundColor: activeColor } : {}}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

        {/* Right Arrow Button */}
        {showArrows && (
          <button
            onClick={nextSlide}
            disabled={currentIndex === total - 1}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              currentIndex === total - 1
                ? theme === "light"
                  ? "opacity-25 pointer-events-none text-black/30"
                  : "opacity-25 pointer-events-none text-white/30"
                : theme === "light"
                ? "bg-black/5 hover:bg-black/15 active:scale-95 text-black shadow-sm border border-black/10"
                : "bg-white/10 hover:bg-white/20 active:scale-95 text-white shadow-md border border-white/10"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Slide Counter Indicator */}
      <div
        className={`text-center mt-2 text-[10px] font-mono tracking-widest uppercase ${
          theme === "light" ? "text-black/50" : "text-white/50"
        }`}
      >
        {currentIndex + 1} of {total} • Swipe or tap to browse
      </div>
    </div>
  );
}
