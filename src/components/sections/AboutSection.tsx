import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Trusted Insurance Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been providing comprehensive workers' compensation solutions
            that protect businesses and their employees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Leading the Industry with Innovation and Trust
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Accident Insurance Company (AIC) has been at the forefront of workers' compensation
              insurance, combining traditional values with modern technology to deliver exceptional
              service to our clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to innovation means we're constantly evolving our processes to make
              insurance easier, faster, and more accessible. From instant quotes to streamlined
              claims processing, we leverage cutting-edge technology to serve you better.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg">
                <Award size={20} />
                <span className="font-medium">Industry Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg">
                <TrendingUp size={20} />
                <span className="font-medium">Proven Growth</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide reliable, affordable workers' compensation insurance while delivering
                exceptional customer service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300 mt-8">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrity, innovation, and putting our clients first in everything we do.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300 -mt-8">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Promise</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fast, fair claims processing and 24/7 support when you need us most.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Our Growth</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Serving over 50,000 businesses nationwide with continuous expansion.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Policies</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
