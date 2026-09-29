"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, BookOpen, Star, Check } from "lucide-react";
import { COURSES, CourseItem } from "@/data/siteData";

export default function CourseSection() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);

  return (
    <section
      id="courses"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#FAF6EE] text-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4 text-[#E50920] text-xs font-bold tracking-widest uppercase">
              <span className="w-6 h-[2px] bg-[#E50920]" />
              FEATURED COURSES
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.88] tracking-tight uppercase text-[#111111] mb-4">
              Practical Courses <br />
              for{" "}
              <span className="text-[#E50920]">
                Aspiring Exporters.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#444444] font-normal">
              Learn at your own pace with structured courses built for real-world application.
            </p>
          </div>

          <button
            onClick={() => setSelectedCourse(COURSES[0])}
            className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-[#E50920] transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className="rounded-3xl overflow-hidden bg-white border border-[#EAD5AF] hover:border-[#E50920] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {course.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E50920] text-[10px] font-bold tracking-wider uppercase text-white shadow-md">
                    {course.badge}
                  </div>
                )}
              </div>

              {/* Course Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#A83A19] mb-1">
                    {course.category}
                  </div>

                  <h3 className="font-display text-2xl text-[#111111] uppercase tracking-wide group-hover:text-[#E50920] transition-colors leading-tight mb-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-[#666666] py-3 border-y border-[#F0E6D2] mb-3">
                    <span className="flex items-center gap-1.5 font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-[#D45A20]" />
                      {course.lessons}
                    </span>
                    <span className="text-[11px]">{course.access}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-[#999999] line-through">
                        {course.originalPrice}
                      </div>
                      <div className="font-display text-2xl text-[#111111]">
                        {course.price}
                      </div>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#E50920] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Details Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl text-[#111111] border border-[#EAD5AF]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-mono uppercase text-[#D45A20]">
                    {selectedCourse.category} • {selectedCourse.lessons}
                  </span>
                  <h3 className="font-display text-3xl uppercase mt-1 leading-tight">
                    {selectedCourse.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 rounded-full bg-black/5 text-[#555555] hover:text-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs sm:text-sm text-[#444444] mb-5">
                {selectedCourse.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                  Curriculum Highlights:
                </div>
                {selectedCourse.modules.map((m) => (
                  <div key={m} className="p-2.5 rounded-xl bg-[#FAF6EE] text-xs text-[#222222] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E50920] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF6EE] border border-[#EAD5AF] mb-5">
                <div>
                  <div className="text-[10px] text-[#888888] line-through">{selectedCourse.originalPrice}</div>
                  <div className="font-display text-3xl text-[#E50920]">{selectedCourse.price}</div>
                </div>
                <div className="text-right text-xs text-[#555555]">
                  <div>⭐ {selectedCourse.rating} Rating</div>
                  <div>{selectedCourse.students}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  alert(`Enrolling in ${selectedCourse.title}. Redirecting to secure gateway...`);
                  setSelectedCourse(null);
                }}
                className="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#E50920] hover:bg-[#FF172F] text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E50920]/30"
              >
                <span>Enroll in Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
