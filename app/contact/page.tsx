'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { Navbar } from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import { PageHero } from '@/components/shared/PageHero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const offices = [
  {
    city: 'Lagos',
    country: 'Nigeria',
    address: '12 Adeola Odeon Street, Victoria Island, Lagos',
    phone: '+234 1 234 5678',
  },
  {
    city: 'Nairobi',
    country: 'Kenya',
    address: 'Riverside Drive, Westlands, Nairobi',
    phone: '+254 20 123 4567',
  },
  {
    city: 'Johannesburg',
    country: 'South Africa',
    address: 'Sandton City Office Towers, Sandton, Johannesburg',
    phone: '+27 11 234 5678',
  },
];

const interests = [
  'General inquiry',
  'Request a demo',
  'Pricing & plans',
  'Technical questions',
  'Partnership opportunities',
  'Media & press',
  'Careers',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Let&apos;s talk{' '}
              <span className="text-gradient-blue">security.</span>
            </>
          }
          description="Whether you are ready to start a trial, have questions about pricing, or want to explore a partnership — our team is here to help. We typically respond within one business day."
        />

        {/* Contact Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <div className="glass-strong rounded-3xl p-8 sm:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center py-16">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 mb-6">
                        <CheckCircle2 className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3">
                        Message sent successfully
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
                        Thank you for reaching out, {form.name || 'there'}. Our
                        team will get back to you within one business day. In the
                        meantime, feel free to explore our platform and
                        resources.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: '',
                            email: '',
                            company: '',
                            interest: '',
                            message: '',
                          });
                        }}
                        variant="outline"
                        className="glass border-white/10"
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10">
                          <MessageSquare className="w-5 h-5 text-blue-400" />
                        </div>
                        <h2 className="font-display text-2xl font-bold">
                          Send us a message
                        </h2>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full name *</Label>
                            <Input
                              id="name"
                              required
                              value={form.name}
                              onChange={(e) =>
                                handleChange('name', e.target.value)
                              }
                              placeholder="Adaeze Okonkwo"
                              className="bg-background/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Work email *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) =>
                                handleChange('email', e.target.value)
                              }
                              placeholder="adaeze@company.com"
                              className="bg-background/50"
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input
                              id="company"
                              value={form.company}
                              onChange={(e) =>
                                handleChange('company', e.target.value)
                              }
                              placeholder="Your organization"
                              className="bg-background/50"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="interest">
                              What are you interested in?
                            </Label>
                            <Select
                              value={form.interest}
                              onValueChange={(value) =>
                                handleChange('interest', value)
                              }
                            >
                              <SelectTrigger className="bg-background/50">
                                <SelectValue placeholder="Select a topic" />
                              </SelectTrigger>
                              <SelectContent>
                                {interests.map((interest) => (
                                  <SelectItem key={interest} value={interest}>
                                    {interest}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            required
                            value={form.message}
                            onChange={(e) =>
                              handleChange('message', e.target.value)
                            }
                            placeholder="Tell us about your security challenges, what you are looking for, or any questions you have..."
                            rows={6}
                            className="bg-background/50 resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white hover:from-blue-600 hover:to-sky-500 font-semibold"
                        >
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">
                          By submitting this form, you agree to our privacy
                          policy. We will never share your information.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                {/* Direct contact */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold mb-5">
                    Direct contact
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@cyberguard.africa"
                      className="flex items-center gap-3 group"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <Mail className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                          hello@cyberguard.africa
                        </p>
                      </div>
                    </a>
                    <a
                      href="tel:+23412345678"
                      className="flex items-center gap-3 group"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                        <Phone className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Phone</p>
                        <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                          +234 1 234 5678
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Offices */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="font-display text-lg font-bold mb-5">
                    Our offices
                  </h3>
                  <div className="space-y-5">
                    {offices.map((office) => (
                      <div key={office.city} className="flex items-start gap-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10 flex-shrink-0">
                          <MapPin className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">
                            {office.city}, {office.country}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                            {office.address}
                          </p>
                          <p className="text-xs text-blue-400 mt-1">
                            {office.phone}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Response time */}
                <div className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                    <span className="text-sm font-medium">
                      We are online right now
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team typically responds within one business day. For
                    urgent security incidents, call us directly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
