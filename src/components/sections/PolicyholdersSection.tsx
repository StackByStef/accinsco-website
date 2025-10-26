import { FileText, CreditCard, User, HelpCircle, Download, Bell } from 'lucide-react';

export default function PolicyholdersSection() {
  const resources = [
    {
      icon: FileText,
      title: 'Policy Documents',
      description: 'Access your policy information, certificates, and important documents anytime.',
      color: 'blue',
    },
    {
      icon: CreditCard,
      title: 'Make a Payment',
      description: 'Securely pay your premium online with multiple payment options available.',
      color: 'green',
    },
    {
      icon: User,
      title: 'Update Information',
      description: 'Keep your contact details and business information current in our system.',
      color: 'purple',
    },
    {
      icon: HelpCircle,
      title: 'FAQ & Support',
      description: 'Find answers to common questions or contact our support team for help.',
      color: 'orange',
    },
    {
      icon: Download,
      title: 'Forms & Resources',
      description: 'Download necessary forms, guides, and educational materials.',
      color: 'cyan',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Stay informed about policy renewals, updates, and important alerts.',
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; icon: string; hover: string } } = {
      blue: { bg: 'from-blue-50 to-blue-100', icon: 'bg-blue-600', hover: 'hover:from-blue-100 hover:to-blue-200' },
      green: { bg: 'from-green-50 to-green-100', icon: 'bg-green-600', hover: 'hover:from-green-100 hover:to-green-200' },
      purple: { bg: 'from-purple-50 to-purple-100', icon: 'bg-purple-600', hover: 'hover:from-purple-100 hover:to-purple-200' },
      orange: { bg: 'from-orange-50 to-orange-100', icon: 'bg-orange-600', hover: 'hover:from-orange-100 hover:to-orange-200' },
      cyan: { bg: 'from-cyan-50 to-cyan-100', icon: 'bg-cyan-600', hover: 'hover:from-cyan-100 hover:to-cyan-200' },
      pink: { bg: 'from-pink-50 to-pink-100', icon: 'bg-pink-600', hover: 'hover:from-pink-100 hover:to-pink-200' },
    };
    return colors[color];
  };

  return (
    <section id="policyholders" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Policyholder Resources
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your policy, make payments, and access important resources through our
            convenient online portal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => {
            const colors = getColorClasses(resource.color);
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${colors.bg} ${colors.hover} p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group`}
              >
                <div className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 leading-relaxed">{resource.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Access Your Policyholder Portal
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our secure online portal gives you 24/7 access to your policy information,
                payment history, and important documents. Manage your account on your schedule.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">View and download policy documents instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Make secure online payments with autopay options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Track claims status and history in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Update your business information easily</span>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                Login to Portal
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Policy Number</span>
                    <span className="text-sm font-semibold text-gray-900">WC-2024-12345</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-sm text-gray-600">Coverage: 75% utilized</div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <CreditCard className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Next Payment Due</div>
                      <div className="text-lg font-bold text-gray-900">Dec 15, 2024</div>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all font-medium">
                    Pay Now
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Claims</span>
                    <span className="text-2xl font-bold text-blue-600">2</span>
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
