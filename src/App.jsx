import { useEffect } from 'react';

import HeroSection from './sections/HeroSection';
import GallerySection from './sections/GallerySection';
import SEOSection from './sections/SEOSection';
import Footer from './sections/Footer';

import Navbar from './components/Navbar';

export default function App() {
  useEffect(() => {
    document.title = 'Cars Spot';
  }, []);
  return (
    <main className="flex flex-col items-center bg-background ">
      <div className="flex flex-col w-full ">
        <Navbar />
        <HeroSection />
        <GallerySection />
        <SEOSection />
        <Footer />
      </div>
    </main>
  );
}
