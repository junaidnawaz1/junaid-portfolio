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
      className="relative py-24 px-6 flex flex-col items-center overflow-hidden"
    >
      {/* Animated Illustration Background */}
      <div className="absolute inset-0 -z-10 animated-bg opacity-80"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-16 tracking-tight"
      >
        Core Expertise
      </motion.h2>

      {/* Skills Grid */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {skills.map(({ id, name, icon }, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.6 }}
              className="group relative flex flex-col items-center justify-center 
                         bg-slate-900/60 backdrop-blur-lg border border-slate-700/40 
                         rounded-2xl p-8 shadow-lg cursor-pointer 
                         hover:-translate-y-2 hover:shadow-purple-500/40 transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-700/0 to-cyan-500/0 group-hover:from-purple-600/20 group-hover:to-cyan-400/20 transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative z-10 p-3 rounded-full bg-slate-800/50 shadow-md group-hover:scale-110 transition-transform duration-300">
                {icon}
              </div>

              {/* Skill Name */}
              <p className="relative z-10 mt-4 text-lg md:text-xl font-semibold text-gray-100 tracking-wide">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
