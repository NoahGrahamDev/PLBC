import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Plan a Visit | Prairie Lea Baptist Church",
  description: "What to expect when you visit Prairie Lea Baptist Church: parking, dress, service length, accessibility, and nursery information.",
};

export default function VisitPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-[var(--font-arvo)]">
            Plan a Visit
          </h1>

          <div className="space-y-8 text-gray-700 font-[var(--font-open-sans)]">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">Parking</h2>
              <p>There is a parking lot behind the church as well as parking on the side of the church near the street.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">Dress</h2>
              <p>Come as you are—you&apos;re welcome here.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">Service Length</h2>
              <p>Services typically last about an hour to an hour and a half.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">Accessibility</h2>
              <p>Our facilities are wheelchair accessible.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">Nursery</h2>
              <p>We have a nursery available.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 font-[var(--font-arvo)]">Service Times</h2>
              <p>
                Service times are listed on our{" "}
                <Link href="/" className="text-[#2563eb] hover:underline">Home page</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
