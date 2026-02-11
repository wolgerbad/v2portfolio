import { FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FiExternalLink } from 'react-icons/fi';

export default function Project({ project }) {
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

  const Tag = isDesktop ? 'a' : 'div';
  const wrapperProps = isDesktop
    ? {
        className:
          'card-elevated flex flex-col md:flex-row gap-5 md:gap-6 p-4 sm:p-5 md:p-6 lg:p-7 rounded-2xl border border-slate-700/70 bg-slate-900/70 group',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: demoLink,
      }
    : {
        className:
          'card-elevated flex flex-col gap-5 p-4 sm:p-5 rounded-2xl border border-slate-700/70 bg-slate-900/70 group',
      };

  return (
    <Tag {...wrapperProps}>
      <div className="order-2 md:order-1 md:basis-[46%]">
        <img
          src={image}
          alt={name}
          className="w-full aspect-video rounded-xl border border-slate-600/60 object-cover shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition group-hover:border-sky-400/70"
        />
      </div>
      <div className="flex flex-col gap-3 order-1 md:order-2 md:flex-1">
        <div className="flex-1">
          <div>
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="text-2xl sm:text-3xl font-semibold flex items-center gap-3 text-slate-50"
            >
              {name}
              <span className="text-lg sm:text-xl text-sky-300 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform ease-out">
                <FiExternalLink />
              </span>
            </a>
          </div>

          <p className="text-slate-300 mt-1 text-sm sm:text-base">{overview}</p>
        </div>
        <div className="flex gap-2 flex-wrap text-slate-100">
          {stack.map((stack, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-slate-800/80 text-xs sm:text-[13px] font-medium text-slate-100/90 border border-slate-600/70 group-hover:border-sky-400/60"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </Tag>
  );
}
