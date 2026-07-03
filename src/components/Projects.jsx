import React from "react";
import project1 from "../assets/project1.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpeg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "Full Stack GenAI Job Preparation Web Application",
      desc: "An AI-powered full-stack job preparation platform where users submit their resume and job description to receive an ATS compatibility score (1–100), 10–15 tailored interview questions with answers, a 7-day personalized skill-gap roadmap, and a downloadable AI-optimized resume. Built with React, Node.js, MongoDB, and Google Gemini API, with secure authentication supporting both email/password and Google OAuth.",
      image: project1,
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Gemini API",
        "Google OAuth",
      ],
      github:
        "https://github.com/rohit-pandey45/Full-Stack-Gen-AI-Job-Preparation-Web-Application",
      demo: "https://gen-ai-job-prep-frontend.vercel.app",
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      desc: "Designed and developed a responsive personal portfolio website to showcase projects, technical skills, certifications, and achievements. Implemented modern UI/UX principles, smooth animations, and dark/light mode support to enhance user engagement and accessibility.",
      image: project3,
      tags: ["React", "JavaScript", "Tailwind CSS", "Framer-motion"],
      github: "https://github.com/rohit-pandey45/Personal-Portfolio",
      demo: "https://your-portfolio.vercel.app",
    },
    {
      id: 3,
      title: "Self Driving Vehicle",
      desc: "Designed and developed an autonomous robotic vehicle capable of detecting and avoiding obstacles using ultrasonic and IR sensors. Implemented real-time navigation logic on Arduino and integrated motor control mechanisms to enable autonomous movement in dynamic environments.",
      image: project4,
      tags: ["Arduino", "C++", "Ultrasonic Sensor", "IR Sensor"],
      certificate:
        "https://drive.google.com/file/d/1yRLA3RPZGeUyPpztevv6WPQwfC5ZBuUs/view?usp=drive_link",
    },
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            A showcase of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-42 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm mb-3 leading-relaxed flex-1"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
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
                <div className="flex gap-2 mt-auto">
                  {project.certificate ? (
                    <a
                      href={project.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "white" : "#374151",
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Certificate</span>
                    </a>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "white" : "#374151",
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <FaGithub className="text-sm" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background:
                          "linear-gradient(to right, #f97316, #f59e0b)",
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              borderColor: darkMode ? "#374151" : "#e5e7eb",
              background: darkMode
                ? "linear-gradient(to bottom right, #1f2937, #111827)"
                : "linear-gradient(to bottom right, #ffffff, #f9fafb)",
            }}
            className="group rounded-2xl border border-dashed hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center min-h-64 p-8 text-center"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ background: darkMode ? "#374151" : "#f3f4f6" }}
            >
              <MdOutlineRocketLaunch size={30} className="text-orange-500" />
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: darkMode ? "white" : "#1f2937" }}
            >
              More Projects Coming Soon
            </h3>
            <p
              className="text-sm"
              style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
            >
              Currently working on exciting new projects. Stay tuned!
            </p>
            <div
              className="mt-4 px-4 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                color: "#f97316",
              }}
            >
              In Progress
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/rohit-pandey45"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
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
