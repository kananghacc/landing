import React, { useState } from 'react';
import ThankYouPage from './components/ThankYouPage';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursePackages from './components/CoursePackages';
import ServicePillars from './components/ServicePillars';
import SuccessStories from './components/SuccessStories';
import TeamSection from './components/TeamSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ConsultationForm from './components/ConsultationForm';
import FloatingButtons from './components/FloatingButtons';
import { useCountdown } from './hooks/useCountdown';

function App() {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showThankYouPage, setShowThankYouPage] = useState(false);

  // Listen for custom event to open consultation form
  React.useEffect(() => {
    const handleOpenConsultationForm = () => {
      setShowConsultationForm(true);
    };

    window.addEventListener('openConsultationForm', handleOpenConsultationForm);
    return () => {
      window.removeEventListener('openConsultationForm', handleOpenConsultationForm);
    };
  }, []);

  // Calculate time until next batch start (5th of next month)
  const getNextBatchDate = () => {
    const now = new Date();
    const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 5);
    return nextMonth;
  };

  const deadline = getNextBatchDate();
  const timeLeft = useCountdown(deadline);

  const handleBookConsultation = (selectedPackage?: string) => {
    setShowConsultationForm(true);
  };

  const handleBackToHome = () => {
    setShowThankYouPage(false);
  };

  const handleCloseForm = () => {
    setShowConsultationForm(false);
  };

  // Function to scroll to success stories and open video testimonials
  const handleOpenVideoTestimonials = () => {
    const successStoriesSection = document.getElementById('success-stories');
    if (successStoriesSection) {
      successStoriesSection.scrollIntoView({ behavior: 'smooth' });
      // Trigger video modal after scroll
      setTimeout(() => {
        const event = new CustomEvent('openVideoTestimonials');
        window.dispatchEvent(event);
      }, 1000);
    }
  };

  // Show thank you page if form was submitted
  if (showThankYouPage) {
    return <ThankYouPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white font-body">
      <Header onBookConsultation={handleBookConsultation} />
      <div className="pt-16 lg:pt-20">
        <HeroSection 
          onBookConsultation={handleBookConsultation} 
          onOpenVideoTestimonials={handleOpenVideoTestimonials}
        />
        <CoursePackages onBookConsultation={handleBookConsultation} />
        <ServicePillars />
        <SuccessStories onBookConsultation={handleBookConsultation} />
        <TeamSection onBookConsultation={handleBookConsultation} />
        <FAQSection onBookConsultation={handleBookConsultation} />
        <Footer />
      </div>
      
      <ConsultationForm
        isOpen={showConsultationForm}
        onClose={handleCloseForm}
      />
      
      <FloatingButtons />
    </div>
  );
}

export default App;