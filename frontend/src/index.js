import React, { useContext, useState, useEffect, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ChevronDown, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import './styles/fonts.css';

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Handle scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Handle video loading
    if (videoRef.current) {
      videoRef.current.play().catch(e => {
        console.log("Autoplay prevented, showing fallback");
      });
    }
    
    // Set component visibility
    setIsVisible(true);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70 z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-[1.05] object-center"
          poster={isMobile ? "/hero-poster.jpg" : undefined} // Fallback for mobile
        >
          <source src="/Herosection.mp4" type="video/mp4" />
          <source src="/Herosection.webm" type="video/webm" /> {/* Alternative format */}
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center text-white px-4 sm:px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          } max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto sm:ml-4 md:ml-12`}
        >
          {/* Animated subtitle */}
          <div className="flex items-center mb-3 sm:mb-4 animate-fade-in">
            <span className="inline-block w-8 sm:w-10 h-px bg-white/70 mr-2 sm:mr-3"></span>
            <span className="text-white/90 uppercase tracking-widest text-xs sm:text-sm font-medium flex items-center">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-purple-300" />
              {language === "sv" ? "Framtidens lärande" : "Future of Learning"}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 font-[Inter] tracking-tight">
            <span
              className={`block relative transition-all duration-700 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="relative z-10">
                <span className="circular-glow-text">
                  {language === "sv"
                    ? "Stärker studenter. Möjliggör för arbetsgivare."
                    : "Empowering Students. Enabling Employers."}
                </span>
              </span>
            </span>
            <span
              className={`block mt-1 sm:mt-2 relative transition-all duration-700 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <span className="relative z-10">
                <span className="circular-glow-text delay-1s">
                  {language === "sv"
                    ? "Stöttar skolor och universitet. Allt på ett ställe."
                    : "Supporting Schools and Universities. All in One Place."}
                </span>
              </span>
            </span>
          </h1>

          {/* Description */}
          <div
            className={`mb-6 sm:mb-8 transition-all duration-700 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-sm sm:text-base md:text-lg font-[Inter] leading-relaxed text-white/90 drop-shadow-lg mb-2 sm:mb-3 backdrop-blur-sm bg-black/10 p-2 rounded-md inline-block">
              {language === "sv"
                ? "Hitta rätt praktik. Koppla samman med rätt talanger. Förenkla LIA-hanteringen."
                : "Find the right internship. Connect with the right talent. Simplify LIA management."}
            </p>
            <p className="text-xs sm:text-sm md:text-base font-[Inter] leading-relaxed text-white/80 max-w-2xl">
              {language === "sv"
                ? "LIA (Lärande i Arbete) är en avgörande del av YH-utbildningen i Sverige. Den säkerställer att studenter får praktisk erfarenhet, samtidigt som arbetsgivare får kontakt med nya talanger – framtida experter och karriärinriktade studerande. Vår LIA-plattform (LIA Hub) bygger broar mellan studenter, företag och YH-skolor och gör praktikprocessen smidig, effektiv och värdefull för alla parter."
                : "LIA (Learning in the Workplace) is a crucial part of higher vocational education (YH) in Sweden. It ensures that students gain practical experience while employers connect with new talent – future experts and career-driven learners. Our LIA platform (LIA Hub) builds bridges between students, companies, and YH schools, making the internship process smooth, efficient, and valuable for all parties involved."}
            </p>
          </div>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 delay-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >

              <Link to = "/demo"  > <button 
              className="group relative overflow-hidden bg-white/5 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium font-[Inter] text-base sm:text-lg tracking-wide transition-all duration-300 hover:scale-105 flex items-center justify-center shadow-lg backdrop-blur-sm"
              aria-label={language === "sv" ? "Boka en demo" : "Book a Demo"}
            >
            
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-violet-600 via-white to-violet-600 bg-[length:300%_100%] animate-[borderFlow_3s_linear_infinite]"></span>
              <span className="absolute inset-0 rounded-lg bg-black/90 m-0.5"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            
            
              <span className="relative z-10">
                {language === "sv" ? "Boka en demo" : "Book a Demo"}
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button></Link>
            
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-500 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center animate-bounce bg-black/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full">
          <span className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2 drop-shadow-lg">
            {language === "sv" ? "Scrolla för mer" : "Scroll for more"}
          </span>
          <ChevronDown className="text-white w-4 h-4 sm:w-6 sm:h-6 animate-pulse drop-shadow-lg" />
        </div>
      </div>

      {/* Animated background elements - Reduced on mobile */}
      {!isMobile && (
        <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-violet-900/30 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-900/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-purple-900/20 to-transparent rounded-full blur-3xl opacity-20 animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <div className="absolute inset-0 pointer-events-none z-1 opacity-20 animate-[particles_15s_linear_infinite] bg-[radial-gradient(2px_2px_at_20%_30%,white,transparent),radial-gradient(2px_2px_at_40%_70%,white,transparent),radial-gradient(2px_2px_at_60%_20%,white,transparent),radial-gradient(2px_2px_at_80%_40%,white,transparent),radial-gradient(2px_2px_at_90%_80%,white,transparent),radial-gradient(2px_2px_at_15%_60%,white,transparent),radial-gradient(2px_2px_at_35%_90%,white,transparent),radial-gradient(2px_2px_at_65%_10%,white,transparent),radial-gradient(2px_2px_at_85%_50%,white,transparent),radial-gradient(2px_2px_at_45%_20%,white,transparent)] bg-[length:100%_100%]"></div>
        </div>
      )}

      {/* Add this style tag for the circular glow effect */}
      <style jsx>{`
        @keyframes circularGlow {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .circular-glow-text {
          background: radial-gradient(circle at center, white, violet 50%, white 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: circularGlow 8s linear infinite;
          padding: 0.1em 0;
          display: inline-block;
        }
        
        .circular-glow-text.delay-1s {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Hero;