import React from 'react';
import { DollarSign, GraduationCap, CheckCircle, Globe, Building } from 'lucide-react';

const WhyUS: React.FC = () => {
  const reasons = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "World-class education & research",
      description: "Access to top-ranked universities with cutting-edge research facilities and innovative programs that set global standards in education.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Up to 3-year OPT/STEM OPT",
      description: "Optional Practical Training allows you to gain valuable US work experience and build your career after completing your studies.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "High visa success rate",
      description: "Streamlined F-1 visa processes with high approval rates for genuine students. Our expertise ensures smooth visa applications.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Pathway to H-1B & Green Card",
      description: "Multiple pathways to work visas and permanent residency through employer sponsorship and various immigration programs.",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Part-time work & internships",
      description: "Work up to 20 hours per week during studies and unlimited hours during breaks. Access to prestigious internship opportunities.",
      gradient: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-heading">Why Indian Students Choose the USA</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <div className={`w-12 h-12 bg-gradient-to-r ${reason.gradient} rounded-xl flex items-center justify-center text-white mb-6`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{reason.title}</h3>
              <p className="text-gray-600 font-body">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUS; 