'use client';

import React, { useState } from 'react';
import {
  Mail,
  Check,
  Copy,
  Github,
  Linkedin,
  Send,
  Sparkles,
  Phone,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { profileData } from '@/data/profile';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedFullMessage, setCopiedFullMessage] = useState(false);

  // Form states
  const [senderName, setSenderName] = useState('');
  const [subjectTopic, setSubjectTopic] = useState('Research Collaboration');
  const [messageBody, setMessageBody] = useState('');

  const email = profileData.socials.email;
  const phone = profileData.socials.phone || '01883440377';
  const phoneFormatted = profileData.socials.phoneFormatted || '+880 1883-440377';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const fullMailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    `[${subjectTopic}] Inquirer: ${senderName || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Hi Obaidul,\n\n${messageBody || 'I came across your portfolio and wanted to get in touch.'}\n\nBest regards,\n${
      senderName || 'Name'
    }`
  )}`;

  const copyStructuredNote = () => {
    const formatted = `To: ${email}\nSubject: [${subjectTopic}] Inquirer: ${
      senderName || 'Visitor'
    }\n\nHi Obaidul,\n\n${
      messageBody || 'I came across your portfolio and wanted to connect.'
    }\n\nBest regards,\n${senderName || 'Name'}`;
    navigator.clipboard.writeText(formatted);
    setCopiedFullMessage(true);
    setTimeout(() => setCopiedFullMessage(false), 2200);
  };

  return (
    <div className="space-y-12 py-4 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="space-y-3 border-b border-surface-border/70 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let&apos;s Connect</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-primary tracking-tight">
          Contact Hub & Inquiries
        </h1>
        <p className="text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
          Whether you want to discuss AI research (CV, Medical Imaging, Signal Processing), engineering collaborations, or junior engineering opportunities — my inbox is open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Direct Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-ink-primary">
              Direct Email
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Fastest channel to reach me for paper discussions, academic questions, or job opportunities.
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
                {copiedEmail ? (
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

        {/* Phone & Direct Calling Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-ink-primary">
              Phone & WhatsApp
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Available for voice calls, SMS, and WhatsApp messages regarding urgent opportunities.
            </p>
          </div>

          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-canvas border border-surface-border text-xs sm:text-sm font-mono text-ink-primary">
              <span className="truncate">{phoneFormatted} ({phone})</span>
              <button
                type="button"
                onClick={copyPhone}
                className="ml-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface hover:bg-surface-hover text-accent-primary font-sans text-xs font-medium transition-colors shrink-0"
              >
                {copiedPhone ? (
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
              href={`tel:${phone}`}
              className="inline-flex w-full items-center justify-center gap-2 py-2.5 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-ink-primary font-medium text-sm transition-all duration-200 shadow-soft-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-accent-primary" />
              <span>Call Direct</span>
            </a>
          </div>
        </div>

        {/* Interactive Quick Note Dispatcher */}
        <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-5">
          <div className="space-y-1 border-b border-surface-border/60 pb-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-primary">
              <MessageSquare className="w-4 h-4" />
              <span>Quick Note Composer</span>
            </div>
            <h3 className="text-xl font-bold text-ink-primary tracking-tight">
              Prepare a Pre-Filled Note
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted">
              Select a topic, enter a message, and launch it directly in your email client or copy to clipboard.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-ink-primary">Your Name / Title</label>
              <input
                type="text"
                placeholder="e.g. Dr. Alex Smith / Recruiter"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-surface-border text-xs sm:text-sm text-ink-primary focus:outline-none focus:border-accent-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-ink-primary">Inquiry Topic</label>
              <select
                value={subjectTopic}
                onChange={(e) => setSubjectTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-surface-border text-xs sm:text-sm text-ink-primary focus:outline-none focus:border-accent-primary transition-all"
              >
                <option value="Research Collaboration">Research Collaboration (Paper / Dataset)</option>
                <option value="Engineering Opportunity">Junior AI / Full-Stack Role Inquiry</option>
                <option value="Paper Review">Academic Paper / Presentation Discussion</option>
                <option value="General Hello">General Networking / Coffee Chat</option>
              </select>
            </div>

            <div className="sm:col-span-2 space-y-1.5">
              <label className="text-xs font-semibold text-ink-primary">Message Preview</label>
              <textarea
                rows={3}
                placeholder="Write a brief note or questions you'd like to ask..."
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-surface-border text-xs sm:text-sm text-ink-primary focus:outline-none focus:border-accent-primary transition-all resize-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <a
              href={fullMailtoLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-primary hover:bg-accent-primaryDark text-canvas font-medium text-xs sm:text-sm transition-all shadow-soft-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-4 h-4" />
              <span>Launch Pre-Filled Email</span>
            </a>

            <button
              type="button"
              onClick={copyStructuredNote}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-medium text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm"
            >
              {copiedFullMessage ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Message Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Copy Note Format</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Professional Profiles Card */}
        <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-surface/50 border border-surface-border shadow-soft-sm space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-ink-primary">
              Online Profiles & Repositories
            </h3>
            <p className="text-xs sm:text-sm text-ink-muted">
              Connect with me on LinkedIn or browse my open-source code repositories on GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-canvas border border-surface-border hover:border-accent-primary text-sm font-medium text-ink-primary hover:text-accent-primary transition-all group shadow-soft-sm"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-ink-muted group-hover:text-accent-primary transition-colors" />
                <span>GitHub</span>
              </div>
              <span className="text-xs text-ink-subtle font-mono group-hover:text-accent-primary">@obaidulsaiki →</span>
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-canvas border border-surface-border hover:border-accent-primary text-sm font-medium text-ink-primary hover:text-accent-primary transition-all group shadow-soft-sm"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-ink-muted group-hover:text-accent-primary transition-colors" />
                <span>LinkedIn</span>
              </div>
              <span className="text-xs text-ink-subtle font-mono group-hover:text-accent-primary">obaidul-haque47 →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
