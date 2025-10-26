import { Shield, ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Shield size={16} />
              <span>Workers' Compensation You Can Trust</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Protecting Your
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Workforce
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Comprehensive workers' compensation insurance solutions designed to safeguard your business
              and protect your employees with cutting-edge technology and personalized service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('quote')}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
              >
                Get Your Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">Fast Claims Processing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <span className="text-gray-700 font-medium">Competitive Rates</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-90">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Industry Leading</div>
                      <div className="text-sm text-gray-600">Coverage Options</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full animate-progress" style={{ width: '95%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Customer Satisfaction</span>
                      <span className="font-semibold text-blue-600">95%</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-progress animation-delay-1000" style={{ width: '88%' }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Claims Processed</span>
                      <span className="font-semibold text-green-600">88%</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl">
                      <div className="text-3xl font-bold text-blue-600">50K+</div>
                      <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-white rounded-xl">
                      <div className="text-3xl font-bold text-cyan-600">15+</div>
                      <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
