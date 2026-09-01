'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { profile } from '@/lib/data';

const AboutScene = dynamic(() => import('./three/AboutScene'), { ssr: false });

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="container-grid relative">
        <div className="mb-16 flex items-end justify-between border-b border-ink-700 pb-6">
          <div>
            <div className="micro-label mb-2">02 · About</div>
            <h2 className="text-display text-4xl font-medium tracking-ultratight text-bone-50 md:text-6xl">
              The operator
              <br />
              <span className="text-bone-400">behind the work.</span>
            </h2>
          </div>
          <div className="hidden text-right md:block">
            <div className="font-mono text-xs text-bone-400">
              Last update · 2025
            </div>
            <div className="mt-1 font-mono text-xs text-signal">
              Active · Open to engagements
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative h-[420px] overflow-hidden border border-ink-700 bg-gradient-to-br from-ink-900 to-ink-950 lg:h-[520px]">
              <div className="absolute inset-0 grid-line opacity-30" />
              <AboutScene />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-bone-400">
                  <span>visualization · 001</span>
                  <span className="text-signal">live render</span>
                </div>
              </div>
              <div className="absolute left-3 top-3 h-3 w-3 border-l border-t border-bone-400" />
              <div className="absolute right-3 top-3 h-3 w-3 border-r border-t border-bone-400" />
              <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-bone-400" />
              <div className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-bone-400" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-px bg-ink-700">
              {profile.stats.map((s) => (
                <div key={s.label} className="bg-ink-900 p-5">
                  <div className="font-display text-3xl tracking-ultratight text-bone-50 md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-bone-200 md:text-xl">
              <p className="text-pretty">
                I'm a{' '}
                <span className="text-bone-50 font-medium">
                  passionate and ambitious cybersecurity professional
                </span>{' '}
                specializing in penetration testing, offensive security, and
                CTF challenges. As CEO of{' '}
                <span className="font-mono text-bone-50">w0lfr00t</span> and{' '}
                <span className="font-mono text-bone-50">w0lfr00tlabs</span>,
                I lead security research and build platforms for the
                cybersecurity community.
              </p>

              <p className="text-base text-bone-300 md:text-lg text-pretty">
                With a strong background in mathematics (Baccalauréat) and
                current studies in Science and Technology at{' '}
                <span className="text-bone-100">USDB University</span>, I hold
                solid analytical and technical foundations. I have developed{' '}
                <span className="text-bone-50">30+ open-source security tools</span>{' '}
                used by bug bounty hunters and pentesters worldwide.
              </p>

              <p className="text-base text-bone-300 md:text-lg text-pretty">
                I continuously improve my expertise in network exploitation,
                web application security, and system vulnerabilities through
                hands-on practice on TryHackMe and HackTheBox — preparing to
                pursue Telecommunications engineering to deepen infrastructure
                knowledge.
              </p>

              <p className="text-base text-bone-300 md:text-lg text-pretty">
                In addition to cybersecurity, I am a{' '}
                <span className="text-bone-50 font-medium">
                  full-stack web developer
                </span>
                , capable of designing modern, scalable, and secure web
                solutions. My multidisciplinary skill set lets me approach
                problems from both a developer and security analyst
                perspective.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px bg-ink-700 md:grid-cols-2">
              <div className="bg-ink-900 p-6">
                <div className="micro-label mb-3">Roles</div>
                <ul className="space-y-2 font-mono text-sm">
                  <li className="flex items-center gap-3 text-bone-100">
                    <span className="h-px w-3 bg-signal" />
                    CEO · w0lfr00t
                  </li>
                  <li className="flex items-center gap-3 text-bone-100">
                    <span className="h-px w-3 bg-signal" />
                    CEO · w0lfr00tlabs
                  </li>
                  <li className="flex items-center gap-3 text-bone-100">
                    <span className="h-px w-3 bg-signal" />
                    Web App Dev · Network Engineer · Yousoft
                  </li>
                </ul>
              </div>

              <div className="bg-ink-900 p-6">
                <div className="micro-label mb-3">Education</div>
                <ul className="space-y-2 font-mono text-sm">
                  <li className="flex items-center gap-3 text-bone-100">
                    <span className="h-px w-3 bg-bone-500" />
                    Baccalauréat · Mathematics
                  </li>
                  <li className="flex items-center gap-3 text-bone-100">
                    <span className="h-px w-3 bg-bone-500" />
                    ST · USDB University · 2025–Present
                  </li>
                  <li className="flex items-center gap-3 text-bone-100">
                    <span className="h-px w-3 bg-bone-500" />
                    eJPT · INE · 2025–Present
                  </li>
                </ul>
              </div>

              <div className="bg-ink-900 p-6 md:col-span-2">
                <div className="micro-label mb-3">Identity channel</div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="font-mono text-sm">
                    <div className="text-bone-400">Signal</div>
                    <div className="text-bone-100">b0dj0x@proton.me</div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-bone-400">Telegram</div>
                    <div className="text-bone-100">@b0dj0</div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="text-bone-400">PGP</div>
                    <div className="text-bone-100">Available on request</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}