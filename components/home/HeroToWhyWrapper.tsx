'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Hero } from './Hero';
import { TrustBar } from './TrustBar';
import { Stats } from './Stats';
import { WhyCyberGuard } from './WhyCyberGuard';
import { CyberBackgroundVideo } from '@/components/shared/CyberBackgroundVideo';

export function HeroToWhyWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Video starts crisp in Hero, then becomes smoothly blurred in WhyCyberGuard (around 0.5 - 0.95 progress)
  const blurAmount = useTransform(scrollYProgress, [0, 0.45, 0.60, 1], ['0px', '0px', '12px', '14px']);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.45, 0.60, 0.9, 1], [0.65, 0.60, 0.45, 0.40, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Seamless background video spanning from Hero through WhyCyberGuard */}
      <motion.div
        style={{
          filter: useTransform(blurAmount, (b) => `blur(${b})`),
          opacity: videoOpacity,
        }}
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-300"
      >
        <CyberBackgroundVideo videoOpacity={1} canvasOpacity={0.12} />
      </motion.div>

      {/* Sections rendered in order */}
      <div className="relative z-10">
        <Hero />
        <TrustBar />
        <Stats />
        <WhyCyberGuard />
      </div>
    </div>
  );
}
