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
      </div>

      {/* Slim progress bar along top */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 transition-all duration-100 ease-out pointer-events-none"
        style={{
          width: `${scrollProgress * 100}%`,
          background: "linear-gradient(90deg, #E50920 0%, #D45A20 40%, #F2A62B 70%, #FFD86A 100%)",
        }}
      />
    </>
  );
}
