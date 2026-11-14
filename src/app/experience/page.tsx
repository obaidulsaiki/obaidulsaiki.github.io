import React from 'react';
import Link from 'next/link';
import { Briefcase, ArrowRight } from 'lucide-react';
import ExperienceTimeline from '@/components/timeline/ExperienceTimeline';

export default function ExperiencePage() {
  return (
    <div className="space-y-16 py-4 w-full max-w-7xl mx-auto">
      {/* Page Header - Centered & Justified */}
      <div className="space-y-4 border-b border-surface-border/80 pb-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background &amp; Career Systems</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-primary tracking-tight text-center">
          Work Experience &amp; Systems
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl text-justify [text-justify:inter-word] leading-relaxed">
          Chronological record of my engineering journey: full-stack AI development at Saask Task, frontend engineering at AKS Global IT Services, and building production-grade enterprise architectures.
        </p>
      </div>

      {/* Unified Aerospace Flight Runway & Career Roles Timeline */}
      <div className="space-y-8">
        <ExperienceTimeline />
      </div>

      {/* Navigation Footer Card */}
      <div className="pt-8 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-surface/40 border border-surface-border shadow-soft-sm">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
            Next Section
          </span>
          <h4 className="text-base font-bold text-ink-primary">
            Explore Scientific Research
          </h4>
          <p className="text-xs text-ink-muted text-justify sm:text-left [text-justify:inter-word]">
            Read top highlighted papers, ACM ICCA Mamba breakthroughs, and Springer Nature articles.
          </p>
        </div>
        <Link
          href="/research/"
          prefetch={true}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>View Research</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
