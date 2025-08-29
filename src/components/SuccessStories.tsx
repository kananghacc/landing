import React, { useState } from 'react';
import { Star, Play, Quote, Award, TrendingUp, MessageCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  bandScore: string;
  image: string;
  quote: string;
  videoUrl?: string;
  courseType: string;
  duration: string;
}

interface SuccessStoriesProps {
  onBookConsultation?: () => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ onBookConsultation }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "RCanadaakshanaa",
      bandScore: "7.5",
      image: "/testimonial-images/krupa_usa_c0551fa6ac.png",
      quote: "I completed my IELTS training at Kanan.co, where detailed trainer explanations, mock tests, and study materials helped me achieve my target band score.",
      courseType: "Online Group Class",
      duration: "12 weeks"
    },
    {
      id: 2,
      name: "Jai Ganesh",
      bandScore: "8.0",
      image: "/testimonial-images/pujan_gajjar_1624105d35.png",
      quote: "Kanan.co's friendly trainers and exceptional teaching methods helped me prepare confidently and achieve an impressive 8-band IELTS score.",
      courseType: "Offline Group Class",
      duration: "10 weeks"
    },
    {
      id: 3,
      name: "Sangeetha",
      bandScore: "7.0",
      image: "/testimonial-images/tulsiben_usa_e23b90583f.png",
      quote: "Thanks to Kanan.co's friendly trainers, detailed explanations, mock tests, and study materials, I highly recommend their coaching.",
      courseType: "1-on-1 Coaching",
      duration: "8 weeks"
    },
    {
      id: 4,
      name: "Priya Sharma",
      bandScore: "8.5",
      image: "/testimonial-images/vats_usa_1203652ad1.png",
      quote: "The personalized attention and structured approach helped me improve from 6.5 to 8.5 in just 12 weeks. Highly recommended!",
      courseType: "Online Group Class",
      duration: "12 weeks"
    },
    {
      id: 5,
      name: "Arjun Patel",
      bandScore: "7.5",
      image: "/testimonial-images/yug_thakkar_ab9be4677e.png",
      quote: "The mock tests and feedback sessions were game-changers. I felt completely prepared and confident on exam day.",
      courseType: "Offline Group Class",
      duration: "10 weeks"
    },
    {
      id: 6,
      name: "Anjali Desai",
      bandScore: "8.0",
      image: "/testimonial-images/krupa_usa_c0551fa6ac.png",
      quote: "From Band 6.0 to 8.0 in just 8 weeks! The personalized attention and structured approach made all the difference.",
      courseType: "Online 1-on-1 Class",
      duration: "8 weeks"
    },
    {
      id: 7,
      name: "Rahul Sharma",
      bandScore: "7.0",
      image: "/testimonial-images/pujan_gajjar_1624105d35.png",
      quote: "The study materials and practice tests were excellent. I improved my writing score significantly with their guidance.",
      courseType: "Offline Group Class",
      duration: "12 weeks"
    }
  ];

  const onBookConsultationClick = () => {
    onBookConsultation?.();
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50" id="success-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Award className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Students Who Achieved Their Target Band Score
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students who transformed their IELTS scores with our proven methodology
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 mb-12 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">1,000+</div>
              <div className="text-sm text-gray-600">Students Trained Monthly</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">94%</div>
              <div className="text-sm text-gray-600">Achieve Target Score</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">4.8/5</div>
              <div className="text-sm text-gray-600">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Weeks Average</div>
            </div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Video Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-heading">Watch Success Stories</h3>
                  <p className="text-sm opacity-90">See how our students achieved their target band scores</p>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Play Video Testimonials
                </button>
              </div>
            </div>

            {/* Featured Quote */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonials[0].image} 
                  alt={testimonials[0].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{testimonials[0].name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">Band {testimonials[0].bandScore}</span>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{testimonials[0].courseType} • {testimonials[0].duration}</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4" />
                <span>Improved from Band 6.0 to {testimonials[0].bandScore} in {testimonials[0].duration}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-green-600">Band {testimonial.bandScore}</span>
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{testimonial.courseType} • {testimonial.duration}</p>
                </div>
              </div>
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-heading">Ready to Join Their Success?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Book your free demo class and get a personalized study plan tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onBookConsultationClick}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Free Demo Class
              </button>
              <a 
                href="https://wa.me/919228122552?text=Hi! I'm interested in IELTS coaching. Can you help me?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 