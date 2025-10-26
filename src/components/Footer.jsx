import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-zinc-400 text-sm">© {new Date().getFullYear()} Obsidian Realty. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <a href="#home" className="hover:text-zinc-200">Home</a>
            <a href="#projects" className="hover:text-zinc-200">Projects</a>
            <a href="#contact" className="hover:text-zinc-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
