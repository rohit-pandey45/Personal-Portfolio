import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      title: "Software Engineering Virtual Experience",
      subtitle: "Skyscanner (via Forage)",
      dateRange: "2026", // Feel free to adjust the timeline
      points: [
        "Built a responsive web application using React to display live flight search results dynamically.",
        "Utilized and structured Skyscanner’s open-source design system components to build clean, consistent user interfaces.",
        "Gained hands-on experience in frontend architecture, component layout lifecycle design, and responsive design systems."
      ],
    }
  ];

  return (
    <section 
      id="experience" 
      className="py-20 scroll-mt-20 min-h-[50vh] flex flex-col justify-center bg-transparent text-black dark:text-white"
    >
      <div className="container mx-auto px-6 max-w-4xl w-full">
        
        {/* Futuristic Section Header */}
        <div className="flex items-center gap-4 mb-12 group">
          <div className="h-8 w-[4px] bg-orange-500 rounded-full transition-transform duration-300 group-hover:scale-y-125" />
          <h2 className="text-3xl font-black tracking-tight uppercase">
            Experience <span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Industrial Border Deck Block */}
        <div className="max-w-2xl">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="neo-glow bg-white dark:bg-gray-900/40 border-t-4 border-t-orange-500 border border-gray-200 dark:border-gray-800 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-gray-950 dark:text-white tracking-tight leading-snug">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-1">
                    {exp.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold bg-orange-500/10 text-orange-500 dark:text-orange-400 px-3 py-1 rounded-md border border-orange-500/20 whitespace-nowrap self-start">
                  {exp.dateRange}
                </span>
              </div>
              
              <ul className="space-y-3 mt-6 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                {exp.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                    <span className="text-orange-500 mt-1.5 text-xs">■</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;