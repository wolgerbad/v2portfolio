import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: .8, ease: 'easeOut' }} id="about" className="scroll-mt-20">
      <h2 className="font-bold text-2xl mb-4">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-15 sm:mb-20 lg:mb-30">
        <div>
          <img
            className="max-h-[30rem] w-full object-cover rounded-md"
            src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/about.jpg"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-8 text-lg">
          <p>
            Hello, I'm Emir, a web developer from Turkey. I’ve been in the web
            my entire life, always been a kind of person who wanted to know why
            and how things work since my childhood. That curiosity eventually
            led me down the rabbit hole of web development.
          </p>
          <p>
            My primary focus is on front-end technologies. Although, recently i've been going deeper into
             backend technologies in order to own a feature across both stacks.
            across both stacks
          </p>
          <p>
          Outside of code I’m usually reading, staying active or listening music. If you’re curious about what I listen to while I work, you can check out my             <a
              href="https://open.spotify.com/user/21gjhghjhkkymdu4fxn5ta3py"
              className="group text-sky-200 transition-all duration-300 ease-in-out font-medium cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-green-700 bg-bottom-left bg-linear-to-r from-green-800 to-green-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                spotify
              </span>
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
