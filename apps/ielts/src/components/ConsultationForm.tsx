import React, { useState } from 'react';
import { X, Award, ExternalLink } from 'lucide-react';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
  formData?: any;
  onInputChange?: any;
  onSubmit?: any;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({
  isOpen,
  onClose
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  if (!isOpen) return null;

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(false);
  };

  const handleOpenZohoForm = () => {
    window.open('https://yujc-zc1.maillist-manage.in/ua/Optin?od=1a1e3dbc371d6&zx=1df90a3f61&sD=13732403116b3e25', '_blank');
  };

  const handleOpenAlternativeForm = () => {
    window.open('https://zcmp.in/h4Ql', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 font-heading">
              Register For Demo Class
            </h2>
            <p className="text-gray-600 text-sm">
              Please complete this form to create an account, receive email updates and much more.
            </p>
          </div>
        </div>

        {/* Zoho Form iframe */}
        <div className="p-4">
          <div className="relative w-full h-[500px] border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
            {!iframeLoaded && !iframeError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Loading form...</p>
                </div>
              </div>
            )}
            
            {iframeError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-sm text-gray-600 mb-3">Form couldn't load. Please use one of the options below:</p>
                  <div className="space-y-2">
                    <button
                      onClick={handleOpenZohoForm}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Open Registration Form
                    </button>
                    <button
                      onClick={handleOpenAlternativeForm}
                      className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors"
                    >
                      Alternative Form Link
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            <iframe 
              frameBorder="0" 
              id="iframewin" 
              width="100%" 
              height="100%" 
              src="https://yujc-zc1.maillist-manage.in/ua/Optin?od=1a1e3dbc371d6&zx=1df90a3f61&sD=13732403116b3e25"
              title="IELTS Demo Class Registration Form"
              className="w-full h-full border-0"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{ display: iframeLoaded ? 'block' : 'none' }}
            />
          </div>
          
          {/* Fallback Options */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-3">If the form above doesn't work, use this option:</p>
            <button
              onClick={handleOpenZohoForm}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 mx-auto"
            >
              <span>Open Registration Form</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm; 