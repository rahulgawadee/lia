import { useState, useEffect ,useContext} from "react";
import { Send, Phone, MapPin, Mail, CheckCircle, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "../context/Themecontect"; // Import the theme context
import { useLanguage } from "../context/LanguageContext"; // Import the language context for translations

export default function ContactPage() {
  const { darkMode } = useTheme(); // Access the theme context
  const { language } = useLanguage(); // Access the language context
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  // Translations
  const translations = {
    en: {
      getInTouch: "Get in Touch",
      subheading: "We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
      callUs: "Call Us",
      callDescription: "We're available Monday-Friday, 9am-5pm",
      emailUs: "Email Us",
      emailDescription: "We'll respond within 24 hours",
      visitUs: "Visit Us",
      visitDescription: "123 Business Avenue, Suite 100",
      connectWithUs: "Connect With Us",
      sendMessage: "Send a Message",
      yourName: "Your Name",
      emailAddress: "Email Address",
      subject: "Subject",
      message: "Message",
      messagePlaceholder: "How can we help you?",
      sendButton: "Send Message",
      thankYou: "Thank You!",
      successMessage: "Your message has been sent successfully.",
      successFollowUp: "We'll get back to you soon!"
    },
    sv: {
      getInTouch: "Kontakta oss",
      subheading: "Vi vill gärna höra från dig. Fyll i formuläret nedan så återkommer vi så snart som möjligt.",
      callUs: "Ring oss",
      callDescription: "Vi är tillgängliga måndag-fredag, 9.00-17.00",
      emailUs: "Maila oss",
      emailDescription: "Vi svarar inom 24 timmar",
      visitUs: "Besök oss",
      visitDescription: "123 Business Avenue, Suite 100",
      connectWithUs: "Följ oss",
      sendMessage: "Skicka ett meddelande",
      yourName: "Ditt namn",
      emailAddress: "E-postadress",
      subject: "Ämne",
      message: "Meddelande",
      messagePlaceholder: "Hur kan vi hjälpa dig?",
      sendButton: "Skicka meddelande",
      thankYou: "Tack!",
      successMessage: "Ditt meddelande har skickats.",
      successFollowUp: "Vi återkommer snart!"
    }
  };

  const t = translations[language];

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay to ensure navbar is fully loaded
    
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend here
    console.log("Form submitted:", formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  // Theme-based styling
  const containerStyles = darkMode 
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    : "bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100";

  const headingTextStyles = darkMode
    ? "text-white"
    : "text-gray-900";

  const headingAccentStyles = darkMode
    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300"
    : "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600";

  const subtitleStyles = darkMode
    ? "text-indigo-200"
    : "text-gray-700";

  const cardBgStyles = darkMode
    ? "bg-white/10 border-indigo-500/20 shadow-indigo-500/30"
    : "bg-white/70 border-indigo-200 shadow-indigo-200/30";

  const formBgStyles = darkMode
    ? "bg-white/10 shadow-[0_0_35px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)]"
    : "bg-white/80 shadow-lg hover:shadow-xl";

  const inputBgStyles = darkMode
    ? "bg-white/10 border-indigo-300/30 text-white placeholder-indigo-300/70"
    : "bg-white/50 border-indigo-200 text-gray-800 placeholder-gray-500";

  const buttonStyles = darkMode
    ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-indigo-600/30 hover:shadow-indigo-600/50"
    : "bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white shadow-indigo-500/20 hover:shadow-indigo-500/40";

  return (
    <div className={`w-full ${containerStyles} px-4 sm:px-6 lg:px-8 py-16 min-h-screen`}>
      {/* Floating background elements - theme sensitive */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div 
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full ${
            darkMode ? "bg-purple-600/20" : "bg-purple-400/20"
          } blur-3xl animate-pulse`}
        ></div>
        <div 
          className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full ${
            darkMode ? "bg-indigo-500/20" : "bg-indigo-300/20"
          } blur-3xl animate-pulse`} 
          style={{ animationDelay: "1s" }}
        ></div>
        <div 
          className={`absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full ${
            darkMode ? "bg-pink-500/20" : "bg-pink-300/20"
          } blur-3xl animate-pulse`} 
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div 
        className={`max-w-6xl mx-auto relative z-10 transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16 animate-section mt-12" id="header">
          <h1 className={`text-5xl font-extrabold ${headingTextStyles} sm:text-6xl lg:text-7xl tracking-tight`}>
            {t.getInTouch.split(" ")[0]} <span className={headingAccentStyles}>{t.getInTouch.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className={`mt-6 text-xl ${subtitleStyles} max-w-3xl mx-auto`}>
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Info Cards */}
          <div className="md:col-span-5 space-y-8 animate-section" id="info-cards">
            <div className="relative overflow-hidden">
              {/* Info Cards */}
              <div className="space-y-6">
                <InfoCard 
                  icon={<Phone className={darkMode ? "text-indigo-100" : "text-indigo-600"} size={24} />}
                  title={t.callUs}
                  description={t.callDescription}
                  contact="+1 (555) 123-4567"
                  delay="100"
                  darkMode={darkMode}
                  cardBgStyles={cardBgStyles}
                />
                
                <InfoCard 
                  icon={<Mail className={darkMode ? "text-indigo-100" : "text-indigo-600"} size={24} />}
                  title={t.emailUs}
                  description={t.emailDescription}
                  contact="contact@yourcompany.com"
                  delay="200"
                  darkMode={darkMode}
                  cardBgStyles={cardBgStyles}
                />
                
                <InfoCard 
                  icon={<MapPin className={darkMode ? "text-indigo-100" : "text-indigo-600"} size={24} />}
                  title={t.visitUs}
                  description={t.visitDescription}
                  contact="New York, NY 10001"
                  delay="300"
                  darkMode={darkMode}
                  cardBgStyles={cardBgStyles}
                />
              </div>
              
              {/* Social Media Links */}
              <div className="mt-12">
                <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"} mb-6`}>
                  {t.connectWithUs}
                </h3>
                <div className="flex space-x-6">
                  <SocialButton icon={<Twitter size={18} />} darkMode={darkMode} />
                  <SocialButton icon={<Facebook size={18} />} darkMode={darkMode} />
                  <SocialButton icon={<Instagram size={18} />} darkMode={darkMode} />  
                  <SocialButton icon={<Linkedin size={18} />} darkMode={darkMode} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 animate-section" id="contact-form">
            <div className={`${formBgStyles} backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-300`}>
              <div className="p-8 md:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                    <div className="mb-8 text-green-400 animate-bounce">
                      <CheckCircle size={80} />
                    </div>
                    <h3 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"} mb-4`}>
                      {t.thankYou}
                    </h3>
                    <p className={darkMode ? "text-indigo-200" : "text-gray-600"}>
                      {t.successMessage}
                    </p>
                    <p className={darkMode ? "text-indigo-200" : "text-gray-600"}>
                      {t.successFollowUp}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <h2 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"} mb-8`}>
                      {t.sendMessage}
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <InputField
                        label={t.yourName}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        darkMode={darkMode}
                        inputBgStyles={inputBgStyles}
                      />
                      
                      <InputField
                        label={t.emailAddress}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        darkMode={darkMode}
                        inputBgStyles={inputBgStyles}
                      />
                      
                      <InputField
                        label={t.subject}
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        darkMode={darkMode}
                        inputBgStyles={inputBgStyles}
                      />
                      
                      <div>
                        <label className={`block text-sm font-medium ${darkMode ? "text-indigo-100" : "text-gray-700"} mb-2`}>
                          {t.message}
                        </label>
                        <textarea
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl ${inputBgStyles} backdrop-blur-sm border focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300 resize-none`}
                          placeholder={t.messagePlaceholder}
                        ></textarea>
                      </div>
                      
                      <div className="mt-4">
                        <button
                          onClick={handleSubmit}
                          className={`w-full ${buttonStyles} font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg`}
                        >
                          {t.sendButton}
                          <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for input fields
function InputField({ label, name, type = "text", value, onChange, required = false, darkMode, inputBgStyles }) {
  return (
    <div>
      <label className={`block text-sm font-medium ${darkMode ? "text-indigo-100" : "text-gray-700"} mb-2`}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-5 py-4 rounded-xl ${inputBgStyles} backdrop-blur-sm border focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-300`}
      />
    </div>
  );
}

// Info card component
function InfoCard({ icon, title, description, contact, delay, darkMode, cardBgStyles }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, parseInt(delay));
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div 
      className={`${cardBgStyles} backdrop-blur-lg p-6 rounded-2xl transition-all duration-500 transform border hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 p-4 ${
          darkMode 
            ? "bg-gradient-to-br from-indigo-600 to-purple-700 shadow-indigo-600/30" 
            : "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-indigo-500/20"
        } rounded-xl shadow-lg`}>
          {icon}
        </div>
        <div className="ml-5">
          <h3 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
            {title}
          </h3>
          <p className={darkMode ? "text-indigo-200" : "text-gray-600"}>
            {description}
          </p>
          <p className={`font-medium mt-1 ${darkMode ? "text-indigo-100" : "text-indigo-700"}`}>
            {contact}
          </p>
        </div>
      </div>
    </div>
  );
}

// Social button component
function SocialButton({ icon, darkMode }) {
  return (
    <a 
      href="#" 
      className={`w-12 h-12 rounded-full ${
        darkMode 
          ? "bg-white/10 text-indigo-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 border-indigo-500/30" 
          : "bg-white/70 text-indigo-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 border-indigo-300"
      } flex items-center justify-center hover:text-white transition-all duration-300 transform hover:scale-110 border backdrop-blur-sm shadow-lg`}
    >
      {icon}
    </a>
  );
}