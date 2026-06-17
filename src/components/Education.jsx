import React from "react";
import {
  GraduationCap,
  BookOpen,
  School,
  Award,
  TrendingUp,
  Calendar,
} from "lucide-react";

const Education = ({ darkMode }) => {
  const educationData = [
    {
      institution: "National Institute of Technology Durgapur",
      degree: "B.Tech — Electrical Engineering",
      score: "8.68 CGPA",
      subScore: "Current CGPA",
      duration: "2024 — Present",
      icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
      performanceIcon: <Award className="w-5 h-5 text-orange-500" />,
    },
    {
      institution: "Dakshana Foundation",
      degree: "IIT JEE Preparation",
      score: "Qualified JEE Mains",
      subScore: "JEE Mains",
      duration: "2023 — 2024",
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      performanceIcon: <Award className="w-5 h-5 text-orange-500" />,
    },
    {
      institution: "Green Point Academy",
      degree: "Secondary & Higher Secondary",
      score: "Class X: 91.6% | Class XII: 94.8%",
      subScore: "Academic Performance",
      duration: "2021 — 2023",
      icon: <School className="w-6 h-6 text-orange-500" />,
      performanceIcon: <TrendingUp className="w-5 h-5 text-orange-500" />,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-lg"
            style={{
              color: darkMode ? "#d1d5db" : "#4b5563",
            }}
          >
            My academic journey reflects a strong foundation in engineering,
            analytical thinking, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-1 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #f97316, #f59e0b)",
            }}
          ></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative pl-16 mb-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-orange-500">
                  {edu.icon}
                </div>
              </div>

              {/* Card */}
              <div
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500">
                      {edu.institution}
                    </h3>

                    <p
                      className="mt-1 text-lg"
                      style={{
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-3 md:mt-0 text-orange-400">
                    <Calendar size={18} />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                {/* Score Card */}
                <div
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    darkMode
                      ? "bg-gray-900 border-gray-700"
                      : "bg-orange-50 border-orange-100"
                  }`}
                >
                  <div>
                    <h4 className="text-xl font-bold text-orange-500">
                      {edu.score}
                    </h4>

                    <p
                      className="text-sm"
                      style={{
                        color: darkMode ? "#9ca3af" : "#6b7280",
                      }}
                    >
                      {edu.subScore}
                    </p>
                  </div>

                  {edu.performanceIcon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;