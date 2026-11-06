"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { WEBINAR_PRICE_CONFIG, WEBINAR_CONTENT } from "@/data/siteData";
import { useRegistrationModal } from "./RegistrationModalContext";

export function StickyMobileCta() {
  const { openModal } = useRegistrationModal();

  return (
    <div className="sm:hidden fixed bottom-3 inset-x-3 z-50 bg-[#0d0b0f]/95 border border-[#E50920]/60 p-2.5 rounded-full backdrop-blur-md flex items-center justify-between shadow-2xl">
      <div className="leading-tight pl-3">
        <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E50920] animate-pulse" />
          <span>{WEBINAR_PRICE_CONFIG.formatted} Master Class</span>
        </div>
        <div className="text-[9.5px] text-white/70">
          {WEBINAR_CONTENT.details.schedule} ({WEBINAR_CONTENT.details.duration})
        </div>
      </div>

      <button
        type="button"
        onClick={openModal}
        className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold bg-[#E50920] hover:bg-[#c9071b] text-white shadow-md shadow-red-950/60 cursor-pointer active:scale-95 transition-transform"
      >
        <span>Reserve {WEBINAR_PRICE_CONFIG.formatted}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
