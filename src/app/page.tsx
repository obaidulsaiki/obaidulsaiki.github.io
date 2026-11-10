import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight, BookOpen, Briefcase, GraduationCap, Microscope } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 py-6">
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-surface/60 border border-surface-border p-8 sm:p-12 shadow-soft-sm">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft/30 border border-accent-soft/50 text-xs font-semibold text-accent-primary">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to My Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-primary leading-tight">
              Hi, I&apos;m <span className="text-accent-primary underline decoration-accent-soft decoration-wavy decoration-2">Obaidul Saiki</span>.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              Software engineer & machine learning researcher exploring reliable intelligent systems, modern frontend architectures, and high-impact computing.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-primary text-canvas font-medium text-sm shadow-soft-sm hover:bg-accent-primaryDark transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-surface-border text-ink-primary font-medium text-sm hover:border-accent-primary transition-all duration-200 hover:bg-surface-hover"
              >
                <Microscope className="w-4 h-4 text-accent-primary" />
                <span>View Research</span>
              </Link>
            </div>
          </div>

          {/* Profile Photo Container */}
          <div className="relative shrink-0">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-surface shadow-soft-md bg-surface-hover">
              <Image
                src="/images/MyPicture.png"
                alt="Obaidul Saiki"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-2xl bg-canvas border border-surface-border px-3 py-1.5 text-xs font-medium text-ink-primary shadow-soft-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Open to Collaborate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-ink-primary">
            Explore Portfolio Sections
          </h2>
          <p className="text-sm text-ink-muted">
            Navigate through academic credentials, career history, research, and extracurricular initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href="/education/"
            className="group p-6 rounded-2xl bg-surface/40 border border-surface-border/80 hover:border-accent-primary hover:bg-surface/70 transition-all duration-200 shadow-soft-sm hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary mb-4 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-ink-primary text-base mb-1 group-hover:text-accent-primary transition-colors">
              Education
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Academic degrees, institutions, key coursework, and honors.
            </p>
          </Link>

          <Link
            href="/experience/"
            className="group p-6 rounded-2xl bg-surface/40 border border-surface-border/80 hover:border-accent-primary hover:bg-surface/70 transition-all duration-200 shadow-soft-sm hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-ink-primary text-base mb-1 group-hover:text-accent-primary transition-colors">
              Work Experience
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Professional engineering roles, deliverables, and quantifiable impacts.
            </p>
          </Link>

          <Link
            href="/research/"
            className="group p-6 rounded-2xl bg-surface/40 border border-surface-border/80 hover:border-accent-primary hover:bg-surface/70 transition-all duration-200 shadow-soft-sm hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary mb-4 group-hover:scale-110 transition-transform">
              <Microscope className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-ink-primary text-base mb-1 group-hover:text-accent-primary transition-colors">
              Research & Papers
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Scientific papers, machine learning preprints, and open source research code.
            </p>
          </Link>

          <Link
            href="/extracurricular/"
            className="group p-6 rounded-2xl bg-surface/40 border border-surface-border/80 hover:border-accent-primary hover:bg-surface/70 transition-all duration-200 shadow-soft-sm hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-ink-primary text-base mb-1 group-hover:text-accent-primary transition-colors">
              Extracurricular
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Leadership initiatives, club activities, mentorship, and hackathons.
            </p>
          </Link>

          <Link
            href="/hobby/"
            className="group p-6 rounded-2xl bg-surface/40 border border-surface-border/80 hover:border-accent-primary hover:bg-surface/70 transition-all duration-200 shadow-soft-sm hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-soft/30 border border-accent-soft/50 flex items-center justify-center text-accent-primary mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-ink-primary text-base mb-1 group-hover:text-accent-primary transition-colors">
              Hobbies & Interests
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Creative pursuits, personal interests, photography, and passions.
            </p>
          </Link>

          <Link
            href="/contact/"
            className="group p-6 rounded-2xl bg-accent-soft/20 border border-accent-soft/50 hover:border-accent-primary hover:bg-accent-soft/30 transition-all duration-200 shadow-soft-sm hover:-translate-y-1"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-primary text-canvas flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-accent-primary text-base mb-1 transition-colors">
              Get in Touch
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Direct email inquiry, socials, and collaboration proposals.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
