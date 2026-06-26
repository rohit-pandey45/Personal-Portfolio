import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import AWS from '../assets/AWS.png'
import sql from "../assets/SQL_Database.png";
import prompt from '../assets/Prompt.png'
import sky from '../assets/full.png'
import cyber from '../assets/cyber.png'
import github from '../assets/GITHUB.jpg'


const Certifications = () => {
  // Add your certificate details here. 
  // Replace the placeholder image paths with your actual asset routes (e.g., "/assets/aws.png")
  const certificationsData = [
    {
      title: "AWS APAC - Solutions Architecture Job Simulation",
      issuer: "Forage Certification",
      description: "Designed scalable and secure cloud-based solutions while applying core AWS architecture principles to real-world business scenarios.",
      tags: ["AWS Cloud", "Cloud Security", "Solution Architecture"],
      image: AWS, // Replace with your image path
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_uLtkQSZM88LdYo2Lk_1750782982508_completion_certificate.pdf" // Replace with your link
    },
    {
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class",
      description: "Learned the fundamentals of relational database design, SQL queries, and data management techniques.",
      tags: ["SQL", "Database Design", "Data Querying"],
      image: sql,
      credentialUrl: "https://courses.cognitiveclass.ai/certificates/631b8c8e559740abb235508104af91c5" // Replace with your link
    },
    {
      title: "Foundations of Prompt Engineering",
      issuer: "AWS Training & Certification",
      description: "Explored prompt engineering techniques to optimize interactions with generative AI models for accurate and efficient outputs.",
      tags: ["AI Optimization", "Prompt Engineering"],
      image: prompt,
      credentialUrl: "https://drive.google.com/file/d/1HukP5F3qdc5TLfh6gBJqsJ7zOxxSySfD/view?usp=drive_link" // Replace with your link
    },
    {
      title: "Full Stack Web Developer",
      issuer: "Simplilearn",
      description: "Developed and enhanced full stack features by applying modern web development practices, focusing on user experience, component design, and responsive interfaces.",
      tags: ["Frontend", "Backend", "Database"],
      image: sky,
      credentialUrl: "https://certificates.simplicdn.net/share/10388569_10701506_1782309877734.pdf" // Replace with your link
    },
    {
      title: "Deloitte Australia - Cyber Job Simulation",
      issuer: "Forage",
      description: "Completed practical cybersecurity tasks involving threat detection, risk assessment, and security incident investigation within a simulated enterprise environment..",
      tags: ["Cyber Security", "Risk Assessment", "Threat Analysis"],
      image: cyber,
      credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_uLtkQSZM88LdYo2Lk_1750788833141_completion_certificate.pdf" // Replace with your link
    },
    {
      title: "Git & GitHub",
      issuer: "Let's Upgrade",
      description: "Completed practical cybersecurity tasks involving threat detection, risk assessment, and security incident investigation within a simulated enterprise environment..",
      tags: ["Cyber Security", "Risk Assessment", "Threat Analysis"],
      image: github,
      credentialUrl: "https://verify.letsupgrade.in/certificate/LUEGGJUN125297" // Replace with your link
    }
  ];

  return (
    <section 
      id="certification" 
      className="py-12 bg-transparent transition-colors duration-300"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Heading */}
        <div className="border-b border-black dark:border-gray-700 pb-2 mb-8">
          <h2 className="text-2xl font-bold tracking-wide uppercase text-black dark:text-white">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-black dark:text-white">
          {certificationsData.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/50 dark:bg-gray-800/40 backdrop-blur-xs rounded-2xl border border-gray-200 dark:border-gray-700/60 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              
              {/* Image Container with Zoom Effect */}
              <div className="overflow-hidden bg-gray-100 dark:bg-gray-900 aspect-video relative group border-b border-gray-200 dark:border-gray-700/50">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-orange-500 dark:text-orange-400 mt-1">
                    {cert.issuer}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="text-xs font-medium bg-gray-200/60 dark:bg-gray-700/50 px-2.5 py-1 rounded-md text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Credentials Button (Matches Live Demo Style) */}
                <div className="mt-6">
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600 shadow-xs hover:shadow-orange-500/20"
                  >
                    <span>View Credentials</span>
                    <FiExternalLink size={16} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;