import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/kanan-logo.svg" 
                alt="Kanan.co" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <h3 className="text-lg font-semibold text-white mb-4 font-heading">IELTS Coaching</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Global Education Excellence. Committed to leading in higher education support, 
              with trusted services and tailored solutions for student success worldwide.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-yellow-500" />
                <span>ISO-Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-green-500" />
                <span>Authorized Partner</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 font-heading">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#course-features" className="text-gray-300 hover:text-white transition-colors">
                  Course Features
                </a>
              </li>
              <li>
                <a href="#success-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-300 hover:text-white transition-colors">
                  Our Trainers
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Study Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Mock Tests
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 font-heading">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Old, New No 3, 2nd Floor, 1A, Dr Sadasivam Rd, T. Nagar, Chennai, Tamil Nadu 600017
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919228122552" className="text-gray-300 hover:text-white transition-colors">
                  +91 92281 22552
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@kanan.co" className="text-gray-300 hover:text-white transition-colors">
                  info@kanan.co
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2025 KANAN.CO All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 