import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#interior', label: 'Interior Design' },
  { href: '#loans', label: 'Home Loans' },
  { href: '#contact', label: 'Contact' },
  { href: '#admin', label: 'Admin' },
];

export default function Navbar({ visible = true }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!visible) setOpen(false);
  }, [visible]);

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-40">
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="pointer-events-auto mx-auto mt-4 w-[95%] md:w-[92%] lg:w-[88%] rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-3">
              <a href="#home" className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-300 shadow-[0_0_24px_rgba(59,130,246,0.5)]" />
                <span className="font-semibold tracking-wide text-gray-200">Obsidian Realty</span>
              </a>

              <div className="hidden md:flex items-center gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <button
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10 text-gray-200"
                aria-label="Menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden px-4 pb-4"
                >
                  <div className="grid grid-cols-1 gap-2">
                    {links.map((l) => (
                      <a
                        onClick={() => setOpen(false)}
                        key={l.href}
                        href={l.href}
                        className="px-3 py-2 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
