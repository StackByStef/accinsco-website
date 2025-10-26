import { useState } from 'react';
import { ClipboardList, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function ClaimsSection() {
  const [formData, setFormData] = useState({
    policy_number: '',
    claimant_name: '',
    claimant_email: '',
    claimant_phone: '',
    incident_date: '',
    incident_description: '',
    injury_type: '',
    witness_info: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('claims_submissions').insert([
        {
          ...formData,
          status: 'submitted',
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        policy_number: '',
        claimant_name: '',
        claimant_email: '',
        claimant_phone: '',
        incident_date: '',
        incident_description: '',
        injury_type: '',
        witness_info: '',
      });
    } catch (error) {
      console.error('Error submitting claim:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const claimsProcess = [
    {
      icon: ClipboardList,
      title: 'File Your Claim',
      description: 'Submit your claim online with all necessary details and documentation.',
      color: 'blue',
    },
    {
      icon: Clock,
      title: 'Review Process',
      description: 'Our team reviews your claim within 24-48 hours of submission.',
      color: 'orange',
    },
    {
      icon: CheckCircle,
      title: 'Resolution',
      description: 'Receive notification of approval and processing of your claim.',
      color: 'green',
    },
  ];

  return (
    <section id="claims" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Claims Center
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fast and Fair Claims Processing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand that workplace injuries need immediate attention. Our streamlined claims
            process ensures quick resolution and support when you need it most.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {claimsProcess.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {index < claimsProcess.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"></div>
                )}
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 transform hover:scale-105 z-10">
                  <div className={`w-16 h-16 bg-${step.color}-600 rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-2">Step {index + 1}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">File a Claim Online</h3>
              <p className="text-gray-600">
                Complete the form below to submit your workers' compensation claim. Our team will
                review it promptly and contact you within 24-48 hours.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-green-900">Claim Submitted Successfully!</div>
                  <div className="text-sm text-green-700">We'll review your claim and contact you shortly.</div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                <div>
                  <div className="font-semibold text-red-900">Submission Failed</div>
                  <div className="text-sm text-red-700">Please try again or contact support.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="policy_number" className="block text-sm font-medium text-gray-700 mb-2">
                    Policy Number *
                  </label>
                  <input
                    type="text"
                    id="policy_number"
                    name="policy_number"
                    required
                    value={formData.policy_number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="WC-2024-12345"
                  />
                </div>

                <div>
                  <label htmlFor="claimant_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Claimant Name *
                  </label>
                  <input
                    type="text"
                    id="claimant_name"
                    name="claimant_name"
                    required
                    value={formData.claimant_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="claimant_email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="claimant_email"
                    name="claimant_email"
                    required
                    value={formData.claimant_email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="claimant_phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="claimant_phone"
                    name="claimant_phone"
                    value={formData.claimant_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="incident_date" className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Incident *
                  </label>
                  <input
                    type="date"
                    id="incident_date"
                    name="incident_date"
                    required
                    value={formData.incident_date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="injury_type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Injury *
                  </label>
                  <select
                    id="injury_type"
                    name="injury_type"
                    required
                    value={formData.injury_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select injury type</option>
                    <option value="Slip and Fall">Slip and Fall</option>
                    <option value="Lifting Injury">Lifting Injury</option>
                    <option value="Repetitive Strain">Repetitive Strain</option>
                    <option value="Equipment Accident">Equipment Accident</option>
                    <option value="Vehicle Accident">Vehicle Accident</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="incident_description" className="block text-sm font-medium text-gray-700 mb-2">
                  Incident Description *
                </label>
                <textarea
                  id="incident_description"
                  name="incident_description"
                  required
                  value={formData.incident_description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please describe what happened in detail..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="witness_info" className="block text-sm font-medium text-gray-700 mb-2">
                  Witness Information (if applicable)
                </label>
                <textarea
                  id="witness_info"
                  name="witness_info"
                  value={formData.witness_info}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Names and contact information of any witnesses..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Claim'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
