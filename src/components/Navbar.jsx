import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-600 text-white">
              <Rocket className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <p className="text-base font-semibold tracking-tight">CosmicCode</p>
              <p className="text-[10px] uppercase tracking-widest text-white/60">Galactic Challenges</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#practice" className="text-white/80 hover:text-white transition">Practice</a>
            <a href="#contests" className="text-white/80 hover:text-white transition">Contests</a>
            <a href="#discuss" className="text-white/80 hover:text-white transition">Discuss</a>
            <a href="#premium" className="inline-flex items-center gap-1 text-amber-300/90 hover:text-amber-200 transition">
              <Star className="h-4 w-4 fill-current" /> Premium
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-white/15 px-3 text-sm text-white/90 hover:bg-white/5 transition">Sign in</button>
            <button className="inline-flex h-9 items-center rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-3 text-sm font-medium shadow-[0_0_24px_-6px_rgba(168,85,247,0.7)] hover:shadow-[0_0_36px_-6px_rgba(34,211,238,0.7)] transition">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
