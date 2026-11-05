import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, FileText } from "lucide-react";
import { FOOTER_CONTENT } from "@/data/siteData";

export const metadata = {
  title: "Terms and Conditions | Export Easy Hai",
  description: "Terms and conditions of service for Export Easy Hai (Kavneet International).",
};

export default function TermsPage() {
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
          <FileText className="w-4 h-4" />
          <span>TERMS OF SERVICE</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-4">
          TERMS &amp; CONDITIONS
        </h1>
        <p className="text-xs font-mono text-white/50 mb-10">
          Last Updated: November 2026 • Governing Entity: Kavneet International
        </p>

        <div className="space-y-8 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
          <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website, purchasing a masterclass ticket, or registering for any training program provided by <strong>Export Easy Hai (operated by Kavneet International)</strong>, you agree to be bound by these Terms and Conditions. If you do not agree, please do not register for our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              2. Nature of Services (Educational Only)
            </h2>
            <p>
              Export Easy Hai provides live workshops, digital roadmaps, masterclasses, and educational frameworks concerning international trade from India to Gulf markets.
            </p>
            <p className="text-[#FFD86A] bg-amber-500/10 p-4 rounded-xl border border-amber-500/20 font-medium text-xs sm:text-sm">
              <strong>CRITICAL DISCLAIMER:</strong> All content, checklists, case studies, and frameworks are strictly educational. We do NOT provide investment advice, legal counsel, or guarantees of commercial success. Export Easy Hai does NOT promise guaranteed shipments, verified buyer contracts, or guaranteed monetary returns. International trade involves financial risk, capital commitment, and personal business execution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              3. Registration &amp; Payment Terms
            </h2>
            <p>
              Masterclass access fees must be paid in full prior to admission. Prices are displayed in Indian Rupees (INR) and processed via authorized payment gateways (Razorpay). Each registration is valid for one individual attendee.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              4. Masterclass Attendance &amp; Recording Policy
            </h2>
            <p>
              Our live masterclasses are scheduled for real-time interactive training. Session recordings are <strong>not provided</strong> by default unless specifically noted. Participants are expected to join punctually via their registered Zoom credentials. Unauthorized screen recording, audio taping, or rebroadcasting of masterclass sessions is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              5. Intellectual Property
            </h2>
            <p>
              All curriculum materials, worksheets, checklists, frameworks, logos, and graphics are the exclusive intellectual property of <strong>Kavneet International</strong> and mentor <strong>Rahul Makwana</strong>. You are granted a personal, non-transferable license to use downloaded templates for your own business planning. Commercial resale, redistribution, or unauthorized publication of these materials is illegal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by Indian law, Kavneet International, its founder Rahul Makwana, and associates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your export decisions, supplier selections, buyer defaults, customs penalties, or financial losses incurred during your trading activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl text-white uppercase tracking-tight">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the Republic of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Sambhaji Nagar (Aurangabad), Maharashtra, India</strong>.
            </p>
            <p className="mt-2 text-xs font-mono text-white/60 bg-black/40 p-3 rounded-lg border border-white/5">
              Operating Entity: {FOOTER_CONTENT.legalEntity} • Address: {FOOTER_CONTENT.address} • Email: {FOOTER_CONTENT.contactEmail}
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
