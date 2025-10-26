import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/aic_logo.png" alt="Accinsco" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Providing trusted workers' compensation insurance solutions for businesses across the nation.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About AIC
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('policyholders')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Policyholders
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('claims')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Claims
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('workers-comp')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Workers' Compensation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('quote')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Get a Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('claims')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  File a Claim
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Agent Portal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Online Payment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  123 Insurance Way<br />
                  Suite 100<br />
                  Cityville, ST 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@accinsco.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  info@accinsco.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Accident Insurance Company. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
