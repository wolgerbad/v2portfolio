export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="font-semibold text-2xl sm:text-3xl mb-5 text-slate-50">
        About
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.9)] card-elevated">
          <div className="pointer-events-none absolute -top-16 -left-10 h-32 w-32 rounded-full bg-sky-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />

          <div className="relative h-full text-slate-100">
              <img src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/portfolio_about.png" alt="" className="h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 text-sm sm:text-base text-slate-300">
          <p className="leading-relaxed">
          Hello, I'm Emir, a web developer from Turkey. I’ve been in the web my entire life, always been a kind of person who wanted to know why and <span className="text-sky-300">how things work</span> under
            the hood. That curiosity pulled me into building products instead of just
            using them.
          </p>
          <p className="leading-relaxed">
            My main focus is on <span className="text-fuchsia-300">front‑end engineering.</span> React, Next.js,
            TypeScript and modern CSS. Recently I’ve been going deeper into backend work
            as well, designing APIs and working with relational databases so I can own a
            feature from backend to frontend.
          </p>
          <p className="leading-relaxed">
            Outside of code I’m usually reading, staying active or listening music.
            If you’re curious about what I listen to while I work, you can check out my{' '}
            <a
              href="https://open.spotify.com/user/21gjhghjhkkymdu4fxn5ta3py"
              className="group text-sky-200 transition-all duration-300 ease-in-out font-medium cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <span className="bg-bottom-left bg-linear-to-r from-sky-300 to-fuchsia-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                spotify
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
