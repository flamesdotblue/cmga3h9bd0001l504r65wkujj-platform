import React from 'react';
import { Code, Trophy, Shield, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Code,
    title: 'Practice Pathways',
    desc: 'Curated tracks from Data Structures to Advanced Algorithms with editorials and patterns.'
  },
  {
    icon: Trophy,
    title: 'Live Contests',
    desc: 'Compete in weekly cosmic contests with live leaderboards and rating updates.'
  },
  {
    icon: Shield,
    title: 'Robust Judge',
    desc: 'Fast, reliable judging with comprehensive test coverage and custom inputs.'
  },
  {
    icon: Sparkles,
    title: 'AI Hints',
    desc: 'Smart, step-by-step hints and solution breakdowns when you need a nudge.'
  }
];

export default function Features() {
  return (
    <section id="practice" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-[-10%] h-64 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.25),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to level up</h2>
          <p className="mt-3 text-white/70">From fundamentals to competitive programming, chart your journey through the galaxy of code.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>

        <div id="contests" className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Join the next Cosmic Contest</h3>
              <p className="mt-1 text-white/70">Sharpen your skills in a 90-minute arena. New problems every week.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-10px_rgba(34,211,238,0.7)] hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.7)] transition">Register Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-fuchsia-400/40 hover:bg-white/[0.07]">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl transition-opacity group-hover:opacity-70" />
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/70 via-violet-500/70 to-cyan-400/70">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/75">{desc}</p>
    </div>
  );
}
