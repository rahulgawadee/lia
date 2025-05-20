import React, { useState } from 'react';

const DemoForm = () => {
  const [language, setLanguage] = useState('sv'); // 'sv' or 'en'
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

  // Translations
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

  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-xl shadow-lg p-8 text-center animate-fadeIn mt-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">{t.success}</h3>
            <p className="text-green-700">{language === 'sv' ? 'Vi kommer att kontakta dig inom kort.' : 'We will contact you shortly.'}</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                {t.title}
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                {t.subtitle}
              </p>
              <div className="mt-8 inline-flex p-1 rounded-lg bg-gray-200">
                <button
                  onClick={() => setLanguage('sv')}
                  className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${language === 'sv' ? 'bg-white text-blue-700 shadow-md' : 'text-gray-700 hover:bg-gray-300'}`}
                >
                  Svenska
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-2.5 rounded-md font-medium transition-all duration-200 ${language === 'en' ? 'bg-white text-blue-700 shadow-md' : 'text-gray-700 hover:bg-gray-300'}`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
              <div className="bg-blue-600 px-8 py-5">
                <h3 className="text-xl font-semibold text-white">{language === 'sv' ? 'Dina uppgifter' : 'Your Details'}</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg"
                      placeholder={language === 'sv' ? 'Ange ditt namn' : 'Enter your name'}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg"
                      placeholder={language === 'sv' ? 'exempel@mail.com' : 'example@mail.com'}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg"
                      placeholder={language === 'sv' ? '+46 70 123 4567' : '+46 70 123 4567'}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.organization} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg"
                      placeholder={language === 'sv' ? 'Företag eller skola' : 'Company or school'}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.role}
                    </label>
                    <input
                      type="text"
                      name="role"
                      id="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-lg"
                      placeholder={language === 'sv' ? 'Din position' : 'Your position'}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.interest} <span className="text-red-500">*</span>
                    </label>
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
                    onChange={handleChange}
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
                    className="w-full flex justify-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    {t.submit}
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-xl">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-blue-800 font-medium">
                  {t.learnMore}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoForm;