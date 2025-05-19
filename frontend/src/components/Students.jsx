import React, { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { useTheme } from '../context/Themecontect';

const InteractiveLIAPlatform = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('applicants');
  const [expandedFeatures, setExpandedFeatures] = useState({});

  const toggleFeature = (tab, index) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [`${tab}-${index}`]: !prev[`${tab}-${index}`]
    }));
  };

  // Content configuration
  const content = {
    en: {
      applicants: {
        title: "For LIA Applicants and YH Students – Find Internships That Fit Your Future",
        features: [
          {
            title: "Explore Verified LIA Opportunities",
            description: "Search and apply for internships that align with your program and career goals."
          },
          {
            title: "Boost Your Employability",
            description: "Gain hands-on experience with leading companies that value YH students."
          },
          {
            title: "Connect with Attractive Employers",
            description: "Communicate directly with companies that understand LIA and want to invest in your skills."
          },
          {
            title: "Track Your Progress",
            description: "Stay on top of your applications, schedules, and feedback in real time."
          },
          {
            title: "Build a Sustainable Career Path",
            description: "From internships to post-LIA job matching, we're with you every step of the way."
          },
          {
            title: "Fast and Easy Application",
            description: "Create your profile once. Apply in seconds. Showcase your skills and let employers find you."
          }
        ]
      },
      schools: {
        title: "For YH Schools and Education Managers – A Smarter Way to Manage LIA",
        features: [
          {
            title: "Centralized Internship Coordination",
            description: "Gather all student placements, company contacts, and reports in one place."
          },
          {
            title: "Ensure High-Quality Internships",
            description: "Follow up on student experiences and employer feedback."
          },
          {
            title: "All-in-One Admin Tool",
            description: "Streamline contracts, communication, and reporting through automated workflows."
          },
          {
            title: "Strengthen Industry Partnerships",
            description: "Match students with relevant companies and build sustainable relationships."
          },
          {
            title: "Improve Student Outcomes",
            description: "Ensure internships create value for both students and employers."
          },
          {
            title: "Customizable to Your Needs",
            description: "The platform adapts to your school's programs, industry ties, and processes."
          }
        ]
      },
      employers: {
        title: "For Employers – Find the Right YH Talent and Streamline Your LIA Recruitment",
        features: [
          {
            title: "Find Future Employees",
            description: "Access motivated, well-prepared students ready to enter the workforce."
          },
          {
            title: "Efficient Internship Management",
            description: "Get a clear overview of applications, progress, and evaluations."
          },
          {
            title: "Faster Recruitment",
            description: "Post internships, set requirements, and get automatically matched with suitable candidates."
          },
          {
            title: "Save Time with Automation",
            description: "Manage the entire internship journey in one place – from selection to onboarding and feedback."
          },
          {
            title: "Strengthen Collaboration with Education",
            description: "Build long-term relationships with YH schools and contribute to skills development."
          },
          {
            title: "Enhance Your Employer Brand",
            description: "Position your company as an attractive internship destination for future professionals."
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
            description: "Sök och ansök till praktik som matchar ditt program och dina karriärmål."
          },
          {
            title: "Stärk din anställningsbarhet",
            description: "Få praktisk erfarenhet hos ledande företag som värdesätter YH-studenter."
          },
          {
            title: "Knyt kontakt med attraktiva arbetsgivare",
            description: "Kommunicera direkt med företag som förstår LIA och vill investera i din kompetens."
          },
          {
            title: "Följ dina framsteg",
            description: "Ha koll på dina ansökningar, scheman och återkoppling i realtid."
          },
          {
            title: "Bygg en hållbar karriärväg",
            description: "Från praktik till jobbmatchning efter LIA – vi finns med dig hela vägen."
          },
          {
            title: "Snabb och smidig ansökan",
            description: "Skapa din profil en gång. Ansök på några sekunder. Visa upp din kompetens och låt företag hitta dig."
          }
        ]
      },
      schools: {
        title: "För YH-skolor och utbildningsledare – Ett smartare sätt att hantera LIA",
        features: [
          {
            title: "Centraliserad praktikkoordinering",
            description: "Samla studentplaceringar, företagskontakter och uppföljningar på ett ställe."
          },
          {
            title: "Säkerställ kvalitativa praktikplatser",
            description: "Följ upp studenternas erfarenheter och arbetsgivarens feedback."
          },
          {
            title: "Allt-i-ett-verktyg för administration",
            description: "Effektivisera kontrakt, kommunikation och uppföljning med automatiserade flöden."
          },
          {
            title: "Stärk samarbetet med arbetslivet",
            description: "Matcha studenter med relevanta branschkontakter och skapa hållbara partnerskap."
          },
          {
            title: "Förbättra studenternas resultat",
            description: "Säkerställ att praktiken ger mervärde för både student och arbetsgivare."
          },
          {
            title: "Anpassningsbar efter behov",
            description: "Plattformen kan anpassas efter skolans program, branschkopplingar och processer."
          }
        ]
      },
      employers: {
        title: "För arbetsgivare – Hitta rätt YH-talanger och effektivisera er LIA-rekrytering",
        features: [
          {
            title: "Hitta framtida medarbetare",
            description: "Få tillgång till drivna och väl förberedda studenter redo för arbetslivet."
          },
          {
            title: "Effektiv praktikhantering",
            description: "En tydlig översikt över ansökningar, framsteg och utvärderingar."
          },
          {
            title: "Snabbare rekrytering",
            description: "Publicera praktikplatser, sätt upp krav och matchas automatiskt med rätt kandidater."
          },
          {
            title: "Spara tid genom automatisering",
            description: "Sköt hela praktikresan på ett ställe – urval, introduktion och feedback."
          },
          {
            title: "Stärk samarbetet med utbildningarna",
            description: "Bygg långsiktiga relationer med YH-skolor och bidra till kompetensförsörjningen."
          },
          {
            title: "Stärk ert arbetsgivarvarumärke",
            description: "Positionera er som en attraktiv praktikplats för framtida medarbetare."
          }
        ]
      }
    }
  };

  // Tab configuration
  const tabConfig = {
    en: {
      applicants: {
        icon: "👨‍🎓",
        label: "Applicants",
        color: "indigo"
      },
      schools: {
        icon: "🏫",
        label: "Schools",
        color: "emerald"
      },
      employers: {
        icon: "🏢",
        label: "Employers",
        color: "amber"
      }
    },
    sv: {
      applicants: {
        icon: "👨‍🎓",
        label: "LIA-sökande",
        color: "indigo"
      },
      schools: {
        icon: "🏫",
        label: "YH-skolor",
        color: "emerald"
      },
      employers: {
        icon: "🏢",
        label: "Arbetsgivare",
        color: "amber"
      }
    }
  };

  const getGradientClasses = (tab) => {
    switch (tab) {
      case 'applicants':
        return 'from-indigo-500 to-purple-600';
      case 'schools':
        return 'from-emerald-500 to-teal-600';
      case 'employers':
        return 'from-amber-500 to-orange-600';
      default:
        return 'from-indigo-500 to-purple-600';
    }
  };

  const getIconBackground = (tab) => {
    if (tab === activeTab) {
      switch (tab) {
        case 'applicants': return 'bg-indigo-100 text-indigo-700';
        case 'schools': return 'bg-emerald-100 text-emerald-700';
        case 'employers': return 'bg-amber-100 text-amber-700';
        default: return 'bg-gray-100 text-gray-700';
      }
    }
    return darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700';
  };

  const getTabBorderClass = (tab) => {
    if (tab === activeTab) {
      switch (tab) {
        case 'applicants': return 'border-indigo-500';
        case 'schools': return 'border-emerald-500';
        case 'employers': return 'border-amber-500';
        default: return 'border-transparent';
      }
    }
    return 'border-transparent';
  };

  const getBorderColor = () => {
    switch (activeTab) {
      case 'applicants': return 'border-indigo-500';
      case 'schools': return 'border-emerald-500';
      case 'employers': return 'border-amber-500';
      default: return 'border-gray-300';
    }
  };

  const renderFeatureCard = (feature, index, tab) => {
    const isExpanded = expandedFeatures[`${tab}-${index}`];
    const featureKey = `${tab}-${index}`;
    
    return (
      <div 
        key={featureKey}
        className={`transform transition-all duration-300 ${isExpanded ? 'scale-105 z-10' : 'scale-100'}`}
        style={{
          animationDelay: `${index * 50}ms`
        }}
      >
        <div 
          className={`p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 h-full
            ${isExpanded ? 'shadow-xl' : 'shadow-md hover:shadow-lg'} 
            ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'}`}
          onClick={() => toggleFeature(tab, index)}
        >
          <div className="flex items-start mb-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 ${
              tab === 'applicants' ? 'bg-indigo-100 text-indigo-600' :
              tab === 'schools' ? 'bg-emerald-100 text-emerald-600' :
              'bg-amber-100 text-amber-600'
            }`}>
              {index + 1}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">
                {feature.title}
              </h3>
            </div>
          </div>
          
          <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
            <p className="mt-2 text-sm pl-11">
              {feature.description}
            </p>
          </div>
          
          <div className="mt-3 flex justify-end">
            <span className={`text-xs ${
              tab === 'applicants' ? 'text-indigo-500' :
              tab === 'schools' ? 'text-emerald-500' :
              'text-amber-500'
            }`}>
              {isExpanded ? (language === 'sv' ? 'Visa mindre' : 'Show less') : (language === 'sv' ? 'Visa mer' : 'Show more')}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen pt-24 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {Object.keys(tabConfig[language]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-6 py-3 rounded-lg border-b-4 transition-all duration-300
                ${getTabBorderClass(tab)}
                ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}
                shadow-md hover:shadow-lg transform hover:-translate-y-1
              `}
            >
              <span className={`inline-flex items-center justify-center h-10 w-10 rounded-full mr-3 text-xl ${getIconBackground(tab)}`}>
                {tabConfig[language][tab].icon}
              </span>
              <span className="font-medium">{tabConfig[language][tab].label}</span>
            </button>
          ))}
        </div>

        {/* Content Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {content[language][activeTab].title}
          </h2>
          <div className={`h-1 w-32 mx-auto bg-gradient-to-r ${getGradientClasses(activeTab)}`}></div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[language][activeTab].features.map((feature, index) => (
            renderFeatureCard(feature, index, activeTab)
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveLIAPlatform;