import { Shield, Users, Building, Briefcase, Heart, TrendingUp } from 'lucide-react';

export default function WorkersCompSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive Coverage',
      description: 'Full protection for workplace injuries and occupational diseases.',
    },
    {
      icon: Heart,
      title: 'Medical Care',
      description: 'Complete medical treatment coverage for injured employees.',
    },
    {
      icon: TrendingUp,
      title: 'Wage Replacement',
      description: 'Income benefits while employees recover from injuries.',
    },
    {
      icon: Briefcase,
      title: 'Legal Protection',
      description: 'Defense against employee lawsuits related to workplace injuries.',
    },
    {
      icon: Users,
      title: 'Rehabilitation Services',
      description: 'Support for employees returning to work after recovery.',
    },
    {
      icon: Building,
      title: 'Business Continuity',
      description: 'Protection that keeps your business operations running smoothly.',
    },
  ];

  const industries = [
    { name: 'Construction', description: 'Specialized coverage for construction risks' },
    { name: 'Manufacturing', description: 'Tailored solutions for manufacturing facilities' },
    { name: 'Healthcare', description: 'Protection for healthcare workers and facilities' },
    { name: 'Retail', description: 'Coverage designed for retail operations' },
    { name: 'Transportation', description: 'Solutions for transportation and logistics' },
    { name: 'Hospitality', description: 'Coverage for hotels, restaurants, and services' },
  ];

  return (
    <section id="workers-comp" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Workers' Compensation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Workers' Compensation Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your employees and your business with our industry-leading workers'
            compensation insurance designed for the modern workforce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 mb-16 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">Why Workers' Compensation Matters</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">For Your Employees</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Immediate medical care for workplace injuries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Income protection during recovery periods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Rehabilitation and return-to-work support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Death benefits for dependents if needed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">For Your Business</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Legal protection from employee lawsuits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Compliance with state regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Financial protection from injury costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improved employee morale and retention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Industry-Specific Solutions
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We understand that every industry has unique risks. Our specialized coverage options are
            tailored to meet the specific needs of your business sector.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h4>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Protect Your Workforce?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Get a customized workers' compensation quote tailored to your business needs. Our team
              of experts will work with you to find the perfect coverage at competitive rates.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('quote');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
