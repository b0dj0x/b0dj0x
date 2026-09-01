'use client';

const items = [
  'Bug Bounty',
  'Red Team',
  'OSINT',
  'Penetration Testing',
  'Web Security',
  'Network Pentest',
  'Reverse Engineering',
  'Cloud Security',
  'Exploit Dev',
  'CTF',
  'OSCP Prep',
  'WAF Bypass',
  'Bugcrowd',
  'HackerOne',
  'TryHackMe Top 1%',
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-ink-700 bg-ink-950">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex whitespace-nowrap py-6 marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 font-display text-3xl font-medium tracking-ultratight text-bone-500 md:text-5xl"
          >
            <span className={i % 2 === 0 ? 'text-bone-700' : 'text-bone-300'}>
              {item}
            </span>
            <span className="text-signal">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}