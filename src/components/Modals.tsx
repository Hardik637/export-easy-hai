"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { WEBINAR_CONTENT } from "@/data/siteData";

interface WebinarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WebinarModal({ isOpen, onClose }: WebinarModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    productInterest: "Textiles and apparel",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0F0708] border border-[#E50920]/40 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50920]/20 text-[#FF172F] text-[10px] font-bold tracking-widest uppercase mb-3">
              LIVE WEBINAR REGISTRATION
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-white uppercase mb-2">
              {WEBINAR_CONTENT.subhead}
            </h3>

            <p className="text-xs text-[#F5F0E8]/70 mb-4 leading-relaxed">
              {WEBINAR_CONTENT.details.schedule} • {WEBINAR_CONTENT.details.platform} (Fee: {WEBINAR_CONTENT.details.fee})
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-medium">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[16px] sm:text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E50920]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-medium">
                  WhatsApp Number (For Zoom Pass)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[16px] sm:text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E50920]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-[16px] sm:text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#E50920]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1 font-medium">
                  Product Category You Want to Export
                </label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full bg-[#1A0A0C] border border-white/15 rounded-xl px-4 py-3 text-[16px] sm:text-xs text-white focus:outline-none focus:border-[#E50920]"
                >
                  <option value="Textiles and apparel">Textiles and apparel</option>
                  <option value="Food and agriculture">Food and agriculture</option>
                  <option value="Spices and packaged goods">Spices and packaged goods</option>
                  <option value="Handicrafts and home décor">Handicrafts and home décor</option>
                  <option value="Engineering goods and components">Engineering goods and components</option>
                  <option value="Home and lifestyle products">Home and lifestyle products</option>
                  <option value="Beauty and personal-care products">Beauty and personal-care products</option>
                </select>
              </div>

              <div className="text-[10px] text-white/60 leading-relaxed pt-1">
                {WEBINAR_CONTENT.paymentNote}
              </div>

              <button
                type="submit"
                className="min-h-[48px] w-full mt-2 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#FF172F] hover:from-[#FF172F] hover:to-[#B80014] text-white transition-all shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>{WEBINAR_CONTENT.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono uppercase text-[#FFD86A] mb-1">
              Registration Received
            </div>

            <h3 className="font-display text-3xl text-white uppercase mb-2">
              Thank You, {formData.name || "Exporter"}!
            </h3>

            <p className="text-xs text-[#F5F0E8]/75 mb-6">
              You will be redirected to WhatsApp to receive the Zoom link and joining instructions for{" "}
              <span className="text-white font-medium">{formData.phone || formData.email}</span>.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
