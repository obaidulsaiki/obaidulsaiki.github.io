'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Crown, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { ResearchPublication } from '@/data/research';

interface Props {
  papers: ResearchPublication[];
  selectedAuthor: string | null;
  onSelectAuthor: (authorName: string | null) => void;
}

export type AuthorRelationship = 'Sir' | "Ma'am" | 'Partner' | 'Friends' | 'Small Brother' | 'Senior Brother';

export function getAuthorRelationship(name: string): AuthorRelationship {
  const n = name.toLowerCase();

  // Female Faculty / Teachers (Ma'am)
  if (
    n.includes('setu') ||
    n.includes('mohshina') ||
    n.includes('sultana') ||
    n.includes('lija') ||
    n.includes('nourin') ||
    n.includes('fatema') ||
    n.includes('snaholata') ||
    n.includes('mondal') ||
    n.includes('sonia') ||
    n.includes('afroz') ||
    n.includes('nusrat') ||
    n.includes('tamanna')
  ) {
    return "Ma'am";
  }

  // Male Faculty / Teachers / Professors (Sir)
  if (
    n.includes('jibon') ||
    n.includes('murtoza') ||
    n.includes('abdur rahim') ||
    n.includes('kamal') ||
    n.includes('ashraful islam') ||
    n.includes('shakil ahamed') ||
    n.includes('shakil ahmed') ||
    n.includes('awal') ||
    (n.includes('rashedul') && !n.includes('rifat')) ||
    n.includes('gahangir') ||
    n.includes('utpal') ||
    n.includes('ehetisum') ||
    n.includes('sharif') ||
    n.includes('toyeer') ||
    n.includes('mahamudul') ||
    n.includes('tariquzzaman') ||
    n.includes('nazir') ||
    n.includes('halder') ||
    n.includes('alamin') ||
    n.includes('imran') ||
    n.includes('rakib hossen') ||
    n.includes('tamim') ||
    n.includes('mamoon') ||
    n.includes('sheekar') ||
    n.includes('banerjee') ||
    n.includes('saidur')
  ) {
    return 'Sir';
  }

  // Partner (Mariha Tabassum is the sole partner)
  if (n.includes('mariha')) {
    return 'Partner';
  }

  // Senior Brother / Mentor / Senior Lab Peer
  if (n.includes('ahad linkon') || n.includes('linkon')) {
    return 'Senior Brother';
  }

  // Small Brother / Mentee / Junior Collaborator
  if (
    (n.includes('rakib') && !n.includes('hossen')) ||
    n.includes('rakin') ||
    n.includes('mahbub') ||
    n.includes('anay') ||
    n.includes('istiak ahamed') ||
    n.includes('faysal')
  ) {
    return 'Small Brother';
  }

  // Friends / Peer Collaborators
  return 'Friends';
}

export interface AuthorStat {
  name: string;
  total: number;
  journals: number;
  conferences: number;
  firstAuthorCount: number;
  domains: string[];
  relationship: AuthorRelationship;
}

export default function AuthorLeaderboard({ papers, selectedAuthor, onSelectAuthor }: Props) {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const [selectedRole, setSelectedRole] = useState<AuthorRelationship | 'All'>('All');

  // Dynamically compute author collaboration stats across the provided paper catalog
  const authorStats: AuthorStat[] = useMemo(() => {
    const map = new Map<
      string,
      { total: number; journals: number; conferences: number; firstAuthorCount: number; domains: Set<string> }
    >();

    papers.forEach((paper) => {
      const isJournal = paper.type === 'Journal';
      paper.authorList.forEach((rawAuthor, idx) => {
        const cleanName = rawAuthor.trim();
        // Skip the primary portfolio author
        if (cleanName.toLowerCase().includes('obaidul')) return;

        if (!map.has(cleanName)) {
          map.set(cleanName, {
            total: 0,
            journals: 0,
            conferences: 0,
            firstAuthorCount: 0,
            domains: new Set<string>(),
          });
        }

        const current = map.get(cleanName)!;
        current.total += 1;
        if (isJournal) current.journals += 1;
        else current.conferences += 1;
        if (idx === 0) current.firstAuthorCount += 1;
        current.domains.add(paper.category);
      });
    });

    return Array.from(map.entries())
      .map(([name, stat]) => ({
        name,
        total: stat.total,
        journals: stat.journals,
        conferences: stat.conferences,
        firstAuthorCount: stat.firstAuthorCount,
        domains: Array.from(stat.domains).slice(0, 2),
        relationship: getAuthorRelationship(name),
      }))
      .sort((a, b) => b.total - a.total);
  }, [papers]);

  // Compute live counts per relationship role
  const roleCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: authorStats.length,
      Sir: 0,
      "Ma'am": 0,
      Partner: 0,
      'Senior Brother': 0,
      'Small Brother': 0,
      Friends: 0,
    };
    authorStats.forEach((a) => {
      counts[a.relationship] = (counts[a.relationship] || 0) + 1;
    });
    return counts;
  }, [authorStats]);

  // Filter collaborator cards based on the selected relationship category
  const filteredAuthors = useMemo(() => {
    if (selectedRole === 'All') return authorStats;
    return authorStats.filter((a) => a.relationship === selectedRole);
  }, [authorStats, selectedRole]);

  const displayedAuthors = showAllAuthors ? filteredAuthors : filteredAuthors.slice(0, 8);

  const getRelationshipBadge = (rel: AuthorRelationship) => {
    switch (rel) {
      case 'Sir':
      case "Ma'am":
        return 'bg-purple-500/15 text-purple-700 dark:text-purple-300 border-purple-500/40 font-bold';
      case 'Partner':
        return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/40 font-bold';
      case 'Senior Brother':
        return 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/40 font-semibold';
      case 'Small Brother':
        return 'bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/40 font-semibold';
      case 'Friends':
      default:
        return 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/40 font-semibold';
    }
  };

  if (authorStats.length === 0) return null;

  return (
    <section className="space-y-6 pt-6 border-t border-surface-border/80">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-surface-border/60 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
            <Users className="w-3.5 h-3.5" />
            <span>Co-Author Collaboration Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
            Author Contribution Ledger
          </h2>
          <p className="text-xs sm:text-sm text-ink-muted">
            Collaborators ranked by joint publication count with tagged academic and research relationship roles.
          </p>
        </div>

        {selectedAuthor && (
          <button
            type="button"
            onClick={() => onSelectAuthor(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-primary text-canvas text-xs font-semibold shadow-soft-sm hover:scale-105 active:scale-95 transition-all self-start sm:self-auto cursor-pointer"
          >
            <span>Clear Filter ({selectedAuthor})</span>
            <span>×</span>
          </button>
        )}
      </div>

      {/* Collaborator Role Filter Tabs */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-ink-subtle">
          <span className="font-mono uppercase tracking-wider text-[10px]">Filter by Relationship Role:</span>
          <span className="font-mono text-[11px] text-ink-muted">
            Showing <strong className="text-accent-primary">{filteredAuthors.length}</strong> collaborators
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {(
            [
              { id: 'All', label: 'All', count: roleCounts['All'], badgeColor: 'bg-surface-border/60 text-ink-primary' },
              { id: 'Sir', label: 'Sir', count: roleCounts['Sir'], badgeColor: 'bg-purple-500/20 text-purple-700 dark:text-purple-300' },
              { id: "Ma'am", label: "Ma'am", count: roleCounts["Ma'am"], badgeColor: 'bg-purple-500/20 text-purple-700 dark:text-purple-300' },
              { id: 'Partner', label: 'Partner', count: roleCounts['Partner'], badgeColor: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' },
              { id: 'Senior Brother', label: 'Senior Brother', count: roleCounts['Senior Brother'], badgeColor: 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300' },
              { id: 'Small Brother', label: 'Small Brother', count: roleCounts['Small Brother'], badgeColor: 'bg-teal-500/20 text-teal-700 dark:text-teal-300' },
              { id: 'Friends', label: 'Friends', count: roleCounts['Friends'], badgeColor: 'bg-sky-500/20 text-sky-700 dark:text-sky-300' },
            ] as const
          ).map((tab) => {
            const isActive = selectedRole === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedRole(tab.id as any);
                  setShowAllAuthors(false);
                }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shadow-soft-sm ${
                  isActive
                    ? 'bg-accent-primary text-canvas shadow-[0_0_12px_rgba(227,106,106,0.35)] scale-105'
                    : 'bg-canvas hover:bg-surface text-ink-muted hover:text-ink-primary border border-surface-border'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold ${
                    isActive ? 'bg-canvas/25 text-canvas' : tab.badgeColor
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Collaborator Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedAuthors.map((author, index) => {
          const isKing = index === 0;
          const isSelected = selectedAuthor === author.name;

          return (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.4) }}
              onClick={() => onSelectAuthor(isSelected ? null : author.name)}
              className={`group relative overflow-hidden rounded-3xl p-5 border transition-all duration-300 shadow-soft-sm hover:shadow-soft-md cursor-pointer transform-gpu hover:-translate-y-1 flex flex-col justify-between space-y-4 ${
                isSelected
                  ? 'border-accent-primary bg-surface/90 ring-2 ring-accent-primary/40'
                  : isKing
                  ? 'border-amber-400/80 bg-gradient-to-b from-amber-500/10 via-surface/60 to-surface/80 hover:border-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.18)]'
                  : 'border-surface-border bg-surface/50 hover:border-accent-primary/60 hover:bg-surface/80'
              }`}
            >
              {/* Golden Radiant Top Line for King / Primary for others */}
              <div
                className={`absolute top-0 inset-x-0 h-1 transition-opacity duration-300 ${
                  isKing
                    ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-100'
                    : 'bg-gradient-to-r from-accent-primary via-amber-400 to-accent-primary opacity-0 group-hover:opacity-100'
                }`}
              />

              <div className="space-y-3">
                {/* Top Row: Circular Counter + Crown/Rank Badge */}
                <div className="flex items-center justify-between gap-3">
                  {/* Circular Number Count */}
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-extrabold text-base transition-all duration-300 shadow-soft-sm group-hover:scale-105 ${
                        isKing
                          ? 'border-amber-400 bg-canvas text-amber-600 dark:text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.35)]'
                          : 'border-accent-primary bg-canvas text-accent-primary shadow-[0_0_10px_rgba(227,106,106,0.2)]'
                      }`}
                    >
                      {author.total}
                    </div>
                    <span className="absolute -bottom-1 -right-1 font-mono text-[8px] font-bold px-1.5 py-0.2 rounded-full bg-surface border border-surface-border text-ink-subtle">
                      #{index + 1}
                    </span>
                  </div>

                  {/* King Crown or Collaborator Tag */}
                  {isKing ? (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 border border-amber-400/70 text-amber-700 dark:text-amber-300 text-xs font-bold shadow-soft-sm animate-pulse">
                      <Crown className="w-4 h-4 text-amber-500 fill-amber-400" />
                      <span>KING Lead</span>
                    </div>
                  ) : (
                    <span className="text-[10px] font-mono text-ink-subtle px-2 py-0.5 rounded-full bg-canvas border border-surface-border">
                      Collaborator
                    </span>
                  )}
                </div>

                {/* Author Name + Relationship Box */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-1.5">
                    <h3 className="text-base font-bold text-ink-primary tracking-tight group-hover:text-accent-primary transition-colors line-clamp-1">
                      {author.name}
                    </h3>

                    {/* Relationship Box [Sir] [Partner] [Small Brother] [Friends] */}
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md border shrink-0 shadow-soft-sm ${getRelationshipBadge(
                        author.relationship
                      )}`}
                    >
                      [{author.relationship}]
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-accent-primaryDark">
                    {author.journals} {author.journals === 1 ? 'Journal' : 'Journals'} ·{' '}
                    {author.conferences} {author.conferences === 1 ? 'Conference' : 'Conferences'}
                  </p>
                </div>

                {/* Domains chips */}
                <div className="flex flex-wrap gap-1">
                  {author.domains.map((dom, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-canvas border border-surface-border text-ink-muted line-clamp-1"
                    >
                      {dom.split('&')[0].trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Quick Filter Trigger */}
              <div className="pt-2.5 border-t border-surface-border/50 flex items-center justify-between text-[11px] font-semibold">
                <span className="text-ink-muted group-hover:text-ink-primary transition-colors">
                  {isSelected ? 'Active Filter' : 'Filter by Author'}
                </span>
                <Filter className="w-3 h-3 text-accent-primary group-hover:scale-110 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expand / Collapse All Authors */}
      {filteredAuthors.length > 8 && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowAllAuthors(!showAllAuthors)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-canvas border border-surface-border hover:border-accent-primary text-xs font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>
              {showAllAuthors
                ? 'Show Top 8 in This Category'
                : `View All ${filteredAuthors.length} ${
                    selectedRole === 'All' ? 'Collaborators' : selectedRole + ' Collaborators'
                  }`}
            </span>
            {showAllAuthors ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}
    </section>
  );
}
