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
  const [activeId, setActiveId] = useState<string>("hero");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isLightSection, setIsLightSection] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Determine which section is currently active
      for (let i = MOBILE_SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(MOBILE_SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(MOBILE_SECTIONS[i].id);
          break;
        }
      }

      // Check if we are in daytime / light background area (~58% to ~90% scroll)
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

    // 2. Expand name for 2 seconds
    setExpandedId(id);
    setActiveId(id);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setExpandedId(null);
    }, 2000);
  };

  return (
    <nav
      aria-label="Mobile section navigation"
      className="fixed right-2.5 sm:right-3.5 top-1/2 -translate-y-1/2 z-50 lg:hidden flex flex-col items-center gap-1.5 py-3 px-1.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-2xl select-none"
      style={{
        backgroundColor: isLightSection ? "rgba(0, 0, 0, 0.55)" : "rgba(0, 0, 0, 0.7)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      {MOBILE_SECTIONS.map((section, idx) => {
        const isActive = activeId === section.id;
        const isExpanded = expandedId === section.id;

        return (
          <div key={section.id} className="relative flex items-center justify-center">
            {/* Expanded Label Badge (slides out to the left of the dot for 2 seconds) */}
            <div
              className={`absolute right-full mr-2.5 pointer-events-none transition-all duration-300 transform origin-right ${
                isExpanded
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-90 translate-x-3 pointer-events-none"
              }`}
            >
              <div className="px-3 py-1 rounded-full bg-[#E50920] text-white text-[11px] font-bold tracking-wider uppercase shadow-xl border border-white/20 whitespace-nowrap flex items-center gap-1.5">
                <span className="text-[9px] opacity-80 font-mono font-normal">{idx + 1}.</span>
                <span>{section.label}</span>
              </div>
            </div>

            {/* Clickable Dot Hit Area (Comfortable thumb target) */}
            <button
              onClick={() => handleDotClick(section.id)}
              aria-label={`Navigate to ${section.label}`}
              className="w-7 h-7 flex items-center justify-center cursor-pointer group active:scale-90 transition-transform"
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  isExpanded
                    ? "w-3 h-3 bg-[#FFD86A] ring-2 ring-white scale-125 shadow-lg shadow-[#FFD86A]/60"
                    : isActive
                    ? "w-2.5 h-2.5 bg-[#E50920] ring-2 ring-white/70 shadow-lg shadow-[#E50920]/80 scale-110"
                    : "w-2 h-2 bg-white/40 group-hover:bg-white group-hover:scale-125"
                }`}
              />
            </button>
          </div>
        );
      })}
    </nav>
  );
}
