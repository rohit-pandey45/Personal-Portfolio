import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  // Add your certificate details here. 
  // Replace the placeholder image paths with your actual asset routes (e.g., "/assets/aws.png")
  const certificationsData = [
    {
      title: "React - The Complete Guide",
      issuer: "Udemy Certification",
      description: "Comprehensive deep dive into modern React concepts including hooks, state management, and ecosystem optimization tools.",
      tags: ["React", "JavaScript", "Frontend"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600", // Replace with your image path
      credentialUrl: "#" // Replace with your link
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      description: "Validation of overall understanding of the AWS Cloud platform, covering core cloud architectural principles and security.",
      tags: ["AWS", "Cloud Computing"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600", // Replace with your image path
      credentialUrl: "#" // Replace with your link
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