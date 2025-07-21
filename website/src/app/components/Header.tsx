import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ce6712] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PLBC</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-[#ce6712] font-[var(--font-arvo)]">
                Prairie Lea Baptist Church
              </h1>
              <p className="text-gray-600 text-sm font-[var(--font-open-sans)] hidden sm:block">
                Shining His Light - Sharing His Word - Showing His Love
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-gray-700 hover:text-[#ce6712] font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#ce6712] font-medium transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#ce6712] font-medium transition-colors">
              Contact
            </a>
            <a href="/eternity" className="text-gray-700 hover:text-[#ce6712] font-medium transition-colors">
              Eternity
            </a>
            <a href="#give" className="bg-[#ce6712] hover:bg-[#b85a0f] text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Give Online
            </a>
          </nav>
          
          <button className="md:hidden p-2 text-gray-700 hover:text-[#ce6712]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
