import Hero from '@/components/Hero/Hero';
import FeaturedVideo from '@/components/FeaturedVideo/FeaturedVideo';
import YoutubeGrid from '@/components/YoutubeGrid/YoutubeGrid';
import Stats from '@/components/GlobalStats/Stats';
import YoutubeVideos from '@/components/YoutubeVideos/YoutubeVideo';
import TimelineComponent from '@/components/Timeline/Timeline';
import AboutMe from '@/components/about-me/AboutMe';
import SecondQuote from '@/components/SecondQuote/SecondQuote';
import { Footer } from '@/components/footer';
import ResponsiveGodRays from '@/components/ui/ResponsiveGodRays';
import Faq from '@/components/Home/FAQ';
import { unstable_noStore as noStore } from 'next/cache';
import Projects from '@/components/Projects/Projects';
import Books from '@/components/Books/Books';
import GearSection from '@/components/Gear/GearSection';
import ContactForm from '@/components/ui/contact-form';
import CallToAction from '@/components/ui/call-to-action-1';

export const dynamic = 'force-dynamic';
export const revalidate = 43200; // revalidate every 12 hours

export default function Home() {
  noStore();

  return (
    <main className="bg-transparent">
      <ResponsiveGodRays />
      <Hero />
      <FeaturedVideo />
      <YoutubeGrid />
      <Stats />
      <YoutubeVideos />
      <TimelineComponent />
      <CallToAction />
      <SecondQuote />
      <AboutMe />
      <CallToAction />
      <Projects />
      <Books />
      <GearSection />
      <Faq />
      <ContactForm />
      <CallToAction />
      <Footer />
    </main>
  );
}
