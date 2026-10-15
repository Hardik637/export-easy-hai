"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  X,
  Lock,
  ExternalLink,
  ShieldCheck,
  Compass,
  Ship,
  Sparkles,
} from "lucide-react";
import { WEBINAR_CONTENT, MENTOR_CONTENT } from "@/data/siteData";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  return (
    <div className="min-h-screen bg-[#070707] text-[#FFFFFF] font-sans antialiased selection:bg-[#E50920] selection:text-white relative overflow-x-hidden">
      {/* =========================================================================
          EDITORIAL NAVIGATION: Minimal, confident, high-contrast
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#070707]/90 backdrop-blur-md border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md bg-[#E50920] flex items-center justify-center text-white shadow-lg shadow-red-950/60 shrink-0">
              <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl text-white tracking-wider uppercase block leading-none">
                EXPORT EASY HAI
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#FF4D5E] font-semibold block font-mono mt-0.5">
                FOUNDER-LED EXPORT EDUCATION
              </span>
            </div>
          </div>

          {/* Primary Navbar Action */}
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold bg-[#E50920] hover:bg-[#c9071b] text-white transition-all cursor-pointer shadow-lg shadow-red-950/50 active:scale-95"
          >
            <span>Reserve Seat • {WEBINAR_CONTENT.details.fee}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          SECTION 1: HERO — BOLD, CINEMATIC, FULL-BLEED EDITORIAL OPENING
         ========================================================================= */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Full-bleed Cinematic Photographic Canvas */}
        <div className="absolute inset-0 z-0">
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
              alt="Night port with blood moon and shipping cranes"
              className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.12]"
              loading="eager"
            />
          </picture>

          {/* Deep Vignette & Atmospheric Crimson Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,7,7,0.75) 0%, rgba(7,7,7,0.3) 35%, rgba(7,7,7,0.7) 75%, #070707 100%)",
            }}
          />
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 pointer-events-none opacity-40 blur-[120px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(229,9,32,0.6) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-4xl">
            {/* Live Masterclass Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E50920]/25 border border-[#E50920]/50 text-[#FF6B7A] text-xs font-mono uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
              <span>LIVE ON ZOOM • THIS SUNDAY 1:00 PM IST</span>
            </div>

            {/* Asymmetric Typography Statement */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[104px] uppercase tracking-tight leading-[0.92] text-white mb-6 drop-shadow-2xl">
              QUIT 9 TO 5. <br />
              <span className="text-[#E50920]">BUILD AN EXPORT BUSINESS</span> <br />
              ON REAL CARGO.
            </h1>

            {/* Subcopy */}
            <p className="text-base sm:text-2xl text-[#F5F0E8]/90 max-w-2xl leading-relaxed font-normal mb-8 sm:mb-10 drop-shadow-md">
              A live, practical masterclass for working professionals who want to move
              beyond the cubicle and start exporting Indian products to high-paying
              Gulf markets — with zero scam vulnerability.
            </p>

            {/* Hero CTA Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
              <button
                onClick={handleOpenModal}
                className="btn-primary py-4 px-8 text-base sm:text-lg font-bold uppercase tracking-wider shadow-2xl shadow-red-950/80 cursor-pointer active:scale-98 transition-all flex items-center justify-center gap-3 group"
              >
                <span>{WEBINAR_CONTENT.primaryCTA}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70 font-mono">
                <ShieldCheck className="w-4 h-4 text-[#FFD86A]" />
                <span>{WEBINAR_CONTENT.details.seats}</span>
              </div>
            </div>

            {/* Fast Summary Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-16 pt-6 border-t border-white/15 max-w-3xl">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase text-white/50 block">Registration Fee</span>
                <span className="font-display text-2xl sm:text-3xl text-[#E50920] font-bold">{WEBINAR_CONTENT.details.fee}</span>
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase text-white/50 block">Live Schedule</span>
                <span className="font-bold text-sm sm:text-base text-white">{WEBINAR_CONTENT.details.schedule}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] sm:text-xs font-mono uppercase text-white/50 block">Format &amp; Language</span>
                <span className="font-bold text-sm sm:text-base text-[#FFD86A]">{WEBINAR_CONTENT.details.platform} • {WEBINAR_CONTENT.details.language}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FOUNDER — RAHUL MAKWANA (EDITORIAL PERSONAL BRANDING)
         ========================================================================= */}
      <section className="relative py-20 sm:py-32 bg-[#090808] border-b border-white/10 overflow-hidden">
        {/* Subtle Ambient Red Light in Background */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 bg-[#E50920]/15 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Chapter Eyebrow */}
          <div className="flex items-center gap-2 mb-8 sm:mb-14 text-xs font-mono uppercase text-[#FF4D5E] font-bold tracking-[0.2em]">
            <span className="w-6 h-[2px] bg-[#E50920]" />
            <span>THE PRACTITIONER BEHIND THE HELM</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Dramatic Large Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E50920]/60 bg-[#121010] group">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Founder & Export Mentor"
                  fill
                  sizes="(max-width: 1024px) 380px, 450px"
                  className="object-cover object-top filter contrast-[1.05]"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-block px-2.5 py-1 rounded bg-[#E50920] text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 shadow-md">
                    FOUNDER &amp; EXPORT EDUCATOR
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight">
                    {MENTOR_CONTENT.name}
                  </h3>
                  <div className="text-xs text-[#FFD86A] font-mono uppercase tracking-wider mt-0.5">
                    {MENTOR_CONTENT.role}
                  </div>
                </div>
              </div>

              {/* Verified Badges Row */}
              <div className="w-full max-w-[380px] grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-display text-xl text-[#FFD86A]">14+ YRS</div>
                  <div className="text-[10px] text-white/60 font-mono mt-0.5">On-Ground</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-display text-xl text-[#FF4D5E]">GULF FOCUS</div>
                  <div className="text-[10px] text-white/60 font-mono mt-0.5">Direct Corridor</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="font-display text-xl text-white">ANTI-FRAUD</div>
                  <div className="text-[10px] text-white/60 font-mono mt-0.5">Zero Guesswork</div>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="border-l-4 border-[#E50920] pl-4 sm:pl-6">
                <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[0.95]">
                  &ldquo;THE HARBOR ONLY CARES ABOUT CARGO CLEARED AND CONTRACTS HONORED.&rdquo;
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                <p>
                  {MENTOR_CONTENT.bio1}
                </p>
                <p>
                  {MENTOR_CONTENT.bio2}
                </p>
                <p className="text-sm sm:text-base text-white/70">
                  Most export courses are taught by academics who have never stood
                  in front of a shipping container or resolved a customs query at midnight.
                  Rahul&apos;s teaching is grounded in real, battle-tested Indian trade realities.
                </p>
              </div>

              {/* Key Practical Takeaways */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-white/90">
                    <strong className="text-white block font-semibold mb-0.5">Supplier &amp; Buyer Verification</strong>
                    Filter genuine Gulf importers from ghost shell companies before signing contracts.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-white/90">
                    <strong className="text-white block font-semibold mb-0.5">Safe Payment Structures</strong>
                    Bulletproofing payment terms with Irrevocable Letters of Credit (LC) and ECGC insurance.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-white/90">
                    <strong className="text-white block font-semibold mb-0.5">Customs &amp; Documentation</strong>
                    Step-by-step guidance on IEC, GST, AD Code, APEDA/RCMC, and CHA management.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-white/90">
                    <strong className="text-white block font-semibold mb-0.5">Direct APMC &amp; Cluster Sourcing</strong>
                    Source export-grade commodities directly without owning a manufacturing plant.
                  </div>
                </div>
              </div>

              {/* Personal Sign-off */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-script text-2xl sm:text-3xl text-[#FFD86A]">
                  &ldquo;Learn the process before you ship.&rdquo; — Rahul Makwana
                </span>

                <button
                  onClick={handleOpenModal}
                  className="text-xs sm:text-sm font-bold text-[#FF4D5E] hover:text-white uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Meet Rahul This Sunday →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPANY MISSION — THE MARITIME TRADE BRIDGE
         ========================================================================= */}
      <section className="relative py-20 sm:py-32 bg-[#060606] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8 sm:mb-12 text-xs font-mono uppercase text-[#FF4D5E] font-bold tracking-[0.2em]">
            <span className="w-6 h-[2px] bg-[#E50920]" />
            <span>THE PURPOSE OF EXPORT EASY HAI</span>
          </div>

          <div className="max-w-4xl mb-12 sm:mb-20">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.92] mb-6">
              INDIA HAS THE HARVEST. <br />
              THE GULF HAS THE BUYING POWER. <br />
              <span className="text-[#E50920]">WE BRIDGE THE GAP IN BETWEEN.</span>
            </h2>

            <p className="text-base sm:text-xl text-white/80 leading-relaxed font-normal">
              India produces world-class agricultural commodities, spices, textiles,
              and engineering goods. Yet thousands of talented professionals stay trapped
              in 9-to-5 jobs because they believe the myth that international trade
              requires political influence or crores in capital.
            </p>
          </div>

          {/* Cinematic Trade Corridor Visual (India to Gulf) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#140a0a] to-[#0a0707] border border-[#E50920]/40 p-6 sm:p-12 mb-12 sm:mb-16 shadow-2xl overflow-hidden">
            {/* Ambient Red Port Glow */}
            <div
              className="absolute top-0 right-1/4 w-80 h-80 bg-[#E50920]/20 rounded-full blur-[120px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Route Concept */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E50920]/20 text-[#FF4D5E] text-xs font-mono font-bold uppercase tracking-wider">
                  <Ship className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>THE ARABIAN SEA MARITIME CORRIDOR</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight">
                  From Indian Ports to Gulf Markets in 3.5 Days
                </h3>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  The sea transit between India&apos;s west coast ports (Nhava Sheva and Mundra)
                  and the primary Gulf container hubs (Port of Jebel Ali in Dubai and King Abdulaziz Port in Dammam)
                  is one of the fastest, most profitable trade lanes on earth.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10">
                    <span className="text-white/50 font-mono uppercase block text-[10px]">ORIGIN CORRIDOR</span>
                    <span className="font-bold text-white text-sm">Nhava Sheva &amp; Mundra</span>
                    <span className="text-white/60 block text-[11px] mt-0.5">Automated ICEGATE customs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.04] border border-white/10">
                    <span className="text-white/50 font-mono uppercase block text-[10px]">DESTINATION CORRIDOR</span>
                    <span className="font-bold text-[#FFD86A] text-sm">Jebel Ali &amp; Dammam</span>
                    <span className="text-white/60 block text-[11px] mt-0.5">3.5 - 4.5 days sea sailing</span>
                  </div>
                </div>
              </div>

              {/* Right: Visual Route SVG */}
              <div className="lg:col-span-6 h-64 sm:h-72 rounded-xl bg-[#08090d] border border-white/10 relative overflow-hidden flex items-center justify-center p-4">
                <svg
                  viewBox="0 0 600 300"
                  className="w-full h-full select-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="600" height="300" fill="#070a0e" />

                  {/* Ocean Coordinates Grid */}
                  <line x1="0" y1="75" x2="600" y2="75" stroke="#ffffff" strokeOpacity="0.04" />
                  <line x1="0" y1="150" x2="600" y2="150" stroke="#ffffff" strokeOpacity="0.04" />
                  <line x1="0" y1="225" x2="600" y2="225" stroke="#ffffff" strokeOpacity="0.04" />

                  {/* Dynamic Curved Route */}
                  <path
                    d="M 460 210 Q 300 160 140 110"
                    stroke="#E50920"
                    strokeWidth="3.5"
                    strokeDasharray="6 4"
                  />

                  {/* Origin: Indian Ports */}
                  <circle cx="460" cy="210" r="10" fill="#E50920" fillOpacity="0.3" className="animate-ping" />
                  <circle cx="460" cy="210" r="6" fill="#E50920" />
                  <text x="475" y="215" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    INDIA (MUMBAI / GUJARAT)
                  </text>
                  <text x="475" y="228" fill="#888888" fontSize="10" fontFamily="monospace">
                    Origin Freight Stations
                  </text>

                  {/* Destination: Gulf Ports */}
                  <circle cx="140" cy="110" r="10" fill="#FFD86A" fillOpacity="0.3" className="animate-ping" />
                  <circle cx="140" cy="110" r="6" fill="#FFD86A" />
                  <text x="30" y="115" fill="#FFD86A" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    GULF PORTS (UAE &amp; KSA)
                  </text>
                  <text x="30" y="128" fill="#aaaaaa" fontSize="10" fontFamily="monospace">
                    High-Margin Demand Hubs
                  </text>

                  {/* Transit Indicator */}
                  <rect x="235" y="135" width="130" height="28" rx="6" fill="#0e1118" stroke="#E50920" strokeWidth="1" />
                  <text x="245" y="153" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    3.5 DAYS SEA TRANSIT
                  </text>
                </svg>

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/50 bg-black/60 px-3 py-1 rounded backdrop-blur-sm">
                  <span>TRADE ROUTE: INDIA ➔ ARABIAN GULF</span>
                  <span className="text-emerald-400">CORRIDOR: ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Practical Execution Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#E50920]/60 transition-colors">
              <span className="text-[11px] font-mono text-[#E50920] uppercase font-bold block mb-2">MILESTONE 01</span>
              <h4 className="font-display text-xl text-white uppercase tracking-tight mb-2">Product &amp; Market Fit</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Learn what the Gulf actually imports in high volumes (spices, produce, textiles, engineering goods) rather than guessing.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#E50920]/60 transition-colors">
              <span className="text-[11px] font-mono text-[#E50920] uppercase font-bold block mb-2">MILESTONE 02</span>
              <h4 className="font-display text-xl text-white uppercase tracking-tight mb-2">Buyer Due Diligence</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Screen overseas contacts through structured background checks and secure your money with 100% advance or Letters of Credit.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#E50920]/60 transition-colors">
              <span className="text-[11px] font-mono text-[#E50920] uppercase font-bold block mb-2">MILESTONE 03</span>
              <h4 className="font-display text-xl text-white uppercase tracking-tight mb-2">Statutory Compliance</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Step-by-step guidance on your IEC, GST, AD Code, APEDA/RCMC, and Chamber certifications without middleman fees.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#E50920]/60 transition-colors">
              <span className="text-[11px] font-mono text-[#E50920] uppercase font-bold block mb-2">MILESTONE 04</span>
              <h4 className="font-display text-xl text-white uppercase tracking-tight mb-2">Container Execution</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Negotiate merchant pricing with manufacturers, partner with honest CHAs, and dispatch your first export container with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WEBINAR — THE FINAL CONVERSION PASS
         ========================================================================= */}
      <section className="relative py-20 sm:py-32 bg-[#080707] overflow-hidden">
        {/* Glow Halo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#E50920]/25 rounded-full blur-[160px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-b from-[#180808] to-[#0c0505] border-2 border-[#E50920] p-6 sm:p-12 lg:p-16 shadow-[0_0_60px_rgba(229,9,32,0.4)]">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50920] text-white text-xs font-mono uppercase tracking-wider mb-4 shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>OFFICIAL WEBINAR REGISTRATION PASS</span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.94] mb-4">
                {WEBINAR_CONTENT.subhead}
              </h2>

              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                {WEBINAR_CONTENT.description}
              </p>
            </div>

            {/* Event Key Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-y border-white/15 py-6 mb-8">
              <div className="p-3">
                <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-1">REGISTRATION FEE</span>
                <span className="font-display text-3xl sm:text-4xl text-[#E50920] font-bold">{WEBINAR_CONTENT.details.fee}</span>
                <span className="text-[10px] text-white/50 block mt-0.5">One-Time Fee</span>
              </div>

              <div className="p-3">
                <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-1">LIVE SCHEDULE</span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">{WEBINAR_CONTENT.details.schedule}</span>
                <span className="text-[10px] text-white/50 block mt-0.5">90 Minutes Live</span>
              </div>

              <div className="p-3">
                <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-1">PLATFORM</span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">{WEBINAR_CONTENT.details.platform}</span>
                <span className="text-[10px] text-white/50 block mt-0.5">Direct Q&amp;A</span>
              </div>

              <div className="p-3">
                <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-1">SEATS &amp; LANGUAGE</span>
                <span className="font-bold text-sm sm:text-base text-white block mt-1">{WEBINAR_CONTENT.details.language}</span>
                <span className="text-[10px] text-[#FF4D5E] font-mono block mt-0.5">{WEBINAR_CONTENT.details.seats}</span>
              </div>
            </div>

            {/* What You Will Learn (8 Points) */}
            <div className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-4">
                In this live session, you will learn:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {WEBINAR_CONTENT.learnList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs sm:text-sm text-white/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Will Receive (4 Checklists) */}
            <div className="mb-10 pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-3">
                Actionable tools provided to all attendees:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {WEBINAR_CONTENT.receiveList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white/[0.04] border border-white/10 text-xs text-white font-medium text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* The Unmistakable CTA Button */}
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
                <span>Instant Zoom pass delivered directly to your WhatsApp upon registration.</span>
              </div>
            </div>

            {/* Verbatim Disclaimers */}
            <div className="mt-10 p-4 rounded-xl bg-black/60 border border-white/10 text-xs text-white/75 leading-relaxed space-y-2">
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
          FOOTER
         ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#050505] py-8 text-center text-xs text-white/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
          REGISTRATION POPUP MODAL
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e0c0c] border border-white/20 p-5 sm:p-8 shadow-2xl text-left">
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
                  <span>LIVE MASTERCLASS • FEE: {WEBINAR_CONTENT.details.fee}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-1">
                  Reserve Your Webinar Seat
                </h3>
                <p className="text-xs text-white/70 mb-5 leading-relaxed">
                  {WEBINAR_CONTENT.details.schedule} • Live with Rahul Makwana. Your Zoom link and entry instructions will be delivered to your WhatsApp.
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
                  Your seat for the {WEBINAR_CONTENT.subhead} ({WEBINAR_CONTENT.details.schedule}) with Rahul Makwana is confirmed.
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
