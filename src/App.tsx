import React, { useState } from 'react';
import ThankYouPage from './components/ThankYouPage';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnerColleges from './components/PartnerColleges';
import ImpactMetrics from './components/ImpactMetrics';
import ServicePillars from './components/ServicePillars';
import WhyUS from './components/WhyUS';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import HowItWorks from './components/HowItWorks';
import TeamSection from './components/TeamSection';
import PricingBanner from './components/PricingBanner';
import CountdownSection from './components/CountdownSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ConsultationForm from './components/ConsultationForm';
import { useCountdown } from './hooks/useCountdown';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

function App() {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });

  // Calculate time until Fall 2025 deadline
  const deadline = new Date('2025-03-01T00:00:00');
  const timeLeft = useCountdown(deadline);

  const handleBookConsultation = () => {
    setShowConsultationForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowConsultationForm(false);
    setShowThankYouPage(true);
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleBackToHome = () => {
    setShowThankYouPage(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCloseForm = () => {
    setShowConsultationForm(false);
  };

  // Show thank you page if form was submitted
  if (showThankYouPage) {
    return <ThankYouPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white font-body">
      <Header onBookConsultation={handleBookConsultation} />
      <HeroSection onBookConsultation={handleBookConsultation} />
      <PartnerColleges />
      <ImpactMetrics />
      <ServicePillars />
      <WhyUS />
      <WhyChooseUs />
      <SuccessStories />
      <HowItWorks onBookConsultation={handleBookConsultation} />
      <TeamSection />
      <PricingBanner />
      <CountdownSection timeLeft={timeLeft} onBookConsultation={handleBookConsultation} />
      <FAQSection />
      <Footer />
      
      <ConsultationForm
        isOpen={showConsultationForm}
        onClose={handleCloseForm}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default App;