'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Copy,
  Check,
  FileText,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award,
  BookOpen,
} from 'lucide-react';
import { ResearchPublication } from '@/data/research';

interface Props {
  paper: ResearchPublication;
  index: number;
}

export default function PublicationCard({ paper, index }: Props) {
  const [copiedBibtex, setCopiedBibtex] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);
  const [expandedAbstract, setExpandedAbstract] = useState(false);

  const copyBibtex = () => {
    navigator.clipboard.writeText(paper.bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2200);
  };

  const getStatusColor = (status: ResearchPublication['status']) => {
    switch (status) {
      case 'Published':
        return 'bg-emerald-100/70 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300';
      case 'Accepted':
        return 'bg-accent-soft/50 text-accent-primary border-accent-soft text-accent-primaryDark';
      case 'Minor Revision':
        return 'bg-amber-100/70 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300';
      case 'Presented':
        return 'bg-sky-100/70 text-sky-800 border-sky-300 dark:bg-sky-950/40 dark:text-sky-300';
      default:
        return 'bg-surface text-ink-muted border-surface-border';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm space-y-5 flex flex-col justify-between group"
    >
      <div className="space-y-4">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${getStatusColor(
                paper.status
              )}`}
            >
              {paper.status}
            </span>
            <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-canvas border border-surface-border text-ink-primary flex items-center gap-1">
              <Award className="w-3 h-3 text-accent-primary" />
              {paper.authorPosition}
            </span>
            {paper.impactBadge && (
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent-soft/30 text-accent-primary border border-accent-soft/50 hidden sm:inline-block">
                {paper.impactBadge}
              </span>
            )}
          </div>

          <span className="text-xs font-mono text-ink-subtle">{paper.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-ink-primary leading-snug tracking-tight group-hover:text-accent-primary transition-colors">
          {paper.title}
        </h3>

        {/* Venue & Authors */}
        <div className="space-y-1 text-xs sm:text-sm">
          <p className="font-semibold text-accent-primaryDark flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-accent-primary shrink-0" />
            <span>{paper.venue}</span>
          </p>
          <p className="text-ink-muted text-xs font-mono">
            <span className="text-ink-primary font-medium">Authors:</span> {paper.authors}
          </p>
        </div>

        {/* Abstract */}
        <div className="space-y-1.5">
          <p
            className={`text-xs sm:text-sm text-ink-muted leading-relaxed ${
              !expandedAbstract ? 'line-clamp-3' : ''
            }`}
          >
            {paper.abstract}
          </p>
          <button
            type="button"
            onClick={() => setExpandedAbstract(!expandedAbstract)}
            className="text-xs font-semibold text-accent-primary hover:text-accent-primaryDark inline-flex items-center gap-1 transition-colors"
          >
            {expandedAbstract ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                <span>Read Full Abstract</span>
                <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        </div>

        {/* Key Contributions */}
        <div className="p-3.5 rounded-2xl bg-canvas/80 border border-surface-border space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-accent-primary" />
            <span>Core Novelty & Contributions</span>
          </span>
          <ul className="space-y-1.5">
            {paper.contributions.map((c, cIdx) => (
              <li
                key={cIdx}
                className="text-xs text-ink-muted leading-relaxed flex items-start gap-2"
              >
                <span className="text-accent-primary font-bold">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {paper.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-surface border border-surface-border text-ink-subtle"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions: Links & BibTeX */}
      <div className="pt-4 border-t border-surface-border/60 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={copyBibtex}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-medium text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm active:scale-95"
            >
              {copiedBibtex ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">BibTeX Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Copy BibTeX</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowBibtex(!showBibtex)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium text-ink-muted hover:text-ink-primary hover:bg-surface transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-ink-muted" />
              <span>{showBibtex ? 'Hide Code' : 'View BibTeX'}</span>
            </button>
          </div>

          {paper.url && (
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent-primary hover:bg-accent-primaryDark text-canvas text-xs font-medium transition-all shadow-soft-sm hover:scale-[1.02] active:scale-95"
            >
              <span>View Paper</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Collapsible BibTeX Drawer */}
        <AnimatePresence>
          {showBibtex && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <pre className="p-3.5 rounded-2xl bg-canvas border border-surface-border text-[11px] font-mono text-ink-muted overflow-x-auto leading-relaxed">
                <code>{paper.bibtex}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

