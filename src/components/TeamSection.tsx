import React from 'react';
import { Award, Star, Users, BookOpen, Target, CheckCircle } from 'lucide-react';

interface Trainer {
  name: string;
  role: string;
  experience: string;
  image: string;
  achievements: string[];
  specialization: string;
  rating: number;
  studentsTrained: string;
}

const TeamSection: React.FC = () => {
  const trainers: Trainer[] = [
    {
      name: "Rasheeda Madani",
      role: "Senior IELTS Strategist",
      experience: "20+ Years",
      image: "/trainer-images/Rasheeda.png",
      achievements: [
        "M.A., M.Phil., TEFL Certified",
        "Expert SAT & IELTS strategist",
        "Mentored over 3,000 students",
        "Customized strategies for quick results"
      ],
      specialization: "Academic Writing & Speaking",
      rating: 4.9,
      studentsTrained: "3,000+"
    },
    {
      name: "Jayadev",
      role: "Content Delivery Head",
      experience: "10+ Years",
      image: "/trainer-images/jayadev.png",
      achievements: [
        "Dual degree from BITS Pilani",
        "UCLA PGP Pro graduate",
        "Oversees content delivery",
        "Specializes in GRE, SAT, IELTS, PTE"
      ],
      specialization: "Reading & Listening",
      rating: 4.8,
      studentsTrained: "2,500+"
    },
    {
      name: "Pooja",
      role: "Certified IELTS Coach",
      experience: "6+ Years",
      image: "/trainer-images/pooja.png",
      achievements: [
        "Certified IELTS coach",
        "TESOL qualification",
        "Specializes in workplace communication",
        "Guarantees 7+ score results"
      ],
      specialization: "Speaking & Pronunciation",
      rating: 4.9,
      studentsTrained: "1,800+"
    },
    {
      name: "Meena",
      role: "Communicative English Expert",
      experience: "5+ Years",
      image: "/trainer-images/meena.png",
      achievements: [
        "3+ years at NICE Institute",
        "Specializes in Communicative English",
        "IELTS, PTE, Duolingo expert",
        "Fosters supportive environment"
      ],
      specialization: "Writing & Grammar",
      rating: 4.7,
      studentsTrained: "1,200+"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50" id="trainers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Expert Trainers</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Master IELTS with Leading Trainers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn from certified experts with proven track records of helping students achieve their target band scores
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Trainer Image & Basic Info */}
              <div className="text-center mb-6">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{trainer.name}</h3>
                <p className="text-sm text-blue-600 font-medium mb-2">{trainer.role}</p>
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <span className="text-sm text-gray-600">Experience:</span>
                  <span className="text-sm font-semibold text-green-600">{trainer.experience}</span>
                </div>
              </div>

              {/* Rating & Students */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i <= Math.floor(trainer.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700 font-body"><span className="font-heading font-semibold">{trainer.rating}</span></span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span className="font-heading font-semibold">{trainer.studentsTrained}</span>
                </div>
              </div>

              {/* Specialization */}
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-900">Specialization:</span>
                </div>
                <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                  {trainer.specialization}
                </span>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-gray-900">Key Achievements:</span>
                </div>
                <ul className="space-y-1">
                  {trainer.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Certified Training Experts</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8,500+</div>
              <div className="text-sm opacity-90">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.8/5</div>
              <div className="text-sm opacity-90">Average Trainer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Average Experience</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Ready to Learn from the Best?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Book your free demo class and get matched with the perfect trainer for your learning style
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/919228122552?text=Hi! I'd like to speak with an IELTS trainer about my preparation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Chat with Trainer
              </a>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Book Free Demo Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 