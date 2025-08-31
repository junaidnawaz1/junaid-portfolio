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
    <section    //bg-gradient-to-r from-purple-400 to-pink-600
      id="skills"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-16"
    >
       <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-12"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map(({ id, name, icon }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-slate-800 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-purple-500 hover:scale-105 hover:translate-y-[-5px] transition-all duration-300 relative"
          >
            {icon}
            <p className="mt-3 text-lg font-medium">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;