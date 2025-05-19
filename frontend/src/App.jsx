import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import InternshipTypes from './components/InternshipTypes';
import Footer from './components/Footer';
import { ThemeProvider } from './context/Themecontect';
import Students from './components/Students';



function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Students/>
       
          <HowItWorks />
          <InternshipTypes />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;