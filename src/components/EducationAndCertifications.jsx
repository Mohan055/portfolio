import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Vijaya Degree College",
    location: "Bangalore, KA",
    degree: "Bachelor of Computer Science",
    duration: "July 2015 — Dec 2019",
  },
  {
    institution: "Yediyur Pre-University College",
    location: "Bangalore, KA",
    degree: "PUC - Commerce (GEBA)",
    duration: "June 2013 — May 2015",
  },
];

const certifications = [
  {
    title: "Full Stack Web Development Internship",
    institution: "Sash Info Services PVT.LTD.",
    duration: "Apr 2024 — Jul 2024",
  },
  {
    title: "Python Full Stack + React",
    institution: "Pyspider Basavanagudi",
    duration: "Feb 2023 — Nov 2023",
  },
  {
    title: "Python & Django - Framework",
    institution: "Infosys Springboard",
    duration: "May 2023 — Jul 2023",
  },
];

export default function EducationAndCertifications() {
  return (
    <section className="py-12 px-6 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Education */}
        <div>
          <p className="text-green-500 text-sm mb-3 font-medium tracking-wider">
            ✦ EDUCATION
          </p>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Education
          </h2>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 p-5 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {edu.institution}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {edu.location}
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300 mt-1">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                    {edu.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="text-green-500 text-sm mb-3 font-medium tracking-wider">
            ✦ CERTIFICATIONS
          </p>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Certifications
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 p-5 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {cert.institution}
                    </p>
                  </div>
                  <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 md:text-right">
                    {cert.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}