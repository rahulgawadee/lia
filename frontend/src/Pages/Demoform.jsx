import React, { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

// Move translations outside of component to avoid re-creation
const translations = {
  sv: {
    title: 'Begär en demo av LIA Hub',
    subtitle: 'Fyll i formuläret så återkommer vi med en tidsbokning för en demo.',
    name: 'Namn',
    email: 'E-post',
    phone: 'Telefon',
    organization: 'Organisation/Skola',
    role: 'Roll',
    message: 'Meddelande',
    interest: 'Jag är intresserad som',
    interestOptions: {
      student: 'Student',
      employer: 'Arbetsgivare',
      school: 'Skola/Utbildningsledare'
    },
    submit: 'Skicka förfrågan',
    required: 'Obligatoriskt fält',
    success: 'Tack för din förfrågan! Vi återkommer snart.',
    privacyPolicy: 'Jag godkänner att mina uppgifter behandlas enligt LIA Hubs integritetspolicy.',
    learnMore: 'Vill du veta mer om LIA Hub innan du begär en demo? Besök vår hemsida.'
  },
  en: {
    title: 'Request a LIA Hub Demo',
    subtitle: 'Fill out the form and we will get back to you with a demo booking.',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    organization: 'Organization/School',
    role: 'Role',
    message: 'Message',
    interest: 'I am interested as a',
    interestOptions: {
      student: 'Student',
      employer: 'Employer',
      school: 'School/Education Manager'
    },
    submit: 'Submit Request',
    required: 'Required field',
    success: 'Thank you for your request! We will get back to you soon.',
    privacyPolicy: 'I agree to my data being processed according to LIA Hub\'s privacy policy.',
    learnMore: 'Want to learn more about LIA Hub before requesting a demo? Visit our website.'
  }
};

const DemoForm = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    message: '',
    interest: 'student' // 'student', 'employer', 'school'
  });
  const [submitted, setSubmitted] = useState(false);

  const baseStyles = {
    container: `min-h-screen pt-24 font-['Helvetica_Neue'] ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100'
    }`,
    wrapper: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-["Helvetica_Neue"]',
    heading: `text-5xl font-bold bg-clip-text font-['Helvetica_Neue'] ${
      darkMode 
        ? 'text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300' 
        : 'text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600'
    }`
  };

  // Enhanced background animation
  const BackgroundElements = () => (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${
        darkMode ? "bg-purple-600/20" : "bg-purple-400/20"
      } blur-3xl animate-pulse transform-gpu transition-all duration-1000 hover:scale-110`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${
        darkMode ? "bg-indigo-500/20" : "bg-indigo-300/20"
      } blur-3xl animate-pulse transform-gpu transition-all duration-1000 hover:scale-110`} 
        style={{ animationDelay: "1s" }} />
      <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full ${
        darkMode ? "bg-pink-500/20" : "bg-pink-300/20"
      } blur-3xl animate-pulse transform-gpu transition-all duration-1000 hover:scale-110`} 
        style={{ animationDelay: "2s" }} />
    </div>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setSubmitted(true);
    // Reset after showing success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        role: '',
        message: '',
        interest: 'student'
      });
    }, 5000);
  };

  return (
    <div className={baseStyles.container}>
      <BackgroundElements />
      <div className={`${baseStyles.wrapper} animate-fadeIn`}>
        <div className="text-center mb-12 transform transition-all duration-700 hover:scale-105">
          <h1 className={`${baseStyles.heading} animate-gradient-x`}>
            {translations[language].title}
          </h1>
          <p className={`mt-6 text-lg ${
            darkMode ? 'text-indigo-200' : 'text-gray-700'
          } animate-fadeIn delay-300`}>
            {translations[language].subtitle}
          </p>
        </div>

        <div className={`rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 transform hover:scale-[1.01] ${
          darkMode 
            ? 'bg-white/10 border border-indigo-500/20 shadow-lg shadow-purple-500/20' 
            : 'bg-white/70 shadow-2xl'
        }`}>
          {/* Form header with enhanced gradient */}
          <div className={`px-8 py-6 ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-600/40 via-purple-600/30 to-pink-600/40' 
              : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
          } transition-all duration-300`}>
            <h3 className="text-xl font-semibold text-white transform transition-all duration-300 hover:scale-105">
              {language === 'sv' ? 'Dina uppgifter' : 'Your Details'}
            </h3>
          </div>

          {/* Form content with animations */}
          {submitted ? (
            <SuccessMessage darkMode={darkMode} language={language} />
          ) : (
            <DemoFormContent 
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              darkMode={darkMode}
              language={language}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const DemoFormContent = ({ formData, setFormData, handleChange, handleSubmit, darkMode, language }) => {
  const t = translations[language];
  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormInput
          label={t.name}
          name="name"
          required
          darkMode={darkMode}
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <FormInput
          label={t.email}
          name="email"
          type="email"
          required
          darkMode={darkMode}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <FormInput
          label={t.phone}
          name="phone"
          darkMode={darkMode}
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <FormInput
          label={t.organization}
          name="organization"
          required
          darkMode={darkMode}
          value={formData.organization}
          onChange={(e) => setFormData({...formData, organization: e.target.value})}
        />
        <FormInput
          label={t.role}
          name="role"
          darkMode={darkMode}
          value={formData.role}
          onChange={(e) => setFormData({...formData, role: e.target.value})}
        />
        <div className="relative">
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
            {t.interest} <span className="text-red-500">*</span>
          </label>
          {/* Use the passed handleChange here */}
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg appearance-none bg-no-repeat"
            style={{ 
              backgroundImage: "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\")",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1.5em 1.5em"
            }}
          >
            <option value="student">{t.interestOptions.student}</option>
            <option value="employer">{t.interestOptions.employer}</option>
            <option value="school">{t.interestOptions.school}</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg"
          placeholder={language === 'sv' ? 'Skriv ditt meddelande här...' : 'Write your message here...'}
        />
      </div>

      <div className="mt-8 flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-3 block text-sm text-gray-700">
          {t.privacyPolicy}
        </label>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white' 
              : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 text-white'
          }`}
        >
          {t.submit}
        </button>
      </div>
    </form>
  );
};

const FormInput = ({ label, name, type = "text", value, onChange, required, darkMode }) => (
  <div className="relative transform transition-all duration-300 hover:scale-[1.02] font-['Helvetica_Neue']">
    <label htmlFor={name} className={`block text-sm font-medium mb-1 transition-colors duration-200 ${
      darkMode ? 'text-gray-300' : 'text-gray-700'
    }`}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className={`mt-1 block w-full rounded-lg px-4 py-3 transition-all duration-200 ${
        darkMode 
          ? 'bg-gray-800/50 text-white border-gray-700 focus:border-purple-500 focus:ring-purple-500/50' 
          : 'bg-white/50 text-gray-900 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/50'
      } border shadow-sm focus:ring-4 outline-none`}
    />
  </div>
);

const SuccessMessage = ({ darkMode, language }) => (
  <div className="bg-green-50 border border-green-200 rounded-xl shadow-lg p-8 text-center animate-fadeIn mt-16 font-['Helvetica_Neue']">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h3 className="text-2xl font-bold text-green-800 mb-2">{translations[language].success}</h3>
    <p className="text-green-700">{language === 'sv' ? 'Vi kommer att kontakta dig inom kort.' : 'We will contact you shortly.'}</p>
  </div>
);

export default DemoForm;  