import React from "react";
import { motion } from "framer-motion";

import sashLogo from "../assets/images/cc.png";
import slgLogo from "../assets/images/slg.png"; 
import diyaLogo from "../assets/images/diya.png";


const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "SLG Digi PVT. LTD.",
    duration: "Jan 2025 — Present",
    logo: slgLogo,
    logoAlt: "SLG Digi Logo"
  },
  {
    role: "Web Developer - Intern",
    company: "Sash Info Services",
    duration: "Apr 2024 — Jul 2024",
    logo: sashLogo,
    logoAlt: "Sash Info Logo"
  },
  {
    role: "Full Stack Web Developer",
    company: "Contracted - Diya Fashions",
    duration: "Oct 2023 — Dec 2024",
    logo: diyaLogo,
    logoAlt: "Diya Fashions Logo"
  },
];

export default function RelatedExperience() {
  return (
    <section className="relative py-12 px-6 md:px-12 bg-transparent max-w-4xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-green-500 text-sm font-medium tracking-wider mb-2">
          ✦ WORK HISTORY
        </p>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Professional Journey
        </h2>
      </div>

      {/* Compact Experience List */}
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex items-start gap-4 py-3 border-b border-gray-200/50 dark:border-gray-700/30"
          >
            {/* Logo Container - now with better debugging */}
            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-white/5 dark:bg-white/10 border border-gray-200/20 dark:border-gray-700/20 overflow-hidden flex items-center justify-center p-1">
              {exp.logo ? (
                <img 
                  src={exp.logo} 
                  alt={exp.logoAlt}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    console.error(`Failed to load logo: ${exp.logoAlt}`);
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <span className="text-lg">🏢</span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate-md">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-m text-gray-600 dark:text-gray-400 mt-0.5">
                @{exp.company}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}