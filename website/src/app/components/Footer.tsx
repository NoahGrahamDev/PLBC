import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-24 h-12 relative">
                <Image
                  src="/swoosh-logo.png"
                  alt="Prairie Lea Baptist Church Swoosh Logo"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold font-[var(--font-arvo)]">
                  Prairie Lea Baptist Church
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-4 font-[var(--font-open-sans)]">
              Shining His Light, Sharing His Word, Showing His Love since 1850.
            </p>
            <p className="text-gray-400 text-sm">
              Making a real difference in our world for Jesus Christ.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-[var(--font-arvo)]">Contact Info</h4>
            <div className="space-y-3 text-gray-300 font-[var(--font-open-sans)]">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#2563eb] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>6825 San Marcos Hwy</p>
                  <p>Prairie Lea, TX 78661</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>512-488-2274</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 font-[var(--font-arvo)]">Service Times</h4>
            <div className="space-y-3 text-gray-300 font-[var(--font-open-sans)]">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <div>
                  <p className="font-semibold">Sunday Bible Study</p>
                  <p className="text-sm text-gray-400">9:15 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <div>
                  <p className="font-semibold">Sunday Worship</p>
                  <p className="text-sm text-gray-400">10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <p className="font-semibold">Wednesday Fellowship</p>
                  <p className="text-sm text-gray-400">6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Prairie Lea Baptist Church. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
            <a href="/sermons" className="text-gray-300 hover:text-white">Sermons</a>
            <a href="/visit" className="text-gray-300 hover:text-white">Visit</a>
            <a href="/eternity" className="text-gray-300 hover:text-white">Eternity</a>
            <Link href="/#contact" className="text-gray-300 hover:text-white">Contact</Link>
            <a href="https://app.easytithe.com/app/giving/plbctexas" className="text-gray-300 hover:text-white">Give</a>
          </div>
          <p className="text-gray-400 text-sm">
            Powered by <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] hover:underline">Next.js</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
