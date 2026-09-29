"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/data/siteData";

interface NavbarProps {
  onOpenWebinarModal?: () => void;
  onOpenCourseModal?: () => void;
}

export default function Navbar({ onOpenWebinarModal, onOpenCourseModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);

      // Light mode starts around 60% of the page
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
              ? "bg-[#FFF1D2]/80 backdrop-blur-md py-3 border-b border-[#D45A20]/15 shadow-sm"
              : "bg-[#050505]/80 backdrop-blur-md py-3 border-b border-white/10 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#E50920] flex items-center justify-center shadow-lg shadow-[#E50920]/40 transform group-hover:scale-105 transition-transform">
              <span className="font-display text-2xl text-white font-bold leading-none select-none">
                &lt;
              </span>
            </div>
            <div>
              <div
                className={`font-display text-xl sm:text-2xl tracking-wide uppercase transition-colors leading-tight ${
                  isLightMode ? "text-[#111111]" : "text-white"
                }`}
              >
                EXPORT EASY HAI
              </div>
              <div
                className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold transition-colors ${
                  isLightMode ? "text-[#8A4A1C]" : "text-[#D45A20]"
                }`}
              >
                Explore. Learn. Grow.
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[#E50920] ${
                  isLightMode ? "text-[#222222]" : "text-white/85"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenCourseModal}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer shadow-md ${
                isLightMode
                  ? "bg-[#111111] text-white hover:bg-[#E50920]"
                  : "bg-white text-black hover:bg-[#FFD86A]"
              }`}
            >
              <span>Start Learning</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`p-2 rounded-lg lg:hidden cursor-pointer transition-colors ${
              isLightMode ? "text-[#111111]" : "text-white"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#090909] border-l border-[#E50920]/30 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E50920] flex items-center justify-center">
                  <span className="font-display text-lg text-white font-bold">&lt;</span>
                </div>
                <div>
                  <div className="font-display text-lg text-white">EXPORT EASY HAI</div>
                  <div className="text-[9px] tracking-widest text-[#D45A20]">Explore. Learn. Grow.</div>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-6 flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-white/90 hover:text-white hover:bg-[#E50920]/20 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#E50920]" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCourseModal) onOpenCourseModal();
              }}
              className="w-full py-3.5 px-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#E50920] text-white flex items-center justify-center gap-2 shadow-lg shadow-[#E50920]/30"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenWebinarModal) onOpenWebinarModal();
              }}
              className="w-full py-3 px-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-white/10 border border-white/20 text-white flex items-center justify-center gap-2"
            >
              <span>Watch Free Webinar</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
