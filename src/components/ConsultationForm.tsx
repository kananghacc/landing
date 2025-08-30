import React, { useState } from 'react';
import { X, Phone, Mail, User, MessageCircle, CheckCircle, Clock, Award } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  classType: string;
  currentBand?: string;
  targetBand?: string;
  examDate?: string;
}

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen,
  onClose,
  formData,
  onInputChange,
  onSubmit
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div id="consultation-form" className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Book Your Free Demo Class
              </h2>
            <p className="text-gray-600">Get personalized IELTS study plan in 2 hours</p>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">Thank You!</h3>
            <p className="text-gray-600 mb-4">Your form has been submitted successfully.</p>
            <p className="text-sm text-gray-500">We'll contact you within 30 minutes.</p>
          </div>
        )}

        {/* Form */}
        {!showSuccess && (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Benefits Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-center space-x-2 mb-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-900">What You'll Get:</span>
              </div>
              <ul className="space-y-1 text-sm text-blue-800">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>1-on-1 2-hour assessment session</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Personalized learning plan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>3-day mock test portal access</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Course recommendation</span>
                </li>
              </ul>
            </div>

            {/* Required Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-heading">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-heading">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={onInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-heading">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-heading">
                  Preferred Class Type *
                </label>
                <select
                  id="classType"
                  name="classType"
                  value={formData.classType}
                  onChange={onInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select class type</option>
                  <option value="online-group">Online Group Class</option>
                  <option value="offline-group">Offline Group Class</option>
                  <option value="online-1on1">Online 1-on-1 Class</option>
                  <option value="offline-1on1">Offline 1-on-1 Class</option>
                </select>
              </div>
            </div>

            {/* Optional Fields */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-heading">Additional Information (Optional)</h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-heading">
                    Current Band Score
                  </label>
                  <select
                    id="currentBand"
                    name="currentBand"
                    value={formData.currentBand || ''}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select band</option>
                    <option value="4.0">4.0</option>
                    <option value="4.5">4.5</option>
                    <option value="5.0">5.0</option>
                    <option value="5.5">5.5</option>
                    <option value="6.0">6.0</option>
                    <option value="6.5">6.5</option>
                    <option value="7.0">7.0</option>
                    <option value="7.5">7.5</option>
                    <option value="8.0">8.0</option>
                    <option value="8.5">8.5</option>
                    <option value="9.0">9.0</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-heading">
                    Target Band Score
                  </label>
                  <select
                    id="targetBand"
                    name="targetBand"
                    value={formData.targetBand || ''}
                    onChange={onInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select target</option>
                    <option value="6.0">6.0</option>
                    <option value="6.5">6.5</option>
                    <option value="7.0">7.0</option>
                    <option value="7.5">7.5</option>
                    <option value="8.0">8.0</option>
                    <option value="8.5">8.5</option>
                    <option value="9.0">9.0</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 font-heading">
                  Planned Exam Date
                </label>
                <input
                  type="date"
                  name="examDate"
                  value={formData.examDate}
                  onChange={onInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  <span>Free Demo Class</span>
                </>
              )}
            </button>

            {/* Alternative Contact */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">Prefer not to fill form?</p>
              <a
                href="https://wa.me/919228122552?text=Hi! I'm interested in IELTS coaching. Can you help me?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with our counselor via WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationForm; 