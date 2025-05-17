import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

// Logo component - replace with your actual logo import
const Logo = ({ darkMode }) => (
  <div className="flex items-center">
    <img src={logo  } alt="" className='w-32' />

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

  return (
    <footer className={`${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Logo darkMode={darkMode} />
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {content.description}
          </p>
          <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>Org.nr: 123456-7890</p>
            <p className="flex items-center gap-2">
              <span className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>✓</span>
              <span>{content.compliance}</span>
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-4">{language === 'en' ? 'Navigation' : 'Navigering'}</h3>
          <ul className="space-y-3">
            {content.navigation.map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <a 
                  href="#" 
                  className={`block py-1.5 ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">{language === 'en' ? 'Contact' : 'Kontakt'}</h3>
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full md:w-auto px-6 py-3 rounded-lg font-medium transition-colors ${
              darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white shadow-lg`}
          >
            {content.contact.demo}
          </motion.button>
          <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <motion.p 
              className="flex items-center gap-3"
              whileHover={{ x: 3 }}
            >
              <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>📧</span>
              {content.contact.email}
            </motion.p>
            <motion.p 
              className="flex items-center gap-3"
              whileHover={{ x: 3 }}
            >
              <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>📞</span>
              {content.contact.phone}
            </motion.p>
            <motion.p 
              className="flex items-center gap-3"
              whileHover={{ x: 3 }}
            >
              <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>🔗</span>
              {content.contact.linkedin}
            </motion.p>
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold">{content.preferences.language}</h3>
          <motion.select 
            value={language}
            onChange={toggleLanguage}
            whileHover={{ scale: 1.02 }}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-gray-200 hover:border-gray-600' 
                : 'bg-white border-gray-300 text-gray-800 hover:border-gray-400'
            } shadow-sm`}
          >
            <option value="en">English</option>
            <option value="sv">Svenska</option>
          </motion.select>
          
          <motion.button 
            onClick={toggleTheme}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            } shadow-sm`}
          >
            {darkMode ? (
              <>
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🌙
                </motion.span>
                <span>{content.preferences.theme}</span>
              </>
            ) : (
              <>
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🌞
                </motion.span>
                <span>{content.preferences.theme}</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Legal Footer */}
      <div className={`${darkMode ? 'border-gray-800' : 'border-gray-200'} border-t py-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {content.legal.map((item, index) => (
                <motion.a 
                  key={index} 
                  href="#" 
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} hover:underline transition-colors`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;