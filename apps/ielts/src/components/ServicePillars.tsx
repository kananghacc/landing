import React from 'react';
import { Video, BookOpen, Clock, Users, Award, Target, CheckCircle, Star } from 'lucide-react';

interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}



const ServicePillars: React.FC = () => {
  const features: ServiceFeature[] = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "KananPrep Portal",
      description: "600+ videos covering mindset, the four parts of the test, tips & tricks and more.",
      highlight: "600+ Videos"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Practice Tests",
      description: "Sectional tests and simulated full-length mock tests give you the ultimate exam practice.",
      highlight: "Full Mock Tests"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Class Timings",
      description: "Conveniently integrate your IELTS preparation alongside other commitments.",
      highlight: "Flexible Schedule"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Study Materials",
      description: "No need to buy expensive exam prep books. We provide comprehensive study material with your course enrollment.",
      highlight: "Free Materials"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Trainers",
      description: "Certified trainers with high IELTS scores guide with proven study methods. You are in good hands at Kanan.co.",
      highlight: "Certified Experts"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Batch Size",
      description: "This intimate learning environment facilitates active participation and focused guidance from our expert trainers.",
      highlight: "Personal Attention"
    }
  ];



  return (
    <section className="py-16 lg:py-20 bg-white" id="course-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Course Features</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-heading mb-4">
            What's Included in Kanan.co's Smart 
            <span className="text-blue-600"> Live IELTS Courses</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to achieve your target band score in one comprehensive package
          </p>
          <div className="flex justify-center mt-4">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              Both IELTS Academic and General Training options available
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                  {feature.highlight && (
                    <div className="mt-3">
                      <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>



        {/* Trust Indicators */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold mb-4 font-heading text-gray-900">Why Choose Our IELTS Course?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">94%</div>
              <div className="text-gray-600">Students achieve target score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Weeks average completion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Student satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePillars; 