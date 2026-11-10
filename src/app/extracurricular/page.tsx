import React from 'react';
import { Users, Trophy, HeartHandshake, Sparkles } from 'lucide-react';

export default function ExtracurricularPage() {
  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">
      <div className="space-y-2 border-b border-surface-border/70 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Users className="w-3.5 h-3.5" />
          <span>Leadership & Community</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          Extracurricular Activities
        </h1>
        <p className="text-sm sm:text-base text-ink-muted">
          Community leadership, developer clubs, hackathons, and volunteering initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
            <Trophy className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-ink-primary">
            Competitive Programming & Hackathons
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Participated in university and national programming contests, solving algorithmic problems under tight constraints and rapid prototyping in hackathons.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-ink-primary">
            Student Club Leadership & Mentorship
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Conducted workshops and technical training sessions for junior undergraduates on modern JavaScript, Git version control, and introductory machine learning.
          </p>
        </div>
      </div>
    </div>
  );
}

