import { motion } from 'motion/react';

export default function Navbar() {
  const name = ['e', 'm', 'i', 'r', 'd', 'e', 'v'];

  const container = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.4 } },
  };

  const item = {
    initial: { opacity: 0, x: -20, y: 20 },
    animate: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-50 backdrop-blur-2xl bg-white/70  border-b border-neutral-200/60 ">
      <ul className="max-w-4xl mx-auto h-full lowercase flex items-center justify-between gap-3 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 font-semibold text-base sm:text-lg">
        <motion.a
          href="#"
          variants={container}
          initial="initial"
          animate="animate"
          className="flex flex-1 text-lg md:text-xl"
        >
          {name.map((n) => (
            <motion.li variants={item} className="text-neutral-900 ">
              {n}
            </motion.li>
          ))}
        </motion.a>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900 hidden md:block"
            href="#about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900 hidden md:block"
            href="#contact"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            className="text-neutral-600 hover:text-neutral-900"
            href="https://drive.google.com/file/d/1Yq_oPktKhFhH5h13KeNs9DfKOQcXZEmj/view"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
