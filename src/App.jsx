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
        {/* Background accents removed for a cleaner look */}

        <section>
          <Hero />
        </section>

        <section>
          <AboutMe />
        </section>

        <section>
          <Projects />
        </section>

        <section className="pb-16">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
