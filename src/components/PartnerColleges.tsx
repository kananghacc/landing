import React from 'react';

const PartnerColleges: React.FC = () => {
  const collegeLogos = [
    { src: "/1_MIT.png", alt: "Massachusetts Institute of Technology" },
    { src: "/1_SJSU.png", alt: "San José State University" },
    { src: "/2_Harvard.png", alt: "Harvard University" },
    { src: "/2_RIT.png", alt: "Rochester Institute of Technology" },
    { src: "/3_Standford.png", alt: "Stanford University" },
    { src: "/3_TSU.png", alt: "Texas State University" },
    { src: "/4_Berke.png", alt: "University of California Berkeley" },
    { src: "/4_Depaul.png", alt: "DePaul University" },
    { src: "/5_Chicago.png", alt: "University of Chicago" },
    { src: "/5_San.png", alt: "San Francisco State University" },
    { src: "/6_Penn.png", alt: "University of Pennsylvania" },
    { src: "/7_Caltech.png", alt: "California Institute of Technology" },
    { src: "/8_Cornwell.png", alt: "Cornell University" },
    { src: "/9_Yale.png", alt: "Yale University" },
    { src: "/10_Princeton.png", alt: "Princeton University" },
    { src: "/11_Columbiya.png", alt: "Columbia University" }
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