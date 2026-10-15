"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Compass } from "lucide-react";
import { NAV_LINKS, BRAND_NAME, BRAND_TAGLINE } from "@/data/siteData";
import MobileDotsNav from "@/components/MobileDotsNav";

interface NavbarProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function Navbar({ onOpenWebinarModal, onOpenCourseModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // Light mode starts as the page journey reaches sunrise and daylight sections (~58% of total page height)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setIsLightMode(progress > 0.58);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isLightMode
              ? "bg-[#FAF6EE]/90 backdrop-blur-md py-3 border-b border-[#D45A20]/15 shadow-sm"
              : "bg-[#050505]/85 backdrop-blur-md py-3 border-b border-white/10 shadow-lg"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="editorial-container flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group min-h-[44px]">
            <div className="w-9 h-9 rounded-lg bg-[#E50920] flex items-center justify-center shadow-md shadow-red-950/30 text-white">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div
                className={`font-display text-xl sm:text-2xl tracking-wide uppercase transition-colors leading-tight ${
                  isLightMode ? "text-[#111111]" : "text-white"
                }`}
              >
                {BRAND_NAME}
              </div>
              <div
                className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold transition-colors ${
                  isLightMode ? "text-[#8A4A1C]" : "text-[#D45A20]"
                }`}
              >
                {BRAND_TAGLINE}
              </div>
            </div>
          </a>

          {/* Desktop Nav Links (from PDF Navigation) */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[#E50920] focus:outline-none focus:underline ${
                  isLightMode ? "text-[#111111]" : "text-white/95"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Explore Courses CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#courses"
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#E50920] focus:ring-offset-2 ${
                isLightMode
                  ? "bg-[#111111] text-white hover:bg-[#E50920]"
                  : "bg-[#E50920] text-white hover:bg-[#c8071a]"
              }`}
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 8-Dot Vertical Navigation on Right Middle (Mobile Only) */}
      <MobileDotsNav />
    </>
  );
}
