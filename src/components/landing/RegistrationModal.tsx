"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Compass,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  ArrowRight,
  Loader2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import {
  BRAND_NAME,
  WEBINAR_PRICE_CONFIG,
  WEBINAR_CONTENT,
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

// Helper to dynamically load Razorpay checkout script on demand
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

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
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

  // Close on Escape key & manage scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

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
            if (verifyData.success) {
              setVerifiedRegistration(verifyData.registration);
            } else {
              setErrorMessage(
                verifyData.error ||
                  "Payment succeeded, but registration verification failed. Please contact support via WhatsApp."
              );
            }
          } catch {
            setErrorMessage("Network error during payment verification. Please reach out to support.");
          } finally {
            setIsLoading(false);
          }
        },
      };

      const win = window as unknown as RazorpayWindow;
      if (win.Razorpay) {
        const razorpayInstance = new win.Razorpay(options);
        razorpayInstance.on("payment.failed", (response: RazorpayFailureResponse) => {
          setIsLoading(false);
          setErrorMessage(
            response.error?.description || "Payment failed or was cancelled. Please try again."
          );
        });
        razorpayInstance.open();
      } else {
        throw new Error("Payment gateway could not be loaded.");
      }
    } catch (err: unknown) {
      setIsLoading(false);
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const whatsappLink = verifiedRegistration
    ? `https://wa.me/919131676447?text=${encodeURIComponent(
        `Hello Rahul sir, I have confirmed my ${WEBINAR_PRICE_CONFIG.formatted} seat for the Export Business Master Class! My name is ${verifiedRegistration.name || formData.name}. Please share my Zoom credentials and joining materials.`
      )}`
    : `https://wa.me/919131676447`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D0B0F] border-2 border-[#E50920] p-6 sm:p-8 shadow-[0_0_50px_rgba(229,9,32,0.4)] text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
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
  );
}
