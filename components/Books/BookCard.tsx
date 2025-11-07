import React from 'react';
import Image from 'next/image';

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  rating: number;
  genre: string;
}

interface BookCardProps {
  book: Book;
  onClick: () => void;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  return (
    <div
      className="group cursor-pointer rounded-2xl bg-gradient-to-br from-purple-800/40 to-purple-900/60 backdrop-blur-sm border border-purple-500/70 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400/80 shadow-lg hover:shadow-lg hover:shadow-purple-500/20"
      onClick={onClick}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-purple-200 text-lg mb-1 line-clamp-2 group-hover:text-purple-100 transition-colors drop-shadow-sm">
          {book.title}
        </h3>
        <p className="text-gray-100 text-sm mb-2">
          by {book.author}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-200 bg-purple-600/80 px-2 py-1 rounded-full font-medium">
            {book.genre}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-100">{book.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}