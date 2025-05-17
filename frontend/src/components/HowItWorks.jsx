import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// High-quality illustration images (replace with your actual assets)
const STEP_IMAGES = {
  discover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  manage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  evaluate: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
};

// Modern icon components (replace with your actual icons)
const StepIndicator = ({ active, number }) => (
  <div className="relative w-12 h-12">
    <motion.div
      className={`absolute inset-0 rounded-full flex items-center justify-center ${
        active ? 'bg-indigo-600 shadow-lg shadow-indigo-500/30' : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
      }`}
      initial={false}
      animate={{
        scale: active ? [1, 1.05, 1] : 1,
        transition: active ? { duration: 0.6 } : {}
      }}
    >
      {active ? (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </motion.svg>
      ) : (
        <span className={`text-lg font-bold ${active ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
          {number}
        </span>
      )}
    </motion.div>
  </div>
);

const ProcessStep = ({ number, title, description, darkMode, isActive, onClick, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: number * 0.15 }}
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-[1.02]' : ''}`}
    >
      <div className="flex items-start group">
        {/* Step indicator */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 mr-6"
        >
          <StepIndicator active={isActive} number={number} />
        </motion.div>

        {/* Content */}
        <div className="pt-1">
          <motion.h3
            className={`text-xl md:text-2xl font-semibold mb-3 transition-colors ${
              darkMode ? 'text-white' : 'text-gray-900'
            } ${isActive ? 'text-indigo-500' : ''}`}
            whileHover={{ x: isActive ? 0 : 5 }}
          >
            {title}
          </motion.h3>
          
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="overflow-hidden"
              >
                <p className={`text-base leading-relaxed max-w-md ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Connection line - Desktop */}
      {number < 3 && (
        <div className="hidden lg:block relative">
          <div className={`absolute top-6 left-6 w-full h-1 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          {isActive && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute top-6 left-6 h-1 bg-gradient-to-r from-indigo-500 to-purple-500`}
            />
          )}
        </div>
      )}
      
      {/* Connection line - Mobile */}
      {number < 3 && (
        <div className="lg:hidden relative">
          <div className={`absolute top-12 left-6 h-16 w-1 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`} />
          {isActive && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute top-12 left-6 w-1 bg-gradient-to-b from-indigo-500 to-purple-500`}
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
    triggerOnce: false,
    threshold: 0.1,
  });

  // Auto-advance through steps
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % 3) + 1);
    }, 5000);
    
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
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {language === 'sv' ? 'Så fungerar det' : 'How It Works'}
          </motion.h2>
          
          <motion.p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {language === 'sv' 
              ? 'Enkel process för studenter, skolor och företag' 
              : 'Simple process for students, schools and companies'}
          </motion.p>
          
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className={`h-1 w-24 rounded-full ${
              darkMode ? 'bg-gradient-to-r from-indigo-600 to-purple-500' : 'bg-gradient-to-r from-indigo-500 to-purple-400'
            }`} />
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Left side: Process steps */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-12 lg:space-y-14">
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
                />
              ))}
            </div>
          </div>
          
          {/* Right side: Image display */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg h-96 lg:h-[28rem]">
              {/* Progress indicators */}
              <div className="absolute -top-10 left-0 right-0 flex justify-center space-x-3">
                {[1, 2, 3].map((step) => (
                  <button
                    key={step}
                    onClick={() => setActiveStep(step)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeStep === step 
                        ? darkMode ? 'bg-indigo-400 w-6' : 'bg-indigo-600 w-6'
                        : darkMode ? 'bg-gray-700' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              {/* Animated image container */}
              <AnimatePresence mode="wait">
                {steps.map((step, index) => (
                  activeStep === index + 1 && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {/* Image with parallax effect */}
                      <motion.div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${step.image})` }}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                      />
                      
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 ${
                        darkMode 
                          ? 'bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-gray-900/80' 
                          : 'bg-gradient-to-t from-white/70 via-white/20 to-white/70'
                      }`} />
                      
                      {/* Step badge */}
                      <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-sm font-medium shadow-md ${
                        darkMode ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'
                      }`}>
                        {language === 'sv' ? 'Steg' : 'Step'} {index + 1}
                      </div>
                      
                      {/* Subtle floating elements */}
                      <motion.div 
                        className={`absolute bottom-6 left-6 w-16 h-16 rounded-full ${
                          darkMode ? 'bg-indigo-500/20' : 'bg-indigo-100/70'
                        }`}
                        animate={{
                          y: [0, -10, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;