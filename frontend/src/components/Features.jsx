import React, { useContext, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useAnimation } from 'framer-motion';
import { Zap, Users, Clock, FileCheck, ArrowRight, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon, title, description, darkMode, index }) => {
  // Define dynamic icon colors for each card
  const iconColors = [
    darkMode ? 'text-indigo-300 group-hover:text-indigo-200' : 'text-indigo-600 group-hover:text-indigo-700',
    darkMode ? 'text-violet-300 group-hover:text-violet-200' : 'text-violet-600 group-hover:text-violet-700',
    darkMode ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-600 group-hover:text-blue-700',
    darkMode ? 'text-fuchsia-300 group-hover:text-fuchsia-200' : 'text-fuchsia-600 group-hover:text-fuchsia-700'
  ];
  
  // Dynamic icon components with color transitions
  const icons = {
    'match': <Zap className={`${iconColors[index % iconColors.length]} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`} size={36} />,
    'platform': <Users className={`${iconColors[index % iconColors.length]} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`} size={36} />,
    'automation': <Clock className={`${iconColors[index % iconColors.length]} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`} size={36} />,
    'quality': <FileCheck className={`${iconColors[index % iconColors.length]} transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`} size={36} />
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15
      }
    }
  };

  // Enhance gradient backgrounds with more vibrant colors and better transitions
  const gradients = [
    darkMode ? 'from-indigo-800/50 via-indigo-900/40 to-purple-800/50' : 'from-indigo-100 via-indigo-50 to-purple-100',
    darkMode ? 'from-violet-800/50 via-violet-900/40 to-indigo-800/50' : 'from-violet-100 via-violet-50 to-indigo-100',
    darkMode ? 'from-blue-800/50 via-blue-900/40 to-cyan-800/50' : 'from-blue-100 via-blue-50 to-cyan-100',
    darkMode ? 'from-purple-800/50 via-purple-900/40 to-fuchsia-800/50' : 'from-purple-100 via-purple-50 to-fuchsia-100'
  ];

  // Glow colors with increased intensity
  const glowColors = [
    darkMode ? 'shadow-indigo-500/40' : 'shadow-indigo-400/50',
    darkMode ? 'shadow-violet-500/40' : 'shadow-violet-400/50',
    darkMode ? 'shadow-blue-500/40' : 'shadow-blue-400/50',
    darkMode ? 'shadow-purple-500/40' : 'shadow-purple-400/50'
  ];

  const borderGlowColors = [
    darkMode ? 'group-hover:border-indigo-500' : 'group-hover:border-indigo-400',
    darkMode ? 'group-hover:border-violet-500' : 'group-hover:border-violet-400',
    darkMode ? 'group-hover:border-blue-500' : 'group-hover:border-blue-400',
    darkMode ? 'group-hover:border-purple-500' : 'group-hover:border-purple-400'
  ];

  // Icon background colors that match the card theme
  const iconBgColors = [
    darkMode ? 'bg-indigo-900/50 group-hover:bg-indigo-800/60' : 'bg-indigo-100 group-hover:bg-indigo-200',
    darkMode ? 'bg-violet-900/50 group-hover:bg-violet-800/60' : 'bg-violet-100 group-hover:bg-violet-200',
    darkMode ? 'bg-blue-900/50 group-hover:bg-blue-800/60' : 'bg-blue-100 group-hover:bg-blue-200',
    darkMode ? 'bg-purple-900/50 group-hover:bg-purple-800/60' : 'bg-purple-100 group-hover:bg-purple-200'
  ];

  // Ring colors that match the card theme
  const ringColors = [
    darkMode ? 'ring-indigo-700/60 group-hover:ring-indigo-500' : 'ring-indigo-200 group-hover:ring-indigo-400',
    darkMode ? 'ring-violet-700/60 group-hover:ring-violet-500' : 'ring-violet-200 group-hover:ring-violet-400',
    darkMode ? 'ring-blue-700/60 group-hover:ring-blue-500' : 'ring-blue-200 group-hover:ring-blue-400',
    darkMode ? 'ring-purple-700/60 group-hover:ring-purple-500' : 'ring-purple-200 group-hover:ring-purple-400'
  ];

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`font-['Helvetica_Neue'] h-full min-h-64 p-8 rounded-xl border-2 overflow-hidden relative group ${
        darkMode 
          ? 'bg-gray-800/60 border-gray-700 backdrop-blur-sm' 
          : 'bg-white border-gray-200'
      } shadow-md hover:shadow-2xl ${borderGlowColors[index % borderGlowColors.length]} ${
        glowColors[index % glowColors.length]
      } transition-all duration-700`}
    >
      {/* Color-shifting animated gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`}></div>
        <div className="absolute inset-0 bg-gradient-to-tl opacity-0 group-hover:opacity-60 transition-opacity duration-1000 delay-100"
          style={{
            backgroundImage: `radial-gradient(circle at ${index % 2 ? '70% 30%' : '30% 70%'}, 
            ${darkMode ? 'rgba(129, 140, 248, 0.3)' : 'rgba(165, 180, 252, 0.3)'} 0%, 
            transparent 70%)`
          }}
        ></div>
      </div>
      
      {/* Enhanced animated glow effect with pulse */}
      <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-br 
        ${gradients[index % gradients.length]} transition-all duration-700 -z-10 animate-pulse-slow`}
        style={{ animationDuration: `${5 + index}s` }}></div>

      {/* Subtle animated particle effects */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
        <div className="absolute w-full h-full">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full bg-white ${darkMode ? 'opacity-30' : 'opacity-50'} animate-float-slow`}
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 5 + 8}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Card content with Helvetica Neue */}
      <div className="h-full flex flex-col justify-center items-center text-center relative z-10 py-4 font-['Helvetica_Neue']">
        {/* Icon with enhanced glowing and pulsing effect */}
        <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8
          transform transition-all duration-500 group-hover:scale-105
          ${iconBgColors[index % iconBgColors.length]} 
          ring-2 ${ringColors[index % ringColors.length]}`}
        >
          {/* Animated background pulse for icon */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} 
            opacity-0 group-hover:opacity-60 group-hover:animate-pulse-slow transition-opacity duration-700`}
            style={{ animationDuration: `${3 + index}s` }}></div>
            
          {/* Icon */}
          {icons[icon] || icons['match']}
        </div>

        {/* Content with larger text and animations */}
        <motion.h3 
          className={`text-2xl font-bold mb-5 font-['Helvetica_Neue'] ${
            darkMode ? 'text-white' : 'text-gray-900'
          } transition-all duration-500 group-hover:translate-y-0`}
        >
          {title}
        </motion.h3>
        
        <p className={`text-base leading-relaxed max-w-xs font-['Helvetica_Neue'] ${
          darkMode ? 'text-gray-300 group-hover:text-gray-100' : 'text-gray-600 group-hover:text-gray-800'
        } transition-colors duration-500`}>
          {description}
        </p>
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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  const features = language === 'sv' 
    ? [
        {
          icon: 'match',
          title: 'Smart matchning',
          description: 'Automatiserade matchningar kopplar studenter till de mest relevanta praktikplatserna.'
        },
        {
          icon: 'platform',
          title: 'En gemensam plattform',
          description: 'Hantera ansökningar, följ upp framsteg och kommunicera enkelt.'
        },
        {
          icon: 'automation',
          title: 'Tidseffektiv automatisering',
          description: 'Smarta verktyg förenklar administrationen för skolor och arbetsgivare.'
        },
        {
          icon: 'quality',
          title: 'Kvalitetssäkring',
          description: 'Strukturerade rapporter och feedback säkerställer givande praktikperioder.'
        }
      ]
    : [
        {
          icon: 'match',
          title: 'Smart Matching',
          description: 'Automated matching connects students with the most relevant internship placements.'
        },
        {
          icon: 'platform',
          title: 'A Unified Platform',
          description: 'Manage applications, monitor progress, and communicate with ease.'
        },
        {
          icon: 'automation',
          title: 'Time-Efficient Automation',
          description: 'Intelligent tools simplify administration for both schools and employers.'
        },
        {
          icon: 'quality',
          title: 'Quality Assurance',
          description: 'Structured reports and feedback ensure meaningful internship experiences.'
        }
      ];

  return (
    <section
      className={`py-20 px-4 font-sans transition-colors duration-500 ${
        darkMode 
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" 
          : "bg-gradient-to-b from-blue-50 via-white to-blue-50"
      }`}
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 opacity-[4%] ${
          darkMode 
            ? 'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+")]' 
            : 'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+")]'
        }`}></div>
        
        {/* Animated glowing orb effects */}
        <motion.div 
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            transition: { duration: 8, repeat: Infinity, repeatType: "reverse" }
          }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-500/15 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.05, 1],
            transition: { duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }
          }}
          className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.07, 1],
            transition: { duration: 12, repeat: Infinity, repeatType: "reverse", delay: 2 }
          }}
          className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-blue-500/15 blur-3xl"
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative font-['Helvetica_Neue']"
      >
        {/* Section header with Helvetica Neue */}
        <div className="text-center mb-16">
          <motion.div 
            variants={headerVariants}
            className={`font-['Helvetica_Neue'] inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              darkMode 
                ? 'bg-indigo-900/40 text-indigo-200 border border-indigo-700/60' 
                : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            } shadow-sm`}
          >
            <Sparkles size={14} className="mr-2 animate-pulse-slow" style={{ animationDuration: '3s' }} />
            {language === 'sv' ? 'VARFÖR VÄLJA OSS' : 'WHY CHOOSE US'}
          </motion.div>
          
          <motion.h2
            variants={headerVariants}
            className={`font-['Helvetica_Neue'] text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {language === 'sv' 
              ? 'Varför välja LIA HUB?' 
              : 'Why Choose LIA HUB?'}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`w-24 h-1.5 mx-auto rounded-full ${
              darkMode 
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500' 
                : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500'
            } mb-6 shadow-sm ${darkMode ? 'shadow-indigo-500/20' : 'shadow-indigo-500/10'}`}
          ></motion.div>
          
          <motion.p
            variants={headerVariants}
            className={`font-['Helvetica_Neue'] mt-3 max-w-2xl mx-auto text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {language === 'sv' 
              ? 'Vår LIA-plattform erbjuder innovativa lösningar för att förbättra praktikupplevelsen för alla parter.'
              : 'Our LIA platform offers innovative solutions to enhance the internship experience for all parties.'}
          </motion.p>
        </div>

        {/* Feature cards in a grid layout with enhanced animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
      
      {/* Enhanced animation styles */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        
        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-10px) translateX(10px); opacity: 0.6; }
          50% { transform: translateY(-15px) translateX(15px); opacity: 0.8; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
        }
        
        .animate-float-slow {
          animation: float-particle linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow ease-in-out infinite;
        }
        
        .animate-pulse-icon {
          animation: pulse-icon ease-in-out infinite;
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;