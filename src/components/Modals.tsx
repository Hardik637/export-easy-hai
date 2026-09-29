"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Calendar, Clock, Video, Send, ArrowRight } from "lucide-react";

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
    productInterest: "Textiles & Garments",
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
              LIVE WEBINAR ACCESS
            </div>

            <h3 className="font-display text-3xl text-white uppercase mb-2">
              Reserve Your Seat
            </h3>

            <p className="text-xs text-[#F5F0E8]/70 mb-5 leading-relaxed">
              Live with Rahul Makwana • Saturday, 28 Sep 2026 at 7:00 PM IST on Zoom.
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
                  <option value="Textiles & Garments">Textiles &amp; Garments</option>
                  <option value="Food, Spices & Agriculture">Food, Spices &amp; Agriculture</option>
                  <option value="Handicrafts & Decor">Handicrafts &amp; Decor</option>
                  <option value="Engineering & Auto Goods">Engineering &amp; Auto Goods</option>
                  <option value="Home & Lifestyle">Home &amp; Lifestyle</option>
                  <option value="Ayurveda & Beauty">Ayurveda &amp; Beauty</option>
                  <option value="Merchant Export / General">Merchant Export / General</option>
                </select>
              </div>

              <button
                type="submit"
                className="min-h-[48px] w-full mt-4 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#FF172F] hover:from-[#FF172F] hover:to-[#B80014] text-white transition-all shadow-xl shadow-[#E50920]/40 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Confirm My Free Seat</span>
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
              Pass Confirmed #EEH-{Math.floor(100000 + Math.random() * 900000)}
            </div>

            <h3 className="font-display text-3xl text-white uppercase mb-2">
              You&apos;re In, {formData.name || "Exporter"}!
            </h3>

            <p className="text-xs text-[#F5F0E8]/75 mb-6">
              Your free webinar access pass and calendar invite have been sent to{" "}
              <span className="text-white font-medium">{formData.phone || formData.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-2 mb-6">
              <div className="flex items-center gap-2 text-white">
                <Calendar className="w-4 h-4 text-[#F2A62B]" />
                <span>Saturday, 28 Sep 2026</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-4 h-4 text-[#F2A62B]" />
                <span>7:00 PM (IST)</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Video className="w-4 h-4 text-[#F2A62B]" />
                <span>Zoom link dispatched 30 mins before session</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              Done &amp; Return to Page
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
