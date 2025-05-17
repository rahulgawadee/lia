import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Image URLs for step illustrations
const STEP_IMAGES = {
  discover: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
  manage: "https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557571_1280.jpg",
  evaluate: "https://cdn.pixabay.com/photo/2018/03/01/09/33/business-3190209_1280.jpg"
};

// Step indicator images instead of icons
const STEP_INDICATOR_IMAGES = {
  discover: "/api/placeholder/48/48", // Replace with actual image path
  manage: "/api/placeholder/48/48", // Replace with actual image path
  evaluate: "/api/placeholder/48/48" // Replace with actual image path
};

const ProcessStep = ({ number, title, description, darkMode, isActive, onClick, inView, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: number * 0.2 }}
      onClick={onClick}
      className={`relative cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
    >
      <div className="flex items-start group">
        {/* Step number/indicator with image */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: isActive ? 0 : 10 }}
          whileTap={{ scale: 0.95 }}
          className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center 
            shadow-lg transition-all duration-300 ${
            isActive
              ? darkMode
                ? 'bg-indigo-600 text-white shadow-indigo-500/50'
                : 'bg-indigo-600 text-white shadow-indigo-500/50'
              : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isActive ? (
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <img 
                src={STEP_INDICATOR_IMAGES[Object.keys(STEP_INDICATOR_IMAGES)[number-1]]} 
                alt={`Step ${number}`} 
                className="w-8 h-8 object-contain"
              />
            </motion.div>
          ) : (
            <span className="text-2xl font-bold">{number}</span>
          )}
        </motion.div>

        {/* Content */}
        <div className="ml-6 pt-2">
          <motion.h3
            whileHover={{ x: isActive ? 0 : 5 }}
            className={`text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            } ${isActive ? 'text-indigo-500' : ''} group-hover:text-indigo-500`}
          >
            {title}
          </motion.h3>
          
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isActive ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="overflow-hidden"
          >
            <p
              className={`text-base leading-relaxed transition-colors max-w-md ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Connection line with animated gradient for desktop */}
      {number < 3 && (
        <div className="hidden lg:block relative">
          <div
            className={`absolute top-8 left-8 w-full h-1 transition-colors ${
              darkMode 
                ? 'bg-gray-700' 
                : 'bg-gray-200'
            }`}
          />
          {isActive && (
            <motion.div
              initial={{ width: '0%', left: '8' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute top-8 left-8 h-1 bg-gradient-to-r from-indigo-600 to-purple-500`}
            />
          )}
        </div>
      )}
      
      {/* Vertical connection line for mobile with animated gradient */}
      {number < 3 && (
        <div className="lg:hidden relative">
          <div
            className={`absolute top-16 left-8 h-12 w-1 transition-colors ${
              darkMode 
                ? 'bg-gray-700' 
                : 'bg-gray-200'
            }`}
          />
          {isActive && (
            <motion.div
              initial={{ height: '0%', top: '16' }}
              animate={{ height: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute top-16 left-8 w-1 bg-gradient-to-b from-indigo-600 to-purple-500`}
            />
          )}
        </div>
      )}
    </motion.div>
  );
};

const HowItWorks = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const [activeStep, setActiveStep] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-advance through steps
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 4000); // Increased to 4 seconds to give users more time to read
    
    return () => clearInterval(interval);
  }, [inView]);

  const steps = language === 'sv'
    ? [
        {
          title: 'Utforska och ansök',
          description: 'Studenter söker praktik, skolor och företag hittar rätt talanger med vår smarta matchningsalgoritm. Personliga profiler hjälper till att hitta den perfekta matchen för båda parter.',
          image: STEP_IMAGES.discover
        },
        {
          title: 'Smidig praktikhantering',
          description: 'Följ ansökningar, onboarda praktikanter och samla feedback i realtid genom vårt intuitiva gränssnitt. Automatiska påminnelser och schemaläggningsverktyg förenklar hela processen.',
          image: STEP_IMAGES.manage
        },
        {
          title: 'Utvärdera och utveckla',
          description: 'Skolor och arbetsgivare ger återkoppling som leder till studentens utveckling. Detaljerade rapporter och tillväxtverktyg hjälper studenter att dokumentera sina framsteg.',
          image: STEP_IMAGES.evaluate
        }
      ]
    : [
        {
          title: 'Discover and Apply',
          description: 'Students search for internships while schools and companies find the right talent using our smart matching algorithm. Personalized profiles help find the perfect match for both parties.',
          image: STEP_IMAGES.discover
        },
        {
          title: 'Seamless Internship Management',
          description: 'Track applications, onboard interns, and collect feedback in real time through our intuitive interface. Automated reminders and scheduling tools simplify the entire process.',
          image: STEP_IMAGES.manage
        },
        {
          title: 'Evaluate and Develop',
          description: 'Schools and employers provide feedback that supports student development. Detailed reports and growth tools help students document their progress throughout the internship.',
          image: STEP_IMAGES.evaluate
        }
      ];

  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-3xl md:text-4xl font-bold mb-6 transition-colors ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {language === 'sv' ? 'Så fungerar det' : 'How It Works'}
          </motion.h2>
          
          {/* Modernized accent element instead of decorative underline */}
          <motion.div 
            className="flex justify-center items-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className={`h-1 w-6 rounded-full ${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'}`}></span>
            <span className={`h-1 w-10 rounded-full ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'}`}></span>
            <span className={`h-1 w-6 rounded-full ${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'}`}></span>
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left side: Process steps */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-14">
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
                  image={step.image}
                />
              ))}
            </div>
          </div>
          
          {/* Right side: Image display with enhanced animations */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Interactive progress indicator */}
              <div className="absolute -top-12 left-0 right-0 flex justify-center space-x-4 mb-6">
                {[1, 2, 3].map((step) => (
                  <motion.button
                    key={step}
                    onClick={() => setActiveStep(step)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full ${
                      activeStep === step 
                        ? darkMode ? 'bg-indigo-500' : 'bg-indigo-600' 
                        : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                    } transition-all duration-300`}
                  />
                ))}
              </div>
              
              {/* Main image with animations */}
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-video w-full overflow-hidden rounded-xl"
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ 
                    opacity: activeStep === index + 1 ? 1 : 0,
                    scale: activeStep === index + 1 ? 1 : 0.92,
                    y: activeStep === index + 1 ? 0 : 10,
                    rotateY: activeStep === index + 1 ? 0 : -10
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20
                  }}
                  style={{
                    position: activeStep === index + 1 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0
                  }}
                >
                  {/* Enhanced background glow effect */}
                  <motion.div
                    className="absolute -inset-2 rounded-xl opacity-75"
                    style={{ 
                      backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? 'rgba(99, 102, 241, 0.5)' : 'rgba(99, 102, 241, 0.3)'}, transparent 70%)` 
                    }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Modern card design */}
                  <div className="relative overflow-hidden rounded-xl border border-indigo-500/30 shadow-2xl h-full">
                    {/* Animated shine effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0"
                      animate={{
                        opacity: [0, 0.5, 0],
                        left: ['-100%', '100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 5
                      }}
                    />
                    
                    {/* Image with smooth hover effect */}
                    <motion.div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-10000"
                      style={{ backgroundImage: `url(${step.image})` }}
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    
                    {/* Enhanced overlay gradient */}
                    <div className={`absolute inset-0 ${
                      darkMode 
                        ? 'bg-gradient-to-br from-indigo-900/40 to-gray-900/60' 
                        : 'bg-gradient-to-br from-indigo-100/40 to-gray-100/30'
                    }`}></div>

                    {/* Step indicator badge */}
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Step {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;