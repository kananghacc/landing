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

interface FormData {
  name: string;
  phone: string;
  email: string;
  coursePackage: string;
  currentBand?: string;
  targetBand?: string;
  examDate?: string;
}

function App() {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    coursePackage: '',
    currentBand: '',
    targetBand: '',
    examDate: ''
  });

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
    if (selectedPackage) {
      // Map package ID to course package value
      const packageMap: { [key: string]: string } = {
        '1': 'self-preparation',
        '2': 'live-class-champion',
        '3': 'personalized-batches'
      };
      
      const coursePackage = packageMap[selectedPackage];
      if (coursePackage) {
        setFormData(prev => ({ ...prev, coursePackage }));
      }
    }
    setShowConsultationForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowConsultationForm(false);
    setShowThankYouPage(true);
    // Reset form
    setFormData({ 
      name: '', 
      phone: '', 
      email: '', 
      coursePackage: '',
      currentBand: '',
      targetBand: '',
      examDate: ''
    });
  };

  const handleBackToHome = () => {
    setShowThankYouPage(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleFormSubmit}
      />
      
      <FloatingButtons />
    </div>
  );
}

export default App;