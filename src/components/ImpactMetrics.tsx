import React from 'react';

const ImpactMetrics: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600" aria-labelledby="impact-metrics-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white font-heading">96%</div>
            <div className="text-xl font-semibold text-white font-heading">Visa Approval Rate</div>
            <div className="text-blue-200 font-body">Based on 4,700 USCIS decisions since 2021</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white font-heading">230,000+</div>
            <div className="text-xl font-semibold text-white font-heading">Indian Students Placed</div>
            <div className="text-blue-200 font-body">Across 4,200+ universities & colleges</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white font-heading">24+ Years</div>
            <div className="text-xl font-semibold text-white font-heading">Trusted Experience</div>
            <div className="text-blue-200 font-body">600+ staff, 600+ university partnerships</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-white font-heading">5M+</div>
            <div className="text-xl font-semibold text-white font-heading">Indians in USA</div>
            <div className="text-blue-200 font-body">Join the thriving Indian community</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics; 