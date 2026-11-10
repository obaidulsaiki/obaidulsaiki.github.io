'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Flame,
  Coffee,
  Terminal,
} from 'lucide-react';
import { experienceData } from '@/data/experience';

export default function ExperienceTimeline() {
  return (
    <div className="space-y-12">
      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-accent-primary before:via-accent-soft before:to-surface-border">
        {experienceData.map((item, index) => (
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
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-accent-primary" />
              ) : index === 1 ? (
                <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary" />
              ) : (
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent-primary" />
              )}
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border group-hover:border-accent-primary/60 group-hover:bg-surface/80 transition-all duration-300 shadow-soft-sm space-y-5">
              {/* Card Header: Role & Organization */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-surface-border/60 pb-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.highlightBadge && (
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-accent-soft/40 text-accent-primary border border-accent-soft/60">
                        {item.highlightBadge}
                      </span>
                    )}
                    {item.status === 'Current' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-canvas border border-surface-border text-[11px] font-medium text-emerald-700">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Current Focus
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight group-hover:text-accent-primary transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-accent-primaryDark flex flex-wrap items-center gap-2">
                    <span>{item.organization}</span>
                    <span className="text-ink-subtle">·</span>
                    <span className="text-xs font-normal text-ink-muted flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-accent-primary" /> {item.location}
                    </span>
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-canvas border border-surface-border text-xs font-mono text-ink-primary shrink-0 self-start sm:self-auto shadow-soft-sm">
                  <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Overview Narrative */}
              <p className="text-sm text-ink-muted leading-relaxed">
                {item.overview}
              </p>

              {/* Achievements */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Key Deliverables & Technical Accomplishments</span>
                </h4>
                <ul className="space-y-2">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Attached Tags */}
              <div className="pt-2 border-t border-surface-border/50 space-y-2">
                <span className="text-[11px] font-semibold text-ink-subtle uppercase tracking-wider">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-canvas border border-surface-border text-xs font-mono text-ink-primary font-medium hover:border-accent-primary hover:text-accent-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

