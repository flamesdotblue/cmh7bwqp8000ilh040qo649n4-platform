import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ show }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f14]/50 via-[#0b0f14]/60 to-[#0b0f14]" />
      </div>

      <div ref={containerRef} className="relative z-10 mx-auto w-[92%] max-w-7xl pt-40 pb-24">
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur">
                Technology. Luxury. Precision.
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-gray-100">
                Building Dreams, Crafting Spaces
              </h1>
              <p className="mt-4 text-gray-400 max-w-xl">
                Experience cinematic real estate with Obsidian Realty. Meticulous architecture, immersive interiors, and seamless financing — all in one premium journey.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(59,130,246,0.40)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)] transition-shadow">
                  Explore Projects
                </a>
                <a href="#contact" className="rounded-xl px-5 py-3 text-sm font-medium text-gray-200 ring-1 ring-white/15 hover:bg-white/10">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto w-[92%] max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-3 pb-8">
          {["Apartments","Villas","Commercial","Interiors"].map((item) => (
            <div key={item} className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 px-4 py-3 text-sm text-gray-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
