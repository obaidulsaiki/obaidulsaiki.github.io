import React from 'react';
import Link from 'next/link';
import { Briefcase, ArrowRight, Sparkles, Cpu, Github, ExternalLink, Bot } from 'lucide-react';
import ExperienceTimeline from '@/components/timeline/ExperienceTimeline';
import { featuredProjects } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <div className="space-y-16 py-4 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="space-y-3 border-b border-surface-border/80 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Background</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-primary tracking-tight">
          Work Experience & Career
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
          Chronological record of my engineering journey: full-stack AI development at Saask Task, frontend engineering at AKS Global IT Services, and building practical full-stack projects.
        </p>
      </div>

      {/* Main Experience Timeline */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
          Career Roles & Engagements
        </h2>
        <ExperienceTimeline />
      </div>

      {/* Featured Production Engineering Projects */}
      <div className="space-y-6 pt-4 border-t border-surface-border/80">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent-primary">
            <Cpu className="w-4 h-4" />
            <span>Core Systems</span>
          </div>
          <h2 className="text-2xl font-bold text-ink-primary tracking-tight">
            Featured Production Projects
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Detailed architectures, endpoints, and LLM integrations engineered by Obaidul Haque.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-surface-border/60 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-soft/40 border border-accent-soft/60 text-xs font-mono font-semibold text-accent-primary">
                      <Bot className="w-3.5 h-3.5" />
                      <span>{project.stats}</span>
                    </span>
                    <span className="text-xs font-mono text-ink-subtle">{project.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-ink-primary tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent-primaryDark">
                    {project.subtitle}
                  </p>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-medium text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm self-start sm:self-auto"
                >
                  <Github className="w-4 h-4 text-accent-primary" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-ink-subtle" />
                </a>
              </div>

              <p className="text-sm text-ink-muted leading-relaxed">
                {project.description}
              </p>

              <div className="p-4 rounded-2xl bg-canvas/80 border border-surface-border space-y-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Architecture & Technical Deliverables</span>
                </span>
                <ul className="space-y-1.5">
                  {project.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-ink-muted leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-accent-primary font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-surface border border-surface-border text-ink-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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
          <p className="text-xs text-ink-muted">
            Read top highlighted papers, ACM ICCA Mamba breakthroughs, and Springer Nature articles.
          </p>
        </div>
        <Link
          href="/research/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>View Research</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
