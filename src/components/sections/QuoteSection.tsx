import { useState } from 'react';
import { Calculator, ArrowRight, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function QuoteSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    industry: '',
    num_employees: '',
    annual_payroll: '',
    coverage_type: '',
    additional_info: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('quote_requests').insert([
        {
          ...formData,
          num_employees: parseInt(formData.num_employees),
          annual_payroll: formData.annual_payroll ? parseFloat(formData.annual_payroll) : null,
          status: 'pending',
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setStep(1);
      setFormData({
        business_name: '',
        contact_name: '',
        email: '',
        phone: '',
        industry: '',
        num_employees: '',
        annual_payroll: '',
        coverage_type: '',
        additional_info: '',
      });
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.business_name && formData.contact_name && formData.email && formData.phone;
    }
    if (step === 2) {
      return formData.industry && formData.num_employees && formData.coverage_type;
    }
    return true;
  };

  return (
    <section id="quote" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Get a Quote
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Quote in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answer a few simple questions and receive a customized workers' compensation insurance
            quote tailored to your business needs.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                1
              </div>
              <div className={`h-1 flex-1 rounded ${step > 1 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                2
              </div>
              <div className={`h-1 flex-1 rounded ${step > 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                3
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-start gap-4">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-green-900 text-lg mb-1">Quote Request Submitted!</div>
                <div className="text-green-700">
                  Thank you for your interest! Our team will review your information and send you a
                  customized quote within 24 hours.
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl flex items-start gap-4">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <div className="font-semibold text-red-900 text-lg mb-1">Submission Failed</div>
                <div className="text-red-700">
                  We encountered an error submitting your quote request. Please try again or contact us
                  directly.
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg mb-3">
                    <Calculator className="text-blue-600" size={20} />
                    <span className="font-semibold text-blue-900">Step 1: Contact Information</span>
                  </div>
                  <p className="text-gray-600">Tell us about your business and how to reach you</p>
                </div>

                <div>
                  <label htmlFor="business_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business_name"
                    name="business_name"
                    required
                    value={formData.business_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@acme.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg mb-3">
                    <Calculator className="text-blue-600" size={20} />
                    <span className="font-semibold text-blue-900">Step 2: Business Details</span>
                  </div>
                  <p className="text-gray-600">Help us understand your business and coverage needs</p>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select your industry</option>
                    <option value="Construction">Construction</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Retail">Retail</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Technology">Technology</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="num_employees" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Employees *
                    </label>
                    <input
                      type="number"
                      id="num_employees"
                      name="num_employees"
                      required
                      min="1"
                      value={formData.num_employees}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="50"
                    />
                  </div>

                  <div>
                    <label htmlFor="annual_payroll" className="block text-sm font-medium text-gray-700 mb-2">
                      Annual Payroll (optional)
                    </label>
                    <input
                      type="number"
                      id="annual_payroll"
                      name="annual_payroll"
                      min="0"
                      value={formData.annual_payroll}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="1000000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="coverage_type" className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Type *
                  </label>
                  <select
                    id="coverage_type"
                    name="coverage_type"
                    required
                    value={formData.coverage_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select coverage type</option>
                    <option value="Basic Coverage">Basic Coverage</option>
                    <option value="Standard Coverage">Standard Coverage</option>
                    <option value="Premium Coverage">Premium Coverage</option>
                    <option value="Custom Coverage">Custom Coverage</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg mb-3">
                    <Calculator className="text-blue-600" size={20} />
                    <span className="font-semibold text-blue-900">Step 3: Additional Information</span>
                  </div>
                  <p className="text-gray-600">Any other details that might help us provide a better quote</p>
                </div>

                <div>
                  <label htmlFor="additional_info" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (optional)
                  </label>
                  <textarea
                    id="additional_info"
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about any specific coverage needs, past claims history, or other relevant information..."
                  ></textarea>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Quote Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Business:</span>
                      <span className="font-medium text-gray-900">{formData.business_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Industry:</span>
                      <span className="font-medium text-gray-900">{formData.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employees:</span>
                      <span className="font-medium text-gray-900">{formData.num_employees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-medium text-gray-900">{formData.coverage_type}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
                >
                  <ArrowLeft size={20} />
                  Previous
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CheckCircle size={20} />
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
