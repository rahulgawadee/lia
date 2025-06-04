import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  Languages, 
  Check, 
  ArrowRight,
  Briefcase,
  GraduationCap,
  User,
  Lightbulb,
  Network,
  Handshake,
  Rocket,
  Award,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LIAInternshipPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }

    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleLanguage = () => {
    const newLang = language === 'english' ? 'swedish' : 'english';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const content = {
    english: {
      title: "LIA Internship – Gain Practical Experience & Build Your Future Career",
      subtitle: "Bridging Education & Industry Through Work-Based Learning",
      intro: "Lärande i Arbete (LIA) is an essential part of Yrkeshögskolan (YH) education, providing students with real-world experience while giving employers access to skilled, motivated talent.",
      intro2: "Whether in technology, business, healthcare, engineering, finance, or any other field, LIA ensures that students graduate with practical skills and industry connections that prepare them for a successful career.",
      howItWorks: "How Does LIA Work?",
      steps: [
        {
          title: "Preparation",
          subtitle: "Getting Ready for the Workplace",
          description: "Students start preparing for their LIA early in their program through career development workshops.",
          points: [
            "Professional CV & cover letter writing",
            "Interview techniques and job search strategies",
            "Workplace expectations & professional conduct"
          ],
          icon: <GraduationCap className="w-6 h-6" />
        },
        {
          title: "Application",
          subtitle: "Finding the Right Internship",
          description: "Students take an active role in securing their LIA position.",
          points: [
            "Researching and applying for internships",
            "Networking with professionals",
            "Support from career advisors"
          ],
          icon: <Briefcase className="w-6 h-6" />
        },
        {
          title: "LIA Internship",
          subtitle: "Gaining Real-World Experience",
          description: "Students integrate into companies, working on real projects under supervision.",
          points: [
            "Apply classroom learning in practice",
            "Gain insights into workplace culture",
            "Remain enrolled with CSN funding"
          ],
          icon: <Lightbulb className="w-6 h-6" />
        },
        {
          title: "Follow-up",
          subtitle: "Continuous Learning & Improvement",
          description: "Regular communication ensures a smooth and beneficial experience.",
          points: [
            "Ongoing progress check-ins",
            "Final evaluation and feedback",
            "Potential job offers"
          ],
          icon: <Network className="w-6 h-6" />
        }
      ],
      benefits: {
        title: "Why LIA is a Game-Changer",
        forStudents: {
          title: "For Students",
          points: [
            "Enhances employability",
            "Industry networking opportunities",
            "Develop technical & soft skills",
            "Higher job placement rates"
          ]
        },
        forEmployers: {
          title: "For Employers",
          points: [
            "Access motivated talent",
            "Fresh perspectives & ideas",
            "Strengthen workforce",
            "Early recruitment pipeline"
          ]
        }
      },
      successStory: {
        quote: "The LIA experience was a game-changer for me! The combination of hands-on work and industry mentorship gave me the confidence and skills I needed.",
        author: "Former YH Student",
        position: "Now Employed in Their Field"
      },
      cta: {
        title: "Launch Your Career with LIA",
        subtitle: "Your bridge to professional success through hands-on experience",
        sections: [
          {
            title: "Students",
            text: "Gain hands-on experience and make industry connections."
          },
          {
            title: "Employers",
            text: "Discover top YH talent and shape future professionals."
          },
          {
            title: "YH Schools",
            text: "Strengthen industry partnerships and enhance outcomes."
          }
        ],
       
       
      }
    },
    swedish: {
      title: "LIA-praktik – Skaffa praktisk erfarenhet & bygg din framtida karriär",
      subtitle: "Bygga broar mellan utbildning och näringsliv genom arbetsplatsförlagt lärande",
      intro: "Lärande i Arbete (LIA) är en väsentlig del av yrkeshögskoleutbildningen, som ger studenter verklig erfarenhet samtidigt som arbetsgivare får tillgång till skicklig, motiverad talang.",
      intro2: "Oavsett om det gäller teknik, företagande, hälsovård, ingenjörsvetenskap, finans eller något annat område, säkerställer LIA att studenter examineras med praktiska färdigheter och branschkontakter.",
      howItWorks: "Hur fungerar LIA?",
      steps: [
        {
          title: "Förberedelse",
          subtitle: "Förberedelse för arbetslivet",
          description: "Studenterna börjar förbereda sig för sin LIA tidigt i programmet.",
          points: [
            "Professionellt CV och personligt brev",
            "Intervjutekniker och jobbsökstrategier",
            "Förväntningar på arbetsplatsen"
          ],
          icon: <GraduationCap className="w-6 h-6" />
        },
        {
          title: "Ansökan",
          subtitle: "Hitta rätt praktikplats",
          description: "Studenterna tar ett aktivt ansvar för att säkra sin LIA-plats.",
          points: [
            "Söka relevanta praktikplatser",
            "Nätverka med yrkesverksamma",
            "Stöd från karriärrådgivare"
          ],
          icon: <Briefcase className="w-6 h-6" />
        },
        {
          title: "LIA-praktik",
          subtitle: "Få verklig erfarenhet",
          description: "Studenter integreras i företag och arbetar med verkliga projekt.",
          points: [
            "Tillämpa lärande i praktiken",
            "Få insikter om arbetsplatskultur",
            "Fortsatt CSN-finansiering"
          ],
          icon: <Lightbulb className="w-6 h-6" />
        },
        {
          title: "Uppföljning",
          subtitle: "Kontinuerligt lärande",
          description: "Regelbunden kommunikation säkerställer en givande upplevelse.",
          points: [
            "Löpande uppföljningar",
            "Slututvärdering och feedback",
            "Möjliga jobberbjudanden"
          ],
          icon: <Network className="w-6 h-6" />
        }
      ],
      benefits: {
        title: "Varför LIA är en spelväxlare",
        forStudents: {
          title: "För studenter",
          points: [
            "Förbättrar anställningsbarheten",
            "Möjligheter till branschnätverkande",
            "Utveckla färdigheter",
            "Högre anställningsandel"
          ]
        },
        forEmployers: {
          title: "För arbetsgivare",
          points: [
            "Tillgång till motiverade talanger",
            "Nya perspektiv och idéer",
            "Förstärk personalstyrkan",
            "Tidig rekryteringskanal"
          ]
        }
      },
      successStory: {
        quote: "LIA-upplevelsen var en spelväxlare för mig! Kombinationen av praktiskt arbete och branschmentorskap gav mig det självförtroende och de färdigheter jag behövde.",
        author: "Tidigare YH-student",
        position: "Nu anställd inom sitt område"
      },
      cta: {
        title: "Starta din karriär med LIA",
        subtitle: "Din bro till professionell framgång genom praktisk erfarenhet",
        sections: [
          {
            title: "Studenter",
            text: "Skaffa praktisk erfarenhet och bygg branschkontakter."
          },
          {
            title: "Arbetsgivare",
            text: "Upptäck YH-talanger och forma framtida yrkesverksamma."
          },
          {
            title: "YH-skolor",
            text: "Förstärk branschpartnerskap och förbättra utfall."
          }
        ],
        finalCta: "Redo att börja din resa?",
        buttonText: "Kom igång idag"
      }
    }
  };

  return (
    <div className={`min-h-screen font-['Helvetica_Neue'] transition-colors duration-500 ${darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900'}`}>
      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px] opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-[120px] opacity-30 animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-emerald-500/10 blur-[150px] opacity-20 animate-float-fast"></div>
      </div>

    
      <main className="relative z-10 container mx-auto px-6 py-12 font-['Helvetica_Neue']">
        {/* Hero Section */}
        <section className="mb-24 text-center mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 dark:border-purple-500/20">
              <span className="text-sm font-medium text-blue-600 dark:text-purple-400">
                {language === 'english' ? 'Innovative Learning Platform' : 'Innovativ Lärplattform'}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
              {content[language].title}
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-8 text-gray-600 dark:text-gray-300">
              {content[language].subtitle}
            </p>
            
            <div className="max-w-3xl mx-auto text-lg mb-8 space-y-4">
              <p>{content[language].intro}</p>
              <p>{content[language].intro2}</p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
             
            </motion.div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="mb-28 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {content[language].howItWorks}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content[language].steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative group overflow-hidden rounded-2xl p-1 ${index % 4 === 0 ? 'bg-gradient-to-br from-blue-500/10 to-blue-600/20' : 
                             index % 4 === 1 ? 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/20' : 
                             index % 4 === 2 ? 'bg-gradient-to-br from-purple-500/10 to-purple-600/20' : 'bg-gradient-to-br from-amber-500/10 to-amber-600/20'}`}
                >
                  <div className="h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center mb-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${index % 4 === 0 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 
                                     index % 4 === 1 ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600' : 
                                     index % 4 === 2 ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600' : 'bg-amber-100 dark:bg-amber-900/50 text-amber-600'} mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="mb-4 text-gray-700 dark:text-gray-300">{step.description}</p>
                    
                    <ul className="space-y-3 mb-4">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${index % 4 === 0 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600' : 
                                         index % 4 === 1 ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600' : 
                                         index % 4 === 2 ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600' : 'bg-amber-100 dark:bg-amber-900/50 text-amber-600'} mr-3 mt-0.5 flex-shrink-0`}>
                            <Check className="w-3 h-3" />
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {content[language].benefits.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-blue-500/10 to-blue-600/20"
              >
                <div className="h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center mr-4">
                      <User className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {content[language].benefits.forStudents.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {content[language].benefits.forStudents.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-full mr-4 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-lg text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-blue-500/10 blur-[60px] group-hover:blur-[80px] transition-all duration-500"></div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group overflow-hidden rounded-2xl p-1 bg-gradient-to-br from-purple-500/10 to-purple-600/20"
              >
                <div className="h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 flex items-center justify-center mr-4">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {content[language].benefits.forEmployers.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {content[language].benefits.forEmployers.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-100 dark:bg-purple-900/50 text-purple-600 rounded-full mr-4 mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-lg text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-purple-500/10 blur-[60px] group-hover:blur-[80px] transition-all duration-500"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Success Story */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-1"
          >
            <div className="h-full bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <Award className="w-12 h-12 mx-auto mb-6 text-blue-600 dark:text-purple-400" />
                <blockquote className="text-2xl md:text-3xl font-medium italic mb-8 text-gray-800 dark:text-gray-200">
                  "{content[language].successStory.quote}"
                </blockquote>
                <div>
                  <p className="text-xl font-bold text-blue-600 dark:text-purple-400">{content[language].successStory.author}</p>
                  <p className="text-gray-600 dark:text-gray-400">{content[language].successStory.position}</p>
                </div>
              </div>
              
              <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px]"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px]"></div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 p-1 shadow-2xl"
          >
            <div className="h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{content[language].cta.title}</h2>
                <p className="text-xl mb-12 text-blue-100 dark:text-purple-100">{content[language].cta.subtitle}</p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {content[language].cta.sections.map((section, i) => (
                    <motion.div
                      whileHover={{ y: -5 }}
                      key={i}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                    >
                      <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>
                      <p className="text-blue-100 dark:text-purple-100">{section.text}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">{content[language].cta.finalCta}</h3>
                 
                </div>
              </div>
              
              <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-white/10 blur-[100px]"></div>
              <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-white/10 blur-[100px]"></div>
            </div>
          </motion.div>
        </section>

        {/* Add bottom CTA section */}
        <div className={`mt-20 text-center rounded-2xl overflow-hidden relative ${
          darkMode ? 'bg-gray-800/50' : 'bg-white/90'
        } backdrop-blur-xl p-12 border ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <motion.h2 
            className="text-3xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            {language === 'sv' ? 'Redo att börja?' : 'Ready to get started?'}
          </motion.h2>
          <Link to="/demo">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-lg font-medium ${
                darkMode 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500' 
                  : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400'
              } text-white shadow-lg`}
            >
              {language === 'sv' ? 'Boka en demo' : 'Book a Demo'}
            </motion.button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 dark:bg-gray-900 text-white py-12 font-['Helvetica_Neue']">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
                <Rocket className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">LIA Internship</h2>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} LIA Internship Program. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(2deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, 15px) rotate(-1deg); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, -10px) rotate(1deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 10s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LIAInternshipPage;