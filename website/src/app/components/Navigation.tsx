import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#f6bf93] via-[#e07014] to-[#ce6712] py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-[var(--font-arvo)]">
            Welcome to Prairie Lea Baptist Church
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 font-[var(--font-open-sans)]">
            Shining His Light, Sharing His Word, Showing His Love since 1850
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are a church on mission and engaged in ministry, striving to make a real difference in our world for Jesus Christ. 
            Whatever your church background — or no church background at all — there is a place for you here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#services" 
              className="bg-white text-[#ce6712] hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            >
              Join Us This Sunday
            </a>
            <a 
              href="#about" 
              className="border-2 border-white text-white hover:bg-white hover:text-[#ce6712] px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="text-xl font-bold mb-2">Bible Study</h3>
            <p className="text-white/90">Sunday 9:15 AM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="text-3xl mb-3">🙏</div>
            <h3 className="text-xl font-bold mb-2">Worship Service</h3>
            <p className="text-white/90">Sunday 10:30 AM</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-bold mb-2">Fellowship</h3>
            <p className="text-white/90">Wednesday 6:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
