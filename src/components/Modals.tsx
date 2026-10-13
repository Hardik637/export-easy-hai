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
      <div className="relative w-full max-w-md rounded-2xl bg-[#0e0c0c] border border-white/15 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-[#E50920] mb-2">
              LIVE WEBINAR REGISTRATION
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
              {WEBINAR_CONTENT.subhead}
            </h3>

            <p className="text-xs sm:text-sm text-[#F5F0E8]/70 mb-5 leading-relaxed">
              {WEBINAR_CONTENT.details.schedule} • {WEBINAR_CONTENT.details.platform} (Fee: {WEBINAR_CONTENT.details.fee})
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                  WhatsApp Number (For Zoom Pass)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#E50920] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-white/70 mb-1.5 font-medium">
                  Product Category You Want to Export
                </label>
                <select
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full bg-[#161414] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#E50920] transition-colors"
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

              <div className="text-xs text-white/60 leading-relaxed pt-1">
                {WEBINAR_CONTENT.paymentNote}
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-lg font-semibold text-sm bg-[#E50920] hover:bg-[#c9071b] text-white transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] shadow-sm"
              >
                <span>{WEBINAR_CONTENT.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center mb-4 border border-emerald-500/20">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-1">
              Registration Received
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Thank You, {formData.name || "Exporter"}!
            </h3>

            <p className="text-sm text-[#F5F0E8]/75 mb-6 leading-relaxed">
              You will be redirected to WhatsApp to receive the Zoom link and joining instructions for{" "}
              <span className="text-white font-medium">{formData.phone || formData.email}</span>.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
