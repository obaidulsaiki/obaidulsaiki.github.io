'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Award,
  Sparkles,
  Layers,
  ArrowRight,
  FileQuestion,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { researchPublications, publicationOverviewStats } from '@/data/research';
import PublicationCard from '@/components/research/PublicationCard';
import AuthorLeaderboard, { getAuthorRelationship } from '@/components/research/AuthorLeaderboard';
import ResearchFilterToolbar, { FilterState } from '@/components/research/ResearchFilterToolbar';

export default function ResearchPage() {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: '',
    status: 'all',
    type: 'all',
    domain: 'all',
    publisher: 'all',
    level: 'all',
    author: null,
    collaboratorRole: 'all',
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 10;

  const availableDomains = useMemo(() => {
    const set = new Set<string>();
    researchPublications.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, []);

  // Smart multi-field filter
  const filteredPapers = useMemo(() => {
    return researchPublications.filter((paper) => {
      // 1. Multi-term Smart Search Query filter (matches title, authors, authorList, abstract, keywords, tags, venue, publisher, category, level, year, PID)
      if (filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        const terms = query.split(/\s+/).filter(Boolean);

        const searchableText = [
          paper.title,
          paper.authors,
          paper.authorList.join(' '),
          paper.abstract,
          paper.keywords.join(' '),
          paper.tags.join(' '),
          paper.venue,
          paper.publisher,
          paper.category,
          paper.level,
          paper.status,
          paper.year.toString(),
          paper.pid || '',
        ]
          .join(' ')
          .toLowerCase();

        const matchesAllTerms = terms.every((term) => searchableText.includes(term));
        if (!matchesAllTerms) {
          return false;
        }
      }

      // 2. Status Lifecycle filter
      if (filters.status !== 'all') {
        if (paper.status.toLowerCase() !== filters.status.toLowerCase()) {
          return false;
        }
      }

      // 3. Venue Type filter (Journal vs Conference)
      if (filters.type !== 'all') {
        if (paper.type.toLowerCase() !== filters.type.toLowerCase()) {
          return false;
        }
      }

      // 4. Research Domain filter
      if (filters.domain !== 'all') {
        if (paper.category !== filters.domain) {
          return false;
        }
      }

      // 5. Publisher filter
      if (filters.publisher !== 'all') {
        if (paper.publisher.toLowerCase() !== filters.publisher.toLowerCase()) {
          return false;
        }
      }

      // 6. Level / Ranking filter
      if (filters.level !== 'all') {
        if (paper.level.toLowerCase() !== filters.level.toLowerCase()) {
          return false;
        }
      }

      // 7. Author filter
      if (filters.author !== null) {
        const authorMatch = paper.authorList.some((a) =>
          a.toLowerCase().includes(filters.author!.toLowerCase())
        );
        if (!authorMatch) return false;
      }

      // 8. Collaborator Relationship Role filter
      if (filters.collaboratorRole !== 'all') {
        const matchesRole = paper.authorList.some((author) => {
          if (author.toLowerCase().includes('obaidul')) return false;
          return getAuthorRelationship(author) === filters.collaboratorRole;
        });
        if (!matchesRole) return false;
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (updater: (prev: FilterState) => FilterState) => {
    setFilters(updater);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      status: 'all',
      type: 'all',
      domain: 'all',
      publisher: 'all',
      level: 'all',
      author: null,
      collaboratorRole: 'all',
    });
    setCurrentPage(1);
  };

  const handleAuthorClick = (authorName: string) => {
    setFilters((prev) => ({
      ...prev,
      author: prev.author === authorName ? null : authorName,
    }));
    setCurrentPage(1);
    // Scroll smoothly to filter toolbar
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  // Strictly 10 papers per pagination page
  const totalPages = Math.max(1, Math.ceil(filteredPapers.length / PAGE_SIZE));
  const paginatedPapers = filteredPapers.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    const ledgerEl = document.getElementById('papers-ledger');
    if (ledgerEl) {
      ledgerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 480, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-12 py-4 w-full max-w-7xl mx-auto">
      {/* 1. Header & Command Filter Toolbar */}
      <ResearchFilterToolbar
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleResetFilters}
        totalCount={researchPublications.length}
        filteredCount={filteredPapers.length}
        availableDomains={availableDomains}
      />

      {/* 2. Publication Metrics Overview Banner */}
      <div className="p-6 sm:p-7 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <BookOpen className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Total Papers</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {publicationOverviewStats.totalPapers}
          </p>
          <p className="text-[11px] font-mono text-ink-muted">ACM · IEEE · Springer · Elsevier</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <Award className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">1st Author</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {publicationOverviewStats.firstAuthorCount}
          </p>
          <p className="text-[11px] font-mono text-ink-muted">Lead Architecture Formulation</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Published &amp; Presented</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {parseInt(publicationOverviewStats.publishedCount) +
              parseInt(publicationOverviewStats.presentedCount)}
          </p>
          <p className="text-[11px] font-mono text-ink-muted">
            {publicationOverviewStats.publishedCount} Published · {publicationOverviewStats.presentedCount} Presented
          </p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <Layers className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Under Review / Submitted</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {publicationOverviewStats.underReviewCount}
          </p>
          <p className="text-[11px] font-mono text-ink-muted">Top Tier Journals &amp; Conferences</p>
        </div>
      </div>

      {/* 3. Flattened & Compacted Publication Cards List with Strict 10-per-Page Pagination */}
      <section id="papers-ledger" className="space-y-4 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border/60 pb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
              Research Publication Ledger
            </h2>
            <span className="text-xs font-mono font-normal text-ink-subtle">
              ({filteredPapers.length} results)
            </span>
          </div>

          <div className="text-xs font-mono text-ink-muted">
            Showing{' '}
            <span className="text-accent-primary font-bold">
              {filteredPapers.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}
            </span>
            –
            <span className="text-accent-primary font-bold">
              {Math.min(currentPage * PAGE_SIZE, filteredPapers.length)}
            </span>{' '}
            of {filteredPapers.length} papers · Page {currentPage} of {totalPages}
          </div>
        </div>

        {filteredPapers.length === 0 ? (
          <div className="p-10 rounded-3xl bg-surface/40 border border-surface-border text-center space-y-3">
            <FileQuestion className="w-8 h-8 text-accent-primary mx-auto" />
            <h3 className="text-base font-bold text-ink-primary">No matching publications found</h3>
            <p className="text-xs text-ink-muted max-w-md mx-auto">
              No papers matched your current filter criteria. Try clearing some filters or searching for broader terms.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas text-xs font-semibold shadow-soft-sm transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {paginatedPapers.map((paper, index) => (
              <PublicationCard
                key={paper.id}
                paper={paper}
                index={index}
                onAuthorClick={handleAuthorClick}
              />
            ))}
          </div>
        )}

        {/* Strict 10-per-Page Numbered Pagination Navigation */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-surface-border/60">
            <span className="text-xs font-mono text-ink-muted text-center sm:text-left">
              Page <span className="font-bold text-ink-primary">{currentPage}</span> of{' '}
              <span className="font-bold text-ink-primary">{totalPages}</span> (10 papers / page)
            </span>

            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {/* Previous Button */}
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-surface-border bg-canvas text-xs font-semibold text-ink-primary hover:border-accent-primary hover:text-accent-primary disabled:opacity-35 disabled:pointer-events-none transition-all shadow-soft-sm cursor-pointer"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => goToPage(pageNum)}
                    className={`w-8 h-8 rounded-xl font-mono text-xs font-bold transition-all shadow-soft-sm cursor-pointer ${
                      isActive
                        ? 'bg-accent-primary text-canvas border border-accent-primary shadow-[0_0_12px_rgba(227,106,106,0.4)] scale-105'
                        : 'bg-canvas border border-surface-border text-ink-muted hover:border-accent-primary hover:text-ink-primary'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-surface-border bg-canvas text-xs font-semibold text-ink-primary hover:border-accent-primary hover:text-accent-primary disabled:opacity-35 disabled:pointer-events-none transition-all shadow-soft-sm cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 4. Co-Author Leaderboard & Contribution Network with Relationship Boxes */}
      <AuthorLeaderboard
        papers={researchPublications}
        selectedAuthor={filters.author}
        searchQuery={filters.searchQuery}
        onSelectAuthor={(author) => {
          setFilters((prev) => ({ ...prev, author }));
          setCurrentPage(1);
        }}
      />

      {/* 5. Navigation Footer Card */}
      <div className="pt-8 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-surface/40 border border-surface-border shadow-soft-sm">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-semibold text-accent-primary uppercase tracking-wider">
            Next Section
          </span>
          <h4 className="text-base font-bold text-ink-primary">
            Explore Extracurricular &amp; Leadership
          </h4>
          <p className="text-xs text-ink-muted text-justify sm:text-left [text-justify:inter-word]">
            Discover competitive programming contest records, student leadership, and community organizing initiatives.
          </p>
        </div>
        <Link
          href="/extracurricular/"
          prefetch={true}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>View Extracurricular</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
