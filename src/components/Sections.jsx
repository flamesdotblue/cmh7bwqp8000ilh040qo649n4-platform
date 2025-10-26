import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Users, Building2, Ruler, Banknote, Send, FileText, Image as ImageIcon } from 'lucide-react';

const accent = 'from-blue-500 to-blue-300';

const team = [
  { id: 1, name: 'Ava Stone', role: 'Principal Architect', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop', bio: 'Leads design vision with a focus on cinematic forms and human-centered spatial experiences.' },
  { id: 2, name: 'Liam Hayes', role: 'Head of Interiors', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop', bio: 'Crafts tech-luxury interiors blending matte textures, glass, and ambient lighting.' },
  { id: 3, name: 'Maya Chen', role: 'Project Director', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop', bio: 'Drives execution with precision, partnering with top developers and banks.' },
  { id: 4, name: 'Noah Patel', role: 'Finance Specialist', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop', bio: 'Simplifies home loans with tailored plans and transparent guidance.' },
];

const projects = [
  { id: 1, title: 'Skyline Residences', cat: 'Apartments', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Aurora Tower', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Elysian Villas', cat: 'Villas', img: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'Harbor One', cat: 'Apartments', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, title: 'Cobalt Park', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, title: 'Zenith Estates', cat: 'Villas', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop' },
];

const banks = [
  { id: 'b1', name: 'Axis Bank', rate: 8.35 },
  { id: 'b2', name: 'HDFC', rate: 8.45 },
  { id: 'b3', name: 'ICICI', rate: 8.55 },
  { id: 'b4', name: 'SBI', rate: 8.25 },
];

function SectionHeader({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
          <Icon size={14} />
          <span>{subtitle}</span>
        </div>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-100">{title}</h2>
      </div>
    </div>
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
      <AdminSection />
    </>
  );
}

function AboutSection() {
  const [selected, setSelected] = useState(team[0]);
  return (
    <section id="about" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.06),transparent_30%)]" />
      <div className="relative mx-auto w-[92%] max-w-7xl">
        <SectionHeader icon={Users} title="About Obsidian Realty" subtitle="Cinematic Foundations" />
        <p className="mt-3 max-w-3xl text-gray-400">
          We create immersive spaces with a technology-first approach. Our team blends architecture, interior artistry, and finance expertise to deliver a seamless, premium home-buying experience.
        </p>

        {/* Zoom-in navigation style team grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {team.map((m) => (
              <motion.button
                key={m.id}
                onClick={() => setSelected(m)}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur text-left ${selected.id === m.id ? 'outline outline-1 outline-blue-400/40' : ''}`}
              >
                <img src={m.img} alt={m.name} className="h-44 w-full object-cover object-center opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f14] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-sm font-medium text-gray-100">{m.name}</div>
                  <div className="text-xs text-gray-400">{m.role}</div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <img src={selected.img} alt={selected.name} className="h-14 w-14 rounded-xl object-cover" />
              <div>
                <div className="font-medium text-gray-100">{selected.name}</div>
                <div className="text-xs text-gray-400">{selected.role}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">{selected.bio}</p>
            <div className="mt-4 h-1.5 w-full rounded-full bg-white/10">
              <div className="h-1.5 w-1/2 rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const cats = ['All', 'Apartments', 'Villas', 'Commercial'];
  const filtered = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.cat === filter)), [filter]);

  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto w-[92%] max-w-7xl">
        <SectionHeader icon={Building2} title="Projects" subtitle="Curated Portfolio" />
        <div className="mt-6 flex items-center gap-2 flex-wrap">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:bg-white/10 ${filter === c ? 'text-white outline outline-1 outline-blue-400/40' : 'text-gray-300'}`}
            >
              <Filter size={14} /> {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -6 }} className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-56 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-gray-100 font-medium">{p.title}</div>
                  <div className="text-xs text-gray-400">{p.cat}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteriorSection() {
  return (
    <section id="interior" className="relative py-24">
      <div className="relative mx-auto w-[92%] max-w-7xl">
        <SectionHeader icon={Ruler} title="Interior Designing" subtitle="Before / After" />
        <p className="mt-3 max-w-3xl text-gray-400">
          Minimalist typography, fine materials, layered lighting. Drag to reveal elegant makeovers.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <BeforeAfterCard key={i} before={`https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop`} after={`https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({ before, after }) {
  const [val, setVal] = useState(50);
  return (
    <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
      <div className="relative h-72">
        <img src={after} alt="after" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <img src={before} alt="before" style={{ width: `${val}%` }} className="absolute inset-0 h-full object-cover" />
          </div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={val}
          onChange={(e) => setVal(parseInt(e.target.value))}
          className="absolute inset-x-6 bottom-4 h-1 w-[calc(100%-48px)] cursor-ew-resize appearance-none rounded-full bg-white/20"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <div className="text-sm text-gray-300">Drag slider to compare</div>
        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${accent} shadow-[0_0_20px_rgba(59,130,246,0.6)]`} />
      </div>
    </div>
  );
}

function LoansSection() {
  const [principal, setPrincipal] = useState(8000000);
  const [rate, setRate] = useState(8.35);
  const [years, setYears] = useState(20);

  const monthly = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    if (r === 0) return principal / n;
    return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [principal, rate, years]);

  return (
    <section id="loans" className="relative py-24">
      <div className="relative mx-auto w-[92%] max-w-7xl">
        <SectionHeader icon={Banknote} title="Home Loans" subtitle="Smart Financing" />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-gray-400">Principal (₹)</label>
                <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="mt-1 w-full rounded-xl bg-black/30 px-3 py-2 text-gray-100 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Interest Rate (%)</label>
                <input type="number" step="0.05" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-1 w-full rounded-xl bg-black/30 px-3 py-2 text-gray-100 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Tenure (years)</label>
                <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="mt-1 w-full rounded-xl bg-black/30 px-3 py-2 text-gray-100 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
              <InfoTile label="Monthly EMI" value={`₹ ${Math.round(monthly).toLocaleString('en-IN')}`} />
              <InfoTile label="Total Interest" value={`₹ ${(Math.round(monthly) * years * 12 - principal).toLocaleString('en-IN')}`} />
              <InfoTile label="Total Payable" value={`₹ ${(Math.round(monthly) * years * 12).toLocaleString('en-IN')}`} />
              <InfoTile label="Rate" value={`${rate}%`} />
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
            <div className="text-sm font-medium text-gray-200 mb-3">Partner Banks</div>
            <div className="space-y-3">
              {banks.map((b) => (
                <div key={b.id} className="flex items-center justify-between rounded-xl bg-black/30 ring-1 ring-white/10 px-3 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-300" />
                    <div>
                      <div className="text-gray-100 text-sm">{b.name}</div>
                      <div className="text-xs text-gray-400">Starting {b.rate}%</div>
                    </div>
                  </div>
                  <button onClick={() => setRate(b.rate)} className="text-xs rounded-lg px-3 py-2 bg-white/10 hover:bg-white/15">
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ label, value }) {
  return (
    <div className="rounded-xl bg-black/30 ring-1 ring-white/10 p-4">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="mt-1 text-gray-100">{value}</div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto w-[92%] max-w-7xl">
        <SectionHeader icon={Send} title="Contact" subtitle="Let’s Collaborate" />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400">Name</label>
                <input type="text" className="mt-1 w-full rounded-xl bg-black/30 px-3 py-2 text-gray-100 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs text-gray-400">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl bg-black/30 px-3 py-2 text-gray-100 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2">
                <label className="text-xs text-gray-400">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl bg-black/30 px-3 py-2 text-gray-100 ring-1 ring-white/10 focus:ring-blue-500/50 outline-none" placeholder="Tell us about your project" />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-xs text-gray-400">We respond within 24 hours.</div>
                <button className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(59,130,246,0.40)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)]">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-300" />
              <div>
                <div className="text-gray-100">Head Office</div>
                <div className="text-xs text-gray-400">Obsidian Tower, Downtown</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-300">contact@obsidianrealty.com</div>
            <div className="text-sm text-gray-300">+91 98765 43210</div>
            <div className="mt-4 h-40 rounded-xl bg-[url('https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AdminSection() {
  const tabs = [
    { id: 'blogs', label: 'Blogs', icon: FileText },
    { id: 'projects', label: 'Projects', icon: ImageIcon },
    { id: 'contacts', label: 'Contacts', icon: Send },
  ];
  const [active, setActive] = useState('projects');

  return (
    <section id="admin" className="relative py-24">
      <div className="relative mx-auto w-[92%] max-w-7xl">
        <SectionHeader icon={FileText} title="Admin" subtitle="Preview Only" />
        <div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
          <div className="flex items-center gap-2">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setActive(t.id)} className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 ring-white/10 ${active === t.id ? 'bg-white/15 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}>
                <t.icon size={14} /> {t.label}
              </button>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl bg-black/30 ring-1 ring-white/10 p-4">
                <div className="text-sm font-medium text-gray-100">{active} card {i}</div>
                <div className="mt-1 text-xs text-gray-400">Minimal admin preview</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
