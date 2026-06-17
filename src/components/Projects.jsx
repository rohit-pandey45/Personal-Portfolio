import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { div, section } from "framer-motion/client";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Full Stack GenAI Job Preparation Web Application",
      desc: "Built an AI-powered job preparation platform featuring interview practice, personalized feedback, and skill-based question generation. Leveraged Generative AI to help users improve interview performance and track their preparation progress.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB", "Gemini API"],
      //github: "https://github.com/rohit-pandey45/Personal-Portfolio",
      // demo: "https://project1.vercel.app",
    },
    {
      id: 2,
      title: "AI Resume Analyzer",
      desc: "Building an AI-driven resume screening application that analyzes resumes, matches them with job descriptions, and generates actionable feedback. Designed to help candidates improve ATS compatibility and strengthen their job application profiles.",
      image: project2,
      tags: ["React", "Javascript", "Tailwind CSS"],
      // github: "https://github.com/yourusername/project1",
      // demo: "https://project1.vercel.app",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      desc: "Designed and developed a responsive personal portfolio website to showcase projects, technical skills, certifications, and achievements. Implemented modern UI/UX principles, smooth animations, and dark/light mode support to enhance user engagement and accessibility.",
      image: project3,
      tags: ["React", "JavScript", "Tailwind CSS", "Framer-motion"],
      github: "https://github.com/rohit-pandey45/Personal-Portfolio",
      // demo: "https://project1.vercel.app",
    },
    {
      id: 4,
      title: "Self Driving Vehicle",
      desc: "Designed and developed an autonomous robotic vehicle capable of detecting and avoiding obstacles using ultrasonic and IR sensors. Implemented real-time navigation logic on Arduino and integrated motor control mechanisms to enable autonomous movement in dynamic environments.",
      image: project4,
      tags: ["React", "Node.js", "MongoDB"],
      // github: "https://github.com/yourusername/project1",
      // demo: "https://project1.vercel.app",
    },
    // {
    //   id: 5,
    //   title: "Weather App",
    //   desc: "Built and deployed end-to-end projects demonstrating strong problem-solving skills",
    //   image: project5,
    //   tags: ["React", "Javascript", "Tailwind CSS"],
    //   github: "https://github.com/yourusername/project1",
    //   demo: "https://project1.vercel.app",
    // },
    // {
    //   id: 6,
    //   title: "To-Do Application",
    //   desc: "Built and deployed end-to-end projects demonstrating strong problem-solving skills",
    //   image: project6,
    //   tags: ["React", "Javascript", "Tailwind CSS"],
    //   github: "https://github.com/yourusername/project1",
    //   demo: "https://project1.vercel.app",
    // },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebKitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A showcase of my recent work
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-3 gap-5 mb-12"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border-duration-300
                hover:border-orange-500/50 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                        group-hover:scale-110 transition-transform
                        duration-500"
                />
              </div>
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{
                    color: darkMode ? "white" : "#1f2937",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3"
                  style={{
                    color: darkMode ? "#d1d5db" : "#6b7280",
                  }}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center
                            gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90
                            transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>View Code</span>
                  </a>
                  {/*Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                      }}
                      className="flex-1 flex items-center justify-center
    gap-1.5 px-3 py-2 text-white text-sm rounded-lg
    hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Demo</span>
                    </a>
                  )}
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                    className="flex-1 flex items-center justify-center
                            gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg
                            hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/rohit-pandey45"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center font-semibold
                            gap-2 px-7 py-4 text-white text-sm 
                            rounded-lg hover:shadow-lg
                            hover:shadow-orange-500/25 transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
