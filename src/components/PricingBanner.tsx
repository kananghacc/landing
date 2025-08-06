import React from 'react';

const PricingBanner: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white font-heading">Consulting Fees? ₹0.</h2>
          <p className="text-xl text-green-200 font-body">
            You only pay exam and university application fees.
          </p>
          <p className="text-sm text-green-200 font-body">
            We're remunerated by partner institutions as an Official Channel Agent (OCA).
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner; 