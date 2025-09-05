import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  onBookConsultation?: (selectedPackage?: string) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ onBookConsultation }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How long does it take to achieve 8+ band in IELTS?",
      answer: "Most students achieve 8+ band in 6 weeks with our proven methodology, certified trainers, and comprehensive study materials including 600+ videos and mock tests. The exact duration depends on your current English proficiency level and target band score."
    },
    {
      question: "Do you offer online IELTS coaching?",
      answer: "Yes! We offer both online and offline IELTS coaching options. You can choose from online group classes, offline group classes, or 1-on-1 coaching based on your preference and schedule. All online classes are live and interactive with our certified trainers."
    },
    {
      question: "What's included in the IELTS course?",
      answer: "Our course includes 600+ videos covering all four modules (Listening, Reading, Writing, Speaking), practice tests, comprehensive study materials, certified trainers, small batch sizes for personalized attention, and 3-day access to our mock test portal."
    },
    {
      question: "Can I get a free demo class?",
      answer: "Yes! We offer a 1-on-1 zero-risk demo class where you can experience our teaching methodology and get a personalized skill assessment. This helps you understand our approach and determine the best course option for your needs."
    },
    {
      question: "What are the course duration options?",
      answer: "We offer flexible course durations: 30 days (intensive), 45 days (standard), and 90 days (comprehensive). Choose the option that best fits your timeline and current English proficiency level. Our trainers will recommend the optimal duration during your free assessment."
    },
    {
      question: "What is your success rate?",
      answer: "We have a 94% success rate with students achieving their target band scores. Our proven methodology, experienced trainers, and comprehensive study materials ensure that most students see significant improvement in their IELTS scores within the course duration."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes! All study materials are included with your course enrollment. You don't need to buy expensive exam prep books. We provide comprehensive study material, practice tests, and access to our online portal with 600+ videos and resources."
    },
    {
      question: "What if I don't achieve my target score?",
      answer: "We offer a money-back guarantee if you don't achieve your target score after completing our course. However, with our 94% success rate and comprehensive support, most students achieve their goals. We also provide additional support and practice sessions if needed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our IELTS coaching program
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-heading">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our IELTS experts are here to help you achieve your target band score
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onBookConsultation?.()}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Free Demo Class
              </button>
              <a 
                href="https://wa.me/919150050940?text=Hi! I have some questions about IELTS coaching. Can you help?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 