"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// Strict color stops from the specification
const COLOR_STOPS = [
  { progress: 0.0, color: [5, 5, 5] },        // #050505 (Hero night)
  { progress: 0.12, color: [18, 6, 7] },      // #120607
  { progress: 0.22, color: [38, 9, 11] },     // #26090B (The Reality)
  { progress: 0.35, color: [90, 29, 18] },    // #5A1D12 (Pre-dawn to opportunity)
  { progress: 0.48, color: [168, 58, 25] },   // #A83A19
  { progress: 0.58, color: [212, 90, 32] },   // #D45A20 (Opportunity to How It Works)
  { progress: 0.68, color: [242, 166, 43] },  // #F2A62B (Golden sunrise / Products)
  { progress: 0.78, color: [255, 216, 106] }, // #FFD86A
  { progress: 0.86, color: [255, 241, 210] }, // #FFF1D2 (Mentor / Courses daylight)
  { progress: 0.94, color: [247, 243, 235] }, // #F7F3EB (FAQ)
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
      {/* Visual Layer 1: Hero Blood Moon Port */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-opacity"
        style={{ opacity: opNight }}
      >
        <Image
          src="/images/hero-blood-moon.jpg"
          alt="Night blood moon port"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60" />
      </div>

      {/* Visual Layer 2: Pre-dawn Twilight Harbor */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-opacity"
        style={{ opacity: opPredawn }}
      >
        <Image
          src="/images/reality-predawn.jpg"
          alt="Pre-dawn dock harbor"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.75] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
      </div>

      {/* Visual Layer 3: Glowing Trade Routes over Port */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-opacity"
        style={{ opacity: opOpportunity }}
      >
        <Image
          src="/images/opportunity-map.jpg"
          alt="World trade routes port"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.8] contrast-115"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/50" />
      </div>

      {/* Visual Layer 4: Golden Sunrise over Shipping Terminal */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-opacity"
        style={{ opacity: opSunrise }}
      >
        <Image
          src="/images/how-it-works-sunrise.jpg"
          alt="Golden sunrise port"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      {/* Visual Layer 5: Full Daylight Ocean Horizon & Container Ship */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out will-change-opacity"
        style={{ opacity: opDaylight }}
      >
        <Image
          src="/images/final-cta-ship.jpg"
          alt="Daylight ocean container ship"
          fill
          sizes="100vw"
          className="object-cover object-center filter brightness-100 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
      </div>

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
