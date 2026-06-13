import React from 'react';
import { Calendar } from 'lucide-react';

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
      className="py-16 bg-transparent transition-colors duration-300"
    >
      {/* Expanded max-w to 6xl to fill the layout canvas cleanly */}
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Heading with Accent Bar */}
        <div className="border-b border-gray-800 pb-4 mb-10 relative">
          <h2 className="text-3xl font-bold tracking-wide uppercase text-white">
            Work Experience
          </h2>
          <div className="absolute bottom-0 left-0 w-16 h-[3px] bg-orange-500"></div>
        </div>

        {/* Experience Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 text-white">
          {experienceData.map((experience, index) => (
            <div 
              key={index} 
              className="relative bg-[#111827] rounded-2xl p-8 border border-gray-800 shadow-xl hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between min-h-[340px] overflow-hidden"
            >
              {/* Bottom Solid Orange Border Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange-500"></div>

              <div>
                {/* Timeline Tag Row */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {experience.dateRange}
                  </span>
                </div>

                {/* Role Title (Made Bigger) */}
                <h3 className="text-2xl font-bold text-white tracking-tight leading-snug">
                  {experience.title}
                </h3>

                {/* Subtitle / Organization (Made Bigger) */}
                <p className="text-base font-semibold text-orange-500 dark:text-orange-400 mt-1.5 mb-5">
                  {experience.subtitle}
                </p>
                
                {/* Bullet Points with Enhanced Spacing & Readability */}
                <ul className="space-y-3.5 list-disc pl-5 text-sm md:text-base text-gray-300 leading-relaxed">
                  {experience.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="marker:text-orange-500"
                    >
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