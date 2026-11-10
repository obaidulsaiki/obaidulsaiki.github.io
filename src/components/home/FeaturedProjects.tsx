'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Github,
  ExternalLink,
  ArrowRight,
  Bot,
} from 'lucide-react';
import Link from 'next/link';
import { featuredProjects } from '@/data/experience';

export default function FeaturedProjects() {
  return (
    <section className="space-y-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-border/80 pb-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <Cpu className="w-3.5 h-3.5" />
            <span>Applied AI & Engineering</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
            Featured Systems & Applications
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Production full-stack systems combining Java Spring Boot backends, local LLM integrations, and reactive web architectures.
          </p>
        </div>

        <Link
          href="/experience/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-accent-primaryDark transition-colors group self-start sm:self-auto"
        >
          <span>View All Work & Roles</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Compact Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-5 sm:p-6 rounded-3xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              {/* Top Row: Key Stat & Timeline */}
              <div className="flex items-center justify-between gap-2 border-b border-surface-border/50 pb-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-soft/50 text-accent-primary text-[11px] font-mono font-bold border border-accent-soft/70">
                  <Bot className="w-3 h-3 text-accent-primary" />
                  <span>{project.stats}</span>
                </span>
                <span className="text-[11px] font-mono text-ink-subtle">{project.period}</span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-ink-primary tracking-tight group-hover:text-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-accent-primaryDark mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              {/* Concise Description */}
              <p className="text-xs text-ink-muted leading-relaxed line-clamp-2 text-justify [text-justify:inter-word]">
                {project.description}
              </p>

              {/* Key Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-canvas/80 border border-surface-border text-ink-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface text-ink-subtle">
                    +{project.tech.length - 4} more
                  </span>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-surface-border/50 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm group-hover:bg-surface"
              >
                <Github className="w-3.5 h-3.5 text-accent-primary" />
                <span>Source Code</span>
                <ExternalLink className="w-3 h-3 text-ink-subtle group-hover:text-accent-primary" />
              </a>

              <Link
                href="/experience/"
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent-primary hover:text-accent-primaryDark transition-colors group-hover:translate-x-0.5"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

