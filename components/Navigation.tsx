'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home', code: '01' },
  { id: 'about', label: 'About', code: '02' },
  { id: 'projects', label: 'Projects', code: '03' },
  { id: 'security', label: 'Security', code: '04' },
  { id: 'engineering', label: 'Engineering', code: '05' },
  { id: 'contact', label: 'Contact', code: '06' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offset = window.innerHeight * 0.3;
      let current = 'home';
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) current = s.id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="container-grid">
          <div
            className={`relative flex items-center justify-between border transition-all duration-500 ${
              scrolled
                ? 'border-ink-700 bg-ink-950/60 backdrop-blur-2xl px-6 py-3'
                : 'border-transparent bg-transparent px-2 py-2'
            }`}
          >
            <a href="#home" className="group flex items-center gap-3">
              <div className="relative">
                <svg viewBox="0 0 32 32" className="h-7 w-7">
                  <polygon
                    points="16,4 28,12 28,20 16,28 4,20 4,12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-bone-100"
                  />
                  <circle cx="16" cy="16" r="2" className="fill-signal" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-sm font-semibold tracking-ultratight text-bone-50">
                  B0dj0x
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-bone-400">
                  red.team
                </span>
              </div>
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`group relative flex items-center gap-2 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                      active === s.id ? 'text-bone-50' : 'text-bone-400 hover:text-bone-100'
                    }`}
                  >
                    <span className="text-[9px] opacity-50">{s.code}</span>
                    <span>{s.label}</span>
                    {active === s.id && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute -bottom-0.5 left-1/2 h-px w-6 -translate-x-1/2 bg-signal"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/b0dj0x"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-bone-300 hover:text-bone-50 lg:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              Available
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center border border-ink-700 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-2xl" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="container-grid relative pt-32"
            >
              <div className="space-y-1">
                {sections.map((s, i) => (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="group flex items-baseline justify-between border-b border-ink-700 py-6"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-bone-400">
                      {s.code}
                    </span>
                    <span className="text-3xl font-display tracking-ultratight text-bone-50 group-hover:text-signal">
                      {s.label}
                    </span>
                    <span className="text-2xl text-bone-500">→</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-300">
                  Available for engagements
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}