'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import BookCard from './BookCard';
import BookModal from './BookModal';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  rating: number;
  genre: string;
}

const placeholderBooks: Book[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: '/images/books/clean-code.jpg',
    description: 'A handbook of agile software craftsmanship. Uncle Bob teaches the principles of writing clean, readable, and maintainable code. Essential reading for any serious developer who wants to improve their craft and deliver production-ready WordPress solutions.',
    rating: 4.7,
    genre: 'Programming'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    image: '/images/books/atomic-habits.jpg',
    description: 'An easy and proven way to build good habits and break bad ones. Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. A foundation for consistent high performance.',
    rating: 4.8,
    genre: 'Self-Development'
  },
  {
    id: '3',
    title: 'Zero to One',
    author: 'Peter Thiel',
    image: '/images/books/zero-to-one.jpg',
    description: 'Notes on startups, or how to build the future. Thiel shows how to build companies that create new things, from the co-founder of PayPal and first investor in Facebook. A contrarian guide to startup success that shaped my approach to building ViViFi and NFT ventures.',
    rating: 4.4,
    genre: 'Entrepreneurship'
  },
  {
    id: '4',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    image: '/images/books/designing-data-intensive.jpg',
    description: 'The big ideas behind reliable, scalable, and maintainable systems. Essential for understanding modern architectures, distributed systems, and data processing - invaluable for building RAG systems and working with LLMs at scale.',
    rating: 4.8,
    genre: 'Architecture'
  },
  {
    id: '5',
    title: 'Modern PHP',
    author: 'Josh Lockhart',
    image: '/images/books/modern-php.jpg',
    description: 'New features and good practices for PHP development. Lockhart covers namespaces, traits, closures, and modern best practices that transformed how I build custom WordPress themes and plugins with PHP 8.3+.',
    rating: 4.5,
    genre: 'Programming'
  },
  {
    id: '6',
    title: '$100M Offers',
    author: 'Alex Hormozi',
    image: '/images/books/100m-offers.jpg',
    description: 'How to make offers so good people feel stupid saying no. Hormozi breaks down value creation and positioning that helped me understand what made my Chrome extension hit $20K MRR and NFT projects generate $28M+ in sales.',
    rating: 4.9,
    genre: 'Business'
  },
  {
    id: '7',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    image: '/images/books/power-of-now.jpg',
    description: 'A guide to spiritual enlightenment and present-moment awareness. Tolle\'s teachings on mindfulness and consciousness helped me navigate burnout, travel the world mindfully, and maintain balance while building high-performance systems.',
    rating: 4.6,
    genre: 'Spirituality'
  },
  {
    id: '8',
    title: 'The E-Myth Revisited',
    author: 'Michael Gerber',
    image: '/images/books/e-myth.jpg',
    description: 'Why most small businesses don\'t work and what to do about it. Gerber\'s insights on systems thinking and working on your business rather than in it transformed how I founded and scaled ViViFi agency to 100% client satisfaction.',
    rating: 4.5,
    genre: 'Business'
  },
  {
    id: '9',
    title: 'Refactoring',
    author: 'Martin Fowler',
    image: '/images/books/refactoring.jpg',
    description: 'Improving the design of existing code. Fowler\'s systematic approach to code improvement is essential for maintaining WordPress codebases, optimizing performance, and achieving those 100/100 PageSpeed scores.',
    rating: 4.6,
    genre: 'Programming'
  }
];

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states for books section
    gsap.set('[data-gsap="books-heading"]', { opacity: 0, y: 20 });
    gsap.set('[data-gsap="books-subheading"]', { opacity: 0, y: 25 });

    // Set initial states for book cards
    gsap.set('[data-gsap^="book-card-"]', { opacity: 0, y: 30, scale: 0.95 });

    // Create staggered timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-gsap="books-heading"]',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    // Animate heading and subheading first
    tl.to('[data-gsap="books-heading"]', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
    })
    .to(
      '[data-gsap="books-subheading"]',
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.3',
    )
    // Then stagger animate book cards
    .to(
      '[data-gsap^="book-card-"]',
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
      },
      '-=0.2',
    );
  }, []);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <section id="books" className="relative py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          heading="Favorite Books"
          subheading="Books that have fundamentally shaped my understanding and approach to development, business, and personal growth"
          animationId="books"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" data-gsap="books-grid">
          {placeholderBooks.map((book, index) => (
            <div
              key={book.id}
              data-gsap={`book-card-${index}`}
            >
              <BookCard
                book={book}
                onClick={() => handleBookClick(book)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={handleCloseModal} />
      )}
    </section>
  );
}