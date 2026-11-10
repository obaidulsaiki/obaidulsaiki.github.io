'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen,
  Microscope,
  Sparkles,
  ChevronRight,
  School,
} from 'lucide-react';
import { educationMilestones, courseCategories } from '@/data/education';

export default function EducationTimeline() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  return (
    <div className="space-y-16">
      {/* 1. Chronological Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-accent-primary before:via-accent-soft before:to-surface-border">
        {educationMilestones.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Node Icon Indicator */}
            <div className="absolute -left-6 sm:-left-10 top-1.5 flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-canvas border-2 border-accent-primary text-accent-primary shadow-soft-sm group-hover:scale-110 group-hover:bg-accent-soft/30 transition-all duration-300">
              {index === 0 ? (
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <School className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
            </div>

            {/* Milestone Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border group-hover:border-accent-primary/60 group-hover:bg-surface/80 transition-all duration-300 shadow-soft-sm space-y-4">
              {/* Header: Degree & Institution */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-surface-border/60 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent-soft/40 text-accent-primary border border-accent-soft/60">
                      {item.institutionShort}
                    </span>
                    {item.gradeOrHonors && (
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-canvas border border-surface-border text-ink-muted">
                        {item.gradeOrHonors}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight group-hover:text-accent-primary transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-accent-primaryDark flex flex-wrap items-center gap-2">
                    <span>{item.institution}</span>
                    <span className="text-ink-subtle">·</span>
                    <span className="text-xs font-normal text-ink-muted flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent-primary" /> {item.location}
                    </span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-surface-border text-xs font-mono text-ink-primary shrink-0 self-start sm:self-auto shadow-soft-sm">
                  <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-ink-muted leading-relaxed">
                {item.description}
              </p>

              {/* Key Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-accent-primary" />
                    <span>Academic Highlights & Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Courses Pills */}
              {item.keyCourses && item.keyCourses.length > 0 && (
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {item.keyCourses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-3 py-1 rounded-lg bg-canvas border border-surface-border text-xs font-medium text-ink-muted hover:border-accent-primary hover:text-accent-primary transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. Capstone Research & Biomedical Thesis Spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface to-surface-hover border-2 border-accent-soft p-6 sm:p-8 shadow-soft-md space-y-4"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft/40 text-accent-primary border border-accent-soft">
            <Microscope className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-accent-primaryDark">
                Undergraduate Capstone Thesis
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-accent-primary text-canvas">
                CSC 488 · Grade: A+ (6.0 Credits)
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-ink-primary mt-0.5">
              Deep Learning in Medical Imaging & Biomedical Signal Computing
            </h3>
          </div>
        </div>

        <p className="text-sm text-ink-muted leading-relaxed">
          Completed under course code CSC 488 (6.0 credit hours, Grade: A+). Investigated deep learning and state-space architectures for automated medical image analysis (low-dose CT reconstruction, brain MRI Alzheimer&apos;s classification) and biomedical signal processing (ECG arrhythmia classification), establishing the empirical foundation for multiple 1st-author publications.
        </p>

        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="px-3 py-1 rounded-md bg-canvas border border-surface-border text-xs font-mono text-ink-primary font-medium">
            PyTorch Deep Learning
          </span>
          <span className="px-3 py-1 rounded-md bg-canvas border border-surface-border text-xs font-mono text-ink-primary font-medium">
            Medical Image Analysis (CT / MRI)
          </span>
          <span className="px-3 py-1 rounded-md bg-canvas border border-surface-border text-xs font-mono text-ink-primary font-medium">
            Biomedical Signals (ECG / EEG)
          </span>
          <span className="px-3 py-1 rounded-md bg-canvas border border-surface-border text-xs font-mono text-ink-primary font-medium">
            State-Space & Transformer Models
          </span>
        </div>
      </motion.div>

      {/* 3. Detailed Academic Coursework Curriculum Explorer */}
      <section className="space-y-6 pt-4 border-t border-surface-border/80">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Explorer</span>
          </div>
          <h3 className="text-2xl font-bold text-ink-primary tracking-tight">
            Comprehensive Coursework
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted">
            The core theoretical and applied modules completed throughout academic training at IUBAT.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {courseCategories.map((cat, idx) => {
            const active = selectedCategory === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCategory(idx)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'text-canvas font-semibold shadow-soft-sm'
                    : 'text-ink-muted hover:text-ink-primary bg-surface/60 hover:bg-surface border border-surface-border'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeCourseCategoryPill"
                    className="absolute inset-0 rounded-xl bg-accent-primary"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Course Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {courseCategories[selectedCategory].courses.map((course, cIdx) => (
              <div
                key={cIdx}
                className="p-4 sm:p-5 rounded-2xl bg-surface/40 border border-surface-border/80 hover:border-accent-primary/60 hover:bg-surface/70 transition-all duration-200 shadow-soft-sm space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-border/50 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-canvas border border-surface-border text-ink-primary">
                        {course.code}
                      </span>
                      {course.credits > 0 && (
                        <span className="text-[10px] font-mono text-ink-subtle">
                          {course.credits} cr
                        </span>
                      )}
                    </div>
                    {course.grade && (
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-accent-soft/40 border border-accent-soft/60 text-accent-primary">
                        Grade: {course.grade}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-ink-primary text-sm sm:text-base leading-snug">
                    {course.name}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

