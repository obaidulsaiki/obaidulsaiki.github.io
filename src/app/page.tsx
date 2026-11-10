import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Briefcase, Microscope, Users, Compass, Mail } from 'lucide-react';
import Hero from '@/components/home/Hero';
import AboutMe from '@/components/home/AboutMe';
import SkillsShowcase from '@/components/home/SkillsShowcase';

export default function HomePage() {
  const otherPages = [
    {
      title: 'Education',
      desc: 'Academic degrees, university credentials, coursework, and honors.',
      href: '/education/',
      icon: GraduationCap,
    },
    {
      title: 'Work Experience',
      desc: 'Professional career timeline, engineering roles, and quantifiable contributions.',
      href: '/experience/',
      icon: Briefcase,
    },
    {
      title: 'Research & Publications',
      desc: 'Scientific papers, EEG seizure detection models, and datasets.',
      href: '/research/',
      icon: Microscope,
    },
    {
      title: 'Extracurricular Activities',
      desc: 'Club leadership, mentorship workshops, hackathons, and community work.',
      href: '/extracurricular/',
      icon: Users,
    },
    {
      title: 'Hobbies & Interests',
      desc: 'Personal passions, photography, acoustic soundscapes, and creativity.',
      href: '/hobby/',
      icon: Compass,
    },
    {
      title: 'Contact Hub',
      desc: 'Direct email dispatch, one-click copy, and social network connections.',
      href: '/contact/',
      icon: Mail,
    },
  ];

  return (
    <div className="space-y-20 py-4">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Section: About Me (Career Summary) */}
      <AboutMe />

      {/* 3. Section: Skills Collected Throughout the Years */}
      <SkillsShowcase />

      {/* 4. Interactive Jump Links to Other Sections */}
      <section className="space-y-6 pt-4 border-t border-surface-border/80">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-ink-primary tracking-tight">
              Explore More Sections
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted">
              Deep dive into specific milestones, publications, and background details.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group p-5 rounded-2xl bg-surface/40 border border-surface-border hover:border-accent-primary hover:bg-surface/80 transition-all duration-300 shadow-soft-sm hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-canvas border border-surface-border text-accent-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-soft/30 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-primary text-sm group-hover:text-accent-primary transition-colors flex items-center gap-1.5">
                      <span>{page.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-primary" />
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed mt-1">
                      {page.desc}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
