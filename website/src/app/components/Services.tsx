import React from 'react';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Bible Study',
      time: 'Sunday 9:15 AM',
      description: 'Join us for in-depth Bible study and fellowship as we grow together in God\'s Word.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      title: 'Worship Service',
      time: 'Sunday 10:30 AM',
      description: 'Experience heartfelt worship, inspiring music, and biblical teaching in our main service.'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Fellowship & Study',
      time: 'Wednesday 6:00 PM',
      description: 'Enjoy a meal together followed by Bible study and prayer in a welcoming environment.'
    }
  ];

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-[var(--font-arvo)]">
            Join Us for Worship
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-[var(--font-open-sans)]">
            We invite you to join our church family for worship, fellowship, and spiritual growth. 
            All are welcome regardless of background or experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">
                {service.title}
              </h3>
              <p className="text-lg font-semibold text-[#2563eb] mb-4">
                {service.time}
              </p>
              <p className="text-gray-600 leading-relaxed font-[var(--font-open-sans)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Plan Your Visit
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
