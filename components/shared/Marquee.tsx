'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: ReactNode;
  speed?: 'slow' | 'normal' | 'fast';
  reverse?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  speed = 'normal',
  reverse = false,
  className = '',
  pauseOnHover = true,
}: MarqueeProps) {
  const speedClass = {
    slow: 'animate-[marquee_60s_linear_infinite]',
    normal: 'animate-[marquee_40s_linear_infinite]',
    fast: 'animate-[marquee_25s_linear_infinite]',
  }[speed];

  return (
    <div
      className={cn(
        'relative flex overflow-hidden mask-fade-edges',
        className
      )}
    >
      <div
        className={cn(
          'flex gap-8 shrink-0',
          reverse ? 'animate-marquee-reverse' : speedClass,
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
