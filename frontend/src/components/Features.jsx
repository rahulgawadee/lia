import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion } from 'framer-motion';
import { Zap, Users, Clock, ArrowRight, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon, title, description, darkMode, index }) => {
  const icons = {
    '🔍': <Zap className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={24} />,
    '🔄': <Users className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={24} />,
    '⏱️': <Clock className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} size={24} />
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      className={`h-full p-6 rounded-xl border ${
        darkMode 
          ? 'bg-gray-800/50 border-gray-700 backdrop-blur-sm' 
          : 'bg-white border-gray-200'
      } transition-all duration-300 shadow-sm hover:shadow-md ${
        darkMode ? 'hover:border-indigo-500/30' : 'hover:border-indigo-200'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Icon with subtle background */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
          darkMode 
            ? 'bg-indigo-900/20 ring-1 ring-indigo-800/50' 
            : 'bg-indigo-50 ring-1 ring-indigo-100'
        }`}>
          {icons[icon] || icons['🔍']}
        </div>

        {/* Content */}
        <h3 className={`text-xl font-semibold mb-3 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h3>
        
        <p className={`mb-5 text-sm leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>
        
        {/* Learn more link with subtle animation */}
        <div className="mt-auto">
          <motion.div 
            whileHover={{ x: 3 }}
            className={`inline-flex items-center text-sm font-medium ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}
          >
            {useContext(LanguageContext).language === 'sv' ? 'Läs mer' : 'Learn more'}
            <ArrowRight 
              className={`ml-1 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}
              size={16}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      className={`relative py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[3%] overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 ${
          darkMode 
            ? 'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+")]' 
            : 'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+")]'
        }`}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative"
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mb-5 ${
              darkMode 
                ? 'bg-indigo-900/30 text-indigo-300 border border-indigo-800/50' 
                : 'bg-indigo-100 text-indigo-700 border border-indigo-100'
            }`}
          >
            <Sparkles size={14} className="mr-1.5" />
            {language === 'sv' ? 'KRAFTFULLA FUNKTIONER' : 'POWERFUL FEATURES'}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl font-bold mb-5 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {language === 'sv' 
              ? 'Avancerad Praktikhantering' 
              : 'Advanced Internship Management'}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`w-20 h-1 mx-auto rounded-full ${
              darkMode 
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                : 'bg-gradient-to-r from-indigo-400 to-purple-400'
            } mb-6`}
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`mt-5 max-w-2xl mx-auto text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {language === 'sv' 
              ? 'Effektivisera praktikprocessen med våra innovativa verktyg och intelligenta lösningar.'
              : 'Streamline the internship process with our innovative tools and intelligent solutions.'}
          </motion.p>
        </div>

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