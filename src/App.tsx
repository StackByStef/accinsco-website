import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PolicyholdersSection from './components/sections/PolicyholdersSection';
import ClaimsSection from './components/sections/ClaimsSection';
import WorkersCompSection from './components/sections/WorkersCompSection';
import ContactSection from './components/sections/ContactSection';
import QuoteSection from './components/sections/QuoteSection';
import BlogSection from './components/sections/BlogSection';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PolicyholdersSection />
        <ClaimsSection />
        <WorkersCompSection />
        <QuoteSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
