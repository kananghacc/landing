import React from 'react';
import { Target, Phone, Star, Users, CheckCircle, GraduationCap, Clock, Award, Play } from 'lucide-react';

interface HeroSectionProps {
  onBookConsultation: (selectedPackage?: string) => void;
  onOpenVideoTestimonials?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onBookConsultation, onOpenVideoTestimonials }) => {
  // Calculate next batch date (5th of next month)
  const getNextBatchDate = () => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 5);
    return nextMonth.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long',
      year: 'numeric'
    });
  };

  const nextBatchDate = getNextBatchDate();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-20" role="banner" aria-labelledby="hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">


            {/* Main Headline */}
            <div className="space-y-6">
              <div className="hero-heading-container">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading">
                  Achieve 8+ IELTS Band in 6 Weeks
                </h1>
              </div>
              
              {/* Subheadline with Social Proof */}
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-heading">
                Join 1,000+ students who achieved their target scores – with free demo class, certified trainers, 600+ videos and mock tests.
              </p>
            </div>
            

            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onBookConsultation()}
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-body shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Target className="w-5 h-5" />
                <span>Free Demo Class</span>
              </button>
              <a 
                href="https://wa.me/919150050940?text=Hi! I'm interested in IELTS coaching. Can you tell me more about the course options?"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2 font-body bg-white hover:bg-gray-50"
              >
                <Phone className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Proof & Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              {/* Student Avatars */}
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <picture>
                    <source srcSet="/testimonial-images/optimized/maitry_f4c1575654.webp" type="image/webp" />
                    <img 
                      src="/testimonial-images/maitry_f4c1575654.png" 
                      alt="Student" 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      loading="lazy"
                      width="32"
                      height="32"
                    />
                  </picture>
                  <picture>
                    <source srcSet="/testimonial-images/optimized/bharvi_patel_8d7835ce10.webp" type="image/webp" />
                    <img 
                      src="/testimonial-images/bharvi_patel_8d7835ce10.png" 
                      alt="Student" 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      loading="lazy"
                      width="32"
                      height="32"
                    />
                  </picture>
                  <picture>
                    <source srcSet="/testimonial-images/optimized/manan_rajesh_padsala_dca2ae5fe4.webp" type="image/webp" />
                    <img 
                      src="/testimonial-images/manan_rajesh_padsala_dca2ae5fe4.png" 
                      alt="Student" 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      loading="lazy"
                      width="32"
                      height="32"
                    />
                  </picture>
                  <picture>
                    <source srcSet="/testimonial-images/optimized/anees_basha_ielts_review_fd739179d4.webp" type="image/webp" />
                    <img 
                      src="/testimonial-images/anees_basha_ielts_review_fd739179d4.png" 
                      alt="Student" 
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                      loading="lazy"
                      width="32"
                      height="32"
                    />
                  </picture>
                </div>
                <span className="text-sm text-gray-600 font-body"><span className="font-heading font-semibold">1,000+</span> students this month</span>
              </div>
              {/* Rating */}
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                </div>
                <span className="text-sm text-gray-600 font-body"><span className="font-heading font-semibold">4.5</span> rating (1,500+ reviews)</span>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-4 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Next Batch Starts: {nextBatchDate}</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <span>🎁 Includes 3-Day Mock Test Access</span>
                <span>👩‍🏫 1-on-1 Demo Class Available</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            {/* Main Hero Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
              {/* Success Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                <CheckCircle className="w-4 h-4" />
                <span>Band 8+ Achieved!</span>
              </div>
              
              {/* Hero Image */}
              <picture>
                <source srcSet="/kanan-ielts-3-optimized.webp" type="image/webp" />
                <img 
                  src="/kanan-ielts-3.png" 
                  alt="Students at university campus with digital education icons - Achieve your IELTS goals with Kanan.co"
                  className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6"
                  loading="lazy"
                  width="390"
                  height="192"
                />
              </picture>
              
              {/* Video Preview */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-white/20 rounded-full p-2">
                      <Play className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-heading">Watch Success Stories</h3>
                      <p className="text-sm opacity-90">See how our students achieved 8+ band</p>
                    </div>
                  </div>
                  <button 
                    onClick={onOpenVideoTestimonials}
                    className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-full py-2 text-sm font-medium"
                  >
                    Play Video Testimonials
                  </button>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 font-heading">What's Included:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600 font-body">600+ Videos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600 font-body">Small Batches</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium font-body">Certified Trainers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-600 font-body">Mock Tests</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>🔒 Secure Payment</span>
                  <span>📞 24/7 Support</span>
                  <span>⭐ Certified Trainers</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">7</div>
                <div className="text-xs text-gray-600">Seats Left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 