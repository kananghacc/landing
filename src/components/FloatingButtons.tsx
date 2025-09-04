import React from 'react';
import { Award, MessageCircle } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const handleFreeDemoClass = () => {
    // Trigger consultation form modal
    const event = new CustomEvent('openConsultationForm');
    window.dispatchEvent(event);
  };

  const handleWhatsAppChat = () => {
    // WhatsApp link with pre-filled message
    window.open('https://wa.me/919150050940?text=Hi!%20I%27m%20interested%20in%20IELTS%20coaching.%20Can%20you%20tell%20me%20more%20about%20the%20course%20options?', '_blank');
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      {/* Mobile: Side-by-side buttons with text */}
      <div className="flex gap-3">
        {/* Free Class Button */}
        <button 
          onClick={handleFreeDemoClass}
          className="bg-blue-600 text-white py-3 px-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Award size={20} />
          <span className="whitespace-nowrap">Free Class</span>
        </button>
        
        {/* Chat Now Button */}
        <button 
          onClick={handleWhatsAppChat}
          className="bg-green-500 text-white py-3 px-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-green-600 transition-colors duration-200"
        >
          <MessageCircle size={20} />
          <span className="whitespace-nowrap">Chat Now</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingButtons;
