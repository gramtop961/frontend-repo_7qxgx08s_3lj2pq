import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, User } from 'lucide-react';

export default function Showcase() {
  return (
    <section className="relative">
      {/* Testimonials */}
      <div className="relative mx-auto max-w-7xl px-6 py-16" id="testimonials">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold md:text-3xl">Real Results from Real Businesses.</h3>
          <p className="mt-2 text-purple-100/80">Floating words from those who automated with Flowgenix.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(600px circle at 30% 20%, rgba(168,85,247,0.25), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="mb-3 flex items-center gap-1 text-purple-200">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-purple-300 text-purple-300" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-purple-50">
                  “Flowgenix turned our missed calls into booked jobs. Our weekly revenue literally doubled.”
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                    <User className="h-4 w-4 text-purple-200" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Liam</p>
                    <p className="text-purple-200/70">Remodeling Pro</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="relative mx-auto max-w-7xl px-6 py-10" id="portfolio">
        <h3 className="text-2xl font-semibold md:text-3xl">Our Work Speaks for Itself.</h3>
        <p className="mt-2 text-purple-100/80">Every project blends design, AI, and automation into one seamless experience.</p>

        <div className="mt-8 overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="min-w-[18rem] flex-1 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl md:min-w-[22rem]"
              >
                <div className="h-40 rounded-xl bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 ring-1 ring-white/10" />
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">AI Website Preview</p>
                    <p className="text-xs text-purple-200/70">Conversion-first design</p>
                  </div>
                  <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-purple-100 backdrop-blur-md hover:bg-white/10">
                    View <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="relative mx-auto max-w-7xl px-6 py-16" id="team">
        <h3 className="text-2xl font-semibold md:text-3xl">The Visionaries Behind Flowgenix.</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Ava Sinclair', role: 'Creative Director', specialty: 'Futuristic UX & Motion' },
            { name: 'Noah Reyes', role: 'AI Systems Lead', specialty: 'Voice + Workflow Automation' },
            { name: 'Mia Patel', role: 'Product Strategist', specialty: 'Conversion & CX Architecture' },
          ].map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(168,85,247,0.15), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="h-32 w-full rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20" />
                <div className="mt-4">
                  <p className="text-lg font-medium">{m.name}</p>
                  <p className="text-sm text-purple-200/80">{m.role}</p>
                  <p className="mt-1 text-xs text-purple-200/70">{m.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
