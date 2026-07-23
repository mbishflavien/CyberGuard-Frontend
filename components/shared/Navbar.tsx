'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/Logo';
import { ThemeToggle } from '@/components/shared/ThemeToggle';

const navLinks = [
  { href: '/platform', label: 'Platform' },
  { href: '/products', label: 'Products' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/industries', label: 'Industries' },
  { href: '/resources', label: 'Resources' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass-strong border-b border-border py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 blur-md rounded-lg group-hover:bg-blue-400/50 transition-colors" />
              <div className="relative">
                <Logo />
              </div>
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Cyber<span className="text-blue-500 dark:text-blue-400">Guard</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-foreground/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/start-trial"
              className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-sky-400 text-white px-5 py-2.5 rounded-lg hover:shadow-[0_0_30px_-5px_hsla(199,89%,48%,0.6)] transition-all"
            >
              Get Started
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 origin-left"
        />
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-40 glass-strong border-b border-border lg:hidden pt-20 pb-6 px-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link
                href="/start-trial"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-semibold bg-gradient-to-r from-blue-500 to-sky-400 text-white rounded-lg text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
