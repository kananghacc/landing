import React from 'react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoTestimonial {
  id: number;
  name: string;
  bandScore: string;
  image: string;
  videoUrl?: string;
  quote: string;
}

interface VideoTestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonials: VideoTestimonial[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

const VideoTestimonialModal: React.FC<VideoTestimonialModalProps> = ({
  isOpen,
  onClose,
  testimonials,
  currentIndex,
  onNext,
  onPrevious,
}) => {
  if (!isOpen) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 font-heading">
            Video Testimonials
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Video Player */}
          <div className="mb-6">
            <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Video: {currentTestimonial.name}'s Success Story</p>
                <p className="text-sm text-gray-500">Band {currentTestimonial.bandScore} Achievement</p>
              </div>
            </div>
          </div>

          {/* Testimonial Info */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
              {currentTestimonial.name}
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-green-600 font-heading">
                Band {currentTestimonial.bandScore}
              </span>
            </div>
            <blockquote className="text-gray-700 italic leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={onPrevious}
              disabled={currentIndex === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            
            <div className="text-sm text-gray-600">
              {currentIndex + 1} of {testimonials.length}
            </div>
            
            <button
              onClick={onNext}
              disabled={currentIndex === testimonials.length - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonialModal;
