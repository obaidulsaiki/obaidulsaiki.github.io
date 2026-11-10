import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-surface border border-surface-border text-accent-primary flex items-center justify-center font-mono font-bold text-2xl shadow-soft-sm">
        404
      </div>
      <div className="space-y-2 max-w-md">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed">
          The requested page could not be located. It might have moved or is still being crafted in this step-by-step rollout.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-105 active:scale-95"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}

