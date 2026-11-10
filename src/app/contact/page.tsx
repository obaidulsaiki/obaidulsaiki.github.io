'use client';

import React, { useState } from 'react';
import { Mail, Check, Copy, Github, Linkedin, Send, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'contact@obaidulhaque.me';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">
      <div className="space-y-2 border-b border-surface-border/70 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let&apos;s Connect</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          Contact & Collaboration
        </h1>
        <p className="text-sm sm:text-base text-ink-muted">
          Whether you want to discuss a research idea, engineering collaboration, or just say hello — my inbox is open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Direct Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface/60 border border-surface-border shadow-soft-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-ink-primary">
              Direct Email
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Fastest channel to reach me directly for opportunities, consultations, or paper reviews.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-canvas border border-surface-border text-xs sm:text-sm font-mono text-ink-primary">
              <span className="truncate">{email}</span>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface hover:bg-surface-hover text-accent-primary font-sans text-xs font-medium transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${email}`}
              className="inline-flex w-full items-center justify-center gap-2 py-2.5 rounded-xl bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Open Mail Client</span>
            </a>
          </div>
        </div>

        {/* Social Cards */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface/60 border border-surface-border shadow-soft-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-ink-primary">
              Professional Profiles
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Check out my open-source repositories, developer updates, and professional network.
            </p>
          </div>

          <div className="space-y-2.5 pt-4">
            <a
              href="https://github.com/obaidulsaiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-canvas border border-surface-border hover:border-accent-primary text-sm font-medium text-ink-primary hover:text-accent-primary transition-all group shadow-soft-sm"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-ink-muted group-hover:text-accent-primary transition-colors" />
                <span>GitHub</span>
              </div>
              <span className="text-xs text-ink-subtle font-mono group-hover:text-accent-primary">@obaidulsaiki →</span>
            </a>

            <a
              href="https://linkedin.com/in/obaidulsaiki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-2xl bg-canvas border border-surface-border hover:border-accent-primary text-sm font-medium text-ink-primary hover:text-accent-primary transition-all group shadow-soft-sm"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-ink-muted group-hover:text-accent-primary transition-colors" />
                <span>LinkedIn</span>
              </div>
              <span className="text-xs text-ink-subtle font-mono group-hover:text-accent-primary">Connect →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
