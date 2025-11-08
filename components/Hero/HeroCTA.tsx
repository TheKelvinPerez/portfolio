import HeroCircles from './HeroCircles';
import StyledButton from '@/components/ui/styled-button';

export default function HeroCTA() {
  return (
    <div className="relative z-40 my-4 flex w-full flex-col items-center justify-center gap-12 px-4 xl:mx-auto xl:max-w-[1800px]">
      <div className="flex flex-col items-center justify-center gap-12">
        <div
          className="lg:h-13 mx-auto h-10 w-full max-w-md rounded-full bg-purple-800 opacity-0 xl:h-16"
          data-gsap="tech-badge"
        >
          <div className="mb-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-3 py-1 text-base text-white/80 lg:px-5 lg:py-1 lg:text-lg xl:px-8 xl:py-2 xl:text-xl">
            WordPress | PHP | React | UI/UX
          </div>
        </div>
        <div
          className="hero-gradient-text -mt-1 text-center text-4xl font-bold leading-tight opacity-0 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          data-gsap="hero-text"
        >
          Senior Full-Stack WordPress Developer
        </div>
      </div>
      <div className="grid w-full max-w-md grid-cols-2 items-center justify-center gap-3">
        <StyledButton
          href="#projects"
          size="lg"
          variant="primary"
          data-gsap="cta-view-projects"
          className="opacity-0"
        >
          View Projects
        </StyledButton>
        <StyledButton
          href="#contact-me"
          size="lg"
          variant="primary"
          data-gsap="cta-book-call"
          className="opacity-0 bg-gradient-to-b from-white/40 to-[#2F2D2D]/20"
        >
          Contact Me
        </StyledButton>
      </div>
      <div className="absolute inset-0 z-[-1] flex items-center justify-center">
        <HeroCircles />
      </div>
    </div>
  );
}
