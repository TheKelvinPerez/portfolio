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

const books: Book[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: '/images/books/clean-code.jpg',
    description: 'A practical reminder that readable code matters when a product grows. I connect this to Laravel service classes, controllers, jobs, policies, and the everyday discipline of leaving code easier to work with.',
    rating: 4.7,
    genre: 'Programming'
  },
  {
    id: '2',
    title: 'Refactoring',
    author: 'Martin Fowler',
    image: '/images/books/refactoring.jpg',
    description: 'This fits the work I want to keep doing. Take working software, understand the behavior, then improve the structure without breaking the product. That is the mindset I want in Laravel codebases.',
    rating: 4.6,
    genre: 'Programming'
  },
  {
    id: '3',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    image: '/images/books/designing-data-intensive.jpg',
    description: 'A systems book that maps directly to product dashboards, data workflows, queues, records, consistency, and long running backend processes. This is the direction I want to grow in.',
    rating: 4.8,
    genre: 'Architecture'
  },
  {
    id: '4',
    title: 'Modern PHP',
    author: 'Josh Lockhart',
    image: '/images/books/modern-php.jpg',
    description: 'A PHP foundation book. Laravel is the framework, but the language still matters. Namespaces, traits, closures, standards, and good PHP habits all show up in real application work.',
    rating: 4.5,
    genre: 'Programming'
  },
  {
    id: '5',
    title: 'The E-Myth Revisited',
    author: 'Michael Gerber',
    image: '/images/books/e-myth.jpg',
    description: 'This connects to the agency attempt honestly. Building the product is one part. Distribution, process, support, and operations are another. It helped me separate business systems from software systems.',
    rating: 4.5,
    genre: 'Business'
  },
  {
    id: '6',
    title: 'Atomic Habits',
    author: 'James Clear',
    image: '/images/books/atomic-habits.jpg',
    description: 'A simple book about consistency. I keep coming back to it because the best engineering work is not just intensity. It is steady shipping, clearer review, and better habits around the work.',
    rating: 4.8,
    genre: 'Process'
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
          heading="Books Behind The Work"
          subheading="A tighter reading list that connects to Laravel, code quality, systems, and the agency lesson"
          animationId="books"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" data-gsap="books-grid">
          {books.map((book, index) => (
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
