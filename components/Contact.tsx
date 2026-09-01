'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile, terminalCommands, socials } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';
import { SocialIcon, platformBrandColors, platformBrandHoverColors } from './SocialIcons';

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || 'Contact via b0dj0x.cc'
    )}&body=${encodeURIComponent(
      `From: ${form.name} <${form.email}>\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent opacity-40" />

      <div className="container-grid relative">
        <div className="mb-16 grid grid-cols-12 gap-6 border-b border-ink-700 pb-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="micro-label mb-2">06 · Initiate contact</div>
            <h2 className="text-display text-5xl font-medium tracking-ultratight text-bone-50 md:text-7xl lg:text-8xl text-balance">
              Let's build.
              <br />
              <span className="text-bone-400">Let's break.</span>
              <br />
              <span className="text-signal">Let's secure.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="text-base text-bone-300 text-pretty">
              Open to bug bounty collaborations, security assessments,
              freelance penetration testing, and full-stack engineering
              projects. Encrypted channels available.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="border border-ink-700 bg-ink-900/50">
              <div className="flex items-center justify-between border-b border-ink-700 px-5 py-3">
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  contact.form
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-signal/60" />
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-px bg-ink-700 p-px">
                <div className="bg-ink-900 p-5">
                  <label className="micro-label mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent font-mono text-sm text-bone-100 placeholder:text-bone-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div className="bg-ink-900 p-5">
                  <label className="micro-label mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent font-mono text-sm text-bone-100 placeholder:text-bone-500 focus:outline-none"
                    placeholder="you@domain.com"
                  />
                </div>
                <div className="bg-ink-900 p-5">
                  <label className="micro-label mb-2 block">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-transparent font-mono text-sm text-bone-100 placeholder:text-bone-500 focus:outline-none"
                    placeholder="Security assessment, bug bounty, dev project..."
                  />
                </div>
                <div className="bg-ink-900 p-5">
                  <label className="micro-label mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none bg-transparent font-mono text-sm text-bone-100 placeholder:text-bone-500 focus:outline-none"
                    placeholder="What are we building, breaking, or securing?"
                  />
                </div>
                <div className="bg-ink-900 p-5">
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-between border border-signal bg-signal/5 px-5 py-4 transition-colors hover:bg-signal hover:text-bone-50"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-100 group-hover:text-ink-950">
                      {sent ? 'message prepared · check email' : 'send.transmission'}
                    </span>
                    <ArrowUpRightIcon className="h-4 w-4 text-bone-100 transition-transform group-hover:rotate-45 group-hover:text-ink-950" />
                  </button>
                </div>
              </form>

              <div className="border-t border-ink-700 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-500">
                end-to-end encrypted · via protonmail
              </div>
            </div>
          </div>

          <div className="col-span-12 space-y-8 lg:col-span-5">
            <div className="border border-ink-700 bg-ink-950">
              <div className="border-b border-ink-700 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
                terminal · b0dj0x
              </div>
              <div className="space-y-4 p-5">
                {terminalCommands.map((cmd, i) => (
                  <motion.div
                    key={cmd.prompt}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="terminal-text"
                  >
                    <div className="text-bone-400">{cmd.prompt}</div>
                    {cmd.lines.map((line) => (
                      <div key={line} className="text-bone-200">
                        {line}
                      </div>
                    ))}
                  </motion.div>
                ))}
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="text-signal">b0dj0x</span>
                  <span className="text-bone-400">@kali</span>
                  <span className="text-bone-500">~</span>
                  <span className="text-bone-400">$</span>
                  <span className="inline-block h-3.5 w-1.5 animate-pulse bg-signal" />
                </div>
              </div>
            </div>

            <div>
              <div className="micro-label mb-4">Direct channels</div>
              <div className="space-y-px bg-ink-700">
                <div className="flex items-baseline justify-between bg-ink-900 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                    email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-sm text-bone-100 hover:text-signal"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-baseline justify-between bg-ink-900 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                    telegram
                  </span>
                  <a
                    href="https://t.me/b0dj0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-bone-100 hover:text-signal"
                  >
                    {profile.telegram}
                  </a>
                </div>
                <div className="flex items-baseline justify-between bg-ink-900 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                    location
                  </span>
                  <span className="font-mono text-sm text-bone-100">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="micro-label mb-4">Across the surface</div>
              <div className="grid grid-cols-1 gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 bg-ink-900 px-4 py-3 transition-all hover:bg-ink-800 ${platformBrandHoverColors[s.label] ?? ''}`}
                  >
                    <span
                      className={`flex h-9 w-9 flex-none items-center justify-center border border-ink-700 bg-ink-950 transition-colors group-hover:border-bone-500 ${platformBrandColors[s.label] ?? 'text-bone-300'}`}
                    >
                      <SocialIcon name={s.label} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                        {s.label}
                      </span>
                      <span className="block truncate font-mono text-xs text-bone-200 group-hover:text-bone-50">
                        {s.handle}
                      </span>
                    </span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5 flex-none text-bone-500 transition-transform group-hover:rotate-45 group-hover:text-bone-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}