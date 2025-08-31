"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center py-16 px-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
      >
        👨‍💻 About Me
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center space-y-6 leading-relaxed text-lg text-gray-300"
      >
        <p>
          Hi, I'm <span className="text-purple-400 font-semibold">Junaid</span>, a dedicated{" "}
          <span className="text-pink-400 font-semibold">MERN Stack & WordPress Developer</span>{" "}
          with a passion for building digital solutions that make an impact.
        </p>

        <p>
          I'm the creator of <span className="text-purple-400 font-semibold">Snipix</span>, a fully
          functional SaaS link shortener platform complete with authentication, analytics, and an
          exceptional user experience. This project showcases my ability to design, develop, and
          launch scalable applications that solve real problems.
        </p>

        <p>
          Alongside SaaS development, I specialize in creating modern, responsive{" "}
          <span className="text-pink-400 font-semibold">WordPress websites</span> using Elementor
          that drive conversions for businesses and personal brands.
        </p>
      </motion.div>

      {/* Focus Points */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl"
      >
        {/* Clean Code */}
        <div className="flex flex-col items-center bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition">
          <FaCode className="text-4xl text-purple-400 mb-4" />
          <h3 className="font-semibold text-lg text-white mb-2">Clean Code & Performance</h3>
          <p className="text-gray-400 text-sm text-center">
            Writing efficient, scalable, and maintainable code is my top priority.
          </p>
        </div>

        {/* Design */}
        <div className="flex flex-col items-center bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition">
          <FaPaintBrush className="text-4xl text-pink-400 mb-4" />
          <h3 className="font-semibold text-lg text-white mb-2">Attractive Design</h3>
          <p className="text-gray-400 text-sm text-center">
            Creating modern, responsive, and user-friendly interfaces for better usability.
          </p>
        </div>

        {/* Scalable Solutions */}
        <div className="flex flex-col items-center bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition">
          <FaRocket className="text-4xl text-blue-400 mb-4" />
          <h3 className="font-semibold text-lg text-white mb-2">Scalable Solutions</h3>
          <p className="text-gray-400 text-sm text-center">
            Building applications and websites that can grow with your business needs.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
