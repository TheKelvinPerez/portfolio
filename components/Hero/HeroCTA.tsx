import HeroCircles from './HeroCircles';

export default function HeroCTA() {
  return (
    <div className="relative z-40 my-4 flex w-full flex-col items-center justify-center gap-12 px-4 xl:mx-auto xl:max-w-[1800px]">
      <div className="flex flex-col items-center justify-center gap-12">
        <div
          className="lg:h-13 mx-auto h-10 w-full max-w-md rounded-full bg-purple-800 opacity-0 xl:h-16"
          data-gsap="tech-badge"
        >
          <div className="mb-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-3 py-1 text-base text-white/80 lg:px-5 lg:py-1 lg:text-lg xl:px-8 xl:py-2 xl:text-xl">
            WordPress | Vite | UI/UX | PHP
          </div>
        </div>
        <div
          className="hero-gradient-text -mt-1 text-center text-4xl font-bold leading-tight opacity-0 sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl"
          data-gsap="hero-text"
        >
          Full Stack WordPress Developer
        </div>
      </div>
      <div className="grid w-full max-w-md grid-cols-2 items-center justify-center gap-3">
        <a
          href="#projects"
          className="grid place-items-center rounded-full py-3 text-center text-base text-white opacity-0 shadow-alt-cta transition-all hover:bg-white hover:text-black hover:shadow-cta lg:px-8 lg:py-3 xl:px-10 xl:py-4 xl:text-lg"
          data-gsap="cta-view-projects"
        >
          View Projects
        </a>
        <a
          href="https://cal.com/0xaquawolf/discovery"
          className="grid place-items-center rounded-full bg-white py-3 text-center text-base text-black opacity-0 shadow-cta transition-all hover:bg-transparent hover:text-white hover:shadow-alt-cta lg:px-8 lg:py-3 xl:px-10 xl:py-4 xl:text-lg"
          data-gsap="cta-book-call"
        >
          Book a Call
        </a>
      </div>
      <div className="absolute inset-0 z-[-1] flex items-center justify-center">
        <HeroCircles />
      </div>
    </div>
  );
}
