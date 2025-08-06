import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  name: string;
  college: string;
  quote: string;
  image: string;
}

const SuccessStories: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: TestimonialItem[] = [
    {
      name: "Tulsiben Patel",
      college: "Oklahoma State University",
      quote: "Indeed, it was a great experience and helpful as I got to learn something new about my abroad journey.",
      image: "/testimonial-images/tulsiben_usa_e23b90583f.png"
    },
    {
      name: "Krupa Patel",
      college: "University at Buffalo",
      quote: "My experience with Kanan international was amazing, right from the coaching till the visa approval.",
      image: "/testimonial-images/krupa_usa_c0551fa6ac.png"
    },
    {
      name: "Vats Panchal",
      college: "San Jose State University",
      quote: "I never thought I could clear my IELTS Exam and Interviews so confidently. It was a very smooth process and I am so glad to receive my USA Visa. Heartfelt thanks to Kanan International.",
      image: "/testimonial-images/vats_usa_1203652ad1.png"
    },
    {
      name: "Pujan Gajjar",
      college: "US University",
      quote: "My overall experience was highly satisfactory. My big thanks to Mr. Deep Shah and Mr. Mayur Patil for their exceptional assistance throughout the journey. Their transparency throughout the processes is truly commendable. I will recommend Kanan.co to everyone!",
      image: "/testimonial-images/pujan_gajjar_1624105d35.png"
    },
    {
      name: "Yug Thakkar",
      college: "University of Central Oklahoma",
      quote: "I'm excited to share that I've successfully cleared my US interview and secured admission... A special thanks to my tutor whose friendly and excellent support made my study abroad journey easy. I'm grateful to Kanan.co for their invaluable assistance. If you're looking for guidance, I would recommend them!",
      image: "/testimonial-images/yug_thakkar_ab9be4677e.png"
    }
  ];

  // Auto-advance testimonials every 4 seconds
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-20 bg-gray-50" aria-labelledby="success-stories-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 id="success-stories-heading" className="text-4xl font-bold text-gray-900 font-heading">Success Stories</h2>
          <p className="text-xl text-gray-600 font-body">Real students, real results from USA</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }, (_, index) => {
              const testimonialIndex = (currentTestimonial + index) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              return (
                <div key={`${currentTestimonial}-${index}`} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-gray-900 font-heading">{testimonial.name}</div>
                      <div className="text-sm text-blue-600 font-medium font-body">{testimonial.college}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-body">"{testimonial.quote}"</p>
                </div>
              );
            })}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonial"
              title="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonial"
              title="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4" role="tablist" aria-label="ation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-pressed={index === currentTestimonial}
                role="tab"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories; 