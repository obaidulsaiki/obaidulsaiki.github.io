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
  Building2,
  Brain,
  Plane,
  Terminal,
  MessageSquare,
  Calculator,
  HeartHandshake,
  GitBranch,
  Palette,
  Layers,
} from 'lucide-react';
import Link from 'next/link';
import {
  extracurricularActivities,
  contestRankings,
  platformProfiles,
  basisExecutiveSpotlight,
  topProblemTopics,
  cpCommunityRoles,
  otherCampusActivities,
  conferenceCertificateInfo,
} from '@/data/extracurricular';

export default function ExtracurricularPage() {
  const totalSolved = platformProfiles.reduce((acc, curr) => acc + curr.solvedCount, 0);

  return (
    <div className="space-y-8 py-2 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-1.5 border-b border-surface-border/80 pb-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-[11px] font-semibold text-accent-primary">
          <Users className="w-3 h-3" />
          <span>Activities &amp; Leadership</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          Extracurricular &amp; Leadership
        </h1>
        <p className="text-xs sm:text-sm text-ink-muted max-w-2xl leading-relaxed">
          Teaching students, solving programming problems, and organizing university tech events.
        </p>
      </div>

      {/* 1. Academic Mentorship at IUBAT (First Section) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2 border-b border-surface-border/60 pb-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#194350] dark:text-[#9DBEB8]" />
            <h2 className="text-base sm:text-lg font-bold text-ink-primary tracking-tight">
              Academic Mentorship at IUBAT
            </h2>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#9DBEB8]/20 border border-[#9DBEB8]/50 text-[#194350] dark:text-[#9DBEB8]">
            Summer 2023
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFC2B4]/15 dark:bg-[#194350]/15 border border-[#9DBEB8]/40 hover:border-[#FF8882] transition-all shadow-soft-sm hover:shadow-[0_4px_20px_rgba(255,136,130,0.12)] space-y-3">
          {/* Top Row: Role + Verification */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#194350] text-white text-[11px] font-mono font-bold shadow-sm">
                  English &amp; C++ Academic Mentor
                </span>
                <span className="text-xs font-semibold text-ink-primary">
                  IUBAT
                </span>
                <span className="text-[11px] text-ink-subtle">
                  · Originally appointed as <strong>English Academic Mentor</strong>
                </span>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/12eTe6GnbdcRekKIe9sfR47vanZGc6eQw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas border border-[#9DBEB8]/50 hover:border-[#FF8882] text-xs font-semibold text-[#194350] dark:text-[#FFC2B4] hover:text-[#FF8882] transition-all shadow-soft-sm shrink-0 self-start sm:self-auto"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#194350] dark:text-[#9DBEB8]" />
              <span>Verify Certificate</span>
              <ExternalLink className="w-3 h-3 text-ink-subtle" />
            </a>
          </div>

          {/* Simple, Easy-to-understand Description */}
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            In Summer 2023, I was officially appointed as an English Academic Mentor at IUBAT. Along with English lessons, I also helped students learn C++ programming. This gave me real experience teaching in front of a class, guiding students one-on-one, and developing leadership skills.
          </p>

          {/* 3 Simple Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-canvas/80 border border-[#FFC2B4]/50 hover:border-[#FF8882] text-xs space-y-1 transition-all">
              <span className="font-bold text-ink-primary flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#FF8882]" />
                <span>English Teaching</span>
              </span>
              <p className="text-ink-muted text-[11px] leading-snug">
                Helped students improve their English speaking, grammar, and writing so they felt confident in their university courses.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-canvas/80 border border-[#9DBEB8]/50 hover:border-[#194350] dark:hover:border-[#9DBEB8] text-xs space-y-1 transition-all">
              <span className="font-bold text-ink-primary flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#194350] dark:text-[#9DBEB8]" />
                <span>C++ Programming</span>
              </span>
              <p className="text-ink-muted text-[11px] leading-snug">
                Taught C++ coding basics, helped students debug errors, and guided them through lab exercises and homework.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-canvas/80 border border-[#FFC2B4]/50 hover:border-[#FF8882] text-xs space-y-1 transition-all">
              <span className="font-bold text-ink-primary flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#FF8882]" />
                <span>Teaching &amp; Leadership</span>
              </span>
              <p className="text-ink-muted text-[11px] leading-snug">
                Led classroom lessons, answered questions one-on-one, and helped students gain confidence in their learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BASIS Student Forum IUBAT (Executive Member Spotlight) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between gap-2 border-b border-surface-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#FA699E]" />
            <h2 className="text-base sm:text-lg font-bold text-ink-primary tracking-tight">
              {basisExecutiveSpotlight.title}
            </h2>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FFE7F0] dark:bg-[#FA699E]/15 border border-[#FF9FC7] text-[#FA699E] dark:text-[#FF9FC7]">
            {basisExecutiveSpotlight.period}
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-[#FFE7F0]/30 dark:bg-[#FA699E]/5 border border-[#FF9FC7]/50 hover:border-[#FA699E] transition-all shadow-soft-sm hover:shadow-[0_4px_20px_rgba(250,105,158,0.12)] space-y-3">
          {/* Top Row: Role + Organization */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#FA699E] text-white text-[11px] font-mono font-bold shadow-sm">
                {basisExecutiveSpotlight.role}
              </span>
              <span className="text-xs font-semibold text-ink-primary">
                {basisExecutiveSpotlight.organization}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#4ADD82]/15 border border-[#4ADD82]/40 text-[10px] font-mono font-semibold text-[#18753b] dark:text-[#4ADD82]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ADD82] animate-pulse"></span>
                Active Forum
              </span>
            </div>
            <span className="text-[11px] font-mono text-ink-subtle shrink-0">
              Student Leadership &amp; Events
            </span>
          </div>

          {/* Simple Description */}
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            During my tenure as Executive Member from April 2024 to December 2025, I organized key student technology events, competitions, and hands-on workshops at IUBAT.
          </p>

          {/* 3 Event Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            {/* Card 1: IQ & IT Competition */}
            <div className="p-3 rounded-xl bg-canvas/80 border border-[#FF9FC7]/40 hover:border-[#FA699E]/60 text-xs space-y-2 flex flex-col justify-between transition-all">
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-ink-primary flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-[#FA699E]" />
                    <span>IQ &amp; IT Competition</span>
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#FFE7F0] dark:bg-[#FA699E]/20 text-[#FA699E] dark:text-[#FF9FC7] border border-[#FF9FC7]/40">
                    Fall 2024
                  </span>
                </div>
                <p className="text-ink-muted text-[11px] leading-snug">
                  Arranged the IQ and IT competition for incoming freshers and served as the official <strong>Question Setter</strong>.
                </p>
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#FA699E] dark:text-[#FF9FC7]">
                • Question Setter
              </span>
            </div>

            {/* Card 2: Drone Technology Seminar */}
            <div className="p-3 rounded-xl bg-canvas/80 border border-[#FF9FC7]/40 hover:border-[#4ADD82]/60 text-xs space-y-2 flex flex-col justify-between transition-all">
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-ink-primary flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-[#4ADD82]" />
                    <span>Drone Tech Seminar</span>
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#4ADD82]/15 text-[#18753b] dark:text-[#4ADD82] border border-[#4ADD82]/30">
                    Summer 2025
                  </span>
                </div>
                <p className="text-ink-muted text-[11px] leading-snug">
                  Arranged a seminar on drone technology featuring guest speaker <strong>Mr. Zubayer Al Billal Khan</strong>.
                </p>
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#18753b] dark:text-[#4ADD82]">
                • Guest Speaker Seminar
              </span>
            </div>

            {/* Card 3: Python Programming Workshop */}
            <div className="p-3 rounded-xl bg-canvas/80 border border-[#FF9FC7]/40 hover:border-[#FA699E]/60 text-xs space-y-2 flex flex-col justify-between transition-all">
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-ink-primary flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#FA699E]" />
                    <span>Python Workshop</span>
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#FFE7F0] dark:bg-[#FA699E]/20 text-[#FA699E] dark:text-[#FF9FC7] border border-[#FF9FC7]/40">
                    Fall 2025
                  </span>
                </div>
                <p className="text-ink-muted text-[11px] leading-snug">
                  Arranged a practical Python programming workshop to help students learn hands-on coding from scratch.
                </p>
              </div>
              <span className="text-[10px] font-mono font-semibold text-[#FA699E] dark:text-[#FF9FC7]">
                • Hands-on Workshop
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Competitive Programming Showcase */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-surface-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#619DC6]" />
            <h2 className="text-base sm:text-lg font-bold text-ink-primary tracking-tight">
              Competitive Programming ({totalSolved}+ Problems Solved)
            </h2>
          </div>
          <span className="text-[11px] font-mono text-ink-muted">Codeforces · LeetCode · HackerRank · VJudge</span>
        </div>

        {/* Dual Role Banner: Advance Level Member & Level-0 Mentor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {cpCommunityRoles.map((roleItem, rIdx) => (
            <div
              key={rIdx}
              className="p-3.5 rounded-xl bg-[#F4F0E2]/40 dark:bg-[#619DC6]/10 border border-[#A6C8E2]/50 flex items-start gap-3 shadow-soft-sm hover:border-[#619DC6] transition-all"
            >
              <div className="w-7 h-7 rounded-lg bg-[#619DC6]/15 border border-[#619DC6]/30 flex items-center justify-center shrink-0 text-[#619DC6]">
                {rIdx === 0 ? <Trophy className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-xs font-bold text-ink-primary">
                    {roleItem.role}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#F4BAA3]/25 border border-[#F4BAA3]/50 text-[#b5583b] dark:text-[#F4BAA3] font-semibold">
                    {roleItem.badge}
                  </span>
                </div>
                <p className="text-[11px] text-ink-subtle">
                  {roleItem.organization}
                </p>
                <p className="text-[11px] text-ink-muted leading-tight pt-0.5">
                  {roleItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Profiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {platformProfiles.map((p) => (
            <a
              key={p.platform}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-[#F4F0E2]/25 dark:bg-surface/50 border border-[#A6C8E2]/40 hover:border-[#619DC6] hover:bg-[#F4F0E2]/40 dark:hover:bg-surface/80 transition-all shadow-soft-sm group flex flex-col justify-between space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-primary">{p.platform}</span>
                <ExternalLink className="w-3 h-3 text-ink-subtle group-hover:text-[#619DC6] transition-colors" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-[#619DC6] dark:text-[#A6C8E2]">
                  {p.solvedCount}
                </p>
                <p className="text-[10px] font-mono text-ink-muted truncate">@{p.handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Top Problems I Have Solved */}
        <div className="p-4 rounded-2xl bg-[#F4F0E2]/30 dark:bg-[#619DC6]/5 border border-[#A6C8E2]/50 shadow-soft-sm space-y-2.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-[#619DC6]" />
              <span>Top Problems I Have Solved</span>
            </h3>
            <span className="text-[10px] font-mono text-ink-muted">162+ Solved</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {topProblemTopics.map((item) => (
              <div
                key={item.topic}
                className="p-3 rounded-xl bg-canvas/90 border border-[#A6C8E2]/40 hover:border-[#F4BAA3] shadow-soft-sm flex items-center justify-between gap-2 transition-all"
              >
                <div>
                  <p className="text-xs font-bold text-ink-primary">{item.topic}</p>
                  <span className="text-[10px] font-mono text-ink-muted">Category focus</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-base font-extrabold text-[#b5583b] dark:text-[#F4BAA3] font-mono">
                    {item.solvedCount}
                  </span>
                  <span className="text-[10px] text-ink-subtle font-mono">solved</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contest Standings Table */}
        <div className="p-4 rounded-2xl bg-[#F4F0E2]/30 dark:bg-[#619DC6]/5 border border-[#A6C8E2]/50 shadow-soft-sm space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#619DC6]" />
            <span>Contest Results &amp; Rankings</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {contestRankings.map((c, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-canvas/90 border border-[#A6C8E2]/40 hover:border-[#619DC6] flex items-center justify-between gap-2 shadow-soft-sm text-xs transition-all"
              >
                <div className="space-y-0.5">
                  <p className="font-semibold text-ink-primary leading-tight">{c.contest}</p>
                  <span className="text-[10px] text-ink-muted font-mono">{c.scope} · {c.year}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#F4BAA3]/20 border border-[#F4BAA3]/50 text-[11px] font-mono font-bold text-[#b5583b] dark:text-[#F4BAA3] shrink-0">
                  {c.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Conference Certificates (Compact 1-Line Strip) */}
      <section>
        <div className="p-3 sm:px-4 sm:py-2.5 rounded-2xl bg-[#092328]/10 dark:bg-[#092328]/50 border border-[#12544F]/60 hover:border-[#2A835F] transition-all shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          {/* Left: Icon + Title + Conferences list */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#2A835F]/20 border border-[#2A835F]/40 flex items-center justify-center shrink-0 text-[#2A835F] dark:text-[#8BBB92]">
              <Award className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xs sm:text-sm font-bold text-ink-primary whitespace-nowrap">
                  {conferenceCertificateInfo.title}
                </h3>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.2 rounded-full bg-[#2A835F]/20 border border-[#2A835F]/40 text-[#12544F] dark:text-[#8BBB92]">
                  {conferenceCertificateInfo.conferences.length} Conferences
                </span>
              </div>
              <p className="text-[11px] text-ink-muted truncate max-w-xl">
                <span className="font-semibold text-[#12544F] dark:text-[#8BBB92]">Conferences attended:</span>{' '}
                {conferenceCertificateInfo.conferences.join(' · ')}
              </p>
            </div>
          </div>

          {/* Right: View Certificates Button */}
          <a
            href={conferenceCertificateInfo.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#2A835F] hover:bg-[#12544F] text-white text-xs font-semibold transition-all shadow-sm shrink-0 self-start sm:self-auto hover:scale-105 active:scale-95"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#8BBB92]" />
            <span>View Certificates</span>
            <ExternalLink className="w-3 h-3 text-white/80" />
          </a>
        </div>
      </section>

      {/* 5. Professional Training & Certifications */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 border-b border-surface-border/60 pb-2">
          <Award className="w-4 h-4 text-accent-primary" />
          <h2 className="text-base sm:text-lg font-bold text-ink-primary tracking-tight">
            Professional Training &amp; Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {extracurricularActivities.map((act) => (
            <div
              key={act.id}
              className="p-4 sm:p-5 rounded-2xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 transition-all shadow-soft-sm space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-soft/40 text-accent-primary border border-accent-soft/60">
                      {act.category}
                    </span>
                    <span className="text-[11px] font-mono text-ink-subtle">{act.period}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-ink-primary">
                    {act.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-primaryDark">
                    {act.role} · <span className="text-[11px] font-normal text-ink-muted">{act.organization}</span>
                  </p>
                </div>

                {act.certificateUrl && (
                  <a
                    href={act.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-canvas border border-surface-border hover:border-accent-primary text-[11px] font-medium text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm shrink-0 self-start sm:self-auto"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3 text-ink-subtle" />
                  </a>
                )}
              </div>

              <p className="text-xs text-ink-muted leading-relaxed">
                {act.description}
              </p>

              <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink-muted">
                {act.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-1.5">
                    <span className="text-accent-primary font-bold">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Other Campus Involvements & Activities */}
      <section className="space-y-3">
        <div className="flex items-center gap-2 border-b border-surface-border/60 pb-2">
          <Layers className="w-4 h-4 text-[#005A9C] dark:text-[#60C1E5]" />
          <h2 className="text-base sm:text-lg font-bold text-ink-primary tracking-tight">
            Other Campus Activities &amp; Involvements
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {otherCampusActivities.map((act) => {
            const getIcon = (id: string) => {
              switch (id) {
                case 'dfi-member':
                  return <MessageSquare className="w-4 h-4 text-[#005A9C] dark:text-[#60C1E5]" />;
                case 'ims-member':
                  return <Calculator className="w-4 h-4 text-[#60C1E5]" />;
                case 'cse-volunteer':
                  return <HeartHandshake className="w-4 h-4 text-[#005A9C] dark:text-[#A0E0EF]" />;
                case 'github-bootcamp':
                  return <GitBranch className="w-4 h-4 text-[#1B365D] dark:text-[#60C1E5]" />;
                case 'canva-pro-session':
                  return <Palette className="w-4 h-4 text-[#60C1E5]" />;
                default:
                  return <Sparkles className="w-4 h-4 text-[#005A9C]" />;
              }
            };

            return (
              <div
                key={act.id}
                className="p-3.5 rounded-xl bg-[#A0E0EF]/15 dark:bg-[#1B365D]/25 border border-[#60C1E5]/40 dark:border-[#005A9C]/50 hover:border-[#005A9C] dark:hover:border-[#60C1E5] transition-all shadow-soft-sm hover:shadow-[0_4px_20px_rgba(0,90,156,0.12)] flex flex-col justify-between space-y-2"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-1.5">
                    <div className="w-7 h-7 rounded-lg bg-canvas border border-[#A0E0EF]/60 dark:border-[#005A9C]/60 flex items-center justify-center shrink-0">
                      {getIcon(act.id)}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#A0E0EF]/30 dark:bg-[#005A9C]/30 text-[#005A9C] dark:text-[#A0E0EF] border border-[#60C1E5]/40">
                      {act.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-ink-primary leading-snug">
                      {act.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#005A9C] dark:text-[#60C1E5]">
                      {act.role} <span className="text-[10px] font-normal text-ink-subtle">· {act.organization}</span>
                    </p>
                  </div>
                  <p className="text-[11px] text-ink-muted leading-relaxed">
                    {act.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Navigation Footer Card */}
      <div className="pt-4 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-surface/40 border border-surface-border shadow-soft-sm">
        <div className="space-y-0.5 text-center sm:text-left">
          <span className="text-[10px] font-semibold text-accent-primary uppercase tracking-wider">
            Next Section
          </span>
          <h4 className="text-sm font-bold text-ink-primary">
            Personal Hobbies &amp; Beyond Code
          </h4>
        </div>
        <Link
          href="/hobby/"
          prefetch={true}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-xs transition-all shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>View Hobbies</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
