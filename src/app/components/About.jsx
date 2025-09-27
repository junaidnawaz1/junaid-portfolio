"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

const About = () => {
  // Define a reusable stagger variant for the focus cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center py-24 px-6 relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        // Consistent gradient title style
        className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-tighter"
      >
        Who is Junaid?
      </motion.h2>

      {/* Content Container - Better framing for the main text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-4xl p-8 bg-slate-800/50 rounded-xl shadow-2xl shadow-slate-950/70 border border-purple-900/40"
      >
        <div className="text-center space-y-6 leading-relaxed text-lg text-gray-300">
          <p>
            Hi, I'm <span className="text-purple-400 font-semibold">Junaid</span>, a dedicated{" "}
            <span className="text-pink-400 font-semibold">MERN Stack & WordPress Developer</span>{" "}
            with a passion for building digital solutions that make an impact.
          </p>
          {/* **The requested addition is here:**
            This new line clearly establishes your MERN stack expertise before introducing Snipix.
          */}
          <p>
            My proficiency lies in the <span className="text-purple-400 font-semibold">MERN Stack ( React.js, Next.js, Node.js,  Express.js, MongoDB)</span> which I leverage to create high-performance, full-stack applications. This expertise fueled the development of my flagship project.
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
        </div>
      </motion.div>

      {/* Focus Points Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl w-full px-4 md:px-0"
      >
        {/* Clean Code */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 
                     transition-all duration-300 hover:scale-[1.03] hover:translate-y-[-5px] group cursor-pointer 
                     hover:shadow-purple-500/50"
        >
          <FaCode className="text-5xl text-purple-400 mb-4 transition-colors group-hover:text-purple-300" />
          <h3 className="font-bold text-xl text-center text-white mb-2 tracking-wide">Clean Code & Performance</h3>
          <p className="text-gray-400 text-base text-center">
            Writing efficient, scalable, and maintainable code is my top priority for long-term project success.
          </p>
        </motion.div>

        {/* Design */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 
                     transition-all duration-300 hover:scale-[1.03] hover:translate-y-[-5px] group cursor-pointer 
                     hover:shadow-pink-500/50"
        >
          <FaPaintBrush className="text-5xl text-pink-400 mb-4 transition-colors group-hover:text-pink-300" />
          <h3 className="font-bold text-xl text-white mb-2 tracking-wide">Attractive Design</h3>
          <p className="text-gray-400 text-base text-center">
            Creating modern, responsive, and user-friendly interfaces (UI/UX) for exceptional usability.
          </p>
        </motion.div>

        {/* Scalable Solutions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 
                     transition-all duration-300 hover:scale-[1.03] hover:translate-y-[-5px] group cursor-pointer 
                     hover:shadow-blue-500/50"
        >
          <FaRocket className="text-5xl text-blue-400 mb-4 transition-colors group-hover:text-blue-300" />
          <h3 className="font-bold text-xl text-white mb-2 tracking-wide">Scalable Solutions</h3>
          <p className="text-gray-400 text-base text-center">
            Building robust applications and websites that are engineered to easily grow with your business needs.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
