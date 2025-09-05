import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            GMAT Coaching with <span className="text-purple-600">Kanan.co</span>
          </h1>
          <p className="font-body text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Excel in GMAT with our structured approach and personalized coaching. 
            Comprehensive study materials and expert guidance to help you succeed.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4">
              Coming Soon!
            </h2>
            <p className="font-body text-gray-600 mb-6">
              We're developing an amazing GMAT preparation program. 
              Check back soon for more details!
            </p>
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
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
