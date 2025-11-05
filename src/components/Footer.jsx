import React from 'react';
import { Rocket, Mail, Phone, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-purple-500/20 to-transparent blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-fuchsia-600 ring-1 ring-white/10">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Flowgenix</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-purple-200/80">AI automation + web systems that turn missed calls into booked clients.</p>
            <div className="mt-4 flex gap-3 text-purple-200/80">
              <a href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-purple-100">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-purple-200/80">
              <li><a href="#system" className="hover:text-purple-100">Platform</a></li>
              <li><a href="#services" className="hover:text-purple-100">Services</a></li>
              <li><a href="#portfolio" className="hover:text-purple-100">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-purple-100">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-purple-100">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-purple-200/80">
              <li><a href="#team" className="hover:text-purple-100">Team</a></li>
              <li><a href="#" className="hover:text-purple-100">Blog</a></li>
              <li><a href="#" className="hover:text-purple-100">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-100">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-purple-100">Contact</p>
            <div className="mt-3 space-y-2 text-sm text-purple-200/80">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@flowgenix.ai</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123-4567</p>
            </div>
            <a href="#demo" className="mt-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]">
              Get My Free Website Demo
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-purple-200/70 md:flex-row">
          <p>© {new Date().getFullYear()} Flowgenix. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-purple-100">Privacy</a>
            <a href="#" className="hover:text-purple-100">Terms</a>
            <a href="#" className="hover:text-purple-100">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
