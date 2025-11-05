export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 backdrop-blur-2xl bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <ul className="lowercase flex flex-wrap items-center justify-between gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 py-4 font-semibold text-base sm:text-lg">
        <li className="flex-1 hidden md:block">
          <a className="text-neutral-900 dark:text-white" href="#home">
            emir
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            href="#home"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            href="https://drive.google.com/file/d/1nDRc-P5QVniDhwKQwS1i3smjE_2WCohJ/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
