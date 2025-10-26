import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  const headline = useMemo(() => (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="text-center text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-100"
    >
      Building Dreams, Crafting Spaces
    </motion.h1>
  ), []);

  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,0,0,0.0),rgba(11,15,20,0.8)_70%,rgba(11,15,20,1)_100%)]" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-end pb-24 px-6">
        {headline}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="mt-4 text-center max-w-2xl text-zinc-400"
        >
          Premium residences and commercial spaces designed with precision, technology, and timeless aesthetics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="mt-8 flex gap-4"
        >
          <a href="#projects" className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 shadow-lg shadow-blue-900/30 hover:from-blue-500 hover:to-blue-400 transition-colors">Explore Projects</a>
          <a href="#about" className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-6 py-3 text-zinc-200 hover:bg-white/10 transition-colors">About Us</a>
        </motion.div>
      </div>
    </section>
  );
}
