import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const total = 3400; // total time of intro sequence
    const t = setTimeout(() => setShowIntro(false), total);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0b0f14] text-gray-300 font-inter selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <AnimatePresence>{showIntro && <IntroOverlay onDone={() => setShowIntro(false)} />}</AnimatePresence>

      <Navbar visible={!showIntro} />

      <main className="relative">
        <Hero show={!showIntro} />
        <Sections />
      </main>

      <Footer />
    </div>
  );
}

function IntroOverlay({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 3600);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b0f14]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mb-6 h-16 w-16 rounded-2xl bg-white/5 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.6)] ring-1 ring-white/10 flex items-center justify-center"
          aria-label="Obsidian Realty logo"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.5)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="text-2xl md:text-3xl tracking-wide font-semibold text-gray-200">Obsidian Realty</div>
          <div className="text-sm text-gray-400">Building Dreams, Crafting Spaces</div>
        </motion.div>

        <motion.div
          initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: 0.5,
            x: -((typeof window !== 'undefined' ? window.innerWidth : 1200) / 2 - 120),
            y: -((typeof window !== 'undefined' ? window.innerHeight : 800) / 2 - 64),
            opacity: 0.8,
          }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-300" />
            <div className="text-xl font-semibold text-gray-200">Obsidian Realty</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
