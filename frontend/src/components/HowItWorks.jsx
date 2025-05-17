import React, { useContext, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Simulated context imports (will use default values in this example)
const LanguageContext = React.createContext({ language: 'en' });
const ThemeContext = React.createContext({ darkMode: false });

const useTheme = () => useContext(ThemeContext);

// Step illustrations using placeholders
const STEP_IMAGES = {
  discover: "/api/placeholder/600/400",
  manage: "/api/placeholder/600/400",
  evaluate: "/api/placeholder/600/400"
};

// Step indicator icons
const StepIcon = ({ type, isActive, darkMode }) => {
  const icons = {
    discover: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    manage: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    evaluate: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  };
  
  return icons[type] || icons.discover;
};

// Enhanced particle background effect
const ParticleBackground = ({ darkMode }) => {
  const particleCount = 30;
  const particles = Array.from({ length: particleCount });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 20 + 10;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${darkMode ? 'bg-indigo-500' : 'bg-indigo-300'} opacity-10`}
            style={{
              width: size,
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
            }}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
};

// 3D perspective card for process steps
const ProcessStep = ({ number, title, description, darkMode, isActive, onClick, inView, stepType }) => {
  const controls = useAnimation();
  const [ref, localInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (localInView) {
      controls.start("visible");
    }
  }, [controls, localInView]);
  
  // Variants for animations
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: number * 0.2,
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      onClick={onClick}
      whileHover={{ translateY: -5 }}
      className={`relative cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
    >
      <div className="flex items-start group">
        {/* Step icon with enhanced effects */}
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
              className="text-white"
            >
              <StepIcon type={stepType} isActive={true} darkMode={darkMode} />
            </motion.div>
          ) : (
            <span className="text-2xl font-bold">{number}</span>
          )}
          
          {/* Pulsing effect for active step */}
          {isActive && (
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{ 
                opacity: [0.5, 0.2, 0.5], 
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle, ${darkMode ? 'rgba(99, 102, 241, 0.4)' : 'rgba(99, 102, 241, 0.5)'}, transparent)`,
              }}
            />
          )}
        </motion.div>

        {/* Content with enhanced animations */}
        <div className="ml-6 pt-2">
          <motion.h3
            whileHover={{ x: isActive ? 0 : 5 }}
            className={`text-xl md:text-2xl font-semibold mb-2 transition-all duration-300 ${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            } ${isActive ? 'text-indigo-500' : ''} group-hover:text-indigo-500`}
          >
            {title}
            
            {/* Animated underline on hover */}
            <motion.div 
              className={`h-0.5 mt-1 ${isActive ? 'bg-indigo-500' : darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
              initial={{ width: "0%" }}
              animate={isActive ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.h3>
          
          <AnimatePresence mode="wait">
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="overflow-hidden"
              >
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className={`text-base leading-relaxed transition-colors max-w-md ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {description}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced connection line with animated gradient for desktop */}
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
              className="absolute top-8 left-8 h-1"
            >
              <div className="h-full w-full bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-400 relative">
                {/* Moving light effect */}
                <motion.div 
                  className="absolute top-0 h-full w-16 bg-gradient-to-r from-transparent via-white to-transparent opacity-75"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      )}
      
      {/* Enhanced vertical connection line for mobile */}
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
              className="absolute top-16 left-8 w-1"
            >
              <div className="h-full w-full bg-gradient-to-b from-indigo-600 via-purple-500 to-indigo-400 relative">
                {/* Moving light effect */}
                <motion.div 
                  className="absolute left-0 w-full h-4 bg-gradient-to-b from-transparent via-white to-transparent opacity-75"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                />
              </div>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  );
};

// Enhanced image display with 3D effects
const StepImage = ({ step, index, activeStep, darkMode }) => {
  const isActive = activeStep === index + 1;
  
  return (
    <motion.div
      className="relative aspect-video w-full overflow-hidden rounded-xl perspective"
      initial={{ opacity: 0, scale: 0.92, y: 10 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.92,
        y: isActive ? 0 : 10,
        rotateY: isActive ? 0 : -10
      }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20
      }}
      style={{
        position: isActive ? 'relative' : 'absolute',
        top: 0,
        left: 0
      }}
    >
      {/* 3D card container with perspective */}
      <div className="relative h-full group perspective-1000">
        <motion.div 
          className="relative h-full rounded-xl overflow-hidden transition-all duration-300 transform-3d shadow-2xl"
          whileHover={{ 
            rotateY: 5,
            rotateX: -5,
            scale: 1.02,
          }}
          style={{
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Card inner elements */}
          <div className="h-full">
            {/* Animated background glow */}
            <motion.div
              className="absolute -inset-1 rounded-xl z-0"
              style={{ 
                backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? 'rgba(99, 102, 241, 0.6)' : 'rgba(99, 102, 241, 0.4)'}, transparent 70%)` 
              }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Image layer */}
            <div className="relative overflow-hidden rounded-xl border border-indigo-500/30 h-full z-10">
              {/* Animated shine effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 z-20"
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
              
              {/* Background image with parallax effect */}
              <motion.div 
                className="absolute inset-0 bg-cover bg-center z-10"
                style={{ backgroundImage: `url(${step.image})` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Colored overlay with depth */}
              <div className={`absolute inset-0 z-20 ${
                darkMode 
                  ? 'bg-gradient-to-br from-indigo-900/50 via-purple-900/40 to-gray-900/60' 
                  : 'bg-gradient-to-br from-indigo-300/30 via-purple-200/20 to-gray-100/30'
              }`}></div>

              {/* 3D floating elements */}
              <div className="absolute inset-0 z-30">
                {/* Step indicator badge with float animation */}
                <motion.div 
                  className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-xl"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  Step {index + 1}
                </motion.div>
                
                {/* Floating decorative elements */}
                <motion.div 
                  className={`absolute bottom-4 left-4 w-16 h-16 rounded-full ${darkMode ? 'bg-purple-500/30' : 'bg-purple-300/30'} backdrop-blur-sm`}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                />
                
                <motion.div 
                  className={`absolute top-12 left-12 w-8 h-8 rounded-md ${darkMode ? 'bg-indigo-500/30' : 'bg-indigo-300/30'} backdrop-blur-sm`}
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5 
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main component with additional effects
const HowItWorks = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const [activeStep, setActiveStep] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Scroll-triggered animations
  const titleControls = useAnimation();
  const contentControls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      titleControls.start("visible");
      contentControls.start("visible");
    }
  }, [inView, titleControls, contentControls]);
  
  // Auto-advance through steps with smoother transitions
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 3) + 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView]);

  const steps = language === 'sv'
    ? [
        {
          title: 'Utforska och ansök',
          description: 'Studenter söker praktik, skolor och företag hittar rätt talanger med vår smarta matchningsalgoritm. Personliga profiler hjälper till att hitta den perfekta matchen för båda parter.',
          image: STEP_IMAGES.discover,
          type: 'discover'
        },
        {
          title: 'Smidig praktikhantering',
          description: 'Följ ansökningar, onboarda praktikanter och samla feedback i realtid genom vårt intuitiva gränssnitt. Automatiska påminnelser och schemaläggningsverktyg förenklar hela processen.',
          image: STEP_IMAGES.manage,
          type: 'manage'
        },
        {
          title: 'Utvärdera och utveckla',
          description: 'Skolor och arbetsgivare ger återkoppling som leder till studentens utveckling. Detaljerade rapporter och tillväxtverktyg hjälper studenter att dokumentera sina framsteg.',
          image: STEP_IMAGES.evaluate,
          type: 'evaluate'
        }
      ]
    : [
        {
          title: 'Discover and Apply',
          description: 'Students search for internships while schools and companies find the right talent using our smart matching algorithm. Personalized profiles help find the perfect match for both parties.',
          image: STEP_IMAGES.discover,
          type: 'discover'
        },
        {
          title: 'Seamless Internship Management',
          description: 'Track applications, onboard interns, and collect feedback in real time through our intuitive interface. Automated reminders and scheduling tools simplify the entire process.',
          image: STEP_IMAGES.manage,
          type: 'manage'
        },
        {
          title: 'Evaluate and Develop',
          description: 'Schools and employers provide feedback that supports student development. Detailed reports and growth tools help students document their progress throughout the internship.',
          image: STEP_IMAGES.evaluate,
          type: 'evaluate'
        }
      ];

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  return (
    <section
      ref={ref}
      className={`py-20 md:py-28 overflow-hidden transition-colors duration-500 relative ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      {/* Enhanced background with subtle movement */}
      <ParticleBackground darkMode={darkMode} />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={titleControls}
          className="text-center mb-16"
        >
          <motion.h2
            variants={titleVariants}
            className={`text-3xl md:text-5xl font-bold mb-6 transition-colors ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {language === 'sv' ? 'Så fungerar det' : 'How It Works'}
          </motion.h2>
          
          {/* 3D animated accent elements */}
          <motion.div 
            className="flex justify-center items-center space-x-3 mb-6"
            variants={titleVariants}
          >
            <motion.span 
              className={`h-1.5 w-8 rounded-full ${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'}`}
              whileHover={{ scaleX: 1.5, scaleY: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.span 
              className={`h-1.5 w-16 rounded-full ${darkMode ? 'bg-indigo-600' : 'bg-indigo-500'}`}
              whileHover={{ scaleX: 1.3, scaleY: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.span 
              className={`h-1.5 w-8 rounded-full ${darkMode ? 'bg-indigo-700' : 'bg-indigo-600'}`}
              whileHover={{ scaleX: 1.5, scaleY: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>
          
          {/* Subtitle with typing effect */}
          <motion.p
            className={`max-w-2xl mx-auto text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {language === 'sv' 
              ? 'Vår plattform förenklar praktikprocessen för alla inblandade' 
              : 'Our platform streamlines the internship process for everyone involved'}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate={contentControls}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
        >
          {/* Left side: Enhanced process steps */}
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
                  stepType={step.type}
                />
              ))}
            </div>
          </div>
          
          {/* Right side: Enhanced image display with perspective effects */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg">
              {/* Enhanced interactive progress indicator */}
              <div className="absolute -top-16 left-0 right-0 flex justify-center space-x-6 mb-6">
                {[1, 2, 3].map((step) => (
                  <motion.button
                    key={step}
                    onClick={() => setActiveStep(step)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative"
                  >
                    <motion.div 
                      className={`w-4 h-4 rounded-full ${
                        activeStep === step 
                          ? darkMode ? 'bg-indigo-500' : 'bg-indigo-600' 
                          : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                      } transition-all duration-300`}
                      animate={activeStep === step ? {
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    
                    {/* Tooltip on hover */}
                    <motion.div
                      className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
                        darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800 shadow-md'
                      }`}
                    >
                      Step {step}
                    </motion.div>
                  </motion.button>
                ))}
              </div>
              
              {/* Main images with enhanced 3D effects */}
              <div className="perspective relative aspect-video">
                <AnimatePresence mode="wait">
                  {steps.map((step, index) => (
                    <StepImage
                      key={index}
                      step={step}
                      index={index}
                      activeStep={activeStep}
                      darkMode={darkMode}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Added call-to-action button */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`px-8 py-4 rounded-full text-white font-medium text-lg transition-all 
              ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-600 hover:bg-indigo-700'}
              shadow-lg hover:shadow-xl shadow-indigo-500/30 hover:shadow-indigo-600/40`}
          >
            {language === 'sv' ? 'Kom igång nu' : 'Get Started Now'}
            
            {/* Button shine effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
              animate={{
                opacity: [0, 0.5, 0],
                left: ['-100%', '100%', '100%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  
  // Theme context value
  const themeValue = { darkMode, setDarkMode };
  
  // Language context value
  const languageValue = { language, setLanguage };
  
  return (
    <ThemeContext.Provider value={themeValue}>
      <LanguageContext.Provider value={languageValue}>
        <div className={darkMode ? 'bg-gray-900' : 'bg-white'}>
          <div className="flex justify-end p-4 space-x-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-md ${
                darkMode 
                  ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
            
            <button 
              onClick={() => setLanguage(language === 'en' ? 'sv' : 'en')}
              className={`px-4 py-2 rounded-md ${
                darkMode 
                  ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              {language === 'en' ? '🇸🇪 Svenska' : '🇬🇧 English'}
            </button>
          </div>
          
          <div className="min-h-screen">
            <HowItWorks />
          </div>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}