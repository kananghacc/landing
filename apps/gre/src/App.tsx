import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            GRE Preparation with <span className="text-green-600">Kanan.co</span>
          </h1>
          <p className="font-body text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Master the GRE with our comprehensive preparation program. Expert guidance, 
            proven strategies, and personalized coaching to help you achieve your target score.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
              Coming Soon!
            </h2>
            <p className="font-body text-gray-600 mb-6">
              We're working hard to bring you the best GRE preparation experience. 
              Stay tuned for updates!
            </p>
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
