import Header from './components/Header';
import Hero from './components/Navigation';
import Services from './components/Carousel';
import About from './components/Welcome';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
