'use client';

import React, { useState } from 'react';
import { Microscope, Sparkles, Filter, Award, BookOpen, Layers } from 'lucide-react';
import { highlightedPapers, publicationOverviewStats } from '@/data/research';
import PublicationCard from '@/components/research/PublicationCard';

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Computer Vision & Medical Imaging',
    'Biomedical Signal Processing',
    'Clinical AI',
  ];

  const filteredPapers =
    selectedCategory === 'All'
      ? highlightedPapers
      : highlightedPapers.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div className="space-y-3 border-b border-surface-border/70 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Microscope className="w-3.5 h-3.5" />
          <span>Scientific Research & Innovations</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-primary tracking-tight">
          Research Publications
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-3xl leading-relaxed">
          Specializing in novel deep learning architectures for Medical Image Analysis, Computer Vision,
          State-Space Models (Mamba), Vision Transformers, and Biomedical Signal Processing (EEG/ECG).
        </p>
      </div>

      {/* Publication Metrics Overview Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Total Papers</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {publicationOverviewStats.totalPapers}
          </p>
          <p className="text-xs text-ink-muted">ACM | IEEE | Elsevier| Springer</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <Award className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">1st Author</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {publicationOverviewStats.firstAuthorCount}
          </p>
          <p className="text-xs text-ink-muted">Lead Architecture Design</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Published & Presented</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {parseInt(publicationOverviewStats.publishedCount) +
              parseInt(publicationOverviewStats.presentedCount)}
          </p>
          <p className="text-xs text-ink-muted">11 Published · 14 Presented</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-accent-primary">
            <Layers className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Under Review</span>
          </div>
          <p className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
            {publicationOverviewStats.underReviewCount}
          </p>
          <p className="text-xs text-ink-muted">Top Tier Journals & Conf</p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-surface-border/50 pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted mr-2">
          <Filter className="w-3.5 h-3.5 text-accent-primary" />
          <span>Filter Domain:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-accent-primary text-canvas shadow-soft-sm font-semibold'
                : 'bg-surface hover:bg-surface-hover text-ink-muted hover:text-ink-primary border border-surface-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Top 5 Highlighted Papers List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
            Top 5 Featured Breakthroughs
          </h2>
          <span className="text-xs font-mono text-ink-muted">
            Showing {filteredPapers.length} of {highlightedPapers.length} highlighted
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredPapers.map((paper, index) => (
            <PublicationCard key={paper.id} paper={paper} index={index} />
          ))}
        </div>
      </div>

      {/* Complete Archive Note */}
      <div className="p-6 rounded-3xl bg-surface/40 border border-surface-border text-center space-y-2">
        <h3 className="text-base font-bold text-ink-primary">
          Complete Research Ledger (40+ Papers)
        </h3>
        <p className="text-xs sm:text-sm text-ink-muted max-w-xl mx-auto">
          The remaining publications include 11 published, 14 presented, and 17 under review papers
          across ICCIT, ICECE (BUET), ICCA (AIUB), ICONNECT, and QPAIN (CUET). Complete BibTeX database
          available upon request.
        </p>
      </div>
    </div>
  );
}
