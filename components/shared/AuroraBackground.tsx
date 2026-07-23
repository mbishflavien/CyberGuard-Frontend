'use client';

import { motion } from 'framer-motion';

interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute -top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/8 blur-[140px] animate-aurora" />
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-500/6 blur-[140px] animate-aurora"
        style={{ animationDelay: '3s' }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] animate-aurora"
        style={{ animationDelay: '6s' }}
      />
    </div>
  );
}

export function GridBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 bg-grid mask-fade-bottom pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, hsl(215 40% 6%) 80%)',
        }}
      />
    </div>
  );
}
