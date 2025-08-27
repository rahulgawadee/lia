import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import InternshipTypes from './components/InternshipTypes';
import Students from './components/Students';
import Footer from './components/Footer';

import WhatIsLia from './Pages/WhatIsLia';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

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
      className="fixed bottom-8 right-8 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 z-50 group hover:px-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 group-hover:animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span className="overflow-hidden max-w-0 group-hover:max-w-[200px] transition-all duration-300 whitespace-nowrap font-semibold">
        Book a Demo
      </span>
    </button>
  );
}

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/demo" element={<DemoForm />} />
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