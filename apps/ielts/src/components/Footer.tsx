import React from 'react';
const kananLogo = '/kanan-logo.svg';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={kananLogo} 
                alt="Kanan.co" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering students to achieve their IELTS goals with expert guidance and proven methodology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#success-stories" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Trainers
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 font-heading">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+919228122552" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +91 92281 22552
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@kanan.co" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@kanan.co
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  T. Nagar, Chennai, Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2025 KANAN.CO All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 