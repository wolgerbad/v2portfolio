import { FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'motion/react';

export default function Project({ project, scrollYProgress }) {
  const { name, overview, image, stack, demoLink } = project;
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(min-width: 768px)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e) => setIsDesktop(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  const AnimatedTag = isDesktop ? motion.a : motion.div;
  const wrapperProps = isDesktop
    ? {
        className:
          'flex flex-col md:flex-row gap-6 hover:bg-black/5 md:p-8 rounded-lg group border border-gray-300',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: demoLink,
      }
    : { className: 'flex flex-col md:flex-row gap-4 md:p-8 p-4 rounded-lg group border border-gray-300' };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <AnimatedTag
      {...wrapperProps}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.17 }}
      whileHover={{ y: -6 }}
    >
          <div className="order-2 md:order-1 md:basis-[46%]">
        <img
          src={image}
          alt={name}
          className="w-full aspect-video rounded-xl object-cover shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition"
        />
      </div>
      <div className="flex flex-col gap-3 order-1 md:order-2 md:flex-1">
        <div className="flex-1">
          <div>
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="text-2xl sm:text-3xl font-semibold flex items-center gap-3"
            >
              {name}
              <span className="text-lg sm:text-xl text-gray-600 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform ease-out">
                <FiExternalLink />
              </span>
            </a>
          </div>

          <p className="text-gray-800 mt-1 text-base sm:text-base">{overview}</p>
        </div>
        <div className="flex gap-2 flex-wrap text-slate-100">
          {stack.map((stack, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-xs sm:text-[13px] font-medium bg-black/10 text-black"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </AnimatedTag>
  );
}
