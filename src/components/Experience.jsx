import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      title: "Department Representative",
      subtitle: "EE Department NIT Durgapur",
      dateRange: "Aug 2025 — Present",
      points: [
        "Coordinated communication between students and faculty while representing batch concerns and activities.",
        "Represented the batch in departmental meetings and coordinated communication between students and Gymkhana.",
      ],
    },
    {
      title: "Senior Coordinator",
      subtitle: "Bihari More Education Project, NITDGP",
      dateRange: "Jan 2025 — Present",
      points: [
        "Teaching Volunteer for underprivileged students' JNV exam preparation, enhancing leadership and teaching skills.",
        "Member of the Graphics Designing Team, contributing to creative designs and visual content development.",
      ],
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-12 bg-transparent transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Heading */}
        <div className="border-b border-black dark:border-gray-700 pb-2 mb-8">
          <h2 className="text-2xl font-bold tracking-wide uppercase text-black dark:text-white">
            Work Experience
          </h2>
        </div>

        {/* Experience Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 text-black dark:text-white">
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className="bg-white/50 dark:bg-gray-800/40 backdrop-blur-xs rounded-xl p-6 border border-gray-200 dark:border-gray-700/60 shadow-xs hover:shadow-md hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Timeline Tag */}
                <div className="mb-3">
                  <span className="text-xs font-semibold bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-full">
                    {experience.dateRange}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-bold text-gray-950 dark:text-white leading-snug">
                  {experience.title}
                </h3>

                {/* Subtitle / Organization */}
                <p className="text-sm font-medium text-orange-500 dark:text-orange-400 mt-1 mb-4">
                  {experience.subtitle}
                </p>
                
                {/* Bullet Points */}
                <ul className="space-y-2.5 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                  {experience.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="leading-relaxed marker:text-orange-500 dark:marker:text-orange-400">
                      {point}
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