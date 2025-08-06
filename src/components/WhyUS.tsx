import React from 'react';
import { DollarSign, GraduationCap, CheckCircle, Globe, Building, Users, Award, Clock } from 'lucide-react';

const WhyUS: React.FC = () => {
  const reasons = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "World-Class Degree Recognition",
      description: "US degrees are valued globally, boosting career prospects across all fields. Access to top-ranked universities with cutting-edge research facilities.",
      gradient: "from-green-400 to-green-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Abundant Scholarships & Part-time Work",
      description: "Tuition from $15,000-$55,000/year. Earn $1,600/month part-time. 20 hours/week on campus, unlimited during breaks.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Thriving Indian Community",
      description: "Join 5 million Indians in the USA. Multicultural campuses help with both personal and professional growth.",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Advanced Course Curriculum",
      description: "Modern, flexible academic options with access to top-notch facilities, research, and experiential learning across 4,200+ universities.",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Up to 3-year OPT/STEM OPT",
      description: "Optional Practical Training allows you to gain valuable US work experience and build your career after completing your studies.",
      gradient: "from-teal-400 to-teal-600"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Clear Career Pathway",
      description: "From F1 student visa to OPT, H1B, Green Card, and citizenship. High demand in STEM, management, healthcare, and more.",
      gradient: "from-red-400 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-heading">Why Indian Students Choose the USA</h2>
          <p className="text-xl text-gray-600 font-body">From Indian colleges to Fortune 500 companies—thousands of Indian students have thrived in the US</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
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