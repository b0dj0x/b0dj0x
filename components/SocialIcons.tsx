import { cn } from '@/lib/cn';

export function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const c = cn('h-4 w-4', className);

  switch (name) {
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
        </svg>
      );
    case 'X / Twitter':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'Medium':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.39 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.39 2.88 3.39 6.42m3.04 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75" />
        </svg>
      );
    case 'Telegram':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.12-3.04-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
      );
    case 'TryHackMe':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <path d="M10.7 2.4c-.4 0-.8.1-1.2.2L3.5 4.5C2.6 4.8 2 5.6 2 6.5v11c0 .9.6 1.7 1.5 2l6 1.9c.4.1.8.2 1.2.2v-2c-.2 0-.4 0-.6-.1L4 17.6c-.3-.1-.5-.4-.5-.7V7.1c0-.3.2-.6.5-.7l6.1-1.9c.2-.1.4-.1.6-.1V2.4zm3.3 0v2c.2 0 .4 0 .6.1l6.1 1.9c.3.1.5.4.5.7v9.8c0 .3-.2.6-.5.7l-6.1 1.9c-.2.1-.4.1-.6.1v2c.4 0 .8-.1 1.2-.2l6-1.9c.9-.3 1.5-1.1 1.5-2v-11c0-.9-.6-1.7-1.5-2l-6-1.9c-.4-.1-.8-.2-1.2-.2zm-.6 5.6L8 9.7v1.3l4.4 1.5v3l-2.5-2v-1l-1.6-.6v2.1l4.5 3.4 4.5-3.4v-2.1l-1.6.6v1l-2.5 2v-3L17 11v-1.3l-5.4-1.7z" />
        </svg>
      );
    case 'HackTheBox':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={c}>
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
          <path d="M12 12l-5-3v6l5 3 5-3V9l-5 3z" />
          <path d="M7 4l10 5M7 14l10 5" />
        </svg>
      );
    case 'YesWeHack':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H7v-2h4v2zm0-3H7v-2h4v2zm0-3H7V8h4v2zm6 6h-4v-2h4v2zm0-3h-4v-2h4v2zm0-3h-4V8h4v2z" />
        </svg>
      );
    case 'Bugcrowd':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <circle cx="12" cy="12" r="10" fillOpacity="0.15" />
          <path d="M8.5 8.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 1.4-.8 2.6-2 3.1V14h-3v-2.4c-1.2-.5-2-1.7-2-3.1zm-3 .5l-2-1 .5-1 2 1c.4-1 1-1.7 1.7-2.3l-1.2-1.7 1-.7 1.2 1.7c.8-.4 1.7-.5 2.6-.5s1.8.1 2.6.5l1.2-1.7 1 .7-1.2 1.7c.7.6 1.3 1.3 1.7 2.3l2-1 .5 1-2 1c.1.5.2 1 .2 1.5h-2c0-1.9-1.6-3.5-3.5-3.5S8.5 8.1 8.5 10h-2c0-.5.1-1 .2-1.5zM12 15v6h-1v-6h1zm2 0v6h-1v-6h1z" />
        </svg>
      );
    case 'YouTube':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={c}>
          <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5a3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
        </svg>
      );
    default:
      return null;
  }
}

export const platformBrandColors: Record<string, string> = {
  GitHub: 'text-bone-100',
  'X / Twitter': 'text-bone-100',
  Medium: 'text-bone-100',
  Telegram: 'text-[#229ED9]',
  TryHackMe: 'text-[#88cc14]',
  HackTheBox: 'text-[#9FEF00]',
  YesWeHack: 'text-[#FF6B35]',
  Bugcrowd: 'text-[#F26822]',
  YouTube: 'text-[#FF0000]',
};

export const platformBrandHoverColors: Record<string, string> = {
  GitHub: 'hover:text-bone-50',
  'X / Twitter': 'hover:text-bone-50',
  Medium: 'hover:text-bone-50',
  Telegram: 'hover:text-[#229ED9]',
  TryHackMe: 'hover:text-[#88cc14]',
  HackTheBox: 'hover:text-[#9FEF00]',
  YesWeHack: 'hover:text-[#FF6B35]',
  Bugcrowd: 'hover:text-[#F26822]',
  YouTube: 'hover:text-[#FF0000]',
};