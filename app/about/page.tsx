import { Metadata } from 'next';
import Letter from '@/components/about-me/Letter';

export const metadata: Metadata = {
  title: 'About - Kelvin Perez | Senior WordPress Developer',
  description: 'Learn about Kelvin Perez - Senior WordPress Developer with 8+ years experience building high-performance solutions for agencies and multi-location businesses.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Letter />
        </div>
      </div>
    </main>
  );
}