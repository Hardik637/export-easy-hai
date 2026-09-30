"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { JOURNEY_STAGES } from "@/data/journeyData";

// Color stops aligned with page scroll progression (0.00 to 1.00)
const COLOR_STOPS = [
  { progress: 0.0, color: [5, 5, 5] },        // #050505 (Hero night)
  { progress: 0.20, color: [16, 20, 36] },    // Pre-dawn twilight
  { progress: 0.45, color: [50, 38, 42] },    // First light
  { progress: 0.70, color: [80, 50, 32] },    // Golden sunrise
  { progress: 0.90, color: [175, 195, 218] }, // High daylight
  { progress: 1.0, color: [220, 235, 240] },  // Ocean horizon
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

// Section target map for clicking indicator stages
const STAGE_SECTIONS = ["hero", "reality", "opportunity", "courses", "final-cta"];

export default function CinematicCanvas() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bloomRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Jump smoothly to the matching section on indicator click
  const scrollToStage = useCallback((index: number) => {
    const targetId = STAGE_SECTIONS[index] || "hero";
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // High-performance scroll animation loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    let lastActiveStage = -1;

    // Smoothstep helper for buttery transitions
    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const p = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;
        setProgress(p);

        // Update solid background color interpolation
        if (bgRef.current) {
          bgRef.current.style.backgroundColor = interpolateColor(p);
        }

        // Active stage calculation for indicator
        let stageIndex = 0;
        if (p >= 0.80) stageIndex = 4;
        else if (p >= 0.58) stageIndex = 3;
        else if (p >= 0.36) stageIndex = 2;
        else if (p >= 0.16) stageIndex = 1;
        else stageIndex = 0;

        if (stageIndex !== lastActiveStage) {
          lastActiveStage = stageIndex;
          setActiveStage(stageIndex);
        }

        // Smooth continuous overlapping transition curves across page scroll:
        // Transition 0 -> 1: p 0.08 to 0.28 (Pre-dawn enters smoothly during Reality)
        // Transition 1 -> 2: p 0.28 to 0.50 (First light expands during Opportunity & How It Works)
        // Transition 2 -> 3: p 0.48 to 0.72 (Sunrise breaks out during Products, Mentor, & Courses)
        // Transition 3 -> 4: p 0.70 to 0.92 (Full daylight takes over during Stories, FAQ, & Final CTA)
        const t1 = smoothstep(0.08, 0.28, p);
        const t2 = smoothstep(0.28, 0.50, p);
        const t3 = smoothstep(0.48, 0.72, p);
        const t4 = smoothstep(0.70, 0.92, p);

        // Layer 0: Night (base layer, subtle forward movement)
        const l0 = layerRefs.current[0];
        if (l0) {
          if (!reducedMotion) {
            const s = 1.0 + p * 0.02;
            l0.style.transform = `scale(${s})`;
          }
        }

        // Layer 1: Pre-Dawn (smooth dawn wipe with soft 40% feather)
        const l1 = layerRefs.current[1];
        if (l1) {
          if (reducedMotion) {
            l1.style.opacity = `${t1}`;
            l1.style.maskImage = "none";
            l1.style.webkitMaskImage = "none";
          } else {
            l1.style.opacity = `${t1}`;
            const wipe = t1 * 120 - 10;
            const maskVal = `linear-gradient(135deg, black 0%, black ${Math.max(0, wipe)}%, transparent ${Math.min(100, wipe + 40)}%)`;
            l1.style.maskImage = maskVal;
            l1.style.webkitMaskImage = maskVal;
            const s = 1.015 - (1 - t1) * 0.015;
            l1.style.transform = `scale(${s})`;
          }
        }

        // Layer 2: First Light (wide horizon radial expansion with soft feather)
        const l2 = layerRefs.current[2];
        if (l2) {
          if (reducedMotion) {
            l2.style.opacity = `${t2}`;
            l2.style.maskImage = "none";
            l2.style.webkitMaskImage = "none";
          } else {
            l2.style.opacity = `${t2}`;
            const radius = t2 * 115;
            const maskVal = `radial-gradient(ellipse 140% 100% at 35% 65%, black 0%, black ${Math.max(0, radius)}%, transparent ${Math.min(100, radius + 45)}%)`;
            l2.style.maskImage = maskVal;
            l2.style.webkitMaskImage = maskVal;
            const s = 1.015 - (1 - t2) * 0.015;
            l2.style.transform = `scale(${s})`;
          }
        }

        // Layer 3: Sunrise (radiant sun wave originating at x:70% y:50% where sun rises)
        const l3 = layerRefs.current[3];
        if (l3) {
          if (reducedMotion) {
            l3.style.opacity = `${t3}`;
            l3.style.maskImage = "none";
            l3.style.webkitMaskImage = "none";
          } else {
            l3.style.opacity = `${t3}`;
            const radius = t3 * 120;
            const maskVal = `radial-gradient(circle at 72% 50%, black 0%, black ${Math.max(0, radius)}%, transparent ${Math.min(100, radius + 45)}%)`;
            l3.style.maskImage = maskVal;
            l3.style.webkitMaskImage = maskVal;
            const s = 1.015 - (1 - t3) * 0.015;
            l3.style.transform = `scale(${s})`;
          }
        }

        // Sunrise golden atmospheric bloom
        if (bloomRef.current && !reducedMotion) {
          const bloomIntensity = Math.sin(t3 * Math.PI) * 0.35;
          bloomRef.current.style.opacity = `${bloomIntensity}`;
        }

        // Layer 4: Daylight (wide morning light sweep)
        const l4 = layerRefs.current[4];
        if (l4) {
          if (reducedMotion) {
            l4.style.opacity = `${t4}`;
            l4.style.maskImage = "none";
            l4.style.webkitMaskImage = "none";
          } else {
            l4.style.opacity = `${t4}`;
            const wipe = t4 * 120 - 10;
            const maskVal = `linear-gradient(205deg, black 0%, black ${Math.max(0, wipe)}%, transparent ${Math.min(100, wipe + 35)}%)`;
            l4.style.maskImage = maskVal;
            l4.style.webkitMaskImage = maskVal;
            const s = 1.0 + Math.max(0, (p - 0.85) / 0.15) * 0.02;
            l4.style.transform = `scale(${s})`;
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <>
      {/* Fixed Fullscreen Visual Journey Canvas - Covers 100% of Viewport on PC & Mobile */}
      <div
        ref={bgRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu will-change-[background-color]"
        style={{
          backgroundColor: "#050505",
          transition: "background-color 0.2s ease-out",
          height: "100dvh",
          width: "100vw",
        }}
        aria-hidden="true"
      >
        {/* 5 Stacked Photographic Stages - Full 100vw x 100vh Bleed */}
        {JOURNEY_STAGES.map((stage, idx) => (
          <div
            key={stage.id}
            ref={(el) => {
              layerRefs.current[idx] = el;
            }}
            className="absolute inset-0 w-full h-full overflow-hidden transform-gpu will-change-transform will-change-[mask-image]"
            style={{
              zIndex: idx + 1,
              opacity: idx === 0 ? 1 : 0,
            }}
          >
            <div className="relative w-full h-full">
              <picture className="w-full h-full block">
                {/* Mobile portrait image (screens < 768px) */}
                <source
                  media="(max-width: 767px)"
                  srcSet={stage.mobileImage}
                  type="image/webp"
                />
                {/* Desktop widescreen image (screens >= 768px) */}
                <source
                  media="(min-width: 768px)"
                  srcSet={stage.desktopImage}
                  type="image/webp"
                />
                <img
                  src={stage.desktopImage}
                  alt={`${stage.label} - ${stage.time}`}
                  className="w-full h-full object-cover object-[70%_center] md:object-center transform-gpu will-change-transform"
                  loading={idx <= 1 ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>

              {/* Cinematic Vignette for crystal-clear text readability across day & night */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    idx === 0
                      ? "linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.15) 30%, rgba(5,5,5,0.2) 70%, rgba(5,5,5,0.75) 100%)"
                      : idx === 1
                      ? "linear-gradient(180deg, rgba(16,13,20,0.5) 0%, rgba(16,13,20,0.1) 30%, rgba(16,13,20,0.2) 70%, rgba(16,13,20,0.7) 100%)"
                      : idx === 2
                      ? "linear-gradient(180deg, rgba(43,28,30,0.45) 0%, rgba(43,28,30,0.1) 30%, rgba(43,28,30,0.15) 70%, rgba(43,28,30,0.6) 100%)"
                      : idx === 3
                      ? "linear-gradient(180deg, rgba(66,40,24,0.3) 0%, transparent 35%, transparent 70%, rgba(66,40,24,0.5) 100%)"
                      : "linear-gradient(180deg, rgba(220,235,240,0.25) 0%, transparent 35%, transparent 70%, rgba(220,235,240,0.4) 100%)",
                }}
              />
            </div>
          </div>
        ))}

        {/* Golden Sunrise Atmospheric Light Bloom Layer */}
        <div
          ref={bloomRef}
          className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-200 transform-gpu z-10"
          style={{
            background:
              "radial-gradient(circle at 72% 50%, rgba(242, 166, 43, 0.45) 0%, rgba(229, 9, 32, 0.2) 35%, transparent 70%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Fine Film Grain Texture Overlay */}
        <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay z-20 pointer-events-none" />
      </div>

      {/* Top Slim Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 pointer-events-none transition-all duration-75 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: "linear-gradient(90deg, #E50920 0%, #D45A20 35%, #F2A62B 65%, #FFD86A 100%)",
        }}
      />

      {/* Desktop Vertical Story Indicator (Fixed Right) */}
      <div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 p-2.5 rounded-2xl bg-black/55 backdrop-blur-xl border border-white/15 shadow-2xl transition-all duration-300 pointer-events-auto"
        aria-label="Story journey navigation"
      >
        {JOURNEY_STAGES.map((stg, i) => {
          const isActive = activeStage === i;
          const isPast = activeStage > i;
          return (
            <button
              key={stg.id}
              onClick={() => scrollToStage(i)}
              className="group flex items-center justify-between gap-3 text-left py-1.5 px-2 rounded-xl transition-all hover:bg-white/10 cursor-pointer min-h-[36px]"
              aria-label={`Jump to stage ${stg.stepNumber}: ${stg.label} (${stg.time})`}
            >
              <div
                className={`flex flex-col transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-40 group-hover:opacity-75 translate-x-0.5"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[9px] font-mono tracking-widest transition-colors ${
                      isActive ? "text-[#E50920] font-bold" : "text-white/60"
                    }`}
                  >
                    {stg.stepNumber}
                  </span>
                  <span
                    className={`text-xs font-bold tracking-wider uppercase transition-colors ${
                      isActive
                        ? "text-white drop-shadow-[0_2px_8px_rgba(229,9,32,0.8)]"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {stg.label}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-medium tracking-wide uppercase transition-colors ${
                    isActive ? "text-[#FFD86A]" : "text-white/40"
                  }`}
                >
                  {stg.time}
                </span>
              </div>

              {/* Status Pip */}
              <div className="relative flex items-center justify-center w-4 h-4 ml-1">
                <span
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-[#E50920] scale-125 shadow-[0_0_12px_#E50920]"
                      : isPast
                      ? "bg-white/70"
                      : "bg-white/25 group-hover:bg-white/50"
                  }`}
                />
                {isActive && (
                  <span className="absolute w-3.5 h-3.5 rounded-full border border-[#E50920] animate-ping opacity-60" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Horizontal Pill Story Indicator (Top Right) */}
      <div
        onClick={() => scrollToStage(activeStage)}
        className="fixed top-20 right-4 z-40 md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-lg transition-all duration-300 pointer-events-auto cursor-pointer active:scale-95"
      >
        <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
        <span className="text-[10px] font-mono font-bold text-white/95 uppercase tracking-widest">
          {JOURNEY_STAGES[activeStage]?.stepNumber} • {JOURNEY_STAGES[activeStage]?.label}
        </span>
        <span className="text-[9px] font-mono text-[#FFD86A] uppercase">
          ({JOURNEY_STAGES[activeStage]?.time})
        </span>
      </div>
    </>
  );
}
