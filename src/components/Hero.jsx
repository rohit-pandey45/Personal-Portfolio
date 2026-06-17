// import instagram from "../assets/instagram.png";
// import tiktok from "../assets/tiktok.png";
// import github from "../assets/github.png";
// import youtube from "../assets/youtube.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import CV from "../assets/CV.pdf";
import hero from "../assets/rohitt.jpg";
import { DownloadIcon, Mail } from "lucide-react";
import hi from "../assets/hi.png";

import React from "react";
// import { DownloadIcon, Mail } from 'lucide-react'

const Hero = ({ darkMode }) => {
  const socialIcons = [
    {
      icon: FaGithub,
      link: "https://github.com/rohit-pandey45",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/rohit-pandey-9055b9323/",
    },
    {
      icon: SiLeetcode,
      link: "https://leetcode.com/u/rohit_45_/",
    },
    {
      icon: SiGeeksforgeeks,
      link: "https://www.geeksforgeeks.org/profile/rpandey_gfg_",
    },
    {
      icon: SiCodechef,
      link: "https://www.codechef.com/users/fine_flame_28",
    },
  ];
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary:
      "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div
          className="container mx-auto flex px-4 sm:px-8 lg:px-14
        py-12 lg:py-14 flex-col lg:flex-row items-center justify-between
        lg:mt-14 mt-14"
        >
          <div
            className="lg:w-1/2 w-full flex flex-col items-center
          lg:items-start text-center lg:text-left mb-12 lg:mb-0"
          >
            <div
              className="flex justify-center lg:justify-start
            gap-4 sm:gap-6 mb-6 sm:mb-7 w-full"
            >
              {socialIcons.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <Icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${
                        darkMode ? "text-white" : "text-gray-800"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
            {/* <div
              className="inline-block mb-4 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Available for Internships
            </div> */}
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi! I'm Rohit
              
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-4">
                Electrical Engineering Student | Full Stack Developer | DSA
                Enthusiast
              </h2>
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md 
              sm:max-w-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Electrical Engineering undergraduate at NIT Durgapur passionate about Software Development, Full Stack Web Development, and Data Structures & Algorithms. Experienced in building modern web applications and AI-powered projects while strengthening problem-solving, teamwork, and leadership skills through technical and co-curricular activities.
            </p>
            {/*Buttons */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center text-white 
                  bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                  rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Download CV
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center ${theme.buttonSecondary} justify-center  border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95`}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center lg:justify-start gap-8 mt-8"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div>
              <h3 className="text-2xl font-bold text-orange-500">400+</h3>
              <p className={theme.textSecondary}>DSA Problems</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">5+</h3>
              <p className={theme.textSecondary}>Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-orange-500">2⭐️</h3>
              <p className={theme.textSecondary}>Codechef Rating</p>
            </div>
          </div>
          {/*Image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8
          lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {/* <div className="relative w-4/5 sm:w-3/4 lg:w-full"> */}
            <div className="relative w-64 sm:w-72 lg:w-80">
              <div className="absolute inset-0 bg-orange-500 opacity-20 blur-3xl rounded-full scale-75"></div>
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="Rohit Pandey"
                  className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-full border-4 border-orange-500 shadow-xl"
                />
              </div>
              <img
                src={hi}
                alt="Hi icon"
                className="absolute top-4 right-2 sm:top-8 sm:right-4 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>
        <div
          className={`absolute -top-20 -left-20 w-40 h-40
          sm:w-64 ${theme.decorativeCircle} rounded-full
          mix-blend-multiply filter blur-3xl opacity-10
          animate-pulse delay-1000 hidden sm:block`}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
