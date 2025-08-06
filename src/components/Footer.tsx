import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-blue-600 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <img 
            src="/kanan-logo.svg" 
            alt="Kanan.co" 
            className="h-12 mx-auto filter brightness-0 invert"
          />
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <MapPin className="w-4 h-4" />
              <span className="font-body">Vadodara, Gujarat</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <Phone className="w-4 h-4" />
              <span className="font-body">+919228122553</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-blue-200">
              <Mail className="w-4 h-4" />
              <span className="font-body">info@kanan.co</span>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-200">
          <p className="font-body">&copy; 2025 Kanan.co · SEVP Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 