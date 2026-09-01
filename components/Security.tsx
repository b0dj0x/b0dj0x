'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { skillCategories, securityNodes } from '@/lib/data';

const SecurityScene = dynamic(() => import('./three/SecurityScene'), { ssr: false });

const accentClass: Record<string, string> = {
  red: 'border-signal/40 hover:border-signal text-signal',
  cyan: 'border-cyan-400/40 hover:border-cyan-400 text-cyan-400',
  amber: 'border-amber-400/40 hover:border-amber-400 text-amber-400',
  violet: 'border-violet-400/40 hover:border-violet-400 text-violet-400',
  emerald: 'border-emerald-400/40 hover:border-emerald-400 text-emerald-400',
};

export default function Security() {
  return (
    <section id="security" className="section-pad relative overflow-hidden">
      <div className="container-grid relative">
        <div className="mb-16 grid grid-cols-12 gap-6 border-b border-ink-700 pb-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="micro-label mb-2">03 · Offensive capability</div>
            <h2 className="text-display text-4xl font-medium tracking-ultratight text-bone-50 md:text-6xl text-balance">
              Security
              <br />
              <span className="text-bone-400">discipline map.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="text-base text-bone-300 text-pretty">
              Six capability vectors form the operating surface. Each maps to
              real engagements, real tools, and a research methodology that
              compounds over time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden border border-ink-700 bg-gradient-to-br from-ink-900 to-ink-950">
              <div className="absolute inset-0 grid-line opacity-30" />
              <SecurityScene />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
              <div className="absolute left-4 top-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
                  topology · live
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
                  offensive security · 8 nodes
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  online
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
              {securityNodes.slice(0, 4).map((n) => (
                <div
                  key={n.id}
                  className={`border bg-ink-900/50 p-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${accentClass[n.accent]}`}
                >
                  <div className="text-base font-medium text-bone-50">{n.code}</div>
                  <div className="mt-1 text-bone-400">{n.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-px bg-ink-700">
              {securityNodes.map((n, i) => (
                <motion.div
                  key={n.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative flex items-center justify-between border border-transparent bg-ink-900 p-6 transition-all hover:bg-ink-800"
                >
                  <div className="flex items-center gap-6">
                    <div className="font-mono text-xs text-bone-500">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="font-mono text-base text-bone-50 md:text-lg">
                        {n.label}
                      </div>
                      <div className="mt-1 text-sm text-bone-400">
                        {n.desc}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`hidden border bg-ink-950 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] md:block ${accentClass[n.accent]}`}
                  >
                    {n.code}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between border-b border-ink-700 pb-4">
            <div>
              <div className="micro-label mb-2">Capability detail</div>
              <h3 className="text-display text-2xl font-medium tracking-ultratight text-bone-50 md:text-3xl">
                Technical arsenal
              </h3>
            </div>
            <div className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400 md:block">
              6 categories · 17 skills
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-ink-700 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-ink-900 p-6 transition-colors hover:bg-ink-800"
              >
                <div className="mb-4 flex items-baseline justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-500">
                    {cat.code}
                  </div>
                  <div
                    className={`font-mono text-[10px] uppercase tracking-[0.3em] ${accentClass[cat.accent]?.split(' ')[1] ?? 'text-bone-400'}`}
                  >
                    {cat.items.length} skills
                  </div>
                </div>
                <h4 className="text-display text-xl font-medium tracking-ultratight text-bone-50">
                  {cat.name}
                </h4>
                <p className="mt-2 text-sm text-bone-400">{cat.description}</p>

                <div className="mt-5 space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-baseline justify-between font-mono text-[11px] text-bone-300">
                        <span className="uppercase tracking-[0.15em]">
                          {item.name}
                        </span>
                        <span className="text-bone-400">{item.level}%</span>
                      </div>
                      <div className="h-px bg-ink-700">
                        <div
                          className="h-px bg-signal"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink-700 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-bone-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}