import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#dadada] via-[#eeeeee] to-[#c5c5c5] border-t border-[#bbbbbb]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[#444444] text-sm">
            <p>Copyright © 2024 | All rights reserved.</p>
          </div>
          <div className="text-[#444444] text-sm">
            Powered by <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[#ce6712] hover:underline">Next.js</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
