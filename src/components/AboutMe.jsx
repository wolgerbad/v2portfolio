export default function AboutMe() {
  return (
    <div id="about" className="scroll-mt-20">
      <h2 className="font-bold text-2xl mb-4">About</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-30">
        <div>
          <img
            className="max-h-[30rem] w-full object-cover rounded-md"
            src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/blog_images/about.jpg"
          />
        </div>
        <div className="flex flex-col gap-4 text-lg justify-between">
          <p>
            Hello, I'm Emir, a web developer from Turkey. I’ve been in the web
            my entire life, always been a type of person who wanted to know why
            and how things work since my childhood. I believe that curiosity led
            me into development, and that's where the story began.
          </p>
          <p>
            I have around three years of experience in software development,
            primarily focusing on front-end technologies. Recently, exploring
            Nodejs, Express and MongoDB in order to expand my skills across both
            stacks
          </p>
          <p>
            When I’m not coding, I’m usually reading, staying active, or lost in
            some psychedelic rock. Feel free to check out my{' '}
            <a
              href="https://open.spotify.com/user/21gjhghjhkkymdu4fxn5ta3py"
              className="group text-neutral-700 transition-all duration-300 ease-in-out font-medium cursor-pointer"
              target="_blank"
            >
              <span className="bg-bottom-left bg-linear-to-r from-neutral-800 to-neutral-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                spotify
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
