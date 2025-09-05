import React from 'react';
import { CheckCircle, BookOpen, Users, GraduationCap, Package } from 'lucide-react';

interface CoursePackagesProps {
  onBookConsultation?: (selectedPackage?: string) => void;
}

const CoursePackages: React.FC<CoursePackagesProps> = ({ onBookConsultation }) => {
  const packages = [
    {
      id: 1,
      title: "IELTS Self Preparation Course",
      originalPrice: "INR 9999",
      discountedPrice: "INR 5999",
      features: [
        "English Assessment Test",
        "100+ Quizzes and 300+ Videos for Vocabulary, Grammar & Spelling Improvement",
        "20+ Hours of IELTS Foundation Building Video Lessons For Listening, Reading, Writing & Speaking",
        "60 Section Wise Practice Tests",
        "15 IELTS Mock Tests (Full length Timed Tests)",
        "Personalized Results by Expert Mentors",
        "Live Analysis of 4 Mock Tests (Every Saturday)",
        "Bonus Live Doubt Solving Sessions (Every Sunday)",
        "Set of 6 Books Couriered to Your Home!",
        "Validity 180 Days"
      ],
      icon: BookOpen,
      popular: false,
      color: "blue"
    },
    {
      id: 2,
      title: "IELTS Live Class Champion Course",
      originalPrice: "INR 15999",
      discountedPrice: "INR 9999",
      features: [
        "English Assessment Test",
        "100+ Quizzes and 300+ Videos for Vocabulary, Grammar & Spelling Improvement",
        "20+ Hours of IELTS Foundation Building Video Lessons For Listening, Reading, Writing & Speaking",
        "60 Section Wise Practice Tests",
        "15 IELTS Mock Tests (Full length Timed Tests)",
        "Personalized Results by Expert Mentors",
        "4 Weeks (40 Hours) Beginners Live Classes in Small Groups",
        "4 Weeks (60 Hours) Advance Live Classes for Crash Course",
        "Live Analysis of 4 Mock Tests (Every Saturday)",
        "Bonus 4 Week Live French Course!",
        "Set of 6 Books Couriered to Your Home!",
        "Validity 180 Days"
      ],
      icon: Users,
      popular: true,
      color: "purple"
    },
    {
      id: 3,
      title: "IELTS Personalized Batches - One to One Tutoring",
      originalPrice: "Starting INR 5000",
      discountedPrice: "Starting INR 5000",
      features: [
        "Custom Lecture Plan as per your Requirement",
        "Dedicated Expert Trainer for One-to-One Tutoring",
        "E-Learning Portal with Sectional and Mock Tests",
        "Set of 6 Books Couriered to Your Home!",
        "Round the Clock Timings Available!",
        "1 Week to 12 Week Options Available Based on your Requirement"
      ],
      icon: GraduationCap,
      popular: false,
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 bg-blue-50';
      case 'purple':
        return 'border-purple-200 bg-purple-50';
      case 'green':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-600';
      case 'purple':
        return 'text-purple-600';
      case 'green':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50" id="course-packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Package className="w-6 h-6 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Course Packages</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Choose Your Perfect IELTS Preparation Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From self-paced learning to personalized one-on-one coaching, we have the perfect package for your IELTS goals
          </p>
        </div>

        {/* Course Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all hover:shadow-xl ${
                pkg.popular ? 'border-purple-300 shadow-xl scale-105' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Header */}
              <div className={`p-6 ${getColorClasses(pkg.color)} rounded-t-2xl`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${getIconColor(pkg.color)} bg-white rounded-lg flex items-center justify-center shadow-sm`}>
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">{pkg.title}</h3>
                </div>
                
                {/* Pricing */}
                <div className="text-center">
                  {pkg.originalPrice !== pkg.discountedPrice ? (
                    <div className="mb-2">
                      <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                    </div>
                  ) : null}
                  <div className="text-3xl font-bold text-gray-900 font-heading">
                    {pkg.discountedPrice}
                  </div>
                  {pkg.originalPrice !== pkg.discountedPrice && (
                    <div className="text-sm text-green-600 font-medium">
                      Save {parseInt(pkg.originalPrice.replace('INR ', '')) - parseInt(pkg.discountedPrice.replace('INR ', ''))} INR
                    </div>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => onBookConsultation?.(pkg.id.toString())}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } shadow-lg hover:shadow-xl transform hover:-translate-y-0.5`}
                >
                  {pkg.popular ? 'Get Started Now' : 'Choose This Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
              Need Help Choosing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our IELTS experts are here to help you select the perfect course package based on your current level, target score, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onBookConsultation?.()}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Free Consultation
              </button>
              <a 
                href="https://wa.me/919150050940?text=Hi! I need help choosing an IELTS course package. Can you guide me?"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 transition-colors bg-white hover:bg-gray-50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePackages; 