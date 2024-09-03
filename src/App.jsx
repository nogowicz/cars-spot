import { useEffect } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import GallerySection from './sections/GallerySection';
import SEOSection from './sections/SEOSection';
import Footer from './sections/Footer';

export default function App() {
  useEffect(() => {
    document.title = 'Cars Spot';
  }, []);
  return (
    <main className="bg-background flex-col flex items-center ">
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
