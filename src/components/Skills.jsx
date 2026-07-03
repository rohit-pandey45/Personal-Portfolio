import React from "react";

import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineArchitecture } from "react-icons/md";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiMysql,
  SiPython,
} from "react-icons/si";

import { TbLetterC } from "react-icons/tb";

//import { div, section } from "framer-motion/client";
const Skills = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      title: "Backend Development",
      icon: <SiMongodb />,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      title: "Programming & Problem Solving",
      icon: <BsCodeSlash />,
      skills: ["C", "C++", "DSA", "OOP"],
    },
    {
      title: "Tools & Version Control",
      icon: <FaGitAlt />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
    },
  ];

  const skills = [
    {
      name: "C",
      icon: TbLetterC,
      level: 85,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "C++",
      icon: SiCplusplus,
      level: 90,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      level: 85,
      color: "from-yellow-500 to-amber-500",
    },
    {
      name: "React.js",
      icon: FaReact,
      level: 80,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 70,
      color: "from-gray-600 to-black",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: 85,
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Redux",
      icon: SiRedux,
      level: 70,
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      level: 75,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 75,
      color: "from-gray-500 to-slate-700",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 75,
      color: "from-green-600 to-green-800",
    },
    {
      name: "Python",
      icon: SiPython,
      level: 70,
      color: "from-green-600 to-green-800",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      level: 75,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Git",
      icon: FaGitAlt,
      level: 80,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      level: 80,
      color: "from-slate-600 to-black",
    },
    {
      name: "DSA",
      icon: BsCodeSlash,
      level: 85,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "OOP",
      icon: MdOutlineArchitecture,
      level: 80,
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section
      id="skills"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="py-8 relative overflow-hidden"
    >
      <div className="py-6 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20" data-aos="fade-up">
            <h1
              className="sm:text-4xl text-3xl font-bold title-font mb-4"
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
                Skills
              </span>
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto leading-relaxed"
              style={{
                color: darkMode ? "#d1d5db" : "#4b5563",
              }}
            >
              Proficient in frontend technologies including HTML5, CSS3,
              JavaScript, React.js, Next.js, Tailwind CSS, and Redux. On the
              backend, I work with Node.js, Express.js, MongoDB, and MySQL. I
              have a strong foundation in C, C++, DSA, and OOP, and I use Git
              and GitHub for version control and collaboration.
            </p>
          </div>

          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                
          <div>
                <h3 className="text-lg font-bold text-orange-500 mb-4 min-h-[56px] flex items-center">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2.5 py-1 rounded-md transition-colors ${
                        darkMode
                          ? "bg-gray-700/60 text-gray-300 border border-gray-600/40 hover:bg-gray-700"
                          : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border flex flex-col justify-between
      hover:-translate-y-1 transition-all duration-300
      ${
        darkMode
          ? "bg-gray-800 border-gray-700 hover:border-orange-500/50"
          : "bg-white border-gray-200 hover:border-orange-400"
      }`}
                style={{
                  borderTop: "3px solid #f97316",
                }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 min-h-[56px]">
                    <span className="text-2xl text-orange-500">
                      {category.icon}
                    </span>
                    <h3 className="text-lg font-bold text-orange-500">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full
  transition-colors border
  ${
    darkMode
      ? "bg-gray-700/60 text-gray-300 border-gray-600/40 hover:bg-gray-700"
      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
  }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="flex flex-wrap -m-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-4 lg:w-1/4 md:w-1/2 w-full"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div
                    style={{
                      background: darkMode
                        ? "linear-gradient(to bottom right, #1f2937, #111827)"
                        : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                      borderColor: darkMode ? "#374151" : "#e5e7eb",
                    }}
                    className="h-full p-6 rounded-2xl border
                    hover:border-orange-500/50 transition-all
                    duration-300 hover:-translate-y-2 group
                    hover:shadow-[0_0_30px_rgb(255, 165,0,0,0.15)]"
                  >
                    <div className="flex-items-center mb-6">
                      <div
                        style={{
                          background: darkMode
                            ? "linear-gradient(to bottom right, #374151, #1f2937)"
                            : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                        }}
                        className="w-16 h-16 rounded-xl p-3 flex
                      items-center justify-center
                      group-hover:scale-110 transition-transform
                      duration-300 shrink-0"
                      >
                        <Icon
                          size={40}
                          className={darkMode ? "text-white" : "text-gray-800"}
                        />
                      </div>
                      <h3
                        className="text-2xl font-bold ml-4"
                        style={{
                          color: darkMode ? "white" : "#1f293e",
                        }}
                      >
                        {skill.name}
                      </h3>
                      {/* </div> */}
                      <div
                        className="mb-2 flex justify-between
            items-center"
                      >
                        <span
                          className="font-medium"
                          style={{
                            color: darkMode ? "#d1d5db" : "#6b7280",
                          }}
                        >
                          Proficiency
                        </span>
                        <span
                          style={{
                            background:
                              "linear-gradient(to right, #f97316, #f59e0b",
                            WebKitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                          }}
                          className="font-bold"
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="w-full rounded-full h-3 overflow-hidden"
                        style={{
                          backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                        }}
                      >
                        <div
                          className={`h-full rounded-full bg-linear-to-r
                        ${skill.color} transition-all duration-1000
                        ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div
                        className={`mt-6 pt-4 border-t
                        ${darkMode ? "border-gray-700" : "border-gray-300"}`}
                      >
                        <div
                          className="h-1 rounded-full opacity-70
                            group-hover:w-full transition-all duration-500 w-1/3"
                          style={{
                            background:
                              "linear-gradient(to right, #f97316, #f59e0b)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
