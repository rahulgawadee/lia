"use client"

import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"
import { useTheme } from "../context/Themecontect"
import { motion } from "framer-motion"
import { GraduationCap, Briefcase, School, Users, SunIcon } from "lucide-react"

const InternshipTypes = () => {
  const { language } = useContext(LanguageContext)
  const { darkMode } = useTheme()

  const title =
    language === "sv" ? "Vi Stödjer Alla Typer av Praktik i Sverige" : "We Support All Types of Internships in Sweden"

  const description =
    language === "sv"
      ? "Även om vår plattform är särskilt utvecklad för LIA inom YH-utbildningar, stödjer vi även andra former av arbetsplatsförlagt lärande."
      : "While our platform is tailored for LIA internships in YH programs, we also support other types of workplace-based learning."

  const data =
    language === "sv"
      ? [
          {
            level: "Gymnasieskola (Yrkesprogram)",
            term: "APL (Arbetsplatsförlagt lärande)",
            icon: <School className="w-6 h-6" />,
            description: "Praktisk arbetslivserfarenhet för gymnasieelever inom yrkesprogram.",
          },
          {
            level: "Anpassad gymnasieskola",
            term: "APL (anpassad gymnasieskola)",
            icon: <Users className="w-6 h-6" />,
            description: "Specialanpassad arbetsplatsförlagt lärande för elever med särskilda behov.",
          },
          {
            level: "Vuxenutbildning",
            term: "Praktik / Yrkespraktik",
            icon: <Briefcase className="w-6 h-6" />,
            description: "Arbetslivserfarenhet för vuxenstuderande inom olika yrkesområden.",
          },
          {
            level: "Universitet",
            term: "VFU / Praktik / Examensarbete",
            icon: <GraduationCap className="w-6 h-6" />,
            description: "Verksamhetsförlagd utbildning och praktik för högskolestudenter.",
          },
          {
            level: "Informell utbildning / Sommarinitiativ",
            term: "Skuggning / Sommarjobb",
            icon: <SunIcon className="w-6 h-6" />,
            description: "Kortare praktiska erfarenheter och sommarjobb för ungdomar.",
          },
        ]
      : [
          {
            level: "Upper Secondary School (Vocational)",
            term: "Apprenticeship / Workplace Learning",
            icon: <School className="w-6 h-6" />,
            description: "Practical workplace experience for vocational high school students.",
          },
          {
            level: "Adapted Upper Secondary Programs",
            term: "Workplace Learning (Adapted)",
            icon: <Users className="w-6 h-6" />,
            description: "Specially adapted workplace learning for students with special needs.",
          },
          {
            level: "Adult Education",
            term: "Vocational Internship",
            icon: <Briefcase className="w-6 h-6" />,
            description: "Work experience for adult learners across various professional fields.",
          },
          {
            level: "Universities",
            term: "Clinical / Academic Internships",
            icon: <GraduationCap className="w-6 h-6" />,
            description: "Field placements and internships for higher education students.",
          },
          {
            level: "Informal Education / Summer Initiatives",
            term: "Job Shadowing / Summer Jobs",
            icon: <SunIcon className="w-6 h-6" />,
            description: "Short-term practical experiences and summer jobs for youth.",
          },
        ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        darkMode ? "bg-gradient-to-b from-gray-950 to-gray-900" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl font-bold mb-6 transition-colors ${darkMode ? "text-white" : "text-gray-900"}`}>
            {title}
          </h2>
          <p
            className={`mt-4 text-xl max-w-3xl mx-auto transition-colors ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </motion.div>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 md:transform md:-translate-x-1/2 ${
              darkMode ? "bg-gradient-to-b from-blue-600 to-indigo-800" : "bg-gradient-to-b from-blue-400 to-indigo-600"
            }`}
          ></div>

          <motion.div
            className="space-y-16 md:space-y-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {data.map((item, index) => (
              <motion.div key={index} className="relative" variants={itemVariants} transition={{ duration: 0.5 }}>
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10">
                    <motion.div
                      className={`w-10 h-10 rounded-full ${
                        darkMode ? "bg-blue-600" : "bg-blue-500"
                      } flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="text-white font-bold">{index + 1}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-16 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:pl-8" : "md:pl-16 md:pr-8"}`}
                  >
                    <motion.div
                      className={`p-6 rounded-xl transition-all duration-300 ${
                        darkMode
                          ? "bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl"
                          : "bg-gradient-to-br from-white to-gray-50 shadow-md"
                      }`}
                      whileHover={{
                        y: -5,
                        boxShadow: darkMode
                          ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)"
                          : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-full ${
                            darkMode ? "bg-blue-900/30 text-blue-300" : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-blue-300" : "text-blue-700"}`}>
                            {item.level}
                          </h3>
                          <p className={`font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                            {item.term}
                          </p>
                          <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className={`mt-20 text-center max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-blue-900/10 border border-blue-900/20" : "bg-blue-50 border border-blue-100"
            }`}
          >
            <p className="text-base">
              {language === "sv"
                ? "📘 Vår flexibla plattform säkerställer att skolor på alla nivåer kan hantera praktikperioder på ett strukturerat, GDPR-säkert och användarvänligt sätt."
                : "📘 Our flexible platform ensures that schools at all levels can manage internship periods in a structured, GDPR-compliant, and user-friendly way."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InternshipTypes
