import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Shield } from "lucide-react";
import { FOOTER_CONTENT } from "@/data/siteData";

export const metadata = {
  title: "Privacy Policy | Export Easy Hai",
  description: "Privacy policy and data handling practices of Export Easy Hai (Kavneet International).",
};

export default function PrivacyPolicyPage() {
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
          <Shield className="w-4 h-4" />
          <span>LEGAL COMPLIANCE</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
          PRIVACY POLICY
        </h1>
        <p className="text-xs font-mono text-white/50 mb-10">
          Last Updated: November 2026 • Effective Date: January 1, 2026
        </p>

        <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight mb-3">
              1. Introduction &amp; Entity Information
            </h2>
            <p>
              Welcome to <strong>Export Easy Hai</strong>, an initiative operated by <strong>Kavneet International</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), registered at:
            </p>
            <p className="mt-2 text-white/90 font-mono text-xs bg-black/40 p-3 rounded-lg border border-white/5">
              {FOOTER_CONTENT.address}
              <br />
              Email: {FOOTER_CONTENT.contactEmail} | WhatsApp: {FOOTER_CONTENT.contactWhatsApp}
            </p>
            <p className="mt-3">
              We respect your privacy and are committed to protecting any personal information you share with us through our website, webinar registration forms, and training programs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              2. Information We Collect
            </h2>
            <p>
              When you register for our masterclasses, express interest in training programs, or communicate with us, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li><strong>Contact Information:</strong> Full name, email address, WhatsApp mobile number, and city.</li>
              <li><strong>Professional Background:</strong> Current employment status, trading experience, and product categories of interest.</li>
              <li><strong>Payment Telemetry:</strong> Transaction identifiers and payment status provided securely via our payment gateway (Razorpay). We do not store credit card or debit card numbers on our servers.</li>
              <li><strong>Technical Data:</strong> IP address, device browser type, and interaction metrics to maintain platform security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              3. Purpose of Processing
            </h2>
            <p>We process your personal data strictly for legitimate operational purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li>Delivering masterclass access details, Zoom credentials, and course schedules.</li>
              <li>Sending automated WhatsApp session reminders, workbook materials, and administrative updates.</li>
              <li>Verifying payment authorization and generating digital transaction receipts.</li>
              <li>Responding to user inquiries and providing customer support.</li>
              <li>Preventing unauthorized duplication, fraud, and maintaining platform security.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              4. Data Sharing &amp; Third Parties
            </h2>
            <p>
              We do not sell, rent, or trade your personal data to third-party marketing companies. Data is shared solely with trusted service providers essential for platform operations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-white/75">
              <li><strong>Payment Gateway:</strong> Razorpay Software Private Limited for secure transactional processing.</li>
              <li><strong>Communication Platforms:</strong> Official WhatsApp Business API / Meta and email service providers for delivery of joining links.</li>
              <li><strong>Virtual Meeting Software:</strong> Zoom Video Communications for webinar hosting.</li>
              <li><strong>Statutory Authorities:</strong> If required by Indian law or lawful government requests.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              5. Data Retention &amp; Security
            </h2>
            <p>
              We implement industry-standard encryption, SSL transmission, and access restrictions to protect your personal information. Information is retained only as long as necessary to fulfill the educational purpose or comply with statutory accounting requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              6. Your Rights &amp; Contact Information
            </h2>
            <p>
              You may request access to, correction of, or deletion of your registered contact information by writing to us at:
            </p>
            <p className="font-mono text-xs text-[#FFD86A]">
              Email: {FOOTER_CONTENT.contactEmail}
              <br />
              Subject: Data Privacy Request – Export Easy Hai
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
