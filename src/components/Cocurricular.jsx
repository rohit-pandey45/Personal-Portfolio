import React from 'react';

const Cocurricular = () => {
  const activityData = [
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
    {
      title: "Inter-NIT Cricket Player",
      subtitle: "NIT Durgapur Cricket Team",
      dateRange: "2024 — Present",
      points: [
        "Represented National Institute of Technology Durgapur at the prestigious Inter-NIT Cricket Tournament.",
        "Engaged in rigorous strategic team planning, physical conditioning, and high-pressure match situations alongside top athletic talent across the NIT circuit.",
        "Demonstrated strong sportsmanship, team synergy, and peak performance discipline under competitive match environments."
      ],
    },
  ];

  return (
    <section 
      id="curricular" 
      className="py-20 scroll-mt-20 min-h-[85vh] flex flex-col justify-center bg-transparent text-black dark:text-white"
    >
      <div className="container mx-auto px-6 max-w-4xl w-full">
        
        {/* Futuristic Section Header */}
        <div className="flex items-center gap-4 mb-16 group">
          <div className="h-8 w-[4px] bg-orange-500 rounded-full transition-transform duration-300 group-hover:scale-y-125" />
          <h2 className="text-3xl font-black tracking-tight uppercase">
            Co-Curricular Activities <span className="text-orange-500">.</span>
          </h2>
        </div>

        {/* Industrial Border Deck Blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          {activityData.map((activity, index) => (
            <div 
              key={index} 
              className="neo-glow bg-white dark:bg-gray-900/40 border-t-4 border-t-orange-500 border border-gray-200 dark:border-gray-800 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-gray-950 dark:text-white tracking-tight leading-none">
                    {activity.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-2">
                    {activity.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold bg-orange-500/10 text-orange-500 dark:text-orange-400 px-3 py-1 rounded-md border border-orange-500/20 whitespace-nowrap">
                  {activity.dateRange}
                </span>
              </div>
              
              <ul className="space-y-3 mt-6 border-t border-gray-100 dark:border-gray-800/80 pt-4">
                {activity.points.map((point, pointIndex) => (
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

export default Cocurricular;