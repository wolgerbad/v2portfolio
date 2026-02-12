export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8 pt-4">
        <div className="flex items-center justify-between rounded-2xl border border-slate-700/60 bg-slate-900/70 px-4 sm:px-6 py-3 backdrop-blur-xl shadow-[0_18px_60px_rgba(15,23,42,0.8)]">
          <a
            href="#home"
            className="text-sm sm:text-base font-semibold tracking-wide uppercase text-slate-100"
          >
            Emir Işık
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a
              href="#about"
              className="relative group inline-flex items-center gap-1"
            >
              <span>About</span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#projects"
              className="relative group inline-flex items-center gap-1"
            >
              <span>Projects</span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-fuchsia-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#contact"
              className="relative group inline-flex items-center gap-1"
            >
              <span>Contact</span>
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to roles
            </span>
            <a
              href="https://drive.google.com/file/d/1x2ZySTWzt-4RpxwbYGNFTDvJ7X9452_M/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-100 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-[1px] hover:bg-sky-100"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
