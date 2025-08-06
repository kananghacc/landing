import React from 'react';
import { Calendar } from 'lucide-react';

interface CountdownSectionProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  onBookConsultation: () => void;
}

const CountdownSection: React.FC<CountdownSectionProps> = ({ timeLeft, onBookConsultation }) => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 font-heading">{timeLeft.days}</div>
              <div className="text-sm text-gray-600 font-body">Days</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 font-heading">{timeLeft.hours}</div>
              <div className="text-sm text-gray-600 font-body">Hours</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 font-heading">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-600 font-body">Minutes</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600 font-heading">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-600 font-body">Seconds</div>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 font-heading">
            Fall 2026 admission deadlines approaching
          </h2>
          <p className="text-lg text-gray-600 font-body">Most US universities close applications by January 2026. Book your free strategy call now.</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto font-body">
            <span onClick={onBookConsultation} className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Book Call</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection; 