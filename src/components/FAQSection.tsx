import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do I pay for your services?",
      answer: "No! Our consulting is completely free. We're remunerated by partner institutions as an Official Channel Agent (OCA). You only pay third-party charges like TOEFL/GRE or university application fees."
    },
    {
      question: "What are the tuition fees and living costs?",
      answer: "Tuition fees vary from $15,000 to $55,000 per annum; living costs around $8,000–$10,000 per year. We help you find scholarships and part-time work opportunities to offset these costs."
    },
    {
      question: "Can I work while studying in the USA?",
      answer: "Yes! You can work up to 20 hours per week on campus during studies and unlimited hours during breaks. Post-study OPT extends work permission up to 3 years for STEM graduates. Earn $10–$15/hour part-time."
    },
    {
      question: "What is SEVP certification and why does it matter?",
      answer: "SEVP (Student and Exchange Visitor Program) certification means we're federally authorized to assist with F-1 visa applications and represent you before USCIS (US Citizenship and Immigration Services). This ensures legal compliance and professional standards."
    },
    {
      question: "Are there age limits or academic background restrictions?",
      answer: "No age limit! Students with backlogs or diverse academic backgrounds can still apply. We help students from various educational backgrounds find suitable programs and universities."
    },
    {
      question: "What admission tests do I need?",
      answer: "Depending on your program: IELTS/TOEFL for English proficiency, GRE for graduate programs, GMAT for business schools, D-SAT/Digital SAT for undergraduate. We provide coaching facilities for all tests."
    },
    {
      question: "Can you help with education loans?",
      answer: "Yes! We have partnerships with leading education loan providers for seamless financing and can guide you through the entire loan application process for US universities. Education loans at the lowest rates."
    },
    {
      question: "What if my visa is refused?",
      answer: "Our US law-firm partner handles refusals, appeals, and work permits. With our 96% visa approval rate, refusals are rare, but we're prepared to fight for you with experienced immigration attorneys."
    },
    {
      question: "Do you provide pre-departure support?",
      answer: "Yes! We offer complete pre-departure orientation including accommodation, travel insurance, forex, air tickets, SIM cards, and more. We take care as a family would."
    },
    {
      question: "Do you serve cities outside Vadodara?",
      answer: "Yes! While our main office is in Vadodara, we serve students across India with dedicated Gujarati/Tamil/Hindi helplines and virtual consultations. Our services are available nationwide."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 id="faq-heading" className="text-4xl font-bold text-gray-900 font-heading">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 font-body">Everything you need to know about studying in the USA</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 font-heading">{faq.question}</span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed font-body">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 