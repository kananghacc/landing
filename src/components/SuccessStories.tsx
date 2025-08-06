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
      name: "Avisha Sanjay Kumar Patel",
      college: "MIT",
      quote: "I thank Kanan for their great support and hospitality services.",
      image: "/testimonial-images-optimized/Avisha_Sanjay_Kumar_Patel.png"
    },
    {
      name: "Bhargavi Patel",
      college: "Stanford University",
      quote: "My special thanks to Yash sir, who gave personal guidance during the process.",
      image: "/testimonial-images-optimized/Bhargavi_Patel.png"
    },
    {
      name: "Bhavik Patel",
      college: "University of California Berkeley",
      quote: "Just because of their guidance I am studying at UC Berkeley, USA.",
      image: "/testimonial-images-optimized/Bhavik_Patel_b655b19057.png"
    },
    {
      name: "Saloni",
      college: "Harvard University",
      quote: "They helped me throughout my education journey abroad.",
      image: "/testimonial-images-optimized/Saloni_34fc2dee35.png"
    },
    {
      name: "Jaimin Patel",
      college: "Columbia University",
      quote: "They helped me in all stages of getting a student visa.",
      image: "/testimonial-images-optimized/Jaimin_Patel_65b6c293d5.png"
    },
    {
      name: "Sanskriti",
      college: "University of Michigan",
      quote: "I didn't face any problems with my visa and university admission process.",
      image: "/testimonial-images-optimized/Sanskriti_35d4ff78c0.png"
    },
    {
      name: "Hetvi Baktarwala",
      college: "Carnegie Mellon University",
      quote: "The multiple mock tests boosted my confidence and helped me achieve a high score.",
      image: "/testimonial-images-optimized/hetvi_baktarwala_d25f05a368.png"
    },
    {
      name: "Disha Patel",
      college: "University of Pennsylvania",
      quote: "Their friendly environment and exceptional support were amazing.",
      image: "/testimonial-images-optimized/disha_patel_b07218c2ac.png"
    },
    {
      name: "Jatin Raj Bharadwaj",
      college: "University of Texas Austin",
      quote: "My TOEFL trainer, Ms. Mansi, helped me through my TOEFL journey.",
      image: "/testimonial-images-optimized/jatin_raj_bharadwaj_52633119c0.png"
    },
    {
      name: "Tulsi Thakar",
      college: "University of Illinois Urbana-Champaign",
      quote: "I have done all my visa process with the support of Kanan.co team, and it was a great experience.",
      image: "/testimonial-images-optimized/tulsi_thakar_66cb3365ee.png"
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
          <p className="text-xl text-gray-600 font-body">Real students, real results</p>
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
          
          <div className="flex justify-center space-x-2 mt-4" role="tablist" aria-label="Testimonial navigation">
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