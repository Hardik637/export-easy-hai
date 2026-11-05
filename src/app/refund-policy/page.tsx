import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, RotateCcw } from "lucide-react";
import { FOOTER_CONTENT } from "@/data/siteData";

export const metadata = {
  title: "Refund Policy | Export Easy Hai",
  description: "Refund and cancellation policy for masterclasses by Export Easy Hai (Kavneet International).",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#030304] text-white selection:bg-[#E50920] selection:text-white font-sans">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-[#070609]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/landingpage"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#E50920]" />
            <span>Back to Masterclass</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-[#E50920] flex items-center justify-center text-white">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-display text-lg tracking-wider">EXPORT EASY HAI</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E50920] font-bold tracking-[0.2em] mb-3">
          <RotateCcw className="w-4 h-4" />
          <span>PAYMENT POLICIES</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
          REFUND &amp; CANCELLATION POLICY
        </h1>
        <p className="text-xs font-mono text-white/50 mb-10">
          Last Updated: November 2026 • Governing Entity: Kavneet International
        </p>

        <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight mb-3">
              1. Non-Refundable Live Masterclasses
            </h2>
            <p>
              Registrations for the <strong>Export Business Master Class</strong> (including the promotional ₹9 seat booking) are <strong>strictly non-refundable</strong> once payment has been successfully completed.
            </p>
            <p className="mt-3 text-white/70 text-xs sm:text-sm">
              <strong>Why is this policy in place?</strong>
              <br />
              Live interactive workshop seating is strictly capped at 300 attendees per batch to ensure high-bandwidth delivery and meaningful doubt-solving. Booking a seat reserves real-time capacity and triggers immediate provisioning of digital resources, workbooks, and automated WhatsApp onboarding sequences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              2. Non-Attendance &amp; Missed Sessions
            </h2>
            <p>
              If you are unable to attend the scheduled live masterclass session on Sunday, registration fees are not refundable and are not automatically transferred to a future date. Because live workshop recordings are not distributed, attendees are encouraged to plan their calendar and join promptly at 1:00 PM IST.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              3. Event Cancellation or Postponement by Organizer
            </h2>
            <p>
              In the rare event that Export Easy Hai (Kavneet International) cancels or permanently cancels a masterclass session without offering a rescheduled alternative:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li>100% of the registration fee will be refunded back to the original payment method used during checkout.</li>
              <li>Refund processing is completed via Razorpay and typically reflects in your bank account or card statement within 5 to 7 business days.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              4. Duplicate or Erroneous Transactions
            </h2>
            <p>
              If your bank account was debited multiple times due to a network glitch during Razorpay checkout, please contact our support team with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li>Your registered full name, email, and WhatsApp number.</li>
              <li>Bank transaction references / Razorpay Payment IDs.</li>
            </ul>
            <p className="mt-2">
              Verified duplicate charges will be refunded in full to the original source within 5 to 7 working days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              5. Customer Support Contact
            </h2>
            <p>
              For all payment inquiries or transaction support, please reach out directly:
            </p>
            <p className="font-mono text-xs text-[#FFD86A] bg-black/40 p-4 rounded-xl border border-white/5">
              Kavneet International (Export Easy Hai)
              <br />
              Email: {FOOTER_CONTENT.contactEmail}
              <br />
              WhatsApp Support: {FOOTER_CONTENT.contactWhatsApp}
              <br />
              Address: {FOOTER_CONTENT.address}
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#020203] py-8 text-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Export Easy Hai (Kavneet International). All rights reserved.</p>
      </footer>
    </div>
  );
}
