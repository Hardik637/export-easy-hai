import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Video,
  Compass,
  Ship,
  Users,
  Globe2,
  FileCheck,
  UserCheck,
  Target,
  ShieldAlert,
  GraduationCap,
  ShieldCheck,
  FileText,
  HelpCircle,
} from "lucide-react";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  HERO_CONTENT,
  MENTOR_CONTENT,
  WEBINAR_CONTENT,
  WEBINAR_PRICE_CONFIG,
  WHO_IS_THIS_FOR,
  PROBLEMS_BEGINNERS_FACE,
  WEBINAR_CURRICULUM,
  WEBINAR_RESOURCES,
  GULF_MARKETS_INFO,
  FAQS_CONTENT,
  FOOTER_CONTENT,
} from "@/data/siteData";
import {
  RegistrationModalProvider,
  ReserveButton,
} from "@/components/landing/RegistrationModalContext";
import { FounderBio } from "@/components/landing/FounderBio";
import { AudienceCarousel } from "@/components/landing/AudienceCarousel";
import { CurriculumAccordion } from "@/components/landing/CurriculumAccordion";
import { FaqAccordion } from "@/components/landing/FaqAccordion";
import { StickyMobileCta } from "@/components/landing/StickyMobileCta";

export default function LandingPage() {
  return (
    <RegistrationModalProvider>
      <div className="min-h-screen bg-[#030304] text-[#FFFFFF] font-sans antialiased selection:bg-[#E50920] selection:text-white relative overflow-x-hidden">
        {/* =========================================================================
            SECTION 1: HERO — CINEMATIC NIGHT CARGO PORT WITH VIVID BLOOD MOON
           ========================================================================= */}
        <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          {/* Full-Bleed High-Definition Port Background */}
          <div className="absolute inset-0 z-0">
            <picture className="w-full h-full block">
              <source
                media="(max-width: 768px)"
                srcSet="/images/hero-blood-moon-mobile.webp"
                type="image/webp"
              />
              <source
                media="(max-width: 768px)"
                srcSet="/images/hero-blood-moon-mobile.jpg"
                type="image/jpeg"
              />
              <source
                media="(min-width: 769px)"
                srcSet="/images/hero-blood-moon.webp"
                type="image/webp"
              />
              <source
                media="(min-width: 769px)"
                srcSet="/images/hero-blood-moon.jpg"
                type="image/jpeg"
              />
              <img
                src="/images/hero-blood-moon.webp"
                alt="Cargo port at night with glowing crimson blood moon and shipping cranes"
                className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.25] saturate-[1.2]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>

            {/* DESKTOP VIEW: Atmospheric Red Moon Glow (Optimized Radial Gradient without blur filters) */}
            <div
              className="hidden md:block absolute top-[16.5%] left-[39.5%] -translate-x-1/2 -translate-y-1/2 w-[760px] h-[520px] pointer-events-none animate-moon-breathe"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,30,50,0.55) 0%, rgba(229,9,32,0.25) 45%, rgba(180,0,20,0.06) 70%, transparent 85%)",
              }}
              aria-hidden="true"
            />
            <div
              className="hidden md:block absolute top-[16.5%] left-[39.5%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] pointer-events-none animate-moon-breathe"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,60,80,0.45) 0%, rgba(229,9,32,0.18) 55%, transparent 75%)",
              }}
              aria-hidden="true"
            />

            {/* MOBILE VIEW: Lightweight Atmospheric Red Moon Glow */}
            <div
              className="md:hidden absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[260px] pointer-events-none animate-moon-breathe"
              style={{
                background:
                  "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(255,35,55,0.45) 0%, rgba(229,9,32,0.18) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            />

            {/* Desktop Left-Side Gradient */}
            <div
              className="hidden md:block absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, rgba(3,3,4,0.96) 0%, rgba(3,3,4,0.88) 26%, rgba(3,3,4,0.2) 34%, transparent 40%, transparent 75%, rgba(3,3,4,0.45) 100%)",
              }}
            />

            {/* Mobile Bottom-to-Top Overlay */}
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
                  "linear-gradient(180deg, transparent 0%, rgba(3,3,4,0.35) 30%, rgba(3,3,4,0.85) 70%, #030304 100%)",
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
                  {BRAND_NAME}
                </span>
                <span className="text-[9px] tracking-[0.28em] uppercase text-[#FF4D5E] font-semibold block font-mono mt-0.5">
                  {BRAND_TAGLINE}
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
                <span>{HERO_CONTENT.eyebrow}</span>
              </div>

              {/* Bold Condensed Headline */}
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[92px] uppercase tracking-tight leading-[0.92] text-white mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                QUIT 9 TO 5. <br />
                <span className="text-[#E50920]">BUILD AN</span> <br />
                <span className="text-[#E50920]">EXPORT BUSINESS.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-white/80 max-w-lg mb-8 leading-relaxed">
                {HERO_CONTENT.supportingCopy}
              </p>

              {/* Primary Action Button */}
              <div className="mb-4">
                <ReserveButton className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_35px_rgba(229,9,32,0.65)] hover:shadow-[0_15px_45px_rgba(229,9,32,0.85)] transition-all cursor-pointer active:scale-98 border border-red-500/40">
                  <span>Reserve Your {WEBINAR_PRICE_CONFIG.formatted} Webinar Seat</span>
                  <ArrowRight className="w-4 h-4" />
                </ReserveButton>
              </div>

              {/* Schedule Info Row */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-white/70">
                <div className="flex items-center gap-1.5 text-white/90">
                  <Calendar className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>{WEBINAR_CONTENT.details.schedule} ({WEBINAR_CONTENT.details.duration})</span>
                </div>
                <span className="text-white/30 hidden sm:inline">|</span>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Video className="w-3.5 h-3.5 text-[#E50920]" />
                  <span>Live on {WEBINAR_CONTENT.details.platform} ({WEBINAR_CONTENT.details.language})</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: FOUNDER — RAHUL MAKWANA (EDITORIAL ASYMMETRIC SPREAD)
           ========================================================================= */}
        <section id="founder" className="relative py-14 sm:py-20 lg:py-28 bg-[#030304] overflow-hidden">
          {/* Subtle Ambient Red Radial Glow (Optimized: zero blur filter overhead) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[650px] h-[400px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 50%, rgba(229,9,32,0.12) 0%, rgba(229,9,32,0.04) 50%, transparent 70%)",
            }}
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
                  I help 9-to-5 professionals, traders, students, and beginners understand how to export from India
                  to the Gulf (UAE/Dubai, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain) with practical, step-by-step guidance based on 20+ years of banking, trade finance, and forex experience.
                </p>
              </div>

              {/* 2. Rahul Makwana Authentic Portrait */}
              <div className="lg:col-span-4 lg:col-start-6 lg:row-start-1 lg:row-span-2 flex flex-col items-center justify-center relative">
                {/* Handwritten Script Annotation */}
                <div className="w-full text-center lg:text-left mb-2 pl-0 lg:pl-4">
                  <span className="font-script text-2xl sm:text-3xl text-[#FF4D5E] block leading-none">
                    &ldquo;Same Knowledge. <br />
                    Simpler Path.&rdquo;
                  </span>
                </div>

                <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-[#121115]">
                  <Image
                    src="/images/mentor-rahul.jpg"
                    alt="Rahul Makwana - Founder & Export Mentor"
                    fill
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 340px, 400px"
                    className="object-cover object-top filter contrast-[1.05]"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="font-display text-2xl text-white block uppercase">
                      {MENTOR_CONTENT.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#FF4D5E] uppercase tracking-wider block">
                      Export Consultant • 20+ Yrs Banking &amp; Forex
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Founder Statement Card (Isolated client component for mobile expand/collapse) */}
              <div className="lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:row-span-2">
                <FounderBio
                  name={MENTOR_CONTENT.name}
                  bio1={MENTOR_CONTENT.bio1}
                  linkedinUrl={MENTOR_CONTENT.social.linkedin}
                />
              </div>

              {/* 4. Three Core Benefit Pillars */}
              <div className="lg:col-span-5 lg:col-start-1 lg:row-start-2 space-y-3.5 sm:space-y-4 pt-1 lg:pt-0">
                <div className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                  <div className="w-9 h-9 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5 text-[#E50920]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">20+ Years Banking &amp; Forex Head</h4>
                    <span className="text-xs text-white/60 leading-relaxed block">Real background in cross-border trade transactions, LC, foreign exchange, and compliance.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                  <div className="w-9 h-9 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-5 h-5 text-[#E50920]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Practical Gulf Export Focus</h4>
                    <span className="text-xs text-white/60 leading-relaxed block">A clear focus on realistic product-market corridors into Dubai, UAE, Saudi Arabia, and Qatar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                  <div className="w-9 h-9 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center shrink-0 mt-0.5">
                    <Ship className="w-5 h-5 text-[#E50920]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Direct Verification Framework</h4>
                    <span className="text-xs text-white/60 leading-relaxed block">Specific, actionable checklists to find genuine buyers and suppliers without falling for scams.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WEBINAR & REGISTRATION
           ========================================================================= */}
        <section id="webinar-section" className="relative py-16 sm:py-24 bg-[#030304] overflow-hidden">
          {/* Webinar Photorealistic Night Port Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/webinar-port-night.jpg"
              alt="Cargo container terminal at night with red floodlights and reflective ground"
              fill
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.45] contrast-[1.3]"
              quality={75}
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
                  "linear-gradient(180deg, rgba(3,3,4,0.92) 0%, rgba(3,3,4,0.7) 45%, rgba(3,3,4,0.92) 100%)",
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
            {/* 3.1 Webinar Overview & Primary Offer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em]">
                  <span className="w-5 h-[2px] bg-[#E50920]" />
                  <span>{WEBINAR_CONTENT.eyebrow}</span>
                </div>

                <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white leading-[0.94]">
                  {WEBINAR_CONTENT.title}
                </h2>

                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                  {WEBINAR_CONTENT.description}
                </p>

                {/* 4 Feature Badges Grid */}
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  <div className="p-3 rounded-xl bg-[#09080A] border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                    <Video className="w-4 h-4 text-[#E50920] shrink-0" />
                    <span>Live online webinar (3 Hours)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#09080A] border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                    <GraduationCap className="w-4 h-4 text-[#E50920] shrink-0" />
                    <span>Hinglish interactive training</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#09080A] border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                    <Users className="w-4 h-4 text-[#E50920] shrink-0" />
                    <span>Limited to 300 seats</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#09080A] border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0" />
                    <span>WhatsApp reminders included</span>
                  </div>
                </div>

                {/* Red CTA Button */}
                <div>
                  <ReserveButton className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_35px_rgba(229,9,32,0.65)] hover:shadow-[0_15px_45px_rgba(229,9,32,0.85)] transition-all cursor-pointer active:scale-98 border border-red-500/40">
                    <span>Reserve Your {WEBINAR_PRICE_CONFIG.formatted} Seat Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </ReserveButton>
                </div>

                {/* Schedule Info */}
                <div className="flex items-center gap-4 text-xs font-mono text-white/70">
                  <div className="flex items-center gap-1.5 text-white/90">
                    <Calendar className="w-3.5 h-3.5 text-[#E50920]" />
                    <span>{WEBINAR_CONTENT.details.schedule} ({WEBINAR_CONTENT.details.duration})</span>
                  </div>
                  <span className="text-white/30">|</span>
                  <div className="flex items-center gap-1.5 text-white/90">
                    <Video className="w-3.5 h-3.5 text-[#E50920]" />
                    <span>Live on {WEBINAR_CONTENT.details.platform} ({WEBINAR_CONTENT.details.language})</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Masterclass VIP Pass (Desktop only, triggers modal on click) */}
              <div className="hidden lg:flex lg:col-span-6 justify-center">
                <div className="w-full max-w-md rounded-2xl bg-[#0D0B0F]/95 border-2 border-[#E50920] shadow-[0_0_50px_rgba(229,9,32,0.35)] p-7 sm:p-8 text-left relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF4D5E] font-bold bg-[#E50920]/10 px-2.5 py-1 rounded border border-[#E50920]/30">
                        LIVE BATCH ACCESS PASS
                      </span>
                      <span className="text-xs font-mono text-white/50">300 Seats Max</span>
                    </div>

                    <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-tight leading-none mb-2">
                      Export Business <br />
                      <span className="text-[#E50920]">Master Class</span>
                    </h3>
                    <p className="text-xs text-white/70 mb-5">
                      {WEBINAR_CONTENT.details.schedule} ({WEBINAR_CONTENT.details.duration}) • Live with Rahul Makwana
                    </p>

                    <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6 text-xs text-white/80">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0" />
                        <span>11-Module Complete India-to-Gulf Export Curriculum</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0" />
                        <span>6 Practical Roadmaps, Verification Checklists &amp; Templates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0" />
                        <span>Live Interactive Doubt Solving in Hinglish</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0" />
                        <span>WhatsApp Community Access &amp; Session Reminders</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-xs text-white/50 font-mono">
                        Regular Fee: <s className="text-white/40">{WEBINAR_PRICE_CONFIG.originalValue}</s>
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-display text-white">{WEBINAR_PRICE_CONFIG.formatted}</span>
                        <span className="text-[10px] text-[#E50920] font-mono ml-1.5 uppercase font-bold">Special Offer</span>
                      </div>
                    </div>

                    <ReserveButton className="w-full py-3.5 px-6 rounded-lg font-bold text-sm uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl shadow-red-950/70 border border-red-500/40">
                      <span>Reserve My Seat for {WEBINAR_PRICE_CONFIG.formatted}</span>
                      <ArrowRight className="w-4 h-4" />
                    </ReserveButton>

                    <p className="text-[10.5px] text-white/40 text-center mt-2.5 font-mono">
                      Instant confirmation via WhatsApp &amp; Email
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3.2 "Who Is This Webinar For?" Block */}
            <div className="pt-6 sm:pt-10">
              <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em] mb-2">
                  <span className="w-5 h-[2px] bg-[#E50920]" />
                  <span>{WHO_IS_THIS_FOR.eyebrow}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
                  {WHO_IS_THIS_FOR.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {WHO_IS_THIS_FOR.subtitle}
                </p>
              </div>

              {/* DESKTOP VIEW: Grid of all 5 cards (Static Server Rendered) */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {WHO_IS_THIS_FOR.audiences.map((aud, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#09080A] border border-white/10 hover:border-[#E50920]/40 p-5 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50920] bg-[#E50920]/10 px-2 py-0.5 rounded border border-[#E50920]/30 font-semibold">
                        {aud.tag}
                      </span>
                      <UserCheck className="w-4 h-4 text-[#E50920]" />
                    </div>
                    <h4 className="text-base text-white font-semibold mb-1.5">{aud.role}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{aud.desc}</p>
                  </div>
                ))}
              </div>

              {/* MOBILE VIEW ONLY: Isolated Carousel Component with Progress Bar */}
              <AudienceCarousel audiences={WHO_IS_THIS_FOR.audiences} />
            </div>

            {/* 3.3 "Problems Beginners Face" Block */}
            <div className="pt-6 sm:pt-10">
              <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em] mb-2">
                  <span className="w-5 h-[2px] bg-[#E50920]" />
                  <span>{PROBLEMS_BEGINNERS_FACE.eyebrow}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
                  {PROBLEMS_BEGINNERS_FACE.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {PROBLEMS_BEGINNERS_FACE.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROBLEMS_BEGINNERS_FACE.problems.map((prob, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#09080A] border border-white/10 hover:border-[#E50920]/30 p-5 space-y-2 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <span className="w-5 h-5 rounded-full bg-[#E50920]/20 text-[#E50920] flex items-center justify-center text-xs font-mono shrink-0">
                        ?
                      </span>
                      <h4>{prob.title}</h4>
                    </div>
                    <p className="text-xs text-white/60 pl-7">{prob.question}</p>
                    <div className="pt-2 pl-7 border-t border-white/5 flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#E50920]" />
                      <span>{prob.resolution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.4 Complete 11-Topic Learning Curriculum */}
            <div id="curriculum" className="pt-6 sm:pt-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em] mb-2">
                    <span className="w-5 h-[2px] bg-[#E50920]" />
                    <span>MASTERCLASS CURRICULUM</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
                    WHAT YOU WILL LEARN (11 MODULES)
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#E50920] bg-[#E50920]/10 px-3 py-1 rounded-full border border-[#E50920]/30 w-fit">
                  3 Hours • Live Q&amp;A Included
                </span>
              </div>

              {/* DESKTOP VIEW: Grid of all 11 module cards (Static Server Rendered) */}
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {WEBINAR_CURRICULUM.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-xl bg-[#09080A] border border-white/10 hover:border-[#E50920]/40 p-5 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-xs font-mono text-[#E50920] font-bold mb-2">
                        MODULE {item.number}
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* MOBILE VIEW ONLY: Isolated Compact Vertical Accordion */}
              <CurriculumAccordion items={WEBINAR_CURRICULUM} />
            </div>

            {/* 3.5 Resources Included (6 Items) */}
            <div className="pt-6 sm:pt-10">
              <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em] mb-2">
                  <span className="w-5 h-[2px] bg-[#E50920]" />
                  <span>INCLUDED MATERIALS</span>
                </div>
                <h3 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white mb-3">
                  6 RESOURCES INCLUDED WITH YOUR {WEBINAR_PRICE_CONFIG.formatted} SEAT
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Attendees receive complete access to our practical roadmaps, verification worksheets, and documentation checklists.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {WEBINAR_RESOURCES.map((res, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#09080A] border border-white/10 p-5 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4 text-[#E50920]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50920] block mb-1 font-semibold">
                        {res.format}
                      </span>
                      <h4 className="text-sm font-semibold text-white mb-1">{res.title}</h4>
                      <p className="text-xs text-white/60 leading-relaxed">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.6 Confirmed Gulf Markets & Product Categories Notice */}
            <div className="pt-4">
              <div className="rounded-2xl bg-[#0E0C10] border border-[#E50920]/40 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF4D5E] font-bold tracking-[0.2em]">
                    <Globe2 className="w-4 h-4" />
                    <span>TARGET MARKETS &amp; TRANSPARENCY NOTICE</span>
                  </div>
                  <span className="text-xs text-white/60 font-mono">
                    {GULF_MARKETS_INFO.focus}
                  </span>
                </div>

                {/* Markets Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {GULF_MARKETS_INFO.countries.map((c, i) => (
                    <div key={i} className="p-3 rounded-lg bg-black/60 border border-white/10 text-center">
                      <span className="text-xs font-semibold text-white block">{c.name}</span>
                      <span className="text-[10px] text-white/50 block font-mono mt-0.5">{c.highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Strict Notice regarding ready-made buyer lists */}
                <p className="text-xs text-white/70 leading-relaxed border-t border-white/10 pt-4">
                  <strong className="text-white">Strict Transparency Disclosure: </strong>
                  {GULF_MARKETS_INFO.importantNotice}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: COMPANY MISSION — THE INDIA-TO-GULF TRADE CORRIDOR
           ========================================================================= */}
        <section id="mission" className="relative py-20 sm:py-28 bg-[#030304] overflow-hidden">
          {/* Mission Photorealistic Dusk Port Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/mission-gulf-port.jpg"
              alt="International container port connecting India and Arabian Gulf"
              fill
              sizes="100vw"
              className="object-cover object-bottom filter brightness-[0.45] contrast-[1.25] saturate-[1.15]"
              quality={75}
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
                  "linear-gradient(180deg, rgba(3,3,4,0.92) 0%, rgba(3,3,4,0.7) 45%, rgba(3,3,4,0.92) 100%)",
              }}
            />
            {/* Seamless Bottom Blend into FAQs */}
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
              <span className="font-script text-2xl sm:text-3xl text-[#FF4D5E]/90 drop-shadow-md">
                Dubai • Saudi Arabia • Qatar • Kuwait • Oman • Bahrain
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
                Export Easy Hai (operated by <strong>Kavneet International</strong>) exists to help ambitious Indians build real, compliant export businesses from India to the Arabian Gulf—avoiding costly customs mistakes and executing with confidence through a structured six-month roadmap.
              </p>
            </div>

            {/* 3 Value Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-[#09080A] border border-white/10 hover:border-[#E50920]/40 p-6 sm:p-7 shadow-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center mb-5">
                  <Target className="w-5 h-5 text-[#E50920]" />
                </div>
                <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Clear and practical guidance</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Grounded advice and a structured six-month roadmap focused on execution rather than textbook theories.</p>
              </div>

              <div className="rounded-2xl bg-[#09080A] border border-white/10 hover:border-[#E50920]/40 p-6 sm:p-7 shadow-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center mb-5">
                  <FileCheck className="w-4 h-4 text-[#E50920]" />
                </div>
                <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Real Gulf market opportunities</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Evaluate high-demand products with genuine buying power in UAE (Dubai), Saudi Arabia, Qatar, and Kuwait.</p>
              </div>

              <div className="rounded-2xl bg-[#09080A] border border-white/10 hover:border-[#E50920]/40 p-6 sm:p-7 shadow-xl transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center mb-5">
                  <ShieldAlert className="w-5 h-5 text-[#E50920]" />
                </div>
                <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Forex, compliance &amp; risk control</h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Understanding international banking terms (Incoterms, LC, Bank AD Code, ICEGATE) to protect your funds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: FREQUENTLY ASKED QUESTIONS (DEDICATED ACCORDION)
           ========================================================================= */}
        <section id="faqs" className="relative py-20 sm:py-28 bg-[#030304] overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em] mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-3">
                GOT QUESTIONS? <span className="text-[#E50920]">WE HAVE ANSWERS.</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/60">
                Clear, transparent details about our export masterclass, target Gulf markets, and registration policies.
              </p>
            </div>

            {/* Isolated Client Accordion */}
            <FaqAccordion items={FAQS_CONTENT} />

            {/* Bottom FAQ CTA */}
            <div className="mt-10 text-center">
              <p className="text-xs text-white/60 mb-3">Still have a question before registering?</p>
              <a
                href="https://wa.me/919131676447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#FF4D5E] hover:text-[#E50920] transition-colors"
              >
                <span>Chat with our team on WhatsApp (+91 9131676447)</span>
                <Globe2 className="w-3.5 h-3.5 text-[#E50920]" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            STICKY MOBILE CONVERSION BAR (Bottom Screen on Mobile View Only)
           ========================================================================= */}
        <StickyMobileCta />

        {/* =========================================================================
            FOOTER WITH WORKING LEGAL LINKS
           ========================================================================= */}
        <footer className="bg-[#030304] py-12 text-center text-xs text-white/50 relative z-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
              <div className="space-y-1.5 max-w-md">
                <span className="font-display text-xl text-white tracking-wider uppercase block">
                  {FOOTER_CONTENT.brand}
                </span>
                <p className="text-[11px] text-white/70 leading-relaxed">
                  <strong className="text-white">{FOOTER_CONTENT.legalEntity}</strong> • {FOOTER_CONTENT.address}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 text-white/75 text-xs">
                <a
                  href={`mailto:${FOOTER_CONTENT.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {FOOTER_CONTENT.contactEmail}
                </a>
                <span className="text-white/20 hidden sm:inline">|</span>
                <a
                  href={FOOTER_CONTENT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4D5E] transition-colors"
                >
                  WhatsApp: {FOOTER_CONTENT.contactWhatsApp}
                </a>
                <span className="text-white/20 hidden sm:inline">|</span>
                <a
                  href={FOOTER_CONTENT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  Facebook
                </a>
                <span className="text-white/20 hidden sm:inline">|</span>
                <a
                  href={FOOTER_CONTENT.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Quick & Legal Navigation Links */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
              <div>
                &copy; {new Date().getFullYear()} {FOOTER_CONTENT.brand} ({FOOTER_CONTENT.legalEntity}). Founded by Rahul Makwana. All rights reserved.
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-white/60">
                {FOOTER_CONTENT.legalLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="hover:text-white transition-colors underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-[10.5px] text-white/35 leading-relaxed max-w-4xl mx-auto pt-2">
              {FOOTER_CONTENT.disclaimer}
            </div>
          </div>
        </footer>
      </div>
    </RegistrationModalProvider>
  );
}
