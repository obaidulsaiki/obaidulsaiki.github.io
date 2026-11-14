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
  Code2,
  Database,
  Quote,
  MapPin,
  Calendar,
} from 'lucide-react';
import { ResearchPublication } from '@/data/research';

interface Props {
  paper: ResearchPublication;
  index: number;
  onAuthorClick?: (author: string) => void;
}

export default function PublicationCard({ paper, index, onAuthorClick }: Props) {
  const [expandedAbstract, setExpandedAbstract] = useState(false);
  const [showCitePopover, setShowCitePopover] = useState(false);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const copyCitation = (format: 'bibtex' | 'apa' | 'ieee', text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => {
      setCopiedFormat(null);
      setShowCitePopover(false);
    }, 1800);
  };

  // Color helper for paper status pipeline
  const getStatusBadge = (status: ResearchPublication['status']) => {
    switch (status) {
      case 'published':
        return {
          label: 'Published',
          classes: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-500',
        };
      case 'presented':
        return {
          label: 'Presented',
          classes: 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30',
          dot: 'bg-sky-500',
        };
      case 'accepted':
        return {
          label: 'Accepted',
          classes: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
          dot: 'bg-indigo-500',
        };
      case 'under review':
        return {
          label: 'Under Review',
          classes: 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/30',
          dot: 'bg-purple-500',
        };
      case 'submitted':
        return {
          label: 'Submitted / Running',
          classes: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30',
          dot: 'bg-amber-500',
        };
      case 'working':
      default:
        return {
          label: 'Working Draft',
          classes: 'bg-surface text-ink-muted border-surface-border',
          dot: 'bg-ink-muted/50',
        };
    }
  };

  // Color helper for ranking / level
  const getLevelBadge = (level: ResearchPublication['level']) => {
    switch (level) {
      case 'Q1':
      case 'A*':
        return 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/40 font-bold';
      case 'Q2':
      case 'A':
        return 'bg-accent-soft/30 text-accent-primary border-accent-soft/60 font-semibold';
      case 'Q3':
      case 'B':
        return 'bg-canvas text-ink-primary border-surface-border font-medium';
      default:
        return 'bg-canvas text-ink-muted border-surface-border font-normal';
    }
  };

  const statusInfo = getStatusBadge(paper.status);

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
      className="group relative overflow-hidden rounded-2xl bg-surface/50 border border-surface-border hover:border-accent-primary/60 hover:bg-surface/80 transition-all duration-300 shadow-soft-sm hover:shadow-soft-md transform-gpu p-4 sm:p-5 flex flex-col justify-between space-y-3"
    >
      {/* Radiant Top Line on Hover */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-accent-primary via-amber-400 to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* LINE 1: Badges Row + Paper Title */}
      <div className="space-y-2">
        {/* Badges metadata ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-surface-border/50 pb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Status Pipeline Badge */}
            <span
              className={`inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border shadow-soft-sm ${statusInfo.classes}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${statusInfo.dot}`} />
              <span>{statusInfo.label}</span>
            </span>

            {/* Level / Quartile Badge */}
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getLevelBadge(
                paper.level
              )}`}
            >
              {paper.type === 'Journal' ? `${paper.level}` : `Conf: ${paper.level}`}
            </span>

            {/* Publisher Badge */}
            <span className="text-[10px] font-mono font-medium text-ink-primary px-2 py-0.5 rounded-md bg-canvas border border-surface-border">
              {paper.publisher}
            </span>

            {/* Type */}
            <span className="text-[10px] font-mono text-ink-subtle px-2 py-0.5 rounded-md bg-canvas border border-surface-border">
              {paper.type}
            </span>

            {/* Author Position */}
            <span className="text-[10px] font-mono font-semibold text-accent-primary px-2 py-0.5 rounded-md bg-accent-soft/20 border border-accent-soft/40 hidden sm:inline-flex items-center gap-1">
              <Award className="w-3 h-3" />
              <span>{paper.authorPosition}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-ink-subtle shrink-0">
            {paper.pid && <span>PID: {paper.pid}</span>}
            <span className="inline-flex items-center gap-1 font-semibold text-ink-primary">
              <Calendar className="w-3 h-3 text-accent-primary" />
              <span>{paper.year}</span>
            </span>
          </div>
        </div>

        {/* Paper Title */}
        <h3 className="text-base sm:text-lg font-bold text-ink-primary tracking-tight leading-snug group-hover:text-accent-primary transition-colors">
          {paper.title}
        </h3>
      </div>

      {/* LINE 2: Authors List in Single Line + Venue */}
      <div className="space-y-1 text-xs">
        {/* Single line author string with Obaidul Haque highlighted */}
        <div className="flex items-center gap-1.5 text-xs text-ink-muted overflow-x-auto whitespace-nowrap scrollbar-none py-0.5">
          <span className="font-semibold text-ink-primary shrink-0">Authors:</span>
          {paper.authorList.map((author, aIdx) => {
            const isMe = author.toLowerCase().includes('obaidul');
            return (
              <React.Fragment key={aIdx}>
                <button
                  type="button"
                  onClick={() => onAuthorClick && onAuthorClick(author)}
                  className={`transition-colors rounded px-1 py-0.2 shrink-0 ${
                    isMe
                      ? 'text-accent-primary font-bold bg-accent-soft/30 hover:underline'
                      : 'text-ink-muted hover:text-ink-primary hover:bg-canvas'
                  }`}
                  title={isMe ? 'Author' : `Filter by ${author}`}
                >
                  {author}
                </button>
                {aIdx < paper.authorList.length - 1 && <span className="text-ink-subtle">·</span>}
              </React.Fragment>
            );
          })}
        </div>

        {/* Venue & Location */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-accent-primaryDark">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-accent-primary shrink-0" />
            <span>{paper.venue}</span>
          </span>
          {paper.location && (
            <>
              <span className="text-ink-subtle">·</span>
              <span className="text-ink-muted text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-primary" />
                <span>{paper.location}</span>
              </span>
            </>
          )}
          {paper.qIf && (
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/30">
              {paper.qIf}
            </span>
          )}
        </div>
      </div>

      {/* LINE 3: Keywords Chips + Links + Citation Popover + Expand Abstract */}
      <div className="pt-2 border-t border-surface-border/50 flex flex-wrap items-center justify-between gap-2.5">
        {/* Keywords */}
        <div className="flex flex-wrap items-center gap-1.5">
          {paper.keywords.map((kw, kwIdx) => (
            <span
              key={kwIdx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-canvas border border-surface-border text-ink-muted hover:border-accent-primary hover:text-accent-primary transition-colors cursor-default shadow-soft-sm"
            >
              #{kw}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Published URL */}
          {paper.url && (
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-canvas border border-surface-border hover:border-accent-primary text-[11px] font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm hover:scale-105"
            >
              <ExternalLink className="w-3 h-3 text-accent-primary" />
              <span>Link</span>
            </a>
          )}

          {/* Code Link */}
          {paper.codeUrl && (
            <a
              href={paper.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-canvas border border-surface-border hover:border-accent-primary text-[11px] font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm hover:scale-105"
            >
              <Code2 className="w-3 h-3 text-accent-primary" />
              <span>Code</span>
            </a>
          )}

          {/* Dataset Link */}
          {paper.datasetUrl && (
            <a
              href={paper.datasetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-canvas border border-surface-border hover:border-accent-primary text-[11px] font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm hover:scale-105"
            >
              <Database className="w-3 h-3 text-accent-primary" />
              <span>Dataset</span>
            </a>
          )}

          {/* Citation Button with Popover */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowCitePopover(!showCitePopover)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-canvas border border-surface-border hover:border-accent-primary text-[11px] font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm hover:scale-105 active:scale-95"
            >
              <Quote className="w-3 h-3 text-accent-primary" />
              <span>Cite</span>
            </button>

            {/* Quick-Copy Citation Popover */}
            <AnimatePresence>
              {showCitePopover && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 bottom-full mb-2 z-30 p-2.5 rounded-xl bg-surface border border-surface-border shadow-soft-lg w-56 space-y-1.5"
                >
                  <div className="flex items-center justify-between border-b border-surface-border/60 pb-1.5 px-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-primary">
                      1-Click Citation Copy
                    </span>
                    <span className="text-[9px] font-mono text-ink-subtle">Clipboard</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    {/* APA */}
                    <button
                      type="button"
                      onClick={() => copyCitation('apa', paper.apa)}
                      className="px-2 py-1.5 rounded-lg bg-canvas border border-surface-border hover:border-accent-primary hover:text-accent-primary text-[10px] font-mono font-semibold text-ink-primary transition-all text-center"
                    >
                      {copiedFormat === 'apa' ? (
                        <span className="text-emerald-600 flex items-center justify-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> OK
                        </span>
                      ) : (
                        'APA'
                      )}
                    </button>

                    {/* IEEE */}
                    <button
                      type="button"
                      onClick={() => copyCitation('ieee', paper.ieee)}
                      className="px-2 py-1.5 rounded-lg bg-canvas border border-surface-border hover:border-accent-primary hover:text-accent-primary text-[10px] font-mono font-semibold text-ink-primary transition-all text-center"
                    >
                      {copiedFormat === 'ieee' ? (
                        <span className="text-emerald-600 flex items-center justify-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> OK
                        </span>
                      ) : (
                        'IEEE'
                      )}
                    </button>

                    {/* BibTeX */}
                    <button
                      type="button"
                      onClick={() => copyCitation('bibtex', paper.bibtex)}
                      className="px-2 py-1.5 rounded-lg bg-canvas border border-surface-border hover:border-accent-primary hover:text-accent-primary text-[10px] font-mono font-semibold text-ink-primary transition-all text-center"
                    >
                      {copiedFormat === 'bibtex' ? (
                        <span className="text-emerald-600 flex items-center justify-center gap-0.5">
                          <Check className="w-2.5 h-2.5" /> OK
                        </span>
                      ) : (
                        'BibTeX'
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Expand / Collapse Abstract Button */}
          <button
            type="button"
            onClick={() => setExpandedAbstract(!expandedAbstract)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent-soft/30 hover:bg-accent-soft/50 text-[11px] font-semibold text-accent-primary transition-all active:scale-95"
          >
            <span>{expandedAbstract ? 'Hide' : 'Abstract'}</span>
            {expandedAbstract ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
        </div>
      </div>

      {/* EXPANDABLE ACCORDION DRAWER: Abstract, Contributions & BibTeX */}
      <AnimatePresence>
        {expandedAbstract && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden pt-3 border-t border-surface-border/60 space-y-3"
          >
            {/* Abstract Text */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-primary">
                Abstract Summary
              </span>
              <p className="text-xs text-ink-muted leading-relaxed text-justify [text-justify:inter-word]">
                {paper.abstract}
              </p>
            </div>

            {/* Core Technical Contributions */}
            {paper.contributions && paper.contributions.length > 0 && (
              <div className="p-3 rounded-xl bg-canvas border border-surface-border space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-primary flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accent-primary" />
                  <span>Key Architecture &amp; Empirical Findings</span>
                </span>
                <ul className="space-y-1">
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
            )}

            {/* BibTeX Code Box */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-subtle">
                  BibTeX Entry
                </span>
                <button
                  type="button"
                  onClick={() => copyCitation('bibtex', paper.bibtex)}
                  className="text-[10px] font-mono text-accent-primary hover:underline flex items-center gap-1"
                >
                  <Copy className="w-2.5 h-2.5" />
                  <span>Copy</span>
                </button>
              </div>
              <pre className="p-2.5 rounded-xl bg-canvas border border-surface-border text-[10px] font-mono text-ink-muted overflow-x-auto leading-relaxed">
                <code>{paper.bibtex}</code>
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
