import React from "react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const Experience = ({ darkMode }) => {
  const experienceData = [
    {
      title: "Web Development Intern",
      subtitle: "Axlero Innovative Solutions",
      dateRange: "July 2026 - Present",
      certificateUrl:
        "https://drive.google.com/file/d/1--CxRI9rJiro61lSQPCuxlzmVNM49c0y/view?usp=sharing", // Add your link here
      points: [
        "Frontend Development: Develop user interfaces using HTML, CSS, JavaScript, React.js, and Next.js, ensuring cross-browser compatibility, high speed, and optimal responsiveness.",
        "API & Backend Integration: Collaborate closely with backend developers to integrate APIs, implement server-side functionality, and support database optimization tasks.",
        "Agile Collaboration: Participate actively in software development workflows, including daily standups, sprint planning, module code reviews, and technical discussions.",
        "Quality & Maintenance: Debug and troubleshoot cross-application technical issues while documenting features and maintaining strict coding and security standards.",
      ],
    },
    {
      title: "Software Engineering Virtual Job Simulation",
      subtitle: "JPMorgan Chase & Co (via Forage)",
      dateRange: "June 2026",
      certificateUrl:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_uLtkQSZM88LdYo2Lk_1782299405582_completion_certificate.pdf", // Add your link here
      points: [
        "Engineered enterprise microservices within a simulated JPMorgan Chase environment using Java, Spring Boot, and Maven to handle high-profile financial operations.",
        "Integrated Apache Kafka messaging infrastructure into a Spring application to establish secure, high-speed asynchronous data streams for transaction processing.",
        "Configured and integrated an embedded H2 database with Spring Data JPA to ensure robust data persistence, validation, and local state management.",
        "Designed and deployed scalable RESTful web services to securely expose internal business logic and seamlessly consume external third-party vendor APIs.",
      ],
    },
    {
      title: "Software Engineering Virtual Experience",
      subtitle: "SkyScanner (via Forage)",
      dateRange: "May 2026",
      certificateUrl:
        "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_uLtkQSZM88LdYo2Lk_1779998439970_completion_certificate.pdf",
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
            Practical learning experiences that helped me strengthen my software
            development, problem-solving, and system design skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-1 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #f97316, #f59e0b)",
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
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

                  <div className="flex flex-wrap items-center gap-4 text-orange-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>{exp.dateRange}</span>
                    </div>

                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                          darkMode
                            ? "border-orange-500/30 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400"
                            : "border-orange-500/20 bg-orange-50 text-orange-600 hover:bg-orange-100"
                        }`}
                      >
                        View Certificate
                        <ExternalLink size={14} />
                      </a>
                    )}
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
