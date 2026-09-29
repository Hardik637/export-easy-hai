"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Clock, Star, Users, Check, Sparkles } from "lucide-react";
import { COURSES, CourseItem } from "@/data/siteData";

interface CourseSectionProps {
  onSelectCourse?: (course: CourseItem) => void;
}

export default function CourseSection({ onSelectCourse }: CourseSectionProps) {
  const [activeCourseModal, setActiveCourseModal] = useState<CourseItem | null>(null);

  const handleOpenCourse = (course: CourseItem) => {
    setActiveCourseModal(course);
    if (onSelectCourse) onSelectCourse(course);
  };

  return (
    <section
      id="courses"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E50920]/15 border border-[#E50920]/30 text-[#FF172F] text-xs font-bold tracking-widest uppercase mb-6">
              FEATURED COURSES
            </div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white tracking-tight mb-4">
              Practical Courses <br />
              for{" "}
              <span className="text-[#FF172F]">
                Aspiring Exporters.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#F5F0E8]/85 font-normal">
              Learn at your own pace with structured courses built for real-world application. From basic license generation to shipping your first 40ft container.
            </p>
          </div>

          <button
            onClick={() => handleOpenCourse(COURSES[0])}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center gap-2 transition-all cursor-pointer group shrink-0"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Courses Grid: 4 cards on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl overflow-hidden bg-black/45 backdrop-blur-md border border-white/15 hover:border-[#FF172F]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Badge if present */}
                {course.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E50920] text-[10px] font-bold tracking-wider uppercase text-white shadow-lg">
                    {course.badge}
                  </div>
                )}

                {/* Rating pill */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-[#FFD86A] flex items-center gap-1">
                  <Star className="w-3 h-3 fill-[#FFD86A] text-[#FFD86A]" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              </div>

              {/* Course Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#F2A62B] mb-1">
                    {course.category}
                  </div>

                  <h3 className="font-display text-2xl text-white uppercase tracking-wide group-hover:text-[#FF172F] transition-colors mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#F5F0E8]/70 leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div>
                  {/* Meta items */}
                  <div className="flex items-center justify-between text-xs text-[#F5F0E8]/60 py-3 border-y border-white/10 mb-4">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#F2A62B]" />
                      {course.lessons}
                    </span>
                    <span>{course.access}</span>
                  </div>

                  {/* Pricing and Action */}
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-white/50 line-through">
                        {course.originalPrice}
                      </div>
                      <div className="font-display text-2xl text-white">
                        {course.price}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenCourse(course)}
                      className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-[#E50920] text-white transition-all cursor-pointer flex items-center gap-1.5 group-hover:bg-[#E50920]"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Course Details Modal */}
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-xl rounded-3xl bg-[#120607] border border-[#E50920]/40 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono uppercase text-[#F2A62B]">
                    {activeCourseModal.category} • {activeCourseModal.lessons}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl text-white uppercase mt-1">
                    {activeCourseModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCourseModal(null)}
                  className="p-2 rounded-full bg-white/10 text-white/70 hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#F5F0E8]/85 mb-6">
                {activeCourseModal.description}
              </p>

              {/* Modules Breakdown */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFD86A] mb-3">
                  What You Will Master:
                </h4>
                <div className="space-y-2.5">
                  {activeCourseModal.modules.map((mod, i) => (
                    <div
                      key={mod}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-white"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E50920]/20 text-[#FF172F] flex items-center justify-center font-bold text-[10px] shrink-0">
                        {i + 1}
                      </div>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-black/60 border border-white/10 mb-6">
                <div>
                  <div className="text-[10px] text-white/50 line-through">
                    Regular: {activeCourseModal.originalPrice}
                  </div>
                  <div className="font-display text-3xl text-[#FFD86A]">
                    {activeCourseModal.price}{" "}
                    <span className="text-xs font-normal text-white/70">One-time / Lifetime</span>
                  </div>
                </div>
                <div className="text-right text-xs text-white/60">
                  <div>⭐ {activeCourseModal.rating} Rating</div>
                  <div>{activeCourseModal.students}</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    alert(`Enrollment opened for ${activeCourseModal.title}! Directing to secure checkout portal.`);
                    setActiveCourseModal(null);
                  }}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-[#E50920] to-[#B80014] hover:from-[#FF172F] hover:to-[#E50920] text-white flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-[#E50920]/30"
                >
                  <span>Enroll in Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
