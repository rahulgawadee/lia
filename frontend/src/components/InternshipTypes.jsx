import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Bookmark, Calendar, Users, Award, School } from 'lucide-react';

const InternshipTypes = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const title = language === 'sv' 
    ? 'Vi Stödjer Alla Typer av Praktik i Sverige' 
    : 'We Support All Types of Internships in Sweden';

  const description = language === 'sv'
    ? 'Även om vår plattform är särskilt utvecklad för LIA inom YH-utbildningar, stödjer vi även andra former av arbetsplatsförlagt lärande.'
    : 'While our platform is tailored for LIA internships in YH programs, we also support other types of workplace-based learning.';

  const data = language === 'sv'
    ? [
        { 
          level: 'Gymnasieskola (Yrkesprogram)', 
          term: 'APL (Arbetsplatsförlagt lärande)', 
          description: 'Praktisk yrkeserfarenhet som ger gymnasieelever möjlighet att utveckla färdigheter i en verklig arbetsmiljö under sin utbildning.',
          icon: <School className={`w-8 h-8 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />,
          color: 'from-blue-500 to-purple-500'
        },
        { 
          level: 'Anpassad gymnasieskola', 
          term: 'APL (anpassad gymnasieskola)', 
          description: 'Skräddarsydd arbetsplatslärande för elever med särskilda behov, fokuserad på individuell utveckling och tillgänglighet.',
          icon: <Users className={`w-8 h-8 ${darkMode ? 'text-green-300' : 'text-green-600'}`} />,
          color: 'from-green-500 to-teal-500'
        },
        { 
          level: 'Vuxenutbildning', 
          term: 'Praktik / Yrkespraktik', 
          description: 'Arbetsplatsbaserad träning för vuxenstuderande som möjliggör karriärbyte eller kompetensutveckling med praktisk erfarenhet.',
          icon: <Calendar className={`w-8 h-8 ${darkMode ? 'text-orange-300' : 'text-orange-600'}`} />,
          color: 'from-orange-500 to-red-500'
        },
        { 
          level: 'Universitet', 
          term: 'VFU / Praktik / Examensarbete', 
          description: 'Akademisk praktik som hjälper universitetsstudenter att tillämpa teoretisk kunskap i professionella miljöer innan examen.',
          icon: <Award className={`w-8 h-8 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} />,
          color: 'from-purple-500 to-indigo-500'
        },
        { 
          level: 'Informell utbildning / Sommarinitiativ', 
          term: 'Skuggning / Sommarjobb', 
          description: 'Kortsiktiga arbetslivserfarenheter som ger värdefull insikt och introduktion till branscher för nya talanger.',
          icon: <Bookmark className={`w-8 h-8 ${darkMode ? 'text-pink-300' : 'text-pink-600'}`} />,
          color: 'from-pink-500 to-rose-500'
        }
      ]
    : [
        { 
          level: 'Upper Secondary School (Vocational)', 
          term: 'Apprenticeship / Workplace Learning', 
          description: 'Practical vocational experience that gives high school students the opportunity to develop skills in a real work environment during their education.',
          icon: <School className={`w-8 h-8 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />,
          color: 'from-blue-500 to-purple-500'
        },
        { 
          level: 'Adapted Upper Secondary Programs', 
          term: 'Workplace Learning (Adapted)', 
          description: 'Tailored workplace learning for students with special needs, focused on individual development and accessibility.',
          icon: <Users className={`w-8 h-8 ${darkMode ? 'text-green-300' : 'text-green-600'}`} />,
          color: 'from-green-500 to-teal-500'
        },
        { 
          level: 'Adult Education', 
          term: 'Vocational Internship', 
          description: 'Workplace-based training for adult learners enabling career changes or skill development with practical experience.',
          icon: <Calendar className={`w-8 h-8 ${darkMode ? 'text-orange-300' : 'text-orange-600'}`} />,
          color: 'from-orange-500 to-red-500'
        },
        { 
          level: 'Universities', 
          term: 'Clinical / Academic Internships', 
          description: 'Academic practicums that help university students apply theoretical knowledge in professional settings before graduation.',
          icon: <Award className={`w-8 h-8 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`} />,
          color: 'from-purple-500 to-indigo-500'
        },
        { 
          level: 'Informal Education / Summer Initiatives', 
          term: 'Job Shadowing / Summer Jobs', 
          description: 'Short-term workplace experiences providing valuable insight and industry introduction for emerging talent.',
          icon: <Bookmark className={`w-8 h-8 ${darkMode ? 'text-pink-300' : 'text-pink-600'}`} />,
          color: 'from-pink-500 to-rose-500'
        }
      ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleCardClick = (index) => {
    setSelectedCard(selectedCard === index ? null : index);
  };

  return (
    <section 
      className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <motion.div 
              className={`px-6 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
              animate={{ 
                scale: isHovering ? [1, 1.05, 1] : 1,
              }}
              transition={{ duration: 1, repeat: isHovering ? Infinity : 0, repeatType: "reverse" }}
            >
              {language === 'sv' ? 'Flexibel Plattform' : 'Flexible Platform'}
            </motion.div>
          </div>
          
          <h2 className={`text-5xl font-bold mb-6 transition-colors ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            {title}
          </h2>
          <p className={`mt-6 text-xl max-w-3xl mx-auto transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        </motion.div>

        {/* Modern Card Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
              }`}
            >
              {/* Card Header with Gradient */}
              <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {item.icon}
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {item.level}
                  </h3>
                </div>
                
                <div className={`mb-4 text-sm font-medium ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  {item.term}
                </div>
                
                <AnimatePresence>
                  {selectedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`overflow-hidden text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      <p className="py-3">{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <button 
                  onClick={() => handleCardClick(index)}
                  className={`mt-3 flex items-center text-sm font-medium transition-colors ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {language === 'sv' ? 'Läs mer' : 'Read more'}
                  {selectedCard === index ? 
                    <ChevronUp className="ml-1 w-4 h-4" /> : 
                    <ChevronDown className="ml-1 w-4 h-4" />
                  }
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Footer Note with Visual Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className={`p-6 rounded-xl mx-auto max-w-3xl ${
            darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-blue-50 border border-blue-100'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <div className={`p-3 rounded-full ${
                darkMode ? 'bg-blue-900/30' : 'bg-blue-100'
              }`}>
                <Award className={`w-8 h-8 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
              </div>
              <p className={`text-sm md:text-base font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                {language === 'sv' 
                  ? 'Vår flexibla plattform säkerställer att skolor på alla nivåer kan hantera praktikperioder på ett strukturerat, GDPR-säkert och användarvänligt sätt.'
                  : 'Our flexible platform ensures that schools at all levels can manage internship periods in a structured, GDPR-compliant, and user-friendly way.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternshipTypes;