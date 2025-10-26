import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Building2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Interior Design', href: '#interior' },
  { label: 'Home Loans', href: '#loans' },
  { label: 'Contact', href: '#contact' },
  { label: 'Admin', href: '#admin' },
];

export default function Navbar() {
  const controls = useAnimation();
  const navControls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });
      await controls.start({ scale: 0.6, x: '-38vw', y: '-32vh', transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } });
      await navControls.start({ opacity: 1, transition: { duration: 0.6 } });
    };
    sequence();
  }, [controls, navControls]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 blur-md rounded-xl bg-blue-500/20" />
              <div className="relative grid place-items-center size-10 rounded-xl bg-white/5 backdrop-blur border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] text-blue-300">
                <Building2 className="size-5" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-zinc-100 font-semibold tracking-wide">Obsidian Realty</div>
              <div className="text-xs text-zinc-400">Tech-Luxury Real Estate</div>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            animate={navControls}
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 text-sm shadow-lg shadow-blue-900/30 hover:from-blue-500 hover:to-blue-400 transition-colors"
            >
              Get in touch
            </a>
          </motion.nav>
        </div>
      </div>
    </div>
  );
}
