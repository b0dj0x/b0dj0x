export type ProjectCategory =
  | 'security'
  | 'government'
  | 'financial'
  | 'heritage'
  | 'platform'
  | 'osint'
  | 'tooling';

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  type: string;
  year: string;
  summary: string;
  description: string;
  tech: string[];
  role: string;
  live?: string;
  github?: string;
  featured?: boolean;
  accent: 'red' | 'cyan' | 'amber' | 'violet' | 'emerald';
  iconPath: string;
  highlights?: string[];
  architecture?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  status: 'verified' | 'in-progress';
  year?: string;
  credlyId?: string;
}

export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  context?: string;
  bullets: string[];
  accent?: 'red' | 'cyan' | 'amber' | 'violet';
}

export const profile = {
  name: 'B0dj0x',
  handle: 'b0dj0x',
  role: 'Red Team Operator · Bug Bounty Hunter · Full-Stack Engineer',
  title: 'CEO w0lfr00t · Offensive Security Researcher',
  location: '127.0.0.1',
  email: 'b0dj0x@proton.me',
  telegram: '@b0dj0',
  available: true,
  shortBio:
    'Offensive security specialist. I break systems so they can be built stronger.',
  longBio: [
    'Passionate and ambitious cybersecurity professional specializing in penetration testing, offensive security, and CTF challenges.',
    'As CEO of w0lfr00t and w0lfr00tlabs, I lead security research and build platforms for the cybersecurity community.',
    'Currently studying Science and Technology at USDB University. Holds a Baccalauréat in Mathematics.',
    'Developed 30+ open-source security tools used by bug bounty hunters and pentesters worldwide.',
    'In addition to cybersecurity, a full-stack web developer capable of designing modern, scalable, and secure web solutions.',
  ],
  stats: [
    { value: 'Top 1%', label: 'TryHackMe Global' },
    { value: '30+', label: 'Security Tools' },
    { value: '11', label: 'Certifications' },
    { value: '3', label: 'Bounty Platforms' },
  ],
};

export const socials = [
  { label: 'GitHub', handle: '@b0dj0x', url: 'https://github.com/b0dj0x' },
  { label: 'X / Twitter', handle: '@b0dj0x', url: 'https://x.com/b0dj0x' },
  { label: 'Medium', handle: '@b0dj0x', url: 'https://medium.com/@b0dj0x' },
  { label: 'Telegram', handle: '@b0dj0', url: 'https://t.me/b0dj0' },
  { label: 'TryHackMe', handle: 'b0dj0x', url: 'https://tryhackme.com/p/b0dj0x' },
  {
    label: 'HackTheBox',
    handle: 'b0dj0x',
    url: 'https://profile.hackthebox.com/profile/019dee8a-3822-704d-9c13-1c84468f3b8d',
  },
  {
    label: 'YesWeHack',
    handle: 'b0dj0x',
    url: 'https://yeswehack.com/hunters/b0dj0x',
  },
  {
    label: 'Bugcrowd',
    handle: 'B0dj0x',
    url: 'https://bugcrowd.com/h/B0dj0x',
  },
  { label: 'YouTube', handle: '@b0dj0x', url: 'https://youtube.com/@b0dj0x' },
];

export const projects: Project[] = [
  {
    id: 'mizania',
    name: 'Mizania',
    category: 'government',
    type: 'Government Budget Platform',
    year: '2025',
    summary:
      'Algerian public-sector budget & financial management platform. Multi-tier workflows for credit operations, expenditures, and administrative reporting.',
    description:
      'A serious software project for budget and financial management in the Algerian public sector. Mizania coordinates the planning, allocation, and execution phases of state and wilaya budgets, providing controlled environments for fiscal operations and oversight.',
    tech: ['Laravel', 'PostgreSQL', 'Redis', 'Tailwind', 'Inertia.js'],
    role: 'Lead Engineer · Architecture & Development',
    featured: true,
    accent: 'red',
    iconPath: 'M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6',
    highlights: [
      'Multi-tier budget classification aligned with Algerian public-finance practice',
      'Role-based workflows for credit holders, accountants, and controllers',
      'Audit-grade logging across every modification and approval step',
      'Modular reporting for executive and administrative review',
    ],
    architecture: [
      'Domain services for budget cycles, expenditure tracks, and revenue lines',
      'PostgreSQL schemas isolating historical, active, and projected budget data',
      'Queue-backed report generation for executive dashboards and exports',
    ],
  },
  {
    id: 'budget-management',
    name: 'Budget Management System',
    category: 'financial',
    type: 'Enterprise Budget Platform',
    year: '2025',
    summary:
      'Enterprise-grade financial workflow platform for budget allocation, tracking, and reporting across administrative departments.',
    description:
      'A flexible budget management system engineered around real administrative workflows. Handles allocation lifecycles, multi-step approval chains, expenditure reconciliation, and structured reporting — built like serious engineering infrastructure, not a CRUD demo.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Chart.js'],
    role: 'Full-Stack Architect',
    featured: true,
    accent: 'cyan',
    iconPath: 'M3 3v18h18M7 14l4-4 4 4 5-5',
    highlights: [
      'End-to-end lifecycle: allocation → reservation → engagement → payment',
      'Multi-actor approval chains with role-based delegation',
      'Reconciliation engine comparing planned vs. executed budget lines',
      'Reporting exports in PDF and structured spreadsheet formats',
    ],
    architecture: [
      'Domain models for fiscal periods, budget envelopes, and operation tracks',
      'Event-sourced ledger for immutable audit of every transaction',
      'Plugin layer for connecting external accounting systems',
    ],
  },
  {
    id: 'patrimoine',
    name: 'Patrimoine Algeria',
    category: 'heritage',
    type: 'Heritage Management Platform',
    year: '2025',
    summary:
      'Digital platform supporting the cataloguing and management of Algerian cultural heritage assets and historical records.',
    description:
      'A platform for heritage inventory, classification, and archival access. Patrimoine Algeria structures catalogued assets, historical metadata, and access workflows for institutional and administrative users.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind'],
    role: 'Full-Stack Engineer',
    featured: true,
    accent: 'amber',
    iconPath: 'M3 21h18M5 21V7l7-4 7 4v14M9 9h6M9 13h6M9 17h6',
    highlights: [
      'Structured asset catalog with rich historical metadata',
      'Granular access tiers for institutional and administrative actors',
      'Modernised archival workflows replacing legacy spreadsheets',
      'Long-term data integrity through referential and audit constraints',
    ],
    architecture: [
      'Versioned catalogue schema preserving historical states of each entry',
      'Document store for source images, scans, and historical references',
      'Access control with per-asset visibility rules',
    ],
  },
  {
    id: 'stock',
    name: 'Stock',
    category: 'financial',
    type: 'Market Data Platform',
    year: '2025',
    summary:
      'Stock and market data platform with technical analysis, dashboards, and visualization tooling.',
    description:
      'A market data platform built around clear data visualization and engineering rigour. Surfaces ticker data, technical indicators, and structured dashboards for analysis workflows.',
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'D3.js'],
    role: 'Full-Stack Developer',
    featured: true,
    accent: 'emerald',
    iconPath: 'M3 3v18h18M7 17l4-6 4 4 5-9',
    highlights: [
      'Real-time ticker ingestion with structured caching',
      'Interactive dashboards with custom technical indicators',
      'Historical data explorer with compare and overlay tools',
      'Responsive performance under continuous data refresh',
    ],
    architecture: [
      'Ingestion workers normalising multiple upstream market feeds',
      'Time-series storage with optimised query paths for charting',
      'Streaming layer for live dashboard updates',
    ],
  },
  {
    id: 'toolkit',
    name: 'B0dj0x Toolkit',
    category: 'platform',
    type: 'Web Application',
    year: '2024',
    summary:
      '111 free bug bounty & security testing tools in one interface, with Groq AI chat and live CRT.sh / WHOIS / TLS lookups.',
    description:
      'A unified web application that brings 111 security utilities into one interface. Includes AI-assisted workflow support, live lookups against public registries, and 27 exploitation generators for common assessment tasks.',
    tech: ['Flask', 'Python', 'Groq AI', 'Three.js'],
    role: 'Architect · Developer',
    live: 'https://toolkit.b0dj0x.cc',
    accent: 'emerald',
    iconPath: 'M4 6h16M4 12h16M4 18h10',
    highlights: [
      '111 security utilities unified under one interface',
      'AI-assisted workflow support via Groq',
      'Live CRT.sh, WHOIS, and TLS lookups',
      '27 exploitation generators covering common testing tasks',
    ],
  },
  {
    id: 'reconlens',
    name: 'Recon Lens',
    category: 'security',
    type: 'Web Application',
    year: '2024',
    summary:
      'Automated recon platform for subdomain enumeration, port scanning, tech fingerprinting, and endpoint capture.',
    description:
      'Recon Lens reduces the time-to-first-signal during the reconnaissance phase. It automates the surface-mapping steps that traditionally take the longest, and presents results in a structured, filterable view.',
    tech: ['Recon', 'Automation', 'OSINT'],
    role: 'Architect · Developer',
    live: 'https://reconlens.b0dj0x.cc',
    accent: 'cyan',
    iconPath: 'M11 11a4 4 0 1 0 8 0 4 4 0 1 0-8 0M21 21l-5-5',
    highlights: [
      'Subdomain enumeration with passive and active techniques',
      'Port scanning with adaptive timing',
      'Technology fingerprinting of discovered services',
      'Endpoint capture with structured export',
    ],
  },
  {
    id: 'w0lfr00t',
    name: 'w0lfr00t',
    category: 'platform',
    type: 'Web Application',
    year: '2024',
    summary:
      'Multi-purpose security toolkit for network scanning, OSINT, brute-force, and payload delivery with modular plugins.',
    description:
      'A modular security toolkit built for repeatable workflows. Plugins handle individual phases of an engagement, allowing operators to compose custom runbooks.',
    tech: ['Security', 'OSINT', 'Exploitation'],
    role: 'Architect · Developer',
    live: 'https://w0lfr00t.b0dj0x.cc',
    accent: 'red',
    iconPath: 'M12 2L3 7v6c0 5 3.5 9 9 11 5.5-2 9-6 9-11V7l-9-5z',
    highlights: [
      'Network scanning module with configurable templates',
      'OSINT module consolidating public-source lookups',
      'Brute-force module with controlled rate-limit logic',
      'Plugin architecture for custom engagement runbooks',
    ],
  },
  {
    id: 'l3ak',
    name: 'L3AK',
    category: 'security',
    type: 'Web Application',
    year: '2024',
    summary:
      'Library of Leaks Explorer — 28M+ leaked entities across 57 datasets, with terminal-themed UI and onion routing.',
    description:
      'A research-oriented platform for exploring leaked datasets. L3AK surfaces entities across many structured sources behind a deliberate, controlled interface designed for defensive research workflows.',
    tech: ['Flask', 'API', 'Three.js'],
    role: 'Architect · Developer',
    live: 'https://l3ak.b0dj0x.cc',
    accent: 'emerald',
    iconPath: 'M4 4h16v16H4zM4 10h16M10 4v16',
    highlights: [
      '28M+ entries indexed across 57 datasets',
      'Terminal-themed interface with controlled access layers',
      'Onion routing for sensitive operational contexts',
      'Defensive-research oriented query patterns',
    ],
  },
  {
    id: 'phontom',
    name: 'Phontom',
    category: 'security',
    type: 'Web Application',
    year: '2024',
    summary:
      'Identity & infrastructure toolkit for OPSEC testing — disposable email, burner phones, anonymised browsing.',
    description:
      'Phontom provides a controlled environment for testing OPSEC assumptions during red team engagements. Each tool isolates one identity-leak vector for measurable testing.',
    tech: ['OSINT', 'Identity', 'Privacy'],
    role: 'Architect · Developer',
    live: 'https://phontom.b0dj0x.cc',
    accent: 'violet',
    iconPath: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    highlights: [
      'Disposable email layer for controlled test traffic',
      'Burner phone provisioning via anonymous routing',
      'Anonymised browsing context for OPSEC verification',
      'Identity-isolation patterns per engagement',
    ],
  },
  {
    id: 'w0lfr00t-community',
    name: 'w0lfr00t.com',
    category: 'platform',
    type: 'Community Platform',
    year: '2025',
    summary:
      'Cybersecurity community platform for knowledge sharing, threat intelligence, and collaborative research.',
    description:
      'A community hub bringing together security professionals and researchers. Focused discussion surfaces, structured research archives, and shared tooling.',
    tech: ['Community', 'Threat Intel', 'Research'],
    role: 'Founder · Lead Developer',
    live: 'https://w0lfr00t.com',
    accent: 'amber',
    iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
    highlights: [
      'Knowledge sharing surface for security professionals',
      'Threat intelligence discussion threads',
      'Collaborative research archive',
      'Curated tooling directory',
    ],
  },
  {
    id: 'w0lfr00tlabs',
    name: 'w0lfr00tlabs',
    category: 'platform',
    type: 'CTF Platform',
    year: '2025',
    summary:
      'CTF challenge platform covering web exploitation, cryptography, forensics, and reverse engineering.',
    description:
      'A Capture The Flag platform hosting structured challenges across the core security disciplines. Each challenge ships with clear success criteria and educational write-ups.',
    tech: ['CTF', 'Challenge Design', 'Platform'],
    role: 'Founder · Lead Developer',
    live: 'https://w0lfr00tlabs.com',
    accent: 'violet',
    iconPath: 'M9 11l3 3L22 4M21 12v7a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h11',
    highlights: [
      'Challenges across web, crypto, forensics, reverse engineering',
      'Structured difficulty progression',
      'Write-ups released post-event for education',
      'Anti-cheat with logging and behaviour analysis',
    ],
  },
  {
    id: 'b0d0rk',
    name: 'b0d0rk',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Automated Google Dorking tool for Bug Bounty reconnaissance — surfaces exposed assets, login pages, config files.',
    description:
      'b0d0rk automates Google Dorking at scale for bug bounty reconnaissance. Generates and executes targeted dork queries to surface exposed assets, login pages, configuration files, and vulnerable endpoints.',
    tech: ['Bash', 'Google Dorking', 'OSINT', 'Recon'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/b0d0rk',
    accent: 'red',
    iconPath: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
    highlights: [
      'Curated dork libraries across multiple categories',
      'Parallel execution with rate-limit handling',
      'Structured output for pipeline ingestion',
      'Operator-friendly CLI surface',
    ],
  },
  {
    id: 'b0dj0xscn',
    name: 'b0dj0xscn',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'High-performance Python port scanner with multi-IP support, custom port ranges, and colour-coded output.',
    description:
      'A Python port scanner built for rapid enumeration during penetration tests. Supports single and multi-IP scanning, custom port ranges, socket timeout tuning, and colour-coded terminal output.',
    tech: ['Python', 'Socket Programming', 'Network Sec'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/b0dj0xscn',
    accent: 'cyan',
    iconPath: 'M5 12h14M12 5l7 7-7 7',
    highlights: [
      'Multi-target concurrent scanning',
      'Custom port ranges and per-port timing',
      'Colorised terminal output for fast triage',
      'Export to JSON for downstream tooling',
    ],
  },
  {
    id: 'b0g0x',
    name: 'b0g0x',
    category: 'security',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Comprehensive domain vulnerability scanner for bug bounty recon. Maps attack surface of target domains.',
    description:
      'b0g0x gathers basic information, scans for common vulnerabilities, and maps the attack surface of target domains with structured output designed to feed downstream analysis.',
    tech: ['Bash', 'Web App Sec', 'Recon'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/b0g0x',
    accent: 'violet',
    iconPath: 'M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
    highlights: [
      'Structured attack-surface mapping',
      'Common-vulnerability scanning patterns',
      'Clean output suitable for reporting',
      'Composable with broader recon pipeline',
    ],
  },
  {
    id: 'black-book',
    name: 'Black Book',
    category: 'security',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Cybersecurity reference and curated arsenal of scripts, payloads, wordlists, and techniques.',
    description:
      'A curated arsenal of security scripts, payloads, wordlists, and techniques for red team operations and penetration testing. Acts as a personal playbook refined through real engagements.',
    tech: ['Bash', 'Python', 'Red Team', 'Pentesting'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/black-book',
    accent: 'red',
    iconPath: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
    highlights: [
      'Curated red team playbook',
      'Payload library with usage notes',
      'Wordlists tuned for common engagement patterns',
      'Technique notes drawn from real engagements',
    ],
  },
  {
    id: 'subphisher',
    name: 'SubPhisher',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'Subdomain takeover scanner with 40+ service fingerprints, live DNS checks, and dangling CNAME detection.',
    description:
      'Fast automated subdomain takeover scanner. Detects dangling DNS records across 40+ cloud services with live DNS verification and clean output.',
    tech: ['Python', 'DNS', 'OSINT'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/subphisher',
    accent: 'red',
    iconPath: 'M2 12c0 5 4 9 9 9 1.5 0 3-.4 4.3-1M22 12c0-5-4-9-9-9-1.5 0-3 .4-4.3 1M12 7v5l3 3',
    highlights: [
      '40+ service fingerprints',
      'Live DNS validation',
      'Dangling CNAME detection',
      'Pipeline-friendly structured output',
    ],
  },
  {
    id: 'jwtkiller',
    name: 'JWTkiller',
    category: 'security',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'JWT token cracker, forger, and sniffer. Decodes, cracks weak secrets, forges tokens, sniffs traffic.',
    description:
      'JWTkiller covers the common JWT attack surfaces — decoding, weak-secret cracking, header confusion, and traffic sniffing — all in one focused CLI.',
    tech: ['Python', 'JWT', 'Auth'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/jwtkiller',
    accent: 'violet',
    iconPath: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
    highlights: [
      'Weak-secret cracking against common algorithms',
      'Algorithm-confusion and header-forgery tests',
      'Live JWT sniffing in HTTP traffic',
      'Token forge utility for red team workflows',
    ],
  },
  {
    id: 'ssrfceptor',
    name: 'SSRFceptor',
    category: 'security',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'Blind SSRF detector with webhook callback server and 30+ OOB payloads for out-of-band testing.',
    description:
      'Detects blind SSRF vulnerabilities where callbacks are required to verify impact. Includes a callback server and a library of out-of-band payloads.',
    tech: ['Python', 'SSRF', 'OOB'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/ssrfceptor',
    accent: 'emerald',
    iconPath: 'M5 12h14M12 5l7 7-7 7M12 1l3 3M12 1L9 4',
    highlights: [
      'Out-of-band callback infrastructure',
      '30+ OOB payload patterns',
      'Blind SSRF detection logic',
      'Reporting-ready structured output',
    ],
  },
  {
    id: 'graphqlploit',
    name: 'GraphQLploit',
    category: 'security',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'GraphQL introspection exploiter with schema dumping, query builder, and automated vulnerability detection.',
    description:
      'Targeted GraphQL security tool. Performs introspection, surfaces sensitive schema details, and assists in crafting queries that exercise detected vulnerabilities.',
    tech: ['Python', 'GraphQL', 'API'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/graphqlploit',
    accent: 'amber',
    iconPath: 'M4 6h16v4H4zM4 14h16v4H4zM8 6v12M16 6v12',
    highlights: [
      'Introspection surface detection',
      'Schema dumping with filterable output',
      'Query builder for vulnerability testing',
      'API-security oriented reporting',
    ],
  },
  {
    id: 'wafnuker',
    name: 'WAFNuker',
    category: 'security',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'WAF detection & bypass — identifies 16+ WAFs with 150+ bypass payloads for SQLi, XSS, command injection.',
    description:
      'Identifies Web Application Firewalls in front of a target and ships a library of bypass payloads. Used by red teamers when WAFs are a known friction point.',
    tech: ['Python', 'WAF', 'Bypass'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/wafnuker',
    accent: 'amber',
    iconPath: 'M12 2L4 6v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V6l-8-4zM12 11v6M12 8h.01',
    highlights: [
      '16+ WAF fingerprints',
      '150+ bypass payloads',
      'Coverage of SQLi, XSS, and command injection',
      'Pipeline-friendly output',
    ],
  },
  {
    id: 'corsbomber',
    name: 'CORSbomber',
    category: 'security',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'CORS misconfiguration scanner with 40+ origin mutations and automated insecure-policy detection.',
    description:
      'CORS misconfigurations are common but tedious to test reliably. CORSbomber generates mutated origins and analyses responses for insecure CORS policies.',
    tech: ['Python', 'CORS', 'Web'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/corsbomber',
    accent: 'red',
    iconPath: 'M8 3v18M16 3v18M3 8h18M3 16h18',
    highlights: [
      '40+ origin mutation patterns',
      'Insecure-policy detection across many patterns',
      'Reporting-grade output',
      'Composable with broader web testing suites',
    ],
  },
  {
    id: 'log4jscan',
    name: 'Log4jScan',
    category: 'security',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'Log4Shell scanner with 30 JNDI payloads, callback server, and mass scanning capabilities.',
    description:
      'Targeted Log4Shell detection with multiple JNDI payload formats and a callback server to confirm exploitation in safe conditions.',
    tech: ['Python', 'Log4j', 'CVE'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/log4jscan',
    accent: 'violet',
    iconPath: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    highlights: [
      '30 JNDI payload formats',
      'Callback server for exploitation confirmation',
      'Mass scanning capability',
      'Reporting-grade structured output',
    ],
  },
  {
    id: 'apithief',
    name: 'APIThief',
    category: 'security',
    type: 'Open Source Tool',
    year: '2025',
    summary:
      'REST/GraphQL parameter discovery with 21 auth bypass techniques and automated endpoint enumeration.',
    description:
      'Discovers parameters and surfaces authentication bypass opportunities across REST and GraphQL APIs.',
    tech: ['Python', 'API', 'Auth Bypass'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/apithief',
    accent: 'emerald',
    iconPath: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    highlights: [
      'Parameter discovery across REST and GraphQL',
      '21 auth-bypass techniques',
      'Endpoint enumeration at scale',
      'Reporting-grade output',
    ],
  },
  {
    id: 'blog',
    name: 'B0dj0x Blog',
    category: 'platform',
    type: 'Blog Platform',
    year: '2024',
    summary:
      'Cybersecurity research hub — vulnerability write-ups, bug bounty tips, pentesting tutorials, OSINT methodologies.',
    description:
      'A research blog covering vulnerability write-ups, bug bounty methodology, and structured tutorials. Each post goes deep enough to be useful for working operators.',
    tech: ['Write-ups', 'Research', 'Tutorials'],
    role: 'Author · Maintainer',
    live: 'https://blog.b0dj0x.cc',
    accent: 'emerald',
    iconPath: 'M4 4h16v16H4zM8 8h8M8 12h8M8 16h5',
    highlights: [
      'Vulnerability write-ups',
      'Bug bounty methodology articles',
      'Pentesting tutorials',
      'OSINT methodology notes',
    ],
  },
  {
    id: 'w0lfr00t-next',
    name: 'w0lfr00t.next',
    category: 'platform',
    type: 'Upcoming Platform',
    year: '2026',
    summary:
      'Next-generation w0lfr00t platform. Reimagined community surface with deeper tooling and research integration.',
    description:
      'Upcoming platform that consolidates the w0lfr00t ecosystem into a unified, more interactive surface.',
    tech: ['Platform', 'Community', 'Research'],
    role: 'Founder · Lead Developer',
    live: 'https://w0lfr00t.vercel.app',
    accent: 'violet',
    iconPath: 'M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07',
    highlights: [
      'Unified ecosystem surface',
      'Deeper research integration',
      'Interactive tooling directory',
      'Community-driven knowledge base',
    ],
  },
  {
    id: 'subenum',
    name: 'SubEnum',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Subdomain enumeration with 20+ free sources — crt.sh, DNS brute-force, passive reconnaissance.',
    description:
      'SubEnum consolidates twenty-plus free subdomain sources into one streamlined enumeration pipeline. Designed for fast passive discovery during reconnaissance phases.',
    tech: ['Python', 'DNS', 'Recon'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/subenum',
    accent: 'cyan',
    iconPath: 'M3 12h6m6 0h6M9 6l-3 6 3 6M15 6l3 6-3 6',
    highlights: [
      '20+ free subdomain sources',
      'DNS brute-force capability',
      'Passive recon defaults',
      'Structured JSON output',
    ],
  },
  {
    id: 'facetracer',
    name: 'FaceTracer',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Real reverse image search via Trace.moe, SauceNAO, IQDB plus 11 stable search links.',
    description:
      'FaceTracer centralises real reverse image search engines plus a curated list of stable search links including Google Lens and TinEye.',
    tech: ['Python', 'OSINT', 'Image'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/facetracer',
    accent: 'cyan',
    iconPath: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    highlights: [
      'Trace.moe, SauceNAO, IQDB integrations',
      '11 stable reverse image search links',
      'Image hashing helpers',
      'Operator-friendly output',
    ],
  },
  {
    id: 'emailphantom',
    name: 'EmailPhantom',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Email reconnaissance with validation, DNS analysis, Gravatar, social profiles and breach checks.',
    description:
      'EmailPhantom consolidates email reconnaissance into one workflow. Validation, DNS analysis, Gravatar lookup, social profile discovery, and breach checks across 26+ OSINT sources.',
    tech: ['Python', 'Email', 'OSINT'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/emailphantom',
    accent: 'red',
    iconPath: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6',
    highlights: [
      'Email validation across multiple checks',
      'DNS analysis with MX/SPF inspection',
      'Gravatar lookup and avatar correlation',
      'Breach checks across 26+ OSINT sources',
    ],
  },
  {
    id: 'userreaper',
    name: 'UserReaper',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Username harvester — discovers the same handle across 100+ platforms for target profiling.',
    description:
      'UserReaper takes a username and checks 100+ platforms for matches. Built for quick profile correlation during OSINT investigations.',
    tech: ['Python', 'Username', 'OSINT'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/userreaper',
    accent: 'emerald',
    iconPath: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    highlights: [
      '100+ platform checks',
      'Parallel probing with rate-limit handling',
      'Confidence scoring per hit',
      'Exportable reporting output',
    ],
  },
  {
    id: 'domainghost',
    name: 'DomainGhost',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Domain reconnaissance — WHOIS, DNS, certificate transparency and infrastructure fingerprinting.',
    description:
      'DomainGhost focuses on the first minutes of a domain investigation. WHOIS, DNS, certificate transparency, and infrastructure fingerprinting in one run.',
    tech: ['Python', 'Domain', 'Recon'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/domainghost',
    accent: 'violet',
    iconPath: 'M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zM3 12h18',
    highlights: [
      'WHOIS deep lookup',
      'DNS record enumeration',
      'Certificate transparency surfaces',
      'Infrastructure fingerprinting',
    ],
  },
  {
    id: 'leakhunter',
    name: 'LeakHunter',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Threat actor intelligence — surfaces leaks, breach references and adversary fingerprints.',
    description:
      'LeakHunter helps researchers navigate threat-actor surfaces. Surfaces leaks, breach references, and adversary fingerprints across known data sources.',
    tech: ['Python', 'Threat Intel', 'APT'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/leakhunter',
    accent: 'red',
    iconPath: 'M12 2L4 6v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V6l-8-4zM12 11v6M12 7h.01',
    highlights: [
      'Threat-actor surface mapping',
      'Breach reference aggregation',
      'Adversary fingerprint surfacing',
      'Defensive-research oriented output',
    ],
  },
  {
    id: 'carintel',
    name: 'CarIntel',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Vehicle OSINT — VIN decoding, plate lookups, ownership trails and surface correlation.',
    description:
      'CarIntel focuses on vehicle-oriented OSINT. VIN decoding, plate lookups, ownership trails, and surface correlation in one workflow.',
    tech: ['Python', 'Vehicle', 'OSINT'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/carintel',
    accent: 'amber',
    iconPath: 'M5 17h14M7 17V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9M9 13h6',
    highlights: [
      'VIN decoding',
      'Plate lookups across public registries',
      'Ownership trail correlation',
      'Reporting-grade output',
    ],
  },
  {
    id: 'cryptotracker',
    name: 'CryptoTracker',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Crypto wallet OSINT — balance surfaces, transaction graphs and address tagging.',
    description:
      'CryptoTracker surfaces wallet balances, transaction graphs, and address-tagging data for blockchain investigations.',
    tech: ['Python', 'Blockchain', 'OSINT'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/cryptotracker',
    accent: 'amber',
    iconPath: 'M11.767 19.522c4.066 0 7.46-3.21 7.46-7.103 0-3.892-3.394-7.102-7.46-7.102s-7.46 3.21-7.46 7.102c0 3.893 3.394 7.103 7.46 7.103zM12 6.5V2M12 22v-4.5M6.5 12H2M22 12h-4.5',
    highlights: [
      'Wallet balance surfaces',
      'Transaction graph view',
      'Address tagging helpers',
      'Multi-chain coverage',
    ],
  },
  {
    id: 'pastesniffer',
    name: 'PasteSniffer',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Paste site scraper — monitors public paste services for target keywords and indicators.',
    description:
      'PasteSniffer monitors public paste services for keywords, indicators, or targets. Useful for early leak detection and breach surfacing.',
    tech: ['Python', 'Paste', 'Leak'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/pastesniffer',
    accent: 'cyan',
    iconPath: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 4h6v4H9zM9 14l2 2 4-4',
    highlights: [
      'Multi-paste-site monitoring',
      'Keyword and indicator matching',
      'Continuous polling support',
      'Structured alert output',
    ],
  },
  {
    id: 'torcrawler',
    name: 'TorCrawler',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Dark web crawler — onion route indexing, surface enumeration, content harvesting.',
    description:
      'TorCrawler crawls onion services through routed circuits, enumerates surfaces, and harvests structured content for defensive research.',
    tech: ['Python', 'Tor', 'Crawler'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/torcrawler',
    accent: 'violet',
    iconPath: 'M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zM5 12h14',
    highlights: [
      'Onion routing integration',
      'Surface enumeration',
      'Structured content harvesting',
      'Defensive-research oriented',
    ],
  },
  {
    id: 'leakminer',
    name: 'LeakMiner',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Breach aggregator — combines multiple breach sources for unified indicator lookups.',
    description:
      'LeakMiner aggregates breach indicators across multiple sources. Built for defensive research workflows that need unified lookups.',
    tech: ['Python', 'Breach', 'Monitor'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/leakminer',
    accent: 'emerald',
    iconPath: 'M3 12l4-4 4 4-4 4-4-4zM13 12l4-4 4 4-4 4-4-4zM8 11l8 2',
    highlights: [
      'Multi-source breach aggregation',
      'Unified indicator lookups',
      'Continuous monitoring hooks',
      'Reporting-grade output',
    ],
  },
  {
    id: 'forumscraper',
    name: 'ForumScraper',
    category: 'osint',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'Forum scraper — extracts threads, users and reputation patterns from underground forums.',
    description:
      'ForumScraper extracts thread content, user metadata, and reputation patterns from underground forums for threat intelligence research.',
    tech: ['Python', 'Forum', 'Threat Intel'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/forumscraper',
    accent: 'amber',
    iconPath: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
    highlights: [
      'Thread extraction',
      'User and reputation scraping',
      'Pattern detection helpers',
      'Defensive research workflows',
    ],
  },
  {
    id: 'ddosb0dj0x',
    name: 'DDOSB0DJ0X',
    category: 'security',
    type: 'Open Source Tool',
    year: '2024',
    summary:
      'HTTP stress testing tool — controlled load generation for resilience testing.',
    description:
      'DDOSB0DJ0X is an HTTP stress testing tool used for controlled load generation during resilience testing. Always test against systems you own.',
    tech: ['Python', 'HTTP', 'Stress Test'],
    role: 'Author',
    github: 'https://github.com/b0dj0x/ddosb0dj0x',
    accent: 'red',
    iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
    highlights: [
      'HTTP load generation',
      'Configurable concurrency',
      'Resilience testing workflow',
      'Authorised-target guard rails',
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const skillCategories = [
  {
    name: 'Web Security',
    code: '01',
    description: 'OWASP-aligned offensive assessment of modern web stacks.',
    items: [
      { name: 'Web App Pentesting', level: 85 },
      { name: 'SQL Injection', level: 80 },
      { name: 'XSS / CSRF', level: 78 },
      { name: 'Caido / Burp Suite', level: 75 },
    ],
    tags: ['OWASP Top 10', 'Bug Bounty', 'API Security', 'SSRF', 'JWT', 'CORS'],
    accent: 'red',
  },
  {
    name: 'Network Security',
    code: '02',
    description: 'Service discovery, traffic analysis, and protocol-level work.',
    items: [
      { name: 'Network Pentesting', level: 75 },
      { name: 'Port Scanning', level: 85 },
      { name: 'CCNA Networking', level: 70 },
    ],
    tags: ['Nmap', 'Wireshark', 'MITM', 'TLS', 'DNS'],
    accent: 'cyan',
  },
  {
    name: 'Cloud & DevSec',
    code: '03',
    description: 'Identity, monitoring, and infrastructure-as-target practice.',
    items: [
      { name: 'AWS Security', level: 65 },
      { name: 'Microsoft Sentinel', level: 60 },
    ],
    tags: ['AWS', 'SIEM', 'IAM', 'Cloud Trails'],
    accent: 'violet',
  },
  {
    name: 'Programming',
    code: '04',
    description: 'Engineering tooling for offensive and full-stack work.',
    items: [
      { name: 'Python', level: 80 },
      { name: 'Bash / Shell', level: 85 },
      { name: 'JavaScript / PHP', level: 75 },
      { name: 'Go / C / C#', level: 55 },
    ],
    tags: ['Python', 'Bash', 'Go', 'C', 'TypeScript'],
    accent: 'amber',
  },
  {
    name: 'Red Team & OSINT',
    code: '05',
    description: 'Reconnaissance, target profiling, and adversary research.',
    items: [
      { name: 'Reconnaissance', level: 85 },
      { name: 'Google Dorking', level: 90 },
      { name: 'CTF Challenges', level: 75 },
    ],
    tags: ['OSINT', 'Recon', 'Social Eng.', 'Threat Intel'],
    accent: 'red',
  },
  {
    name: 'Tooling & Stack',
    code: '06',
    description: 'Operator toolkit and platform fluency.',
    items: [],
    tags: [
      'Caido',
      'n8n',
      'MySQL',
      'Oracle SQL',
      'GitHub',
      'AWS',
      'PowerShell',
      'Linux',
      'Metasploit',
      'Blockchain',
      'Solidity',
      'Smart Contracts',
    ],
    accent: 'emerald',
  },
];

export const securityNodes = [
  { id: 'web', label: 'Web Application', code: 'WEB', desc: 'OWASP-aligned assessments', accent: 'red' as const },
  { id: 'net', label: 'Network', code: 'NET', desc: 'Discovery, MITM, protocol abuse', accent: 'cyan' as const },
  { id: 'ad', label: 'Active Directory', code: 'AD', desc: 'Identity, escalation, lateral movement', accent: 'amber' as const },
  { id: 'lin', label: 'Linux / Systems', code: 'LIN', desc: 'Privilege escalation, persistence', accent: 'emerald' as const },
  { id: 'research', label: 'Security Research', code: 'RES', desc: 'Vulnerability analysis, write-ups', accent: 'violet' as const },
  { id: 'exploit', label: 'Exploitation', code: 'EXP', desc: 'Payload design, tooling', accent: 'red' as const },
  { id: 'osint', label: 'OSINT / Recon', code: 'OSI', desc: 'Surface mapping, target profiling', accent: 'cyan' as const },
  { id: 'cloud', label: 'Cloud', code: 'CLD', desc: 'AWS, IAM, misconfigurations', accent: 'violet' as const },
];

export const certifications: Certification[] = [
  { name: 'Penetration Tester Path', issuer: 'TryHackMe', status: 'verified', year: '2024' },
  { name: 'eJPT', issuer: 'INE Security', status: 'in-progress', year: '2025' },
  { name: 'AWS Security', issuer: 'AWS Educate', status: 'verified', year: '2024' },
  { name: 'CS50 — Computer Science', issuer: 'Harvard University', status: 'verified', year: '2025' },
  { name: 'SC-200: Microsoft Sentinel', issuer: 'Microsoft Learn', status: 'verified', year: '2024' },
  { name: 'CCNA Networking', issuer: 'Cisco', status: 'verified', year: '2023' },
  { name: 'Cybersecurity Certification', issuer: 'Simplilearn', status: 'verified', year: '2024' },
  { name: 'Blockchain Certificate', issuer: 'Cyfrin Updraft', status: 'verified', year: '2024' },
  { name: 'Core Certificate', issuer: 'Hackviser', status: 'verified', year: '2024' },
  { name: 'Software Engineer', issuer: 'HackerRank', status: 'verified', year: '2024' },
  { name: 'Ethical Hacker', issuer: 'Cisco Networking Academy', status: 'verified', year: '2024', credlyId: '4c7d2b14-2722-45b8-a38e-6a5286835026' },
];

export const experience: ExperienceEntry[] = [
  {
    period: 'Jan 2024 — Present',
    role: 'Web App Developer & Network Engineer',
    org: 'Yousoft',
    context: '127.0.0.1',
    bullets: [
      'Full-stack development of production web applications',
      'Security best practices integrated into the development lifecycle',
      'Network troubleshooting, corporate LAN design',
      'Manual pentesting of internal services and reporting on remediation',
      'AWS security work, internal hardening recommendations',
    ],
    accent: 'red',
  },
  {
    period: '12 / 2025',
    role: 'Enterprise Network Deployment',
    org: 'APC Sidi Ghilas',
    context: 'Algeria',
    bullets: [
      'Built the full network infrastructure for an enterprise environment',
      'Configured routers, switches, VLANs, and secure access controls',
    ],
    accent: 'cyan',
  },
  {
    period: '11 / 09 / 2024',
    role: 'Government Web Application Developer',
    org: 'APC Ahmer El Ain',
    context: 'Algerian Government',
    bullets: [
      'Full design, development, and deployment of an official government website',
      'Public-facing services aligned with administrative workflows',
    ],
    accent: 'amber',
  },
  {
    period: '2024',
    role: 'Employee Salary Management Application',
    org: 'Corporate Client',
    bullets: [
      'Payroll and records application with automated calculations',
      'Secure admin dashboard with role-based access',
    ],
    accent: 'violet',
  },
];

export const education = [
  {
    period: '2025 — Present',
    label: 'Science & Technology (ST)',
    org: 'USDB University',
  },
  {
    period: '2025 — Present',
    label: 'Junior Penetration Tester Course',
    org: 'INE / eJPT',
  },
  {
    period: '2025',
    label: 'CS50 — Computer Science Fundamentals',
    org: 'Harvard University',
  },
  {
    period: '2024',
    label: 'Ethical Hacking',
    org: 'HackersArise',
  },
  {
    period: '2020 — 2022',
    label: 'Web Development Course',
    org: 'Maxcenter',
  },
  {
    period: 'Pre-2020',
    label: 'Baccalauréat in Mathematics',
    org: '',
  },
];

export const bountyPlatforms = [
  { name: 'HackerOne', url: 'https://hackerone.com/b0dj0x' },
  { name: 'YesWeHack', url: 'https://yeswehack.com/hunters/b0dj0x' },
  { name: 'Bugcrowd', url: 'https://bugcrowd.com/h/B0dj0x' },
];

export const terminalCommands: { prompt: string; lines: string[] }[] = [
  {
    prompt: '$ whoami',
    lines: ['> red_team_operator · bug_bounty_hunter · engineer'],
  },
  {
    prompt: '$ focus',
    lines: ['> offensive_security · system_design · research'],
  },
  {
    prompt: '$ status',
    lines: ['> building · researching · breaking'],
  },
  {
    prompt: '$ engagements',
    lines: ['> available · freelance · collaborative'],
  },
];