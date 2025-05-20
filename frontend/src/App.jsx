import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/Themecontect';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import InternshipTypes from './components/InternshipTypes';
import Students from './components/Students';
import Footer from './components/Footer';

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
                {/* Add more routes here if needed */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
