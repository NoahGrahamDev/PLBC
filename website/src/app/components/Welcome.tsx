import React from 'react';

export default function About() {
  const missionPoints = [
    'Reaching and touching people since 1850',
    'Shining His Light in our community',
    'Sharing His Word through biblical teaching',
    'Showing His Love through service and fellowship',
    'Making a real difference in our world for Jesus Christ',
    'Welcoming all backgrounds and experiences'
  ];

  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-[var(--font-arvo)]">
              A Message from Pastor Keith Maddox
            </h2>
            <div className="prose prose-lg text-gray-700 font-[var(--font-open-sans)]">
              <p className="mb-6 leading-relaxed">
                Prairie Lea Baptist Church has been reaching and touching people since 1850. Today, we are still an exciting place where people are &ldquo;Shining His Light, Sharing His Word, Showing His Love&rdquo; as we strive to help people make sense out of life through Christ-centered living.
              </p>
              <p className="mb-6 leading-relaxed">
                We are a church on mission and engaged in ministry, striving to make a real difference in our world for Jesus Christ. Whatever your church background — or no church background at all — there is a place for you and we welcome you to Prairie Lea Baptist Church.
              </p>
              <p className="mb-6 leading-relaxed">
                Thanks for visiting our website!
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-16 h-16 bg-[#ce6712] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Pastor Keith Maddox</p>
                  <p className="text-gray-600">Senior Pastor</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-[var(--font-arvo)]">
              Our Mission
            </h3>
            <div className="space-y-4">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#ce6712] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-[var(--font-open-sans)]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-[var(--font-arvo)]">
                Visit Us
              </h4>
              <div className="space-y-3 text-gray-700 font-[var(--font-open-sans)]">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ce6712]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">6825 San Marcos Hwy</p>
                    <p>Prairie Lea, Texas 78661</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#ce6712]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p>512-488-2274</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
