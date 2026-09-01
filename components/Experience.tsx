'use client';

import { motion } from 'framer-motion';
import { experience, education, certifications, bountyPlatforms } from '@/lib/data';

const accentBg: Record<string, string> = {
  red: 'bg-signal',
  cyan: 'bg-cyan-400',
  amber: 'bg-amber-400',
  violet: 'bg-violet-400',
};

const accentText: Record<string, string> = {
  red: 'text-signal',
  cyan: 'text-cyan-400',
  amber: 'text-amber-400',
  violet: 'text-violet-400',
};

export default function Experience() {
  return (
    <section id="engineering" className="section-pad relative overflow-hidden">
      <div className="container-grid relative">
        <div className="mb-16 grid grid-cols-12 gap-6 border-b border-ink-700 pb-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="micro-label mb-2">05 · Engineering · Experience</div>
            <h2 className="text-display text-4xl font-medium tracking-ultratight text-bone-50 md:text-6xl text-balance">
              Operator
              <br />
              <span className="text-bone-400">trajectory.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="text-base text-bone-300 text-pretty">
              A working timeline across engineering, security research, and
              field deployments. Each entry compounds into the next.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-10">
              <div className="micro-label mb-4">Professional</div>
              <div className="relative">
                <div className="absolute left-[7px] top-2 h-full w-px bg-ink-700" />
                <ul className="space-y-12">
                  {experience.map((e, i) => (
                    <motion.li
                      key={`${e.role}-${e.org}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative pl-8"
                    >
                      <span
                        className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full ${accentBg[e.accent ?? 'red']}`}
                      />
                      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-400">
                        {e.period}
                      </div>
                      <h3 className="mt-2 text-display text-xl font-medium tracking-ultratight text-bone-50 md:text-2xl">
                        {e.role}
                      </h3>
                      <div className="mt-1 font-mono text-sm text-bone-300">
                        {e.org}
                        {e.context && (
                          <span className="text-bone-500"> · {e.context}</span>
                        )}
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-bone-300 md:text-base">
                        {e.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 leading-relaxed"
                          >
                            <span className={`mt-2 h-px w-3 ${accentBg[e.accent ?? 'red']} flex-none`} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="micro-label mb-4">Education</div>
              <div className="relative">
                <div className="absolute left-[7px] top-2 h-full w-px bg-ink-700" />
                <ul className="space-y-6">
                  {education.map((e, i) => (
                    <motion.li
                      key={`${e.label}-${e.org}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="relative pl-8"
                    >
                      <span className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-bone-500" />
                      <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-bone-400">
                        {e.period}
                      </div>
                      <div className="mt-1 font-mono text-sm text-bone-100">
                        {e.label}
                      </div>
                      {e.org && (
                        <div className="font-mono text-xs text-bone-500">
                          {e.org}
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-12">
              <div>
                <div className="mb-4 flex items-end justify-between border-b border-ink-700 pb-2">
                  <div className="micro-label">Certifications</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
                    {certifications.length} total
                  </div>
                </div>
                <ul className="space-y-px bg-ink-700">
                  {certifications.map((c, i) => (
                    <motion.li
                      key={c.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                      className="group flex items-baseline justify-between bg-ink-900 px-4 py-3 transition-colors hover:bg-ink-800"
                    >
                      <div className="flex-1">
                        <div className="font-mono text-sm text-bone-100">
                          {c.name}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                          {c.issuer}
                          {c.year && ` · ${c.year}`}
                          {c.credlyId && ' · credly verified'}
                        </div>
                      </div>
                      <div
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                          c.status === 'verified'
                            ? 'text-emerald-400'
                            : 'text-amber-400'
                        }`}
                      >
                        {c.status === 'verified' ? '✓' : '◐'} {c.status === 'verified' ? 'verified' : 'in progress'}
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 border border-ink-700 bg-ink-900 p-5">
                  <div className="mb-3 flex items-center justify-between border-b border-ink-700 pb-2">
                    <div className="micro-label">Credly badge</div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                      verified
                    </span>
                  </div>
                  <div className="flex items-center justify-center bg-ink-950 p-2">
                    <div
                      data-iframe-width="150"
                      data-iframe-height="270"
                      data-share-badge-id="4c7d2b14-2722-45b8-a38e-6a5286835026"
                      data-share-badge-host="https://www.credly.com"
                    />
                  </div>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                    Ethical Hacker · Cisco Networking Academy
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-end justify-between border-b border-ink-700 pb-2">
                  <div className="micro-label">Bug bounty platforms</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
                    active hunter
                  </div>
                </div>
                <div className="space-y-2">
                  {bountyPlatforms.map((p, i) => (
                    <motion.a
                      key={p.name}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group flex items-center justify-between border border-ink-700 bg-ink-900 px-5 py-4 transition-all hover:border-signal hover:bg-ink-800"
                    >
                      <div>
                        <div className="font-mono text-sm text-bone-100">
                          {p.name}
                        </div>
                        <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                          bug bounty hunter
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-bone-500 transition-transform group-hover:rotate-45 group-hover:text-signal" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}