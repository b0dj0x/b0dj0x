'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroScene = dynamic(() => import('./three/HeroScene'), { ssr: false });

const rotatingRoles = [
  'Red Team Operator',
  'Bug Bounty Hunter',
  'Offensive Security Researcher',
  'Full-Stack Engineer',
  'CTF Player',
  'Web3 Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = rotatingRoles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < role.length) {
        timer = setTimeout(() => {
          setDisplayed(role.slice(0, displayed.length + 1));
        }, 60 + Math.random() * 40);
      } else {
        timer = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setRoleIndex((i) => (i + 1) % rotatingRoles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden pt-32 md:pt-40"
    >
      <div className="absolute inset-0 grid-line opacity-50" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent opacity-30" />

      <div className="absolute inset-0 z-0">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-transparent to-transparent md:via-ink-950/40" />
      </div>

      <div className="container-grid relative z-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-bone-300">
                Red Team · Security Research · Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-mega font-medium text-bone-50 text-balance"
            >
              Offensive
              <br />
              <span className="text-bone-300">Security.</span>
              <span className="block text-bone-500">Built to break.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 max-w-2xl"
            >
              <p className="text-base leading-relaxed text-bone-200 md:text-lg text-pretty">
                I'm{' '}
                <span className="font-semibold text-bone-50">B0dj0x</span>{' '}
                — an offensive security specialist who reverse-engineers
                systems to understand how they fail, then engineers the fix.
                CEO of{' '}
                <span className="font-mono text-bone-50">w0lfr00t</span>{' '}
                and{' '}
                <span className="font-mono text-bone-50">w0lfr00tlabs</span>.
              </p>

              <div className="mt-4 flex items-center gap-2 font-mono text-sm text-bone-300">
                <span className="text-signal">{'>'}</span>
                <span className="text-bone-100">{displayed}</span>
                <span className="inline-block h-4 w-px bg-signal animate-pulse" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="group relative inline-flex items-center gap-3 bg-bone-50 px-7 py-4 text-ink-950 transition-all duration-300 hover:bg-signal hover:text-bone-50">
                <span className="font-mono text-xs uppercase tracking-[0.25em]">
                  View Arsenal
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a href="#contact" className="group inline-flex items-center gap-3 border border-ink-600 px-7 py-4 transition-all duration-300 hover:border-signal hover:bg-signal/5">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-100">
                  Initiate Contact
                </span>
              </a>
              <a
                href="https://github.com/b0dj0x"
                target="_blank"
                rel="noopener noreferrer"
                className="group ml-auto hidden items-center gap-3 md:flex"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-400">
                  github.com/b0dj0x
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-bone-400 transition-transform group-hover:rotate-45 group-hover:text-signal" />
              </a>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="space-y-px border border-ink-700 bg-ink-900/40 p-px backdrop-blur-xl"
            >
              <div className="border-b border-ink-700 p-6">
                <div className="micro-label mb-2">Coordinates</div>
                <div className="font-mono text-sm text-bone-100">127.0.0.1</div>
              </div>
              <div className="border-b border-ink-700 p-6">
                <div className="micro-label mb-2">TryHackMe</div>
                <div className="font-display text-3xl tracking-ultratight text-bone-50">
                  Top 1%
                </div>
                <div className="mt-1 font-mono text-xs text-bone-400">
                  Global rank
                </div>
              </div>
              <div className="border-b border-ink-700 p-6">
                <div className="micro-label mb-2">Tools shipped</div>
                <div className="font-display text-3xl tracking-ultratight text-bone-50">
                  30+
                </div>
                <div className="mt-1 font-mono text-xs text-bone-400">
                  Open source
                </div>
              </div>
              <div className="p-6">
                <div className="micro-label mb-2">CVE</div>
                <div className="font-display text-3xl tracking-ultratight text-signal">
                  2025-0133
                </div>
                <div className="mt-1 font-mono text-xs text-bone-400">
                  Microsoft web vuln
                </div>
              </div>
            </motion.aside>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce text-bone-400" />
        </motion.div>
      </div>

      <div className="relative z-10 mt-24 border-y border-ink-700 bg-ink-950/60 backdrop-blur-xl">
        <div className="container-grid py-4">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-bone-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Live status · Active engagements
            </span>
            <span className="hidden md:block">
              toolkit.b0dj0x.cc · reconlens.b0dj0x.cc · w0lfr00t.com
            </span>
            <span className="hidden lg:block">
              11 certifications · 3 bounty platforms · ∞ curiosity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}