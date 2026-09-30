"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Color stops aligned with Hero cinematic transformation into daylight editorial site
const COLOR_STOPS = [
  { progress: 0.0, color: [5, 5, 5] },        // #050505 (Hero night)
  { progress: 0.06, color: [16, 13, 20] },    // #100D14 (Pre-dawn)
  { progress: 0.12, color: [43, 28, 30] },    // #2B1C1E (First light)
  { progress: 0.18, color: [66, 40, 24] },    // #422818 (Golden sunrise)
  { progress: 0.24, color: [250, 246, 238] }, // #FAF6EE (Daylight arrival - Reality)
  { progress: 0.40, color: [255, 248, 235] }, // #FFF8EB (Opportunity & How It Works)
  { progress: 0.60, color: [250, 246, 238] }, // #FAF6EE (Products & Mentor)
  { progress: 0.80, color: [255, 241, 210] }, // #FFF1D2 (Courses & Webinar)
  { progress: 0.92, color: [244, 248, 250] }, // #F4F8FA (Stories & FAQ)
  { progress: 1.0, color: [220, 235, 240] },  // #DCEBF0 (Final CTA ocean horizon)
];

function interpolateColor(p: number) {
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

export default function CinematicCanvas() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const current = docHeight > 0 ? window.scrollY / docHeight : 0;
          setProgress(Math.min(Math.max(current, 0), 1));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Compute smooth, overlapping bell-curve opacities for the visual layers
  const opNight = Math.max(0, 1 - progress * 4.0);
  const opPredawn = Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (progress - 0.10) / 0.28))));
  const opOpportunity = Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (progress - 0.28) / 0.30))));
  const opSunrise = Math.max(0, Math.sin(Math.PI * Math.min(1, Math.max(0, (progress - 0.48) / 0.34))));
  const opDaylight = Math.max(0, (progress - 0.78) / 0.20);

  const bgColor = interpolateColor(progress);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-40 overflow-hidden transform-gpu will-change-[background-color]"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.15s ease-out",
        height: "100dvh",
        width: "100vw",
      }}
      aria-hidden="true"
    >
      {/* Fine Film Grain Texture Overlay */}
      <div className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay" />

      {/* Top slim progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 transition-all duration-75 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, #E50920 0%, #D45A20 35%, #F2A62B 65%, #FFD86A 100%)",
        }}
      />
    </div>
  );
}
