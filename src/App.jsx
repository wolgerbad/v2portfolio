import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl w-full mx-auto pt-28 sm:pt-32 sm:px-6 text-neutral-900 dark:text-neutral-100 px-10">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
