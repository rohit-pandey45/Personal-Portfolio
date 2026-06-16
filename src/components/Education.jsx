import React from 'react';
import { GraduationCap, BookOpen, School, Award, TrendingUp, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "National Institute of Technology Durgapur",
      degree: "B.Tech — Electrical Engineering",
      score: "8.68 CGPA",
      subScore: "Current CGPA",
      duration: "2024 — Present",
      icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
      performanceIcon: <Award className="w-5 h-5 text-orange-500" />
    },
    {
      institution: "Dakshana Foundation",
      degree: "IIT JEE Preparation",
      score: "Qualified JEE Mains",
      subScore: "JEE Mains",
      duration: "2023 — 2024",
      icon: <BookOpen className="w-6 h-6 text-orange-500" />,
      performanceIcon: <Award className="w-5 h-5 text-orange-500" />
    },
    {
      institution: "Green Point Academy",
      degree: "Secondary & Higher Secondary",
      score: "Class X: 91.6% | Class XII: 94.8%",
      subScore: "Academic Performance",
      duration: "2021 — 2023",
      icon: <School className="w-6 h-6 text-orange-500" />,
      performanceIcon: <TrendingUp className="w-5 h-5 text-orange-500" />
    }
  ];

  return (
    <section 
      id="education" 
      className="py-20 w-full relative z-10 clear-both block bg-transparent transition-colors duration-300"
    >
      {/* Expanded max-w to 6xl or 7xl to utilize full screen width */}
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Heading with Accent Bar */}
        <div className="border-b border-gray-200 dark:border-gray-800 pb-4 mb-10 relative">
          <h2 className="text-3xl font-bold tracking-wide uppercase text-black dark:text-white">
            Education
          </h2>
          <div className="absolute bottom-0 left-0 w-16 h-[3px] bg-orange-500"></div>
        </div>

        {/* Education Boxes Layout */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-7 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-orange-500/40 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[450px] overflow-hidden group"
            >
              {/* <div className="absolute inset-0 -z-10 bg-blue-500/10 blur-3xl"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div> */}
              {/* Bottom Orange Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-100 group-hover:scale-x-105 transition-transform duration-300"></div>

              <div>
                {/* Header Row: Timeline Tag & Corner Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-semibold bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full border border-orange-200/50 dark:border-orange-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.duration}
                  </div>
                  <div className="p-2.5 rounded-full bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/20 shadow-inner">
                    {item.icon}
                  </div>
                </div>

                {/* Institution Title */}
                <h3 className="text-xl font-bold text-gray-950 dark:text-white leading-snug tracking-tight mb-4">
                  {item.institution}
                </h3>

                {/* Degree / Stream with stylized bullet point */}
                <div className="flex items-start gap-2.5 mt-3">
                  <span className="w-2 h-2 rounded-full border-2 border-orange-500 bg-transparent mt-1.5 shrink-0"></span>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.degree}
                  </p>
                </div>
              </div>

              {/* Performance Metrics Section */}
              <div className="mt-8">
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-2.5">
                  Performance
                </p>
                
                {/* Score Showcase Box - Using a distinctly darker slate color to contrast inside the card */}
                <div className="flex items-center gap-4 bg-gray-50 dark:bg-[#090f1e] p-4 rounded-xl border border-gray-100 dark:border-gray-800/80">
                  <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20 shrink-0">
                    {item.performanceIcon}
                  </div>
                  <div>
                    <p className="text-base font-bold text-orange-500 dark:text-orange-400">
                      {item.score}
                    </p>
                    <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mt-0.5">
                      {item.subScore}
                    </p>
                  </div>
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