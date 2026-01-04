import { FaGithub } from 'react-icons/fa';
import Card from './Card';
import { useState, useEffect } from 'react';
import { MdLiveTv } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';

export default function Project({ project }) {
  console.log(project);
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
          'flex flex-col md:flex-row gap-6 hover:bg-black/5 md:p-8 rounded-lg group',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: demoLink,
      }
    : { className: 'flex flex-col md:flex-row gap-4 md:p-8 rounded-lg group' };

  return (
    <Tag {...wrapperProps}>
      <div className="order-2 md:order-1">
        <img
          src={image}
          alt={name}
          className="w-full md:w-90 md:max-w-90 aspect-video"
        />
      </div>
      <div className="flex flex-col gap-2 order-1 md:order-2">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <a
              href={demoLink}
              target="_blank"
              className="text-3xl font-semibold"
            >
              {name}
            </a>
            <span className="text-xl text-black group-hover:-translate-y-1 group-hover:translate-x-1 transition-all ease delay-50">
              <FiExternalLink />
            </span>
          </div>

          <p className="text-gray-800 mt-1">{overview}</p>
        </div>
        <div className="flex gap-2 flex-wrap text-gray-100">
          {stack.map((stack, idx) => (
            <span
              key={idx}
              className={`px-4 py-1 rounded-full bg-black/10 text-black font-semibold`}
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </Tag>
  );
}
