import React from 'react';

interface HeaderProps {
  onBookConsultation: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookConsultation }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/kanan-logo.svg" 
              alt="Kanan.co" 
              className="h-8"
            />
          </div>
          <button 
            onClick={onBookConsultation}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors font-body"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 