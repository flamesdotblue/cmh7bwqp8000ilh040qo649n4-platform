import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, User, Building, Banknote, Mail, Shield } from 'lucide-react';

const SectionHeader = ({ eyebrow, title, align = 'left' }) => (
  <div className={`mb-10 ${align === 'center' ? 'text-center' : ''}`}>
    <div className="text-xs uppercase tracking-[0.2em] text-blue-400/80">{eyebrow}</div>
    <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-zinc-100">{title}</h2>
  </div>
);

function GlassCard({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${className}`}>
      {children}
    </div>
  );
}

function AboutSection() {
  const team = [
    { id: 1, name: 'Ava Morgan', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', bio: 'Architect-turned-entrepreneur with a passion for tech-driven luxury spaces.' },
    { id: 2, name: 'Noah Patel', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop', bio: 'Leads interiors with minimalist aesthetics and cinematic lighting.' },
    { id: 3, name: 'Luna Chen', role: 'Project Director', img: 'https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?q=80&w=1200&auto=format&fit=crop', bio: 'Delivering complex developments with precision and empathy.' },
    { id: 4, name: 'Ethan Rossi', role: 'Finance & Loans', img: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&w=1200&auto=format&fit=crop', bio: 'Structuring smart finance solutions with partner banks.' },
  ];

  const [selected, setSelected] = useState(team[0]);

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeader eyebrow="About" title="Obsidian Realty" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <GlassCard className="col-span-2 p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {team.map((m) => (
              <button key={m.id} onClick={() => setSelected(m)} className={`group relative overflow-hidden rounded-xl border ${selected.id === m.id ? 'border-blue-500/60' : 'border-white/10'} bg-white/5 hover:bg-white/10 transition-all`}>
                <img src={m.img} alt={m.name} className="h-36 w-full object-cover" />
                <div className="p-3 text-left">
                  <div className="text-sm text-zinc-100">{m.name}</div>
                  <div className="text-xs text-zinc-400">{m.role}</div>
                </div>
              </button>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="flex items-start gap-4">
            <img src={selected.img} alt={selected.name} className="size-20 rounded-lg object-cover" />
            <div>
              <div className="text-zinc-100 font-medium">{selected.name}</div>
              <div className="text-sm text-zinc-400">{selected.role}</div>
              <p className="mt-3 text-sm text-zinc-300/90">{selected.bio}</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const categories = ['All', 'Apartments', 'Villas', 'Commercial'];
  const [active, setActive] = useState('All');
  const items = [
    { id: 1, title: 'Skyline Residences', cat: 'Apartments', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, title: 'Aurora Towers', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1558980664-10ebee3c487b?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, title: 'Golden Crest Villas', cat: 'Villas', img: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, title: 'Obsidian Quarters', cat: 'Apartments', img: 'https://images.unsplash.com/photo-1512914890250-8178e7f9b9de?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, title: 'Marina Business Bay', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop' },
    { id: 6, title: 'Elysian Villas', cat: 'Villas', img: 'https://images.unsplash.com/photo-1459535653751-d571815e906b?q=80&w=1200&auto=format&fit=crop' },
  ];
  const filtered = active === 'All' ? items : items.filter((i) => i.cat === active);

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeader eyebrow="Projects" title="Signature Developments" />
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button key={c} onClick={() => setActive(c)} className={`rounded-xl border px-4 py-2 text-sm transition-all ${active === c ? 'bg-blue-600 text-white border-blue-500' : 'bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10'}`}>
            <div className="flex items-center gap-2"><Filter className="size-4" />{c}</div>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((card) => (
          <motion.div key={card.id} whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="relative">
              <img src={card.img} alt={card.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-zinc-100 font-medium">{card.title}</div>
                <div className="text-xs text-zinc-400">{card.cat}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function InteriorSection() {
  const [slider, setSlider] = useState(50);
  const before = 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1600&auto=format&fit=crop';
  const after = 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop';

  return (
    <section id="interior" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeader eyebrow="Interior Designing" title="Before / After Showcase" />
      <GlassCard className="p-6">
        <div className="relative w-full overflow-hidden rounded-xl">
          <img src={after} alt="after" className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0" style={{ width: slider + '%', overflow: 'hidden' }}>
            <img src={before} alt="before" className="w-full h-[420px] object-cover" />
          </div>
          <input type="range" min="0" max="100" value={slider} onChange={(e) => setSlider(Number(e.target.value))} className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2 accent-blue-500" />
        </div>
        <div className="mt-4 flex justify-between text-sm text-zinc-400">
          <span>Before</span>
          <span>After</span>
        </div>
      </GlassCard>
    </section>
  );
}

function LoansSection() {
  const banks = [
    { name: 'Aurora Bank', rate: 8.2 },
    { name: 'Crest Finance', rate: 7.9 },
    { name: 'Nova Capital', rate: 8.5 },
  ];

  const [amount, setAmount] = useState(8000000);
  const [rate, setRate] = useState(8.0);
  const [years, setYears] = useState(15);

  const emi = useMemo(() => {
    const P = amount;
    const r = rate / 12 / 100;
    const n = years * 12;
    if (r === 0) return P / n;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [amount, rate, years]);

  return (
    <section id="loans" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeader eyebrow="Home Loans" title="Smart Financing" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="p-6 lg:col-span-2">
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="text-sm text-zinc-400">Loan Amount (₹)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-zinc-100" />
            </div>
            <div>
              <label className="text-sm text-zinc-400">Interest Rate (%)</label>
              <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-zinc-100" />
            </div>
            <div>
              <label className="text-sm text-zinc-400">Tenure (Years)</label>
              <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-zinc-100" />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <GlassCard className="p-4">
              <div className="text-xs text-zinc-400">Monthly EMI</div>
              <div className="mt-1 text-lg text-zinc-100">₹ {emi.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="text-xs text-zinc-400">Total Years</div>
              <div className="mt-1 text-lg text-zinc-100">{years}</div>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="text-xs text-zinc-400">Interest</div>
              <div className="mt-1 text-lg text-zinc-100">{rate}%</div>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="text-xs text-zinc-400">Amount</div>
              <div className="mt-1 text-lg text-zinc-100">₹ {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
            </GlassCard>
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <div className="text-sm text-zinc-400 mb-3">Partner Banks</div>
          <div className="space-y-3">
            {banks.map((b) => (
              <div key={b.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Banknote className="size-4 text-blue-400" />
                  <span className="text-zinc-100">{b.name}</span>
                </div>
                <div className="text-zinc-400 text-sm">{b.rate}% APR</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeader eyebrow="Contact" title="Let’s Collaborate" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="p-6 lg:col-span-2">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-zinc-400">Name</label>
              <input type="text" placeholder="Your name" className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-zinc-100 placeholder:text-zinc-500" />
            </div>
            <div>
              <label className="text-sm text-zinc-400">Email</label>
              <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-zinc-100 placeholder:text-zinc-500" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-zinc-400">Message</label>
              <textarea rows={5} placeholder="Tell us about your requirements" className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-zinc-100 placeholder:text-zinc-500" />
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 shadow-lg shadow-blue-900/30 hover:from-blue-500 hover:to-blue-400 transition-colors">Send Message</button>
            </div>
          </form>
        </GlassCard>
        <GlassCard className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-zinc-300"><User className="size-4 text-blue-400" /> Premium support within 24 hours</div>
          <div className="flex items-center gap-3 text-zinc-300"><Building className="size-4 text-blue-400" /> HQ: 88 Obsidian Ave, Downtown</div>
          <div className="flex items-center gap-3 text-zinc-300"><Mail className="size-4 text-blue-400" /> hello@obsidianrealty.com</div>
          <div className="flex items-center gap-3 text-zinc-300"><Shield className="size-4 text-blue-400" /> Secure & private</div>
        </GlassCard>
      </div>
    </section>
  );
}

function AdminPreview() {
  const cards = [
    { title: 'Blogs', count: 12 },
    { title: 'Projects', count: 24 },
    { title: 'Contacts', count: 7 },
  ];
  return (
    <section id="admin" className="relative mx-auto max-w-7xl px-6 py-20">
      <SectionHeader eyebrow="Admin" title="Dashboard Preview" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map((c) => (
          <GlassCard key={c.title} className="p-6">
            <div className="text-zinc-400 text-sm">{c.title}</div>
            <div className="mt-2 text-3xl text-zinc-100">{c.count}</div>
            <div className="mt-3 h-2 w-full rounded-full bg-white/5">
              <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: Math.min(100, c.count * 4) + '%' }} />
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <>
      <AboutSection />
      <ProjectsSection />
      <InteriorSection />
      <LoansSection />
      <ContactSection />
      <AdminPreview />
    </>
  );
}
