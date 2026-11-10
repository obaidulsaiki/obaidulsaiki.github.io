import React from 'react';
import Link from 'next/link';
import { GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import EducationTimeline from '@/components/timeline/EducationTimeline';

export default function EducationPage() {
  return (
    <div className="space-y-12 py-4 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="space-y-3 border-b border-surface-border/80 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Qualifications</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-primary tracking-tight">
          Education & Curriculum
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl">
          Academic foundation in Computer Science & Engineering from the International University of Business Agriculture and Technology (IUBAT), complemented by foundational science honors and biomedical AI capstone research.
        </p>
      </div>

      {/* Main Timeline Component */}
      <EducationTimeline />

      {/* Navigation Footer Card */}
      <div className="pt-8 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-surface/40 border border-surface-border shadow-soft-sm">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
            Next Section
          </span>
          <h4 className="text-base font-bold text-ink-primary">
            Explore Career Experience
          </h4>
          <p className="text-xs text-ink-muted">
            See professional roles, Java/Spring Boot enterprise backends, and AI engineering deliverables.
          </p>
        </div>
        <Link
          href="/experience/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>View Experience</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
