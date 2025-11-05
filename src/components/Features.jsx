import React from 'react';
import { motion } from 'framer-motion';
import { Phone, AlertTriangle, CheckCircle2, Bot, Globe, MessageSquare, Repeat, Cpu, Network, Building2, Hammer, Home, Broom, Scissors, Calendar, BarChart3, Map } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, duration: 0.6 } },
};
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function Features() {
  return (
    <section className="relative">
      {/* The Problem */}
      <div className="relative mx-auto max-w-7xl px-6 py-20" id="problem">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.h2 variants={item} className="text-2xl font-semibold tracking-tight text-purple-100 md:text-3xl">
            You’re Paying for Leads — But Losing Them Every Day.
          </motion.h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.div variants={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3 text-red-300">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-sm">Chaos</span>
              </div>
              <ul className="space-y-3 text-purple-100/80">
                <li>Missed calls go unanswered.</li>
                <li>Clients wait too long for replies.</li>
                <li>Outdated websites lose trust instantly.</li>
                <li>You work all day — but your systems don’t.</li>
              </ul>
              <div className="mt-6 flex items-center gap-2 text-xs text-red-200/70">
                <Phone className="h-4 w-4" />
                <span>Missed calls • Red notifications • Lost revenue</span>
              </div>
            </motion.div>
            <motion.div variants={item} className="relative overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3 text-purple-300">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm">Control</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-purple-100/90">
                <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/10">Auto-answer & book</div>
                <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/10">Instant follow-ups</div>
                <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/10">Smart website</div>
                <div className="rounded-xl bg-black/30 p-3 ring-1 ring-white/10">Live dashboard</div>
              </div>
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple-400/20 blur-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* The Flowgenix System */}
      <div className="relative mx-auto max-w-7xl px-6 py-10" id="system">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.h3 variants={item} className="text-2xl font-semibold md:text-3xl">
            Smart Systems That Sell for You.
          </motion.h3>
          <motion.p variants={item} className="mt-2 text-purple-100/80">
            Websites that convert. AI that books. Workflows that scale.
          </motion.p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Bot, title: 'AI Voice Agent', desc: 'Answers, books, updates your CRM' },
              { icon: Globe, title: 'Website Demo', desc: 'Modern, responsive, conversion-optimized' },
              { icon: MessageSquare, title: 'AI Chat Assistant', desc: 'Handles web & social DMs' },
              { icon: Repeat, title: 'Lead Follow-Up', desc: 'SMS + email automations' },
              { icon: Calendar, title: 'Custom Workflows', desc: 'Quotes, onboarding, reminders' },
              { icon: BarChart3, title: 'Live Dashboard', desc: 'Know what’s working at a glance' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={item}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-transform"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 p-3 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-purple-200" />
                  </div>
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="mt-1 text-sm text-purple-100/80">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why It Works */}
      <div className="relative mx-auto max-w-7xl px-6 py-16" id="why">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.h3 variants={item} className="text-2xl font-semibold md:text-3xl">
            You Don’t Need More Apps — You Need One Smart System.
          </motion.h3>
          <motion.p variants={item} className="mt-2 max-w-2xl text-purple-100/80">
            Flowgenix replaces scattered tools with one intelligent hub that connects every part of your business.
          </motion.p>

          <motion.div variants={item} className="relative mt-10 grid place-items-center">
            <div className="relative h-72 w-full max-w-3xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 blur-3xl" />
              <div className="relative mx-auto grid h-full w-full place-items-center">
                <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl ring-1 ring-purple-400/30">
                  <span className="text-sm text-purple-100">Flowgenix</span>
                  <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-purple-400/15" />
                </div>
                <div className="pointer-events-none absolute inset-0">
                  {/* Connections */}
                  {['Calls', 'Website', 'CRM', 'Reminders', 'Payments'].map((label, idx) => (
                    <div key={label} className={`absolute text-xs text-purple-100/80 ${[
                      'left-4 top-8',
                      'right-6 top-12',
                      'left-10 bottom-14',
                      'right-8 bottom-10',
                      'top-1/2 -translate-y-1/2 left-2',
                    ][idx]}`}>
                      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-xl">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Who It’s For */}
      <div className="relative mx-auto max-w-7xl px-6 pb-8" id="industries">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.h3 variants={item} className="text-2xl font-semibold md:text-3xl">
            Built for Service Businesses That Move Fast.
          </motion.h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Building2, label: 'Deck Builders' },
              { icon: Hammer, label: 'Contractors' },
              { icon: Home, label: 'Realtors' },
              { icon: Scissors, label: 'Salons' },
              { icon: Broom, label: 'Cleaners' },
              { icon: Map, label: 'Remodelers' },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                variants={item}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-purple-400/20 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="mb-2 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-purple-300" />
                  <p className="font-medium">{label}</p>
                </div>
                <p className="text-sm text-purple-100/80">Typical uplift: +42% more bookings</p>
                <div className="mt-3 h-1 w-full origin-left scale-x-0 rounded bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="relative mx-auto max-w-7xl px-6 py-16" id="services">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
          <motion.h3 variants={item} className="text-2xl font-semibold md:text-3xl">
            AI & Automation Services to Scale Your Business.
          </motion.h3>
          <motion.p variants={item} className="mt-2 text-purple-100/80">
            From smart websites to full AI systems — everything you need to automate and grow.
          </motion.p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Phone, title: 'AI Voice & Appointment Agents', desc: 'Answer calls 24/7, book instantly.' },
              { icon: Globe, title: 'Custom Website Design', desc: 'Free demo before you pay. Stunning & high-conversion.' },
              { icon: Repeat, title: 'Automated Follow-Up', desc: 'No missed messages, no no-shows.' },
              { icon: Calendar, title: 'Workflow Automation', desc: 'Estimates, reports, reviews auto-handled.' },
              { icon: Map, title: 'Route Optimization', desc: 'Smart job scheduling & real-time tracking.' },
              { icon: Cpu, title: 'AI Data Insights', desc: 'Dashboards that reveal your growing profit.' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={item}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 ring-1 ring-purple-400/40 transition-opacity group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 p-3 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-purple-200" />
                  </div>
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="mt-1 text-sm text-purple-100/80">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
