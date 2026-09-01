'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, X } from 'lucide-react';
import { projects, type Project } from '@/lib/data';
import ProjectModal from './ProjectModal';

const accentMap = {
  red: { text: 'text-signal', border: 'border-signal/30', bg: 'bg-signal/10', accent: 'signal' },
  cyan: { text: 'text-cyan-400', border: 'border-cyan-400/30', bg: 'bg-cyan-400/10', accent: 'cyan' },
  amber: { text: 'text-amber-400', border: 'border-amber-400/30', bg: 'bg-amber-400/10', accent: 'amber' },
  violet: { text: 'text-violet-400', border: 'border-violet-400/30', bg: 'bg-violet-400/10', accent: 'violet' },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-400/30', bg: 'bg-emerald-400/10', accent: 'emerald' },
};

function ProjectVisual({ project }: { project: Project }) {
  const accent = accentMap[project.accent];

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border border-ink-700 bg-gradient-to-br from-ink-900 to-ink-950">
      <div className="absolute inset-0 grid-line opacity-30" />

      <svg
        viewBox="0 0 320 200"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`grad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(220, 38, 38, 0.15)" />
            <stop offset="100%" stopColor="rgba(220, 38, 38, 0)" />
          </linearGradient>
          <pattern id={`pat-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="rgba(255,255,255,0.15)" />
          </pattern>
        </defs>
        <rect width="320" height="200" fill={`url(#pat-${project.id})`} />

        {project.category === 'government' && (
          <g>
            <rect x="40" y="60" width="240" height="120" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="1" />
            <rect x="40" y="40" width="240" height="20" fill="rgba(220,38,38,0.08)" />
            <line x1="50" y1="80" x2="270" y2="80" stroke="rgba(255,255,255,0.1)" />
            <line x1="50" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,0.1)" />
            <line x1="50" y1="120" x2="240" y2="120" stroke="rgba(255,255,255,0.1)" />
            <rect x="200" y="140" width="70" height="20" fill="rgba(220,38,38,0.2)" />
            <circle cx="55" cy="50" r="3" fill="rgba(220,38,38,0.8)" />
          </g>
        )}

        {project.category === 'financial' && (
          <g>
            <polyline
              points="40,150 80,120 120,130 160,90 200,100 240,60 280,80"
              fill="none"
              stroke="rgba(220,38,38,0.7)"
              strokeWidth="1.5"
            />
            <polyline
              points="40,170 80,150 120,160 160,130 200,140 240,110 280,120"
              fill="none"
              stroke="rgba(82,82,90,0.5)"
              strokeWidth="1"
            />
            <line x1="40" y1="170" x2="280" y2="170" stroke="rgba(255,255,255,0.1)" />
            <circle cx="240" cy="60" r="3" fill="rgba(220,38,38,0.8)" />
          </g>
        )}

        {project.category === 'heritage' && (
          <g>
            <rect x="60" y="80" width="200" height="100" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
            <rect x="80" y="60" width="160" height="20" fill="rgba(245,158,11,0.1)" />
            <circle cx="160" cy="130" r="20" fill="none" stroke="rgba(245,158,11,0.5)" />
            <path d="M 150 130 L 160 120 L 170 130 L 160 140 Z" fill="rgba(245,158,11,0.3)" />
            <line x1="80" y1="180" x2="240" y2="180" stroke="rgba(255,255,255,0.1)" />
          </g>
        )}

        {project.category === 'security' && (
          <g>
            <circle cx="160" cy="100" r="30" fill="none" stroke="rgba(220,38,38,0.4)" strokeDasharray="2 3" />
            <circle cx="160" cy="100" r="20" fill="rgba(220,38,38,0.1)" stroke="rgba(220,38,38,0.6)" />
            <line x1="160" y1="100" x2="240" y2="50" stroke="rgba(220,38,38,0.5)" />
            <line x1="160" y1="100" x2="80" y2="150" stroke="rgba(220,38,38,0.5)" />
            <line x1="160" y1="100" x2="220" y2="170" stroke="rgba(220,38,38,0.5)" />
            <circle cx="240" cy="50" r="3" fill="rgba(220,38,38,0.9)" />
            <circle cx="80" cy="150" r="3" fill="rgba(220,38,38,0.9)" />
            <circle cx="220" cy="170" r="3" fill="rgba(220,38,38,0.9)" />
          </g>
        )}

        {project.category === 'platform' && (
          <g>
            <rect x="50" y="60" width="100" height="100" fill="none" stroke="rgba(82,82,90,0.6)" strokeWidth="1" />
            <rect x="170" y="60" width="100" height="100" fill="none" stroke="rgba(82,82,90,0.6)" strokeWidth="1" />
            <rect x="50" y="80" width="100" height="14" fill="rgba(255,255,255,0.04)" />
            <rect x="170" y="80" width="100" height="14" fill="rgba(255,255,255,0.04)" />
            <circle cx="60" cy="87" r="2" fill="rgba(220,38,38,0.7)" />
            <circle cx="68" cy="87" r="2" fill="rgba(245,158,11,0.7)" />
            <circle cx="76" cy="87" r="2" fill="rgba(34,197,94,0.7)" />
            <circle cx="180" cy="87" r="2" fill="rgba(220,38,38,0.7)" />
            <circle cx="188" cy="87" r="2" fill="rgba(245,158,11,0.7)" />
            <circle cx="196" cy="87" r="2" fill="rgba(34,197,94,0.7)" />
            <line x1="150" y1="100" x2="170" y2="100" stroke="rgba(220,38,38,0.4)" strokeDasharray="2 2" />
          </g>
        )}

        {project.category === 'osint' && (
          <g>
            <circle cx="160" cy="100" r="50" fill="none" stroke="rgba(220,38,38,0.2)" />
            <circle cx="160" cy="100" r="35" fill="none" stroke="rgba(220,38,38,0.3)" />
            <circle cx="160" cy="100" r="20" fill="none" stroke="rgba(220,38,38,0.5)" />
            <line x1="160" y1="50" x2="160" y2="65" stroke="rgba(220,38,38,0.5)" />
            <line x1="160" y1="135" x2="160" y2="150" stroke="rgba(220,38,38,0.5)" />
            <line x1="110" y1="100" x2="125" y2="100" stroke="rgba(220,38,38,0.5)" />
            <line x1="195" y1="100" x2="210" y2="100" stroke="rgba(220,38,38,0.5)" />
            <circle cx="160" cy="100" r="3" fill="rgba(220,38,38,1)" />
          </g>
        )}
      </svg>

      <div className="absolute left-3 top-3 flex items-center gap-2">
        <span
          className={`inline-flex h-1.5 w-1.5 rounded-full ${accent.bg} ${accent.text}`}
          style={{ backgroundColor: 'currentColor' }}
        />
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-bone-400">
          {project.category}
        </span>
      </div>

      <div className="absolute right-3 top-3 font-mono text-[9px] uppercase tracking-[0.25em] text-bone-500">
        {project.year}
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
        <svg
          viewBox="0 0 24 24"
          className={`h-7 w-7 ${accent.text}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d={project.iconPath} />
        </svg>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-bone-500">
          {project.id}
        </span>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
  size = 'default',
}: {
  project: Project;
  onOpen: () => void;
  size?: 'default' | 'large';
}) {
  const accent = accentMap[project.accent];

  return (
    <motion.button
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`group block w-full text-left ${
        size === 'large' ? 'col-span-12' : ''
      }`}
    >
      <div className="relative overflow-hidden border border-ink-700 bg-ink-900 transition-all duration-500 hover:border-ink-600 hover:bg-ink-800">
        <div className="absolute left-0 top-0 z-10 flex items-center gap-2 border-r border-b border-ink-700 bg-ink-950/80 px-3 py-1.5 backdrop-blur-xl">
          <span className={`h-1.5 w-1.5 rounded-full ${accent.bg}`} style={{ backgroundColor: 'currentColor' }} />
          <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${accent.text}`}>
            {project.type}
          </span>
        </div>

        <div className="absolute right-0 top-0 z-10 border-l border-b border-ink-700 bg-ink-950/80 px-3 py-1.5 backdrop-blur-xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-400">
            {project.year}
          </span>
        </div>

        <div className="relative overflow-hidden">
          <ProjectVisual project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="border-t border-ink-700 p-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-500">
              {project.id}
            </span>
            <ArrowUpRight className="h-4 w-4 text-bone-500 transition-all duration-300 group-hover:rotate-45 group-hover:text-signal" />
          </div>

          <h3 className={`text-display font-medium tracking-ultratight text-bone-50 ${
            size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
          }`}>
            {project.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-bone-400">
            {project.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="border border-ink-700 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-bone-300"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-500">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center gap-4 border-t border-ink-700 pt-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-500">
              Role
            </div>
            <div className="font-mono text-[10px] text-bone-200">
              {project.role}
            </div>
            <div className="ml-auto flex items-center gap-2">
              {project.live && (
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-400">
                  live
                </span>
              )}
              {project.github && (
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-400">
                  github
                </span>
              )}
              {project.featured && (
                <span className="border border-signal/40 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-signal">
                  featured
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="container-grid relative">
        <div className="mb-16 grid grid-cols-12 gap-6 border-b border-ink-700 pb-6">
          <div className="col-span-12 lg:col-span-8">
            <div className="micro-label mb-2">04 · Selected work</div>
            <h2 className="text-display text-4xl font-medium tracking-ultratight text-bone-50 md:text-6xl text-balance">
              Project
              <br />
              <span className="text-bone-400">case studies.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="text-base text-bone-300 text-pretty">
              A mix of security tools, public-sector platforms, financial
              systems, and engineered products. Each opens into a full
              case study.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-display text-2xl font-medium tracking-ultratight text-bone-50 md:text-3xl">
              Featured
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
              {featured.length} flagship projects
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
                size={i === 0 ? 'large' : 'default'}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-display text-2xl font-medium tracking-ultratight text-bone-50 md:text-3xl">
              Arsenal & tools
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400">
              {rest.length} additional projects
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}