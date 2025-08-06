import React from 'react';
import { Building, FileText, Shield, Plane, Heart, DollarSign, Users, Award } from 'lucide-react';

interface ServicePillar {
  title: string;
  painResolved: string;
  deliverables: string;
  icon: React.ReactNode;
  gradient: string;
}

const ServicePillars: React.FC = () => {
  const servicePillars: ServicePillar[] = [
    {
      title: "University & Program Match",
      painResolved: "Overwhelm of 4,200+ universities",
      deliverables: "AI shortlist, budget fit ($15K-$55K), employability score, scholarship guidance",
      icon: <Building className="w-6 h-6" />,
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Application & SOP Boost",
      painResolved: "Fear of rejection",
      deliverables: "Unlimited edits, former Stanford admissions readers, TOEFL/GRE coaching",
      icon: <FileText className="w-6 h-6" />,
      gradient: "from-green-400 to-green-600"
    },
    {
      title: "Visa & Financial Prep",
      painResolved: "Documentation anxiety",
      deliverables: "USCIS-compliant file, education loans, forex, insurance, accommodation",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Landing & Career Edge",
      painResolved: '"What next?" worries',
      deliverables: "Airport pickup, OPT webinars, mentor network, job placement support",
      icon: <Plane className="w-6 h-6" />,
      gradient: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 id="services-heading" className="text-4xl font-bold text-gray-900 font-heading">What We Do – Service Pillars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            With 24+ years expertise and 230,000+ students guided, we bridge YOUR dream to reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {servicePillars.map((pillar, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.gradient} flex items-center justify-center text-white mb-6`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{pillar.title}</h3>
              <div className="space-y-2">
                <div className="text-sm text-blue-600 font-medium font-body">Pain Resolved:</div>
                <div className="text-gray-700 mb-3 font-body">{pillar.painResolved}</div>
                <div className="text-sm text-green-600 font-medium font-body">Key Deliverables:</div>
                <div className="text-gray-700 font-body">{pillar.deliverables}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
          <div className="flex items-start space-x-3">
            <Heart className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <p className="text-gray-800 font-medium font-body">
                <strong>OCA Service</strong> — no consulting fee for students. You only pay third-party charges such as TOEFL/GRE or university application fees. Education loans at the lowest rates, insurance claims settled in 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePillars; 