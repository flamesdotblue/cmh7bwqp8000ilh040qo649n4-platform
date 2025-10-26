import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-zinc-300 font-inter antialiased selection:bg-blue-600/40 selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
