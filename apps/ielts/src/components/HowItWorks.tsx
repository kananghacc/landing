import React from 'react';

interface HowItWorksProps {
  onBookConsultation: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onBookConsultation }) => {
  const steps = [
    {
      number: 1,
      title: "Profile Call (30 min)",
      description: "Goals & finances assessment",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      number: 2,
      title: "Plan & Apply",
      description: "Documents, SOP, visa handled",
      gradient: "from-green-400 to-green-600"
    },
    {
      number: 3,
      title: "Fly & Thrive",
      description: "Airport pickup, housing leads, PR roadmap",
      gradient: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-heading">How It Works – 3 Simple Steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto font-heading`}>
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{step.title}</h3>
                <p className="text-gray-600 font-body">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={onBookConsultation}
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors font-body"
          >
            Start My Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 