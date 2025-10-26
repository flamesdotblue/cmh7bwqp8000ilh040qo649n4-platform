export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto w-[92%] max-w-7xl py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-300" />
          <div className="text-gray-200 font-medium">Obsidian Realty</div>
        </div>
        <div className="text-xs text-gray-400">© {new Date().getFullYear()} Obsidian Realty. All rights reserved.</div>
      </div>
    </footer>
  );
}
