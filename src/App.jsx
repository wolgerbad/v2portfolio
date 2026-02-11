import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen text-slate-50">
      <Navbar />

      <main className="relative max-w-5xl w-full mx-auto pt-28 sm:pt-32 px-4 sm:px-6 md:px-8">
        {/* Subtle background accents */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-32 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -right-32 top-64 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        </div>

        <section className="section-reveal [animation-delay:40ms]">
          <Hero />
        </section>

        <section className="section-reveal [animation-delay:160ms]">
          <AboutMe />
        </section>

        <section className="section-reveal [animation-delay:260ms]">
          <Projects />
        </section>

        <section className="section-reveal [animation-delay:360ms] pb-16">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
