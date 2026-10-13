"use client";

import React from "react";
import { FOOTER_CONTENT } from "@/data/siteData";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#050505] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#E50920] flex items-center justify-center text-white shadow-md shadow-red-950/30">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <div>
                <div className="font-display text-xl text-white tracking-wide uppercase">
                  {FOOTER_CONTENT.brand}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-[#D45A20] font-semibold">
                  {FOOTER_CONTENT.tagline}
                </div>
              </div>
            </div>

            <p className="text-sm text-[#F5F0E8]/90 max-w-sm mb-6 leading-relaxed">
              {FOOTER_CONTENT.mission}
            </p>

            {/* Contact details */}
            <div className="text-sm text-white space-y-1">
              <div>
                <span className="text-white/70 uppercase font-mono text-[10px] tracking-wider block">Contact Email:</span>
                <a href={`mailto:${FOOTER_CONTENT.contactEmail}`} className="text-[#FFD86A] hover:underline font-mono">
                  {FOOTER_CONTENT.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base tracking-wider uppercase text-white mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#F5F0E8]/85">
              {FOOTER_CONTENT.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#E50920] transition-colors focus:outline-none focus:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-base tracking-wider uppercase text-white mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-xs text-[#F5F0E8]/85">
              {FOOTER_CONTENT.legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#E50920] transition-colors focus:outline-none focus:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer disclaimer from PDF */}
        <div className="pt-8 border-t border-white/10 mb-6">
          <p className="text-[11px] text-white/80 leading-relaxed">
            <strong className="text-white font-semibold">Footer disclaimer: </strong>
            {FOOTER_CONTENT.disclaimer}
          </p>
        </div>

        <div className="pt-4 border-t border-white/5 text-center text-xs text-white/70">
          &copy; 2026 {FOOTER_CONTENT.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
