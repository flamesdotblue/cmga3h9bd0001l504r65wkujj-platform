import React from 'react';
import Spline from '@splinetool/react-spline';
import { Trophy, Code, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gentle vignette and gradient glow layers */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-[#070816]" />
        <div className="pointer-events-none absolute -inset-x-10 top-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(217,70,239,0.35),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
            New: Cosmic Contests every weekend
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
            Master algorithms in a futuristic, cosmic playground
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
            Solve challenges, compete in real-time contests, and level up your problem-solving skills in an immersive galaxy of code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#practice" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(217,70,239,0.7)] hover:shadow-[0_0_60px_-8px_rgba(34,211,238,0.7)] transition">
              Start Practicing
            </a>
            <a href="#contests" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition">
              Explore Contests
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur">
            <Stat icon={Code} label="Problems" value="2400+" />
            <Stat icon={Trophy} label="Contests" value="Weekly" />
            <Stat icon={Sparkles} label="Difficulty" value="All Levels" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-3 py-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500/70 via-violet-500/70 to-cyan-400/70">
        <Icon className="h-4 w-4" />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-semibold">{value}</p>
        <p className="text-[11px] uppercase tracking-widest text-white/60">{label}</p>
      </div>
    </div>
  );
}
