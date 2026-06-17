import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const Experience = ({ darkMode }) => {
  const experienceData = [
    {
      title: "Software Engineering Virtual Experience",
      subtitle: "Skyscanner (via Forage)",
      dateRange: "2026",
      points: [
        "Utilized Skyscanner's Backpack React library to build responsive web application layouts following production-grade design system standards.",
        "Developed a Java-based Dropwizard microservice to handle HTTP search requests and enable efficient filtering of travel-related data.",
        "Built a native Android proof-of-concept application using Backpack mobile UI components to display interactive flight itineraries.",
        "Designed high-fidelity wireframes and prototypes in Figma, focusing on usability and seamless collaboration between design and engineering teams.",
      ],
    },
  ];

  return (
    <section
      id="experience"
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
              Experience
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-lg"
            style={{
              color: darkMode ? "#d1d5db" : "#4b5563",
            }}
          >
            Practical learning experiences that helped me strengthen my
            software development, problem-solving, and system design skills.
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

          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative pl-16 mb-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <Briefcase className="w-5 h-5 text-white" />
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500">
                      {exp.title}
                    </h3>

                    <p
                      className="mt-1"
                      style={{
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {exp.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-3 md:mt-0 text-orange-400">
                    <Calendar size={18} />
                    <span>{exp.dateRange}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-orange-500 mt-1">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;