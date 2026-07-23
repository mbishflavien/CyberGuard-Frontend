import { cn } from '@/lib/utils';
import { useState, useId } from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const [hasError, setHasError] = useState(false);
  const id = useId();

  if (!hasError) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src="https://lh3.googleusercontent.com/d/1AL6V7jWdSsZMHmk6onK2a817-Iqi94-E"
        alt="CyberGuard Logo"
        onError={() => setHasError(true)}
        className={cn('w-8 h-8 object-contain select-none', className)}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-7 h-7', className)}
      aria-label="CyberGuard logo"
    >
      <defs>
        <linearGradient id={`shield-${id}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="0.5" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id={`inner-${id}`} x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      <path
        d="M20 2 L34 8 L34 20 C34 28 28 34 20 38 C12 34 6 28 6 20 L6 8 Z"
        fill={`url(#shield-${id})`}
        fillOpacity="0.15"
        stroke={`url(#shield-${id})`}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 14 C12 14 10 16.5 10 20 C10 23.5 12 26 15 26 C17 26 18.5 25 19.5 23.5"
        stroke={`url(#inner-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M25 14 C28 14 30 16.5 30 20 C30 23.5 28 26 25 26 C23 26 21.5 25 20.5 23.5"
        stroke={`url(#inner-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="20" cy="20" r="1.5" fill={`url(#inner-${id})`} />
    </svg>
  );
}

export function LogoFull({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <Logo />
      <span className="font-display text-xl font-bold tracking-tight">
        Cyber<span className="text-blue-500 dark:text-blue-400">Guard</span>
      </span>
    </div>
  );
}
