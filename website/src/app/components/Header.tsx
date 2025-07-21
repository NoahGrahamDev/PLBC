import React from 'react';

export default function Header() {
  return (
    <div className="bg-gradient-to-b from-[#e4e4e4] via-[#eeeeee] to-[#dadada] border-b border-[#bbbbbb]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#ce6712] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">PLBC</span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#e07014] font-[var(--font-arvo)]">
                Prairie Lea Baptist Church
              </h1>
              <p className="text-[#444444] text-sm lg:text-base font-[var(--font-open-sans)]">
                Shining His Light - Sharing His Word - Showing His Love
              </p>
            </div>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4 text-center lg:text-left">
            <h4 className="font-bold text-[#444444] mb-2">Service Times</h4>
            <div className="text-sm text-[#444444] space-y-1">
              <p>Sunday Mornings - 9:15am Bible Study</p>
              <p>10:30am Worship</p>
              <p>Sunday Evenings - Coming Soon!</p>
              <p>Wednesdays 6:00 pm Meal and Bible Study</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
