import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Phone size={14} />
            <span>(123) 456-7890</span>
          </a>
          <a href="mailto:info@accinsco.com" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Mail size={14} />
            <span>info@accinsco.com</span>
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-95'
            : 'bg-white bg-opacity-90'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/aic_logo.png" alt="Accinsco" className="h-12 w-auto" />
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About AIC
              </button>
              <button
                onClick={() => scrollToSection('policyholders')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Policyholders
              </button>
              <button
                onClick={() => scrollToSection('claims')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Claims
              </button>
              <button
                onClick={() => scrollToSection('workers-comp')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Workers' Compensation
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-medium"
              >
                Get a Quote
              </button>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                About AIC
              </button>
              <button
                onClick={() => scrollToSection('policyholders')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Policyholders
              </button>
              <button
                onClick={() => scrollToSection('claims')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Claims
              </button>
              <button
                onClick={() => scrollToSection('workers-comp')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Workers' Compensation
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('quote')}
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md font-medium"
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
