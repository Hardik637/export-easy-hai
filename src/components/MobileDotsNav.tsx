"use client";

import React, { useState, useEffect, useRef } from "react";

const MOBILE_SECTIONS = [
  { id: "hero", stepNumber: "01", label: "STUCK" },
  { id: "reality", stepNumber: "02", label: "REALITY" },
  { id: "opportunity", stepNumber: "03", label: "OPPORTUNITY" },
  { id: "how-it-works", stepNumber: "04", label: "ROADMAP" },
  { id: "products", stepNumber: "05", label: "PRODUCTS" },
  { id: "courses", stepNumber: "06", label: "COURSES" },
  { id: "success-stories", stepNumber: "07", label: "STORIES" },
  { id: "final-cta", stepNumber: "08", label: "YOUR CHAPTER" },
];

export default function MobileDotsNav() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isLightSection, setIsLightSection] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position to adapt dot tone and track active section seamlessly
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const totalHeight = document.documentElement.scrollHeight;
          const docHeight = totalHeight - window.innerHeight;
          const progress = docHeight > 0 ? scrollY / docHeight : 0;
          setIsLightSection(progress > 0.58 && progress < 0.92);

          const isNearBottom = scrollY + window.innerHeight >= totalHeight - 80;

          let navIndex = 0;
          if (isNearBottom) {
            navIndex = MOBILE_SECTIONS.length - 1;
          } else if (scrollY > 60) {
            const checkpoint = scrollY + Math.min(window.innerHeight * 0.35, 260);
            for (let i = MOBILE_SECTIONS.length - 1; i >= 0; i--) {
              const el = document.getElementById(MOBILE_SECTIONS[i].id);
              if (el) {
                const top = el.getBoundingClientRect().top + scrollY;
                if (checkpoint >= top) {
                  navIndex = i;
                  break;
                }
              }
            }
          }

          setActiveNavIndex(navIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleDotClick = (id: string) => {
    // 1. Scroll smoothly to target section with sticky navbar clearance
    const el = document.getElementById(id);
    if (el) {
      const navbarOffset = 70;
      const targetY = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: "smooth",
      });
    }

    // 2. Expand name badge for 2 seconds
    setExpandedId(id);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setExpandedId(null);
    }, 2000);
  };

  return (
    <nav
      aria-label="Mobile section navigation"
      className="fixed right-1 sm:right-2 top-1/2 -translate-y-1/2 z-50 lg:hidden flex flex-col items-center gap-2 select-none pointer-events-auto"
    >
      {MOBILE_SECTIONS.map((section, idx) => {
        const isExpanded = expandedId === section.id;
        const isActive = activeNavIndex === idx;

        return (
          <div key={section.id} className="relative flex items-center justify-center">
            {/* Expanded Label Badge (slides out to the left for 2 seconds) */}
            <div
              className={`absolute right-full mr-2 pointer-events-none transition-all duration-300 transform origin-right ${
                isExpanded
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-90 translate-x-2 pointer-events-none"
              }`}
            >
              <div className="px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase shadow-xl border border-white/20 whitespace-nowrap flex items-center gap-1.5">
                <span className="text-[9px] text-[#E50920] font-mono font-bold">{section.stepNumber}</span>
                <span>{section.label}</span>
              </div>
            </div>

            {/* Clickable Dot Hit Area (Generous touch target, subtle small dot) */}
            <button
              onClick={() => handleDotClick(section.id)}
              aria-label={`Navigate to ${section.label}`}
              className="w-6 h-6 flex items-center justify-center cursor-pointer active:scale-75 transition-transform"
            >
              <div
                className={`rounded-full transition-all duration-200 ${
                  isActive ? "w-2.5 h-2.5 scale-110" : "w-1.5 h-1.5 scale-100"
                } ${
                  isActive
                    ? "bg-[#E50920] shadow-[0_0_8px_rgba(229,9,32,0.9)]"
                    : isLightSection
                    ? "bg-black/50 hover:bg-black/75 shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
                    : "bg-white/50 hover:bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
                }`}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
}
