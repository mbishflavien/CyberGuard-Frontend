'use client';

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={cn('perspective-1000 cursor-pointer h-full w-full', className)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full preserve-3d"
      >
        <div className="absolute inset-0 backface-hidden h-full w-full">
          {front}
        </div>
        <div className="absolute inset-0 backface-hidden rotate-y-180 h-full w-full">
          {back}
        </div>
      </motion.div>
    </div>
  );
}
