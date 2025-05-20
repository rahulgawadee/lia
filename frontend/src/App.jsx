import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/Themecontect';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import InternshipTypes from './components/InternshipTypes';
import Students from './components/Students';
import Footer from './components/Footer';
import ContactPage from './Pages/Contact';
import WhatIsLia from './Pages/WhatIsLia';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import DemoForm from './Pages/Demoform';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Students />
      <HowItWorks />
      <InternshipTypes />
    </>
  );
}
function FloatingButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/demo')}
      className="fixed bottom-8 right-8 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 group"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6 group-hover:animate-bounce" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
        />
      </svg>
      <span className="font-semibold">Book a Demo</span>
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/demo" element={<DemoForm />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/what-is-lia" element={<WhatIsLia />} />
                {/* Add more routes here if needed */}
              </Routes>
            </main>
            <Footer />
            <FloatingButton />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;