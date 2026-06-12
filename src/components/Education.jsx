import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "National Institute of Technology Durgapur",
      degree: "B.Tech — Electrical Engineering",
      score: "8.68 CGPA",
      duration: "2024 — Present",
    },
    {
      institution: "Dakshana Foundation",
      degree: "IIT JEE Preparation",
      score: "Qualified JEE Mains",
      duration: "2023 — 2024",
    },
    {
      institution: "Green Point Academy",
      degree: "Secondary & Higher Secondary",
      score: "Class X: 91.6% | Class XII: 94.8%",
      duration: "2021 — 2023",
    }
  ];

  return (
    <section 
      id="education" 
      className="py-12 scroll-mt-20 min-h-[85vh] flex flex-col justify-center bg-transparent transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Heading */}
        <div className="border-b border-black dark:border-gray-700 pb-2 mb-8">
          <h2 className="text-2xl font-bold tracking-wide uppercase text-black dark:text-white">
            Education
          </h2>
        </div>

        {/* Education Boxes Layout */}
        <div className="grid md:grid-cols-3 gap-6 text-black dark:text-white">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/50 dark:bg-gray-800/40 backdrop-blur-xs rounded-xl p-6 border border-gray-200 dark:border-gray-700/60 shadow-xs hover:shadow-md hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Timeline Tag */}
                <div className="mb-3">
                  <span className="text-xs font-semibold bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>

                {/* Institution Title */}
                <h3 className="text-lg font-bold text-gray-950 dark:text-white leading-snug">
                  {item.institution}
                </h3>

                {/* Degree / Stream */}
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-2">
                  {item.degree}
                </p>
              </div>

              {/* Performance Metrics / Scores */}
              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700/50">
                <p className="text-xs font-semibold tracking-wider uppercase text-gray-400 dark:text-gray-500">
                  Performance
                </p>
                <p className="text-sm font-bold text-orange-500 dark:text-orange-400 mt-0.5">
                  {item.score}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;