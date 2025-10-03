import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} CosmicCode. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#discuss" className="hover:text-white">Discuss</a>
            <a href="#premium" className="hover:text-white">Premium</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
