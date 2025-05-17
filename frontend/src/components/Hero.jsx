import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import mainvideo from "/Herosection.mp4";
import { ChevronDown, Play, Calendar, ArrowRight } from "lucide-react";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Trigger entrance animations
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-105 transform transition-transform duration-10000 animate-slow-zoom"
      >
        <source src={mainvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-20 text-white">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {/* Animated subtitle */}
          <div className="flex items-center mb-6 animate-fade-in">
            <span className="inline-block w-10 h-px bg-white/70 mr-3"></span>
            <span className="text-white/90 uppercase tracking-widest text-sm font-medium">
              {language === 'sv' ? 'Framtidens lärande' : 'Future of Learning'}
            </span>
          </div>

          {/* Main headline with staggered animation */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-[Inter] tracking-tight">
            <span className={`transition-all duration-700 delay-100 block transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {language === 'sv' 
                ? 'Forma framtidens lärande'
                : 'Where learning meets'}
            </span>
            <span className={`transition-all duration-700 delay-300 block transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {language === 'sv' 
                ? 'och arbetsliv – på ett ställe.'
                : 'the future of work.'}
            </span>
          </h1>

          {/* Description text with gradient and glow */}
          <p className={`text-lg md:text-xl max-w-2xl mb-10 font-[Inter] leading-relaxed transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} text-white/90`}>
            {language === 'sv'
              ? 'Vår plattform kopplar samman utbildning, praktik och jobb för att rusta studenter, stötta skolor och engagera arbetsgivare – med kraftfull teknik som gör allt enklare.'
              : 'Our platform connects education, internships, and job opportunities to empower students, support schools, and engage employers – using smart technology that makes everything easier.'}
          </p>

          {/* Buttons with hover effects */}
          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            
            <button className="group relative border-2 border-white bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium font-[Inter] text-lg tracking-wide transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span className="absolute right-0 w-12 h-full transform scale-x-0 origin-left transition-transform duration-300 ease-out bg-white/10 group-hover:scale-x-100"></span>
              <Calendar className="w-5 h-5 mr-2" />
              <span className="relative z-10">{language === 'sv' ? 'Boka en demo' : 'Book a Demo'}</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm mb-2">
            {language === 'sv' ? 'Scrolla för mer' : 'Scroll for more'}
          </span>
          <ChevronDown className="text-white w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-600/20 to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-600/20 to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;