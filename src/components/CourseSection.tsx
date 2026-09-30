"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Check } from "lucide-react";
import { COURSES, CourseItem } from "@/data/siteData";

export default function CourseSection() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  return (
    <section
      id="courses"
      className="relative py-14 sm:py-24 overflow-hidden bg-transparent text-[#111111] scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-6 sm:mb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2.5 text-[#E50920] text-[11px] font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#E50920]" />
              FEATURED COURSES
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[0.92] tracking-tight uppercase text-[#111111] mb-2">
              Practical Courses <br />
              for{" "}
              <span className="text-[#E50920]">
                Aspiring Exporters.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-[#555555] font-normal">
              Learn at your own pace with structured courses built for real-world application.
            </p>
          </div>

          <button
            onClick={() => setSelectedCourse(COURSES[0])}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-[#E50920] transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 self-start md:self-auto"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid on Desktop / Smooth Snap Carousel on Mobile */}
        <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x -mx-5 px-5 sm:mx-0 sm:px-0">
          {COURSES.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className="w-[82vw] max-w-[300px] lg:w-auto lg:max-w-none shrink-0 snap-start rounded-2xl overflow-hidden bg-white/95 backdrop-blur-md border border-[#EAD5AF] hover:border-[#E50920] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group cursor-pointer"
            >
              <div className="relative h-40 sm:h-44 w-full overflow-hidden shrink-0 bg-black">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {course.badge && (
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#E50920] text-[9px] font-bold tracking-wider uppercase text-white shadow-sm">
                    {course.badge}
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="font-sans font-bold text-sm sm:text-base text-[#111111] tracking-tight group-hover:text-[#E50920] transition-colors leading-snug mb-1.5">
                    {course.title}
                  </div>

                  <p className="text-xs text-[#666666] leading-relaxed mb-3 line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-[#777777] py-2.5 border-y border-[#F0E6D2] mb-3">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#D45A20]" />
                      {course.lessons}
                    </span>
                    <span>{course.access}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="font-sans font-bold text-base sm:text-lg text-[#111111]">
                      {course.price}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#E50920] group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="lg:hidden text-center mt-2.5 text-[11px] text-[#777777] font-medium">
          ← Swipe to explore courses (4) →
        </div>

        {/* Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl text-[#111111] border border-[#EAD5AF]">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-sans font-bold text-xl uppercase tracking-tight leading-tight">
                    {selectedCourse.title}
                  </div>
                  <span className="text-xs text-[#D45A20] font-medium">{selectedCourse.lessons} • {selectedCourse.access}</span>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="w-9 h-9 rounded-full bg-black/5 text-[#555555] hover:text-black flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-[#555555] mb-4 leading-relaxed">
                {selectedCourse.description}
              </p>

              <div className="space-y-1.5 mb-5">
                {selectedCourse.modules.slice(0, 3).map((m) => (
                  <div key={m} className="p-2.5 rounded-lg bg-[#FAF6EE] text-xs text-[#222222] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E50920] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF6EE] mb-4">
                <div className="font-sans font-bold text-xl text-[#E50920]">{selectedCourse.price}</div>
                <div className="text-xs text-[#666666]">⭐ {selectedCourse.rating} ({selectedCourse.students})</div>
              </div>

              <button
                onClick={() => {
                  alert(`Enrolling in ${selectedCourse.title}.`);
                  setSelectedCourse(null);
                }}
                className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#E50920] text-white flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Enroll in Course</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
