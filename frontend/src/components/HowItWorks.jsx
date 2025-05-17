import React, { useContext, useState, useEffect, useRef } from 'react';
import { Lightbulb, Gauge, Award, ChevronRight, ArrowRight } from 'lucide-react';

// Simulated context (would connect to your actual contexts)
const LanguageContext = React.createContext({ language: 'en' });
const ThemeContext = React.createContext({ darkMode: false });

const useTheme = () => useContext(ThemeContext);

const STEP_IMAGES = {
  discover: "/api/placeholder/640/360",
  manage: "/api/placeholder/640/360",
  evaluate: "/api/placeholder/640/360"
};

const ProcessStep = ({ number, title, description, darkMode, isActive, onClick, inView, icon: Icon }) => {
  return (
    <div
      className={`relative cursor-pointer group transition-all duration-500 ${isActive ? 'z-10' : 'z-0'}`}
      onClick={onClick}
      style={{
        transform: isActive ? 'translateX(10px)' : 'translateX(0)',
        opacity: inView ? 1 : 0,
        transition: `all ${0.4 + number * 0.1}s cubic-bezier(0.34, 1.56, 0.64, 1)`
      }}
    >
      <div className="flex items-start">
        {/* Step number/indicator with icon */}
        <div
          className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center 
            transition-all duration-500 ${
            isActive
              ? darkMode
                ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40'
                : 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40'
              : darkMode
                ? 'bg-gray-800 text-gray-300 group-hover:bg-gray-700'
                : 'bg-white text-gray-600 group-hover:bg-gray-50 border border-gray-200'
          }`}
          style={{
            transform: isActive ? 'scale(1.1)' : 'scale(1)',
            boxShadow: isActive ? (darkMode ? '0 10px 25px -5px rgba(99, 102, 241, 0.5)' : '0 10px 25px -5px rgba(99, 102, 241, 0.5)') : ''
          }}
        >
          {isActive ? (
            <div
              className="animate-pulse"
              style={{
                animation: isActive ? 'fadeIn 0.4s ease forwards, bounce 0.8s ease 0.2s infinite alternate' : '',
              }}
            >
              <Icon size={24} className="text-white" />
            </div>
          ) : (
            <span className="text-xl md:text-2xl font-bold">{number}</span>
          )}
        </div>

        {/* Content */}
        <div className="ml-4 md:ml-6 pt-1 md:pt-2">
          <h3
            className={`text-lg md:text-xl lg:text-2xl font-semibold mb-1 md:mb-2 ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            } ${isActive ? (darkMode ? 'text-indigo-400' : 'text-indigo-600') : ''}`}
          >
            {title}
            {isActive && (
              <ArrowRight className="inline-block ml-2" size={18} />
            )}
          </h3>
          
          <div
            className="overflow-hidden transition-all duration-500"
            style={{
              maxHeight: isActive ? '200px' : '0px',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(-10px)'
            }}
          >
            <p
              className={`text-sm md:text-base leading-relaxed max-w-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Connection line */}
      {number < 3 && (
        <div className="hidden lg:block absolute top-6 left-6 md:top-8 md:left-8 w-full h-1">
          <div
            className={`h-full transition-all duration-700 ${
              darkMode 
                ? 'bg-gray-800' 
                : 'bg-gray-100'
            }`}
            style={{
              boxShadow: darkMode ? '0 0 5px rgba(255,255,255,0.05)' : '0 0 5px rgba(0,0,0,0.05)'
            }}
          />
          <div
            className={`absolute top-0 left-0 h-full ${
              darkMode 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}
            style={{
              width: isActive ? '100%' : '0%',
              transition: 'width 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: isActive ? '0 0 8px rgba(99, 102, 241, 0.5)' : 'none'
            }}
          />
        </div>
      )}
      
      {/* Vertical connection line for mobile */}
      {number < 3 && (
        <div className="lg:hidden absolute top-12 left-6 h-16 w-1">
          <div
            className={`h-full w-full transition-all duration-700 ${
              darkMode 
                ? 'bg-gray-800' 
                : 'bg-gray-100'
            }`}
          />
          <div
            className={`absolute top-0 left-0 w-full ${
              darkMode 
                ? 'bg-gradient-to-b from-indigo-500 to-purple-600' 
                : 'bg-gradient-to-b from-indigo-500 to-purple-600'
            }`}
            style={{
              height: isActive ? '100%' : '0%',
              transition: 'height 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: isActive ? '0 0 8px rgba(99, 102, 241, 0.5)' : 'none'
            }}
          />
        </div>
      )}
    </div>
  );
};

const ProgressIndicator = ({ steps, activeStep, setActiveStep, darkMode }) => {
  return (
    <div className="flex justify-center mt-6 md:mt-8 space-x-3 md:space-x-4">
      {steps.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveStep(index + 1)}
          className="relative h-3 rounded-full transition-all duration-500 overflow-hidden"
          style={{
            width: activeStep === index + 1 ? '2.5rem' : '0.75rem',
            background: darkMode ? (activeStep === index + 1 ? 'transparent' : 'rgba(107, 114, 128, 0.6)') : 
                                  (activeStep === index + 1 ? 'transparent' : 'rgba(209, 213, 219, 0.8)')
          }}
          aria-label={`Go to step ${index + 1}`}
        >
          <div 
            className={`absolute inset-0 rounded-full ${
              darkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
            }`}
            style={{
              transform: activeStep === index + 1 ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              opacity: activeStep === index + 1 ? 1 : 0.7
            }}
          />
          {activeStep === index + 1 && (
            <div 
              className="absolute inset-0 rounded-full bg-white opacity-30"
              style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

const HowItWorks = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const [activeStep, setActiveStep] = useState(1);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView]);

  const icons = [Lightbulb, Gauge, Award];

  const steps = language === 'sv'
    ? [
        {
          title: 'Utforska och ansök',
          description: 'Studenter söker praktik, skolor och företag hittar rätt talanger med vår smarta matchningsalgoritm. Personliga profiler hjälper till att hitta den perfekta matchen för båda parter.',
          image: STEP_IMAGES.discover,
          icon: icons[0]
        },
        {
          title: 'Smidig praktikhantering',
          description: 'Följ ansökningar, onboarda praktikanter och samla feedback i realtid genom vårt intuitiva gränssnitt. Automatiska påminnelser och schemaläggningsverktyg förenklar hela processen.',
          image: STEP_IMAGES.manage,
          icon: icons[1]
        },
        {
          title: 'Utvärdera och utveckla',
          description: 'Skolor och arbetsgivare ger återkoppling som leder till studentens utveckling. Detaljerade rapporter och tillväxtverktyg hjälper studenter att dokumentera sina framsteg.',
          image: STEP_IMAGES.evaluate,
          icon: icons[2]
        }
      ]
    : [
        {
          title: 'Discover and Apply',
          description: 'Students search for internships while schools and companies find the right talent using our smart matching algorithm. Personalized profiles help find the perfect match for both parties.',
          image: STEP_IMAGES.discover,
          icon: icons[0]
        },
        {
          title: 'Seamless Internship Management',
          description: 'Track applications, onboard interns, and collect feedback in real time through our intuitive interface. Automated reminders and scheduling tools simplify the entire process.',
          image: STEP_IMAGES.manage,
          icon: icons[1]
        },
        {
          title: 'Evaluate and Develop',
          description: 'Schools and employers provide feedback that supports student development. Detailed reports and growth tools help students document their progress throughout the internship.',
          image: STEP_IMAGES.evaluate,
          icon: icons[2]
        }
      ];

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 lg:py-32 overflow-hidden relative ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
      id="how-it-works"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute inset-0 opacity-20 ${darkMode ? 'bg-black' : 'bg-white'}`}
          style={{
            backgroundImage: darkMode 
              ? 'radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.4) 0%, transparent 35%), radial-gradient(circle at 70% 80%, rgba(124, 58, 237, 0.4) 0%, transparent 35%)'
              : 'radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.1) 0%, transparent 35%), radial-gradient(circle at 70% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 35%)',
            animation: 'subtleFloat 30s ease-in-out infinite alternate'
          }}
        />
        
        <div 
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl ${
            darkMode ? 'bg-indigo-900' : 'bg-indigo-200'
          }`}
          style={{
            transform: inView ? 'translate(0, 0) scale(1)' : 'translate(50px, -50px) scale(0.8)',
            transition: 'transform 1.5s ease-out',
            animation: 'floatAround 20s ease-in-out infinite alternate'
          }}
        />
        
        <div 
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-20 blur-3xl ${
            darkMode ? 'bg-purple-900' : 'bg-purple-200'
          }`}
          style={{
            transform: inView ? 'translate(0, 0) scale(1)' : 'translate(-50px, 50px) scale(0.8)',
            transition: 'transform 1.5s ease-out',
            animation: 'floatAround2 25s ease-in-out infinite alternate'
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className="text-center mb-12 md:mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {language === 'sv' ? 'Så fungerar det' : 'How It Works'}
          </h2>
          <div className="flex justify-center">
            <div
              className={`h-1 w-16 md:w-24 lg:w-32 rounded-full ${
                darkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-600' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
              }`}
              style={{
                boxShadow: darkMode ? '0 0 10px rgba(99, 102, 241, 0.5)' : '0 0 10px rgba(99, 102, 241, 0.3)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1s ease-out'
              }}
            />
          </div>
          <p 
            className={`mt-6 max-w-2xl mx-auto text-sm md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s'
            }}
          >
            {language === 'sv' 
              ? 'Vår plattform förenklar hela praktikprocessen i tre enkla steg'
              : 'Our platform simplifies the entire internship process in three simple steps'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="space-y-10 md:space-y-16">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  darkMode={darkMode}
                  isActive={activeStep === index + 1}
                  onClick={() => setActiveStep(index + 1)}
                  inView={inView}
                  icon={step.icon}
                />
              ))}
            </div>
            
            <div 
              className="block lg:hidden mt-8 md:mt-10"
              style={{
                opacity: inView ? 1 : 0,
                transition: 'opacity 0.6s ease-out 0.6s'
              }}
            >
              <ProgressIndicator 
                steps={steps} 
                activeStep={activeStep} 
                setActiveStep={setActiveStep} 
                darkMode={darkMode} 
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div 
              className="relative w-full max-w-md lg:max-w-xl"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) translateX(0)' : 'translateY(20px) translateX(20px)',
                transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
              }}
            >
              <div className={`absolute -z-10 top-0 right-0 w-64 h-64 md:w-72 md:h-72 rounded-full ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-100/50'} blur-3xl`}></div>
              <div className={`absolute -z-10 bottom-0 left-0 w-64 h-64 md:w-64 md:h-64 rounded-full ${darkMode ? 'bg-purple-900/20' : 'bg-purple-100/50'} blur-3xl`}></div>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <div 
                  className="absolute inset-0 rounded-2xl" 
                  style={{
                    background: `linear-gradient(to bottom right, ${darkMode ? 'rgba(79, 70, 229, 0.05)' : 'rgba(79, 70, 229, 0.05)'}, ${darkMode ? 'rgba(124, 58, 237, 0.05)' : 'rgba(124, 58, 237, 0.05)'})`,
                    boxShadow: darkMode ? '0 0 30px rgba(79, 70, 229, 0.2)' : '0 0 30px rgba(79, 70, 229, 0.15)',
                    border: darkMode ? '1px solid rgba(79, 70, 229, 0.2)' : '1px solid rgba(79, 70, 229, 0.15)',
                    animation: 'pulseBorder 4s ease-in-out infinite alternate'
                  }}
                />
                
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 w-full h-full transition-all duration-700"
                    style={{ 
                      opacity: activeStep === index + 1 ? 1 : 0,
                      transitionDelay: activeStep === index + 1 ? '0.2s' : '0s',
                      transform: activeStep === index + 1 ? 'scale(1) translateX(0)' : `scale(0.9) translateX(${index < activeStep - 1 ? '-20px' : '20px'})`,
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 transform"
                        style={{ 
                          backgroundImage: `url(${step.image})`,
                          transform: activeStep === index + 1 ? 'scale(1.05)' : 'scale(1.15)',
                          transition: 'transform 10s ease-out'
                        }}
                      />
                      
                      <div className={`absolute inset-0 ${
                        darkMode 
                          ? 'bg-gradient-to-tr from-gray-900/80 via-indigo-900/40 to-transparent' 
                          : 'bg-gradient-to-tr from-indigo-100/40 via-purple-100/20 to-transparent'
                      }`}></div>
                      
                      <div 
                        className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent"
                        style={{
                          transform: activeStep === index + 1 ? 'translateY(0)' : 'translateY(20px)',
                          opacity: activeStep === index + 1 ? 1 : 0,
                          transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
                          transitionDelay: '0.3s'
                        }}
                      >
                        <div className="flex items-center">
                          <div 
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                            style={{
                              boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.5)'
                            }}
                          >
                            <step.icon size={20} />
                          </div>
                          <h3 className="ml-3 text-xl font-semibold text-white">{step.title}</h3>
                        </div>
                      </div>
                      
                      <div 
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-lg font-bold text-indigo-600 shadow-lg"
                        style={{
                          transform: activeStep === index + 1 ? 'scale(1.1) rotate(0deg)' : 'scale(0.8) rotate(-10deg)',
                          opacity: activeStep === index + 1 ? 1 : 0.7,
                          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out',
                          boxShadow: activeStep === index + 1 ? '0 10px 25px -5px rgba(99, 102, 241, 0.4)' : ''
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div 
                className="hidden lg:block mt-8"
                style={{
                  opacity: inView ? 1 : 0,
                  transition: 'opacity 0.6s ease-out 0.6s'
                }}
              >
                <ProgressIndicator 
                  steps={steps} 
                  activeStep={activeStep} 
                  setActiveStep={setActiveStep} 
                  darkMode={darkMode} 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div
          className="mt-16 text-center"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s'
          }}
        >
          <button 
            className="relative px-10 py-4 rounded-full font-medium text-white overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-purple-600"></span>
            
            <span className="relative z-10 flex items-center justify-center">
              {language === 'sv' ? 'Kom igång nu' : 'Get Started Now'}
              <ChevronRight className="ml-1" size={20} />
            </span>
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes pulseBorder {
          0%, 100% {
            box-shadow: 0 0 20px rgba(79, 70, 229, ${darkMode ? '0.2' : '0.15'});
          }
          50% {
            boxShadow: 0 0 30px rgba(79, 70, 229, ${darkMode ? '0.4' : '0.3'});
          }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes floatAround {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 20px); }
          100% { transform: translate(30px, -20px); }
        }
        
        @keyframes floatAround2 {
          0% { transform: translate(0, 0); }
          50% { transform: translate(30px, -20px); }
          100% { transform: translate(-30px, 20px); }
        }
        
        @keyframes subtleFloat {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;