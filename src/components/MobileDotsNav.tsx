"use client";

import React, { useState, useEffect, useRef } from "react";

const MOBILE_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "reality", label: "Reality" },
  { id: "opportunity", label: "Opportunity" },
  { id: "how-it-works", label: "How It Works" },
  { id: "products", label: "Products" },
  { id: "courses", label: "Courses" },
  { id: "success-stories", label: "Success Stories" },
  { id: "faq", label: "FAQ" },
];

export default function MobileDotsNav() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLightSection, setIsLightSection] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll position to adapt dot tone between light/dark backgrounds
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setIsLightSection(progress > 0.58 && progress < 0.92);
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
    // 1. Scroll smoothly to target section
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
                <span className="text-[9px] opacity-75 font-mono">{idx + 1}.</span>
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
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  isLightSection
                    ? "bg-black/40 hover:bg-black/70 shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
                    : "bg-white/45 hover:bg-white/80 shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                }`}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
}
