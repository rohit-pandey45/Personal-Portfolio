import React from "react";
import { Users, Calendar, Trophy } from "lucide-react";

const Cocurricular = ({ darkMode }) => {
  const activityData = [
    {
      title: "Department Representative",
      subtitle: "EE Department, NIT Durgapur",
      dateRange: "Aug 2025 — Present",
      points: [
        "Coordinated communication between students and faculty while representing batch concerns and activities.",
        "Represented the batch in departmental meetings and coordinated communication between students and Gymkhana.",
      ],
    },
    {
      title: "Senior Coordinator",
      subtitle: "Bihari More Education Project, NIT Durgapur",
      dateRange: "Jan 2025 — Present",
      points: [
        "Teaching volunteer for underprivileged students preparing for JNV examinations, strengthening leadership and mentoring skills.",
        "Member of the Graphics Designing Team, contributing to creative designs and visual content development.",
      ],
    },
    {
      title: "Inter-NIT Cricket Player",
      subtitle: "NIT Durgapur Cricket Team",
      dateRange: "2024 — Present",
      points: [
        "Represented NIT Durgapur at the prestigious Inter-NIT Cricket Tournament.",
        "Participated in strategic team planning, intensive training sessions, and high-pressure competitive matches.",
        "Demonstrated teamwork, discipline, leadership, and sportsmanship in a national-level sporting environment.",
      ],
    },
  ];

  return (
    <section
      id="curricular"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            Co-Curricular{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>

          <p
            className="max-w-2xl mx-auto text-lg"
            style={{
              color: darkMode ? "#d1d5db" : "#4b5563",
            }}
          >
            Leadership, community service, and sports experiences that have
            helped shape my teamwork, communication, and organizational skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-1 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, #f97316, #f59e0b)",
            }}
          ></div>

          {activityData.map((activity, index) => (
            <div
              key={index}
              className="relative pl-16 mb-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Icon */}
              <div className="absolute left-0 top-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  {index === 2 ? (
                    <Trophy className="w-5 h-5 text-white" />
                  ) : (
                    <Users className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>

              {/* Card */}
              <div
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-500">
                      {activity.title}
                    </h3>

                    <p
                      className="mt-1"
                      style={{
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {activity.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 mt-3 md:mt-0 text-orange-400">
                    <Calendar size={18} />
                    <span>{activity.dateRange}</span>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-3">
                  {activity.points.map((point, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-orange-500 mt-1">●</span>
                      <span>{point}</span>
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

export default Cocurricular;