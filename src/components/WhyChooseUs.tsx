import React from 'react';
import { CheckCircle, Target, Heart, Users, Award, Clock, DollarSign } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />,
      title: "Truly Free Consulting",
      description: "Universities fund us; you don't pay a single rupee for our expert guidance. Education loans at the lowest rates.",
      bgColor: "bg-green-100"
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />,
      title: "Transparent Process",
      description: "Track every step in your personal dashboard with real-time updates. From university shortlisting to visa interviews.",
      bgColor: "bg-blue-100"
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />,
      title: "Parent Peace of Mind",
      description: "Dedicated Tamil/Hindi helpline for parents. Insurance claims settled in 24 hours, accommodations secure in advance.",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />,
      title: "End-to-End Care",
      description: "From SOP drafting to airport pickup - we're with you every step. We take care as a family would.",
      bgColor: "bg-purple-100"
    }
  ];

  const beforeAfterData = {
    before: {
      title: "Before Kanan.co",
      icon: "✗",
      items: [
        "Multiple tabs, missed deadlines",
        "Confusing application processes",
        "Visa rejection fears",
        "No guidance on OPT pathway",
        "Uncertainty about costs & loans"
      ]
    },
    after: {
      title: "After Kanan.co",
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      items: [
        "Admission letter secured",
        "Visa stamp approved",
        "Clear OPT timeline",
        "Airport pickup arranged",
        "Education loan & insurance sorted"
      ]
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading">Why 230,000 Students Choose Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 font-body max-w-3xl mx-auto">
            From Indian colleges to Fortune 500 companies—thousands of Indian students have thrived in the US
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${benefit.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 font-heading">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 font-body">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 sm:p-8 border border-red-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{beforeAfterData.before.icon}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading">{beforeAfterData.before.title}</h3>
              </div>
              <div className="space-y-3">
                {beforeAfterData.before.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm sm:text-base text-gray-700 font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  {beforeAfterData.after.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-heading">{beforeAfterData.after.title}</h3>
              </div>
              <div className="space-y-3">
                {beforeAfterData.after.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="text-sm sm:text-base text-gray-700 font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 