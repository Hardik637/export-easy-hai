"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface FounderBioProps {
  name: string;
  bio1: string;
  linkedinUrl: string;
}

export function FounderBio({ name, bio1, linkedinUrl }: FounderBioProps) {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-[#0D0B0F]/95 border border-[#E50920]/40 p-5 sm:p-7 shadow-xl relative max-w-[320px] sm:max-w-[340px] mx-auto lg:max-w-none">
      {/* Red Accent Marker */}
      <div className="w-6 h-1 bg-[#E50920] mb-3 sm:mb-4" />

      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF4D5E] font-bold block mb-1">
        FOUNDER &amp; EXPORT MENTOR
      </span>

      <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2 sm:mb-3">
        {name}
      </h3>

      {/* Top important lines (clamped to 3 lines on mobile when collapsed, full on desktop) */}
      <p
        className={`text-xs sm:text-sm text-white/80 leading-relaxed mb-2 sm:mb-4 ${
          !isBioExpanded ? "line-clamp-3 sm:line-clamp-none" : ""
        }`}
      >
        {bio1}
      </p>

      {/* Rest of the bio & credentials — openable on mobile, always visible on desktop */}
      <div className={isBioExpanded ? "block" : "hidden sm:block"}>
        <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3 sm:pt-4 mb-3">
          Alumnus of IIM Ahmedabad (Strategic Management) &amp; SP Jain (FinTech). Industry Member on Board of Studies, S.B. Patil Institute of Management, Pune. Through Export Easy Hai (Kavneet International), he has guided 100+ shipments and supported 100+ students across 15+ countries.
        </p>

        <a
          href={linkedinUrl}
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
  );
}
