"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { JOURNEY_STAGES } from "@/data/journeyData";
import { TRUST_STATS } from "@/data/siteData";

interface HeroProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function Hero({ onOpenWebinarModal, onOpenCourseModal }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bloomRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const mobileIndicatorRef = useRef<HTMLDivElement>(null);

  const [activeStage, setActiveStage] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Jump smoothly to a specific stage on indicator click
  const scrollToStage = useCallback((index: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
    const targetProgress = index === 0 ? 0.02 : index === 1 ? 0.22 : index === 2 ? 0.46 : index === 3 ? 0.70 : 0.92;
    window.scrollTo({
      top: sectionTop + targetProgress * totalScroll,
      behavior: "smooth",
    });
  }, []);

  // High-performance scroll animation loop using requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    let lastActiveStage = -1;

    // Smoothstep helper
    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const updateJourney = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScroll, 0), 1);

      // Determine active stage for indicator (0, 1, 2, 3, 4)
      let stageIndex = 0;
      if (progress >= 0.85) stageIndex = 4;
      else if (progress >= 0.60) stageIndex = 3;
      else if (progress >= 0.35) stageIndex = 2;
      else if (progress >= 0.15) stageIndex = 1;

      if (stageIndex !== lastActiveStage) {
        lastActiveStage = stageIndex;
        setActiveStage(stageIndex);
      }

      // Transition definitions:
      // Transition 0 -> 1: progress 0.10 to 0.28 (Pre-dawn enters over night)
      // Transition 1 -> 2: progress 0.35 to 0.52 (First light enters over pre-dawn)
      // Transition 2 -> 3: progress 0.58 to 0.76 (Sunrise bursts over first light)
      // Transition 3 -> 4: progress 0.80 to 0.94 (Daylight sweeps in over sunrise)
      const t1 = smoothstep(0.10, 0.28, progress);
      const t2 = smoothstep(0.35, 0.52, progress);
      const t3 = smoothstep(0.58, 0.76, progress);
      const t4 = smoothstep(0.80, 0.94, progress);

      // Layer 0: Night (always visible as base, subtle scale)
      const l0 = layerRefs.current[0];
      if (l0) {
        if (!reducedMotion) {
          const s = 1.0 + progress * 0.015;
          l0.style.transform = `scale(${s})`;
        }
      }

      // Layer 1: Pre-Dawn (Directional dawn light wipe from horizon/left)
      const l1 = layerRefs.current[1];
      if (l1) {
        if (reducedMotion) {
          l1.style.opacity = `${t1}`;
          l1.style.maskImage = "none";
          l1.style.webkitMaskImage = "none";
        } else {
          l1.style.opacity = t1 > 0 ? "1" : "0";
          const wipe = t1 * 140 - 20;
          l1.style.maskImage = `linear-gradient(115deg, black 0%, black ${Math.max(0, wipe)}%, transparent ${Math.min(100, wipe + 25)}%)`;
          l1.style.webkitMaskImage = `linear-gradient(115deg, black 0%, black ${Math.max(0, wipe)}%, transparent ${Math.min(100, wipe + 25)}%)`;
          const s = 1.015 - (1 - t1) * 0.015;
          l1.style.transform = `scale(${s})`;
        }
      }

      // Layer 2: First Light (Horizon warm glow expansion)
      const l2 = layerRefs.current[2];
      if (l2) {
        if (reducedMotion) {
          l2.style.opacity = `${t2}`;
          l2.style.maskImage = "none";
          l2.style.webkitMaskImage = "none";
        } else {
          l2.style.opacity = t2 > 0 ? "1" : "0";
          const radius = t2 * 135 - 15;
          l2.style.maskImage = `radial-gradient(ellipse 130% 90% at 30% 65%, black 0%, black ${Math.max(0, radius)}%, transparent ${Math.min(100, radius + 25)}%)`;
          l2.style.webkitMaskImage = `radial-gradient(ellipse 130% 90% at 30% 65%, black 0%, black ${Math.max(0, radius)}%, transparent ${Math.min(100, radius + 25)}%)`;
          const s = 1.015 - (1 - t2) * 0.015;
          l2.style.transform = `scale(${s})`;
        }
      }

      // Layer 3: Sunrise (Radiant golden sun wavefront from sun coordinate x:35%, y:55%)
      const l3 = layerRefs.current[3];
      if (l3) {
        if (reducedMotion) {
          l3.style.opacity = `${t3}`;
          l3.style.maskImage = "none";
          l3.style.webkitMaskImage = "none";
        } else {
          l3.style.opacity = t3 > 0 ? "1" : "0";
          const radius = t3 * 140 - 20;
          l3.style.maskImage = `radial-gradient(circle at 35% 55%, black 0%, black ${Math.max(0, radius)}%, transparent ${Math.min(100, radius + 25)}%)`;
          l3.style.webkitMaskImage = `radial-gradient(circle at 35% 55%, black 0%, black ${Math.max(0, radius)}%, transparent ${Math.min(100, radius + 25)}%)`;
          const s = 1.015 - (1 - t3) * 0.015;
          l3.style.transform = `scale(${s})`;
        }
      }

      // Sunrise golden atmospheric bloom
      if (bloomRef.current && !reducedMotion) {
        const bloomIntensity = Math.sin(t3 * Math.PI) * 0.35;
        bloomRef.current.style.opacity = `${bloomIntensity}`;
      }

      // Layer 4: Daylight (Clean morning light sweeps across from top-right to bottom-left)
      const l4 = layerRefs.current[4];
      if (l4) {
        if (reducedMotion) {
          l4.style.opacity = `${t4}`;
          l4.style.maskImage = "none";
          l4.style.webkitMaskImage = "none";
        } else {
          l4.style.opacity = t4 > 0 ? "1" : "0";
          const wipe = t4 * 140 - 20;
          l4.style.maskImage = `linear-gradient(205deg, black 0%, black ${Math.max(0, wipe)}%, transparent ${Math.min(100, wipe + 20)}%)`;
          l4.style.webkitMaskImage = `linear-gradient(205deg, black 0%, black ${Math.max(0, wipe)}%, transparent ${Math.min(100, wipe + 20)}%)`;
          // Outward scaling at final chapter (Section 16)
          const s = 1.0 + Math.max(0, (progress - 0.88) / 0.12) * 0.025;
          l4.style.transform = `scale(${s})`;
        }
      }

      // Hero Content Evolution (Section 13)
      // Stage 1 (0.00-0.15): fully visible
      // Stage 2 (0.15-0.35): bottom dock fades out, subtitle softens
      // Stage 3 (0.35-0.55): headline transitions upward and dims
      // Stage 4 (0.55-0.75): CTAs leave visual focus
      // Stage 5 (0.75-1.00): hero copy is gone, daylight dominants
      if (headlineRef.current) {
        const textFade = 1 - smoothstep(0.25, 0.65, progress);
        const textTranslate = -smoothstep(0.20, 0.65, progress) * 50;
        headlineRef.current.style.opacity = `${textFade}`;
        headlineRef.current.style.transform = `translateY(${textTranslate}px)`;
        headlineRef.current.style.pointerEvents = textFade < 0.1 ? "none" : "auto";
      }

      if (dockRef.current) {
        const dockFade = 1 - smoothstep(0.08, 0.28, progress);
        const dockTranslate = smoothstep(0.08, 0.28, progress) * 25;
        dockRef.current.style.opacity = `${dockFade}`;
        dockRef.current.style.transform = `translateY(${dockTranslate}px)`;
        dockRef.current.style.pointerEvents = dockFade < 0.1 ? "none" : "auto";
      }

      // Story Indicator Evolution (Section 14 & 16)
      // Dissolves at the very end as daylight chapter transitions to Reality section
      if (indicatorRef.current) {
        const indFade = 1 - smoothstep(0.92, 0.99, progress);
        indicatorRef.current.style.opacity = `${indFade}`;
      }
      if (mobileIndicatorRef.current) {
        const indFade = 1 - smoothstep(0.92, 0.99, progress);
        mobileIndicatorRef.current.style.opacity = `${indFade}`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateJourney);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateJourney();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full"
      style={{ height: "450vh" }}
      aria-label="Export Easy Hai - Cinematic Scroll Journey"
    >
      {/* Preload priority stages */}
      <link rel="preload" as="image" href="/images/journey/01-night.webp" type="image/webp" />
      <link rel="preload" as="image" href="/images/journey/02-predawn.webp" type="image/webp" />

      {/* Sticky 100vh Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* ========================================================= */}
        {/* VISUAL LAYERS — 5 MATCHING STAGES OF THE EXACT SAME HARBOR */}
        {/* ========================================================= */}
        <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden bg-black select-none">
          {JOURNEY_STAGES.map((stage, idx) => (
            <div
              key={stage.id}
              ref={(el) => {
                layerRefs.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full transform-gpu will-change-transform will-change-opacity overflow-hidden flex items-center justify-center"
              style={{
                backgroundColor: stage.color.bg,
                zIndex: idx + 1,
              }}
            >
              {/* Sky ambient glow background for this time of day */}
              <div
                className="absolute inset-0 pointer-events-none opacity-90 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(180deg, ${stage.color.sky} 0%, ${stage.color.bg} 45%, ${stage.color.bg} 75%, ${stage.color.bg} 100%)`,
                }}
              />

              {/* The Master Panoramic Image Window */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={stage.image}
                  alt={`${stage.label} - ${stage.time}`}
                  fill
                  priority={idx <= 1}
                  quality={95}
                  sizes="100vw"
                  className="object-cover object-[72%_center] sm:object-[65%_center] md:object-[60%_center] lg:object-[55%_center] transform-gpu will-change-transform"
                />

                {/* Soft natural edge feathering: top blends into sky, bottom into dock */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      idx === 0
                        ? "linear-gradient(180deg, rgba(5,5,5,0.7) 0%, transparent 22%, transparent 75%, rgba(5,5,5,0.85) 100%)"
                        : idx === 1
                        ? "linear-gradient(180deg, rgba(16,13,20,0.6) 0%, transparent 22%, transparent 75%, rgba(16,13,20,0.8) 100%)"
                        : idx === 2
                        ? "linear-gradient(180deg, rgba(43,28,30,0.5) 0%, transparent 25%, transparent 75%, rgba(43,28,30,0.7) 100%)"
                        : idx === 3
                        ? "linear-gradient(180deg, rgba(66,40,24,0.4) 0%, transparent 25%, transparent 75%, rgba(66,40,24,0.7) 100%)"
                        : "linear-gradient(180deg, rgba(220,235,240,0.4) 0%, transparent 25%, transparent 75%, rgba(220,235,240,0.7) 100%)",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Golden Sunrise Atmospheric Light Bloom Layer (Section 11) */}
          <div
            ref={bloomRef}
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-150 transform-gpu z-10"
            style={{
              background:
                "radial-gradient(circle at 35% 55%, rgba(242, 166, 43, 0.45) 0%, rgba(229, 9, 32, 0.25) 35%, transparent 70%)",
              mixBlendMode: "screen",
            }}
          />

          {/* Subtle Fine Film Grain Overlay */}
          <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none z-20" />
        </div>

        {/* ========================================================= */}
        {/* STORY INDICATOR — MINIMAL EDITORIAL PROGRESSION (Section 14) */}
        {/* ========================================================= */}
        {/* Desktop Vertical Story Indicator */}
        <div
          ref={indicatorRef}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3 transition-opacity duration-300 pointer-events-auto"
          aria-label="Journey timeline navigation"
        >
          {JOURNEY_STAGES.map((stg, i) => {
            const isActive = activeStage === i;
            const isPast = activeStage > i;
            return (
              <button
                key={stg.id}
                onClick={() => scrollToStage(i)}
                className="group flex items-center justify-end gap-3 text-right cursor-pointer py-1 select-none focus:outline-none"
                aria-label={`Jump to stage ${stg.stepNumber}: ${stg.label}`}
              >
                <div
                  className={`flex flex-col items-end transition-all duration-300 ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-40 group-hover:opacity-75 translate-x-1"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[9px] font-mono tracking-widest transition-colors ${
                        isActive
                          ? "text-[#E50920] font-bold"
                          : activeStage === 4
                          ? "text-black/60"
                          : "text-white/60"
                      }`}
                    >
                      {stg.stepNumber}
                    </span>
                    <span
                      className={`text-xs font-bold tracking-wider uppercase transition-colors ${
                        isActive
                          ? "text-white drop-shadow-[0_2px_8px_rgba(229,9,32,0.8)]"
                          : activeStage === 4
                          ? "text-black/70 group-hover:text-black"
                          : "text-white/60 group-hover:text-white"
                      }`}
                    >
                      {stg.label}
                    </span>
                  </div>
                  <span
                    className={`text-[9px] font-medium tracking-wide uppercase transition-colors ${
                      isActive
                        ? "text-[#FFD86A]"
                        : activeStage === 4
                        ? "text-black/40"
                        : "text-white/40"
                    }`}
                  >
                    {stg.time}
                  </span>
                </div>

                {/* Status Pip */}
                <div className="relative flex items-center justify-center w-4 h-4">
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

        {/* Mobile Horizontal Pill Story Indicator */}
        <div
          ref={mobileIndicatorRef}
          className="fixed top-20 right-4 z-30 md:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-lg transition-opacity duration-300 pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-widest">
            {JOURNEY_STAGES[activeStage]?.stepNumber} • {JOURNEY_STAGES[activeStage]?.label}
          </span>
          <span className="text-[9px] font-mono text-[#FFD86A] uppercase">
            ({JOURNEY_STAGES[activeStage]?.time})
          </span>
        </div>

        {/* ========================================================= */}
        {/* HERO CONTENT — QUIT 9 TO 5. BUILD BIGGER. (Section 13) */}
        {/* ========================================================= */}
        <div
          ref={headlineRef}
          className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 pt-28 sm:pt-32 will-change-transform will-change-opacity"
        >
          <div className="max-w-md sm:max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#FF172F] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-4 h-[2px] bg-[#FF172F]" />
              STUCK IN A 9 TO 5?
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-tight uppercase text-white mb-3 drop-shadow-lg">
              QUIT 9 TO 5. <br />
              <span className="text-[#FF172F]">BUILD BIGGER.</span>
            </h1>

            <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed mb-6 max-w-sm drop-shadow-md">
              Learn how to start and grow an export business from India with practical guidance and zero confusion.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCourseModal}
                className="group min-h-[48px] px-6 py-3 rounded-full bg-[#E50920] hover:bg-[#FF172F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenWebinarModal}
                className="min-h-[48px] px-5 py-3 rounded-full bg-black/65 hover:bg-white/10 active:scale-[0.98] border border-white/20 text-white font-medium text-xs tracking-wider uppercase transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <div className="w-4 h-4 rounded-full bg-[#E50920] flex items-center justify-center text-white">
                  <Play className="w-2 h-2 fill-current ml-0.5" />
                </div>
                <span>Watch Webinar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Breathing Room */}
        <div className="flex-1 min-h-[60px]" />

        {/* ========================================================= */}
        {/* BOTTOM DOCK — TRUST STATS & HIGHLIGHTS */}
        {/* ========================================================= */}
        <div
          ref={dockRef}
          className="max-w-7xl mx-auto px-4 sm:px-8 w-full z-10 pb-8 sm:pb-10 will-change-transform will-change-opacity"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 text-center sm:text-left">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="px-1">
                  <div className="font-display text-2xl sm:text-3xl text-white tracking-wide">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider font-medium truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-white/10 text-[10px] sm:text-xs text-white/85">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
                <span className="truncate">Practical Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
                <span className="truncate">Buyer Verification</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
                <span className="truncate">Step-by-Step Guide</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF172F] shrink-0" />
                <span className="truncate">Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
