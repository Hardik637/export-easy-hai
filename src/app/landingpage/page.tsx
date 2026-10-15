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
  ChevronRight,
  FileCheck,
  Package,
  TrendingUp,
  Anchor,
  Globe2,
} from "lucide-react";
import { WEBINAR_CONTENT, MENTOR_CONTENT } from "@/data/siteData";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"corridors" | "products">("corridors");

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

  const scrollToCorridor = () => {
    const el = document.getElementById("trade-corridor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#FFFFFF] font-sans antialiased selection:bg-[#E50920] selection:text-white relative overflow-x-hidden">
      {/* =========================================================================
          NAVBAR: Sleek, Floating Desktop Bar
         ========================================================================= */}
      <header className="sticky top-3 sm:top-4 z-50 max-w-6xl mx-auto px-4">
        <div className="bg-[#0b0b0f]/85 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/80">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#E50920] flex items-center justify-center text-white shadow-lg shadow-red-950/70 shrink-0">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl text-white tracking-wider uppercase block leading-none">
                EXPORT EASY HAI
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-[#FF4D5E] font-semibold block font-mono">
                INDIA ➔ GULF TRADE CORRIDOR
              </span>
            </div>
          </div>

          {/* Quick Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase text-white/60">
            <a href="#how-it-works" className="hover:text-white transition-colors">4-Step Execution</a>
            <a href="#trade-corridor" className="hover:text-white transition-colors">Gulf Corridors</a>
            <a href="#mentor" className="hover:text-white transition-colors">Rahul Makwana</a>
            <a href="#webinar-pass" className="hover:text-white transition-colors">Webinar Pass</a>
          </nav>

          {/* Primary Action Button */}
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white transition-all cursor-pointer shadow-lg shadow-red-950/60 active:scale-95 border border-white/15"
          >
            <span>Reserve Seat • {WEBINAR_CONTENT.details.fee}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* =========================================================================
          SECTION 1: HERO — AGGRESSIVE, CINEMATIC PORT BACKGROUND & DYNAMIC TAGS
         ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6">
        {/* Crazy Cinematic Background Canvas */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full block">
            <source
              media="(max-width: 1023px)"
              srcSet="/images/hero-blood-moon.jpg"
              type="image/jpeg"
            />
            <source
              media="(min-width: 1024px)"
              srcSet="/images/hero-blood-moon.jpg"
              type="image/jpeg"
            />
            <img
              src="/images/hero-blood-moon.jpg"
              alt="Night port with blood moon and cargo containers"
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.25] saturate-[1.1]"
              loading="eager"
            />
          </picture>

          {/* Dark Radial Vignette & Blood Moon Volumetric Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 30%, rgba(229,9,32,0.22) 0%, rgba(5,5,7,0.7) 50%, #050507 92%)",
            }}
          />

          {/* Grid lines for trade coordinates */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Dynamic Floating Telemetry Pills (Inspired by Code Academy Tags) */}
        <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none z-10 hidden lg:block">
          {/* Top-Left Pill */}
          <div className="absolute top-20 left-4 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono text-white/80 backdrop-blur-md shadow-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DESTINATION: JEBEL ALI 🇦🇪</span>
          </div>

          {/* Top-Right Pill */}
          <div className="absolute top-24 right-6 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono text-[#FFD86A] backdrop-blur-md shadow-xl flex items-center gap-2">
            <Anchor className="w-3 h-3 text-[#FFD86A]" />
            <span>ORIGIN: NHAVA SHEVA / MUNDRA</span>
          </div>

          {/* Mid-Left Pill */}
          <div className="absolute bottom-36 left-2 px-3 py-1.5 rounded-full bg-black/60 border border-[#E50920]/40 text-[11px] font-mono text-white/90 backdrop-blur-md shadow-xl flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E50920]" />
            <span>LC_IRREVOCABLE = 100% SECURE</span>
          </div>

          {/* Mid-Right Pill */}
          <div className="absolute bottom-40 right-4 px-3 py-1.5 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono text-[#FF4D5E] backdrop-blur-md shadow-xl flex items-center gap-2">
            <Zap className="w-3 h-3 text-[#FF4D5E]" />
            <span>TRANSIT_TIME = 3.5 DAYS</span>
          </div>
        </div>

        {/* Main Hero Content Frame (Balanced for PC Screens Above The Fold) */}
        <div className="relative z-20 max-w-4xl mx-auto text-center w-full">
          {/* Live Masterclass Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E50920]/20 border border-[#E50920]/50 text-[#FF6B7A] text-xs font-mono uppercase tracking-wider mb-5 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#E50920] animate-ping" />
            <span>LIVE 3-HOUR MASTERCLASS • THIS SUNDAY 1:00 PM IST</span>
          </div>

          {/* Aggressive High-Impact Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] uppercase tracking-tight leading-[0.94] text-white mb-5 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            QUIT 9 TO 5. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FFD86A]">
              BUILD AN EXPORT BUSINESS
            </span>{" "}
            <br />
            <span className="text-[#E50920]">ON REAL CARGO.</span>
          </h1>

          {/* Sharp, Concise Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-7 drop-shadow-md">
            A live, battle-tested masterclass by 14-year export practitioner Rahul Makwana.
            Learn verified buyer matching, automated customs clearance, and 100% scam-proof
            payment terms for high-demand Gulf markets.
          </p>

          {/* Dual Dynamic Action Buttons (Like Code Academy) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <button
              onClick={handleOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_35px_rgba(229,9,32,0.6)] hover:shadow-[0_15px_45px_rgba(229,9,32,0.8)] transition-all cursor-pointer active:scale-95 border border-[#FF6B7A]"
            >
              <span>Reserve Seat • {WEBINAR_CONTENT.details.fee}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToCorridor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white/90 hover:text-white transition-all cursor-pointer border border-white/15 backdrop-blur-md"
            >
              <Ship className="w-4 h-4 text-[#FFD86A]" />
              <span>Explore 3.5-Day Sea Route</span>
            </button>
          </div>

          {/* Compact Trust Indicators Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-2 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-white/70 backdrop-blur-md">
            <span className="flex items-center gap-1.5 text-white">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFD86A]" />
              {WEBINAR_CONTENT.details.seats}
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5 text-[#E50920]" />
              Direct Live Zoom Q&amp;A
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Lock className="w-3.5 h-3.5" />
              WhatsApp Pass Dispatch
            </span>
          </div>

          {/* Live Countdown Ticker Strip */}
          <div className="mt-8 flex items-center justify-center gap-2 sm:gap-3 text-center">
            <div className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="font-display text-xl sm:text-2xl text-white block">{timeLeft.days}</span>
              <span className="text-[9px] text-white/50 uppercase font-mono block">DAYS</span>
            </div>
            <span className="text-white/40 font-mono">:</span>
            <div className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="font-display text-xl sm:text-2xl text-white block">{timeLeft.hours}</span>
              <span className="text-[9px] text-white/50 uppercase font-mono block">HOURS</span>
            </div>
            <span className="text-white/40 font-mono">:</span>
            <div className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="font-display text-xl sm:text-2xl text-[#FFD86A] block">{timeLeft.minutes}</span>
              <span className="text-[9px] text-[#FFD86A]/70 uppercase font-mono block">MINS</span>
            </div>
            <span className="text-white/40 font-mono">:</span>
            <div className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
              <span className="font-display text-xl sm:text-2xl text-[#FF4D5E] block">{timeLeft.seconds}</span>
              <span className="text-[9px] text-[#FF4D5E]/70 uppercase font-mono block">SECS</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: DYNAMIC 4-STEP CONNECTED TRACK (Directly Inspired by Image 1)
         ========================================================================= */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD86A] font-bold block mb-2">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            4 steps from zero to your first container.
          </h2>
          <p className="text-xs sm:text-sm text-white/60">
            We&apos;re not promising overnight millions. We give you a battle-tested,
            zero-guesswork roadmap if you&apos;re ready to execute.
          </p>
        </div>

        {/* Connected Step Track with Illuminated Path */}
        <div className="relative">
          {/* Glowing Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-[#E50920] via-[#FFD86A] to-emerald-500 opacity-60 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Step 1 */}
            <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-[#E50920]/60 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E50920] text-white flex items-center justify-center font-display text-2xl shadow-lg shadow-red-950/60 mb-5 group-hover:scale-105 transition-transform">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFD86A] transition-colors">
                  Product &amp; Market Fit
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Evaluate real Gulf demand for spices, agro-commodities, textiles, and engineering parts. Stop guessing what sells.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                HS Code &amp; Margin Vetting
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-[#FFD86A]/60 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FFD86A] text-black flex items-center justify-center font-display text-2xl shadow-lg shadow-amber-950/40 mb-5 group-hover:scale-105 transition-transform">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFD86A] transition-colors">
                  Buyer Due Diligence
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Audit buyers through ICEGATE port manifests and Gulf chamber records. Differentiate genuine buyers from ghost brokers.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                Anti-Fraud Buyer Filtering
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-[#E50920]/60 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#E50920] text-white flex items-center justify-center font-display text-2xl shadow-lg shadow-red-950/60 mb-5 group-hover:scale-105 transition-transform">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFD86A] transition-colors">
                  Statutory Clearance
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Set up your IEC, GST, AD Code, APEDA/RCMC, and Chamber certifications without paying heavy consultancy charges.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                Direct ICEGATE Filing
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between hover:border-emerald-500/60 transition-all group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-black flex items-center justify-center font-display text-2xl shadow-lg shadow-emerald-950/40 mb-5 group-hover:scale-105 transition-transform">
                  04
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Dispatch &amp; Safe LC Payout
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Book containers with vetted CHAs, sail the 3.5-day route, and receive your guaranteed payment via Irrevocable LC.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-mono text-white/50">
                100% Guaranteed Settlement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DYNAMIC TRACK SELECTOR (Directly Inspired by Image 1's Toggle)
         ========================================================================= */}
      <section id="trade-corridor" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF4D5E] font-bold block mb-2">
            WHERE TO START?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Pick the track that matches your goal.
          </h2>
          <p className="text-xs sm:text-sm text-white/60 mb-6">
            Instead of random YouTube videos, follow one connected path with real cargo results.
          </p>

          {/* Dynamic Pill Toggle (Paths vs Courses) */}
          <div className="inline-flex p-1 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("corridors")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "corridors"
                  ? "bg-white text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Gulf Trade Corridors
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "products"
                  ? "bg-white text-black shadow-md"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Core Product Categories
            </button>
          </div>
        </div>

        {/* Tab 1: Gulf Trade Corridors */}
        {activeTab === "corridors" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {/* Corridor Card 1: UAE */}
            <div className="rounded-3xl bg-gradient-to-b from-[#140e11] to-[#0a0709] border border-white/15 p-6 hover:border-[#E50920] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#FFD86A] mb-4">
                  <span>3.5 DAYS SEA TRANSIT</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">0% RE-EXPORT DUTY</span>
                </div>
                <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-2 group-hover:text-[#FF4D5E] transition-colors">
                  Dubai &amp; Jebel Ali (UAE)
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  The primary distribution nerve-center of the Middle East. Fast cargo clearance,
                  massive re-export appetite, and daily container line departures from Nhava Sheva &amp; Mundra.
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>Top Demands: Spices, Rice, Textiles, Produce</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>Port: Port of Jebel Ali</span>
                </div>
              </div>
            </div>

            {/* Corridor Card 2: Saudi Arabia */}
            <div className="rounded-3xl bg-gradient-to-b from-[#140e11] to-[#0a0709] border border-white/15 p-6 hover:border-[#FFD86A] transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-4">
                  <span>4.5 DAYS SEA TRANSIT</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">VISION 2030 DEMAND</span>
                </div>
                <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-2 group-hover:text-[#FFD86A] transition-colors">
                  Dammam &amp; Riyadh (KSA)
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  The largest consumer economy in the GCC. Massive state-backed food security programs,
                  infrastructure expansion, and premium purchasing power for Indian manufactured goods.
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD86A]" />
                  <span>Top Demands: Engineering Parts, Ceramics, Agro</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD86A]" />
                  <span>Port: King Abdulaziz Port (Dammam)</span>
                </div>
              </div>
            </div>

            {/* Corridor Card 3: Qatar & Oman */}
            <div className="rounded-3xl bg-gradient-to-b from-[#140e11] to-[#0a0709] border border-white/15 p-6 hover:border-emerald-500 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-4">
                  <span>3.0 - 4.0 DAYS TRANSIT</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">HIGH PER-CAPITA</span>
                </div>
                <h3 className="font-display text-3xl text-white uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                  Qatar, Oman &amp; Kuwait
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  High-margin niche consumer markets. Exceptional demand for premium-packaged Indian
                  food products, hotel amenities, and customized industrial components.
                </p>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Top Demands: Gourmet Foods, Apparels, Décor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ports: Hamad Port &amp; Sohar Port</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Core Product Categories */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {/* Product 1 */}
            <div className="rounded-3xl bg-gradient-to-b from-[#140e11] to-[#0a0709] border border-white/15 p-6 hover:border-[#E50920] transition-all flex flex-col justify-between">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/images/prod-spices.jpg"
                    alt="Spices and Agriculture"
                    fill
                    sizes="300px"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/70 text-[10px] font-mono text-[#FFD86A] backdrop-blur-md">
                    HS 07 - 12
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Food &amp; Agriculture
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Spices, premium rice, dehydrated vegetables, and fresh produce. Sourced directly from APMC mandis without owning farmland.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#FFD86A]">
                Key Markets: UAE, Saudi Arabia, Qatar
              </div>
            </div>

            {/* Product 2 */}
            <div className="rounded-3xl bg-gradient-to-b from-[#140e11] to-[#0a0709] border border-white/15 p-6 hover:border-[#E50920] transition-all flex flex-col justify-between">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/images/prod-textiles.jpg"
                    alt="Textiles and Apparel"
                    fill
                    sizes="300px"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/70 text-[10px] font-mono text-[#FFD86A] backdrop-blur-md">
                    HS 50 - 63
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Textiles &amp; Apparel
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Garments, fabrics, home linen, and institutional hotel textiles. Sourced directly from manufacturing hubs in Surat &amp; Tirupur.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#FFD86A]">
                Key Markets: UAE, Saudi Arabia, Oman
              </div>
            </div>

            {/* Product 3 */}
            <div className="rounded-3xl bg-gradient-to-b from-[#140e11] to-[#0a0709] border border-white/15 p-6 hover:border-[#E50920] transition-all flex flex-col justify-between">
              <div>
                <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/images/prod-engineering.jpg"
                    alt="Engineering and Ceramics"
                    fill
                    sizes="300px"
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full bg-black/70 text-[10px] font-mono text-[#FFD86A] backdrop-blur-md">
                    HS 69 &amp; 73
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Engineering &amp; Ceramics
                </h3>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Morbi ceramic tiles, brass hardware, valves, and precision parts. High margin contracts directly with GCC contractors.
                </p>
              </div>
              <div className="text-[11px] font-mono text-[#FFD86A]">
                Key Markets: Saudi Arabia, Kuwait, Bahrain
              </div>
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 4: FOUNDER SPOTLIGHT — RAHUL MAKWANA (Image 2 Editorial Split)
         ========================================================================= */}
      <section id="mentor" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Dramatic High-Contrast Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E50920]/80 bg-[#121014] group">
              <Image
                src="/images/mentor-rahul.jpg"
                alt="Rahul Makwana - Founder & Export Practitioner"
                fill
                sizes="360px"
                className="object-cover object-top filter contrast-[1.08] saturate-[1.05]"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block px-3 py-1 rounded-full bg-[#E50920] text-white text-[10px] font-mono font-bold uppercase tracking-wider mb-2 shadow-lg">
                  FOUNDER • ON-GROUND PRACTITIONER
                </span>
                <h3 className="font-display text-4xl text-white uppercase tracking-tight">
                  {MENTOR_CONTENT.name}
                </h3>
                <p className="text-xs text-[#FFD86A] font-mono">
                  {MENTOR_CONTENT.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Narrative (Editorial Authority) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono uppercase text-[#FFD86A] font-bold tracking-wider">
              <span>AUTHENTIC TRADE CREDIBILITY</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white leading-[0.95]">
              &ldquo;The harbor only cares about cargo cleared and contracts honored.&rdquo;
            </h2>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
              {MENTOR_CONTENT.bio1}
            </p>

            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              {MENTOR_CONTENT.bio2} Most export training is sold by academics who have never
              stood in front of a shipping container at Mundra or resolved an ICEGATE query at midnight.
              Rahul&apos;s curriculum is built on 14+ years of real on-ground container dispatches.
            </p>

            {/* 3 Metric Pills */}
            <div className="grid grid-cols-3 gap-3 text-center font-mono pt-2">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="font-display text-2xl sm:text-3xl text-[#FFD86A] block">14+ YRS</span>
                <span className="text-[10px] text-white/50 uppercase block">Practical Trade</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="font-display text-2xl sm:text-3xl text-[#E50920] block">GCC</span>
                <span className="text-[10px] text-white/50 uppercase block">Direct Corridor</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="font-display text-2xl sm:text-3xl text-emerald-400 block">100%</span>
                <span className="text-[10px] text-white/50 uppercase block">Anti-Scam Focus</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleOpenModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#E50920] hover:bg-[#c9071b] text-white transition-all cursor-pointer shadow-lg shadow-red-950/60 active:scale-95"
              >
                <span>Ask Rahul Your Doubts Live This Sunday</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: THE OFFICIAL WEBINAR PASS (The High-Converting Ticket)
         ========================================================================= */}
      <section id="webinar-pass" className="py-20 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/10">
        <div className="rounded-3xl bg-gradient-to-b from-[#191012] to-[#0d090a] border-2 border-[#E50920] p-6 sm:p-12 shadow-[0_0_90px_rgba(229,9,32,0.35)] relative overflow-hidden">
          {/* Subtle Ambient Red Flare */}
          <div
            className="absolute -top-24 right-1/4 w-80 h-80 bg-[#E50920]/25 rounded-full blur-[140px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Ticket Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E50920] text-white text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-lg shadow-red-950/60">
              OFFICIAL WEBINAR REGISTRATION PASS
            </span>

            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-2">
              {WEBINAR_CONTENT.subhead}
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              {WEBINAR_CONTENT.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-y border-white/10 py-5 mb-8 relative z-10">
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">REGISTRATION FEE</span>
              <span className="font-display text-3xl sm:text-4xl text-[#E50920] font-bold">{WEBINAR_CONTENT.details.fee}</span>
              <span className="text-[9px] text-white/40 block font-mono">One-Time Fee</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">LIVE SCHEDULE</span>
              <span className="font-bold text-xs sm:text-sm text-white block mt-1">{WEBINAR_CONTENT.details.schedule}</span>
              <span className="text-[9px] text-white/40 block font-mono">3 Hours Intensive</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">PLATFORM</span>
              <span className="font-bold text-xs sm:text-sm text-white block mt-1">{WEBINAR_CONTENT.details.platform}</span>
              <span className="text-[9px] text-white/40 block font-mono">Direct Video Q&amp;A</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#FFD86A] block mb-0.5">SEATS &amp; LANGUAGE</span>
              <span className="font-bold text-xs sm:text-sm text-white block mt-1">{WEBINAR_CONTENT.details.language}</span>
              <span className="text-[9px] text-[#FF4D5E] block font-mono">{WEBINAR_CONTENT.details.seats}</span>
            </div>
          </div>

          {/* What You Will Learn (8 Points) */}
          <div className="mb-8 relative z-10">
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

          {/* Actionable Tools Provided (4 Tools) */}
          <div className="mb-8 pt-4 border-t border-white/10 relative z-10">
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

          {/* Primary Big CTA Button */}
          <div className="text-center pt-2 relative z-10">
            <button
              onClick={handleOpenModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-full font-display text-2xl uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_45px_rgba(229,9,32,0.65)] hover:shadow-[0_15px_55px_rgba(229,9,32,0.85)] transition-all cursor-pointer active:scale-98 border border-[#FF6B7A]"
            >
              <span>{WEBINAR_CONTENT.primaryCTA}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="mt-3 text-xs text-white/60 flex items-center justify-center gap-1.5 font-mono">
              <Lock className="w-3.5 h-3.5 text-[#FFD86A]" />
              <span>Instant Zoom pass delivered directly to your WhatsApp upon registration.</span>
            </div>
          </div>

          {/* Verbatim Disclaimers */}
          <div className="mt-8 p-4 rounded-2xl bg-black/60 border border-white/10 text-xs text-white/70 leading-relaxed space-y-2 relative z-10">
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
          STICKY MOBILE ACTION BAR
         ========================================================================= */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-50 bg-[#0d0b0f]/95 border border-[#E50920]/60 p-2.5 rounded-full backdrop-blur-xl flex items-center justify-between shadow-2xl">
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
      <footer className="border-t border-white/10 bg-[#040406] py-8 text-center text-xs text-white/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
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
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0f0d12] border border-white/20 p-6 sm:p-8 shadow-2xl text-left">
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
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50920]/20 border border-[#E50920]/40 text-[#FF4D5E] text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
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

                  <div className="flex items-center justify-center gap-2 text-[11px] text-white/50 pt-1 font-mono">
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
