'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Microscope,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { highlightedPapers } from '@/data/research';

export default function FeaturedResearch() {
  // Spotlight the top 3 papers on the Home page (mix of breakthrough architectures and published DOI)
  const spotlightPapers = highlightedPapers.slice(0, 3);

  return (
    <section className="space-y-6 py-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-surface-border/80 pb-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <Microscope className="w-3.5 h-3.5" />
            <span>Research Spotlight</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
            Highlighted Research Publications
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Neural architectures spanning state-space continuous modeling, clinical epidemiology, and interpretable biomedical signals.
          </p>
        </div>

        <Link
          href="/research/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-primary hover:text-accent-primaryDark transition-colors group self-start sm:self-auto"
        >
          <span>Explore All 40+ Papers</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Compact Top 3 Papers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {spotlightPapers.map((paper, index) => {
          const isPublished = paper.status === 'Published';

          return (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="p-5 rounded-2xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/85 transition-all duration-200 shadow-soft-sm flex flex-col justify-between space-y-3.5 group"
            >
              <div className="space-y-2.5">
                {/* Top Row: Author Role & Publication Status Badge */}
                <div className="flex items-center justify-between gap-2 border-b border-surface-border/50 pb-2.5">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-accent-soft/40 text-accent-primary border border-accent-soft/60">
                    {paper.authorPosition}
                  </span>

                  {isPublished ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Published
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/25">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Currently not published yet
                    </span>
                  )}
                </div>

                {/* Title & Venue */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-ink-primary leading-snug group-hover:text-accent-primary transition-colors line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-xs font-semibold text-accent-primaryDark line-clamp-1">
                    {paper.venue}
                  </p>
                </div>

                {/* Concise 2-line Description */}
                <p className="text-xs text-ink-muted leading-relaxed line-clamp-2 text-justify [text-justify:inter-word]">
                  {paper.abstract}
                </p>
              </div>

              {/* Bottom Row: DOI Link or Unpublished writing */}
              <div className="pt-2.5 border-t border-surface-border/50 flex items-center justify-between gap-2">
                {isPublished && paper.doi ? (
                  <a
                    href={paper.url || `https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-accent-primary hover:text-accent-primaryDark hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[170px]">DOI: {paper.doi}</span>
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-ink-subtle italic">
                    Currently not published yet
                  </span>
                )}

                <Link
                  href="/research/"
                  className="text-xs font-semibold text-accent-primary hover:text-accent-primaryDark inline-flex items-center gap-1 shrink-0 ml-auto"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
