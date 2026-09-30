"use client";

import React, { useState, useRef, useEffect, useCallback, TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MobileCarouselProps {
  children: React.ReactNode[];
  activeColor?: string; // Accent color for active dot & controls (e.g. #E50920, #FFD86A)
  className?: string;
  showArrows?: boolean;
  theme?: "dark" | "light";
  autoplay?: boolean;
  autoplayInterval?: number; // In milliseconds, defaults to 3500ms
}

export default function MobileCarousel({
  children,
  activeColor = "#E50920",
  className = "",
  showArrows = true,
  theme = "dark",
  autoplay = true,
  autoplayInterval = 3500,
}: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const total = children.length;

  const minSwipeDistance = 40;

  const nextSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(Math.max(0, Math.min(idx, total - 1)));
  };

  // Helper to pause autoplay temporarily during user action and resume after idle delay
  const pauseAndResumeLater = useCallback((delayMs = 3000) => {
    setIsInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, delayMs);
  }, []);

  // Autoplay Timer
  useEffect(() => {
    if (!autoplay || isInteracting || total <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [autoplay, isInteracting, autoplayInterval, total, nextSlide]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setIsInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        nextSlide();
      } else if (isRightSwipe) {
        prevSlide();
      }
    }
    // Resume autoplay 2.5s after touch release
    pauseAndResumeLater(2500);
  };

  return (
    <div
      className={`w-full flex flex-col ${className}`}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => pauseAndResumeLater(1500)}
    >
      {/* Sliding Viewport */}
      <div
        className="w-full overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out will-change-transform"
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
            onClick={() => {
              prevSlide();
              pauseAndResumeLater(3500);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
              theme === "light"
                ? "bg-black/5 hover:bg-black/15 text-black shadow-sm border border-black/10"
                : "bg-white/10 hover:bg-white/20 text-white shadow-md border border-white/10"
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
                onClick={() => {
                  goToSlide(idx);
                  pauseAndResumeLater(3500);
                }}
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
            onClick={() => {
              nextSlide();
              pauseAndResumeLater(3500);
            }}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
              theme === "light"
                ? "bg-black/5 hover:bg-black/15 text-black shadow-sm border border-black/10"
                : "bg-white/10 hover:bg-white/20 text-white shadow-md border border-white/10"
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
