import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onBookConsultation: (selectedPackage?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onBookConsultation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/kanan-logo.svg" 
              alt="Kanan.co - IELTS Coaching" 
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#course-features" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Course Features
            </a>
            <a 
              href="#success-stories" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Success Stories
            </a>
            <a 
              href="#trainers" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Trainers
            </a>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="https://wa.me/919150050940?text=Hi! I'm interested in IELTS coaching. Can you help me?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat</span>
            </a>
            <a 
              href="tel:+919228122552"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <button
                              onClick={() => onBookConsultation()}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
                              Free Demo Class
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <nav className="space-y-4">
                <a 
                  href="#course-features" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Course Features
                </a>
                <a 
                  href="#success-stories" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Success Stories
                </a>
                <a 
                  href="#trainers" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trainers
                </a>
                <a 
                  href="#faq" 
                  className="block text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </nav>
              
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <a 
                  href="https://wa.me/919150050940?text=Hi! I'm interested in IELTS coaching. Can you help me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a 
                  href="tel:+919228122552"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={() => {
                    onBookConsultation();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  Free Demo Class
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 