import { FaGithub, FaLinkedin, FaNode, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiJavascript, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.35fr)] mb-16 sm:mb-20 lg:mb-24 scroll-mt-40 gap-10 md:gap-14"
    >
      <div className="order-2 md:order-1 flex flex-col gap-8">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          Building reliable web products
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
            <span className="block text-slate-200">Emir Işık</span>
            <span className="mt-1 block bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent">
              Frontend & full‑stack developer
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-slate-300/90">
          I build accessible, inclusive products and digital experiences for web and mobile.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-[1px] hover:bg-sky-400"
          >
            View selected work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100/90 transition hover:-translate-y-[1px] hover:border-slate-400 hover:bg-slate-900"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center justify-start gap-4 text-slate-400">
          <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Social
          </span>
          <div className="flex gap-3 text-2xl">
            <a
              href="https://github.com/wolgerbad/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:-translate-y-[1px] hover:text-sky-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emir-isik/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:-translate-y-[1px] hover:text-sky-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="mt-2 space-y-3 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.85)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Core stack
          </p>
          <div className="grid grid-cols-2 sm:max-md:grid-cols-3 md:grid-cols-5 gap-3 text-sm">
            <StackPill icon={<FaReact />} label="React / Next.js" />
            <StackPill icon={<RiNextjsFill />} />
            <StackPill icon={<SiTypescript />} label="TypeScript / JS" />
            <StackPill icon={<SiTailwindcss />} label="Tailwind CSS" />
            <StackPill icon={<FaNodeJs />} label="SQL & relational DBs" />
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative glow-ring">
          <div className="absolute -top-6 -left-6 h-16 w-16 rounded-2xl bg-sky-500/30 blur-3xl" />
          <div className="absolute -bottom-8 -right-4 h-20 w-20 rounded-full bg-fuchsia-500/25 blur-3xl" />

          <img
            loading="lazy"
            className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full border border-slate-100/25 object-cover shadow-[0_24px_70px_rgba(15,23,42,0.9)]"
            src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/bb039930-ef9b-4afe-ba67-d74c421d97cb.jpg"
            alt="Portrait of Emir Işık"
          />
        </div>
      </div>
    </section>
  );
}

function StackPill({ icon, label }) {
  return (
    <div className="inline-flex justify-center items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-100/90">
      <span className="text-2xl text-sky-300">{icon}</span>
    </div>
  );
}
