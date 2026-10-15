"use client";

import React, { useState } from "react";
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
} from "lucide-react";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeMobileModule, setActiveMobileModule] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    profession: "",
    productInterest: "Spices & Food Commodities",
  });

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

  const MODULES = [
    {
      id: "01",
      tag: "Flagship Live Program",
      tagColor: "bg-[#E50920]/20 text-[#FF4D5E]",
      title: "Gulf Export Mastery (UAE, Saudi, Oman)",
      desc: "Direct training on navigating the nearest, most cash-rich export corridor from India. Fast customs clearances, port of Jebel Ali procedures, and finding vetted Gulf buyers.",
      points: [
        "Direct market demand analysis for food, spices & garments",
        "Gulf food safety standards & import compliances",
      ],
    },
    {
      id: "02",
      tag: "Risk Defense",
      tagColor: "bg-[#FFD86A]/20 text-[#FFD86A]",
      title: "Buyer Due Diligence & Scam Shield",
      desc: "How to filter genuine overseas importers from ghost shell companies. Bulletproofing payment structures with 100% advance, irrevocable LCs, and ECGC credit protection.",
      points: [
        "7-point buyer background check checklist",
        "Avoiding fake inquiry scams & container seizure traps",
      ],
    },
    {
      id: "03",
      tag: "Regulatory Step-by-Step",
      tagColor: "bg-white/10 text-white/80",
      title: "Export Documentation, IEC & Customs",
      desc: "Never fear paperwork. Complete walkthrough on getting your IEC, GST registration, AD Code, APEDA/RCMC, Certificate of Origin, and Bills of Lading without spending thousands on middlemen.",
      points: [
        "Step-by-step government portals & compliance map",
        "Customs House Agent (CHA) hiring & rate negotiation",
      ],
    },
    {
      id: "04",
      tag: "Sourcing & Execution",
      tagColor: "bg-white/10 text-white/80",
      title: "Direct Manufacturer Sourcing & Quality Control",
      desc: "How to source export-grade commodities directly from APMCs, textile clusters, and engineering hubs without owning a factory or holding heavy inventory.",
      points: [
        "Negotiating merchant exporter pricing with manufacturers",
        "Third-party lab testing, pre-shipment inspections (SGS)",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-[#FFFFFF] font-sans antialiased selection:bg-[#E50920] selection:text-white relative bg-transparent pb-16 sm:pb-0">
      {/* =========================================================================
          STATIC BACKGROUND:
          - Mobile screens (<1024px): Uses the exact mobile portrait image /images/journey/mobile/01-night.webp
          - Desktop screens (>=1024px): Uses /images/hero-blood-moon.jpg
          - Purely static with zero scroll transitions
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
            src="/images/journey/mobile/01-night.webp"
            alt="Export Easy Hai Night Port Background"
            className="w-full h-full object-cover object-center brightness-90"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Balanced Vignette: Dark enough for text legibility, clear enough to see the cranes, blood moon & port */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.38) 28%, rgba(5,5,5,0.65) 70%, rgba(5,5,5,0.94) 100%)",
          }}
        />

        {/* Subtle Ambient Red Glow over harbor */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(circle at 50% 16%, rgba(229, 9, 32, 0.4) 0%, rgba(18, 5, 8, 0.3) 50%, transparent 80%)",
          }}
        />

        {/* Fine Film Grain Texture Overlay */}
        <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      {/* =========================================================================
          NAVBAR:
          - Mobile: ultra-compact 52px height
          - Desktop: 80px height
          Strictly only:
          1. Logo & Name (EXPORT EASY HAI)
          2. Button for signing up ("Join ₹9 Webinar")
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#090808]/85 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="editorial-container flex items-center justify-between h-14 sm:h-20">
          {/* Logo & Name */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg bg-[#E50920] flex items-center justify-center text-white shadow-md shadow-red-950/50 shrink-0">
              <svg
                className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <div className="leading-none">
              <span className="font-display text-lg sm:text-2xl text-white tracking-wide uppercase block">
                EXPORT EASY HAI
              </span>
              <span className="text-[8.5px] sm:text-[10px] tracking-widest uppercase text-[#FF4D5E] font-semibold block">
                PRACTICAL EXPORT GUIDANCE
              </span>
            </div>
          </div>

          {/* Right: Join ₹9 Webinar button */}
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-lg shadow-red-900/40 hover:shadow-red-700/60 transition-all cursor-pointer active:scale-[0.98]"
          >
            <span>Join ₹9 Webinar</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          MAIN CONTENT CONTAINER:
          Mobile: Tight padding & compact spacing (space-y-4 sm:space-y-16) to avoid long scrolling
         ========================================================================= */}
      <main className="editorial-container relative z-10 py-3 sm:py-16 space-y-4 sm:space-y-16 lg:space-y-24">
        {/* =========================================================================
            HERO BANNER:
            Tight headline & immediate above-the-fold value on mobile phones
           ========================================================================= */}
        <section className="text-center max-w-4xl mx-auto pt-1 sm:pt-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#E50920]/25 border border-[#E50920]/50 text-[#FF6B7A] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FFD86A]" />
            <span>Live Masterclass • ₹9 Registration Pass</span>
          </div>

          <h1 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.96] text-white mb-2 sm:mb-6 drop-shadow-lg">
            Quit 9-to-5 Blindness. <br className="hidden sm:inline" />
            <span className="text-[#E50920] drop-shadow-[0_2px_25px_rgba(229,9,32,0.6)]">
              Build a Real Export Business.
            </span>
          </h1>

          <p className="text-xs sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-3 sm:mb-8 font-normal drop-shadow-md">
            Learn step-by-step how working professionals in India are launching
            high-profit export operations to the Gulf and beyond — without quitting
            their job or risking lifetime savings.
          </p>

          {/* Quick CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 max-w-md mx-auto">
            <button
              onClick={handleOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-lg bg-[#E50920] hover:bg-[#c9071b] text-white shadow-xl shadow-red-900/60 hover:shadow-red-600/70 transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>Reserve Seat For Just ₹9</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="text-[10px] sm:text-xs text-white/70 flex items-center gap-1.5 backdrop-blur-sm px-2 py-0.5 rounded">
              <Lock className="w-3 h-3 text-[#FFD86A]" />
              <span>Instant Zoom link sent to your WhatsApp</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PART 1: PERSONAL BRANDING
            - Compact horizontal founder banner on mobile (fits in 1 screen)
            - Expanded side-by-side grid on desktop
           ========================================================================= */}
        <section id="founder-and-company" className="scroll-mt-20">
          <div className="relative rounded-xl sm:rounded-3xl bg-[#0c0a0a]/85 backdrop-blur-md border border-white/10 p-3.5 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
            {/* Ambient Background Glow */}
            <div
              className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#E50920]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Section Tag */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4 text-[#FF4D5E] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <span className="w-3 sm:w-4 h-[2px] bg-[#E50920]" />
              PART 1 • PERSONAL BRANDING &amp; FOUNDER
            </div>

            {/* MOBILE VIEW FOR FOUNDER & COMPANY: Highly compact, zero wasted scroll */}
            <div className="block lg:hidden space-y-3">
              {/* Top Row: Avatar + Name + Title */}
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg border border-[#E50920]/70 shrink-0 bg-[#141212]">
                  <Image
                    src="/images/mentor-rahul.jpg"
                    alt="Rahul Makwana - Founder & Export Educator"
                    fill
                    sizes="64px"
                    className="object-cover object-top"
                    priority
                    unoptimized
                  />
                </div>
                <div>
                  <div className="inline-block px-1.5 py-0.5 rounded bg-[#E50920] text-[8.5px] font-bold text-white uppercase tracking-wider mb-0.5">
                    Verified Exporter
                  </div>
                  <h2 className="font-display text-2xl text-white uppercase tracking-tight leading-none">
                    Rahul Makwana
                  </h2>
                  <div className="text-[10px] font-semibold tracking-wider uppercase text-[#FFD86A] mt-0.5">
                    Founder • Mentor • Export Practitioner
                  </div>
                </div>
              </div>

              {/* Founder quote & company note */}
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 space-y-1.5 text-xs text-white/85 leading-relaxed">
                <p className="font-semibold text-white text-[11px] leading-snug">
                  &ldquo;I built Export Easy Hai because 95% of export courses teach outdated theory. We teach ground realities.&rdquo;
                </p>
                <p className="text-[10.5px] text-white/75 leading-relaxed">
                  Export Easy Hai was launched to eliminate scams, legal jargon, and confusion so working professionals can safely export to the Gulf and beyond without risking lifetime savings.
                </p>
              </div>

              {/* Micro stats grid: 3-column pill row */}
              <div className="grid grid-cols-3 gap-1.5 text-center">
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="font-display text-base text-[#FFD86A] leading-tight">14+ YRS</div>
                  <div className="text-[8.5px] text-white/70 leading-tight">Trade Experience</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="font-display text-base text-[#FF4D5E] leading-tight">GULF &amp; SEA</div>
                  <div className="text-[8.5px] text-white/70 leading-tight">Port Direct</div>
                </div>
                <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                  <div className="font-display text-base text-[#E50920] leading-tight">100% REAL</div>
                  <div className="text-[8.5px] text-white/70 leading-tight">Anti-Fraud</div>
                </div>
              </div>
            </div>

            {/* DESKTOP VIEW FOR FOUNDER & COMPANY: Full editorial spread */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-14 items-center">
              {/* Left: Founder Picture & Quick Badges */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E50920]/60 mb-5 bg-[#141212] group">
                  <Image
                    src="/images/mentor-rahul.jpg"
                    alt="Rahul Makwana - Founder & Export Educator"
                    fill
                    sizes="320px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="px-2.5 py-1 rounded bg-[#E50920] text-[10px] font-bold text-white uppercase tracking-wider shadow">
                      Verified Exporter
                    </span>
                  </div>
                </div>

                <h2 className="font-display text-4xl text-white uppercase tracking-tight leading-none mb-1">
                  Rahul Makwana
                </h2>
                <div className="text-sm font-semibold tracking-wider uppercase text-[#FFD86A] mb-3">
                  Founder • Mentor • Export Practitioner
                </div>
                <p className="text-sm text-white/70 max-w-sm">
                  14+ years of active on-the-ground international trading,
                  specializing in India-to-Gulf trade corridors.
                </p>
              </div>

              {/* Right: Rahul's Story & The Company Backstory */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white/[0.05] border border-white/10 text-white/90 text-xs font-mono">
                  <span>Founder Note:</span>
                  <span className="text-[#FF4D5E]">No Theory. Pure Ground Reality.</span>
                </div>

                <h3 className="font-display text-4xl uppercase text-white leading-tight">
                  &ldquo;I Built Export Easy Hai Because 95% Of Export Courses Teach Outdated Bookish Theory.&rdquo;
                </h3>

                <p className="text-base text-white/80 leading-relaxed font-normal">
                  For over a decade, Rahul Makwana worked across ports, container yards,
                  customs houses, and foreign buyer meetings. He witnessed countless
                  honest, hardworking professionals lose their savings to advance-fee
                  buyer scams, unregistered agents, and miscalculated shipping duties.
                </p>

                <p className="text-base text-white/80 leading-relaxed font-normal">
                  <strong className="text-white font-semibold">
                    About Export Easy Hai:
                  </strong>{" "}
                  Export Easy Hai was launched with a single, unbending purpose — to
                  strip away the confusion, legal jargon, and fraud surrounding Indian
                  exports. We do not sell get-rich-quick dreams. We teach the exact,
                  battle-tested frameworks needed to identify genuine buyers, lock
                  safe payment terms (LC / secure advances), and execute shipments
                  smoothly from India to international markets like the UAE, Saudi Arabia,
                  and Europe.
                </p>

                {/* Founder Proof Points */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="font-display text-xl text-[#FFD86A]">14+ YEARS</div>
                    <div className="text-[11px] text-white/70">Trade Experience</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="font-display text-xl text-[#FF4D5E]">GULF &amp; SEA</div>
                    <div className="text-[11px] text-white/70">Direct Port Connections</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="font-display text-xl text-[#E50920]">100% PRACTICAL</div>
                    <div className="text-[11px] text-white/70">Anti-Fraud Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PART 2: MISSION OF THE COMPANY AND COURSES
            - Mobile: Compact mission + interactive 4-module tab selector (saves ~900px of scrolling)
            - Desktop: 2x2 grid layout
           ========================================================================= */}
        <section id="mission-and-courses" className="scroll-mt-20">
          <div className="relative rounded-xl sm:rounded-3xl bg-[#0c0a0a]/85 backdrop-blur-md border border-white/10 p-3.5 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
            {/* Ambient Background Glow */}
            <div
              className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#E50920]/15 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Section Tag */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4 text-[#FF4D5E] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
              <span className="w-3 sm:w-4 h-[2px] bg-[#E50920]" />
              PART 2 • MISSION &amp; STRUCTURED CURRICULUM
            </div>

            <div className="max-w-3xl mb-3 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-1.5 sm:mb-4 leading-[0.98]">
                Our Mission: Turn Local Potential Into Global Shipments.
              </h2>
              <p className="text-xs sm:text-lg text-white/80 leading-relaxed font-normal">
                India makes world-class agricultural produce, textiles, spices, and
                machinery. Our mission is to empower salaried professionals and small
                business owners to step out of career stagnation and build independent
                export businesses with zero scam risk.
              </p>
            </div>

            {/* MOBILE INTERACTIVE MODULE TABS (Saves excessive scrolling on phone) */}
            <div className="block md:hidden">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#E50920]" />
                <span>Tap to Explore 4 Core Training Modules:</span>
              </div>

              {/* Horizontal Pill Selector */}
              <div className="grid grid-cols-4 gap-1 mb-2.5">
                {MODULES.map((mod, idx) => (
                  <button
                    key={mod.id}
                    onClick={() => setActiveMobileModule(idx)}
                    className={`py-1.5 px-1 rounded-lg text-center transition-all cursor-pointer ${
                      activeMobileModule === idx
                        ? "bg-[#E50920] text-white font-bold shadow-md shadow-red-950/40"
                        : "bg-white/[0.05] text-white/70 hover:bg-white/[0.1] font-medium"
                    }`}
                  >
                    <span className="block text-[8px] font-mono opacity-70">MOD {mod.id}</span>
                    <span className="block text-[9.5px] truncate">
                      {idx === 0 ? "Gulf" : idx === 1 ? "Scams" : idx === 2 ? "Docs" : "Source"}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Module Card */}
              <div className="p-3 rounded-xl bg-white/[0.04] border border-[#E50920]/40 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`px-2 py-0.5 rounded text-[8.5px] font-mono uppercase font-bold ${MODULES[activeMobileModule].tagColor}`}>
                    {MODULES[activeMobileModule].tag}
                  </span>
                  <span className="text-[9px] text-white/50 font-mono">
                    Module {MODULES[activeMobileModule].id} of 04
                  </span>
                </div>

                <h4 className="font-display text-lg text-white uppercase tracking-tight mb-1">
                  {MODULES[activeMobileModule].title}
                </h4>

                <p className="text-[11px] text-white/75 leading-relaxed mb-2.5">
                  {MODULES[activeMobileModule].desc}
                </p>

                <div className="space-y-1 border-t border-white/10 pt-2 text-[10.5px] text-white/85">
                  {MODULES[activeMobileModule].points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-[#E50920] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DESKTOP 2x2 GRID FOR ALL 4 MODULES */}
            <div className="hidden md:block">
              <div className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#E50920]" />
                <span>Our 4 Core Training Programs &amp; Curriculum Modules:</span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {MODULES.map((mod) => (
                  <div
                    key={mod.id}
                    className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#E50920]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold ${mod.tagColor}`}>
                          {mod.tag}
                        </span>
                        <span className="text-xs text-white/50 font-mono">Module {mod.id}</span>
                      </div>
                      <h4 className="font-display text-2xl text-white uppercase tracking-tight mb-2">
                        {mod.title}
                      </h4>
                      <p className="text-sm text-white/75 leading-relaxed mb-4">
                        {mod.desc}
                      </p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-white/80 border-t border-white/5 pt-3">
                      {mod.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            PART 3: BUTTON / SECTION FOR SIGNING UP FOR THE WEBINAR
            - Mobile: Compact ticket format with shared fee & schedule row + bold CTA
            - Desktop: Full expanded ticket card
           ========================================================================= */}
        <section id="signup-webinar" className="scroll-mt-20">
          <div className="relative rounded-xl sm:rounded-3xl bg-gradient-to-b from-[#140808]/90 to-[#0d0707]/95 backdrop-blur-md border border-[#E50920] sm:border-2 p-3.5 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
            {/* Glowing red accent highlight */}
            <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-[#E50920]/25 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Header Badge */}
              <div className="text-center mb-3 sm:mb-8">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#E50920] text-white text-[9.5px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3 shadow-md shadow-red-950/60">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-ping" />
                  PART 3 • REGISTER FOR THE LIVE WEBINAR
                </div>
                <h2 className="font-display text-2xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-1.5 sm:mb-2 leading-[0.98]">
                  From Confusion to Clarity: The ₹9 Live Masterclass
                </h2>
                <p className="text-xs sm:text-base text-white/80 max-w-xl mx-auto">
                  Spend 90 minutes live with Rahul Makwana. Get direct answers to your
                  export questions, review live buyer contracts, and leave with a clear
                  blueprint.
                </p>
              </div>

              {/* Central Webinar Details Card */}
              <div className="bg-black/80 rounded-xl sm:rounded-2xl border border-white/15 p-3 sm:p-8 mb-3 sm:mb-8 backdrop-blur-md">
                {/* 4 Details: compact 2-row on mobile, 4-col on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center divide-y-0 sm:divide-x divide-white/10 pb-3 sm:pb-6 mb-3 sm:mb-6 border-b border-white/10">
                  <div className="p-2 sm:p-0 rounded-lg bg-white/[0.03] sm:bg-transparent">
                    <div className="text-[9px] sm:text-xs font-mono uppercase text-[#FFD86A] mb-0.5 sm:mb-1">
                      Registration Fee
                    </div>
                    <div className="text-xl sm:text-3xl font-bold text-[#E50920] leading-tight">
                      ₹9 <span className="text-[10px] sm:text-xs text-white/40 line-through">₹699</span>
                    </div>
                  </div>

                  <div className="p-2 sm:p-0 rounded-lg bg-white/[0.03] sm:bg-transparent">
                    <div className="text-[9px] sm:text-xs font-mono uppercase text-[#FFD86A] mb-0.5 sm:mb-1">
                      Live Schedule
                    </div>
                    <div className="text-xs sm:text-base font-bold text-white flex items-center justify-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FF4D5E]" />
                      <span>Sunday 1 PM</span>
                    </div>
                    <div className="text-[9px] text-white/60">IST (90 Mins)</div>
                  </div>

                  <div className="p-2 sm:p-0 rounded-lg bg-white/[0.03] sm:bg-transparent">
                    <div className="text-[9px] sm:text-xs font-mono uppercase text-[#FFD86A] mb-0.5 sm:mb-1">
                      Platform
                    </div>
                    <div className="text-xs sm:text-base font-bold text-white flex items-center justify-center gap-1">
                      <Video className="w-3.5 h-3.5 text-[#FF4D5E]" />
                      <span>Live on Zoom</span>
                    </div>
                    <div className="text-[9px] text-white/60">Live Q&amp;A</div>
                  </div>

                  <div className="p-2 sm:p-0 rounded-lg bg-white/[0.03] sm:bg-transparent">
                    <div className="text-[9px] sm:text-xs font-mono uppercase text-[#FFD86A] mb-0.5 sm:mb-1">
                      Language
                    </div>
                    <div className="text-xs sm:text-base font-bold text-white">
                      Hindi + English
                    </div>
                    <div className="text-[9px] text-white/60">Easy to follow</div>
                  </div>
                </div>

                {/* What You Will Discover */}
                <div className="mb-3 sm:mb-6">
                  <h4 className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-2 sm:mb-3">
                    What You Will Discover Inside This Live Session:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5">
                    <div className="flex items-start gap-1.5 sm:gap-2 text-[10.5px] sm:text-sm text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0 mt-0.5" />
                      <span>The 5 biggest myths keeping 9-to-5 employees out of export</span>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2 text-[10.5px] sm:text-sm text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0 mt-0.5" />
                      <span>How to find real overseas buyers who pay on time</span>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2 text-[10.5px] sm:text-sm text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0 mt-0.5" />
                      <span>The essential documents checklist to launch legally</span>
                    </div>
                    <div className="flex items-start gap-1.5 sm:gap-2 text-[10.5px] sm:text-sm text-white/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0 mt-0.5" />
                      <span>Common fraud traps and how to protect every rupee</span>
                    </div>
                  </div>
                </div>

                {/* THE PRIMARY BUTTON */}
                <div className="text-center pt-1 sm:pt-2">
                  <button
                    onClick={handleOpenModal}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3.5 sm:px-10 sm:py-5 rounded-xl font-display text-lg sm:text-2xl uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-2xl shadow-red-900/70 hover:shadow-red-600/80 transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <span>Click Here to Join ₹9 Webinar Now</span>
                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-white/60 mt-2 sm:mt-3">
                    Seats are limited to maintain Zoom bandwidth and live Q&amp;A quality.
                  </p>
                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="text-center text-[10px] sm:text-xs text-white/60 space-y-1">
                <p>
                  * Registration fee is non-refundable. Zoom pass details are delivered
                  immediately to your registered WhatsApp number upon form submission.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          STICKY MOBILE BOTTOM ACTION BAR:
          Gives mobile ad traffic a 1-tap frictionless checkout without scrolling
         ========================================================================= */}
      <div className="sm:hidden fixed bottom-2 inset-x-2.5 z-40 bg-[#0d0707]/95 border border-[#E50920]/60 p-2 rounded-xl backdrop-blur-lg flex items-center justify-between shadow-2xl">
        <div className="leading-tight pl-1">
          <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50920] animate-pulse" />
            <span>₹9 Live Masterclass</span>
          </div>
          <div className="text-[9.5px] text-[#FFD86A]">Sunday 1:00 PM • Zoom</div>
        </div>

        <button
          onClick={handleOpenModal}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-md shadow-red-950/50 cursor-pointer active:scale-95"
        >
          <span>Join for ₹9</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* =========================================================================
          MINIMAL FOOTER:
         ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#050505]/90 backdrop-blur-md py-6 sm:py-8 text-center text-[11px] sm:text-xs text-white/50 relative z-10">
        <div className="editorial-container flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <div>
            &copy; {new Date().getFullYear()} Export Easy Hai. Founded by Rahul Makwana.
            All rights reserved.
          </div>
          <div className="flex items-center justify-center gap-4 text-white/70">
            <button
              onClick={handleOpenModal}
              className="text-[#FF4D5E] hover:text-[#E50920] font-semibold transition-colors cursor-pointer"
            >
              Join ₹9 Webinar
            </button>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          POPUP FORM MODAL:
          Mobile responsive with scrollable content if phone height is small
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-xl sm:rounded-2xl bg-[#0e0c0c] border border-white/15 p-4 sm:p-8 shadow-2xl text-left">
            {/* Ambient Red glow in modal */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E50920]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#E50920]/20 border border-[#E50920]/40 text-[#FF4D5E] text-[9.5px] font-bold uppercase tracking-wider mb-1.5">
                  <span>LIVE ZOOM MASTERCLASS • PASS ₹9</span>
                </div>

                <h3 className="font-display text-xl sm:text-3xl text-white uppercase tracking-tight mb-1">
                  Reserve Your Seat With Rahul Makwana
                </h3>
                <p className="text-[11px] sm:text-xs text-white/70 mb-4 sm:mb-5 leading-relaxed">
                  Enter your details below to receive the private Zoom link &amp; attendance pass directly on your WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
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
                      className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
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
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
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
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <div>
                      <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
                        Current Profession / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Software Engineer / Pune"
                        value={formData.profession}
                        onChange={(e) =>
                          setFormData({ ...formData, profession: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/15 rounded-lg px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-white/80 mb-1 font-semibold">
                        Interested Product
                      </label>
                      <select
                        value={formData.productInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            productInterest: e.target.value,
                          })
                        }
                        className="w-full bg-[#181515] border border-white/15 rounded-lg px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#E50920] transition-colors"
                      >
                        <option value="Spices & Food Commodities">Spices &amp; Food Commodities</option>
                        <option value="Textiles, Apparels & Garments">Textiles &amp; Garments</option>
                        <option value="Agricultural Produce">Agricultural Produce</option>
                        <option value="Engineering & Metal Goods">Engineering &amp; Metal Goods</option>
                        <option value="Handicrafts & Home Décor">Handicrafts &amp; Décor</option>
                        <option value="Still Exploring / Undecided">Still Exploring / Undecided</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-1.5 sm:pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg font-bold text-sm sm:text-base bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] shadow-lg shadow-red-900/40"
                    >
                      <span>Proceed to Pay ₹9 &amp; Get Zoom Pass</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/50 pt-0.5">
                    <Lock className="w-3 h-3 text-[#FFD86A]" />
                    <span>256-Bit SSL Encrypted • Instant Zoom Access Link</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-4 sm:py-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center mb-3 sm:mb-4 border border-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                <div className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-1">
                  Registration Received
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-1.5">
                  Welcome Aboard, {formData.name || "Future Exporter"}!
                </h3>

                <p className="text-xs sm:text-sm text-white/80 mb-4 max-w-sm mx-auto leading-relaxed">
                  Your registration for the ₹9 Live Webinar with Rahul Makwana is
                  confirmed. We have generated your entry credentials.
                </p>

                <div className="p-3 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 text-left mb-4 space-y-1 text-xs">
                  <div className="flex justify-between text-white/70">
                    <span>Attendee Name:</span>
                    <span className="font-semibold text-white">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>WhatsApp Number:</span>
                    <span className="font-semibold text-[#FFD86A]">{formData.whatsapp}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Selected Category:</span>
                    <span className="font-semibold text-white">{formData.productInterest}</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(
                      `Hello Rahul sir, I have registered for the ₹9 Export Webinar. My name is ${formData.name}. Please share the Zoom joining link!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/40"
                  >
                    <span>Receive Zoom Link on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>

                  <button
                    onClick={handleCloseModal}
                    className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer"
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
