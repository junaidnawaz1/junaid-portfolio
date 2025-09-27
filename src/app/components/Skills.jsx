"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaWordpress, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
    { id: 2, name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { id: 3, name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
    { id: 4, name: "Express", icon: <SiExpress size={40} className="text-gray-300" /> },
    { id: 5, name: "WordPress", icon: <FaWordpress size={40} className="text-blue-400" /> },
    { id: 6, name: "Elementor", icon: <FaWordpress size={40} className="text-pink-500" /> },
    { id: 7, name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-sky-400" /> },
    { id: 8, name: "Git", icon: <FaGitAlt size={40} className="text-orange-500" /> },
  ];

  return (
    <section
      id="skills"
      // Enhanced background for a distinct section look, padding increased
      className="bg-slate-900 text-white flex flex-col items-center py-24 px-6 relative"
    >
      {/* Optional: Add a subtle separator line or glow effect at the top */}
      <div className="w-full max-w-5xl h-[2px] bg-purple-500 opacity-20 mb-16 rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        // Consistent gradient title style from the Hero component
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-16 tracking-tighter"
      >
        Core Expertise
      </motion.h2>

      <div className="w-full max-w-5xl">
        {/* Adjusted grid for better spacing and layout on various screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {skills.map(({ id, name, icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }} // Adjusted delay for a smoother stagger
              viewport={{ once: true, amount: 0.6 }}
              className="flex flex-col items-center justify-center bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl shadow-xl shadow-slate-950/50 
                       border border-slate-700/50 cursor-pointer 
                       hover:bg-slate-700/70 hover:shadow-purple-500/30 hover:translate-y-[-5px] 
                       transition-all duration-300 ease-in-out group relative overflow-hidden"
            >
              {/* Subtle gradient overlay for the card background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/0 to-slate-800/0 group-hover:from-purple-900/10 group-hover:to-slate-800/10 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 p-2 rounded-full transition-transform duration-300 group-hover:scale-110">
                {icon}
              </div>
              
              {/* Skill Name */}
              <p className="relative z-10 mt-4 text-xl font-semibold text-gray-100 tracking-wide">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;