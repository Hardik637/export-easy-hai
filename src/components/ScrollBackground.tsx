"use client";

import React, { useEffect, useState } from "react";

// Color stops defined in specification
const COLOR_STOPS = [
  { progress: 0.0, color: [5, 5, 5] },        // #050505
  { progress: 0.1, color: [18, 6, 7] },       // #120607
  { progress: 0.2, color: [38, 9, 11] },      // #26090B
  { progress: 0.3, color: [90, 29, 18] },     // #5A1D12
  { progress: 0.4, color: [168, 58, 25] },    // #A83A19
  { progress: 0.5, color: [212, 90, 32] },    // #D45A20
  { progress: 0.6, color: [242, 166, 43] },   // #F2A62B
  { progress: 0.7, color: [255, 216, 106] },  // #FFD86A
  { progress: 0.8, color: [255, 241, 210] },  // #FFF1D2
  { progress: 0.9, color: [234, 240, 238] },  // #EAF0EE
  { progress: 1.0, color: [220, 235, 240] },  // #DCEBF0
];

function interpolateRgb(p: number) {
  const clamped = Math.max(0, Math.min(1, p));

  let start = COLOR_STOPS[0];
  let end = COLOR_STOPS[COLOR_STOPS.length - 1];

  for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
    if (clamped >= COLOR_STOPS[i].progress && clamped <= COLOR_STOPS[i + 1].progress) {
      start = COLOR_STOPS[i];
      end = COLOR_STOPS[i + 1];
      break;
    }
  }

  const range = end.progress - start.progress;
  const t = range === 0 ? 0 : (clamped - start.progress) / range;

  const r = Math.round(start.color[0] + (end.color[0] - start.color[0]) * t);
  const g = Math.round(start.color[1] + (end.color[1] - start.color[1]) * t);
  const b = Math.round(start.color[2] + (end.color[2] - start.color[2]) * t);

  return `rgb(${r}, ${g}, ${b})`;
}

export default function ScrollBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bgColor, setBgColor] = useState("rgb(5, 5, 5)");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const current = docHeight > 0 ? window.scrollY / docHeight : 0;
          const progress = Math.min(Math.max(current, 0), 1);
          setScrollProgress(progress);
          setBgColor(interpolateRgb(progress));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute opacities for visual layers
  const nightOpacity = Math.max(0, 1 - scrollProgress * 2.8);
  const predawnOpacity = Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (scrollProgress - 0.15) / 0.4))));
  const sunriseOpacity = Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (scrollProgress - 0.45) / 0.45))));
  const daylightOpacity = Math.max(0, (scrollProgress - 0.7) / 0.3);

  // Phase labels
  let phaseLabel = "NIGHT — STUCK IN 9 TO 5";
  if (scrollProgress >= 0.25 && scrollProgress < 0.5) {
    phaseLabel = "PRE-DAWN — UNCERTAINTY TO OPPORTUNITY";
  } else if (scrollProgress >= 0.5 && scrollProgress < 0.78) {
    phaseLabel = "SUNRISE — PRACTICAL LEARNING & ACTION";
  } else if (scrollProgress >= 0.78) {
    phaseLabel = "DAYLIGHT — INDIA TO THE WORLD";
  }

  const isLightMode = scrollProgress > 0.65;

  return (
    <>
      {/* Background color container fixed behind all content */}
      <div
        className="fixed inset-0 pointer-events-none -z-50 transition-colors duration-300"
        style={{ backgroundColor: bgColor }}
        aria-hidden="true"
      >
        {/* Subtle noise grain */}
        <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />

        {/* Night crimson glow atmospheric layer */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#E50920]/15 via-[#26090B]/30 to-black/60 transition-opacity duration-300 pointer-events-none"
          style={{ opacity: nightOpacity }}
        />

        {/* Pre-dawn amber atmospheric warmth layer */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#A83A19]/20 via-[#D45A20]/15 to-transparent transition-opacity duration-300 pointer-events-none"
          style={{ opacity: predawnOpacity }}
        />

        {/* Sunrise golden radiant glow layer */}
        <div
          className="absolute inset-0 bg-radial from-[#FFD86A]/25 via-[#F2A62B]/15 to-transparent transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: sunriseOpacity,
            backgroundPosition: "50% 80%",
            backgroundSize: "140% 100%",
          }}
        />

        {/* Daylight sky glow layer */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#DCEBF0]/30 via-[#FFF1D2]/20 to-transparent transition-opacity duration-300 pointer-events-none"
          style={{ opacity: daylightOpacity }}
        />
      </div>

      {/* Floating subtle journey status pill at top right (responsive) */}
      <div className="fixed top-20 right-4 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase backdrop-blur-md border transition-all duration-300 shadow-lg pointer-events-none select-none"
        style={{
          backgroundColor: isLightMode ? "rgba(255, 255, 255, 0.8)" : "rgba(10, 10, 10, 0.75)",
          color: isLightMode ? "#111111" : "#F5F0E8",
          borderColor: isLightMode ? "rgba(212, 90, 32, 0.25)" : "rgba(229, 9, 32, 0.3)",
        }}
      >
        <span
          className="w-2 h-2 rounded-full animate-ping"
          style={{ backgroundColor: isLightMode ? "#D45A20" : "#E50920" }}
        />
        <span>{phaseLabel}</span>
        <span className="opacity-60">|</span>
        <span className="font-mono">{Math.round(scrollProgress * 100)}%</span>
      </div>

      {/* Slim progress bar along top */}
      <div
        className="fixed top-0 left-0 h-[3px] z-50 transition-all duration-100 ease-out pointer-events-none"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, #E50920 0%, #D45A20 40%, #F2A62B 70%, #FFD86A 100%)",
        }}
      />
    </>
  );
}
