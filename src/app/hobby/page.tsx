import React from 'react';
import { Camera, Music, Compass, Gamepad2 } from 'lucide-react';

export default function HobbyPage() {
  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">
      <div className="space-y-2 border-b border-surface-border/70 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Compass className="w-3.5 h-3.5" />
          <span>Life Beyond Code</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          Hobbies & Personal Interests
        </h1>
        <p className="text-sm sm:text-base text-ink-muted">
          Things that keep me inspired, energized, and curious outside of software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
            <Camera className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-ink-primary">
            Photography & Visual Design
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Capturing street aesthetics, architecture, and minimal natural geometry. Appreciating balance and contrast in real-world visual arts.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
            <Music className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-ink-primary">
            Audio & Acoustic Exploration
          </h2>
          <p className="text-sm text-ink-muted leading-relaxed">
            Deep appreciation for ambient soundscapes, lo-fi beats during programming marathons, and musical synthesis.
          </p>
        </div>
      </div>
    </div>
  );
}
