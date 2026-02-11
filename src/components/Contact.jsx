import { IoIosCall, IoIosMail } from 'react-icons/io';

export default function Contact() {
  return (
    <section className="flex flex-col items-center mt-16" id="contact">
      <div className="w-full max-w-xl rounded-2xl border border-slate-700/70 bg-slate-900/80 px-6 py-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.9)] card-elevated">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-50">
          Let&apos;s build something
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Whether it&apos;s a product team, an agency or a startup, I&apos;m open to roles
          where I can ship user-facing features and own technical decisions.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:emir.isikdev@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:-translate-y-[1px] hover:bg-sky-400"
          >
            <IoIosMail className="text-lg" />
            Email me
          </a>
          <a
            href="tel:+905550578834"
            className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/70 px-4 py-2.5 text-sm font-semibold text-slate-100/90 transition hover:-translate-y-[1px] hover:border-slate-400 hover:bg-slate-900"
          >
            <IoIosCall className="text-lg" />
            <span className="text-xs sm:text-sm">+90 555 057 88 34</span>
          </a>
        </div>

        <p className="mt-4 text-[11px] text-slate-500">
          Or reach out on LinkedIn — I&apos;m happy to walk through code, projects, and
          how I work.
        </p>
      </div>
    </section>
  );
}
