import React from 'react';
import { Target, Phone, Star, Users, CheckCircle, GraduationCap, DollarSign } from 'lucide-react';

interface HeroSectionProps {
  onBookConsultation: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookConsultation }) => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="hero-heading-container">
                <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-heading">
                  Shape Your Future with a 
                  <span className="text-blue-600"> US Degree</span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-body">
                <strong>Admissions. Scholarships. Visa. Success</strong>—Start here! End-to-end <span className="font-semibold text-blue-600">free</span> guidance for Indian students. Trusted by <strong>230,000+</strong> learners already in the USA.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookConsultation}
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-body"
              >
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Your Free Planning Session</span>
              </button>
              <a 
                href="https://wa.me/917355573555?text=I'd%20like%20to%20speak%20to%20a%20Kanan.co%20counsellor%20reg.%20my%20USA%20plans"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2 font-body"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Speak to a Counsellor</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600 font-body">5,000+ this month</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        i <= 4 
                          ? 'fill-yellow-400 text-yellow-400' 
                          : i === 5 
                            ? 'fill-yellow-400 text-yellow-400 opacity-60' 
                            : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 font-body">4.6 rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                Visa Approved!
              </div>
              <picture>
                <source srcSet="/study-in-usa-hero-image.jpg" type="image/jpeg" />
                <img 
                  src="/study-in-usa-hero-image.jpg" 
                  alt="Diverse South Asian students walking on university campus - Study in USA with Kanan.co"
                  className="w-full h-48 sm:h-64 object-cover rounded-xl mb-4 sm:mb-6"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </picture>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading">Your Success Story Starts Here</h3>
                <p className="text-sm sm:text-base text-gray-600 font-body">Join 5 million Indians already thriving in the USA</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-600 font-body">4,200+ universities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="text-xs sm:text-sm text-gray-600 font-body">$1,600/month part-time</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                    <span className="text-xs sm:text-sm font-medium font-body">96% visa approval</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    <span className="text-xs sm:text-sm text-gray-600 font-body">230,000+ students placed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 