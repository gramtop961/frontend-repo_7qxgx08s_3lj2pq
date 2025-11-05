import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Showcase from './components/Showcase.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0618] via-[#0A0514] to-black text-white selection:bg-purple-500/30 selection:text-white">
      {/* Subtle cosmic background particles */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.08), transparent 60%)' }} />
      </div>

      <Hero />
      <Features />
      <Showcase />
      <Footer />
    </div>
  );
}
