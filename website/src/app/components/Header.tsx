'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-32 h-16 relative">
              <Image
                src="/swoosh-logo.png"
                alt="Prairie Lea Baptist Church Swoosh Logo"
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
            <div>
              <h1 className="text-lg lg:text-2xl font-bold text-[#2563eb] font-[var(--font-arvo)]">
                Prairie Lea Baptist Church
              </h1>
              <p className="text-gray-600 text-sm font-[var(--font-open-sans)] hidden sm:block">
                Shining His Light - Sharing His Word - Showing His Love
              </p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              About
            </a>
            <a href="/sermons" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Sermons
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Contact
            </a>
            <a href="/visit" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Visit
            </a>
            <a href="/eternity" className="text-gray-700 hover:text-[#2563eb] font-medium transition-colors">
              Eternity
            </a>
            <a href="https://app.easytithe.com/app/giving/plbctexas" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Give Online
            </a>
          </nav>
          
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-[#2563eb]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-50 border-t border-gray-100 shadow-lg rounded-b-xl mx-4 mb-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="px-6 py-6 space-y-4">
              <a href="/about" className="block text-gray-700 hover:text-[#2563eb] hover:bg-white font-medium transition-all duration-200 px-4 py-3 rounded-lg">
                About
              </a>
              <a href="/sermons" className="block text-gray-700 hover:text-[#2563eb] hover:bg-white font-medium transition-all duration-200 px-4 py-3 rounded-lg">
                Sermons
              </a>
              <a href="#services" className="block text-gray-700 hover:text-[#2563eb] hover:bg-white font-medium transition-all duration-200 px-4 py-3 rounded-lg">
                Services
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-[#2563eb] hover:bg-white font-medium transition-all duration-200 px-4 py-3 rounded-lg">
                Contact
              </a>
              <a href="/visit" className="block text-gray-700 hover:text-[#2563eb] hover:bg-white font-medium transition-all duration-200 px-4 py-3 rounded-lg">
                Visit
              </a>
              <a href="/eternity" className="block text-gray-700 hover:text-[#2563eb] hover:bg-white font-medium transition-all duration-200 px-4 py-3 rounded-lg">
                Eternity
              </a>
              <a href="https://app.easytithe.com/app/giving/plbctexas" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 text-center block shadow-sm hover:shadow-md">
                Give Online
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
