import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export default function EducationPage() {
  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">
      <div className="space-y-2 border-b border-surface-border/70 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          Education & Degrees
        </h1>
        <p className="text-sm sm:text-base text-ink-muted">
          Formal academic training in computer science, software engineering, and scientific research.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border/60 pb-4">
            <div>
              <h2 className="text-xl font-bold text-ink-primary">
                Bachelor of Science in Computer Science & Engineering
              </h2>
              <p className="text-sm font-medium text-accent-primary flex items-center gap-1.5 mt-0.5">
                <span>Brac University</span>
                <span className="text-ink-subtle">·</span>
                <span className="text-ink-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Dhaka, Bangladesh
                </span>
              </p>
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface border border-surface-border text-xs font-mono text-ink-muted shrink-0 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5" />
              <span>2020 – 2024</span>
            </div>
          </div>

          <p className="text-sm text-ink-muted leading-relaxed">
            Focused on Machine Learning, Algorithms & Data Structures, Distributed Systems, and Human-Computer Interaction. Graduated with high honors and active research engagement in biomedical signal processing.
          </p>

          <div className="pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-primary mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-accent-primary" />
              <span>Key Coursework</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                'Design & Analysis of Algorithms',
                'Artificial Intelligence',
                'Machine Learning',
                'Database Management Systems',
                'Operating Systems',
                'Computer Networks',
                'Software Engineering',
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-lg bg-canvas border border-surface-border text-xs font-medium text-ink-muted"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
