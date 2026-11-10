'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Headphones,
  Camera,
  Gamepad2,
  BookOpen,
  Sparkles,
  Quote,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { hobbiesData, HobbyItem } from '@/data/hobbies';

const iconMap: Record<string, LucideIcon> = {
  Headphones,
  Camera,
  Gamepad2,
  BookOpen,
};

export default function HobbyPage() {
  return (
    <div className="space-y-16 py-4 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="space-y-3 border-b border-surface-border/80 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Compass className="w-3.5 h-3.5" />
          <span>Life Beyond Code</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-primary tracking-tight">
          Hobbies & Personal Pursuits
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
          The creative curiosities, acoustic soundscapes, and strategic games that keep my thinking fresh, inspired, and energized outside of engineering.
        </p>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hobbiesData.map((hobby, index) => {
          const Icon = iconMap[hobby.iconName] || Sparkles;

          return (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-accent-soft/30 border border-accent-soft/50 text-accent-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-soft/50 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-canvas border border-surface-border text-ink-subtle">
                    {hobby.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-ink-primary tracking-tight group-hover:text-accent-primary transition-colors">
                  {hobby.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  {hobby.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-1.5 pt-1">
                  {hobby.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-xs text-ink-muted leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent-primary font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Optional Quote */}
                {hobby.quote && (
                  <div className="p-3.5 rounded-2xl bg-canvas/80 border border-surface-border text-xs italic text-accent-primaryDark flex items-start gap-2">
                    <Quote className="w-3.5 h-3.5 text-accent-primary shrink-0 mt-0.5" />
                    <span>{hobby.quote}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-surface-border/60 flex flex-wrap gap-1.5">
                {hobby.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-surface border border-surface-border text-ink-subtle"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Footer Card */}
      <div className="pt-8 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-surface/40 border border-surface-border shadow-soft-sm">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
            Ready to Connect?
          </span>
          <h4 className="text-base font-bold text-ink-primary">
            Get In Touch
          </h4>
          <p className="text-xs text-ink-muted">
            Send an email, connect on LinkedIn, or reach out via phone/WhatsApp.
          </p>
        </div>
        <Link
          href="/contact/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>Open Contact Hub</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
