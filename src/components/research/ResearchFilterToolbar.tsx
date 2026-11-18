'use client';

import React from 'react';
import { Search, X, Filter, RotateCcw, ArrowRight, Layers, BookOpen, Microscope } from 'lucide-react';
import { ResearchPublication } from '@/data/research';

export interface FilterState {
  searchQuery: string;
  status: string; // 'all' | 'working' | 'submitted' | 'under review' | 'accepted' | 'presented' | 'published'
  type: string; // 'all' | 'Journal' | 'Conference'
  domain: string; // 'all' | specific category
  publisher: string; // 'all' | 'IEEE' | 'ACM' | 'Springer Nature' | 'Elsevier'
  level: string; // 'all' | 'Q1' | 'Q2' | 'A' | 'B' | 'C'
  author: string | null;
  collaboratorRole: string; // 'all' | 'Sir' | "Ma'am" | 'Research Partner' | 'Senior Brother' | 'Small Brother' | 'Friends'
}

interface Props {
  filters: FilterState;
  onChange: (updater: (prev: FilterState) => FilterState) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  availableDomains: string[];
}

export default function ResearchFilterToolbar({
  filters,
  onChange,
  onReset,
  totalCount,
  filteredCount,
  availableDomains,
}: Props) {
  const statusPipeline = [
    { id: 'all', label: 'All Statuses' },
    { id: 'working', label: 'Working' },
    { id: 'submitted', label: 'Submitted' },
    { id: 'under review', label: 'Under Review' },
    { id: 'accepted', label: 'Accepted' },
    { id: 'presented', label: 'Presented' },
    { id: 'published', label: 'Published' },
  ];

  const publishers = ['all', 'IEEE', 'ACM', 'Springer Nature', 'Elsevier'];
  const levels = ['all', 'Q1', 'Q2', 'Q3', 'A', 'B', 'C'];

  const isFiltered =
    filters.searchQuery.trim() !== '' ||
    filters.status !== 'all' ||
    filters.type !== 'all' ||
    filters.domain !== 'all' ||
    filters.publisher !== 'all' ||
    filters.level !== 'all' ||
    filters.collaboratorRole !== 'all' ||
    filters.author !== null;

  return (
    <div className="space-y-6 w-full">
      {/* 1. Header: "Research Publications" in 1 Line, Centered with Wide Left & Right Wings */}
      <div className="w-full flex items-center justify-center gap-4 sm:gap-8 pt-2">
        {/* Left Wide Wing Decorative Line */}
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-surface-border to-accent-primary/60 rounded-full hidden sm:block" />

        {/* Center Title in 1 Line */}
        <div className="flex flex-col items-center text-center space-y-1.5 shrink-0 px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <Microscope className="w-3.5 h-3.5" />
            <span>Scientific Ledger &amp; Peer-Reviewed Catalog</span>
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-ink-primary tracking-tight whitespace-nowrap">
            Research Publications
          </h1>
        </div>

        {/* Right Wide Wing Decorative Line */}
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-surface-border to-accent-primary/60 rounded-full hidden sm:block" />
      </div>

      {/* Narrative Subtitle */}
      <p className="text-xs sm:text-sm text-ink-muted text-center max-w-2xl mx-auto leading-relaxed">
        Complete multi-institutional ledger of 50 publications spanning Medical Vision Transformers, State-Space Models (Mamba), Biomedical Signal Decoding, and low-resource Bengali NLP architectures.
      </p>

      {/* 2. Interactive Filter Command Center */}
      <div className="p-4 sm:p-5 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-4">
        {/* Row A: Smart Search Bar */}
        <div className="space-y-2">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-primary" />
            <input
              type="text"
              value={filters.searchQuery}
              onChange={(e) => {
                const query = e.target.value;
                onChange((prev) => ({ ...prev, searchQuery: query }));
              }}
              placeholder="Search by title, author (e.g. Jibon, Rakib), keyword, venue, publisher, or year..."
              className="w-full pl-10 pr-24 py-2.5 rounded-2xl bg-canvas border border-surface-border focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/20 text-xs sm:text-sm text-ink-primary placeholder:text-ink-subtle outline-none transition-all shadow-soft-sm"
            />
            {filters.searchQuery && (
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-soft/40 text-accent-primary font-bold hidden sm:inline">
                  {filteredCount} {filteredCount === 1 ? 'match' : 'matches'}
                </span>
                <button
                  type="button"
                  onClick={() => onChange((prev) => ({ ...prev, searchQuery: '' }))}
                  className="p-1 rounded-full hover:bg-surface text-ink-muted hover:text-ink-primary cursor-pointer transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Quick Suggestion Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-[10px] font-mono text-ink-subtle scrollbar-none">
            <span className="shrink-0 font-bold text-ink-muted">Quick filters:</span>
            {['Mamba', 'EEG', 'Stroke', 'Ferdaus Jibon', 'Rakib', 'Q1', 'ICCIT', 'Bangla'].map((quick) => (
              <button
                key={quick}
                type="button"
                onClick={() => onChange((prev) => ({ ...prev, searchQuery: quick }))}
                className={`px-2 py-0.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                  filters.searchQuery.toLowerCase() === quick.toLowerCase()
                    ? 'bg-accent-primary text-canvas border-accent-primary font-bold'
                    : 'bg-canvas hover:bg-surface text-ink-muted hover:text-ink-primary border-surface-border/80'
                }`}
              >
                {quick}
              </button>
            ))}
          </div>
        </div>

        {/* Row B: Paper Status Lifecycle Pipeline */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-ink-primary">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-accent-primary" />
              <span>Status Lifecycle Pipeline</span>
            </span>
            <span className="text-ink-subtle text-[10px] hidden sm:inline">
              Working → Submitted → Under Review → Accepted → Presented → Published
            </span>
          </div>

          <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
            {statusPipeline.map((st, idx) => {
              const isActive = filters.status === st.id;
              return (
                <React.Fragment key={st.id}>
                  <button
                    type="button"
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        status: prev.status === st.id ? 'all' : st.id,
                      }))
                    }
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer shadow-soft-sm ${
                      isActive
                        ? 'bg-accent-primary text-canvas border border-accent-primary shadow-[0_0_12px_rgba(227,106,106,0.35)] scale-105'
                        : 'bg-canvas border border-surface-border text-ink-muted hover:border-accent-primary/50 hover:text-ink-primary'
                    }`}
                  >
                    {st.label}
                  </button>
                  {idx > 0 && idx < statusPipeline.length - 1 && (
                    <ArrowRight className="w-2.5 h-2.5 text-ink-subtle shrink-0 hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Row C: Multi-Dimensional Filter Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-2 border-t border-surface-border/50 text-xs">
          {/* Venue Type Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold text-ink-subtle uppercase tracking-wider">
              Type
            </label>
            <select
              value={filters.type}
              onChange={(e) => onChange((prev) => ({ ...prev, type: e.target.value }))}
              className="w-full px-2.5 py-1.5 rounded-xl bg-canvas border border-surface-border text-ink-primary font-medium focus:border-accent-primary outline-none cursor-pointer shadow-soft-sm"
            >
              <option value="all">All Types</option>
              <option value="Journal">Journals</option>
              <option value="Conference">Conferences</option>
            </select>
          </div>

          {/* Research Domain Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold text-ink-subtle uppercase tracking-wider">
              Domain
            </label>
            <select
              value={filters.domain}
              onChange={(e) => onChange((prev) => ({ ...prev, domain: e.target.value }))}
              className="w-full px-2.5 py-1.5 rounded-xl bg-canvas border border-surface-border text-ink-primary font-medium focus:border-accent-primary outline-none cursor-pointer shadow-soft-sm truncate"
            >
              <option value="all">All Domains</option>
              {availableDomains.map((dom) => (
                <option key={dom} value={dom}>
                  {dom}
                </option>
              ))}
            </select>
          </div>

          {/* Publisher Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold text-ink-subtle uppercase tracking-wider">
              Publisher
            </label>
            <select
              value={filters.publisher}
              onChange={(e) =>
                onChange((prev) => ({ ...prev, publisher: e.target.value }))
              }
              className="w-full px-2.5 py-1.5 rounded-xl bg-canvas border border-surface-border text-ink-primary font-medium focus:border-accent-primary outline-none cursor-pointer shadow-soft-sm"
            >
              <option value="all">All Publishers</option>
              {publishers.slice(1).map((pub) => (
                <option key={pub} value={pub}>
                  {pub}
                </option>
              ))}
            </select>
          </div>

          {/* Ranking / Level Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold text-ink-subtle uppercase tracking-wider">
              Level / Rank
            </label>
            <select
              value={filters.level}
              onChange={(e) => onChange((prev) => ({ ...prev, level: e.target.value }))}
              className="w-full px-2.5 py-1.5 rounded-xl bg-canvas border border-surface-border text-ink-primary font-medium focus:border-accent-primary outline-none cursor-pointer shadow-soft-sm"
            >
              <option value="all">All Ranks</option>
              {levels.slice(1).map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          {/* Collaborator Role Filter */}
          <div className="space-y-1 col-span-2 sm:col-span-1">
            <label className="text-[10px] font-mono font-bold text-ink-subtle uppercase tracking-wider">
              Collaborator Role
            </label>
            <select
              value={filters.collaboratorRole}
              onChange={(e) =>
                onChange((prev) => ({ ...prev, collaboratorRole: e.target.value }))
              }
              className="w-full px-2.5 py-1.5 rounded-xl bg-canvas border border-surface-border text-ink-primary font-medium focus:border-accent-primary outline-none cursor-pointer shadow-soft-sm truncate"
            >
              <option value="all">All Roles</option>
              <option value="Sir">Sir (Faculty)</option>
              <option value="Ma'am">Ma&apos;am (Faculty)</option>
              <option value="Research Partner">Research Partner (Mariha Tabassum)</option>
              <option value="Senior Brother">Senior Brother</option>
              <option value="Small Brother">Small Brother</option>
              <option value="Friends">Friends</option>
            </select>
          </div>
        </div>

        {/* Row D: Filter Status & Active Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-surface-border/50 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-ink-primary">
              Showing <span className="text-accent-primary font-bold">{filteredCount}</span> of{' '}
              {totalCount} publications
            </span>

            {/* Active Author Filter Tag */}
            {filters.author && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent-soft/40 border border-accent-soft text-[10px] font-mono font-semibold text-accent-primary">
                <span>Co-Author: {filters.author}</span>
                <button
                  type="button"
                  onClick={() => onChange((prev) => ({ ...prev, author: null }))}
                  className="hover:text-ink-primary"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {/* Active Role Filter Tag */}
            {filters.collaboratorRole !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-[10px] font-mono font-semibold text-purple-700 dark:text-purple-300">
                <span>Role: {filters.collaboratorRole}</span>
                <button
                  type="button"
                  onClick={() => onChange((prev) => ({ ...prev, collaboratorRole: 'all' }))}
                  className="hover:text-ink-primary"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>

          {/* Reset Filters Action */}
          {isFiltered && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-accent-primary hover:text-accent-primaryDark transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
