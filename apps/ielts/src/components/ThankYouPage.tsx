import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Users,
  Target,
  MessageCircle
} from 'lucide-react';
const kananLogo = '/kanan-logo.svg';

interface ThankYouPageProps {
  onBackToHome?: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src={kananLogo} 
                alt="Kanan.co" 
                className="h-8"
              />
            </div>
            <button 
              onClick={onBackToHome}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors font-body"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
                Thank You for Your Interest!
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-body">
                We've received your consultation request and our expert team will get back to you within <strong>24 hours</strong> with your personalized Canada study roadmap.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-heading">1. Expert Review</h3>
                  <p className="text-gray-600 text-sm font-body">Our certified counselors will analyze your profile and requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-heading">2. Personalized Plan</h3>
                  <p className="text-gray-600 text-sm font-body">We'll create your custom study roadmap with college recommendations</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 font-heading">3. Ongoing Support</h3>
                  <p className="text-gray-600 text-sm font-body">Get continuous guidance throughout your application journey</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Need Immediate Help?</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a 
                    href="tel:+919228122553" 
                    className="text-gray-700 font-body hover:text-blue-600 transition-colors"
                    aria-label="Call Kanan.co at +919228122553"
                  >
                    +919228122553
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a 
                    href="mailto:info@kanan.co" 
                    className="text-gray-700 font-body hover:text-blue-600 transition-colors"
                    aria-label="Email Kanan.co at info@kanan.co"
                  >
                    info@kanan.co
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-body">Vadodara, Gujarat</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/917355573555?text=I'd%20like%20to%20speak%20to%20a%20Kanan.co%20counsellor%20reg.%20my%20USA%20plans"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 font-body"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <button 
                onClick={onBackToHome}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2 font-body"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Back to Homepage</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700 font-body"><span className="font-heading font-semibold">4.9</span> rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-gray-600 font-body"><span className="font-heading font-semibold">100,000+</span> students helped</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-600 font-body">SEVP Certified</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12" role="contentinfo">
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
                <a 
                  href="tel:+919228122553" 
                  className="font-body hover:text-white transition-colors"
                  aria-label="Call Kanan.co at +919228122553"
                >
                  +919228122553
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:info@kanan.co" 
                  className="font-body hover:text-white transition-colors"
                  aria-label="Email Kanan.co at info@kanan.co"
                >
                  info@kanan.co
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-200">
            <p className="font-body">&copy; 2025 Kanan.co · SEVP Certified</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage; 