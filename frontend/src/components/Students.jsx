import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';
import { 
  Users, School, Building2, Award, Briefcase, 
  Send, Heart, Compass, Clock, BarChart2, 
  Laptop, Network, Handshake, Zap, 
  Target, Star, Search, Megaphone
} from 'lucide-react';

const InteractiveLIAPlatform = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('applicants');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Content configuration with Lucide icons
  const content = {
    en: {
      applicants: {
        title: "For LIA Applicants and YH Students – Find Internships That Fit Your Future",
        features: [
          {
            title: "Explore Verified LIA Opportunities",
            description: "Search and apply for internships that align with your program and career goals.",
            icon: <Search strokeWidth={2} />,
            color: "indigo"
          },
          {
            title: "Boost Your Employability",
            description: "Gain hands-on experience with leading companies that value YH students.",
            icon: <Award strokeWidth={2} />,
            color: "violet"
          },
          {
            title: "Connect with Attractive Employers",
            description: "Communicate directly with companies that understand LIA and want to invest in your skills.",
            icon: <Handshake strokeWidth={2} />,
            color: "fuchsia"
          },
          {
            title: "Track Your Progress",
            description: "Stay on top of your applications, schedules, and feedback in real time.",
            icon: <BarChart2 strokeWidth={2} />,
            color: "purple"
          },
          {
            title: "Build a Sustainable Career Path",
            description: "From internships to post-LIA job matching, we're with you every step of the way.",
            icon: <Compass strokeWidth={2} />,
            color: "indigo"
          },
          {
            title: "Fast and Easy Application",
            description: "Create your profile once. Apply in seconds. Showcase your skills and let employers find you.",
            icon: <Zap strokeWidth={2} />,
            color: "violet"
          }
        ]
      },
      schools: {
        title: "For YH Schools and Education Managers – A Smarter Way to Manage LIA",
        features: [
          {
            title: "Centralized Internship Coordination",
            description: "Gather all student placements, company contacts, and reports in one place.",
            icon: <Network strokeWidth={2} />,
            color: "emerald"
          },
          {
            title: "Ensure High-Quality Internships",
            description: "Follow up on student experiences and employer feedback.",
            icon: <Star strokeWidth={2} />,
            color: "teal"
          },
          {
            title: "All-in-One Admin Tool",
            description: "Streamline contracts, communication, and reporting through automated workflows.",
            icon: <Laptop strokeWidth={2} />,
            color: "green"
          },
          {
            title: "Strengthen Industry Partnerships",
            description: "Match students with relevant companies and build sustainable relationships.",
            icon: <Handshake strokeWidth={2} />,
            color: "emerald"
          },
          {
            title: "Improve Student Outcomes",
            description: "Ensure internships create value for both students and employers.",
            icon: <Target strokeWidth={2} />,
            color: "teal"
          },
          {
            title: "Customizable to Your Needs",
            description: "The platform adapts to your school's programs, industry ties, and processes.",
            icon: <Zap strokeWidth={2} />,
            color: "green"
          }
        ]
      },
      employers: {
        title: "For Employers – Find the Right YH Talent and Streamline Your LIA Recruitment",
        features: [
          {
            title: "Find Future Employees",
            description: "Access motivated, well-prepared students ready to enter the workforce.",
            icon: <Users strokeWidth={2} />,
            color: "amber"
          },
          {
            title: "Efficient Internship Management",
            description: "Get a clear overview of applications, progress, and evaluations.",
            icon: <BarChart2 strokeWidth={2} />,
            color: "orange"
          },
          {
            title: "Faster Recruitment",
            description: "Post internships, set requirements, and get automatically matched with suitable candidates.",
            icon: <Zap strokeWidth={2} />,
            color: "yellow"
          },
          {
            title: "Save Time with Automation",
            description: "Manage the entire internship journey in one place – from selection to onboarding and feedback.",
            icon: <Clock strokeWidth={2} />,
            color: "amber"
          },
          {
            title: "Strengthen Collaboration with Education",
            description: "Build long-term relationships with YH schools and contribute to skills development.",
            icon: <Handshake strokeWidth={2} />,
            color: "orange"
          },
          {
            title: "Enhance Your Employer Brand",
            description: "Position your company as an attractive internship destination for future professionals.",
            icon: <Megaphone strokeWidth={2} />,
            color: "yellow"
          }
        ]
      }
    },
    sv: {
      applicants: {
        title: "För LIA-sökande och YH-studenter – Hitta praktik som matchar din framtid",
        features: [
          {
            title: "Utforska verifierade LIA-platser",
            description: "Sök och ansök till praktik som matchar ditt program och dina karriärmål.",
            icon: <Search strokeWidth={2} />,
            color: "indigo"
          },
          {
            title: "Stärk din anställningsbarhet",
            description: "Få praktisk erfarenhet hos ledande företag som värdesätter YH-studenter.",
            icon: <Award strokeWidth={2} />,
            color: "violet"
          },
          {
            title: "Knyt kontakt med attraktiva arbetsgivare",
            description: "Kommunicera direkt med företag som förstår LIA och vill investera i din kompetens.",
            icon: <Handshake strokeWidth={2} />,
            color: "fuchsia"
          },
          {
            title: "Följ dina framsteg",
            description: "Ha koll på dina ansökningar, scheman och återkoppling i realtid.",
            icon: <BarChart2 strokeWidth={2} />,
            color: "purple"
          },
          {
            title: "Bygg en hållbar karriärväg",
            description: "Från praktik till jobbmatchning efter LIA – vi finns med dig hela vägen.",
            icon: <Compass strokeWidth={2} />,
            color: "indigo"
          },
          {
            title: "Snabb och smidig ansökan",
            description: "Skapa din profil en gång. Ansök på några sekunder. Visa upp din kompetens och låt företag hitta dig.",
            icon: <Zap strokeWidth={2} />,
            color: "violet"
          }
        ]
      },
      schools: {
        title: "För YH-skolor och utbildningsledare – Ett smartare sätt att hantera LIA",
        features: [
          {
            title: "Centraliserad praktikkoordinering",
            description: "Samla studentplaceringar, företagskontakter och uppföljningar på ett ställe.",
            icon: <Network strokeWidth={2} />,
            color: "emerald"
          },
          {
            title: "Säkerställ kvalitativa praktikplatser",
            description: "Följ upp studenternas erfarenheter och arbetsgivarens feedback.",
            icon: <Star strokeWidth={2} />,
            color: "teal"
          },
          {
            title: "Allt-i-ett-verktyg för administration",
            description: "Effektivisera kontrakt, kommunikation och uppföljning med automatiserade flöden.",
            icon: <Laptop strokeWidth={2} />,
            color: "green"
          },
          {
            title: "Stärk samarbetet med arbetslivet",
            description: "Matcha studenter med relevanta branschkontakter och skapa hållbara partnerskap.",
            icon: <Handshake strokeWidth={2} />,
            color: "emerald"
          },
          {
            title: "Förbättra studenternas resultat",
            description: "Säkerställ att praktiken ger mervärde för både student och arbetsgivare.",
            icon: <Target strokeWidth={2} />,
            color: "teal"
          },
          {
            title: "Anpassningsbar efter behov",
            description: "Plattformen kan anpassas efter skolans program, branschkopplingar och processer.",
            icon: <Zap strokeWidth={2} />,
            color: "green"
          }
        ]
      },
      employers: {
        title: "För arbetsgivare – Hitta rätt YH-talanger och effektivisera er LIA-rekrytering",
        features: [
          {
            title: "Hitta framtida medarbetare",
            description: "Få tillgång till drivna och väl förberedda studenter redo för arbetslivet.",
            icon: <Users strokeWidth={2} />,
            color: "amber"
          },
          {
            title: "Effektiv praktikhantering",
            description: "En tydlig översikt över ansökningar, framsteg och utvärderingar.",
            icon: <BarChart2 strokeWidth={2} />,
            color: "orange"
          },
          {
            title: "Snabbare rekrytering",
            description: "Publicera praktikplatser, sätt upp krav och matchas automatiskt med rätt kandidater.",
            icon: <Zap strokeWidth={2} />,
            color: "yellow"
          },
          {
            title: "Spara tid genom automatisering",
            description: "Sköt hela praktikresan på ett ställe – urval, introduktion och feedback.",
            icon: <Clock strokeWidth={2} />,
            color: "amber"
          },
          {
            title: "Stärk samarbetet med utbildningarna",
            description: "Bygg långsiktiga relationer med YH-skolor och bidra till kompetensförsörjningen.",
            icon: <Handshake strokeWidth={2} />,
            color: "orange"
          },
          {
            title: "Stärk ert arbetsgivarvarumärke",
            description: "Positionera er som en attraktiv praktikplats för framtida medarbetare.",
            icon: <Megaphone strokeWidth={2} />,
            color: "yellow"
          }
        ]
      }
    }
  };

  // Tab configuration with Lucide icons
  const tabConfig = {
    en: {
      applicants: {
        icon: <Users size={22} />,
        label: "Applicants",
        color: "indigo"
      },
      schools: {
        icon: <School size={22} />,
        label: "Schools",
        color: "emerald"
      },
      employers: {
        icon: <Building2 size={22} />,
        label: "Employers",
        color: "amber"
      }
    },
    sv: {
      applicants: {
        icon: <Users size={22} />,
        label: "LIA-sökande",
        color: "indigo"
      },
      schools: {
        icon: <School size={22} />,
        label: "YH-skolor",
        color: "emerald"
      },
      employers: {
        icon: <Building2 size={22} />,
        label: "Arbetsgivare",
        color: "amber"
      }
    }
  };

  const getTabStyle = (tab) => {
    const isActive = tab === activeTab;
    
    switch (tab) {
      case 'applicants':
        return {
          background: isActive 
            ? (darkMode ? 'linear-gradient(135deg, #4338ca22, #6d28d922)' : 'linear-gradient(135deg, #4338ca11, #6d28d911)')
            : 'transparent',
          borderColor: isActive ? '#4f46e5' : 'transparent',
          boxShadow: isActive ? (darkMode ? '0 0 15px rgba(79, 70, 229, 0.4)' : '0 0 20px rgba(79, 70, 229, 0.25)') : 'none'
        };
      case 'schools':
        return {
          background: isActive 
            ? (darkMode ? 'linear-gradient(135deg, #05966922, #0d948622)' : 'linear-gradient(135deg, #05966911, #0d948611)')
            : 'transparent',
          borderColor: isActive ? '#10b981' : 'transparent',
          boxShadow: isActive ? (darkMode ? '0 0 15px rgba(16, 185, 129, 0.4)' : '0 0 20px rgba(16, 185, 129, 0.25)') : 'none'
        };
      case 'employers':
        return {
          background: isActive 
            ? (darkMode ? 'linear-gradient(135deg, #d97706a2, #f59e0b22)' : 'linear-gradient(135deg, #d9770611, #f59e0b11)')
            : 'transparent',
          borderColor: isActive ? '#f59e0b' : 'transparent',
          boxShadow: isActive ? (darkMode ? '0 0 15px rgba(245, 158, 11, 0.4)' : '0 0 20px rgba(245, 158, 11, 0.25)') : 'none'
        };
      default:
        return {
          background: 'transparent',
          borderColor: 'transparent',
          boxShadow: 'none'
        };
    }
  };

  const getIconStyles = (tab, featureColor) => {
    // Color mappings for Tailwind classes
    const colorMap = {
      indigo: 'text-indigo-500',
      violet: 'text-violet-500',
      purple: 'text-purple-500',
      fuchsia: 'text-fuchsia-500',
      emerald: 'text-emerald-500',
      teal: 'text-teal-500',
      green: 'text-green-500',
      amber: 'text-amber-500',
      orange: 'text-orange-500',
      yellow: 'text-yellow-500'
    };

    const bgColorMap = {
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30',
      violet: 'bg-violet-100 dark:bg-violet-900/30',
      purple: 'bg-purple-100 dark:bg-purple-900/30',
      fuchsia: 'bg-fuchsia-100 dark:bg-fuchsia-900/30',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30',
      teal: 'bg-teal-100 dark:bg-teal-900/30',
      green: 'bg-green-100 dark:bg-green-900/30',
      amber: 'bg-amber-100 dark:bg-amber-900/30',
      orange: 'bg-orange-100 dark:bg-orange-900/30',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30'
    };

    return `${colorMap[featureColor]} ${bgColorMap[featureColor]}`;
  };

  const getGradientByTab = (tab) => {
    switch (tab) {
      case 'applicants':
        return 'from-indigo-600 via-purple-600 to-violet-600';
      case 'schools':
        return 'from-emerald-600 via-teal-600 to-green-600';
      case 'employers':
        return 'from-amber-500 via-orange-500 to-yellow-500';
      default:
        return 'from-indigo-600 via-purple-600 to-violet-600';
    }
  };

  const getFeatureCardStyle = (tab, feature) => {
    const baseStyle = darkMode 
      ? 'bg-gray-800/60 backdrop-blur-sm' 
      : 'bg-white backdrop-blur-sm';
      
    const colorMap = {
      indigo: {
        border: 'border-indigo-500/30',
        shadow: darkMode ? 'shadow-indigo-700/10' : 'shadow-indigo-200',
        hover: darkMode ? 'hover:shadow-indigo-700/20' : 'hover:shadow-indigo-300'
      },
      violet: {
        border: 'border-violet-500/30',
        shadow: darkMode ? 'shadow-violet-700/10' : 'shadow-violet-200',
        hover: darkMode ? 'hover:shadow-violet-700/20' : 'hover:shadow-violet-300'
      },
      purple: {
        border: 'border-purple-500/30',
        shadow: darkMode ? 'shadow-purple-700/10' : 'shadow-purple-200',
        hover: darkMode ? 'hover:shadow-purple-700/20' : 'hover:shadow-purple-300'
      },
      fuchsia: {
        border: 'border-fuchsia-500/30',
        shadow: darkMode ? 'shadow-fuchsia-700/10' : 'shadow-fuchsia-200',
        hover: darkMode ? 'hover:shadow-fuchsia-700/20' : 'hover:shadow-fuchsia-300'
      },
      emerald: {
        border: 'border-emerald-500/30',
        shadow: darkMode ? 'shadow-emerald-700/10' : 'shadow-emerald-200',
        hover: darkMode ? 'hover:shadow-emerald-700/20' : 'hover:shadow-emerald-300'
      },
      teal: {
        border: 'border-teal-500/30',
        shadow: darkMode ? 'shadow-teal-700/10' : 'shadow-teal-200',
        hover: darkMode ? 'hover:shadow-teal-700/20' : 'hover:shadow-teal-300'
      },
      green: {
        border: 'border-green-500/30',
        shadow: darkMode ? 'shadow-green-700/10' : 'shadow-green-200',
        hover: darkMode ? 'hover:shadow-green-700/20' : 'hover:shadow-green-300'
      },
      amber: {
        border: 'border-amber-500/30',
        shadow: darkMode ? 'shadow-amber-700/10' : 'shadow-amber-200',
        hover: darkMode ? 'hover:shadow-amber-700/20' : 'hover:shadow-amber-300'
      },
      orange: {
        border: 'border-orange-500/30',
        shadow: darkMode ? 'shadow-orange-700/10' : 'shadow-orange-200',
        hover: darkMode ? 'hover:shadow-orange-700/20' : 'hover:shadow-orange-300'
      },
      yellow: {
        border: 'border-yellow-500/30',
        shadow: darkMode ? 'shadow-yellow-700/10' : 'shadow-yellow-200',
        hover: darkMode ? 'hover:shadow-yellow-700/20' : 'hover:shadow-yellow-300'
      }
    };
    
    const colorStyle = colorMap[feature.color];
    
    return `${baseStyle} ${colorStyle.border} ${colorStyle.shadow} ${colorStyle.hover}`;
  };

  const renderFeatureCard = (feature, index, tab) => {
    const iconStyles = getIconStyles(tab, feature.color);
    const cardStyle = getFeatureCardStyle(tab, feature);
    
    return (
      <div 
        key={`${tab}-${index}`}
        className={`transition-all duration-500 ease-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ 
          transitionDelay: `${index * 100}ms`
        }}
      >
        <div 
          className={`rounded-xl overflow-hidden border p-6 transition-all duration-300
                     shadow-lg ${cardStyle} backdrop-blur-lg
                     hover:shadow-xl hover:-translate-y-1 h-60 flex flex-col`}
        >
          <div className="flex items-start mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${iconStyles}`}>
              {React.cloneElement(feature.icon, { size: 22 })}
            </div>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {feature.title}
            </h3>
          </div>
          
          <p className={`mt-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} pl-16 text-sm leading-relaxed overflow-y-auto`}>
            {feature.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen pt-20 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-br ${getGradientByTab(activeTab)}`}></div>
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10 blur-3xl bg-gradient-to-br ${getGradientByTab(activeTab)}`}></div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Tab Navigation */}
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center mb-16 gap-4">
          {Object.keys(tabConfig[language]).map((tab) => {
            const tabStyles = getTabStyle(tab);
            const isActive = tab === activeTab;
            
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center px-8 py-3 rounded-xl border-2 transition-all duration-300
                  ${isActive ? (darkMode ? 'text-white' : 'text-gray-800') : (darkMode ? 'text-gray-400' : 'text-gray-600')}
                  ${isActive ? 'scale-105' : 'hover:scale-105'}`}
                style={{
                  background: tabStyles.background,
                  borderColor: tabStyles.borderColor,
                  boxShadow: tabStyles.boxShadow
                }}
              >
                <span className={`inline-flex items-center justify-center h-10 w-10 rounded-full mr-3 
                  ${isActive 
                    ? (darkMode ? 'bg-gray-800/80' : 'bg-white') 
                    : (darkMode ? 'bg-gray-800/40' : 'bg-gray-100')}`}
                >
                  {tabConfig[language][tab].icon}
                </span>
                <span className="font-medium text-lg">
                  {tabConfig[language][tab].label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Header */}
        <div
          className={`text-center mb-16 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className={`inline-block rounded-lg px-8 py-4 bg-gradient-to-r ${getGradientByTab(activeTab)} text-white shadow-lg`}>
            <h2 className="text-3xl font-bold">
              {content[language][activeTab].title}
            </h2>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language][activeTab].features.map((feature, index) => (
            renderFeatureCard(feature, index, activeTab)
          ))}
        </div>
      </div>
    </div>
  );
};



export default InteractiveLIAPlatform;