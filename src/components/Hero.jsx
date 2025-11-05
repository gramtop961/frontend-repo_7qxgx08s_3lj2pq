import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Headphones } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      {/* Animated depth lighting / neon mist */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-24 h-72 bg-gradient-to-b from-purple-500/30 via-fuchsia-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-8 md:pt-28 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md">
              <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              <span className="text-xs tracking-wide text-purple-200/90">AI automation for local businesses</span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-br from-purple-200 via-white to-purple-300 bg-clip-text text-transparent">
                Turn Missed Calls & Lost Leads into Booked Clients — 100% on Autopilot.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base text-purple-100/80 md:text-lg">
              Flowgenix builds intelligent AI websites that answer calls, book jobs, and follow up with clients — even while you sleep.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400/60 md:px-6 md:py-4 md:text-base"
              >
                <Rocket className="h-5 w-5" />
                <span>🚀 Get My Free Website Demo</span>
              </a>
              <a
                href="#agent"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-400/30 bg-white/5 px-5 py-3 text-sm font-medium text-purple-100 backdrop-blur-md transition-colors hover:bg-white/10 md:px-6 md:py-4 md:text-base"
              >
                <Headphones className="h-5 w-5 text-purple-300" />
                <span>🎧 See the AI Agent in Action</span>
              </a>
            </div>
          </motion.div>

          {/* Visuals: Spline + phone mock + dashboard fade */}
          <div className="relative h-[28rem] w-full md:h-[32rem] lg:h-[36rem]">
            {/* Spline scene */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/10 to-transparent">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Overlays should not block Spline interaction */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
            </div>

            {/* Phone UI mock */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute right-1/2 top-10 w-60 -translate-x-2 rounded-3xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl shadow-2xl shadow-purple-900/30 md:right-6 md:top-8 md:w-64"
            >
              <div className="mx-auto h-4 w-24 rounded-full bg-white/20" />
              <div className="mt-3 rounded-2xl bg-black/60 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500">
                    <span className="absolute inset-0 animate-ping rounded-full bg-purple-300/40" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">AI Voice Agent</p>
                    <p className="text-xs text-purple-200/70">“Hi! Need a quote or want to book a job?”</p>
                  </div>
                </div>
                {/* Voice waves */}
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-8 w-1 rounded bg-gradient-to-b from-purple-300 to-fuchsia-400"
                      style={{
                        transformOrigin: 'bottom',
                        animation: `pulseBar 1.4s ease-in-out ${i * 0.03}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-white/10 p-3 text-xs ring-1 ring-white/10">
                  <p className="text-purple-200/80">Next booking</p>
                  <p className="mt-1 text-white">Tue 2:30 PM</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 text-xs ring-1 ring-white/10">
                  <p className="text-purple-200/80">Leads</p>
                  <p className="mt-1 text-white">+12 this week</p>
                </div>
              </div>
            </motion.div>

            {/* Dashboard glass panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 right-6 hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl ring-1 ring-white/10 md:block"
            >
              <div className="flex items-center justify-between text-sm text-purple-100/80">
                <span>Bookings</span>
                <span>Response time</span>
                <span>Follow-ups</span>
              </div>
              <div className="mt-3 h-28 w-full rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20" />
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulseBar {
          0%, 100% { transform: scaleY(0.3); opacity: 0.7; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
