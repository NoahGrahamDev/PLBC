'use client';

import React, { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Mission', href: '/our-mission' },
    { label: 'Directions', href: '/directions' },
    { label: 'Calendar', href: '/calendar-of-events' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'Give Online', href: '/give-online' },
    { label: 'Eternity?', href: '/eternity' },
  ];

  return (
    <nav className="bg-gradient-to-b from-white to-[#d9d9d9] border-b border-[#dbdbdb]">
      <div className="max-w-6xl mx-auto px-4">
        <button
          className="lg:hidden w-full py-3 px-4 bg-gradient-to-b from-[#ce6712] to-[#88440c] text-white font-medium rounded mb-2 mt-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
        
        <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:space-x-0 space-y-0`}>
          {menuItems.map((item, index) => (
            <li key={index} className="border-l border-white border-r border-[#dbdbdb] first:border-l-[#dbdbdb]">
              <a
                href={item.href}
                className="block px-4 py-3 text-[#444444] hover:bg-[#ce6712] hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
