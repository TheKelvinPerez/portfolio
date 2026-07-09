import HeroCircles from './HeroCircles';
import StyledButton from '@/components/ui/styled-button';
import LogoCloud from '@/components/LogoCloud/LogoCloud';

export default function HeroCTA() {
  return (
    <div className="relative z-40 mb-0 mt-2 flex w-full flex-col items-center justify-center gap-4 px-4 md:my-4 md:gap-8 xl:mx-auto xl:max-w-[1800px]">
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
        <div
          className="lg:h-13 mx-auto h-10 w-full max-w-xl rounded-full border border-purple-300/25 bg-purple-900/60 opacity-0 shadow-xl shadow-purple-500/10 backdrop-blur-md xl:h-16"
          data-gsap="tech-badge"
        >
          <div className="mb-10 flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-white/25 to-purple-950/30 px-3 py-1 text-sm text-white/85 lg:px-5 lg:py-1 lg:text-lg xl:px-8 xl:py-2 xl:text-xl">
            Laravel | Inertia | React | TypeScript | PHP
          </div>
        </div>
        <div
          className="hero-gradient-text -mt-1 max-w-6xl text-center text-4xl font-bold leading-tight opacity-0 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          data-gsap="hero-text"
        >
          Full Stack Laravel Developer
        </div>
        <p
          className="max-w-3xl text-center text-base leading-7 text-white/75 opacity-0 md:text-lg"
          data-gsap="tech-subtitle"
        >
          I build product dashboards, backend workflows, polished React
          interfaces, and the infrastructure needed to run them.
        </p>
      </div>
      <div className="grid w-full max-w-md grid-cols-2 items-center justify-center gap-3">
        <StyledButton
          href="/projects"
          size="lg"
          variant="primary"
          data-gsap="cta-view-projects"
          className="text-sm opacity-0"
        >
          View Work
        </StyledButton>
        <StyledButton
          href="/contact"
          size="lg"
          variant="primary"
          data-gsap="cta-book-call"
          className="bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 opacity-0"
        >
          Contact Me
        </StyledButton>
      </div>
      <div className="absolute inset-0 z-[-1] flex items-center justify-center">
        <HeroCircles />
      </div>
      <LogoCloud />
    </div>
  );
}
