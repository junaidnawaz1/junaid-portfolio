"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaReact, FaWordpress } from "react-icons/fa";

const Projects = () => {
  const mernProjects = [
    {
      id: 1,
      title: "An E-commerce Store",
      img: "https://i.ibb.co/LhSwt3nb/portfo.jpg",
      link: "https://mern-e-commerce-user-frontend.vercel.app/",
      desc: "A full-stack E-commerce Seller built with MERN stack.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"], // ✅ new
    },
    {
      id: 2,
      title: "Snipix Link Shortener",
      img: "https://i.ibb.co/8nqdjFsY/Whats-App-Image-2025-08-31-at-13-48-28-e8130813.jpg",
      link: "https://www.snipix.tech/",
      desc: "Transform long, complex URLs into short, memorable links with our powerful shortening technology. QR Code Generation. Its not a project it a Live SaaS",
      special: true, // 🔥 shadow glow effect
      tech: ["React.js" , "Node.js" , "MongoDB", "TailwindCSS", "Vercel"], // ✅ new
    },
  ];

  const wpProjects = [
    {
      id: 1,
      title: "Shoplify For Selling Products",
      img: "https://i.ibb.co/spN6MnNH/Whats-App-Image-2025-08-31-at-14-06-55-823918d7.jpg",
      link: "https://sana-ecommerce.wuaze.com/",
      desc: "WordPress WooCommerce Online Shop With Elementor.",
      tech: ["WordPress", "WooCommerce", "Elementor"], // ✅ new
    },
  ];

  const cardAnimation = {
    initial: { opacity: 0, y: 40, scale: 0.95 },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const renderProjectCard = (project) => (
    <motion.div
      key={project.id}
      variants={cardAnimation}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden rounded-2xl transition-all duration-300
        ${project.special
          ? "bg-slate-800 shadow-[0_0_25px_5px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_10px_rgba(236,72,153,0.7)]"
          : "bg-slate-800 shadow-lg hover:shadow-2xl"
        }
      `}
    >
      {/* Image */}
      <div className="relative overflow-hidden w-full h-64 rounded-t-2xl">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-slate-800 relative z-10">
        <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
        <p className="text-sm font-light text-gray-300 mt-2">
          {project.desc.split(". ").map((sentence, index, array) =>
            index === array.length - 1 ? (
              <strong
                key={index}
                className="font-bold text-pink-400"
              >
                {sentence}
              </strong>
            ) : (
              <span key={index}>{sentence}. </span>
            )
          )}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-indigo-600 text-white font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center px-6 py-3 text-white rounded-full transition-all duration-300 shadow-md transform hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
        >
          Visit Website
          <FaExternalLinkAlt className="ml-2 text-sm" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-16 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-4">
        My Projects
      </h2>

      {/* MERN Stack Projects Section */}
      <div className="w-full max-w-6xl mb-16">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-purple-400 mb-8 text-center"
        >
          <FaReact className="inline-block mr-2 text-pink-400" /> MERN Stack
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mernProjects.map(renderProjectCard)}
        </div>
      </div>

      {/* WordPress Projects Section */}
      <div className="w-full max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-purple-400 mb-8 text-center"
        >
          <FaWordpress className="inline-block mr-2 text-pink-400" /> WordPress
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wpProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
