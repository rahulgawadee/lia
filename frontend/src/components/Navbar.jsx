import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import {
  SunIcon,
  MoonIcon,
  GlobeAltIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body overflow when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  // Navigation links array for easier management
  const navLinks = [
    { name: language === 'sv' ? 'Produkter' : 'Products', hasDropdown: true },
    { name: language === 'sv' ? 'Om oss' : 'About Us', href: '#about' },
    { name: language === 'sv' ? 'Kontakt' : 'Contact', href: '#contact' },
    { name: language === 'sv' ? 'Få en demo' : 'Get a Demo', href: '#demo' },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl z-50 font-sans transition-all duration-300 rounded-full ${
          scrolled ? 'shadow-lg' : ''
        } ${
          darkMode 
            ? 'bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        } border`}
      >
        <div className="px-4 sm:px-6 flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Company Logo"
              className={`h-9 w-auto transition-all duration-300 hover:scale-105 ${
                darkMode ? 'filter brightness-0 invert' : ''
              }`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link, index) => (
              link.hasDropdown ? (
                <div 
                  key={index}
                  className={`group flex items-center space-x-1 cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'text-gray-100 hover:text-indigo-300' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </div>
              ) : (
                <a 
                  key={index}
                  href={link.href} 
                  className={`transition-all duration-300 relative overflow-hidden group hover:scale-105 ${
                    darkMode ? 'text-gray-100 hover:text-indigo-300' : 'text-gray-700 hover:text-indigo-600'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`absolute left-0 bottom-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                    darkMode ? 'bg-indigo-400' : 'bg-indigo-600'
                  }`}></span>
                </a>
              )
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-amber-300 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`hidden sm:flex items-center text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <GlobeAltIcon className="w-4 h-4 mr-1.5" />
              {language === 'sv' ? 'English' : 'Svenska'}
            </button>

            {/* Login Button */}
            <button className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white' 
                : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white'
            }`}>
              {language === 'sv' ? 'Logga in' : 'Log in'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className={`md:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'bg-gray-800 text-gray-100 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Open menu"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Drawer Navigation for Mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-64 md:w-80 max-w-full z-50 transition-all duration-500 transform ${
          sidebarOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
        } ${
          darkMode 
            ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100' 
            : 'bg-white text-gray-800'
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-opacity-20 border-gray-300">
          <img
            src={logo}
            alt="Company Logo"
            className={`h-8 w-auto ${darkMode ? '' : ''}`}
          />
          <button
            onClick={() => setSidebarOpen(false)}
            className={`p-2 rounded-full transition-colors ${
              darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-600'
            }`}
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5 space-y-5">
          {navLinks.map((link, index) => (
            link.hasDropdown ? (
              <div key={index} className="space-y-2">
                <div className={`flex items-center justify-between py-2 transition-colors ${
                  darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-600'
                }`}>
                  <span className="font-medium">{link.name}</span>
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
                <div className={`ml-4 pl-2 border-l-2 space-y-2 ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className={`transition-colors ${
                    darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-600'
                  }`}>Sub Item 1</div>
                  <div className={`transition-colors ${
                    darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-600'
                  }`}>Sub Item 2</div>
                  <div className={`transition-colors ${
                    darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-600'
                  }`}>Sub Item 3</div>
                </div>
              </div>
            ) : (
              <a 
                key={index}
                href={link.href} 
                className={`block py-2 transition-colors ${
                  darkMode ? 'hover:text-indigo-300' : 'hover:text-indigo-600'
                }`}
              >
                <span className="font-medium">{link.name}</span>
              </a>
            )
          ))}
          
          <hr className={`${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
          
          <button 
            onClick={toggleLanguage}
            className={`w-full flex items-center justify-center py-2 px-3 rounded-full transition-colors ${
              darkMode 
                ? 'bg-gray-800 hover:bg-gray-700' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <GlobeAltIcon className="w-4 h-4 mr-2" />
            {language === 'sv' ? 'Switch to English' : 'Byt till Svenska'}
          </button>
          
          <button className={`w-full py-2 px-4 rounded-full text-center transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white' 
              : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white'
          }`}>
            {language === 'sv' ? 'Logga in' : 'Log in'}
          </button>
        </div>
        
        {/* Glow effect at the bottom */}
        <div className={`absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t ${
          darkMode 
            ? 'from-indigo-900/20 to-transparent' 
            : 'from-indigo-500/10 to-transparent'
        }`} />
      </div>
    </>
  );
};

export default Navbar;