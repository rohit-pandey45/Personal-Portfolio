import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Cocurricular from "./components/Cocurricular.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen"
          : "bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen"
      }
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode}/>
      <Certifications darkMode={darkMode}/>
      <Cocurricular darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
};
export default App;
