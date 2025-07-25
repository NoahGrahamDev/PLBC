import React from 'react';
import ImageCarousel from './ImageCarousel';

export default function Hero() {
  return (
    <ImageCarousel className="">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-arvo)] drop-shadow-lg">
            Welcome to Prairie Lea Baptist Church
          </h2>
          <p className="text-xl lg:text-2xl text-white/95 mb-8 font-[var(--font-open-sans)] drop-shadow-md">
            Shining His Light, Sharing His Word, Showing His Love since 1850
          </p>
          <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            We are a church on mission and engaged in ministry, striving to make a real difference in our world for Jesus Christ. 
            Whatever your church background — or no church background at all — there is a place for you here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#services" 
              className="bg-white text-[#2563eb] hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Join Us This Sunday
            </a>
            <a 
              href="#about" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm"
            >
              Learn More About Us
            </a>
          </div>
        </div>
        
      </div>
    </ImageCarousel>
  );
}
