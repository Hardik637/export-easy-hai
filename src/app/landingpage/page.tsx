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
  Users,
  Award,
  Zap,
  Globe2,
  FileCheck,
  BookOpen,
  Rocket,
  UserCheck,
  Layers,
  TrendingUp,
  Target,
  ShieldAlert,
  GraduationCap,
  AlertCircle,
  Phone,
  Mail,
  User,
  Radio,
  Flame,
  Crosshair,
  BadgeAlert,
} from "lucide-react";
import { WEBINAR_CONTENT, MENTOR_CONTENT } from "@/data/siteData";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Live countdown to Sunday 1:00 PM IST
  const [timeLeft, setTimeLeft] = useState({
    days: "03",
    hours: "14",
    minutes: "28",
    seconds: "45",
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const target = new Date();
      const currentDay = now.getDay();
      const daysUntilSunday = currentDay === 0 && now.getHours() < 13 ? 0 : (7 - currentDay) % 7 || 7;
      target.setDate(now.getDate() + daysUntilSunday);
      target.setHours(13, 0, 0, 0);

      const diff = Math.max(0, target.getTime() - now.getTime());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToWebinar = () => {
    const el = document.getElementById("webinar-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#030304] text-[#FFFFFF] font-sans antialiased selection:bg-[#E50920] selection:text-white relative overflow-x-hidden">
      {/* =========================================================================
          SECTION 1: HERO — AGGRESSIVE CINEMATIC PORT WITH GLOWING BLOOD MOON
         ========================================================================= */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden border-b-2 border-[#E50920]/40 shadow-[0_10px_40px_rgba(229,9,32,0.25)]">
        {/* Full-Bleed High-Contrast Port Background */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source
              media="(max-width: 768px)"
              srcSet="/images/hero-blood-moon-mobile.jpg"
              type="image/jpeg"
            />
            <source
              media="(min-width: 769px)"
              srcSet="/images/hero-blood-moon.jpg"
              type="image/jpeg"
            />
            <img
              src="/images/hero-blood-moon.jpg"
              alt="Cargo port at night with glowing crimson blood moon and shipping cranes"
              className="w-full h-full object-cover object-[70%_center] md:object-center filter brightness-[0.9] contrast-[1.35] saturate-[1.3]"
              loading="eager"
            />
          </picture>

          {/* RADIANT CRIMSON MOON GLOW (Centered over the Blood Moon) */}
          <div
            className="absolute top-[6%] left-[48%] md:left-[41%] -translate-x-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full pointer-events-none mix-blend-screen opacity-90 animate-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(255,30,45,0.7) 0%, rgba(229,9,32,0.4) 45%, transparent 75%)",
            }}
          />

          {/* Directional Vignette (Dark on left for text, completely open on moon & harbor) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(3,3,4,0.96) 0%, rgba(3,3,4,0.88) 32%, rgba(3,3,4,0.4) 55%, rgba(3,3,4,0.15) 80%, rgba(3,3,4,0.6) 100%)",
            }}
          />

          {/* Bottom ground bleed into next section */}
          <div
            className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(3,3,4,0.85) 60%, #030304 100%)",
            }}
          />

          {/* High-Tech Tactical Grid Texture */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ff2233 1px, transparent 1px), linear-gradient(to bottom, #ff2233 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        {/* Top Header / Navigation */}
        <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#E50920] flex items-center justify-center text-white shadow-[0_0_20px_rgba(229,9,32,0.7)] shrink-0 border border-white/20">
              <Compass className="w-5 h-5 text-white animate-spin-slow" />
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl text-white tracking-wider uppercase block leading-none drop-shadow-md">
                EXPORT EASY HAI
              </span>
              <span className="text-[9.5px] tracking-[0.3em] uppercase text-[#FF4D5E] font-bold block font-mono mt-0.5">
                EXPLORE. LEARN. EXPORT.
              </span>
            </div>
          </div>

          {/* High-Alert Live Webinar Badge */}
          <button
            onClick={scrollToWebinar}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-black/75 hover:bg-[#E50920] text-white border-2 border-[#E50920] backdrop-blur-md transition-all cursor-pointer shadow-[0_0_20px_rgba(229,9,32,0.5)] group active:scale-95"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50920] group-hover:bg-white animate-ping" />
            <span>LIVE WEBINAR • ₹699</span>
          </button>
        </header>

        {/* Dynamic HUD Floating Telemetry Markers (Desktop) */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none z-20 hidden xl:block">
          {/* Top-Right HUD Badge */}
          <div className="absolute top-24 right-8 px-3.5 py-1.5 rounded-lg bg-black/75 border border-[#E50920]/60 text-[11px] font-mono text-[#FFD86A] backdrop-blur-md shadow-2xl flex items-center gap-2">
            <Ship className="w-3.5 h-3.5 text-[#E50920]" />
            <span>FASTEST SEA LANE: 3.5 DAYS TO JEBEL ALI</span>
          </div>

          {/* Mid-Right Radar Pill */}
          <div className="absolute top-44 right-4 px-3.5 py-1.5 rounded-lg bg-black/75 border border-emerald-500/50 text-[11px] font-mono text-emerald-400 backdrop-blur-md shadow-2xl flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% IRREVOCABLE LC / ESCROW VERIFIED</span>
          </div>

          {/* Bottom-Right Trade Index Pill */}
          <div className="absolute bottom-36 right-8 px-3.5 py-1.5 rounded-lg bg-black/75 border border-white/20 text-[11px] font-mono text-white/90 backdrop-blur-md shadow-2xl flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-[#E50920]" />
            <span>GULF IMPORT DEMAND: +34% HIGH TARIFF FREE</span>
          </div>
        </div>

        {/* Hero Main Content (Aggressive, Heavy Typography, High-Voltage) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 my-auto flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl text-left">
            {/* Urgency Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded bg-[#E50920]/25 border border-[#E50920] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(229,9,32,0.4)]">
              <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
              <span>FOR AMBITIOUS 9-TO-5 PROFESSIONALS</span>
            </div>

            {/* Massive Aggressive Condensed Headline */}
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[104px] uppercase tracking-tight leading-[0.90] text-white mb-6 drop-shadow-[0_12px_35px_rgba(0,0,0,0.95)]">
              QUIT 9 TO 5. <br />
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">BUILD AN</span> <br />
              <span className="text-[#E50920] drop-shadow-[0_0_35px_rgba(229,9,32,0.9)]">
                EXPORT BUSINESS.
              </span>
            </h1>

            {/* Sharp, Punchy Supporting Copy */}
            <p className="text-base sm:text-xl text-white/90 max-w-xl leading-relaxed mb-7 drop-shadow-md font-medium">
              A live, unfiltered masterclass by 14-year on-ground exporter Rahul Makwana.
              Learn how to dispatch real Indian cargo to high-paying Gulf markets with zero
              middleman scams and ironclad payment security.
            </p>

            {/* 4 Hard-Hitting Value Props Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mb-8">
              <div className="p-2.5 rounded-lg bg-black/65 border border-white/15 backdrop-blur-md flex items-center gap-2.5">
                <BookOpen className="w-4 h-4 text-[#FFD86A] shrink-0" />
                <span className="text-xs font-bold text-white leading-tight">Practical Guidance</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/65 border border-[#E50920]/50 backdrop-blur-md flex items-center gap-2.5">
                <Rocket className="w-4 h-4 text-[#E50920] shrink-0" />
                <span className="text-xs font-bold text-white leading-tight">Step-by-Step Roadmap</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/65 border border-white/15 backdrop-blur-md flex items-center gap-2.5">
                <Ship className="w-4 h-4 text-[#FF4D5E] shrink-0" />
                <span className="text-xs font-bold text-white leading-tight">India-to-Gulf Focus</span>
              </div>

              <div className="p-2.5 rounded-lg bg-black/65 border border-emerald-500/40 backdrop-blur-md flex items-center gap-2.5">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white leading-tight">Beginner Friendly</span>
              </div>
            </div>

            {/* Aggressive CTA Block with High-Urgency Seat Ticker */}
            <div className="space-y-4 max-w-xl">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleOpenModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl font-display text-2xl uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_0_45px_rgba(229,9,32,0.85)] hover:shadow-[0_0_70px_rgba(229,9,32,1)] transition-all cursor-pointer active:scale-95 border-2 border-[#FF6B7A] group"
                >
                  <span>Reserve Your ₹699 Webinar Seat</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#FFD86A] bg-black/70 px-4 py-3 rounded-xl border border-white/15 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-[#FFD86A]" />
                  <span>{WEBINAR_CONTENT.details.seats}</span>
                </div>
              </div>

              {/* Urgency Progress Bar */}
              <div className="p-3 rounded-xl bg-black/75 border border-[#E50920]/40 backdrop-blur-md max-w-lg">
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className="text-white/80 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#E50920] animate-ping" />
                    BATCH 48 REGISTRATION STATUS:
                  </span>
                  <span className="text-[#E50920] font-bold">42 / 50 SEATS BOOKED (84%)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#E50920] via-orange-500 to-[#FFD86A] rounded-full w-[84%]" />
                </div>
              </div>

              {/* Schedule Info */}
              <div className="flex items-center gap-4 text-xs font-mono text-white/70 pt-1">
                <div className="flex items-center gap-1.5 text-white/95 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>{WEBINAR_CONTENT.details.schedule}</span>
                </div>
                <span className="text-white/30">|</span>
                <div className="flex items-center gap-1.5 text-[#FFD86A] font-semibold">
                  <Video className="w-3.5 h-3.5" />
                  <span>Live 3-Hour Session on Zoom</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Handwritten Watermark */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 pb-6 flex justify-end">
          <div className="text-right">
            <span className="font-script text-3xl sm:text-4xl text-white/75 drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] block leading-none">
              From India <br />
              <span className="text-[#FFD86A]">to the Gulf</span>
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FOUNDER — RAHUL MAKWANA (UNFILTERED PRACTITIONER CREDIBILITY)
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#070609] border-b-2 border-[#E50920]/30 overflow-hidden">
        {/* Ambient Red Aura */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#E50920]/15 rounded-full blur-[170px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Aggressive Practitioner Authority */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.25em]">
                <span className="w-6 h-[2px] bg-[#E50920]" />
                <span>WHO AM I</span>
              </div>

              <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight text-white leading-[0.92]">
                PRACTICAL EXPERIENCE. <br />
                <span className="text-[#E50920] drop-shadow-[0_0_25px_rgba(229,9,32,0.6)]">
                  REAL GUIDANCE.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                I help 9-to-5 professionals and beginners understand how to export from India
                to the Gulf with practical, step-by-step guidance, based on real-world experience.
              </p>

              {/* 3 Value Pillars */}
              <div className="space-y-4 pt-2">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#E50920] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-white block font-bold">Mentor with export experience</strong>
                    <span className="text-xs text-white/70">Real background in international shipments and supplier clearance.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FFD86A] text-black flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-white block font-bold">Simplifying complex processes</strong>
                    <span className="text-xs text-white/70">Demystifying ICEGATE customs, HS codes, and bank AD code registration.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 text-black flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-white block font-bold">Helping beginners start with clarity</strong>
                    <span className="text-xs text-white/70">Guiding you to avoid expensive rookie errors and scam payment terms.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Rahul Makwana Portrait with Glowing Border */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
              <div className="w-full text-center lg:text-left mb-2 pl-4">
                <span className="font-script text-3xl sm:text-4xl text-[#FFD86A] block leading-none drop-shadow-md">
                  &ldquo;Same Knowledge. <br />
                  Simpler Path.&rdquo;
                </span>
              </div>

              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(229,9,32,0.45)] border-2 border-[#E50920] bg-[#121115]">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Founder & Export Mentor"
                  fill
                  sizes="(max-width: 1024px) 360px, 420px"
                  className="object-cover object-top filter contrast-[1.08] saturate-[1.05]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-center">
                  <span className="font-display text-3xl text-white block uppercase tracking-tight leading-none">
                    {MENTOR_CONTENT.name}
                  </span>
                  <span className="text-xs font-mono text-[#FFD86A] uppercase tracking-wider block mt-1 font-semibold">
                    {MENTOR_CONTENT.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Authority Card */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-black/75 border-2 border-[#E50920]/60 p-6 sm:p-7 backdrop-blur-xl shadow-2xl relative">
                <div className="w-8 h-1 bg-[#E50920] mb-4 shadow-[0_0_10px_#E50920]" />

                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF4D5E] font-bold block mb-1">
                  FOUNDER
                </span>

                <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-4">
                  {MENTOR_CONTENT.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/85 leading-relaxed mb-4">
                  Helping 9-to-5 professionals and beginners understand exports with real
                  experience and practical guidance.
                </p>

                <p className="text-xs text-white/65 leading-relaxed border-t border-white/10 pt-4">
                  I&apos;ve been working in the export and global trade space, and through
                  Export Easy Hai, I focus on making the export process simple, practical
                  and understandable for beginners.
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 text-center">
                  <span className="text-[11px] font-mono text-[#FFD86A] uppercase font-bold block">
                    ✓ 14+ YEARS GROUND TRADE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MISSION — INDIA-TO-GULF MARITIME TRADE CORRIDOR
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-[#050406] border-b-2 border-[#E50920]/30 overflow-hidden">
        {/* Mission Dusk Port Photography Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mission-gulf-port.jpg"
            alt="International container port connecting India and Arabian Gulf"
            fill
            sizes="100vw"
            className="object-cover object-bottom filter brightness-[0.55] contrast-[1.3] saturate-[1.2]"
            unoptimized
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(5,4,6,0.92) 0%, rgba(5,4,6,0.7) 40%, rgba(5,4,6,0.95) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex justify-end mb-4">
            <span className="font-script text-3xl sm:text-4xl text-[#FFD86A] drop-shadow-lg">
              Real Markets. Real Opportunities.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Aggressive Mission */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.25em]">
                <span className="w-6 h-[2px] bg-[#E50920]" />
                <span>OUR MISSION</span>
              </div>

              <h2 className="font-display text-5xl sm:text-7xl uppercase tracking-tight text-white leading-[0.92]">
                MAKE EXPORTING <br />
                <span className="text-[#E50920] drop-shadow-[0_0_25px_rgba(229,9,32,0.6)]">
                  SIMPLE AND PRACTICAL.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                Export Easy Hai exists to help more Indians understand real export opportunities,
                avoid costly mistakes, and take the right steps with clarity and confidence.
              </p>

              {/* 3 Pillars */}
              <div className="space-y-4 pt-2">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#E50920] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-white block font-bold">Clear and practical guidance</strong>
                    <span className="text-xs text-white/70">Grounded advice focused on action rather than textbook theories.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#FFD86A] text-black flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-white block font-bold">Focus on real opportunities</strong>
                    <span className="text-xs text-white/70">Evaluate products with genuine buying power in UAE and Saudi Arabia.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500 text-black flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-sm text-white block font-bold">Awareness about compliance and risks</strong>
                    <span className="text-xs text-white/70">Understanding international terms (Incoterms, LC, ECGC) to protect your funds.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Tactical Radar Map (High-Tech HUD Command Style) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-black/85 border-2 border-[#E50920]/60 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(229,9,32,0.35)] relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-mono mb-4 border-b border-white/10 pb-3">
                  <span className="text-[#FFD86A] font-bold flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#E50920] animate-pulse" />
                    TACTICAL MARITIME RADAR: ARABIAN SEA
                  </span>
                  <span className="text-emerald-400 font-bold">TRANSIT: 3.5 DAYS</span>
                </div>

                {/* Dynamic SVG Tactical Radar Map */}
                <div className="relative w-full aspect-[16/9] flex items-center justify-center">
                  <svg
                    viewBox="0 0 700 360"
                    className="w-full h-full select-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="700" height="360" fill="#06090e" rx="14" />

                    {/* Radar Concentric Rings */}
                    <circle cx="520" cy="220" r="100" stroke="#E50920" strokeOpacity="0.12" strokeWidth="1" />
                    <circle cx="520" cy="220" r="200" stroke="#E50920" strokeOpacity="0.08" strokeWidth="1" />
                    <circle cx="520" cy="220" r="320" stroke="#E50920" strokeOpacity="0.05" strokeWidth="1" />

                    {/* Laser Arcs from India to Gulf */}
                    <path
                      d="M 520 220 Q 340 120 160 110"
                      stroke="#E50920"
                      strokeWidth="2.5"
                      strokeDasharray="6 4"
                      strokeOpacity="0.85"
                    />
                    <path
                      d="M 520 220 Q 360 160 210 150"
                      stroke="#E50920"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      strokeOpacity="0.75"
                    />
                    <path
                      d="M 520 220 Q 370 190 230 195"
                      stroke="#FFD86A"
                      strokeWidth="3.5"
                      strokeDasharray="8 4"
                    />
                    <path
                      d="M 520 220 Q 400 200 280 205"
                      stroke="#E50920"
                      strokeWidth="4"
                    />
                    <path
                      d="M 520 220 Q 430 240 330 250"
                      stroke="#E50920"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      strokeOpacity="0.75"
                    />

                    {/* Origin: INDIA */}
                    <circle cx="520" cy="220" r="18" fill="#E50920" fillOpacity="0.3" className="animate-ping" />
                    <circle cx="520" cy="220" r="8" fill="#E50920" />
                    <text x="542" y="222" fill="#ffffff" fontSize="15" fontFamily="monospace" fontWeight="bold">
                      INDIA
                    </text>
                    <text x="542" y="238" fill="#FFD86A" fontSize="10" fontFamily="monospace">
                      Nhava Sheva / Mundra
                    </text>

                    {/* Gulf Hubs */}
                    <circle cx="160" cy="110" r="5" fill="#FFD86A" />
                    <text x="110" y="100" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      KUWAIT
                    </text>

                    <circle cx="210" cy="150" r="5" fill="#FFD86A" />
                    <text x="155" y="145" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      BAHRAIN
                    </text>

                    <circle cx="230" cy="195" r="7" fill="#FFD86A" />
                    <text x="130" y="200" fill="#FFD86A" fontSize="13" fontFamily="monospace" fontWeight="bold">
                      SAUDI ARABIA
                    </text>

                    <circle cx="280" cy="205" r="9" fill="#E50920" />
                    <text x="270" y="232" fill="#ffffff" fontSize="14" fontFamily="monospace" fontWeight="bold">
                      UAE (DUBAI)
                    </text>

                    <circle cx="330" cy="250" r="5" fill="#FFD86A" />
                    <text x="345" y="255" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      OMAN
                    </text>
                  </svg>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-white/70 mt-3 pt-3 border-t border-white/10">
                  <span>DISPATCH: DAILY CONTAINER VESSEL SAILINGS</span>
                  <span className="text-[#FFD86A] font-bold">DUTY-FREE RE-EXPORT HUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WEBINAR & REGISTRATION — VIP CARGO PASS (HIGH AGGRESSION)
         ========================================================================= */}
      <section id="webinar-section" className="relative py-24 sm:py-32 bg-[#030304] overflow-hidden">
        {/* Webinar Atmospheric Night Port Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/webinar-port-night.jpg"
            alt="Cargo terminal at night with red floodlights and reflective tarmac"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.7] contrast-[1.35] saturate-[1.3]"
            unoptimized
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(3,3,4,0.92) 0%, rgba(3,3,4,0.75) 50%, rgba(3,3,4,0.9) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Aggressive Call to Arms */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.25em]">
                <span className="w-6 h-[2px] bg-[#E50920]" />
                <span>TAKE THE FIRST STEP</span>
              </div>

              <h2 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-[0.90]">
                JOIN THE <br />
                <span className="text-[#E50920] drop-shadow-[0_0_35px_rgba(229,9,32,0.9)]">
                  LIVE WEBINAR
                </span>
              </h2>

              <p className="text-base sm:text-xl text-white/90 max-w-lg leading-relaxed font-normal">
                Get clear, practical guidance on how to start your export journey from India to the Gulf.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="p-3.5 rounded-xl bg-black/75 border border-white/15 flex items-center gap-3 text-xs text-white/95 font-semibold">
                  <Video className="w-4 h-4 text-[#E50920] shrink-0" />
                  <span>Live online webinar</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/75 border border-white/15 flex items-center gap-3 text-xs text-white/95 font-semibold">
                  <GraduationCap className="w-4 h-4 text-[#FFD86A] shrink-0" />
                  <span>Hindi/English training</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/75 border border-white/15 flex items-center gap-3 text-xs text-white/95 font-semibold">
                  <Users className="w-4 h-4 text-[#FF4D5E] shrink-0" />
                  <span>Limited seats (50 per session)</span>
                </div>

                <div className="p-3.5 rounded-xl bg-black/75 border border-white/15 flex items-center gap-3 text-xs text-white/75 font-semibold">
                  <AlertCircle className="w-4 h-4 text-white/50 shrink-0" />
                  <span>Not included: recording</span>
                </div>
              </div>

              {/* Red CTA Button */}
              <div>
                <button
                  onClick={handleOpenModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl font-display text-2xl uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_0_45px_rgba(229,9,32,0.85)] hover:shadow-[0_0_70px_rgba(229,9,32,1)] transition-all cursor-pointer active:scale-95 border-2 border-[#FF6B7A]"
                >
                  <span>Reserve Your ₹699 Webinar Seat</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Schedule Info */}
              <div className="flex items-center gap-4 text-xs font-mono text-white/70">
                <div className="flex items-center gap-1.5 text-white/95 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>{WEBINAR_CONTENT.details.schedule}</span>
                </div>
                <span className="text-white/30">|</span>
                <div className="flex items-center gap-1.5 text-[#FFD86A] font-semibold">
                  <Video className="w-3.5 h-3.5" />
                  <span>Live on {WEBINAR_CONTENT.details.platform}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded VIP High-Voltage Booking Pass Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-3xl bg-[#0B090E]/95 backdrop-blur-2xl border-2 border-[#E50920] shadow-[0_0_80px_rgba(229,9,32,0.65)] p-6 sm:p-8 text-left relative overflow-hidden">
                {/* Glowing Top Corner Flare */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#E50920]/30 rounded-full blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-start gap-3.5 mb-5 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#E50920] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[0_0_20px_#E50920] border border-white/20">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                      Reserve Your <br />
                      <span className="text-[#E50920] drop-shadow-[0_0_15px_rgba(229,9,32,0.8)]">
                        ₹699 Webinar Seat
                      </span>
                    </h3>
                    <p className="text-xs text-white/70 mt-1 font-mono">
                      Fill in your details to join the live webinar.
                    </p>
                  </div>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 relative z-10">
                    {/* Name Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/75 border border-white/20 focus:border-[#E50920] focus:ring-2 focus:ring-[#E50920]/40 rounded-xl pl-10 pr-3.5 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/75 border border-white/20 focus:border-[#E50920] focus:ring-2 focus:ring-[#E50920]/40 rounded-xl pl-10 pr-3.5 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number (WhatsApp)"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/75 border border-white/20 focus:border-[#E50920] focus:ring-2 focus:ring-[#E50920]/40 rounded-xl pl-10 pr-3.5 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-xl font-display text-xl uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-[0_0_35px_rgba(229,9,32,0.8)] border border-red-400"
                      >
                        <span>Reserve My Seat for ₹699</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Verbatim Disclaimers */}
                    <div className="text-[11px] text-white/50 leading-relaxed pt-2 space-y-2 border-t border-white/10 mt-3 font-sans">
                      <p>
                        <strong className="text-white/80">Payment and access note: </strong>
                        {WEBINAR_CONTENT.paymentNote}
                      </p>
                      <p>
                        <strong className="text-white/80">Refund note: </strong>
                        {WEBINAR_CONTENT.refundNote}
                      </p>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-6 relative z-10">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3 border border-emerald-500/30">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <h4 className="font-display text-2xl text-white uppercase tracking-tight mb-1">
                      Registration Received!
                    </h4>

                    <p className="text-xs text-white/80 mb-5 leading-relaxed">
                      Thank you, {formData.name}. Click below to receive your Zoom link and joining instructions on WhatsApp.
                    </p>

                    <a
                      href={`https://wa.me/919999999999?text=${encodeURIComponent(
                        `Hello Rahul sir, I have registered for the India-to-Gulf Export Webinar (₹699). My name is ${formData.name}. Please share the Zoom joining instructions!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg"
                    >
                      <span>Receive Zoom Link on WhatsApp</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY MOBILE CONVERSION BAR
         ========================================================================= */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-50 bg-[#0d0b0f]/95 border-2 border-[#E50920] p-2.5 rounded-full backdrop-blur-xl flex items-center justify-between shadow-[0_0_30px_rgba(229,9,32,0.5)]">
        <div className="leading-tight pl-3">
          <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
            <span>₹699 Webinar Seat</span>
          </div>
          <div className="text-[9.5px] text-[#FFD86A] font-mono">{WEBINAR_CONTENT.details.schedule}</div>
        </div>

        <button
          onClick={handleOpenModal}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-md shadow-red-950/60 cursor-pointer active:scale-95 border border-red-400"
        >
          <span>Reserve ₹699</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* =========================================================================
          FOOTER
         ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#020203] py-8 text-center text-xs text-white/50 relative z-10">
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
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0D0B0F] border-2 border-[#E50920] p-6 sm:p-8 shadow-[0_0_80px_rgba(229,9,32,0.7)] text-left">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#E50920] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[0_0_20px_#E50920] border border-white/20">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                      Reserve Your <br />
                      <span className="text-[#E50920]">₹699 Webinar Seat</span>
                    </h3>
                    <p className="text-xs text-white/60 mt-1 font-mono">
                      {WEBINAR_CONTENT.details.schedule} • Live with Rahul Makwana.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/75 border border-white/20 focus:border-[#E50920] focus:ring-2 focus:ring-[#E50920]/40 rounded-xl pl-10 pr-3.5 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/75 border border-white/20 focus:border-[#E50920] focus:ring-2 focus:ring-[#E50920]/40 rounded-xl pl-10 pr-3.5 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number (WhatsApp)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/75 border border-white/20 focus:border-[#E50920] focus:ring-2 focus:ring-[#E50920]/40 rounded-xl pl-10 pr-3.5 py-3.5 text-sm text-white placeholder-white/40 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-display text-xl uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-[0_0_35px_rgba(229,9,32,0.8)] border border-red-400"
                    >
                      <span>Reserve My Seat for ₹699</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="text-[11px] text-white/50 leading-relaxed pt-2 space-y-2 border-t border-white/10 mt-3 font-sans">
                    <p>
                      <strong className="text-white/80">Payment and access note: </strong>
                      {WEBINAR_CONTENT.paymentNote}
                    </p>
                    <p>
                      <strong className="text-white/80">Refund note: </strong>
                      {WEBINAR_CONTENT.refundNote}
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3 border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h4 className="font-display text-2xl text-white uppercase tracking-tight mb-1">
                  Registration Received!
                </h4>

                <p className="text-xs text-white/80 mb-5 leading-relaxed">
                  Thank you, {formData.name}. Click below to receive your Zoom link and joining instructions on WhatsApp.
                </p>

                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(
                    `Hello Rahul sir, I have registered for the India-to-Gulf Export Webinar (₹699). My name is ${formData.name}. Please share the Zoom joining instructions!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg"
                >
                  <span>Receive Zoom Link on WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
