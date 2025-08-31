"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaEnvelope />,
      link: "mailto:junaidmughal017786@gmail.com",
      label: "Email",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/junaidnawazworkspace",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <FaGithub />,
      link: "https://github.com/junaidnawaz1",
      label: "GitHub",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      link: "https://wa.me/923278001312",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-slate-950 text-gray-400 py-8 px-6 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-purple-400 font-semibold">Junaid Nawaz</span>.  
          All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex gap-6 text-xl">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
