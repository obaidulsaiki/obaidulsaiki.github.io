'use client';

import React from 'react';
import {
  Users,
  Trophy,
  Award,
  ExternalLink,
  Code,
  GraduationCap,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';
import {
  extracurricularActivities,
  contestRankings,
  platformProfiles,
} from '@/data/extracurricular';

export default function ExtracurricularPage() {
  const totalSolved = platformProfiles.reduce((acc, curr) => acc + curr.solvedCount, 0);

  return (
    <div className="space-y-16 py-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-3 border-b border-surface-border/80 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Users className="w-3.5 h-3.5" />
          <span>Leadership & Community</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-primary tracking-tight">
          Extracurricular & Problem Solving
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
          Competitive programming milestones, leadership in professional student bodies, and algorithmic mentorship across the university community.
        </p>
      </div>

      {/* Competitive Programming Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-surface-border/60 pb-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-primary">
              <Trophy className="w-4 h-4" />
              <span>Algorithmic Rigor</span>
            </div>
            <h2 className="text-2xl font-bold text-ink-primary tracking-tight">
              Competitive Programming ({totalSolved}+ Problems Solved)
            </h2>
          </div>
          <span className="text-xs font-mono text-ink-muted">Codeforces · LeetCode · HackerRank · VJudge</span>
        </div>

        {/* Platform Profiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {platformProfiles.map((p) => (
            <a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-surface/50 border border-surface-border hover:border-accent-primary/70 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm group flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-primary">{p.platform}</span>
                <ExternalLink className="w-3 h-3 text-ink-subtle group-hover:text-accent-primary transition-colors" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-accent-primary">
                  {p.solvedCount}
                </p>
                <p className="text-[11px] font-mono text-ink-muted truncate">@{p.handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Contest Standings Table */}
        <div className="p-6 rounded-3xl bg-surface/40 border border-surface-border shadow-soft-sm space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink-primary flex items-center gap-2">
            <Award className="w-4 h-4 text-accent-primary" />
            <span>Official Contest Standings & Honors</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contestRankings.map((c, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-canvas border border-surface-border flex items-center justify-between gap-3 shadow-soft-sm"
              >
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-ink-primary">{c.contest}</p>
                  <span className="text-[11px] text-ink-muted font-mono">{c.scope} · {c.year}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent-soft/40 border border-accent-soft/60 text-xs font-mono font-bold text-accent-primary shrink-0">
                  {c.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Activities List */}
      <section className="space-y-6">
        <div className="space-y-1 border-b border-surface-border/60 pb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-primary">
            <GraduationCap className="w-4 h-4" />
            <span>Community Leadership</span>
          </div>
          <h2 className="text-2xl font-bold text-ink-primary tracking-tight">
            Leadership, Mentorship & Training
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {extracurricularActivities.map((act) => (
            <div
              key={act.id}
              className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-surface-border/60 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent-soft/40 text-accent-primary border border-accent-soft/60">
                      {act.category}
                    </span>
                    <span className="text-xs font-mono text-ink-subtle">{act.period}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
                    {act.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent-primaryDark">
                    {act.role} · <span className="text-xs font-normal text-ink-muted">{act.organization}</span>
                  </p>
                </div>

                {act.certificateUrl && (
                  <a
                    href={act.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-medium text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm self-start sm:self-auto shrink-0"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3 text-ink-subtle" />
                  </a>
                )}
              </div>

              <p className="text-sm text-ink-muted leading-relaxed">
                {act.description}
              </p>

              <div className="p-4 rounded-2xl bg-canvas/80 border border-surface-border space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Key Responsibilities & Outcomes</span>
                </span>
                <ul className="space-y-1.5">
                  {act.highlights.map((h, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-xs text-ink-muted leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent-primary font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="pt-8 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-surface/40 border border-surface-border shadow-soft-sm">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
            Next Section
          </span>
          <h4 className="text-base font-bold text-ink-primary">
            Personal Hobbies & Creative Interests
          </h4>
          <p className="text-xs text-ink-muted">
            Explore personal acoustic interests, tech setups, and creative pursuits.
          </p>
        </div>
        <Link
          href="/hobby/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>View Hobbies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
