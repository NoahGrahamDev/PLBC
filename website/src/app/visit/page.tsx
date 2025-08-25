import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Plan a Visit | Prairie Lea Baptist Church",
  description: "Plan your visit to Prairie Lea Baptist Church: parking, what to expect, service times, accessibility, and nursery information.",
};

export default function VisitPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-[var(--font-arvo)]">
              Plan a Visit
            </h1>
            <p className="mt-4 text-lg text-gray-700 font-[var(--font-open-sans)]">
              We&apos;re glad you&apos;re here. Whether it&apos;s your first time or first time in a while,
              you&apos;ll find a friendly church family, Christ-centered worship, and clear teaching from God&apos;s Word.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 7-9 11-9 11S3 17 3 10a9 9 0 1118 0z" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 font-[var(--font-arvo)]">Parking</h2>
              </div>
              <p className="text-gray-700 font-[var(--font-open-sans)]">
                There is a parking lot behind the church as well as parking on the side of the church near the street.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 font-[var(--font-arvo)]">What to Wear</h2>
              </div>
              <p className="text-gray-700 font-[var(--font-open-sans)]">
                Come as you are—you&apos;re welcome here.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 1" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 font-[var(--font-arvo)]">Service Length</h2>
              </div>
              <p className="text-gray-700 font-[var(--font-open-sans)]">
                Services typically last about an hour to an hour and a half.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10l-9 4-9-4m18 0v6l-9 4-9-4v-6" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 font-[var(--font-arvo)]">Accessibility</h2>
              </div>
              <p className="text-gray-700 font-[var(--font-open-sans)]">
                Our facilities are wheelchair accessible.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 009.288 0" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 font-[var(--font-arvo)]">Nursery</h2>
              </div>
              <p className="text-gray-700 font-[var(--font-open-sans)]">
                We have a nursery available.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <h2 className="text-xl font-bold text-gray-900 font-[var(--font-arvo)]">Service Times</h2>
              </div>
              <ul className="space-y-2 text-gray-700 font-[var(--font-open-sans)]">
                <li>
                  <span className="font-semibold">Sunday Bible Study</span> — 9:15 AM
                </li>
                <li>
                  <span className="font-semibold">Sunday Worship</span> — 10:30 AM
                </li>
                <li>
                  <span className="font-semibold">Wednesday Fellowship</span> — 6:00 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 lg:p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 font-[var(--font-arvo)]">What to Expect</h2>
            <p className="text-gray-700 mb-4 font-[var(--font-open-sans)]">
              You&apos;ll find friendly greeters and plenty of seating. Our music is Christ-centered,
              and the preaching is from the Bible with practical application for everyday life.
            </p>
            <p className="text-gray-700 font-[var(--font-open-sans)]">
              If you have questions when you arrive, just let one of our ushers know and they&apos;ll be happy to help.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
