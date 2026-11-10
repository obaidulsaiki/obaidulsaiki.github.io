import React from 'react';
import { Microscope, FileText, ExternalLink, Copy } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="space-y-10 py-4 max-w-4xl mx-auto">
      <div className="space-y-2 border-b border-surface-border/70 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Microscope className="w-3.5 h-3.5" />
          <span>Publications & Science</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight">
          Research & Publications
        </h1>
        <p className="text-sm sm:text-base text-ink-muted">
          Peer-reviewed papers, scientific investigations, biomedical signal algorithms, and preprints.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-soft/40 text-accent-primary text-xs font-semibold">
                Journal Paper / Preprint
              </span>
              <h2 className="text-xl font-bold text-ink-primary hover:text-accent-primary transition-colors">
                Automated Seizure Detection & EEG Biomarker Analysis via Deep Convolutional Attention Networks
              </h2>
              <p className="text-xs text-ink-muted">
                <span className="font-medium text-ink-primary">Obaidul Saiki</span>, Research Collaborators
              </p>
            </div>
          </div>

          <p className="text-sm text-ink-muted leading-relaxed">
            Investigating robust temporal feature extraction and channel-attention mechanisms on multi-channel scalp EEG signals for automated pediatric and adult epileptic seizure prediction, minimizing false alarm rates across diverse patient cohorts.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://github.com/obaidulsaiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent-primary text-canvas text-xs font-medium hover:bg-accent-primaryDark transition-colors shadow-soft-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Read Abstract</span>
            </a>
            <a
              href="https://github.com/obaidulsaiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-surface border border-surface-border text-ink-primary text-xs font-medium hover:bg-surface-hover transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Code & Dataset</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

