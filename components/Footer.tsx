'use client';

import { socials, profile } from '@/lib/data';
import { SocialIcon, platformBrandHoverColors } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700 bg-ink-950">
      <div className="container-grid py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 32 32" className="h-8 w-8">
                <polygon
                  points="16,4 28,12 28,20 16,28 4,20 4,12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-bone-100"
                />
                <circle cx="16" cy="16" r="2" className="fill-signal" />
              </svg>
              <div>
                <div className="font-display text-lg font-semibold tracking-ultratight text-bone-50">
                  {profile.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
                  red team · security research · engineering
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-bone-400 text-pretty">
              Building offensive tools, hardening systems, and engineering
              products. Always learning, always breaking things — responsibly.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="micro-label mb-4">Navigation</div>
            <ul className="space-y-2 font-mono text-sm text-bone-300">
              <li>
                <a href="#home" className="hover:text-signal">
                  → Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-signal">
                  → About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-signal">
                  → Projects
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-signal">
                  → Security
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-signal">
                  → Engineering
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-signal">
                  → Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="micro-label mb-4">Channels</div>
            <ul className="space-y-2.5 font-mono text-xs">
              {socials.slice(0, 5).map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2.5 text-bone-300 transition-colors ${
                      platformBrandHoverColors[s.label] ?? 'hover:text-signal'
                    }`}
                  >
                    <SocialIcon name={s.label} className="h-3.5 w-3.5 flex-none" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <div className="micro-label mb-4">Status</div>
            <div className="border border-ink-700 bg-ink-900 p-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-bone-100">available</span>
              </div>
              <div className="mt-3 text-bone-400">last deploy</div>
              <div className="text-bone-200">2025 · v2.0</div>
              <div className="mt-3 text-bone-400">uptime</div>
              <div className="text-bone-200">99.99%</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-ink-700 pt-6 md:flex-row md:items-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-400">
            © 2025 {profile.name} · All rights reserved
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`group flex h-9 w-9 items-center justify-center border border-ink-700 bg-ink-900 text-bone-400 transition-all hover:border-bone-500 hover:bg-ink-800 ${
                  platformBrandHoverColors[s.label] ?? 'hover:text-signal'
                }`}
              >
                <SocialIcon name={s.label} className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-500">
            built with care · 127.0.0.1
          </div>
        </div>
      </div>
    </footer>
  );
}