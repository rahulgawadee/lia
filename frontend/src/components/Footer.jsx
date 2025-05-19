import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Moon, 
  Sun, 
  ChevronRight, 
  Globe, 
  Shield, 
  Building
} from 'lucide-react';

// Logo component - replace with your actual logo import
const Logo = ({ darkMode }) => (
  <div className="flex items-center">
    <img src={logo} alt="LIAHub Logo" className="w-32" />
  </div>
);

const Footer = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { darkMode, toggleTheme } = useTheme();

  const footerContent = {
    en: {
      description: "Your go-to platform for connecting education with the future of work.",
      compliance: "GDPR Compliant",
      navigation: ["Features", "Solutions", "About Us", "Contact"],
      contact: {
        demo: "Get a Demo",
        email: "info@liahub.com",
        phone: "+46 70 123 4567",
        linkedin: "LinkedIn"
      },
      preferences: {
        language: "Language",
        theme: "Toggle Theme"
      },
      legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
      copyright: "© 2025 LIAHub. All rights reserved."
    },
    sv: {
      description: "Din plattform för att koppla samman utbildning med framtidens arbetsliv.",
      compliance: "GDPR-kompatibel",
      navigation: ["Funktioner", "Lösningar", "Om oss", "Kontakt"],
      contact: {
        demo: "Få en demo",
        email: "info@liahub.com",
        phone: "+46 70 123 4567",
        linkedin: "LinkedIn"
      },
      preferences: {
        language: "Språk",
        theme: "Växla tema"
      },
      legal: ["Integritetspolicy", "Användarvillkor", "Cookiepolicy"],
      copyright: "© 2025 LIAHub. Alla rättigheter reserverade."
    }
  };

  const content = footerContent[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer 
      className={`${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-black'} 
      transition-colors duration-300 font-serif`} // Times Roman font family applied here
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Logo darkMode={darkMode} />
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
              {content.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building size={18} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Org.nr: 123456-7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={18} className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{content.compliance}</span>
              </div>
            </div>
          </motion.div>

          {/* Navigation Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-500 pb-2 inline-block">
              {language === 'en' ? 'Navigation' : 'Navigering'}
            </h3>
            <ul className="space-y-4">
              {content.navigation.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="flex items-center"
                >
                  <ChevronRight size={16} className={`mr-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  <a 
                    href="#" 
                    className={`text-lg hover:underline ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-500 pb-2 inline-block">
              {language === 'en' ? 'Contact' : 'Kontakt'}
            </h3>
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white shadow-lg text-lg flex items-center justify-center gap-2`}
            >
              {content.contact.demo}
            </motion.button>
            
            <div className="space-y-4 mt-4">
              <motion.a 
                href={`mailto:${content.contact.email}`}
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <Mail size={18} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg group-hover:underline`}>
                  {content.contact.email}
                </span>
              </motion.a>
              
              <motion.a 
                href={`tel:${content.contact.phone}`}
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <Phone size={18} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg group-hover:underline`}>
                  {content.contact.phone}
                </span>
              </motion.a>
              
              <motion.a 
                href="#"
                className="flex items-center gap-3 group"
                whileHover={{ x: 3 }}
              >
                <Linkedin size={18} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg group-hover:underline`}>
                  {content.contact.linkedin}
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Preferences Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold mb-2 border-b border-gray-500 pb-2 inline-block">
              {language === 'en' ? 'Preferences' : 'Inställningar'}
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-lg">
                  <Globe size={18} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  {content.preferences.language}
                </label>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative"
                >
                  <select 
                    value={language}
                    onChange={toggleLanguage}
                    className={`w-full px-4 py-3 rounded-lg border text-lg appearance-none ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-gray-200 hover:border-gray-600' 
                        : 'bg-white border-gray-300 text-gray-800 hover:border-gray-400'
                    } shadow-sm`}
                  >
                    <option value="en">English</option>
                    <option value="sv">Svenska</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronRight size={18} className="transform rotate-90" />
                  </div>
                </motion.div>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-lg">
                  {darkMode ? 
                    <Moon size={18} className="text-indigo-400" /> : 
                    <Sun size={18} className="text-indigo-600" />
                  }
                  {content.preferences.theme}
                </label>
                <motion.button 
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-colors text-lg ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700' 
                      : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                  } shadow-sm`}
                >
                  {darkMode ? (
                    <>
                      <motion.div
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Moon size={20} />
                      </motion.div>
                      <span>{language === 'en' ? 'Dark Mode' : 'Mörkt läge'}</span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Sun size={20} />
                      </motion.div>
                      <span>{language === 'en' ? 'Light Mode' : 'Ljust läge'}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Legal Footer Section */}
      <div className={`${darkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-100 border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {content.legal.map((item, index) => (
                <motion.a 
                  key={index} 
                  href="#" 
                  whileHover={{ scale: 1.05 }}
                  className={`text-base ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} hover:underline transition-colors`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;