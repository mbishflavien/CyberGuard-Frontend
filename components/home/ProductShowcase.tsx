'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  MonitorPlay,
  LayoutDashboard,
  ShieldCheck,
  Radar,
  Bot,
  Siren,
  Database,
  EyeOff,
  TrendingUp,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Cloud,
  Network,
} from 'lucide-react';

const products = [
  {
    icon: MonitorPlay,
    name: 'SOC Workspace',
    description: 'Analyst-first interface with triage queues, investigation timelines, and collaborative case management.',
    preview: 'soc',
  },
  {
    icon: LayoutDashboard,
    name: 'Executive Dashboard',
    description: 'Board-ready metrics, risk scores, and trend analytics — translated from technical signals to business impact.',
    preview: 'executive',
  },
  {
    icon: ShieldCheck,
    name: 'Compliance Dashboard',
    description: 'Continuous monitoring against ISO 27001, SOC 2, PCI DSS, GDPR, POPIA, NDPR, and NIST frameworks.',
    preview: 'compliance',
  },
  {
    icon: Radar,
    name: 'Threat Intelligence',
    description: 'Real-time feeds enriched with African threat context. IOCs, TTPs, and proactive hunting.',
    preview: 'threat',
  },
  {
    icon: Bot,
    name: 'AI Copilot',
    description: 'Natural language queries. Ask "show me all lateral movement in the last 24h" and get instant answers.',
    preview: 'copilot',
  },
  {
    icon: Siren,
    name: 'Incident Response',
    description: 'SOAR playbooks automate containment, isolation, and remediation with human-in-the-loop approval.',
    preview: 'incident',
  },
  {
    icon: Database,
    name: 'Asset Inventory',
    description: 'Automated discovery and classification of every asset — endpoints, cloud, IoT, and shadow IT.',
    preview: 'assets',
  },
  {
    icon: EyeOff,
    name: 'Dark Web Monitoring',
    description: 'Continuous scanning of dark web forums for leaked credentials, data breaches, and brand impersonation.',
    preview: 'darkweb',
  },
];

function PreviewPanel({ type }: { type: string }) {
  const previews: Record<string, React.ReactNode> = {
    soc: (
      <div className="space-y-2">
        {[
          { sev: 'Critical', title: 'Suspicious PowerShell execution on FIN-WS-042', time: '2m ago', color: 'red' },
          { sev: 'High', title: 'C2 beacon detected on 10.0.12.45', time: '8m ago', color: 'amber' },
          { sev: 'Medium', title: 'Unusual outbound traffic from HR subnet', time: '15m ago', color: 'blue' },
        ].map((alert) => (
          <div key={alert.title} className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/5">
            <span className={`text-xs font-mono px-2 py-0.5 rounded ${
              alert.color === 'red' ? 'bg-red-500/15 text-red-400' :
              alert.color === 'amber' ? 'bg-amber-500/15 text-amber-400' :
              'bg-blue-500/15 text-blue-400'
            }`}>{alert.sev}</span>
            <span className="text-sm flex-1 truncate">{alert.title}</span>
            <span className="text-xs text-muted-foreground">{alert.time}</span>
          </div>
        ))}
      </div>
    ),
    executive: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Risk Score', value: '23', trend: '-12%', icon: TrendingUp },
            { label: 'Open Incidents', value: '4', trend: '-2', icon: AlertTriangle },
            { label: 'Compliance', value: '94%', trend: '+3%', icon: CheckCircle2 },
          ].map((m) => (
            <div key={m.label} className="glass rounded-lg p-3">
              <div className="text-xs text-muted-foreground">{m.label}</div>
              <div className="font-display text-2xl font-bold mt-1">{m.value}</div>
              <div className="text-xs text-emerald-400 mt-1">{m.trend}</div>
            </div>
          ))}
        </div>
        <div className="glass rounded-lg p-4">
          <div className="text-xs text-muted-foreground mb-2">Threat Trend (30 days)</div>
          <div className="flex items-end gap-1 h-20">
            {[40, 65, 45, 80, 55, 70, 35, 60, 50, 75, 45, 30, 55, 40].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-blue-500/20 to-sky-400/60 rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    ),
    compliance: (
      <div className="space-y-2">
        {[
          { name: 'ISO 27001', score: 94, status: 'Pass' },
          { name: 'SOC 2', score: 98, status: 'Pass' },
          { name: 'PCI DSS', score: 87, status: 'Pass' },
          { name: 'POPIA', score: 92, status: 'Pass' },
          { name: 'GDPR', score: 89, status: 'Pass' },
          { name: 'NDPR', score: 91, status: 'Pass' },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/3">
            <span className="text-sm font-medium w-20">{c.name}</span>
            <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${c.score}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
              />
            </div>
            <span className="text-sm font-mono text-blue-400 w-10 text-right">{c.score}%</span>
          </div>
        ))}
      </div>
    ),
    threat: (
      <div className="space-y-3">
        <div className="glass rounded-lg p-3">
          <div className="text-xs text-muted-foreground mb-2">Active Threat Actors</div>
          {[
            { name: 'APT-29', origin: 'Eastern Europe', targets: 12 },
            { name: 'Lazarus Group', origin: 'East Asia', targets: 8 },
            { name: 'Conti', origin: 'Unknown', targets: 15 },
          ].map((t) => (
            <div key={t.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.origin}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-mono text-red-400">{t.targets}</div>
                <div className="text-xs text-muted-foreground">targets</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    copilot: (
      <div className="space-y-3">
        <div className="glass rounded-lg p-3 ml-8">
          <div className="text-xs text-muted-foreground mb-1">Analyst</div>
          <div className="text-sm">Show all lateral movement attempts in the last 24 hours</div>
        </div>
        <div className="glass rounded-lg p-3 bg-blue-500/5 border-blue-500/10">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-400 font-medium">CyberGuard AI</span>
          </div>
          <div className="text-sm leading-relaxed">
            Found <span className="text-blue-400 font-mono">14</span> lateral movement attempts across 3 subnets. 2 high-confidence detections isolated automatically. View timeline?
          </div>
        </div>
      </div>
    ),
    incident: (
      <div className="space-y-2">
        {[
          { step: 'Detection', status: 'done', time: '14:02:33' },
          { step: 'Triage', status: 'done', time: '14:02:45' },
          { step: 'Containment', status: 'done', time: '14:03:12' },
          { step: 'Isolation', status: 'active', time: '14:03:28' },
          { step: 'Remediation', status: 'pending', time: '—' },
        ].map((s) => (
          <div key={s.step} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/3">
            <div className={`w-2 h-2 rounded-full ${
              s.status === 'done' ? 'bg-emerald-400' :
              s.status === 'active' ? 'bg-blue-400 animate-pulse-glow' :
              'bg-white/10'
            }`} />
            <span className="text-sm flex-1">{s.step}</span>
            <span className="text-xs font-mono text-muted-foreground">{s.time}</span>
          </div>
        ))}
      </div>
    ),
    assets: (
      <div className="space-y-2">
        {[
          { type: 'Endpoints', count: '1,247', icon: MonitorPlay },
          { type: 'Cloud Assets', count: '384', icon: Cloud },
          { type: 'Network Devices', count: '92', icon: Network },
          { type: 'IoT Devices', count: '156', icon: Activity },
        ].map((a) => (
          <div key={a.type} className="flex items-center gap-3 p-3 rounded-lg bg-white/3">
            <a.icon className="w-4 h-4 text-blue-400" />
            <span className="text-sm flex-1">{a.type}</span>
            <span className="font-mono text-blue-400">{a.count}</span>
          </div>
        ))}
      </div>
    ),
    darkweb: (
      <div className="space-y-2">
        {[
          { type: 'Leaked credentials', source: 'darkforum.onion', severity: 'High' },
          { type: 'Data breach exposure', source: 'breach-db.ws', severity: 'Critical' },
          { type: 'Brand impersonation', source: 'telegram channel', severity: 'Medium' },
        ].map((d) => (
          <div key={d.type} className="flex items-center gap-3 p-3 rounded-lg bg-white/3 border border-white/5">
            <EyeOff className="w-4 h-4 text-purple-400" />
            <div className="flex-1">
              <div className="text-sm">{d.type}</div>
              <div className="text-xs text-muted-foreground font-mono">{d.source}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded ${
              d.severity === 'Critical' ? 'bg-red-500/15 text-red-400' :
              d.severity === 'High' ? 'bg-amber-500/15 text-amber-400' :
              'bg-blue-500/15 text-blue-400'
            }`}>{d.severity}</span>
          </div>
        ))}
      </div>
    ),
  };

  return previews[type] || null;
}

export function ProductShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Product Showcase"
          title={
            <>
              Eight modules. <span className="text-gradient-blue">One experience.</span>
            </>
          }
          description="Every CyberGuard module is designed to feel native to the platform — shared intelligence, unified workflows, and consistent design language."
        />

        <div className="mt-16 grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Product list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {products.map((product, i) => (
              <motion.button
                key={product.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all flex-shrink-0 text-left ${
                  active === i
                    ? 'glass-strong border-blue-500/20'
                    : 'glass border-white/5 hover:bg-white/5'
                }`}
              >
                <product.icon className={`w-5 h-5 flex-shrink-0 ${active === i ? 'text-blue-400' : 'text-muted-foreground'}`} />
                <span className={`text-sm font-medium whitespace-nowrap ${active === i ? '' : 'text-muted-foreground'}`}>
                  {product.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Preview with flip/fade transition */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="glass-strong rounded-2xl p-6 relative overflow-hidden min-h-[460px] md:min-h-[400px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/10">
                  {(() => {
                    const Icon = products[active].icon;
                    return <Icon className="w-5 h-5 text-blue-400" />;
                  })()}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{products[active].name}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {products[active].description}
              </p>
              <div className="rounded-xl bg-secondary/50 border border-white/5 p-4">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                  <div className="ml-2 text-xs text-muted-foreground font-mono">cyberguard.app/{products[active].preview}</div>
                </div>
                <PreviewPanel type={products[active].preview} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
