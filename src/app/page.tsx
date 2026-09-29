"use client";

import React, { useState } from "react";
import CinematicCanvas from "@/components/CinematicCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealitySection from "@/components/RealitySection";
import OpportunitySection from "@/components/OpportunitySection";
import HowItWorks from "@/components/HowItWorks";
import ProductCategories from "@/components/ProductCategories";
import MentorSection from "@/components/MentorSection";
import CourseSection from "@/components/CourseSection";
import WebinarSection from "@/components/WebinarSection";
import SuccessStories from "@/components/SuccessStories";
import FraudPrevention from "@/components/FraudPrevention";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { WebinarModal } from "@/components/Modals";

export default function Home() {
  const [webinarModalOpen, setWebinarModalOpen] = useState(false);

  const handleOpenWebinar = () => {
    setWebinarModalOpen(true);
  };

  const handleOpenCourses = () => {
    const coursesElem = document.getElementById("courses");
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Continuous scroll-linked cinematic visual transformation canvas */}
      <CinematicCanvas />

      {/* Floating / Sticky navigation */}
      <Navbar
        onOpenWebinarModal={handleOpenWebinar}
        onOpenCourseModal={handleOpenCourses}
      />

      {/* Hero Section — Blood Moon Night & Port */}
      <Hero
        onOpenWebinarModal={handleOpenWebinar}
        onOpenCourseModal={handleOpenCourses}
      />

      {/* Section 2 — The Reality (A Stable Job Gives Security) */}
      <RealitySection />

      {/* Section 3 — The Opportunity (Indian Products. Global Demand.) */}
      <OpportunitySection onOpenCourseModal={handleOpenCourses} />

      {/* Section 4 — How It Works (Small Steps. Big Dreams. 7-step timeline) */}
      <HowItWorks onOpenCourseModal={handleOpenCourses} />

      {/* Section 5 — Product Opportunities (Every Indian Product Has a Global Market) */}
      <ProductCategories onOpenCourseModal={handleOpenCourses} />

      {/* Section 6 — Learn From Experience (Rahul Makwana Mentor) */}
      <MentorSection />

      {/* Section 7 — Featured Courses (4 Practical Courses) */}
      <CourseSection />

      {/* Section 8 — Upcoming Webinar (Dark Port Visual Callback) */}
      <WebinarSection onOpenWebinarModal={handleOpenWebinar} />

      {/* Section 9 — Success Stories (From Learners to Exporters) */}
      <SuccessStories />

      {/* Section 10 — Fraud Prevention (Avoid Scams. Export Smarter.) */}
      <FraudPrevention />

      {/* Section 11 — FAQ (8 Questions & Practical Answers) */}
      <FAQSection />

      {/* Section 12 — Final CTA (Full Sunrise, Container Ship to Open Horizon) */}
      <FinalCTA
        onOpenWebinarModal={handleOpenWebinar}
        onOpenCourseModal={handleOpenCourses}
      />

      {/* Footer */}
      <Footer />

      {/* Interactive Webinar RSVP Modal */}
      <WebinarModal
        isOpen={webinarModalOpen}
        onClose={() => setWebinarModalOpen(false)}
      />
    </main>
  );
}
