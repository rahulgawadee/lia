import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion } from 'framer-motion';
import { Zap, Users, Clock, FileCheck, Sparkles } from 'lucide-react';

// Compact and colorful feature card component
const FeatureCard = ({ icon, title, description, darkMode, index }) => {
  // Define vibrant color schemes for each card
  const colorSchemes = [
    {
      iconColor: darkMode ? 'text-indigo-300' : 'text-indigo-600',
      bgGradient: darkMode ? 'from-indigo-900/40 via-indigo-800/30 to-violet-900/40' : 'from-indigo-100 via-indigo-50 to-violet-100',
      borderColor: darkMode ? 'border-indigo-700' : 'border-indigo-300',
      hoverBorderColor: darkMode ? 'group-hover:border-indigo-500' : 'group-hover:border-indigo-400',
      iconBg: darkMode ? 'bg-indigo-900/60' : 'bg-indigo-100',
      hoverGlow: darkMode ? 'group-hover:shadow-indigo-500/30' : 'group-hover:shadow-indigo-400/30'
    },
    {
      iconColor: darkMode ? 'text-fuchsia-300' : 'text-fuchsia-600',
      bgGradient: darkMode ? 'from-fuchsia-900/40 via-fuchsia-800/30 to-pink-900/40' : 'from-fuchsia-100 via-fuchsia-50 to-pink-100',
      borderColor: darkMode ? 'border-fuchsia-700' : 'border-fuchsia-300',
      hoverBorderColor: darkMode ? 'group-hover:border-fuchsia-500' : 'group-hover:border-fuchsia-400',
      iconBg: darkMode ? 'bg-fuchsia-900/60' : 'bg-fuchsia-100',
      hoverGlow: darkMode ? 'group-hover:shadow-fuchsia-500/30' : 'group-hover:shadow-fuchsia-400/30'
    },
    {
      iconColor: darkMode ? 'text-cyan-300' : 'text-cyan-600',
      bgGradient: darkMode ? 'from-cyan-900/40 via-cyan-800/30 to-blue-900/40' : 'from-cyan-100 via-cyan-50 to-blue-100',
      borderColor: darkMode ? 'border-cyan-700' : 'border-cyan-300',
      hoverBorderColor: darkMode ? 'group-hover:border-cyan-500' : 'group-hover:border-cyan-400',
      iconBg: darkMode ? 'bg-cyan-900/60' : 'bg-cyan-100',
      hoverGlow: darkMode ? 'group-hover:shadow-cyan-500/30' : 'group-hover:shadow-cyan-400/30'
    },
    {
      iconColor: darkMode ? 'text-amber-300' : 'text-amber-600',
      bgGradient: darkMode ? 'from-amber-900/40 via-amber-800/30 to-orange-900/40' : 'from-amber-100 via-amber-50 to-orange-100',
      borderColor: darkMode ? 'border-amber-700' : 'border-amber-300',
      hoverBorderColor: darkMode ? 'group-hover:border-amber-500' : 'group-hover:border-amber-400',
      iconBg: darkMode ? 'bg-amber-900/60' : 'bg-amber-100',
      hoverGlow: darkMode ? 'group-hover:shadow-amber-500/30' : 'group-hover:shadow-amber-400/30'
    }
  ];

  const scheme = colorSchemes[index % colorSchemes.length];
  
  // Icon components
  const icons = {
    'match': <Zap className={`${scheme.iconColor} transition-all duration-300 group-hover:scale-110`} size={24} />,
    'platform': <Users className={`${scheme.iconColor} transition-all duration-300 group-hover:scale-110`} size={24} />,
    'automation': <Clock className={`${scheme.iconColor} transition-all duration-300 group-hover:scale-110`} size={24} />,
    'quality': <FileCheck className={`${scheme.iconColor} transition-all duration-300 group-hover:scale-110`} size={24} />
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`h-full min-h-48 p-5 rounded-lg border group relative ${
        darkMode 
          ? 'bg-gray-800/60 border-gray-700' 
          : 'bg-white border-gray-200'
      } ${scheme.borderColor} ${scheme.hoverBorderColor} shadow-sm hover:shadow-lg ${scheme.hoverGlow} transition-all duration-300`}
    >
      {/* Color gradient background that appears on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300">
        <div className={`absolute inset-0 bg-gradient-to-br ${scheme.bgGradient} rounded-lg`}></div>
      </div>
      
      {/* Card content */}
      <div className="flex flex-col space-y-4 relative z-10">
        {/* Icon with colorful background */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center
          transition-all duration-300 ${scheme.iconBg} group-hover:scale-105`}
        >
          {icons[icon] || icons['match']}
        </div>

        {/* Title and description */}
        <div className="space-y-2">
          <h3 className={`text-lg font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          } transition-all duration-300`}>
            {title}
          </h3>
          
          <p className={`text-sm leading-relaxed ${
            darkMode ? 'text-gray-300 group-hover:text-gray-100' : 'text-gray-600 group-hover:text-gray-800'
          } transition-colors duration-300`}>
            {description}
          </p>
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
      id="features"
      className={`relative py-20 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 opacity-[4%] ${
          darkMode 
            ? 'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+")]' 
            : 'bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjIwIiBjeT0iMjAiIHI9IjEiLz48L2c+PC9zdmc+")]'
        }`}></div>
        
        {/* Simplified colored background elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-64 h-64 rounded-full bg-purple-500/10 blur-2xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-2xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              darkMode 
                ? 'bg-indigo-900/40 text-indigo-200 border border-indigo-700/60' 
                : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
            }`}
          >
            <Sparkles size={14} className="mr-2" />
            {language === 'sv' ? 'VARFÖR VÄLJA OSS' : 'WHY CHOOSE US'}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {language === 'sv' 
              ? 'Varför välja LIA HUB?' 
              : 'Why Choose LIA HUB?'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-3 max-w-2xl mx-auto text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {language === 'sv' 
              ? 'Vår LIA-plattform erbjuder innovativa lösningar för att förbättra praktikupplevelsen för alla parter.'
              : 'Our LIA platform offers innovative solutions to enhance the internship experience for all parties.'}
          </motion.p>
        </div>

        {/* Feature cards in a grid layout */}
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
      
      {/* Simple animation styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Features;