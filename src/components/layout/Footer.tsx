import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education/' },
  { name: 'Experience', href: '/experience/' },
  { name: 'Research', href: '/research/' },
  { name: 'Extracurricular', href: '/extracurricular/' },
  { name: 'Hobby', href: '/hobby/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-border/70 bg-surface/30 mt-20 transition-colors">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-surface-border text-accent-primary font-bold shadow-soft-sm">
                OS
              </span>
              <span className="font-semibold text-ink-primary tracking-tight text-lg">
                Obaidul Saiki
              </span>
            </div>
            <p className="text-sm text-ink-muted max-w-sm leading-relaxed">
              Software engineer & researcher building thoughtful web applications, machine learning architectures, and scalable systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/obaidulsaiki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-soft transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/obaidulsaiki"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-soft transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@obaidulhaque.me"
                aria-label="Email"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface border border-surface-border text-ink-muted hover:text-accent-primary hover:border-accent-soft transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-primary mb-3">
              Explore
            </h3>
            <ul className="space-y-2">
              {footerNav.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-ink-muted hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-primary mb-3">
              Sections
            </h3>
            <ul className="space-y-2">
              {footerNav.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-xs text-ink-muted hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact/"
                  className="text-xs text-accent-primary font-medium hover:underline"
                >
                  Direct Inquiry →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Obaidul Saiki. Crafted with{' '}
            <Heart className="w-3.5 h-3.5 text-accent-primary fill-accent-primary inline" /> in Next.js & Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-surface-border text-[11px] font-mono text-ink-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              obaidulhaque.me
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
