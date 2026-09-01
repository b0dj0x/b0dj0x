'use client';

import { motion } from 'framer-motion';
import { X, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { type Project } from '@/lib/data';

const accentMap = {
  red: 'text-signal',
  cyan: 'text-cyan-400',
  amber: 'text-amber-400',
  violet: 'text-violet-400',
  emerald: 'text-emerald-400',
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const accent = accentMap[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-ink-950"
    >
      <div className="absolute inset-0 grid-line opacity-30" />

      <div className="relative min-h-screen">
        <div className="sticky top-0 z-20 border-b border-ink-700 bg-ink-950/80 backdrop-blur-2xl">
          <div className="container-grid flex items-center justify-between py-4">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em]">
              <span className={accent}>{project.id}</span>
              <span className="text-bone-500">/</span>
              <span className="text-bone-400">case study</span>
            </div>
            <button
              onClick={onClose}
              className="group flex items-center gap-2 border border-ink-700 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-bone-300 transition-colors hover:border-signal hover:text-bone-50"
              aria-label="Close case study"
            >
              <span>close</span>
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="container-grid relative py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em]">
              <span className={accent}>{project.type}</span>
              <span className="text-bone-500">·</span>
              <span className="text-bone-400">{project.year}</span>
            </div>
            <h1 className="text-display text-5xl font-medium tracking-ultratight text-bone-50 md:text-7xl lg:text-8xl text-balance">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-bone-200 md:text-2xl text-pretty">
              {project.summary}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-bone-50 px-5 py-3 text-ink-950 transition-all hover:bg-signal hover:text-bone-50"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">
                    Visit live
                  </span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 border border-ink-600 px-5 py-3 transition-colors hover:border-signal hover:bg-signal/5"
                >
                  <Github className="h-4 w-4" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">
                    Source
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                </a>
              )}
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-12 gap-8 border-t border-ink-700 pt-12">
            <div className="col-span-12 md:col-span-3">
              <div className="micro-label mb-2">Overview</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-lg leading-relaxed text-bone-200 md:text-xl text-pretty">
                {project.description}
              </p>
            </div>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-12 grid grid-cols-12 gap-8 border-t border-ink-700 pt-12">
              <div className="col-span-12 md:col-span-3">
                <div className="micro-label mb-2">Key features</div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <motion.li
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="flex items-start gap-4 border-l-2 border-signal/40 pl-4"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base text-bone-200 md:text-lg">{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <div className="mt-12 grid grid-cols-12 gap-8 border-t border-ink-700 pt-12">
              <div className="col-span-12 md:col-span-3">
                <div className="micro-label mb-2">Technical architecture</div>
              </div>
              <div className="col-span-12 md:col-span-9">
                <ul className="space-y-3">
                  {project.architecture.map((a, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 border-l-2 border-bone-700 pl-4"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-base text-bone-300 md:text-lg">
                        {a}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-12 grid grid-cols-12 gap-8 border-t border-ink-700 pt-12">
            <div className="col-span-12 md:col-span-3">
              <div className="micro-label mb-2">Technologies</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="border border-ink-700 bg-ink-900 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-bone-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-8 border-t border-ink-700 pt-12">
            <div className="col-span-12 md:col-span-3">
              <div className="micro-label mb-2">Role</div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="font-mono text-base text-bone-100 md:text-lg">
                {project.role}
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-ink-700 pt-8">
            <button
              onClick={onClose}
              className="group flex items-center gap-3 border border-ink-700 px-5 py-3 transition-colors hover:border-signal"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-bone-300 group-hover:text-bone-50">
                Back to projects
              </span>
              <X className="h-4 w-4" />
            </button>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-500">
              {project.id} · {project.year}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}