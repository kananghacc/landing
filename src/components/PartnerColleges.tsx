import React from 'react';

const PartnerColleges: React.FC = () => {
  const collegeLogos = [
    { src: "/2_Conestoga-optimized.png", alt: "MIT" },
    { src: "/3_Seneca-optimized.png", alt: "Stanford University" },
    { src: "/4_Loyalist-optimized.png", alt: "Harvard University" },
    { src: "/5_Algoma-optimized.png", alt: "University of California Berkeley" },
    { src: "/10_Georgian_-optimized.png", alt: "Columbia University" },
    { src: "/13_Niagara-optimized.png", alt: "University of Michigan" },
    { src: "/14_Northern_-optimized.png", alt: "University of Pennsylvania" },
    { src: "/15_Sheridan-optimized.png", alt: "Carnegie Mellon University" },
    { src: "/1_Centennial-optimized.png", alt: "University of Texas Austin" },
    { src: "/6_St_Lawrence_Black-optimized.png", alt: "University of Illinois Urbana-Champaign" },
    { src: "/7_Cambrian_-optimized.png", alt: "Georgia Institute of Technology" },
    { src: "/8_Canadore-optimized.png", alt: "University of Washington" },
    { src: "/9_Fleming_-optimized.png", alt: "University of Wisconsin-Madison" },
    { src: "/11_Lambton-optimized.png", alt: "Purdue University" },
    { src: "/12_Mohawk_-optimized.png", alt: "University of Maryland" },
    { src: "/16_Fanshawe-optimized.png", alt: "University of Minnesota" }
  ];

  return (
    <section className="py-12 bg-gray-50" aria-labelledby="partner-colleges-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h3 id="partner-colleges-heading" className="text-lg font-semibold text-gray-900 mb-4 text-center font-heading">Partner Universities</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {collegeLogos.map((logo, index) => (
                <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-12 w-auto object-contain" 
                    width="120" 
                    height="48" 
                    loading="lazy" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerColleges; 