import Header from './components/Header';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Welcome from './components/Welcome';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#eeeeee]">
      <Header />
      <Navigation />
      <Carousel />
      <Welcome />
      <Footer />
    </div>
  );
}
