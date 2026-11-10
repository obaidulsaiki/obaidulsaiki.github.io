import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">
      <div className="space-y-2 border-b border-surface-border/70 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Career Journey</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          Work Experience
        </h1>
        <p className="text-sm sm:text-base text-ink-muted">
          Professional engineering positions, system development, and technical contributions.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border/60 pb-4">
            <div>
              <h2 className="text-xl font-bold text-ink-primary">
                Software Engineer & ML Researcher
              </h2>
              <p className="text-sm font-medium text-accent-primary mt-0.5">
                Research & Development
              </p>
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-ink-muted shrink-0 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5" />
              <span>2024 – Present</span>
            </div>
          </div>

          <ul className="space-y-2.5 text-sm text-ink-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
              <span>Architected and implemented end-to-end full-stack web and desktop applications using React, Next.js, and TypeScript.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
              <span>Designed predictive machine learning models and signal processing pipelines for biomedical datasets.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
              <span>Authored automated CI/CD deployment routines and optimized bundle loading for static frontend hosting.</span>
            </li>
          </ul>

          <div className="pt-2 flex flex-wrap gap-2">
            {['Next.js', 'React', 'TypeScript', 'Python', 'PyTorch', 'Tailwind CSS', 'Git'].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-canvas border border-surface-border text-xs font-mono text-ink-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
