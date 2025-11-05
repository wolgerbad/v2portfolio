import {
  FaCss3,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaReact,
} from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

export default function Hero() {
  return (
    <div
      id="home"
      className="grid grid-cols-1 md:grid-cols-3 mb-30 scroll-mt-40 gap-4 md:gap-8 text-center md:text-start"
    >
      <div className="order-2 md:order-1 md:col-start-1 md:col-span-2 flex flex-col gap-10 justify-between">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide mb-4">
            Emir Işık
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Web Developer
          </h2>
          <p className="text-lg font-medium">
            I build accessible, inclusive products and digital experiences for
            web and mobile.
          </p>
        </div>
        <div className="flex gap-3 justify-center md:justify-start">
          <a href="#" className="text-4xl hover:text-sky-400">
            <FaGithub />
          </a>
          <a href="#" className="text-4xl hover:text-sky-400">
            <FaLinkedin />
          </a>
        </div>
        <h1 className="font-bold text-xl underline">Tech Stack</h1>
        <div className="grid grid-cols-2 md:grid-cols-4  items-center gap-8 md:gap-16 mx-auto md:mx-0">
          <div className="flex gap-2">
            <img
              className="w-15 md:w-12 rounded-md"
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/HTML-d4a7db0f.png"
            />
            <img
              className="w-15 md:w-12 rounded-md"
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/CSS-32634011.png"
            />
          </div>
          <div className="flex gap-2">
            <img
              className="w-15 md:w-12 rounded-md"
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/Javascript-30558d7e.png"
            />
            <img
              className="w-15 md:w-12 rounded-md"
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/Typescript-3fc8f050.png"
            />
          </div>
          <div className="flex gap-2">
            <img
              className="w-15 md:w-12 rounded-md"
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/React-5968f9ef.png"
            />
            <img
              className="w-15 md:w-12 rounded-md"
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/Next-3342702b.png"
            />
          </div>
          <div className="flex">
            <img
              className="w-15 md:w-12 rounded-md"
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/download.png"
            />
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 md:pt-4 ">
        <img
          loading="lazy"
          className="rounded-full "
          src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/bb039930-ef9b-4afe-ba67-d74c421d97cb.jpg"
        />
      </div>
    </div>
  );
}
