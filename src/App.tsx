import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Lazy load components for better performance
const IELTSApp = React.lazy(() => import('../apps/ielts/src/App'))
const GREApp = React.lazy(() => import('../apps/gre/src/App'))
const GMATApp = React.lazy(() => import('../apps/gmat/src/App'))

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="text-center">
      <div className="loading-spinner mx-auto mb-4"></div>
      <p className="font-body text-gray-600">Loading...</p>
    </div>
  </div>
)

// Main landing page component
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Kanan.co</span>
        </h1>
        <p className="font-body text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Your gateway to study abroad success. Choose your test preparation journey:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a 
            href="/ielts" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <span className="text-2xl font-bold text-blue-600">I</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">IELTS</h3>
            <p className="font-body text-gray-600 mb-6">
              Achieve 8+ band in just 6 weeks with our proven IELTS coaching program.
            </p>
            <div className="text-blue-600 font-semibold group-hover:text-blue-700">
              Start IELTS Prep →
            </div>
          </a>
          
          <a 
            href="/gre" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <span className="text-2xl font-bold text-green-600">G</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">GRE</h3>
            <p className="font-body text-gray-600 mb-6">
              Master the GRE with expert guidance and comprehensive study materials.
            </p>
            <div className="text-green-600 font-semibold group-hover:text-green-700">
              Start GRE Prep →
            </div>
          </a>
          
          <a 
            href="/gmat" 
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <span className="text-2xl font-bold text-purple-600">G</span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-4">GMAT</h3>
            <p className="font-body text-gray-600 mb-6">
              Excel in GMAT with our structured approach and personalized coaching.
            </p>
            <div className="text-purple-600 font-semibold group-hover:text-purple-700">
              Start GMAT Prep →
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
)

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingSpinner />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/ielts/*" 
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <IELTSApp />
            </React.Suspense>
          } 
        />
        <Route 
          path="/gre/*" 
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <GREApp />
            </React.Suspense>
          } 
        />
        <Route 
          path="/gmat/*" 
          element={
            <React.Suspense fallback={<LoadingSpinner />}>
              <GMATApp />
            </React.Suspense>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App