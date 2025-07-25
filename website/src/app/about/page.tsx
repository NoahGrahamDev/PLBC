import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-[var(--font-arvo)]">
              About Us
            </h1>
            <p className="text-xl text-gray-600 font-[var(--font-open-sans)] max-w-3xl mx-auto">
              Learn about our church family and the people who serve our community
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-[var(--font-arvo)] text-center">
              Who We Are
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
              <div className="prose prose-lg text-gray-700 font-[var(--font-open-sans)] max-w-none">
                <p className="mb-6 leading-relaxed">
                  We believe that Jesus Christ is God. Jesus provides us with the clearest picture of God that humans can receive (see John 1:1, 14).
                </p>
                <p className="mb-6 leading-relaxed">
                  We believe that the Bible is God&rsquo;s revelation of Himself to people. The entirety of the Bible (the 66 books from Genesis to Revelation) is the inspired, inerrant, infallible, authoritative Word of God (see 2 Timothy 3:16-17).
                </p>
                <p className="mb-6 leading-relaxed">
                  We believe that Jesus is the only way for people to have a forever relationship with God. Jesus declared this Himself, &ldquo;I am the way, and the truth, and the life. No man comes to the Father except through me&rdquo; (John 14:6).
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">We are a Southern Baptist congregation.</p>
                  <p>We subscribe to the Baptist Faith and Message, 2000.</p>
                  <p>We affiliate with the Southern Baptist of Texas Convention and are a member of the Bluebonnet Baptist Association.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 font-[var(--font-arvo)] text-center">
              Our Staff
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-24 h-24 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">KM</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">
                  Keith Maddox
                </h3>
                <p className="text-[#2563eb] font-semibold mb-4 font-[var(--font-open-sans)]">
                  Pastor
                </p>
                <div className="text-gray-700 font-[var(--font-open-sans)] text-left">
                  <p className="mb-4">
                    Pastor Keith and his wife, Monica, came to Prairie Lea in 2015. They have served churches and ministries in Texas and Louisiana for over 40 years. He is a graduate of New Orleans Baptist Theological Seminary. They have two children and four grandchildren.
                  </p>
                  <p>
                    Monica went home to be with the Lord in 2021.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-24 h-24 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">MC</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">
                  Megan Castanon
                </h3>
                <p className="text-[#2563eb] font-semibold mb-4 font-[var(--font-open-sans)]">
                  Youth Minister
                </p>
                <div className="text-gray-700 font-[var(--font-open-sans)] text-left">
                  <p className="mb-4">
                    Megan has been attending Prairie Lea Baptist since she was two years old. She has been leading our youth ministry since 2022. She is currently working on her degree from New Orleans Baptist Theological Seminary.
                  </p>
                  <p>
                    In her spare time, Megan enjoys music (she has a beautiful voice) and working with animals.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                <div className="w-24 h-24 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">RL</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">
                  Robert Lanning
                </h3>
                <p className="text-[#2563eb] font-semibold mb-4 font-[var(--font-open-sans)]">
                  Music Minister
                </p>
                <div className="text-gray-700 font-[var(--font-open-sans)] text-left">
                  <p className="mb-4">
                    Robert and his wife Becky came to Prairie Lea in 2024 as our Music Minister. Robert is a graduate of the University of Texas at San Antonio and Sioux Falls Seminary. They have 3 children and 3 grand-children.
                  </p>
                  <p>
                    In his spare time, Robert tutors and teaches math, finance, accounting, computer software, and SAT/ACT preparation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
