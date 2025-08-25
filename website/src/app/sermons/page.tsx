import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Sermons | Prairie Lea Baptist Church",
  description: "Watch and listen to recent sermons from Prairie Lea Baptist Church on Facebook.",
};

export default function SermonsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-[var(--font-arvo)]">
            Sermons
          </h1>
          <p className="text-lg text-gray-700 mb-8 font-[var(--font-open-sans)]">
            All of our recent sermons are available on Facebook—tap the button below to watch.
          </p>
          <a
            href="https://www.facebook.com/share/1B1h3bQMQ5/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-3 rounded-lg font-medium transition-colors text-lg"
          >
            Visit Our Sermons on Facebook
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
