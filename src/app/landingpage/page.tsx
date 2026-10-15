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
} from "lucide-react";
import { WEBINAR_CONTENT, MENTOR_CONTENT } from "@/data/siteData";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Live Countdown Timer to Sunday 1:00 PM IST
  const [timeLeft, setTimeLeft] = useState({
    days: "03",
    hours: "14",
    minutes: "28",
    seconds: "45",
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      // Next Sunday 1:00 PM IST (UTC+5:30)
      const target = new Date();
      const currentDay = now.getDay(); // 0 is Sunday
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

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#FFFFFF] font-sans antialiased selection:bg-[#E50920] selection:text-white relative overflow-x-hidden">
      {/* =========================================================================
          AMBIENT BACKGROUND GLOW (Nearo-inspired subtle lighting)
         ========================================================================= */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[650px] pointer-events-none opacity-30 blur-[130px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(229,9,32,0.45) 0%, rgba(255,216,106,0.12) 40%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* =========================================================================
          NAVBAR: Sleek, floating pill bar with refined contrast
         ========================================================================= */}
      <header className="sticky top-3 z-40 max-w-5xl mx-auto px-4">
        <div className="bg-[#121115]/85 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/80">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E50920] flex items-center justify-center text-white shadow-md shadow-red-950/60 shrink-0">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-display text-lg text-white tracking-wider uppercase block leading-none">
                EXPORT EASY HAI
              </span>
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#FF4D5E] font-semibold block font-mono">
                FOUNDER-LED EXPORT
              </span>
            </div>
          </div>

          {/* Primary Navbar Action */}
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white transition-all cursor-pointer shadow-lg shadow-red-950/50 active:scale-95 border border-white/15"
          >
            <span>Reserve Seat • {WEBINAR_CONTENT.details.fee}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION: Nearo-Inspired Balanced Centerpiece (Fits Above the Fold!)
         ========================================================================= */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-[#FFD86A] text-xs font-mono tracking-wide mb-6 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
          <span>LIVE 3-HOUR MASTERCLASS • THIS SUNDAY 1:00 PM IST</span>
        </div>

        {/* Headline: Clean, tight leading, highly readable, no oversized overflow */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] text-white mb-5 max-w-4xl mx-auto">
          Quit the 9-to-5. <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FFD86A]">
            Build an Export Business
          </span>{" "}
          <span className="text-[#E50920]">on Real Cargo.</span>
        </h1>

        {/* Subtitle: High legibility, 2 sentences, punchy */}
        <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
          A live, practical masterclass for working professionals who want to export Indian
          commodities to high-paying Gulf markets — with zero guesswork and complete fraud security.
        </p>

        {/* Nearo-Style Waitlist/CTA Pill Bar */}
        <div className="max-w-md mx-auto mb-5">
          <div className="p-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-xl flex items-center justify-between shadow-2xl">
            <span className="pl-4 text-xs text-white/60 font-mono hidden sm:inline">
              ⚡ Batch 48 • Only ₹699
            </span>
            <button
              onClick={handleOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#E50920] hover:bg-[#c9071b] text-white transition-all cursor-pointer shadow-lg shadow-red-950/60 active:scale-95"
            >
              <span>Reserve Your Seat Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60 font-mono mb-12">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFD86A]" />
            {WEBINAR_CONTENT.details.seats}
          </span>
          <span className="flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-[#FFD86A]" />
            Live Zoom + Direct Q&amp;A
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#FFD86A]" />
            Direct WhatsApp Entry Pass
          </span>
        </div>

        {/* =========================================================================
            HERO SHOWCASE CARD (Nearo-Style Product Mockup with Countdown Ticker)
           ========================================================================= */}
        <div className="relative max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-[#18161D]/90 to-[#0F0E12]/95 border border-white/15 p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {/* Subtle Accent Glow */}
          <div
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-72 h-24 bg-[#E50920]/30 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Countdown Timer Row (Nearo Style) */}
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block mb-3">
              LIVE SESSION COMMENCES IN
            </span>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-2xl sm:text-3xl text-white block">{timeLeft.days}</span>
                <span className="text-[9px] sm:text-[10px] text-white/50 uppercase font-mono tracking-wider block">DAYS</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-2xl sm:text-3xl text-white block">{timeLeft.hours}</span>
                <span className="text-[9px] sm:text-[10px] text-white/50 uppercase font-mono tracking-wider block">HOURS</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-2xl sm:text-3xl text-[#FFD86A] block">{timeLeft.minutes}</span>
                <span className="text-[9px] sm:text-[10px] text-[#FFD86A]/70 uppercase font-mono tracking-wider block">MINUTES</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <span className="font-display text-2xl sm:text-3xl text-[#FF4D5E] block">{timeLeft.seconds}</span>
                <span className="text-[9px] sm:text-[10px] text-[#FF4D5E]/70 uppercase font-mono tracking-wider block">SECONDS</span>
              </div>
            </div>
          </div>

          {/* Masterclass Pass Details Box */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-left">
            {/* Mentor Thumbnail & Info */}
            <div className="sm:col-span-5 flex items-center gap-3.5 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0 sm:pr-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#E50920] shadow-md">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana"
                  fill
                  sizes="56px"
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#FFD86A] font-bold block">
                  LEAD INSTRUCTOR
                </span>
                <h4 className="font-display text-xl text-white leading-tight">
                  {MENTOR_CONTENT.name}
                </h4>
                <p className="text-[11px] text-white/60">
                  14+ Years Ground Practitioner
                </p>
              </div>
            </div>

            {/* Quick Session Perks */}
            <div className="sm:col-span-7 grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0" />
                <span>Direct Gulf Buyer Matching</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0" />
                <span>3.5-Day Sea Transit Route</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0" />
                <span>Irrevocable LC &amp; Anti-Fraud</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920] shrink-0" />
                <span>Direct Live Q&amp;A on Zoom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: FEATURES DESIGNED FOR YOUR SUCCESS (Nearo Reference Layout)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase text-[#FF4D5E] font-bold tracking-wider mb-3">
            <span>CURRICULUM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Features designed for your success.
          </h2>
          <p className="text-sm sm:text-base text-white/60">
            Explore the actionable pillars engineered to help you evaluate products, secure buyers, and ship your first container safely.
          </p>
        </div>

        {/* 2x2 Clean Nearo-Style Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-[#E50920]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Direct Gulf Buyer Acquisition
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                Learn how to locate, filter, and pitch genuine importers across the UAE, Saudi Arabia,
                and Oman without paying costly broker cuts or falling for shell companies.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-white/60">
              <span className="px-2.5 py-1 rounded-lg bg-white/5">ICEGATE Port Records</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Gulf Chamber Directories</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Direct RFQ Templates</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-[#E50920]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FFD86A]/15 border border-[#FFD86A]/30 text-[#FFD86A] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                100% Scam-Proof Payment Terms
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                Structure bulletproof payment clauses using Irrevocable Letters of Credit (LC),
                Advance TT, and ECGC export credit risk coverage so your money is guaranteed.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-white/60">
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Letter of Credit (LC)</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Advance TT Formulas</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">ECGC Default Cover</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-[#E50920]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Rapid 3.5-Day Sea Transit Logistics
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                Understand how fast shipping routes work from Nhava Sheva &amp; Mundra to Jebel Ali &amp; Dammam,
                including customs clearance, CHA handling, and container booking.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-white/60">
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Mundra / JNPT Corridors</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Shipping Bill Protocols</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Reefer vs Dry Containers</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 hover:border-[#E50920]/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FF4D5E]/15 border border-[#FF4D5E]/30 text-[#FF4D5E] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                APMC Sourcing &amp; Direct Margins
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                Source export-quality spices, agricultural produce, textiles, and ceramics directly
                from Indian producer clusters without owning a single factory or production unit.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-[11px] font-mono text-white/60">
              <span className="px-2.5 py-1 rounded-lg bg-white/5">APMC Mandi Procurement</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Phytosanitary &amp; Lab Tests</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5">Export Packaging Norms</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: FOUNDER — RAHUL MAKWANA (High-Trust Editorial Profile)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Rahul Makwana Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#121014] group">
              <Image
                src="/images/mentor-rahul.jpg"
                alt="Rahul Makwana - Founder"
                fill
                sizes="340px"
                className="object-cover object-top filter contrast-[1.05]"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-2.5 py-1 rounded-full bg-[#E50920] text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-1.5 shadow-md">
                  FOUNDER &amp; PRACTITIONER
                </span>
                <h3 className="font-display text-3xl text-white uppercase tracking-tight">
                  {MENTOR_CONTENT.name}
                </h3>
                <p className="text-xs text-[#FFD86A] font-mono">
                  {MENTOR_CONTENT.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase text-[#FFD86A] font-bold tracking-wider">
              <span>MEET YOUR MENTOR</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              &ldquo;The harbor only cares about cargo cleared and contracts honored.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              {MENTOR_CONTENT.bio1}
            </p>

            <p className="text-sm text-white/60 leading-relaxed">
              {MENTOR_CONTENT.bio2} Most export training is taught by academics who have never
              stood in front of a shipping container or resolved a customs query at midnight.
              Rahul&apos;s masterclass is built on live trade realities.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2 text-center font-mono">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="font-display text-2xl text-[#FFD86A] block">14+ YRS</span>
                <span className="text-[10px] text-white/50 uppercase block">Trade Experience</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="font-display text-2xl text-[#FF4D5E] block">GULF</span>
                <span className="text-[10px] text-white/50 uppercase block">Direct Corridors</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="font-display text-2xl text-white block">ZERO</span>
                <span className="text-[10px] text-white/50 uppercase block">Scam Tolerance</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleOpenModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/15 text-white transition-all cursor-pointer border border-white/15"
              >
                <span>Ask Rahul Your Doubts Live This Sunday</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: THE OFFICIAL WEBINAR PASS (Nearo-Style Final Conversion Pass)
         ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto border-t border-white/10">
        <div className="rounded-3xl bg-gradient-to-b from-[#181113] to-[#0E0C0D] border-2 border-[#E50920] p-6 sm:p-12 shadow-[0_0_80px_rgba(229,9,32,0.3)]">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#E50920] text-white text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-lg shadow-red-950/50">
              OFFICIAL WEBINAR REGISTRATION PASS
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              {WEBINAR_CONTENT.subhead}
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {WEBINAR_CONTENT.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-y border-white/10 py-5 mb-8">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">REGISTRATION FEE</span>
              <span className="font-display text-3xl text-[#E50920] font-bold">{WEBINAR_CONTENT.details.fee}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">SCHEDULE</span>
              <span className="font-bold text-xs sm:text-sm text-white block mt-1">{WEBINAR_CONTENT.details.schedule}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">PLATFORM</span>
              <span className="font-bold text-xs sm:text-sm text-white block mt-1">{WEBINAR_CONTENT.details.platform}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">LANGUAGE &amp; SEATS</span>
              <span className="font-bold text-xs sm:text-sm text-white block mt-1">{WEBINAR_CONTENT.details.language}</span>
              <span className="text-[10px] text-white/50 block font-mono">Max 50</span>
            </div>
          </div>

          {/* What You Will Learn (8 Points) */}
          <div className="mb-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-3.5">
              In this live session, you will learn:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {WEBINAR_CONTENT.learnList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 text-xs text-white/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actionable Tools Provided (4 Points) */}
          <div className="mb-8 pt-4 border-t border-white/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFD86A] font-bold mb-3">
              Actionable tools provided to all attendees:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {WEBINAR_CONTENT.receiveList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white font-medium text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* The Big Conversion CTA */}
          <div className="text-center pt-2">
            <button
              onClick={handleOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base sm:text-lg uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_40px_rgba(229,9,32,0.6)] hover:shadow-[0_15px_50px_rgba(229,9,32,0.8)] transition-all cursor-pointer active:scale-98 border border-[#FF6B7A]"
            >
              <span>{WEBINAR_CONTENT.primaryCTA}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-3 text-xs text-white/60 flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#FFD86A]" />
              <span>Instant Zoom pass delivered directly to your WhatsApp upon registration.</span>
            </div>
          </div>

          {/* Verbatim Disclaimers */}
          <div className="mt-8 p-4 rounded-2xl bg-black/60 border border-white/10 text-xs text-white/70 leading-relaxed space-y-2">
            <p>
              <strong className="text-white font-semibold">Payment and Access Note: </strong>
              {WEBINAR_CONTENT.paymentNote}
            </p>
            <p>
              <strong className="text-white font-semibold">Refund Policy: </strong>
              {WEBINAR_CONTENT.refundNote}
            </p>
            <p className="text-[11px] text-white/50 italic border-t border-white/5 pt-2">
              <strong className="text-white font-semibold not-italic">Disclaimer: </strong>
              {WEBINAR_CONTENT.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY MOBILE CONVERSION BAR
         ========================================================================= */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-40 bg-[#121115]/95 border border-[#E50920]/60 p-2.5 rounded-full backdrop-blur-xl flex items-center justify-between shadow-2xl">
        <div className="leading-tight pl-3">
          <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
            <span>{WEBINAR_CONTENT.details.fee} Masterclass Pass</span>
          </div>
          <div className="text-[9.5px] text-[#FFD86A]">{WEBINAR_CONTENT.details.schedule}</div>
        </div>

        <button
          onClick={handleOpenModal}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-md shadow-red-950/60 cursor-pointer active:scale-95"
        >
          <span>Reserve ₹699</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* =========================================================================
          FOOTER
         ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#070709] py-8 text-center text-xs text-white/50 relative z-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
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
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-[#111014] border border-white/20 p-6 sm:p-8 shadow-2xl text-left">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E50920]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E50920]/20 border border-[#E50920]/40 text-[#FF4D5E] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                  <span>LIVE MASTERCLASS • FEE: {WEBINAR_CONTENT.details.fee}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
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
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
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
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
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
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
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
                        className="w-full bg-white/5 border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
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
                        className="w-full bg-[#181519] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50920] transition-colors"
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
                      className="w-full py-3.5 px-6 rounded-full font-bold text-base bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl shadow-red-950/60"
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

                <h3 className="text-2xl font-bold text-white mb-2">
                  Welcome Aboard, {formData.name || "Future Exporter"}!
                </h3>

                <p className="text-sm text-white/80 mb-6 max-w-sm mx-auto leading-relaxed">
                  Your seat for the {WEBINAR_CONTENT.subhead} ({WEBINAR_CONTENT.details.schedule}) with Rahul Makwana is confirmed.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left mb-6 space-y-1.5 text-xs">
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
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/50"
                  >
                    <span>Receive Zoom Link on WhatsApp</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleCloseModal}
                    className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
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
