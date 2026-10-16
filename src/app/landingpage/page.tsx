"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import { WEBINAR_CONTENT, MENTOR_CONTENT } from "@/data/siteData";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
          SECTION 1: HERO — CINEMATIC NIGHT CARGO PORT WITH VIVID POPPING BLOOD MOON
         ========================================================================= */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Full-Bleed High-Definition Port Background */}
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
              className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.25] saturate-[1.2]"
              loading="eager"
            />
          </picture>

          {/* DESKTOP VIEW: Dynamic Breathing Red Moon Glow (Slowly comes & goes through the clouds) */}
          <div
            className="hidden md:block absolute top-[16.5%] left-[39.5%] w-[760px] h-[520px] pointer-events-none mix-blend-screen blur-[85px] animate-moon-breathe"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,40,60,0.7) 0%, rgba(229,9,32,0.35) 45%, rgba(180,0,20,0.1) 70%, transparent 85%)",
            }}
            aria-hidden="true"
          />
          <div
            className="hidden md:block absolute top-[16.5%] left-[39.5%] w-[280px] h-[280px] pointer-events-none mix-blend-screen blur-[45px] animate-moon-breathe"
            style={{
              background:
                "radial-gradient(circle, rgba(255,50,70,0.55) 0%, rgba(229,9,32,0.25) 50%, transparent 80%)",
            }}
            aria-hidden="true"
          />

          {/* MOBILE VIEW: Dynamic Breathing Cloud Background Glow (Slowly comes & goes through the clouds) */}
          <div
            className="md:hidden absolute top-[18%] left-1/2 w-[440px] h-[320px] pointer-events-none mix-blend-screen blur-[65px] animate-moon-breathe"
            style={{
              background:
                "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255,45,60,0.65) 0%, rgba(229,9,32,0.28) 45%, rgba(180,0,20,0.08) 70%, transparent 85%)",
            }}
            aria-hidden="true"
          />
          <div
            className="md:hidden absolute top-[18%] left-1/2 w-[220px] h-[220px] pointer-events-none mix-blend-screen blur-[40px] animate-moon-breathe"
            style={{
              background:
                "radial-gradient(circle, rgba(255,50,70,0.5) 0%, rgba(229,9,32,0.2) 50%, transparent 80%)",
            }}
            aria-hidden="true"
          />

          {/* Desktop Left-Side Gradient (Dark behind text on left, 100% open & transparent on the moon & harbor) */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(3,3,4,0.96) 0%, rgba(3,3,4,0.88) 26%, rgba(3,3,4,0.2) 34%, transparent 40%, transparent 75%, rgba(3,3,4,0.45) 100%)",
            }}
          />

          {/* Mobile Gradient (Clean transparent sky around moon, smooth text contrast for lower half) */}
          <div
            className="md:hidden absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,3,4,0.1) 0%, rgba(3,3,4,0.02) 25%, rgba(3,3,4,0.65) 52%, rgba(3,3,4,0.9) 82%, #030304 100%)",
            }}
          />

          {/* Deep atmospheric bottom fade to seamlessly blend into Founder section */}
          <div
            className="absolute inset-x-0 bottom-0 h-44 sm:h-64 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(3,3,4,0.3) 30%, rgba(3,3,4,0.8) 70%, #030304 100%)",
            }}
          />
        </div>

        {/* Top Header / Navigation */}
        <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#E50920] flex items-center justify-center text-white shadow-lg shadow-red-950/80 shrink-0">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl text-white tracking-wider uppercase block leading-none">
                EXPORT EASY HAI
              </span>
              <span className="text-[9px] tracking-[0.28em] uppercase text-[#FF4D5E] font-semibold block font-mono mt-0.5">
                EXPLORE. LEARN. EXPORT.
              </span>
            </div>
          </div>
        </header>

        {/* Hero Main Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16 my-auto flex flex-col justify-center">
          <div className="max-w-xl lg:max-w-2xl text-left">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em]">
              <span className="w-5 h-[2px] bg-[#E50920]" />
              <span>FOR 9 TO 5 PROFESSIONALS</span>
            </div>

            {/* Bold Condensed Headline */}
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[92px] uppercase tracking-tight leading-[0.92] text-white mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              QUIT 9 TO 5. <br />
              <span className="text-[#E50920]">BUILD AN</span> <br />
              <span className="text-[#E50920]">EXPORT BUSINESS.</span>
            </h1>

            {/* Primary Action Button */}
            <div className="mb-4">
              <button
                onClick={handleOpenModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_35px_rgba(229,9,32,0.65)] hover:shadow-[0_15px_45px_rgba(229,9,32,0.85)] transition-all cursor-pointer active:scale-98 border border-red-500/40"
              >
                <span>Reserve Your ₹699 Webinar Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Schedule Info Row */}
            <div className="flex items-center gap-4 text-xs font-mono text-white/70">
              <div className="flex items-center gap-1.5 text-white/90">
                <Calendar className="w-3.5 h-3.5 text-[#E50920]" />
                <span>{WEBINAR_CONTENT.details.schedule}</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-1.5 text-[#FFD86A]">
                <Video className="w-3.5 h-3.5" />
                <span>Live on {WEBINAR_CONTENT.details.platform}</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          SECTION 2: FOUNDER — RAHUL MAKWANA (EDITORIAL ASYMMETRIC SPREAD)
         ========================================================================= */}
      <section className="relative py-14 sm:py-20 lg:py-28 bg-[#030304] overflow-hidden">
        {/* Subtle Ambient Red Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[450px] bg-[#E50920]/15 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start lg:items-center">
            {/* 1. Introductory Branding & Headline */}
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1 space-y-4">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em]">
                <span className="w-5 h-[2px] bg-[#E50920]" />
                <span>WHO AM I</span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.94]">
                PRACTICAL EXPERIENCE. <br />
                <span className="text-[#E50920]">REAL GUIDANCE.</span>
              </h2>

              {/* Bio Paragraph */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                I help 9-to-5 professionals and beginners understand how to export from India
                to the Gulf with practical, step-by-step guidance, based on real-world experience.
              </p>
            </div>

            {/* 2. Rahul Makwana Authentic Portrait */}
            <div className="lg:col-span-4 lg:col-start-6 lg:row-start-1 lg:row-span-2 flex flex-col items-center justify-center relative">
              {/* Handwritten Script Annotation */}
              <div className="w-full text-center lg:text-left mb-2 pl-0 lg:pl-4">
                <span className="font-script text-2xl sm:text-3xl text-[#FFD86A] block leading-none">
                  &ldquo;Same Knowledge. <br />
                  Simpler Path.&rdquo;
                </span>
              </div>

              <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-[#121115]">
                <Image
                  src="/images/mentor-rahul.jpg"
                  alt="Rahul Makwana - Founder & Export Mentor"
                  fill
                  sizes="(max-width: 1024px) 340px, 400px"
                  className="object-cover object-top filter contrast-[1.05]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-display text-2xl text-white block uppercase">
                    {MENTOR_CONTENT.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#FFD86A] uppercase tracking-wider block">
                    {MENTOR_CONTENT.role}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Founder Statement Card */}
            <div className="lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:row-span-2">
              <div className="rounded-2xl bg-black/60 border border-[#E50920]/40 p-5 sm:p-7 backdrop-blur-md shadow-xl relative max-w-[320px] sm:max-w-[340px] mx-auto lg:max-w-none">
                {/* Red Accent Marker */}
                <div className="w-6 h-1 bg-[#E50920] mb-3 sm:mb-4" />

                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF4D5E] font-bold block mb-1">
                  FOUNDER
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3 sm:mb-4">
                  {MENTOR_CONTENT.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-3 sm:mb-4">
                  Helping 9-to-5 professionals and beginners understand exports with real
                  experience and practical guidance.
                </p>

                <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3 sm:pt-4">
                  I&apos;ve been working in the export and global trade space, and through
                  Export Easy Hai, I focus on making the export process simple, practical
                  and understandable for beginners.
                </p>
              </div>
            </div>

            {/* 4. Three Core Benefit Pillars */}
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 space-y-3.5 sm:space-y-4 pt-1 lg:pt-0">
              <div className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="w-9 h-9 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-sm text-white block font-semibold">Mentor with export experience</strong>
                  <span className="text-xs text-white/60 leading-relaxed block">Real background in international shipments and supplier clearance.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="w-9 h-9 rounded-lg bg-[#FFD86A]/15 border border-[#FFD86A]/30 text-[#FFD86A] flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-sm text-white block font-semibold">Simplifying complex processes</strong>
                  <span className="text-xs text-white/60 leading-relaxed block">Demystifying ICEGATE customs, HS codes, and bank AD code registration.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-sm text-white block font-semibold">Helping beginners start with clarity</strong>
                  <span className="text-xs text-white/60 leading-relaxed block">Guiding you to avoid expensive rookie errors and scam payment terms.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WEBINAR & REGISTRATION — DIRECT ON-PAGE BOOKING CARD
         ========================================================================= */}
      <section id="webinar-section" className="relative py-20 sm:py-28 bg-[#030304] overflow-hidden">
        {/* Webinar Atmospheric Night Port Background with Smooth Gradient Blends */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/webinar-port-night.jpg"
            alt="Cargo container terminal at night with red floodlights and reflective ground"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.55] contrast-[1.3]"
            unoptimized
          />
          {/* Seamless Top Blend from Founder */}
          <div
            className="absolute inset-x-0 top-0 h-36 sm:h-52 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(180deg, #030304 0%, rgba(3,3,4,0.85) 40%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(3,3,4,0.92) 0%, rgba(3,3,4,0.7) 50%, rgba(3,3,4,0.85) 100%)",
            }}
          />
          {/* Seamless Bottom Blend into Mission */}
          <div
            className="absolute inset-x-0 bottom-0 h-36 sm:h-52 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(3,3,4,0.85) 60%, #030304 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Webinar Pitch & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em]">
                <span className="w-5 h-[2px] bg-[#E50920]" />
                <span>TAKE THE FIRST STEP</span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.92]">
                JOIN THE <br />
                <span className="text-[#E50920]">LIVE WEBINAR</span>
              </h2>

              {/* Subcopy */}
              <p className="text-sm sm:text-base text-white/85 max-w-lg leading-relaxed font-normal">
                Get clear, practical guidance on how to start your export journey from India to the Gulf.
              </p>

              {/* 4 Feature Badges Grid */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                  <Video className="w-4 h-4 text-[#E50920] shrink-0" />
                  <span>Live online webinar</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                  <GraduationCap className="w-4 h-4 text-[#FFD86A] shrink-0" />
                  <span>Hindi/English training</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                  <Users className="w-4 h-4 text-[#FF4D5E] shrink-0" />
                  <span>Limited seats (50 per session)</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/70">
                  <AlertCircle className="w-4 h-4 text-white/50 shrink-0" />
                  <span>Not included: recording</span>
                </div>
              </div>

              {/* Red CTA Button */}
              <div>
                <button
                  onClick={handleOpenModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_35px_rgba(229,9,32,0.65)] hover:shadow-[0_15px_45px_rgba(229,9,32,0.85)] transition-all cursor-pointer active:scale-98 border border-red-500/40"
                >
                  <span>Reserve Your ₹699 Webinar Seat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Schedule Info */}
              <div className="flex items-center gap-4 text-xs font-mono text-white/70">
                <div className="flex items-center gap-1.5 text-white/90">
                  <Calendar className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>{WEBINAR_CONTENT.details.schedule}</span>
                </div>
                <span className="text-white/30">|</span>
                <div className="flex items-center gap-1.5 text-[#FFD86A]">
                  <Video className="w-3.5 h-3.5" />
                  <span>Live on {WEBINAR_CONTENT.details.platform}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Glowing Registration Card (Exact match to Reference) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md rounded-2xl bg-[#0D0B0F]/90 backdrop-blur-xl border-2 border-[#E50920] shadow-[0_0_60px_rgba(229,9,32,0.45)] p-6 sm:p-8 text-left relative">
                {/* Header */}
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-9 h-9 rounded bg-[#E50920] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                      Reserve Your <br />
                      <span className="text-[#E50920]">₹699 Webinar Seat</span>
                    </h3>
                    <p className="text-xs text-white/60 mt-1">
                      Fill in your details to join the live webinar.
                    </p>
                  </div>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
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
                        className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
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
                        className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
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
                        className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl shadow-red-950/70 border border-red-500/40"
                      >
                        <span>Reserve My Seat for ₹699</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Verbatim Disclaimers */}
                    <div className="text-[11px] text-white/50 leading-relaxed pt-2 space-y-2 border-t border-white/10 mt-3">
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
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg"
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
          SECTION 4: COMPANY MISSION — THE INDIA-TO-GULF TRADE CORRIDOR
         ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#030304] overflow-hidden">
        {/* Mission Photorealistic Dusk Port Background with Seamless Transitions */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/mission-gulf-port.jpg"
            alt="International container port connecting India and Arabian Gulf"
            fill
            sizes="100vw"
            className="object-cover object-bottom filter brightness-[0.45] contrast-[1.25] saturate-[1.15]"
            unoptimized
          />
          {/* Seamless Top Blend from Webinar */}
          <div
            className="absolute inset-x-0 top-0 h-36 sm:h-52 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(180deg, #030304 0%, rgba(3,3,4,0.85) 40%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,3,4,0.9) 0%, rgba(3,3,4,0.65) 45%, rgba(3,3,4,0.92) 100%)",
            }}
          />
          {/* Seamless Bottom Blend into Footer */}
          <div
            className="absolute inset-x-0 bottom-0 h-36 sm:h-52 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(3,3,4,0.85) 60%, #030304 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          {/* Top Right Script Watermark */}
          <div className="flex justify-end mb-4">
            <span className="font-script text-2xl sm:text-3xl text-[#FFD86A]/80 drop-shadow-md">
              Real Markets. Real Opportunities.
            </span>
          </div>

          <div className="max-w-3xl mb-12 space-y-5">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em]">
              <span className="w-5 h-[2px] bg-[#E50920]" />
              <span>OUR MISSION</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.94]">
              MAKE EXPORTING <br />
              <span className="text-[#E50920]">SIMPLE AND PRACTICAL.</span>
            </h2>

            {/* Mission Text */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-normal">
              Export Easy Hai exists to help more Indians understand real export opportunities,
              avoid costly mistakes, and take the right steps with clarity and confidence.
            </p>
          </div>

          {/* 3 Value Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-black/60 border border-white/10 hover:border-[#E50920]/40 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Clear and practical guidance</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Grounded advice focused on action rather than textbook theories.</p>
            </div>

            <div className="rounded-2xl bg-black/60 border border-white/10 hover:border-[#FFD86A]/40 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#FFD86A]/15 border border-[#FFD86A]/30 text-[#FFD86A] flex items-center justify-center mb-5">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Focus on real opportunities</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Evaluate products with genuine buying power in UAE and Saudi Arabia.</p>
            </div>

            <div className="rounded-2xl bg-black/60 border border-white/10 hover:border-emerald-500/40 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Awareness about compliance &amp; risks</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Understanding international terms (Incoterms, LC, ECGC) to protect your funds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY MOBILE CONVERSION BAR
         ========================================================================= */}
      <div className="sm:hidden fixed bottom-3 inset-x-3 z-50 bg-[#0d0b0f]/95 border border-[#E50920]/60 p-2.5 rounded-full backdrop-blur-xl flex items-center justify-between shadow-2xl">
        <div className="leading-tight pl-3">
          <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
            <span>₹699 Webinar Seat</span>
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
      <footer className="bg-[#030304] py-10 text-center text-xs text-white/50 relative z-10">
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
          REGISTRATION POPUP MODAL (When clicking any CTA button)
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D0B0F] border-2 border-[#E50920] p-6 sm:p-8 shadow-[0_0_60px_rgba(229,9,32,0.5)] text-left">
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
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-9 h-9 rounded bg-[#E50920] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                      Reserve Your <br />
                      <span className="text-[#E50920]">₹699 Webinar Seat</span>
                    </h3>
                    <p className="text-xs text-white/60 mt-1">
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
                      className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
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
                      className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
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
                      className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl shadow-red-950/70 border border-red-500/40"
                    >
                      <span>Reserve My Seat for ₹699</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-[11px] text-white/50 leading-relaxed pt-2 space-y-2 border-t border-white/10 mt-3">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg"
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
