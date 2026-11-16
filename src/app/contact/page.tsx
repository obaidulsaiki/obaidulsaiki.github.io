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
  FlaskConical,
  Briefcase,
  GraduationCap,
  ExternalLink,
  Building2,
  User,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { profileData } from '@/data/profile';
import { motion, AnimatePresence } from 'framer-motion';

type InquiryMode = 'research' | 'hiring';
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ReasonOption {
  id: string;
  label: string;
}

const RESEARCH_REASONS: ReasonOption[] = [
  { id: 'co-authorship', label: 'Paper Co-authorship' },
  { id: 'dataset-access', label: 'Dataset / Model Evaluation' },
  { id: 'joint-grant', label: 'Joint Research Proposal' },
  { id: 'peer-review', label: 'Peer Review & Discussion' },
  { id: 'general-research', label: 'General Research Chat' },
];

const HIRING_REASONS: ReasonOption[] = [
  { id: 'full-time', label: 'Full-Time AI Engineer Role' },
  { id: 'contract-project', label: 'Contract / Project Collaboration' },
  { id: 'tech-interview', label: 'Technical Interview Invitation' },
  { id: 'founding-engineer', label: 'Founding / Core AI Team Role' },
  { id: 'recruiter-inquiry', label: 'Recruiter / Talent Sourcing' },
];

export default function ContactPage() {
  const [mode, setMode] = useState<InquiryMode>('research');

  // Form states
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [selectedReason, setSelectedReason] = useState<string>(RESEARCH_REASONS[0].label);
  const [customReason, setCustomReason] = useState('');
  const [messageBody, setMessageBody] = useState('');

  // Submission states
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Copy feedback states
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedNote, setCopiedNote] = useState(false);

  const email = profileData.socials.email;
  const phone = profileData.socials.phone || '01883440377';
  const phoneFormatted = profileData.socials.phoneFormatted || '+880 1883-440377';
  const whatsAppLink = `https://wa.me/8801883440377?text=${encodeURIComponent(
    'Hi Obaidul, I came across your portfolio and would like to connect.'
  )}`;

  const handleModeSwitch = (newMode: InquiryMode) => {
    setMode(newMode);
    setSelectedReason(
      newMode === 'research' ? RESEARCH_REASONS[0].label : HIRING_REASONS[0].label
    );
    setCustomReason('');
    setErrorMessage('');
  };

  const activeReason = customReason.trim() ? customReason.trim() : selectedReason;
  const activeCategory = mode === 'research' ? 'Research Collaboration' : 'AI Engineering Hire';

  const fullMailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    `[${activeCategory}] ${activeReason} — ${senderName || 'Inquirer'}${
      senderOrg ? ` (${senderOrg})` : ''
    }`
  )}&body=${encodeURIComponent(
    `Hi Obaidul,\n\n${
      messageBody ||
      (mode === 'research'
        ? 'I would like to discuss a research collaboration opportunity with you.'
        : 'We are reaching out regarding an AI Engineering opportunity that matches your background.')
    }\n\n---\nSender: ${senderName || 'Name'}\nAffiliation / Company: ${
      senderOrg || 'Not specified'
    }\nContact Info: ${senderContact || 'Not specified'}\nTopic: ${activeReason}`
  )}`;

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

  const copyStructuredNote = () => {
    const formatted = `To: ${email}
Subject: [${activeCategory}] ${activeReason} — ${senderName || 'Inquirer'}${
      senderOrg ? ` (${senderOrg})` : ''
    }

Hi Obaidul,

${
  messageBody ||
  (mode === 'research'
    ? 'I would like to discuss a research collaboration opportunity with you.'
    : 'We are reaching out regarding an AI Engineering opportunity that matches your background.')
}

---
Sender: ${senderName || 'Name'}
Affiliation / Company: ${senderOrg || 'Not specified'}
Contact Info: ${senderContact || 'Not specified'}
Inquiry Type: ${activeReason}`;

    navigator.clipboard.writeText(formatted);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!senderName.trim()) {
      setErrorMessage('Please enter your name or title.');
      return;
    }
    if (!senderContact.trim()) {
      setErrorMessage('Please enter your email or contact info so I can reply to you.');
      return;
    }
    if (!messageBody.trim()) {
      setErrorMessage('Please write a brief message or describe your inquiry.');
      return;
    }

    setStatus('submitting');

    try {
      const payload = {
        name: senderName.trim(),
        email: senderContact.trim(),
        _subject: `[${activeCategory}] ${activeReason} — ${senderName.trim()}${
          senderOrg.trim() ? ` (${senderOrg.trim()})` : ''
        }`,
        organization: senderOrg.trim() || 'Not specified',
        inquiry_track: activeCategory,
        inquiry_reason: activeReason,
        message: messageBody.trim(),
        _template: 'table',
        _captcha: 'false',
      };

      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        // Reset form fields
        setSenderName('');
        setSenderOrg('');
        setSenderContact('');
        setMessageBody('');
        setCustomReason('');
      } else {
        setStatus('error');
        setErrorMessage(
          data.message || 'Could not send directly at this moment. You can copy the note or use the direct mail link below.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Network error while sending message directly. Please copy the note or use the direct mail link below.'
      );
    }
  };

  const currentReasons = mode === 'research' ? RESEARCH_REASONS : HIRING_REASONS;

  return (
    <div className="space-y-8 py-2 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="space-y-2 border-b border-surface-border/70 pb-5 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Dispatch</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-primary tracking-tight">
          Contact Hub & Collaborations
        </h1>
        <p className="text-xs sm:text-sm text-ink-muted max-w-2xl leading-relaxed">
          Send a direct message to propose research collaborations, discuss paper co-authorship on Medical Imaging/EEG, or hire for AI Engineering roles.
        </p>
      </div>

      {/* Main Dual-Section Interactive Card */}
      <div className="rounded-3xl bg-surface/60 backdrop-blur-md border border-surface-border/80 shadow-soft-md p-5 sm:p-7 space-y-6">
        {/* Segmented Mode Switcher */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-ink-muted flex items-center justify-between">
            <span>Select Purpose of Contact</span>
            <span className="text-[11px] font-mono text-accent-primary">
              {mode === 'research' ? '🔬 Academic Track' : '💼 Industry Track'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-2xl bg-canvas/80 border border-surface-border">
            <button
              type="button"
              onClick={() => handleModeSwitch('research')}
              className={`relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                mode === 'research'
                  ? 'bg-accent-primary text-canvas shadow-soft-sm'
                  : 'text-ink-muted hover:text-ink-primary hover:bg-surface/60'
              }`}
            >
              <FlaskConical className="w-4 h-4 shrink-0" />
              <span>Want to Collaborate in Research?</span>
            </button>

            <button
              type="button"
              onClick={() => handleModeSwitch('hiring')}
              className={`relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                mode === 'hiring'
                  ? 'bg-accent-primary text-canvas shadow-soft-sm'
                  : 'text-ink-muted hover:text-ink-primary hover:bg-surface/60'
              }`}
            >
              <Briefcase className="w-4 h-4 shrink-0" />
              <span>Looking to Hire in AI Engineering?</span>
            </button>
          </div>
        </div>

        {/* Dynamic Context Header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="p-3.5 sm:p-4 rounded-2xl bg-canvas border border-surface-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-ink-muted"
          >
            <div className="space-y-0.5">
              <span className="font-bold text-ink-primary flex items-center gap-1.5">
                {mode === 'research' ? (
                  <>
                    <GraduationCap className="w-4 h-4 text-accent-primary" />
                    <span>Research Collaboration & Co-Authorship</span>
                  </>
                ) : (
                  <>
                    <Briefcase className="w-4 h-4 text-accent-primary" />
                    <span>AI Engineer & Machine Learning Recruitment</span>
                  </>
                )}
              </span>
              <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                {mode === 'research'
                  ? 'Open to joint papers in Brain Tumor MRI, Skin Lesion Vision-KAN, and EEG Signal Processing.'
                  : 'Available for full-time, founding, or contract roles in Computer Vision, Deep Learning, and Full-Stack AI.'}
              </p>
            </div>

            <div className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg shrink-0 self-start sm:self-auto border border-emerald-200/50 dark:border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct In-Browser Dispatch</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* In-Card Success Banner */}
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-ink-primary">
                Message Sent Directly to Obaidul! ✨
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                Your inquiry has been delivered directly to my inbox ({email}). I will review it and get back to you shortly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-surface hover:bg-surface-hover border border-surface-border text-xs font-semibold text-ink-primary transition-all cursor-pointer shadow-soft-sm"
            >
              <span>Send Another Message</span>
            </button>
          </motion.div>
        ) : (
          /* Direct Message Form */
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Reason for Contacting (Interactive Chips) */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-ink-primary flex items-center justify-between">
                <span>Reason for Contacting</span>
                <span className="text-[11px] font-normal text-ink-subtle">Click a tag to select</span>
              </label>

              <div className="flex flex-wrap gap-2">
                {currentReasons.map((r) => {
                  const isSelected = selectedReason === r.label && !customReason.trim();
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => {
                        setSelectedReason(r.label);
                        setCustomReason('');
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-accent-soft/40 border-accent-primary text-accent-primary font-bold shadow-soft-sm'
                          : 'bg-canvas hover:bg-surface border-surface-border text-ink-muted hover:text-ink-primary'
                      }`}
                    >
                      {r.label}
                    </button>
                  );
                })}
              </div>

              {/* Optional Custom Reason */}
              <input
                type="text"
                placeholder="Or type custom reason (e.g. Workshop keynote, Dataset query...)"
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                className="w-full px-3 py-1.5 rounded-xl bg-canvas border border-surface-border text-xs text-ink-primary placeholder:text-ink-subtle focus:outline-none focus:border-accent-primary transition-all"
              />
            </div>

            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Sender Name */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink-primary flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Your Name / Title <span className="text-rose-500">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  placeholder={mode === 'research' ? 'e.g. Dr. Alex Vance / Postdoc' : 'e.g. Sarah Miller / Tech Lead'}
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-canvas border border-surface-border text-xs sm:text-sm text-ink-primary placeholder:text-ink-subtle focus:outline-none focus:border-accent-primary transition-all"
                />
              </div>

              {/* Organization / University */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-ink-primary flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-accent-primary" />
                  <span>{mode === 'research' ? 'University / Research Lab' : 'Company / Organization'}</span>
                </label>
                <input
                  type="text"
                  placeholder={mode === 'research' ? 'e.g. Stanford Medical AI Lab' : 'e.g. HealthTech AI / Recruiter'}
                  value={senderOrg}
                  onChange={(e) => setSenderOrg(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-canvas border border-surface-border text-xs sm:text-sm text-ink-primary placeholder:text-ink-subtle focus:outline-none focus:border-accent-primary transition-all"
                />
              </div>

              {/* Contact Info */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-ink-primary flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Your Email or Preferred Contact Info <span className="text-rose-500">*</span></span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. yourname@domain.com or LinkedIn URL"
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-canvas border border-surface-border text-xs sm:text-sm text-ink-primary placeholder:text-ink-subtle focus:outline-none focus:border-accent-primary transition-all"
                />
              </div>

              {/* Message Body */}
              <div className="sm:col-span-2 space-y-1">
                <label className="text-xs font-semibold text-ink-primary flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-accent-primary" />
                  <span>Message & Collaboration Details <span className="text-rose-500">*</span></span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={
                    mode === 'research'
                      ? 'Briefly describe your dataset, research question, target conference/journal, or paper idea...'
                      : 'Tell me about the role, technical scope (Computer Vision / Full-Stack / LLM), location, and timeline...'
                  }
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-canvas border border-surface-border text-xs sm:text-sm text-ink-primary placeholder:text-ink-subtle focus:outline-none focus:border-accent-primary transition-all resize-none leading-relaxed"
                />
              </div>
            </div>

            {/* Error Message Alert */}
            {errorMessage && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Action Buttons Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-surface-border/60">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-primary hover:bg-accent-primaryDark text-canvas font-bold text-xs sm:text-sm transition-all shadow-soft-sm hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Directly...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={copyStructuredNote}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-semibold text-ink-primary hover:text-accent-primary transition-all shadow-soft-sm cursor-pointer"
                >
                  {copiedNote ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Note Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Copy Note</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 text-[11px] text-ink-subtle">
                <a
                  href={fullMailtoLink}
                  className="hover:text-accent-primary hover:underline transition-colors"
                >
                  Open in mail app instead →
                </a>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Compact Direct Connect Row (Phone, WhatsApp, Email, GitHub, LinkedIn, Scholar) */}
      <div className="rounded-3xl bg-surface/40 border border-surface-border/80 p-4 sm:p-5 space-y-3">
        <div className="text-xs font-bold text-ink-muted uppercase tracking-wider flex items-center justify-between">
          <span>Alternative Direct Channels</span>
          <span className="text-[11px] font-normal text-ink-subtle">Dhaka, Bangladesh (UTC+6)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {/* Email Quick Copy */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-canvas border border-surface-border text-xs">
            <div className="flex items-center gap-2 truncate">
              <Mail className="w-3.5 h-3.5 text-accent-primary shrink-0" />
              <span className="truncate font-mono text-[11px] text-ink-primary">{email}</span>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="ml-1.5 px-2 py-0.5 rounded-lg bg-surface hover:bg-surface-hover text-accent-primary font-medium text-[11px] transition-colors shrink-0 cursor-pointer"
            >
              {copiedEmail ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Phone & WhatsApp Quick Dial */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-canvas border border-surface-border text-xs">
            <div className="flex items-center gap-2 truncate">
              <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-mono text-[11px] text-ink-primary truncate">{phoneFormatted}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={copyPhone}
                className="px-2 py-0.5 rounded-lg bg-surface hover:bg-surface-hover text-ink-muted hover:text-ink-primary font-medium text-[11px] transition-colors cursor-pointer"
              >
                {copiedPhone ? 'Copied' : 'Copy'}
              </button>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-medium text-[11px] hover:scale-105 transition-all"
              >
                Chat
              </a>
            </div>
          </div>

          {/* LinkedIn Profile */}
          <a
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-2xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-medium text-ink-primary hover:text-accent-primary transition-all group"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-ink-muted group-hover:text-accent-primary transition-colors" />
              <span>LinkedIn</span>
            </div>
            <ExternalLink className="w-3 h-3 text-ink-subtle group-hover:text-accent-primary" />
          </a>

          {/* GitHub Profile */}
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-2xl bg-canvas border border-surface-border hover:border-accent-primary text-xs font-medium text-ink-primary hover:text-accent-primary transition-all group"
          >
            <div className="flex items-center gap-2">
              <Github className="w-3.5 h-3.5 text-ink-muted group-hover:text-accent-primary transition-colors" />
              <span>GitHub</span>
            </div>
            <ExternalLink className="w-3 h-3 text-ink-subtle group-hover:text-accent-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}
