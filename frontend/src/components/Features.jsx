import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon, title, description, darkMode, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const icons = {
    '🔍': <Zap color={darkMode ? "#a78bfa" : "#6366f1"} width="28px" height="28px" />,
    '🔄': <Users color={darkMode ? "#a78bfa" : "#6366f1"} width="28px" height="28px" />,
    '⏱️': <Clock color={darkMode ? "#a78bfa" : "#6366f1"} width="28px" height="28px" />
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="relative h-full"
    >
      <div className={`h-full p-8 rounded-2xl overflow-hidden relative z-10 ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900/80 to-gray-900 border border-gray-800/50' 
          : 'bg-white border border-gray-100'
      }`}
      style={{
        boxShadow: darkMode 
          ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
          : '0 10px 30px -15px rgba(0, 0, 0, 0.1)'
      }}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500 ${
          darkMode ? 'bg-indigo-900/30' : 'bg-indigo-200/50'
        }`}></div>

        {/* Animated gradient border */}
        <motion.div 
          className="absolute inset-0 rounded-2xl p-[2px]"
          initial={{ opacity: 0.3 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className={`absolute inset-0 rounded-2xl ${
            darkMode 
              ? 'bg-gradient-to-br from-indigo-900/30 via-indigo-900/10 to-transparent' 
              : 'bg-gradient-to-br from-indigo-100/50 via-indigo-50/30 to-transparent'
          }`}></div>
        </motion.div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon with glow */}
          <div className="mb-6">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
              darkMode ? 'bg-indigo-900/30' : 'bg-indigo-100/50'
            }`}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {icons[icon] || icons['🔍']}
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <h3 className={`text-xl font-bold mb-3 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </h3>
          
          <p className={`mb-6 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {description}
          </p>
          
          {/* Learn more link */}
          <div className="mt-auto">
            <motion.div 
              whileHover={{ x: 5 }}
              className={`inline-flex items-center text-sm font-medium ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}
            >
              {useContext(LanguageContext).language === 'sv' ? 'Läs mer' : 'Learn more'}
              <ArrowRight 
                color={darkMode ? "#a78bfa" : "#6366f1"} 
                width="16px" 
                height="16px" 
                className="ml-1"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const features = language === 'sv' 
    ? [
        {
          icon: '🔍',
          title: 'Intelligent Matchning',
          description: 'Vår AI-drivna matchning kopplar studenter med perfekta praktikplatser baserat på kompetenser och intressen.'
        },
        {
          icon: '🔄',
          title: 'Sömlös Samverkan',
          description: 'En enhetlig plattform för skolor, studenter och företag att samarbeta effektivt under hela praktikperioden.'
        },
        {
          icon: '⏱️',
          title: 'Automatiserade Flöden',
          description: 'Smart automatisering som sparar tid på administration så ni kan fokusera på det viktiga.'
        }
      ]
    : [
        {
          icon: '🔍',
          title: 'Smart Matching',
          description: 'Our AI-powered matching connects students with perfect internships based on skills and interests.'
        },
        {
          icon: '🔄',
          title: 'Seamless Collaboration',
          description: 'A unified platform for schools, students and companies to collaborate throughout the internship.'
        },
        {
          icon: '⏱️',
          title: 'Automated Workflows',
          description: 'Smart automation that saves time on administration so you can focus on what matters.'
        }
      ];

  return (
    <section 
      id="features"
      className={`relative py-24 overflow-hidden ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      {/* Background glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-32 -left-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-900' : 'bg-indigo-200'
        }`}></div>
        <div className={`absolute -bottom-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-900' : 'bg-indigo-200'
        }`}></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section header */}
        <motion.div 
          variants={titleVariants}
          className="text-center mb-20"
        >
          <motion.span 
            variants={titleVariants}
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              darkMode ? 'bg-indigo-900/30 text-indigo-300' : 'bg-indigo-100 text-indigo-700'
            }`}
          >
            <Sparkles color={darkMode ? "#a78bfa" : "#6366f1"} width="16px" height="16px" className="inline mr-2" />
            {language === 'sv' ? 'KRAFTFULLA FUNKTIONER' : 'POWERFUL FEATURES'}
          </motion.span>
          
          <motion.h2
            variants={titleVariants}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {language === 'sv' 
              ? 'Revolutionerande Verktyg för Praktikhantering' 
              : 'Revolutionary Internship Management Tools'}
          </motion.h2>
          
          <motion.div
            variants={titleVariants}
            className={`w-24 h-1 mx-auto rounded-full ${
              darkMode ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-indigo-400 to-purple-400'
            }`}
          ></motion.div>
          
          <motion.p
            variants={titleVariants}
            className={`mt-8 max-w-2xl mx-auto text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {language === 'sv' 
              ? 'Upptäck hur vår plattform omvandlar praktikprocessen med banbrytande teknik och innovativa lösningar.'
              : 'Discover how our platform transforms the internship process with groundbreaking technology and innovative solutions.'}
          </motion.p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              darkMode={darkMode}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;