'use client';

import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/api/placeholder/800/400',
      caption: 'We preach Christ crucified, risen, and coming again!'
    },
    {
      image: '/api/placeholder/800/400',
      caption: 'Our God is an Awesome God!'
    },
    {
      image: '/api/placeholder/800/400',
      caption: 'Worship: More than just music - it is a life choice!'
    },
    {
      image: '/api/placeholder/800/400',
      caption: 'Let us run with perseverance the race set before us!'
    },
    {
      image: '/api/placeholder/800/400',
      caption: 'Trying to find the truth through the fog of this world\'s confusion?'
    },
    {
      image: '/api/placeholder/800/400',
      caption: 'We are a family of faith, passionately connecting to Christ.'
    },
    {
      image: '/api/placeholder/800/400',
      caption: 'Come. Experience Jesus today!'
    },
    {
      image: '/api/placeholder/800/400',
      caption: 'Come experience the love and harmony that Prairie Lea Baptist Church demonstrates!'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="bg-gradient-radial from-[#f6bf93] to-[#ce6712] border-t border-b border-[#9f500e]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div className="aspect-[2/1] bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">Church Image {index + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                  <p className="text-lg font-medium text-center">{slide.caption}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          >
            ←
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          >
            →
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
