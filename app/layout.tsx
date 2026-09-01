import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://b0dj0x.cc'),
  title: {
    default: 'B0dj0x — Red Team Operator & Security Researcher',
    template: '%s · B0dj0x',
  },
  description:
    'Offensive security specialist. Red Team Operator · Bug Bounty Hunter · Full-Stack Engineer. I break systems so they can be built stronger.',
  keywords: [
    'b0dj0x',
    'cybersecurity',
    'red team',
    'bug bounty',
    'penetration testing',
    'offensive security',
    'OSINT',
    'web security',
    'network security',
    'CTF',
  ],
  authors: [{ name: 'B0dj0x' }],
  creator: 'B0dj0x',
  publisher: 'B0dj0x',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://b0dj0x.cc',
    siteName: 'B0dj0x',
    title: 'B0dj0x — Red Team Operator & Security Researcher',
    description:
      'Offensive security specialist. Red Team Operator · Bug Bounty Hunter · Full-Stack Engineer.',
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/2081113050736705536/HA2XOGg9_400x400.jpg',
        width: 400,
        height: 400,
        alt: 'B0dj0x',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B0dj0x — Red Team Operator & Security Researcher',
    description:
      'Offensive security specialist. Red Team Operator · Bug Bounty Hunter · Full-Stack Engineer.',
    creator: '@b0dj0x',
    images: [
      'https://pbs.twimg.com/profile_images/2081113050736705536/HA2XOGg9_400x400.jpg',
    ],
  },
  alternates: { canonical: 'https://b0dj0x.cc' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#dc2626',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta name="referrer" content="no-referrer" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'B0dj0x',
              url: 'https://b0dj0x.cc',
              jobTitle: 'Red Team Operator · Security Researcher',
              description:
                'Offensive security specialist. Red Team Operator · Bug Bounty Hunter · Full-Stack Engineer.',
              sameAs: [
                'https://github.com/b0dj0x',
                'https://x.com/b0dj0x',
                'https://t.me/b0dj0',
                'https://tryhackme.com/p/b0dj0x',
                'https://yeswehack.com/hunters/b0dj0x',
                'https://bugcrowd.com/h/B0dj0x',
                'https://medium.com/@b0dj0x',
                'https://youtube.com/@b0dj0x',
              ],
              knowsAbout: [
                'Penetration Testing',
                'Bug Bounty',
                'Red Teaming',
                'Web Security',
                'Network Security',
                'OSINT',
                'Python',
                'Bash',
                'Cybersecurity',
              ],
            }),
          }}
        />
      </head>
      <body>
        <script
          type="text/javascript"
          async
          src="https://cdn.credly.com/assets/utilities/embed.js"
        />
        {children}
      </body>
    </html>
  );
}