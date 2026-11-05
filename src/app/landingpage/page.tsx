"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Video,
  X,
  ExternalLink,
  ShieldCheck,
  Compass,
  Ship,
  Users,
  Globe2,
  FileCheck,
  UserCheck,
  Target,
  ShieldAlert,
  GraduationCap,
  AlertCircle,
  Phone,
  Mail,
  User,
  MapPin,
  Briefcase,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
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

interface RegistrationRecord {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  profession?: string;
  interest?: string;
  status?: string;
}

interface RazorpaySuccessResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayFailureResponse {
  error?: {
    code?: string;
    description?: string;
    source?: string;
    step?: string;
    reason?: string;
  };
}

interface RazorpayWindow extends Window {
  Razorpay?: new (options: Record<string, unknown>) => {
    open: () => void;
    on: (event: string, callback: (res: RazorpayFailureResponse) => void) => void;
  };
}

// Helper to dynamically load Razorpay checkout script
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    const win = window as unknown as RazorpayWindow;
    if (win.Razorpay) return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  // Audience Carousel State (Mobile view only)
  const [audienceIndex, setAudienceIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Module Accordion State (Mobile view only)
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setAudienceIndex((prev) => (prev + 1) % WHO_IS_THIS_FOR.audiences.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNextAudience = () => {
    setAudienceIndex((prev) => (prev + 1) % WHO_IS_THIS_FOR.audiences.length);
  };

  const handlePrevAudience = () => {
    setAudienceIndex(
      (prev) => (prev - 1 + WHO_IS_THIS_FOR.audiences.length) % WHO_IS_THIS_FOR.audiences.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      handleNextAudience();
    } else if (diff < -45) {
      handlePrevAudience();
    }
    setTouchStart(null);
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    profession: "",
    interest: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [verifiedRegistration, setVerifiedRegistration] = useState<RegistrationRecord | null>(null);
  const [isDuplicateNotice, setIsDuplicateNotice] = useState(false);

  const handleOpenModal = () => {
    setErrorMessage(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Complete Payment & Registration Flow
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      // 1. Create order on server
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const orderData = await res.json();

      if (!res.ok || !orderData.success) {
        if (orderData.isDuplicate) {
          setIsDuplicateNotice(true);
          setVerifiedRegistration(orderData.registration);
          setIsLoading(false);
          return;
        }
        throw new Error(orderData.error || "Failed to initiate payment. Please verify your details.");
      }

      // 2. Handle Sandbox Mock Order (when Razorpay API keys are not provided)
      if (orderData.isSandbox) {
        console.warn("[Client Notice] Testing in Sandbox Mode — auto-verifying test order.");
        const verifyRes = await fetch("/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: orderData.orderId,
            paymentId: "pay_test_sandbox_" + Date.now(),
            signature: "sig_test_sandbox",
          }),
        });
        const verifyData = await verifyRes.json();
        if (verifyData.success) {
          setVerifiedRegistration(verifyData.registration);
          setIsLoading(false);
          return;
        }
      }

      // 3. Load Razorpay Checkout Script
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        throw new Error("Unable to load Razorpay checkout. Please check your internet connection.");
      }

      // 4. Trigger Razorpay Payment Dialog
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: BRAND_NAME,
        description: `Master Class Seat Reservation (${WEBINAR_PRICE_CONFIG.formatted})`,
        image: "/favicon.ico",
        order_id: orderData.orderId,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#E50920",
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          },
        },
        handler: async (response: RazorpaySuccessResponse) => {
          setIsLoading(true);
          try {
            // 5. Server-side signature verification
            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();
            if (!verifyRes.ok || !verifyData.success) {
              throw new Error(verifyData.error || "Payment verification failed. Please contact support.");
            }

            setVerifiedRegistration(verifyData.registration);
          } catch (verifyErr: unknown) {
            console.error("[Verification Error]", verifyErr);
            const msg = verifyErr instanceof Error ? verifyErr.message : "Payment verification failed.";
            setErrorMessage(msg);
          } finally {
            setIsLoading(false);
          }
        },
      };

      const win = window as unknown as RazorpayWindow;
      if (!win.Razorpay) {
        throw new Error("Razorpay checkout SDK failed to initialize.");
      }

      const razorpayInstance = new win.Razorpay(options);
      razorpayInstance.on("payment.failed", (failedRes: RazorpayFailureResponse) => {
        console.error("[Payment Failed]", failedRes);
        setErrorMessage(
          failedRes?.error?.description || "Payment failed or was declined by bank. Please try again."
        );
        setIsLoading(false);
      });

      razorpayInstance.open();
    } catch (err: unknown) {
      console.error("[Registration Flow Error]", err);
      const msg = err instanceof Error ? err.message : "An unexpected error occurred during registration.";
      setErrorMessage(msg);
      setIsLoading(false);
    }
  };

  const whatsappLink = verifiedRegistration
    ? `https://wa.me/919131676447?text=${encodeURIComponent(
        `Hello Rahul sir, I have confirmed my ${WEBINAR_PRICE_CONFIG.formatted} seat for the Export Business Master Class! My name is ${verifiedRegistration.name || formData.name}. Please share my Zoom credentials and joining materials.`
      )}`
    : `https://wa.me/919131676447`;

  return (
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

          {/* DESKTOP VIEW: Dynamic Breathing Red Moon Glow */}
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

          {/* MOBILE VIEW: Dynamic Breathing Cloud Background Glow */}
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

          {/* Desktop Left-Side Gradient */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(3,3,4,0.96) 0%, rgba(3,3,4,0.88) 26%, rgba(3,3,4,0.2) 34%, transparent 40%, transparent 75%, rgba(3,3,4,0.45) 100%)",
            }}
          />

          {/* Mobile Gradient */}
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
              <button
                onClick={handleOpenModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_35px_rgba(229,9,32,0.65)] hover:shadow-[0_15px_45px_rgba(229,9,32,0.85)] transition-all cursor-pointer active:scale-98 border border-red-500/40"
              >
                <span>Reserve Your {WEBINAR_PRICE_CONFIG.formatted} Webinar Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>
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
                  sizes="(max-width: 1024px) 340px, 400px"
                  className="object-cover object-top filter contrast-[1.05]"
                  unoptimized
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

            {/* 3. Founder Statement Card */}
            <div className="lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:row-span-2">
              <div className="rounded-2xl bg-black/60 border border-[#E50920]/40 p-5 sm:p-7 backdrop-blur-md shadow-xl relative max-w-[320px] sm:max-w-[340px] mx-auto lg:max-w-none">
                {/* Red Accent Marker */}
                <div className="w-6 h-1 bg-[#E50920] mb-3 sm:mb-4" />

                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF4D5E] font-bold block mb-1">
                  FOUNDER &amp; EXPORT MENTOR
                </span>

                <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2 sm:mb-3">
                  {MENTOR_CONTENT.name}
                </h3>

                {/* Top important lines (clamped to 3 lines on mobile when collapsed, full on desktop) */}
                <p
                  className={`text-xs sm:text-sm text-white/80 leading-relaxed mb-2 sm:mb-4 ${
                    !isBioExpanded ? "line-clamp-3 sm:line-clamp-none" : ""
                  }`}
                >
                  {MENTOR_CONTENT.bio1}
                </p>

                {/* Rest of the bio & credentials — openable on mobile, always visible on desktop */}
                <div className={isBioExpanded ? "block" : "hidden sm:block"}>
                  <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3 sm:pt-4 mb-3">
                    Alumnus of IIM Ahmedabad (Strategic Management) &amp; SP Jain (FinTech). Industry Member on Board of Studies, S.B. Patil Institute of Management, Pune. Through Export Easy Hai (Kavneet International), he has guided 100+ shipments and supported 100+ students across 15+ countries.
                  </p>

                  <a
                    href={MENTOR_CONTENT.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#FF4D5E] hover:text-[#E50920] font-mono transition-colors"
                  >
                    <span>View Verified LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-[#E50920]" />
                  </a>
                </div>

                {/* See more / See less button ONLY ON MOBILE VIEW */}
                <button
                  type="button"
                  onClick={() => setIsBioExpanded(!isBioExpanded)}
                  className="sm:hidden mt-2 inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#E50920] hover:text-white transition-colors cursor-pointer py-1"
                  aria-expanded={isBioExpanded}
                >
                  <span>{isBioExpanded ? "See less" : "See more"}</span>
                  {isBioExpanded ? (
                    <ChevronUp className="w-3.5 h-3.5" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
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
                  <h4 className="text-sm font-bold text-white uppercase">Practical Six-Month Roadmap</h4>
                  <span className="text-xs text-white/60 leading-relaxed block">A clear step-by-step path from selecting your product to shipping your first Gulf cargo.</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 sm:p-0 rounded-xl sm:rounded-none bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="w-9 h-9 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center shrink-0 mt-0.5">
                  <Ship className="w-5 h-5 text-[#E50920]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Direct India-to-Gulf Focus</h4>
                  <span className="text-xs text-white/60 leading-relaxed block">Specialized insights into UAE, Saudi Arabia, Kuwait, and Qatar buyer verification and customs.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WEBINAR & REGISTRATION — COMPREHENSIVE CURRICULUM & BOOKING
         ========================================================================= */}
      <section id="webinar-section" className="relative py-20 sm:py-28 bg-[#030304] overflow-hidden">
        {/* Webinar Atmospheric Night Port Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/webinar-port-night.jpg"
            alt="Cargo container terminal at night with red floodlights and reflective ground"
            fill
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.45] contrast-[1.3]"
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
                "linear-gradient(90deg, rgba(3,3,4,0.94) 0%, rgba(3,3,4,0.8) 50%, rgba(3,3,4,0.92) 100%)",
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 space-y-16 sm:space-y-24">
          {/* 3.1 Main Pitch & Booking Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Webinar Pitch & Highlights */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em]">
                <span className="w-5 h-[2px] bg-[#E50920]" />
                <span>{WEBINAR_CONTENT.eyebrow}</span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-[0.92]">
                JOIN THE <br />
                <span className="text-[#E50920]">LIVE MASTER CLASS</span>
              </h2>

              {/* Subcopy */}
              <p className="text-sm sm:text-base text-white/85 max-w-lg leading-relaxed font-normal">
                {WEBINAR_CONTENT.description}
              </p>

              {/* 4 Feature Badges Grid */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                  <Video className="w-4 h-4 text-[#E50920] shrink-0" />
                  <span>Live online webinar (3 Hours)</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                  <GraduationCap className="w-4 h-4 text-[#E50920] shrink-0" />
                  <span>Hinglish interactive training</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                  <Users className="w-4 h-4 text-[#E50920] shrink-0" />
                  <span>Limited to 300 seats</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center gap-2.5 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#E50920] shrink-0" />
                  <span>WhatsApp reminders included</span>
                </div>
              </div>

              {/* Red CTA Button */}
              <div>
                <button
                  onClick={handleOpenModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white shadow-[0_10px_35px_rgba(229,9,32,0.65)] hover:shadow-[0_15px_45px_rgba(229,9,32,0.85)] transition-all cursor-pointer active:scale-98 border border-red-500/40"
                >
                  <span>Reserve Your {WEBINAR_PRICE_CONFIG.formatted} Seat Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
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
              <div className="w-full max-w-md rounded-2xl bg-[#0D0B0F]/95 backdrop-blur-xl border-2 border-[#E50920] shadow-[0_0_60px_rgba(229,9,32,0.45)] p-7 sm:p-8 text-left relative flex flex-col justify-between">
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

                  <button
                    onClick={handleOpenModal}
                    className="w-full py-3.5 px-6 rounded-lg font-bold text-sm uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl shadow-red-950/70 border border-red-500/40"
                  >
                    <span>Reserve My Seat for {WEBINAR_PRICE_CONFIG.formatted}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

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

            {/* DESKTOP VIEW: Grid of all 5 cards */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WHO_IS_THIS_FOR.audiences.map((aud, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-black/60 border border-white/10 hover:border-[#E50920]/40 p-5 backdrop-blur-md transition-all"
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

            {/* MOBILE VIEW ONLY: Carousel with Bottom-Right Minimalist Loading Bar */}
            <div
              className="sm:hidden relative"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="rounded-2xl bg-black/75 border border-[#E50920]/40 p-5 backdrop-blur-xl relative overflow-hidden shadow-xl min-h-[190px] flex flex-col justify-between">
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E50920] bg-[#E50920]/10 px-2.5 py-1 rounded border border-[#E50920]/30 font-semibold">
                      {WHO_IS_THIS_FOR.audiences[audienceIndex].tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono text-white/40">
                        0{audienceIndex + 1} / 0{WHO_IS_THIS_FOR.audiences.length}
                      </span>
                      <UserCheck className="w-4 h-4 text-[#E50920]" />
                    </div>
                  </div>

                  {/* Card Content with animation key */}
                  <div key={audienceIndex} className="animate-in fade-in duration-300">
                    <h4 className="text-base text-white font-semibold mb-1.5 leading-snug">
                      {WHO_IS_THIS_FOR.audiences[audienceIndex].role}
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {WHO_IS_THIS_FOR.audiences[audienceIndex].desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Navigation Controls & Bottom-Right Minimalist Loading Bar */}
                <div className="pt-3.5 border-t border-white/10 flex items-center justify-between mt-3.5">
                  {/* Nav Arrows & Dots */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={handlePrevAudience}
                      className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous audience card"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 text-white/70" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextAudience}
                      className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next audience card"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/70" />
                    </button>
                    <div className="flex items-center gap-1 ml-1">
                      {WHO_IS_THIS_FOR.audiences.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setAudienceIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === audienceIndex ? "w-3 bg-[#E50920]" : "w-1.5 bg-white/20"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Minimalistic Loading Bar at Bottom Right */}
                  <div className="flex items-center gap-2 pl-3">
                    <div className="w-14 h-1 bg-white/15 rounded-full overflow-hidden">
                      <div
                        key={audienceIndex}
                        className="h-full bg-[#E50920] rounded-full animate-progress-fill"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  className="rounded-xl bg-black/60 border border-white/10 hover:border-[#E50920]/30 p-5 backdrop-blur-md space-y-2"
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

            {/* DESKTOP VIEW: Grid of all 11 module cards */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WEBINAR_CURRICULUM.map((item) => (
                <div
                  key={item.number}
                  className="rounded-xl bg-black/55 border border-white/10 hover:border-[#E50920]/40 p-5 backdrop-blur-md transition-colors flex flex-col justify-between"
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

            {/* MOBILE VIEW ONLY: Compact Vertical Accordion (11 Modules) */}
            <div className="sm:hidden space-y-2">
              {WEBINAR_CURRICULUM.map((item) => {
                const isOpen = expandedModule === item.number;
                return (
                  <div
                    key={item.number}
                    className={`rounded-xl transition-all duration-200 border ${
                      isOpen
                        ? "bg-black/90 border-[#E50920]/60 shadow-[0_0_20px_rgba(229,9,32,0.18)]"
                        : "bg-black/60 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedModule(isOpen ? null : item.number)
                      }
                      className="w-full text-left px-4 py-3.5 flex items-center justify-between gap-3 min-h-[50px] cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex-1 min-w-0 pr-1">
                        <span className="text-[10px] font-mono font-bold text-[#E50920] tracking-widest uppercase block mb-1">
                          MODULE {item.number}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#E50920]/20 text-[#E50920]"
                            : "bg-white/5 text-white/50"
                        }`}
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#E50920]" : ""
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-3.5 pt-1 text-xs text-white/75 leading-relaxed border-t border-white/5 mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
                  className="rounded-xl bg-black/60 border border-white/10 p-5 backdrop-blur-md flex items-start gap-3.5"
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
            <div className="rounded-2xl bg-[#120a10]/80 border border-[#E50920]/40 p-6 sm:p-8 backdrop-blur-xl space-y-4">
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
            <div className="rounded-2xl bg-black/60 border border-white/10 hover:border-[#E50920]/40 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center mb-5">
                <Target className="w-5 h-5 text-[#E50920]" />
              </div>
              <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Clear and practical guidance</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Grounded advice and a structured six-month roadmap focused on execution rather than textbook theories.</p>
            </div>

            <div className="rounded-2xl bg-black/60 border border-white/10 hover:border-[#E50920]/40 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#E50920]/15 border border-[#E50920]/30 text-[#E50920] flex items-center justify-center mb-5">
                <FileCheck className="w-4 h-4 text-[#E50920]" />
              </div>
              <h3 className="text-base sm:text-lg text-white font-semibold mb-2">Real Gulf market opportunities</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">Evaluate high-demand products with genuine buying power in UAE (Dubai), Saudi Arabia, Qatar, and Kuwait.</p>
            </div>

            <div className="rounded-2xl bg-black/60 border border-white/10 hover:border-[#E50920]/40 p-6 sm:p-7 backdrop-blur-md shadow-xl transition-colors">
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

          <div className="space-y-3">
            {FAQS_CONTENT.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-black/60 border border-white/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/60 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

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
              <ExternalLink className="w-3.5 h-3.5 text-[#E50920]" />
            </a>
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
            <span>{WEBINAR_PRICE_CONFIG.formatted} Master Class</span>
          </div>
          <div className="text-[9.5px] text-white/70">{WEBINAR_CONTENT.details.schedule} ({WEBINAR_CONTENT.details.duration})</div>
        </div>

        <button
          onClick={handleOpenModal}
          className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-md shadow-red-950/60 cursor-pointer active:scale-95"
        >
          <span>Reserve {WEBINAR_PRICE_CONFIG.formatted}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

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

            {!verifiedRegistration ? (
              <div>
                <div className="flex items-start gap-3 mb-5">
                  <div className="w-9 h-9 rounded bg-[#E50920] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-md">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                      Reserve Your <br />
                      <span className="text-[#E50920]">{WEBINAR_PRICE_CONFIG.formatted} Webinar Seat</span>
                    </h3>
                    <p className="text-xs text-white/60 mt-1">
                      {WEBINAR_CONTENT.details.schedule} ({WEBINAR_CONTENT.details.duration}) • Live with Rahul Makwana
                    </p>
                  </div>
                </div>

                <form onSubmit={handlePaymentSubmit} className="space-y-3">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
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
                      className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit WhatsApp Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-lg pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Your City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/40">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Profession (e.g. Job/Trader)"
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        className="w-full bg-black/60 border border-white/15 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Product of Interest (Optional: e.g. Spices, Garments)"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E50920] transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wider bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-xl shadow-red-950/70 border border-red-500/40 disabled:opacity-60"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Reserve Seat for {WEBINAR_PRICE_CONFIG.formatted}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-[10.5px] text-white/50 leading-relaxed pt-2 space-y-1.5 border-t border-white/10 mt-2">
                    <p>
                      <strong className="text-white/80">Access note: </strong>
                      {WEBINAR_CONTENT.paymentNote}
                    </p>
                    <p>
                      <strong className="text-white/80">Strict refund note: </strong>
                      {WEBINAR_CONTENT.refundNote}
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-[#E50920]/20 text-[#E50920] mx-auto flex items-center justify-center mb-3 border border-[#E50920]/40">
                  <CheckCircle2 className="w-7 h-7 text-[#E50920]" />
                </div>

                <h4 className="font-display text-2xl text-white uppercase tracking-tight mb-1">
                  {isDuplicateNotice ? "Seat Already Reserved!" : "Seat Confirmed!"}
                </h4>

                <p className="text-xs text-white/80 mb-2 leading-relaxed">
                  Thank you, <strong className="text-white">{verifiedRegistration.name || formData.name}</strong>. Your {WEBINAR_PRICE_CONFIG.formatted} masterclass registration is confirmed.
                </p>

                <div className="bg-black/50 p-3 rounded-lg border border-white/10 text-left text-xs space-y-1 mb-5">
                  <div className="text-white/60">Registered Phone: <span className="text-white font-mono">{verifiedRegistration.phone || formData.phone}</span></div>
                  <div className="text-white/60">Schedule: <span className="text-white font-medium">{WEBINAR_CONTENT.details.schedule}</span></div>
                  <div className="text-white/60">Format: <span className="text-white font-medium">Live Zoom ({WEBINAR_CONTENT.details.duration})</span></div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-950/80 cursor-pointer"
                >
                  <span>Join Masterclass Group on WhatsApp</span>
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
