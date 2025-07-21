import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Eternity() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-[var(--font-arvo)]">
              Eternity?
            </h1>
            <p className="text-xl text-gray-600 font-[var(--font-open-sans)]">
              Where will you spend eternity?
            </p>
            <p className="text-lg text-gray-700 font-[var(--font-open-sans)] mt-4">
              Here&rsquo;s how you can know heaven will be your home.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-[var(--font-arvo)] text-center">
              The Romans Road to Salvation:
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-[#ce6712] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[var(--font-arvo)]">
                  1. We are all sinners by nature and by choice.
                </h3>
                <p className="text-gray-700 font-[var(--font-open-sans)] italic">
                  Romans 3:23: For all have sinned and fall short of the glory of God.
                </p>
              </div>

              <div className="border-l-4 border-[#ce6712] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[var(--font-arvo)]">
                  2. We receive eternal life as a free gift.
                </h3>
                <p className="text-gray-700 font-[var(--font-open-sans)] italic">
                  Romans 6:23: For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.
                </p>
              </div>

              <div className="border-l-4 border-[#ce6712] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[var(--font-arvo)]">
                  3. God proves His love for us.
                </h3>
                <p className="text-gray-700 font-[var(--font-open-sans)] italic">
                  Romans 5:8: But God proves His own love toward us, in that while we were still sinners, Christ died for us.
                </p>
              </div>

              <div className="border-l-4 border-[#ce6712] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[var(--font-arvo)]">
                  4. We must trust and surrender to Jesus as Lord.
                </h3>
                <p className="text-gray-700 font-[var(--font-open-sans)] italic">
                  Romans 10:9-10: That if you confess with your mouth, &ldquo;Jesus is Lord&rdquo;, and believe in your heart that God raised him from the dead, you will be saved. One believes with the heart, resulting in righteousness, and one confesses with the mouth, resulting in salvation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-[var(--font-arvo)] text-center">
                  A sinner&rsquo;s prayer for God&rsquo;s forgiveness:
                </h3>
                <div className="bg-white rounded-lg p-6 border-l-4 border-[#ce6712]">
                  <p className="text-gray-700 font-[var(--font-open-sans)] italic leading-relaxed">
                    &ldquo;Dear God, I know I&rsquo;m a sinner. I know my sin deserves to be punished. I believe Christ is the Son of God, who died for me and rose from the grave. I want to turn from my sin and trust Jesus Christ alone as my Savior. Thank you for the forgiveness and everlasting life I can now have through faith in Jesus. In Jesus&rsquo; name, Amen.&rdquo;
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-[#ce6712] pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-[var(--font-arvo)]">
                  5. Our assurance of salvation is through Jesus
                </h3>
                <p className="text-gray-700 font-[var(--font-open-sans)] italic">
                  Romans 10:13: For everyone who calls upon the name of the Lord shall be saved.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#ce6712] text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2 font-[var(--font-arvo)]">
                  Ready to Take the Next Step?
                </h3>
                <p className="font-[var(--font-open-sans)]">
                  We would love to talk with you about your decision to follow Jesus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
