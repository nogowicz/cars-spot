import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import GallerySection from './sections/GallerySection';

export default function App() {
  return (
    <main className="bg-background flex-col flex items-center ">
      <div className="flex flex-col w-full ">
        <Navbar />
        <HeroSection />
        <GallerySection />
      </div>
    </main>
  );
}
