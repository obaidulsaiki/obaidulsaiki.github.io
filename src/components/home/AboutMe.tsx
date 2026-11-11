'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Eye,
  MessageSquareCode,
  Activity,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';
import { profileData } from '@/data/profile';

interface AboutPointCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  title: string;
  summary: string;
  href: string;
  highlight?: boolean;
}

export default function AboutMe() {
  const pointCards: AboutPointCard[] = [
    {
      id: 'vision',
      icon: Eye,
      badge: 'Focus 01',
      title: 'Medical Imaging & Vision',
      summary: 'Low-dose CT Mamba & MRI staging',
      href: '/research/',
    },
    {
      id: 'nlp',
      icon: MessageSquareCode,
      badge: 'Focus 02',
      title: 'Natural Language Processing',
      summary: 'BanglaBERT & Transformers',
      href: '/research/',
    },
    {
      id: 'signals',
      icon: Activity,
      badge: 'Focus 03',
      title: 'Biomedical Signals',
      summary: 'ECG & EEG Neural Models',
      href: '/research/',
    },
    {
      id: 'iubat',
      icon: GraduationCap,
      badge: `CGPA ${profileData.cgpa}`,
      title: `${profileData.universityShort} · B.Sc. in CSE`,
      summary: '144 Credits · Computer Science',
      href: '/education/',
      highlight: true,
    },
  ];

  return (
    <section className="space-y-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-border/80 pb-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
            Background &amp; Core Pillars
          </h2>
        </div>

        <Link
          href="/experience/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-accent-primaryDark transition-colors group self-start sm:self-auto"
        >
          <span>View Career History</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Single Row Layout: Left 1 Paragraph Card | Right 2x2 Grid (3 Focus Areas + 1 IUBAT Card) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: 1 Concise Bio Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5"
        >
          <div className="h-full p-6 sm:p-7 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-canvas border border-surface-border text-[11px] font-mono font-semibold text-ink-primary">
                <Sparkles className="w-3 h-3 text-accent-primary" />
                <span>{profileData.title}</span>
              </div>

              <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed">
                {profileData.bioParagraphs[0]}
              </p>
            </div>

            <div className="pt-4 border-t border-surface-border/70 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-mono text-ink-subtle">{profileData.location}</span>
              <Link
                href="/research/"
                className="inline-flex items-center gap-1 font-semibold text-accent-primary hover:text-accent-primaryDark transition-colors group"
              >
                <span>Research Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right: 2x2 Compact Cards (3 Research Focus Areas + 1 IUBAT Education Card) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pointCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="h-full"
              >
                <Link
                  href={card.href}
                  className={`group h-full p-5 rounded-2xl border transition-all duration-200 shadow-soft-sm hover:-translate-y-0.5 flex flex-col justify-between gap-4 ${
                    card.highlight
                      ? 'bg-canvas border-surface-border hover:border-accent-primary'
                      : 'bg-surface/50 border-surface-border hover:border-accent-primary/70 hover:bg-surface/85'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${
                        card.highlight
                          ? 'bg-accent-soft/35 border-accent-soft/60 text-accent-primary'
                          : 'bg-canvas border-surface-border text-accent-primary'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-wider font-mono font-semibold px-2.5 py-0.5 rounded-full bg-canvas border border-surface-border text-ink-subtle">
                        {card.badge}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-ink-subtle opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent-primary transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-ink-primary text-sm sm:text-base leading-snug group-hover:text-accent-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-ink-muted leading-snug">
                      {card.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
