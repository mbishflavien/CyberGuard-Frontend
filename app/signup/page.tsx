'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Building2, ArrowRight, Eye, EyeOff, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { Logo } from '@/components/shared/Logo';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AuroraBackground } from '@/components/shared/AuroraBackground';

export default function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCreated(true);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="relative flex items-center justify-center min-h-screen pt-32 pb-16 overflow-hidden">
        <AuroraBackground />
        <div className="absolute inset-0 bg-grid mask-fade-bottom opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-md mx-auto px-4 sm:px-6"
        >
          <div className="glass-strong rounded-3xl p-8 sm:p-10">
            {created ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-blue-400" />
                </div>
                <h1 className="font-display text-2xl font-bold mb-3">
                  Account created!
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
                  Welcome to CyberGuard, {form.name || 'there'}. We have sent a
                  verification link to{' '}
                  <span className="text-blue-500 dark:text-blue-400">{form.email || 'your email'}</span>.
                  Click the link to activate your account and start your 14-day
                  free trial.
                </p>
                <div className="glass rounded-xl p-4 w-full">
                  <div className="flex items-center gap-3 text-sm text-left">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Check your inbox for the verification email
                    </span>
                  </div>
                </div>
                <Link
                  href="/pricing"
                  className="mt-6 text-sm font-semibold text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                >
                  Continue to pricing
                </Link>
              </div>
            ) : (
            <>
              {/* Logo */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-blue-500/30 blur-md rounded-lg" />
                  <div className="relative">
                    <Logo className="w-10 h-10" />
                  </div>
                </div>
                <h1 className="font-display text-2xl font-bold mb-2">
                  Create your account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Start your 14-day free trial — no credit card required
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Adaeze Okonkwo"
                      className="pl-10 bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@company.com"
                      className="pl-10 bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="company"
                      required
                      value={form.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your organization"
                      className="pl-10 bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={form.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      placeholder="Create a strong password"
                      className="pl-10 pr-10 bg-background/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Minimum 8 characters with at least one number and one special character.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white hover:from-blue-600 hover:to-sky-500 font-semibold"
                >
                  {loading ? 'Creating account...' : 'Create account'}
                  {!loading && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>



              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                    No credit card
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                    14-day trial
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                    Cancel anytime
                  </span>
                </div>
              </div>
            </>
            )}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By creating an account, you agree to our{' '}
            <Link href="/terms" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
