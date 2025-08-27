import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  ClipboardCheck, 
  BarChartHorizontal, 
  Sparkles, 
  ChevronRight, 
  Zap
} from 'lucide-react';

// Actual image URLs for each step
const STEP_IMAGES = {
  discover: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80",
  manage: "https://img.freepik.com/free-photo/internship-management-temporary-position-concept_53876-139703.jpg",
  evaluate: "https://www.getmagicbox.com/wp-content/uploads/2024/01/MB-blog-193-01.jpg"
};

const ProcessStep = ({ title, description, darkMode, isActive, onClick, inView, icon: Icon, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-[1.02]' : ''}`}
    >
      <div className="flex items-start group">
        {/* Icon indicator with enhanced effects */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: isActive ? [0, -5, 5, 0] : 0 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            rotate: { duration: 0.5, ease: "easeInOut" }, 
            scale: { type: "spring", stiffness: 400, damping: 17 } 
          }}
          className="flex-shrink-0 mr-6 relative"
        >
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isActive 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/40' 
              : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
          }`}>
            <Icon 
              size={24} 
              strokeWidth={2} 
              className={isActive ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'} 
            />
          </div>
          
          {/* Animated ring effect for active step */}
          {isActive && (
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-indigo-400 dark:border-indigo-300 z-0"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1], 
                opacity: [0, 0.5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          )}
        </motion.div>

        {/* Content with enhanced effects */}
        <div className="pt-1 flex-grow">
          <div className="flex items-center">
            <motion.h3
              className={`text-xl md:text-2xl font-semibold mb-3 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-900'
              } ${isActive ? 'text-indigo-500 dark:text-indigo-400' : ''}`}
              whileHover={{ x: isActive ? 0 : 5 }}
            >
              {title}
            </motion.h3>
            
            {/* Add indicator arrow for active state */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
              className="ml-2"
            >
              {isActive && (
                <ChevronRight className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              )}
            </motion.div>
          </div>
          
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
                
                {/* Visual indicator for active content */}
                <motion.div 
                  className="mt-4 flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="h-1 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2"></div>
                 
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Auto-advance through steps
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView]);

  const steps = language === 'sv'
    ? [
        {
          title: 'Utforska och ansök',
          description: 'Studenter söker praktik, skolor och företag hittar rätt talanger.',
          image: STEP_IMAGES.discover,
          icon: Search
        },
        {
          title: 'Smidig praktikhantering',
          description: 'Följ ansökningar, onboarda praktikanter och samla feedback i realtid.',
          image: STEP_IMAGES.manage,
          icon: ClipboardCheck
        },
        {
          title: 'Utvärdera och utveckla',
          description: 'Skolor och arbetsgivare ger återkoppling som leder till studentens utveckling.',
          image: STEP_IMAGES.evaluate,
          icon: BarChartHorizontal
        }
      ]
    : [
        {
          title: 'Discover and Apply',
          description: 'Students search for internships, schools and companies find the right talent.',
          image: STEP_IMAGES.discover,
          icon: Search
        },
        {
          title: 'Seamless Internship Management',
          description: 'Track applications, onboard interns, and collect feedback in real time.',
          image: STEP_IMAGES.manage,
          icon: ClipboardCheck
        },
        {
          title: 'Evaluate and Develop',
          description: 'Schools and employers provide feedback that supports student development.',
          image: STEP_IMAGES.evaluate,
          icon: BarChartHorizontal
        }
      ];

  return (
    <section
      ref={ref}
      className={`font-['Helvetica_Neue'] py-20 md:py-28 overflow-hidden transition-colors duration-300 ${
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
          <motion.div className="flex justify-center items-center mb-4">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="inline-flex items-center justify-center"
            >
              <Sparkles className={`h-8 w-8 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
            </motion.div>
          </motion.div>
          
          <motion.h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {language === 'sv' ? 'Vår plattform' : 'Our Platform'}
          </motion.h2>
          
          <motion.p
            className={`max-w-2xl mx-auto text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {language === 'sv' 
              ? 'Allt du behöver för en framgångsrik praktikperiod' 
              : 'Everything you need for a successful internship'}
          </motion.p>
          
          {/* Decorative animated underline */}
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-6"
            animate={{
              width: ["0%", "40%", "20%"],
            }}
            transition={{ 
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16 items-center">
          {/* Left side: Process steps */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-14 lg:space-y-16">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  title={step.title}
                  description={step.description}
                  darkMode={darkMode}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                  inView={inView}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
          
          {/* Right side: Image display with hover effects */}
          <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            {/* Simple container with hover effects */}
            <div className="relative w-full max-w-lg group">
              {/* Enhanced orange glow background effect (only visible on hover) */}
              <div className="absolute -inset-6 bg-orange-500/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              {/* Additional glow layer for more intensity */}
              <div className="absolute -inset-3 bg-orange-400/30 rounded-xl blur-xl opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Main image container with hover border effect */}
              <div className="relative w-full h-96 lg:h-[32rem] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-500">
                {/* Inner content container */}
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                  <AnimatePresence mode="wait">
                    {steps.map((step, index) => (
                      activeStep === index && (
                        <motion.div
                          key={index}
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${step.image})` }}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.7 }}
                        >
                          {/* Standard overlay with gradient */}
                          <div className={`absolute inset-0 ${
                            darkMode 
                              ? 'bg-gradient-to-t from-gray-900/90 via-gray-900/60 to-gray-900/30' 
                              : 'bg-gradient-to-t from-white/90 via-white/60 to-white/30'
                          }`} />
                          
                          {/* Content */}
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 p-8 text-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                          >
                            {/* Decorative element */}
                            <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mb-6" />
                            
                            <h3 className={`text-2xl font-bold mb-3 ${
                              darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {step.title}
                            </h3>
                            <p className={`text-lg ${
                              darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              {step.description}
                            </p>
                            
                            {/* Step indicator */}
                            <div className="flex justify-center mt-6 space-x-2">
                              {steps.map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-2 rounded-full ${
                                    i === index 
                                      ? 'bg-indigo-500' 
                                      : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                                  }`}
                                  onClick={() => setActiveStep(i)}
                                />
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;