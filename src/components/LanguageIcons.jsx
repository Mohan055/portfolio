import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiDjango, SiPython, SiHtml5, SiCss3, SiJavascript,
  SiReact, SiVite, SiNodedotjs, SiExpress, SiPostgresql, SiMysql
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <SiCss3 />, color: "text-blue-500" },
  { name: "JS", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
  { name: "Python", icon: <SiPython />, color: "text-yellow-300" },
  { name: "Django", icon: <SiDjango />, color: "text-green-700 dark:text-green-400" },
  { name: "Node", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-700 dark:text-gray-200" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-600" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-indigo-500" },
];

export default function InfiniteTechSlider() {
  const [isHovered, setIsHovered] = useState(false);

  const baseDuration = 20; // seconds for 1 loop
  const hoverDuration = 40; // seconds when hovered

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 overflow-hidden relative">
      <div 
        className="relative h-20 overflow-hidden" // compact height
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: isHovered ? hoverDuration : baseDuration,
          }}
          className="flex absolute left-0 top-0 whitespace-nowrap"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center px-6"
            >
              <div className={`text-3xl ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-xs font-medium text-gray-800 dark:text-gray-200 mt-1">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
