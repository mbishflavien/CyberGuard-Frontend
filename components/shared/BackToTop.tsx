'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-slate-900/90 dark:bg-slate-950/90 text-white border border-slate-800 dark:border-white/10 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500 hover:text-blue-400 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50"
        >
          <ChevronUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-slate-900/95 border border-slate-800 text-[10px] font-mono text-slate-300 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
            Back To Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
