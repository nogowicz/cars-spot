import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import GallerySection from './sections/GallerySection';
import SEOSection from './sections/SEOSection';

export default function App() {
  return (
    <main className="bg-background flex-col flex items-center ">
      <div className="flex flex-col w-full ">
        <Navbar />
        <HeroSection />
        <GallerySection />
        <SEOSection />
      </div>
    </main>
  );
}
