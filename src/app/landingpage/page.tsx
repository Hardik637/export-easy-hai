"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  ArrowRight,
  X,
  Sparkles,
  Lock,
  Globe2,
  BookOpen,
  AlertTriangle,
  Award,
  ChevronRight,
  ExternalLink,
  Compass,
  Anchor,
  Navigation,
  FileCheck2,
  TrendingUp,
  MapPin,
  Flame,
} from "lucide-react";
import { WEBINAR_CONTENT, MENTOR_CONTENT, WHY_LEARN_WITH_US } from "@/data/siteData";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activePort, setActivePort] = useState<"jebel_ali" | "dammam" | "mumbai" | "mundra">("jebel_ali");
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [reducedMotion, setReducedMotion] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    profession: "",
    productInterest: "Spices & Food Commodities",
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const PORTS_DATA = {
    jebel_ali: {
      name: "Port of Jebel Ali (Dubai, UAE)",
      coordinates: "24.9857° N, 55.0273° E",
      transitTime: "3.5 Days Sea Transit",
      transitRoute: "Nhava Sheva / Mundra ➔ Arabian Sea ➔ Strait of Hormuz ➔ Jebel Ali",
      demandLevel: "Very High • Cash-Rich Market",
      keyProducts: "Fresh Produce, Spices, Basmati Rice, Garments & Processed Foods",
      tradeInsight:
        "The largest container port between Rotterdam and Singapore. Serves as the primary re-export hub for 2+ billion consumers across the MENA region.",
      dutyBenefit: "Zero customs duty on qualifying bilateral CEPA agricultural and textile goods.",
    },
    dammam: {
      name: "King Abdulaziz Port (Dammam, Saudi Arabia)",
      coordinates: "26.4344° N, 50.1033° E",
      transitTime: "4.5 Days Sea Transit",
      transitRoute: "West Coast India ➔ Gulf of Oman ➔ Persian Gulf ➔ Dammam",
      demandLevel: "Exponential Growth (Vision 2030)",
      keyProducts: "Engineering Components, Ceramic Tiles, Construction Hardware & Cereals",
      tradeInsight:
        "Saudi Arabia's premier maritime gateway on the Persian Gulf. Excellent creditworthy importers with high reliance on secure Letter of Credit (LC) banking.",
      dutyBenefit: "Strong demand for certified BIS & SASO compliant industrial and food items.",
    },
    mumbai: {
      name: "Nhava Sheva / JNPT (Mumbai, India)",
      coordinates: "18.9499° N, 72.9515° E",
      transitTime: "Origin Gateway",
      transitRoute: "Direct connectivity to all West Coast container freight stations",
      demandLevel: "Primary Export Gateway",
      keyProducts: "Textiles, Engineering, Chemicals, Spices & Agro",
      tradeInsight:
        "Handles over 50% of India's containerized maritime trade. Fastest direct feeder vessels to the Middle East with daily departures.",
      dutyBenefit: "Automated ICEGATE customs clearance and direct port entry for registered exporters.",
    },
    mundra: {
      name: "Mundra Port (Gujarat, India)",
      coordinates: "22.7533° N, 69.7042° E",
      transitTime: "Origin Gateway",
      transitRoute: "Shortest nautical distance to the Persian Gulf & Arabian Peninsula",
      demandLevel: "Major Bulk & Agro Hub",
      keyProducts: "Spices, Oilseeds, Cumin, Dehydrated Vegetables & Ceramic Goods",
      tradeInsight:
        "India's largest commercial private port with deep draft berths. Preferred launchpad for North & West Indian merchant exporters.",
      dutyBenefit: "Rapid container turnaround with dedicated rail and multi-modal logistics links.",
    },
  };

  const EXECUTION_PHASES = [
    {
      phase: "PHASE 01",
      title: "Market Demand & Product Fit",
      code: "HS-MKT-VET",
      desc: "Identify Gulf-specific commodities with verified buying demand in Dubai, Riyadh, and Muscat rather than competing blindly on low margins.",
      deliverable: "Product-Market Shortlist & Price Feasibility Matrix",
    },
    {
      phase: "PHASE 02",
      title: "Scam-Proof Due Diligence",
      code: "LC-RISK-PROT",
      desc: "Filter ghost shell firms from real buyers. Structure 100% advance or irrevocable LC terms protected by ECGC credit insurance.",
      deliverable: "7-Point Buyer Verification & Payment Security Framework",
    },
    {
      phase: "PHASE 03",
      title: "Statutory Setup & Compliances",
      code: "IEC-GST-PORTAL",
      desc: "Complete your Import Export Code (IEC), GST, AD Code, APEDA/RCMC, and Chamber certifications without spending thousands on middlemen.",
      deliverable: "Zero-Jargon Regulatory Roadmap & Document Checklist",
    },
    {
      phase: "PHASE 04",
      title: "Freight, CHA & Port Execution",
      code: "FCL-LCL-LAUNCH",
      desc: "Negotiate merchant exporter pricing with manufacturers, hire reliable CHAs, book containers, and clear customs smoothly at Indian ports.",
      deliverable: "Port Execution Plan & Container Shipping Blueprint",
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen text-[#FFFFFF] font-sans antialiased selection:bg-[#E50920] selection:text-white relative bg-[#060505] overflow-x-hidden"
    >
      {/* =========================================================================
          CINEMATIC FIXED BACKGROUND WITH DYNAMIC AMBIENT LIGHT
          Responsive portrait on mobile, widescreen on desktop, with zero scroll jump
         ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <picture className="w-full h-full block">
          <source
            media="(max-width: 1023px)"
            srcSet="/images/journey/mobile/01-night.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="/images/hero-blood-moon.jpg"
            type="image/jpeg"
          />
          <img
            src="/images/hero-blood-moon.jpg"
            alt="Export Easy Hai Crimson Harbor Background"
            className="w-full h-full object-cover object-center brightness-[0.82] contrast-[1.08] transform-gpu scale-105"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Dynamic Interactive Spotlight (Desktop) */}
        {!reducedMotion && (
          <div
            className="hidden lg:block absolute inset-0 transition-opacity duration-700 pointer-events-none opacity-40 mix-blend-screen"
            style={{
              background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(229, 9, 32, 0.35) 0%, rgba(242, 166, 43, 0.1) 40%, transparent 80%)`,
            }}
          />
        )}

        {/* Cinematic Vignette Overlay: Keeps typography 100% crisp while keeping cranes & blood moon dramatic */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,5,5,0.78) 0%, rgba(6,5,5,0.42) 25%, rgba(6,5,5,0.65) 60%, rgba(6,5,5,0.95) 100%)",
          }}
        />

        {/* Atmospheric Crimson Horizon Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            background:
              "radial-gradient(ellipse 90% 40% at 50% 12%, rgba(229, 9, 32, 0.45) 0%, rgba(18, 5, 8, 0.3) 50%, transparent 85%)",
          }}
        />

        {/* Maritime Film Grain Texture */}
        <div className="absolute inset-0 bg-grain opacity-25 mix-blend-overlay pointer-events-none" />
      </div>

      {/* =========================================================================
          COMMAND HEADER: Stripped down, authoritative, campaign-focused
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#080707]/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="editorial-container flex items-center justify-between h-14 sm:h-20">
          {/* Brand Mark with Maritime Compass */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#E50920] flex items-center justify-center text-white shadow-lg shadow-red-950/60 shrink-0 border border-white/20">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white animate-[spin_12s_linear_infinite]" />
            </div>
            <div className="leading-none">
              <span className="font-display text-xl sm:text-2xl text-white tracking-wider uppercase block drop-shadow-sm">
                EXPORT EASY HAI
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#FF4D5E] font-semibold block font-mono">
                INDIA ➔ GULF TRADE INITIATIVE
              </span>
            </div>
          </div>

          {/* Right Action: Direct Webinar Entry */}
          <button
            onClick={handleOpenModal}
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-xl shadow-red-950/60 transition-all cursor-pointer active:scale-95 border border-[#FF4D5E]/40"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Join ₹699 Webinar</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          MAIN EDITORIAL STORYLINE
         ========================================================================= */}
      <main className="relative z-10 space-y-16 sm:space-y-32 py-6 sm:py-16">
        {/* =========================================================================
            CHAPTER 1: THE HERO — Aggressive, Cinematic Opening
           ========================================================================= */}
        <section className="editorial-container">
          {/* Telemetry Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-6 sm:mb-10 text-[10px] sm:text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-white/80 font-bold uppercase tracking-wider">
                TRADE CORRIDOR: NHAVA SHEVA / MUNDRA ➔ JEBEL ALI
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-white/50">
              <span>LAT: 18.9499° N</span>
              <span>•</span>
              <span>SEA TRANSIT: 3.5 DAYS</span>
              <span>•</span>
              <span className="text-[#FFD86A]">SUNDAY 1:00 PM IST (LIVE)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Asymmetric Authoritative Headline */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E50920]/20 border border-[#E50920]/50 text-[#FF6B7A] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-[#FFD86A]" />
                <span>EXCLUSIVELY FOR WORKING PROFESSIONALS READY TO ESCAPE 9-TO-5</span>
              </div>

              <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[92px] uppercase tracking-tight leading-[0.92] text-white">
                STOP TRADING HOURS FOR A SALARY. <br />
                <span className="text-[#E50920] drop-shadow-[0_4px_30px_rgba(229,9,32,0.65)]">
                  BUILD AN EMPIRE ON THE WATER.
                </span>
              </h1>

              <p className="text-sm sm:text-xl text-[#F5F0E8]/90 max-w-2xl leading-relaxed font-normal">
                {WEBINAR_CONTENT.description} Learn how to turn India&apos;s agricultural,
                textile, and engineering power into high-margin export contracts across
                Dubai, Saudi Arabia, and the Gulf — with zero scam exposure.
              </p>

              {/* High-Tension Call to Action Ticket */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-xl">
                <button
                  onClick={handleOpenModal}
                  className="btn-primary py-4 px-8 text-sm sm:text-base font-bold uppercase tracking-wider shadow-2xl shadow-red-950/70 border border-[#FF6B7A]/50 group"
                >
                  <span>{WEBINAR_CONTENT.primaryCTA}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <a
                  href="#trade-route"
                  className="btn-secondary py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-center"
                >
                  <span>Explore Trade Route ↓</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-white/60 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#FFD86A]" />
                <span>{WEBINAR_CONTENT.details.schedule} • {WEBINAR_CONTENT.details.platform} (Fee: {WEBINAR_CONTENT.details.fee})</span>
              </div>
            </div>

            {/* Right Column: Industrial Live Trade HUD */}
            <div className="lg:col-span-4">
              <div className="p-5 sm:p-7 rounded-2xl bg-[#0e0c0c]/90 border border-white/15 shadow-2xl backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#E50920]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#FFD86A] font-bold">
                    TRADE TELEMETRY // 2026
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    ACTIVE CORRIDOR
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] font-mono text-white/50 uppercase">GULF TRADE DEMAND</div>
                    <div className="font-display text-2xl sm:text-3xl text-white mt-0.5">\$4.8 BILLION+</div>
                    <div className="text-xs text-white/70 mt-1">
                      Annual agricultural, food, and textile imports into GCC ports from India.
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] font-mono text-white/50 uppercase">FAST SEA TRANSIT</div>
                    <div className="font-display text-2xl sm:text-3xl text-[#FFD86A] mt-0.5">3.5 DAYS</div>
                    <div className="text-xs text-white/70 mt-1">
                      Direct vessel sailing time from Nhava Sheva / Mundra to Jebel Ali (Dubai).
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-[10px] font-mono text-white/50 uppercase">SCAM RISK DEFENSE</div>
                    <div className="font-display text-2xl sm:text-3xl text-[#E50920] mt-0.5">ZERO GUESSWORK</div>
                    <div className="text-xs text-white/70 mt-1">
                      Irrevocable Letters of Credit (LC), advance payments &amp; ECGC protection.
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-center">
                  <span className="text-[11px] font-mono text-white/60">
                    {WEBINAR_CONTENT.details.seats}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 2: FOUNDER — Rahul Makwana (The Portside Veteran)
           ========================================================================= */}
        <section id="founder" className="editorial-container scroll-mt-24">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#0a0808]/95 border border-[#E50920]/40 p-5 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Ambient Red Wash */}
            <div
              className="absolute -top-24 -left-24 w-96 h-96 bg-[#E50920]/20 rounded-full blur-[120px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Chapter Marker */}
            <div className="flex items-center gap-2 mb-6 sm:mb-10 text-[11px] sm:text-xs font-mono uppercase text-[#FF4D5E] font-bold tracking-widest">
              <span className="w-5 h-[2px] bg-[#E50920]" />
              <span>CHAPTER 02 // THE PRACTITIONER BEHIND THE HELM</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Left Column: Industrial Portrait Frame */}
              <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
                <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E50920]/70 bg-[#120f0f] group">
                  <Image
                    src="/images/mentor-rahul.jpg"
                    alt="Rahul Makwana - Founder & Export Educator"
                    fill
                    sizes="(max-width: 1024px) 340px, 420px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Industrial Viewfinder Crosshairs */}
                  <div className="absolute top-3 left-3 text-[9px] font-mono text-white/50 uppercase tracking-widest">
                    ID: RM-EXP-2026
                  </div>
                  <div className="absolute top-3 right-3 text-[9px] font-mono text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    VERIFIED
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block px-2.5 py-1 rounded bg-[#E50920] text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-1 shadow-md">
                      FOUNDER &amp; MENTOR
                    </div>
                    <div className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight">
                      {MENTOR_CONTENT.name}
                    </div>
                    <div className="text-[11px] text-[#FFD86A] font-mono uppercase tracking-wider">
                      {MENTOR_CONTENT.role}
                    </div>
                  </div>
                </div>

                {/* Tactical Proof Badges */}
                <div className="w-full max-w-[340px] grid grid-cols-3 gap-2 mt-4 text-center">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="font-display text-lg sm:text-xl text-[#FFD86A]">14+ YRS</div>
                    <div className="text-[9px] font-mono text-white/60 leading-tight">On-Ground</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="font-display text-lg sm:text-xl text-[#FF4D5E]">GULF CORRIDOR</div>
                    <div className="text-[9px] font-mono text-white/60 leading-tight">Direct Ties</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="font-display text-lg sm:text-xl text-white">ANTI-FRAUD</div>
                    <div className="text-[9px] font-mono text-white/60 leading-tight">Zero Fluff</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Founder Manifesto */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="p-3 rounded-lg bg-white/[0.03] border-l-4 border-[#E50920] border-y border-r border-white/10">
                  <p className="font-display text-xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                    &ldquo;THE HARBOR DOES NOT CARE ABOUT TEXTBOOK DEGREES. IT ONLY CARES ABOUT CARGO CLEARED AND CONTRACTS HONORED.&rdquo;
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                  <p>
                    {MENTOR_CONTENT.bio1}
                  </p>
                  <p>
                    {MENTOR_CONTENT.bio2}
                  </p>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {WHY_LEARN_WITH_US.subcopy}
                  </p>
                </div>

                {/* Practical Checklist Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {WHY_LEARN_WITH_US.practicalPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-xs sm:text-sm text-white">
                          {point.title}
                        </div>
                        <div className="text-[11px] text-white/70 leading-snug">
                          {point.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Signature Tagline */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs text-white/60">
                  <span className="font-script text-lg sm:text-xl text-[#FFD86A]">
                    &ldquo;Learn the process before you ship.&rdquo; — Rahul Makwana
                  </span>
                  <button
                    onClick={handleOpenModal}
                    className="text-[#FF4D5E] hover:text-white font-mono uppercase font-bold text-[11px] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Meet Live This Sunday →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 3: COMPANY MISSION — The India-to-Gulf Maritime Silk Route
            Dynamic Interactive Trade Map Visual + 4 Execution Phases
           ========================================================================= */}
        <section id="trade-route" className="editorial-container scroll-mt-24">
          <div className="relative rounded-2xl sm:rounded-3xl bg-[#080707]/95 border border-white/15 p-5 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* Chapter Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-[11px] sm:text-xs font-mono uppercase text-[#FF4D5E] font-bold tracking-widest">
              <span className="w-5 h-[2px] bg-[#E50920]" />
              <span>CHAPTER 03 // THE MISSION &amp; THE MARITIME CORRIDOR</span>
            </div>

            <div className="max-w-3xl mb-8 sm:mb-12">
              <h2 className="font-display text-3xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.94] mb-3">
                INDIA HAS THE PRODUCTS. <br />
                THE GULF HAS THE CAPITAL. <br />
                <span className="text-[#E50920]">WE BRIDGE THE EXECUTION GAP.</span>
              </h2>
              <p className="text-sm sm:text-lg text-white/80 leading-relaxed font-normal">
                India makes world-class agricultural produce, textiles, spices, and machinery.
                Yet thousands of hardworking professionals remain stuck in cubicles because
                conventional education never taught how to navigate customs, verify buyers,
                or book maritime freight safely. Export Easy Hai exists to turn beginners into
                disciplined, scam-proof merchant exporters.
              </p>
            </div>

            {/* =========================================================================
                CINEMATIC INTERACTIVE TRADE ROUTE MAP (SVG Nautical Chart)
               ========================================================================= */}
            <div className="mb-10 sm:mb-16 rounded-2xl bg-black/80 border border-white/15 p-4 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#FFD86A] font-bold">
                    INTERACTIVE NAUTICAL RADAR // ARABIAN SEA CORRIDOR
                  </div>
                  <div className="text-xs text-white/70">
                    Tap or click any port below to inspect transit telemetry and buyer requirements.
                  </div>
                </div>

                {/* Port Selector Tabs */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {(["jebel_ali", "dammam", "mumbai", "mundra"] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActivePort(key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                        activePort === key
                          ? "bg-[#E50920] text-white shadow-md shadow-red-950/50"
                          : "bg-white/[0.05] text-white/70 hover:bg-white/[0.1] hover:text-white"
                      }`}
                    >
                      {key === "jebel_ali"
                        ? "Jebel Ali (UAE)"
                        : key === "dammam"
                        ? "Dammam (KSA)"
                        : key === "mumbai"
                        ? "Nhava Sheva"
                        : "Mundra"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Port Telemetry Box */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Chart Representation */}
                <div className="lg:col-span-7 relative h-64 sm:h-80 rounded-xl bg-[#090b10] border border-white/10 overflow-hidden flex items-center justify-center p-4">
                  {/* Subtle Grid Radar Background */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #E50920 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Nautical SVG Map Graphic */}
                  <svg
                    viewBox="0 0 700 350"
                    className="w-full h-full select-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Sea Area Ambient Glow */}
                    <rect width="700" height="350" fill="#06090e" />

                    {/* Radar concentric rings */}
                    <circle cx="350" cy="175" r="140" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />
                    <circle cx="350" cy="175" r="90" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="3 3" />

                    {/* Shipping Route Curved Vector from Mumbai/Mundra to Gulf */}
                    <path
                      d="M 520 230 Q 340 180 180 140"
                      stroke="#E50920"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                      className="animate-[dash_20s_linear_infinite]"
                    />
                    <path
                      d="M 480 170 Q 320 130 160 90"
                      stroke="#FFD86A"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      strokeOpacity="0.7"
                    />

                    {/* Indian Hubs */}
                    {/* Nhava Sheva */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setActivePort("mumbai")}
                    >
                      <circle cx="520" cy="230" r="8" fill="#E50920" fillOpacity="0.3" className="animate-ping" />
                      <circle cx="520" cy="230" r="5" fill="#E50920" />
                      <text x="532" y="234" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                        NHAVA SHEVA (JNPT)
                      </text>
                      <text x="532" y="247" fill="#888888" fontSize="9" fontFamily="monospace">
                        INDIA GATEWAY
                      </text>
                    </g>

                    {/* Mundra Port */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setActivePort("mundra")}
                    >
                      <circle cx="480" cy="170" r="8" fill="#FFD86A" fillOpacity="0.3" className="animate-ping" />
                      <circle cx="480" cy="170" r="5" fill="#FFD86A" />
                      <text x="492" y="174" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                        MUNDRA PORT
                      </text>
                      <text x="492" y="187" fill="#888888" fontSize="9" fontFamily="monospace">
                        AGRO CONSOLIDATION
                      </text>
                    </g>

                    {/* Gulf Destination Ports */}
                    {/* Jebel Ali */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setActivePort("jebel_ali")}
                    >
                      <circle cx="180" cy="140" r="10" fill="#E50920" fillOpacity="0.4" className="animate-ping" />
                      <circle cx="180" cy="140" r="6" fill="#E50920" />
                      <text x="90" y="144" fill="#FF6B7A" fontSize="12" fontFamily="monospace" fontWeight="bold">
                        JEBEL ALI (DUBAI)
                      </text>
                      <text x="90" y="157" fill="#aaaaaa" fontSize="9" fontFamily="monospace">
                        3.5 DAYS SEA TRANSIT
                      </text>
                    </g>

                    {/* Dammam Port */}
                    <g
                      className="cursor-pointer"
                      onClick={() => setActivePort("dammam")}
                    >
                      <circle cx="160" cy="90" r="8" fill="#FFD86A" fillOpacity="0.3" />
                      <circle cx="160" cy="90" r="5" fill="#FFD86A" />
                      <text x="75" y="94" fill="#FFD86A" fontSize="11" fontFamily="monospace" fontWeight="bold">
                        PORT OF DAMMAM (KSA)
                      </text>
                      <text x="75" y="107" fill="#aaaaaa" fontSize="9" fontFamily="monospace">
                        VISION 2030 HUB
                      </text>
                    </g>

                    {/* Cargo Ship Vector Marker Moving on Route */}
                    <g transform="translate(340, 180)">
                      <circle cx="0" cy="0" r="4" fill="#ffffff" />
                      <text x="8" y="4" fill="#FFD86A" fontSize="9" fontFamily="monospace">
                        VESSEL EN ROUTE [3.5d]
                      </text>
                    </g>
                  </svg>

                  {/* Bottom Nautical Overlay Bar */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-white/50 bg-black/60 px-3 py-1 rounded backdrop-blur-sm">
                    <span>ARABIAN SEA CORRIDOR</span>
                    <span>DISTANCE: ~1,100 NAUTICAL MILES</span>
                    <span className="text-emerald-400">STATUS: OPEN &amp; ACTIVE</span>
                  </div>
                </div>

                {/* Right Side: Selected Port Details Card */}
                <div className="lg:col-span-5 space-y-3.5">
                  <div className="p-4 rounded-xl bg-white/[0.04] border border-[#E50920]/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono uppercase text-[#FFD86A]">
                        SELECTED MARITIME HUB
                      </span>
                      <span className="text-[10px] font-mono text-white/50">
                        {PORTS_DATA[activePort].coordinates}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-white uppercase tracking-tight">
                      {PORTS_DATA[activePort].name}
                    </h3>

                    <div className="mt-2 text-xs text-white/80 leading-relaxed">
                      {PORTS_DATA[activePort].tradeInsight}
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10 space-y-2 text-xs">
                      <div>
                        <span className="text-white/50 font-mono text-[10px] uppercase block">
                          Transit Route &amp; Duration:
                        </span>
                        <span className="text-white font-medium">
                          {PORTS_DATA[activePort].transitTime} • {PORTS_DATA[activePort].transitRoute}
                        </span>
                      </div>

                      <div>
                        <span className="text-white/50 font-mono text-[10px] uppercase block">
                          Key High-Demand Goods:
                        </span>
                        <span className="text-[#FFD86A] font-semibold">
                          {PORTS_DATA[activePort].keyProducts}
                        </span>
                      </div>

                      <div>
                        <span className="text-white/50 font-mono text-[10px] uppercase block">
                          Compliance &amp; Policy:
                        </span>
                        <span className="text-emerald-300">
                          {PORTS_DATA[activePort].dutyBenefit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Execution Phases: Industrial Blueprint Grid */}
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                <span className="font-mono text-xs uppercase tracking-wider text-[#FFD86A] font-bold">
                  THE 4 EXECUTION PHASES COVERED IN THE TRAINING:
                </span>
                <span className="text-[11px] font-mono text-white/50 hidden sm:inline">
                  Systematic Execution • Zero Fluff
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {EXECUTION_PHASES.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#E50920]/60 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded bg-[#E50920]/20 text-[#FF4D5E] text-[10px] font-mono font-bold">
                          {item.phase}
                        </span>
                        <span className="text-[9px] font-mono text-white/40">{item.code}</span>
                      </div>
                      <h4 className="font-display text-xl text-white uppercase tracking-tight mb-2 group-hover:text-[#FFD86A] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10 text-[11px] text-white/90 flex items-start gap-1.5 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0 mt-0.5" />
                      <span>{item.deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 4: WEBINAR — The Final Boarding Call & Ticket Manifest
            High-Impact Finale, Official ₹699 Masterclass Pass, Full Disclaimers
           ========================================================================= */}
        <section id="webinar-cta" className="editorial-container scroll-mt-24">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#180808] to-[#0c0505] border-2 border-[#E50920] p-6 sm:p-14 lg:p-16 shadow-[0_0_50px_rgba(229,9,32,0.35)] overflow-hidden">
            {/* Ambient Intense Glow Flare */}
            <div
              className="absolute top-0 right-1/4 w-96 h-96 bg-[#E50920]/30 rounded-full blur-[140px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Event Manifest Header */}
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50920] text-white text-xs font-mono uppercase tracking-wider mb-3 shadow-lg shadow-red-950/70">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  <span>OFFICIAL MASTERCLASS REGISTRATION PASS</span>
                </div>

                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.94] mb-3">
                  {WEBINAR_CONTENT.subhead}
                </h2>

                <p className="text-sm sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
                  {WEBINAR_CONTENT.description}
                </p>
              </div>

              {/* Masterclass Boarding Ticket */}
              <div className="rounded-2xl bg-black/85 border border-white/20 p-5 sm:p-10 mb-8 backdrop-blur-md relative overflow-hidden shadow-2xl">
                {/* Perforated Top Badge Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-b border-white/10 pb-6 mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.04]">
                    <div className="text-[10px] font-mono uppercase text-[#FFD86A] mb-1">REGISTRATION FEE</div>
                    <div className="font-display text-3xl sm:text-4xl text-[#E50920] leading-none">
                      {WEBINAR_CONTENT.details.fee}
                    </div>
                    <div className="text-[10px] text-white/50 mt-1">One-Time Access</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04]">
                    <div className="text-[10px] font-mono uppercase text-[#FFD86A] mb-1">SCHEDULE</div>
                    <div className="font-bold text-sm sm:text-base text-white flex items-center justify-center gap-1 leading-none mt-1">
                      <Calendar className="w-4 h-4 text-[#FF4D5E]" />
                      <span>{WEBINAR_CONTENT.details.schedule}</span>
                    </div>
                    <div className="text-[10px] text-white/50 mt-1">90 Minutes Live</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04]">
                    <div className="text-[10px] font-mono uppercase text-[#FFD86A] mb-1">FORMAT &amp; PLATFORM</div>
                    <div className="font-bold text-sm sm:text-base text-white flex items-center justify-center gap-1 leading-none mt-1">
                      <Video className="w-4 h-4 text-[#FF4D5E]" />
                      <span>Live on Zoom</span>
                    </div>
                    <div className="text-[10px] text-white/50 mt-1">Direct Q&amp;A With Rahul</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04]">
                    <div className="text-[10px] font-mono uppercase text-[#FFD86A] mb-1">LANGUAGE &amp; SEATS</div>
                    <div className="font-bold text-sm sm:text-base text-white leading-none mt-1">
                      {WEBINAR_CONTENT.details.language}
                    </div>
                    <div className="text-[10px] text-[#FF4D5E] font-mono mt-1">
                      {WEBINAR_CONTENT.details.seats}
                    </div>
                  </div>
                </div>

                {/* What You Will Learn Grid (8 Verified Points) */}
                <div className="mb-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#E50920]" />
                    <span>In this live session, you will learn:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {WEBINAR_CONTENT.learnList.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-start gap-2 text-xs sm:text-sm text-white/90"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What You Will Also Receive (4 Verified Checklists) */}
                <div className="mb-8 pt-4 border-t border-white/10">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-3 flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-[#FFD86A]" />
                    <span>You will also receive these actionable checklists:</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {WEBINAR_CONTENT.receiveList.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2 sm:p-3 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs text-white font-medium text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* THE DEFINITIVE CTA BUTTON */}
                <div className="text-center pt-2">
                  <button
                    onClick={handleOpenModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-display text-2xl sm:text-3xl uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_40px_rgba(229,9,32,0.6)] hover:shadow-[0_15px_50px_rgba(229,9,32,0.8)] transition-all cursor-pointer active:scale-98 border border-[#FF6B7A]"
                  >
                    <span>{WEBINAR_CONTENT.primaryCTA}</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  <div className="mt-3 text-xs text-white/70 flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#FFD86A]" />
                    <span>Instant Zoom pass delivered directly to your registered WhatsApp upon registration.</span>
                  </div>
                </div>
              </div>

              {/* Mandatory Verbatim Disclaimers & Policies */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs text-white/75 leading-relaxed space-y-2">
                <p>
                  <strong className="text-white font-semibold">Payment and Access Note: </strong>
                  {WEBINAR_CONTENT.paymentNote}
                </p>
                <p>
                  <strong className="text-white font-semibold">Refund Policy: </strong>
                  {WEBINAR_CONTENT.refundNote}
                </p>
                <p className="text-[11px] text-white/60 italic border-t border-white/5 pt-2">
                  <strong className="text-white font-semibold not-italic">Disclaimer: </strong>
                  {WEBINAR_CONTENT.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          STICKY MOBILE CONVERSION BAR
         ========================================================================= */}
      <div className="sm:hidden fixed bottom-2 inset-x-2.5 z-40 bg-[#0d0707]/95 border border-[#E50920]/60 p-2.5 rounded-xl backdrop-blur-lg flex items-center justify-between shadow-2xl">
        <div className="leading-tight pl-1">
          <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
            <span>{WEBINAR_CONTENT.details.fee} Masterclass Pass</span>
          </div>
          <div className="text-[9.5px] text-[#FFD86A]">{WEBINAR_CONTENT.details.schedule}</div>
        </div>

        <button
          onClick={handleOpenModal}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-md shadow-red-950/60 cursor-pointer active:scale-95"
        >
          <span>Reserve ₹699</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* =========================================================================
          FOOTER: Strictly Focused, Standalone Landing Page
         ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#050505] py-8 text-center text-xs text-white/50 relative z-10">
        <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Export Easy Hai. Founded by Rahul Makwana. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <button
              onClick={handleOpenModal}
              className="text-[#FF4D5E] hover:text-[#E50920] font-semibold transition-colors cursor-pointer"
            >
              Reserve ₹699 Webinar Seat
            </button>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          POPUP REGISTRATION MODAL
          Preserves ₹699 pricing, full fields, validation & WhatsApp delivery
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e0c0c] border border-white/20 p-5 sm:p-8 shadow-2xl text-left">
            {/* Ambient Red glow in modal */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E50920]/25 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E50920]/20 border border-[#E50920]/40 text-[#FF4D5E] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                  <span>LIVE ZOOM MASTERCLASS • FEE: {WEBINAR_CONTENT.details.fee}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-1">
                  Reserve Your Webinar Seat
                </h3>
                <p className="text-xs text-white/70 mb-5 leading-relaxed">
                  {WEBINAR_CONTENT.details.schedule} • Live with Rahul Makwana. Your Zoom link and joining instructions will be delivered to your WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.whatsapp}
                        onChange={(e) =>
                          setFormData({ ...formData, whatsapp: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
                        Current Profession / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sales Manager / Pune"
                        value={formData.profession}
                        onChange={(e) =>
                          setFormData({ ...formData, profession: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
                        Target Export Product
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            productInterest: e.target.value,
                          })
                        }
                        className="w-full bg-[#181515] border border-white/15 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50920] transition-colors"
                      >
                        <option value="Spices & Food Commodities">Spices &amp; Food Commodities</option>
                        <option value="Textiles, Apparels & Garments">Textiles &amp; Garments</option>
                        <option value="Agricultural Produce">Agricultural Produce</option>
                        <option value="Engineering & Metal Goods">Engineering &amp; Metal Goods</option>
                        <option value="Handicrafts & Home Décor">Handicrafts &amp; Décor</option>
                        <option value="Beauty & Personal Care">Beauty &amp; Personal Care</option>
                        <option value="Still Exploring / Undecided">Still Exploring / Undecided</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-[11px] text-white/60 pt-1 leading-snug">
                    Registration fee: <span className="text-[#FFD86A] font-bold">{WEBINAR_CONTENT.details.fee}</span> (Non-refundable).
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg font-bold text-base bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl shadow-red-950/60"
                    >
                      <span>Proceed to Reserve Seat ({WEBINAR_CONTENT.details.fee})</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-white/50 pt-1">
                    <Lock className="w-3 h-3 text-[#FFD86A]" />
                    <span>256-Bit SSL Encrypted • Direct WhatsApp Pass Dispatch</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center mb-4 border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-400 mb-1">
                  REGISTRATION RECEIVED
                </div>

                <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-2">
                  Welcome Aboard, {formData.name || "Future Exporter"}!
                </h3>

                <p className="text-sm text-white/80 mb-6 max-w-sm mx-auto leading-relaxed">
                  Your seat for the {WEBINAR_CONTENT.subhead} ({WEBINAR_CONTENT.details.schedule}) with Rahul Makwana is being initialized.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-left mb-6 space-y-1.5 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Attendee Name:</span>
                    <span className="font-semibold text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>WhatsApp Number:</span>
                    <span className="font-semibold text-[#FFD86A]">{formData.whatsapp}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Target Category:</span>
                    <span className="font-semibold text-white">{formData.productInterest}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Webinar Fee:</span>
                    <span className="font-semibold text-[#FF4D5E]">{WEBINAR_CONTENT.details.fee}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(
                      `Hello Rahul sir, I have registered for the India-to-Gulf Export Webinar (${WEBINAR_CONTENT.details.fee}). My name is ${formData.name}. Please share the Zoom joining instructions!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/50"
                  >
                    <span>Receive Zoom Link on WhatsApp</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleCloseModal}
                    className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Back to Webinar Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
