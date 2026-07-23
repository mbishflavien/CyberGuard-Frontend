'use client';

import Link from 'next/link';
import { Shield, Twitter, Linkedin, Github, Globe, Mail, MapPin } from 'lucide-react';
import { Marquee } from '@/components/shared/Marquee';
import { Logo } from '@/components/shared/Logo';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', href: '/platform' },
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/platform#integrations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/resources' },
      { label: 'Developers', href: '/resources' },
      { label: 'Case Studies', href: '/resources' },
      { label: 'Blog', href: '/resources' },
      { label: 'Security', href: '/resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Partners', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Press', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/contact' },
      { label: 'Terms', href: '/contact' },
      { label: 'Compliance', href: '/contact' },
      { label: 'Status', href: '/contact' },
      { label: 'SLA', href: '/contact' },
    ],
  },
];

const marqueeItems = ['SOC 2', 'ISO 27001', 'PCI DSS', 'GDPR', 'POPIA', 'NDPR', 'NIST'];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 mask-fade-bottom pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-500/5 blur-[100px] pointer-events-none" />

      {/* Compliance marquee */}
      <div className="relative border-b border-border py-6">
        <Marquee speed="slow">
          {marqueeItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8 shrink-0">
              <Shield className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-sm font-mono text-slate-700 dark:text-slate-200 font-medium">{item}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Logo />
              <span className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Cyber<span className="text-blue-600 dark:text-blue-400">Guard</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed max-w-xs mb-6">
              Africa&apos;s first AI-native cybersecurity platform. One platform, zero
              blind spots, built for African businesses.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-200">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                hello@cyberguard.africa
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-200">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Lagos · Nairobi · Johannesburg
              </div>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
                { icon: Globe, label: 'Website' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} CyberGuard Technologies. All rights reserved.
            Built in Africa. Built for Africa.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
