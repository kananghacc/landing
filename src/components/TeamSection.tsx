import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Rajiv Jain",
      role: "Lead Consultant, SEVP Certified",
      credentials: "Licensed Immigration Consultant",
      experience: "10 yrs US visa expertise",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "Dr. Meera Nair",
      role: "Ex-Stanford Admissions Officer",
      credentials: "Former University Admissions",
      experience: "Reviewed 5,000+ grad files",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      name: "Kevin Lee",
      role: "Silicon Valley Career Coach",
      credentials: "Ex-Google Recruiter",
      experience: "Career placement specialist",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 font-heading">Meet the Team</h2>
          <p className="text-xl text-gray-600 font-body">Expert guidance from industry professionals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{member.name}</h3>
              <div className="text-blue-600 font-medium mb-2 font-body">{member.role}</div>
              <div className="text-sm text-gray-600 mb-2 font-body">{member.credentials}</div>
              <div className="text-sm text-gray-500 font-body">{member.experience}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 