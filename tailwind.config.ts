import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050507',
          900: '#0a0a0d',
          800: '#101015',
          700: '#15151c',
          600: '#1d1d26',
        },
        bone: {
          50: '#f7f7f8',
          100: '#ededee',
          200: '#d4d4d7',
          300: '#a1a1aa',
          400: '#71717a',
          500: '#52525a',
        },
        signal: {
          DEFAULT: '#dc2626',
          dim: '#7f1d1d',
          bright: '#ef4444',
          glow: 'rgba(220, 38, 38, 0.45)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        ultratight: '-0.03em',
      },
      animation: {
        'scan-line': 'scan-line 8s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'glitch': 'glitch 3s steps(2, end) infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'orbit': 'orbit 30s linear infinite',
      },
      keyframes: {
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)', opacity: '1' },
          '20%': { transform: 'translate(-1px, 1px)', opacity: '0.85' },
          '40%': { transform: 'translate(1px, -1px)', opacity: '0.95' },
          '60%': { transform: 'translate(-1px, -1px)', opacity: '0.9' },
          '80%': { transform: 'translate(1px, 1px)', opacity: '0.85' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;