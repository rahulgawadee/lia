import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { motion } from 'framer-motion';

const Footer = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { darkMode, toggleTheme } = useTheme();

  const footerContent = {
    en: {
      company: {
        name: "LIAHub",
        description: "Your go-to platform for connecting education with the future of work.",
        compliance: "GDPR Compliant"
      },
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
      company: {
        name: "LIAHub",
        description: "Din plattform för att koppla samman utbildning med framtidens arbetsliv.",
        compliance: "GDPR-kompatibel"
      },
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
          <h3 className="text-xl font-bold">{content.company.name}</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {content.company.description}
          </p>
          <div className={`space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>Org.nr: 123456-7890</p>
            <p className="flex items-center gap-2">
              <span className={`${darkMode ? 'text-green-400' : 'text-green-600'}`}>✓</span>
              <span>{content.company.compliance}</span>
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
              <li key={index}>
                <a 
                  href="#" 
                  className={`block py-1.5 ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} transition-colors`}
                >
                  {item}
                </a>
              </li>
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
          <button 
            className={`w-full md:w-auto px-6 py-2.5 rounded-md font-medium transition-colors ${
              darkMode ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white`}
          >
            {content.contact.demo}
          </button>
          <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <p className="flex items-center gap-3">
              <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>📧</span>
              {content.contact.email}
            </p>
            <p className="flex items-center gap-3">
              <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>📞</span>
              {content.contact.phone}
            </p>
            <p className="flex items-center gap-3">
              <span className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>🔗</span>
              {content.contact.linkedin}
            </p>
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
          <select 
            value={language}
            onChange={toggleLanguage}
            className={`w-full px-4 py-2.5 rounded-md border transition-colors ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-gray-200 hover:border-gray-600' 
                : 'bg-white border-gray-300 text-gray-800 hover:border-gray-400'
            }`}
          >
            <option value="en">English</option>
            <option value="sv">Svenska</option>
          </select>
          
          <button 
            onClick={toggleTheme}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md transition-colors ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {darkMode ? (
              <>
                <span>🌙</span>
                <span>{content.preferences.theme}</span>
              </>
            ) : (
              <>
                <span>🌞</span>
                <span>{content.preferences.theme}</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Legal Footer */}
      <div className={`${darkMode ? 'border-gray-800' : 'border-gray-200'} border-t py-6`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {content.legal.map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className={`text-xs ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'} hover:underline transition-colors`}
                >
                  {item}
                </a>
              ))}
            </div>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {content.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;