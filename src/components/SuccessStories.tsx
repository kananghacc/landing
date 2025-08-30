import React, { useState } from 'react';
import { Star, Play, Quote, Award, TrendingUp, MessageCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  bandScore: string;
  image: string;
  quote: string;
  videoUrl?: string;
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
      name: "Maitry Acharya",
      bandScore: "8.0",
      image: "/testimonial-images/maitry_f4c1575654.png",
      quote: "My decision to go to **Canada** was quite instant, so I had to give IELTS within **10 days**. However, Kanan's **crash course** was perfect for my decision. The teacher was **friendly and amazing**, their class was easily understandable.",
    },
    {
      id: 2,
      name: "Bharvi Patel",
      bandScore: "8.0",
      image: "/testimonial-images/bharvi_patel_8d7835ce10.png",
      quote: "With Kanan's **exceptional guidance**, I achieved an overall **band score of 8** in my IELTS exam. The faculty is **incredibly supportive**, offering tools like **Kys and FLT** for a realistic exam experience.",
    },
    {
      id: 3,
      name: "Manan Rajesh Padsala",
      bandScore: "8.0",
      image: "/testimonial-images/manan_rajesh_padsala_dca2ae5fe4.png",
      quote: "**Studying abroad** was my dream, and finding the right IELTS coaching became crucial. Fortunately, I found Kanan International, **recommended by a friend**. Their IELTS training **surpassed my expectations**. The instructors were not only **knowledgeable but incredibly supportive**.",
    },
    {
      id: 4,
      name: "Jayashankar",
      bandScore: "7.5",
      image: "/testimonial-images/jayashankar_179f406b82.png",
      quote: "IELTS trainer and her **exceptional training** helped me achieve an impressive overall **band score of 7.5** in the **Academic module**. Her **detailed preparation and dedicated guidance** played a significant role in my success. The **personalized attention** and her expertise not only improved my language skills but also **boosted my confidence** for the exam.",
    },
    {
      id: 5,
      name: "Suriya Senthilkumar",
      bandScore: "7.0",
      image: "/testimonial-images/suriya_senthilkumar_ielts_review_7dfca668c9.png",
      quote: "Upon a **friend's recommendation**, I enrolled in the IELTS coaching program at Kanan International. Initially, I was hesitant, but I can now confidently say it was **absolutely worthwhile**. Their **exceptional coaching and guidance** enabled me to achieve an overall **band score of 7.0** in the IELTS exam.",
    },
    {
      id: 6,
      name: "Anees Basha",
      bandScore: "7.5",
      image: "/testimonial-images/anees_basha_ielts_review_fd739179d4.png",
      quote: "The **training and classroom experience** with their **expert trainers** were exceptional. Their **unparalleled guidance and support** enabled me to achieve an overall score of **7.5**, with a **perfect score of 9.0 in reading**.",
    },
    {
      id: 7,
      name: "Prachi Saxena",
      bandScore: "7.0",
      image: "/testimonial-images/prachi_sexana_e01739ed20.png",
      quote: "I had a **great learning and classroom experience** at Kanan. They offered **KYS** and conducted several **mock tests** which helped me to **enhance my various skills**. **Highly recommended!**",

    }
  ];

  const onBookConsultationClick = () => {
    onBookConsultation?.();
  };

  // Function to convert markdown-style bold to HTML
  const formatQuote = (quote: string) => {
    return quote.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
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

                </div>
              </div>
              <blockquote 
                className="text-lg text-gray-700 italic leading-relaxed"
                dangerouslySetInnerHTML={{ __html: `"${formatQuote(testimonials[0].quote)}"` }}
              />
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
                  <p className="text-xs text-gray-600">{testimonial.duration}</p>
                </div>
              </div>
              <blockquote 
                className="text-sm text-gray-700 italic leading-relaxed"
                dangerouslySetInnerHTML={{ __html: `"${formatQuote(testimonial.quote)}"` }}
              />
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