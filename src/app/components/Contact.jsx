"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
   {
  id: 1,
  icon: <FaEnvelope />,
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=junaidmughal017786@gmail.com",
  label: "Email",
  color: "from-pink-500 to-red-500",
},

    {
      id: 2,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/junaidnawazworkspace", // your LinkedIn
      label: "LinkedIn",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      icon: <FaGithub />,
      link: "https://github.com/junaidnawaz1", // your GitHub
      label: "GitHub",
      color: "from-gray-700 to-black",
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      link: "https://wa.me/923278001312", // ✅ Correct WhatsApp link
      label: "WhatsApp",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center py-16 px-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"
      >
        📩 Contact Me
      </motion.h2>

      {/* Social Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {socialLinks.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-lg cursor-pointer bg-gradient-to-r ${item.color} text-white font-semibold hover:shadow-2xl transition`}
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <span>{item.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
