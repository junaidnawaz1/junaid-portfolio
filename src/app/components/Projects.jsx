"use client";

import { motion } from "framer-motion";
// Replaced lucide-react imports with inline SVG icons to remove external dependency
// import { ExternalLink, Code, Globe } from "lucide-react"; 

const Projects = () => {
  const mernProjects = [
    {
      id: 1,
      title: "An E-commerce Store",
      img: "https://i.ibb.co/5h2PBTtk/image.png",
      link: "https://mern-e-commerce-user-frontend.vercel.app/",
      desc: "A full-stack E-commerce Seller built with MERN stack.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS"], // ✅ new
    },
    {
      id: 2,
      title: "Snipix Link Shortener",
      img: "https://i.ibb.co/8nqdjFsY/Whats-App-Image-2025-08-31-at-13-48-28-e8130813.jpg",
      link: "https://www.snipix.tech/",
      desc: "Transform long, complex URLs into short, memorable links with our powerful shortening technology. QR Code Generation. It's not a project it a Live SaaS",
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
    {
      id: 2,
      title: "Foodi Restaurant Website",
      img: "https://i.ibb.co/hJqkDn35/image.png",
      link: "https://foodsite-by-sana.free.nf/",
      desc: "A modern and fully responsive restaurant website built using WordPress and Elementor.",
      tech: ["WordPress", "Elementor", "Responsive Design"], // Added Responsive Design tag
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

  // SVG Components for Code, Globe, and External Link
  const CodeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  );

  const GlobeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
  );

  const ExternalLinkIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
  );

  const renderProjectCard = (project) => (
    <motion.div
      key={project.id}
      variants={cardAnimation}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03 }} // Reduced scale slightly for smoothness
      transition={{ duration: 0.4 }} // Increased duration slightly
      className={`
        relative overflow-hidden rounded-2xl transition-all duration-400 ease-in-out
        bg-slate-800/60 backdrop-blur-sm border border-slate-700/50
        
        ${project.special
          // Enhanced shadow for the special SaaS project
          ? "shadow-[0_0_30px_5px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_10px_rgba(236,72,153,0.7)]"
          : "shadow-xl shadow-slate-950/70 hover:shadow-purple-500/30"
        }
      `}
    >
      {/* Image Container - Ensure images remain */}
      <div className="relative overflow-hidden w-full h-64">
        <img
          src={project.img}
          alt={project.title}
          // The image scaling effect is kept and looks great!
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          // In React, use 'onError' (camelCase) instead of 'onerror' (lowercase HTML)
          onError={(e) => {
            // Check if the placeholder image element exists (it's the next sibling)
            const placeholder = e.currentTarget.nextElementSibling;
            if (placeholder) {
              // Show the placeholder and hide the main image
              placeholder.style.opacity = 1;
              e.currentTarget.style.opacity = 0;
            }
          }}
        />
        {/* Placeholder image fallback in case the external URL fails (good practice) */}
        <img 
            src={`https://placehold.co/400x256/1e293b/94a3b8?text=Image+Loading...`} 
            alt="Placeholder" 
            className="absolute inset-0 w-full h-full object-cover p-10 opacity-0 transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
          {project.title}
        </h3>
        
        <p className="text-base text-gray-300">
          {project.desc.split(". ").map((sentence, index, array) => (
            <span key={index}>
              {/* Maintain the bold/pink highlighting logic for the last sentence */}
              {index === array.length - 1 && sentence.length > 0 ? (
                <strong className="font-semibold text-pink-400">
                  {sentence}
                </strong>
              ) : (
                <span className="text-gray-400">{sentence}. </span>
              )}
            </span>
          ))}
        </p>

        {/* Tech Tags - Enhanced Styling */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-slate-700 text-gray-200 font-medium border border-indigo-500/50 shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Button - Ensured button remains and is enhanced */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg transform hover:scale-[1.02] 
                     bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
        >
          Visit Website
          <ExternalLinkIcon className="ml-2 text-sm w-4 h-4" /> 
        </a>
      </div>
    </motion.div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-16 px-6 relative"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
        // MOBILE CHANGE: Main title size is responsive
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-tighter text-center"
      >
        My Work
      </motion.h2>

      {/* MERN Stack Projects Section */}
      <div className="w-full max-w-6xl mb-16">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          // MOBILE CHANGE: Subheading size is responsive
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 inline-flex items-center text-purple-400 border-b-2 border-pink-400/50 pb-1 px-2"
        >
          <CodeIcon className="inline-block mr-2 sm:mr-3 text-pink-400 text-xl sm:text-2xl w-6 h-6" /> MERN Stack Solutions
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-8">
          {mernProjects.map(renderProjectCard)}
        </div>
      </div>
      
      {/* Horizontal Divider */}
      <div className="w-full max-w-xs sm:max-w-lg h-[1px] bg-purple-500 opacity-30 my-8 sm:my-10 rounded-full"></div>

      {/* WordPress Projects Section */}
      <div className="w-full max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          // MOBILE CHANGE: Subheading size is responsive
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 inline-flex items-center text-purple-400 border-b-2 border-pink-400/50 pb-1 px-2"
        >
          <GlobeIcon className="inline-block mr-2 sm:mr-3 text-pink-400 text-xl sm:text-2xl w-6 h-6" /> WordPress & E-commerce
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-8">
          {wpProjects.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
