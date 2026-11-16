'use client';

import React from 'react';
import {
  Compass,
  Tv,
  BookOpen,
  ScrollText,
  Film,
  Clapperboard,
  Globe,
  ArrowRight,
  Flame,
  ExternalLink,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { mediaHobbies, MediaCategory, MediaTopItem, animeMalStats, mangaMalStats } from '@/data/hobbies';

const iconMap: Record<string, LucideIcon> = {
  Tv,
  BookOpen,
  ScrollText,
  Film,
  Clapperboard,
  Globe,
};

function PosterCard({
  poster,
  itemType,
  isPriority,
}: {
  poster: MediaTopItem;
  itemType: 'watch' | 'read';
  isPriority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div
      key={poster.rank}
      className="group relative rounded-xl overflow-hidden bg-canvas border border-[#D49A9A]/30 hover:border-[#7C0E44] dark:hover:border-[#F2DACE] transition-all shadow-soft-sm hover:shadow-[0_6px_20px_rgba(124,14,68,0.15)] flex flex-col justify-between"
    >
      {/* Aspect 2/3 Poster Container */}
      <div className="relative aspect-[2/3] w-full bg-surface-muted overflow-hidden">
        {/* Animated Anime Cartoon Loading GIF Placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-2 text-center bg-gradient-to-br from-[#7C0E44]/10 to-[#D49A9A]/15 select-none pointer-events-none">
            <img
              src="/images/anime-loading.gif"
              alt="Loading animation"
              className="w-10 h-10 object-contain drop-shadow-sm"
            />
            <span className="text-[9px] font-mono font-bold text-[#AA5E7A] dark:text-[#D49A9A] mt-1 tracking-wider animate-pulse">
              LOADING...
            </span>
          </div>
        )}

        <img
          src={poster.imageUrl}
          alt={poster.title}
          loading={isPriority ? 'eager' : 'lazy'}
          fetchPriority={isPriority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`relative z-[1] w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />

        {/* Rank Number Badge pinned on top-left of photo */}
        <div className="absolute top-1.5 left-1.5 z-10">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-[#7C0E44] text-white text-[10px] font-mono font-extrabold shadow-sm">
            #{poster.rank}
          </span>
        </div>

        {/* Status Badge pinned on top-right of photo */}
        <div className="absolute top-1.5 right-1.5 z-10">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-black/85 backdrop-blur-sm text-[#F2DACE] border border-[#AA5E7A]/50 text-[9px] font-mono font-bold shadow-sm">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                poster.status === 'Reading' || poster.status === 'Watching'
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-emerald-400'
              }`}
            />
            {poster.status || (itemType === 'watch' ? 'Watched' : 'Completed')}
          </span>
        </div>

        {/* Subtle dark gradient overlay on hover */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Name / Title */}
      <div className="p-2 sm:p-2.5 bg-canvas/95 flex-1 flex items-center">
        <p
          className="text-[11px] sm:text-xs font-bold text-ink-primary leading-tight line-clamp-2 group-hover:text-[#7C0E44] dark:group-hover:text-[#F2DACE] transition-colors"
          title={poster.title}
        >
          {poster.title}
        </p>
      </div>
    </div>
  );
}

function ConsumingCardThumbnail({
  imageUrl,
  title,
  isPriority,
}: {
  imageUrl?: string;
  title: string;
  isPriority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  if (!imageUrl) return null;

  return (
    <div className="relative w-20 sm:w-24 aspect-[2/3] rounded-xl overflow-hidden shadow-md shrink-0 border border-[#D49A9A]/40 bg-surface-muted">
      {!isLoaded && (
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-1 bg-gradient-to-br from-[#7C0E44]/10 to-[#D49A9A]/15 select-none pointer-events-none">
          <img
            src="/images/anime-loading.gif"
            alt="Loading animation"
            className="w-8 h-8 object-contain"
          />
        </div>
      )}
      <img
        src={imageUrl}
        alt={title}
        loading={isPriority ? 'eager' : 'lazy'}
        fetchPriority={isPriority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function HobbyPage() {
  return (
    <div className="space-y-10 py-2 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="space-y-1.5 border-b border-surface-border/80 pb-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#F2DACE] dark:bg-[#7C0E44]/20 border border-[#D49A9A] text-[11px] font-semibold text-[#7C0E44] dark:text-[#F2DACE]">
          <Compass className="w-3 h-3 text-[#7C0E44] dark:text-[#F2DACE]" />
          <span>Life Beyond Code</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          My Hobbie.. not important at all
        </h1>
        <p className="text-xs sm:text-sm text-ink-muted max-w-2xl leading-relaxed">
          Anime, manga, manhwa, Hollywood movies, and non-English cinema — personal favorites, ranked top 10s, and what I&apos;m currently watching or reading.
        </p>
      </div>

      {/* 5 Media Categories: 1 Row, 2 Columns per Category or Full-Width Grid */}
      <div className="space-y-8">
        {mediaHobbies.map((item: MediaCategory, idx: number) => {
          const Icon = iconMap[item.iconName] || Tv;
          const isFirstCategory = idx === 0;

          return (
            <section key={item.id} className="space-y-3">
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 border-b border-surface-border/60 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#7C0E44] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-ink-primary tracking-tight">
                    {item.name}
                  </h2>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#F2DACE] dark:bg-[#7C0E44]/25 border border-[#D49A9A] text-[#7C0E44] dark:text-[#F2DACE]">
                  {item.badge}
                </span>
              </div>

              {/* Wide Card: 1 Row, Full-Width (Option B) or 2 Columns */}
              <div className="p-5 sm:p-6 rounded-3xl bg-[#F2DACE]/20 dark:bg-[#7C0E44]/5 border border-[#D49A9A]/40 hover:border-[#AA5E7A] transition-all shadow-soft-sm hover:shadow-[0_8px_30px_rgba(124,14,68,0.10)] space-y-4">
                {item.currentlyConsuming ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                    {/* Left Column: Top 10 Posters (Photo + Number + Name) */}
                    <div className="lg:col-span-8 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7C0E44]"></span>
                          <span>Top 10 {item.name} (Ranked)</span>
                        </span>
                        <span className="text-[10px] font-mono text-ink-muted">10 Favorites</span>
                      </div>

                      {/* 5-Column Poster Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                        {item.topTen.map((poster: MediaTopItem) => (
                          <PosterCard
                            key={poster.rank}
                            poster={poster}
                            itemType={item.type}
                            isPriority={isFirstCategory}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Currently Watching / Reading */}
                    <div className="lg:col-span-4 flex flex-col">
                      <div className="p-4 sm:p-5 rounded-2xl bg-canvas/95 border border-[#D49A9A]/50 flex flex-col justify-between space-y-4 h-full shadow-soft-sm relative overflow-hidden group">
                        {/* Top Accent Gradient Bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C0E44] via-[#AA5E7A] to-[#D49A9A]"></div>

                        <div className="space-y-3 pt-1">
                          <div className="flex items-center justify-between gap-1 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7C0E44]/10 dark:bg-[#7C0E44]/25 border border-[#AA5E7A]/40 text-[10px] font-mono font-bold text-[#7C0E44] dark:text-[#F2DACE]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7C0E44] dark:bg-[#F2DACE] animate-pulse"></span>
                              {item.currentlyConsuming.status}
                            </span>
                            <Flame className="w-3.5 h-3.5 text-[#AA5E7A]" />
                          </div>

                          {/* Media Thumbnail + Title Info */}
                          <div className="flex items-start gap-3.5">
                            <ConsumingCardThumbnail
                              imageUrl={item.currentlyConsuming.imageUrl}
                              title={item.currentlyConsuming.title}
                              isPriority={isFirstCategory}
                            />

                            <div className="space-y-1 min-w-0 flex-1">
                              <span className="text-[10px] uppercase font-mono font-semibold text-ink-subtle">
                                {item.type === 'watch' ? 'Current Watchlist' : 'Current Read'}
                              </span>
                              <h3 className="text-base sm:text-lg font-extrabold text-ink-primary group-hover:text-[#7C0E44] dark:group-hover:text-[#F2DACE] transition-colors leading-snug">
                                {item.currentlyConsuming.title}
                              </h3>
                              <p className="text-xs font-mono font-semibold text-[#AA5E7A] dark:text-[#D49A9A]">
                                {item.currentlyConsuming.genre}
                              </p>
                              {item.currentlyConsuming.note && (
                                <p className="text-xs text-ink-muted leading-relaxed pt-1">
                                  {item.currentlyConsuming.note}
                                </p>
                              )}
                            </div>
                          </div>

                          {item.id === 'anime' && (
                            <div className="pt-3 border-t border-[#D49A9A]/30 space-y-2.5">
                              {/* MAL Header: Title + Profile Link */}
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-extrabold text-[#7C0E44] dark:text-[#F2DACE]">
                                  Anime Stats
                                </span>
                                <a
                                  href="https://myanimelist.net/profile/obaidulsaiki"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] text-ink-subtle hover:text-[#7C0E44] dark:hover:text-[#F2DACE] transition-colors inline-flex items-center gap-1"
                                >
                                  <span>All Anime Stats</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              </div>

                              {/* Days & Mean Score Header */}
                              <div className="flex items-baseline justify-between text-xs font-mono px-0.5">
                                <div className="flex items-baseline gap-1">
                                  <span className="text-ink-subtle text-[11px]">Days:</span>
                                  <span className="text-sm font-extrabold text-ink-primary font-mono">{animeMalStats.days}</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                  <span className="text-ink-subtle text-[11px]">Mean Score:</span>
                                  <span className="text-sm font-extrabold text-ink-primary font-mono">{animeMalStats.meanScore}</span>
                                </div>
                              </div>

                              {/* Multi-segment Progress Bar matching MAL */}
                              <div className="w-full h-2 rounded-full overflow-hidden flex bg-surface-border/50">
                                <div
                                  className="bg-[#2db039] h-full"
                                  style={{ width: `${(animeMalStats.watching / animeMalStats.totalEntries) * 100}%` }}
                                  title={`Watching: ${animeMalStats.watching}`}
                                />
                                <div
                                  className="bg-[#26448f] h-full"
                                  style={{ width: `${(animeMalStats.completed / animeMalStats.totalEntries) * 100}%` }}
                                  title={`Completed: ${animeMalStats.completed}`}
                                />
                                <div
                                  className="bg-[#f9d457] h-full"
                                  style={{ width: `${(animeMalStats.onHold / animeMalStats.totalEntries) * 100}%` }}
                                  title={`On-Hold: ${animeMalStats.onHold}`}
                                />
                                <div
                                  className="bg-[#a12f31] h-full"
                                  style={{ width: `${(animeMalStats.dropped / animeMalStats.totalEntries) * 100}%` }}
                                  title={`Dropped: ${animeMalStats.dropped}`}
                                />
                                <div
                                  className="bg-[#787878] h-full"
                                  style={{ width: `${(animeMalStats.planToWatch / animeMalStats.totalEntries) * 100}%` }}
                                  title={`Plan to Watch: ${animeMalStats.planToWatch}`}
                                />
                              </div>

                              {/* 2-Column Stats Breakdown with exact links */}
                              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-mono pt-1">
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/animelist/obaidulsaiki?status=1"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#2db039] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#2db039] shrink-0" />
                                      <span>Watching</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.watching}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/animelist/obaidulsaiki?status=2"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#26448f] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#26448f] shrink-0" />
                                      <span>Completed</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.completed}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/animelist/obaidulsaiki?status=3"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#f9d457] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#f9d457] shrink-0" />
                                      <span>On-Hold</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.onHold}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/animelist/obaidulsaiki?status=4"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#a12f31] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#a12f31] shrink-0" />
                                      <span>Dropped</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.dropped}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/animelist/obaidulsaiki?status=6"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#787878] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#787878] shrink-0" />
                                      <span>Plan to Watch</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.planToWatch.toLocaleString()}</span>
                                  </div>
                                </div>

                                <div className="space-y-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-ink-subtle">Total Entries</span>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.totalEntries.toLocaleString()}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-ink-subtle">Rewatched</span>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.rewatched}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-ink-subtle">Episodes</span>
                                    <span className="font-extrabold text-ink-primary">{animeMalStats.episodes.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {item.id === 'manga' && (
                            <div className="pt-3 border-t border-[#D49A9A]/30 space-y-2.5">
                              {/* MAL Header: Title + Profile Link */}
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-extrabold text-[#7C0E44] dark:text-[#F2DACE]">
                                  Manga Stats
                                </span>
                                <a
                                  href="https://myanimelist.net/mangalist/obaidulsaiki"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] text-ink-subtle hover:text-[#7C0E44] dark:hover:text-[#F2DACE] transition-colors inline-flex items-center gap-1"
                                >
                                  <span>All Manga Stats</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </a>
                              </div>

                              {/* Days & Mean Score Header */}
                              <div className="flex items-baseline justify-between text-xs font-mono px-0.5">
                                <div className="flex items-baseline gap-1">
                                  <span className="text-ink-subtle text-[11px]">Days:</span>
                                  <span className="text-sm font-extrabold text-ink-primary font-mono">{mangaMalStats.days}</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                  <span className="text-ink-subtle text-[11px]">Mean Score:</span>
                                  <span className="text-sm font-extrabold text-ink-primary font-mono">{mangaMalStats.meanScore}</span>
                                </div>
                              </div>

                              {/* Multi-segment Progress Bar matching MAL */}
                              <div className="w-full h-2 rounded-full overflow-hidden flex bg-surface-border/50">
                                <div
                                  className="bg-[#2db039] h-full"
                                  style={{ width: `${(mangaMalStats.reading / mangaMalStats.totalEntries) * 100}%` }}
                                  title={`Reading: ${mangaMalStats.reading}`}
                                />
                                <div
                                  className="bg-[#26448f] h-full"
                                  style={{ width: `${(mangaMalStats.completed / mangaMalStats.totalEntries) * 100}%` }}
                                  title={`Completed: ${mangaMalStats.completed}`}
                                />
                                <div
                                  className="bg-[#f9d457] h-full"
                                  style={{ width: `${(mangaMalStats.onHold / mangaMalStats.totalEntries) * 100}%` }}
                                  title={`On-Hold: ${mangaMalStats.onHold}`}
                                />
                                <div
                                  className="bg-[#a12f31] h-full"
                                  style={{ width: `${(mangaMalStats.dropped / mangaMalStats.totalEntries) * 100}%` }}
                                  title={`Dropped: ${mangaMalStats.dropped}`}
                                />
                                <div
                                  className="bg-[#787878] h-full"
                                  style={{ width: `${(mangaMalStats.planToRead / mangaMalStats.totalEntries) * 100}%` }}
                                  title={`Plan to Read: ${mangaMalStats.planToRead}`}
                                />
                              </div>

                              {/* 2-Column Stats Breakdown with exact links */}
                              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-mono pt-1">
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/mangalist/obaidulsaiki?status=1"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#2db039] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#2db039] shrink-0" />
                                      <span>Reading</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.reading}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/mangalist/obaidulsaiki?status=2"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#26448f] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#26448f] shrink-0" />
                                      <span>Completed</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.completed}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/mangalist/obaidulsaiki?status=3"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#f9d457] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#f9d457] shrink-0" />
                                      <span>On-Hold</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.onHold}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/mangalist/obaidulsaiki?status=4"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#a12f31] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#a12f31] shrink-0" />
                                      <span>Dropped</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.dropped}</span>
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <a
                                      href="https://myanimelist.net/mangalist/obaidulsaiki?status=6"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1.5 text-ink-secondary hover:text-[#787878] transition-colors"
                                    >
                                      <span className="w-2 h-2 rounded-full bg-[#787878] shrink-0" />
                                      <span>Plan to Read</span>
                                    </a>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.planToRead.toLocaleString()}</span>
                                  </div>
                                </div>

                                <div className="space-y-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-ink-subtle">Total Entries</span>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.totalEntries.toLocaleString()}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-ink-subtle">Reread</span>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.reread}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-ink-subtle">Chapters</span>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.chapters.toLocaleString()}</span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-ink-subtle">Volumes</span>
                                    <span className="font-extrabold text-ink-primary">{mangaMalStats.volumes.toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="pt-2.5 border-t border-surface-border/60 flex items-center justify-between text-[10px] font-mono text-ink-subtle">
                          <span className="text-ink-muted">
                            {item.id === 'anime' || item.id === 'manga' ? 'MyAnimeList Tracker' : `${item.name} Spotlight`}
                          </span>
                          <span className="text-[#7C0E44] dark:text-[#F2DACE] font-bold">Category #{idx + 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Full-Width Grid (Option B for Hollywood Movies and Non-English Movies) */
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-primary flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7C0E44]"></span>
                        <span>Top 10 {item.name} (Ranked)</span>
                      </span>
                      <span className="text-[10px] font-mono text-ink-muted">10 All-Time Masterpieces</span>
                    </div>

                    {/* 5-Column Grid across full container width (2 rows of 5) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
                      {item.topTen.map((poster: MediaTopItem) => (
                        <PosterCard
                          key={poster.rank}
                          poster={poster}
                          itemType={item.type}
                          isPriority={isFirstCategory}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Navigation Footer Card */}
      <div className="pt-4 border-t border-surface-border/80 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-surface/40 border border-surface-border shadow-soft-sm">
        <div className="space-y-0.5 text-center sm:text-left">
          <span className="text-[10px] font-semibold text-[#7C0E44] dark:text-[#F2DACE] uppercase tracking-wider">
            Ready to Connect?
          </span>
          <h4 className="text-sm font-bold text-ink-primary">
            Contact &amp; Social Hub
          </h4>
        </div>
        <Link
          href="/contact/"
          prefetch={true}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#7C0E44] hover:bg-[#AA5E7A] text-white font-medium text-xs transition-all shadow-soft-sm hover:scale-105 active:scale-95 shrink-0"
        >
          <span>Get In Touch</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
