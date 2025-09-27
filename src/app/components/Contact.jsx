"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaEnvelope />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=junaidmughal017786@gmail.com",
      label: "Email",
      color: "from-pink-500 to-red-500",
      hoverShadow: "hover:shadow-pink-500/80", 
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/junaidnawazworkspace",
      label: "LinkedIn",
      color: "from-blue-500 to-cyan-500",
      hoverShadow: "hover:shadow-blue-500/80", 
    },
    {
      id: 3,
      icon: <FaGithub />,
      link: "https://github.com/junaidnawaz1",
      label: "GitHub",
      color: "from-gray-700 to-black",
      hoverShadow: "hover:shadow-gray-900/90", 
    },
    {
      id: 4,
      icon: <FaWhatsapp />,
      link: "https://wa.me/923278001312?text=Hi%20Junaid,%20I%20found%20your%20portfolio%20and%20want%20to%20connect!",
      label: "WhatsApp",
      color: "from-green-500 to-emerald-600",
      hoverShadow: "hover:shadow-green-500/80", 
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      ".contact-title",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        ".contact-intro",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        ".social-link-card",
        {
          y: 50,
          scale: 0.9,
          opacity: 0,
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.8,
          stagger: 0.2,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center py-24 px-6 relative"
    >
      {/* Title */}
      <h2 className="contact-title text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 tracking-tighter">
        Let's Connect
      </h2>

      {/* Introductory Text */}
      <p className="contact-intro text-lg text-gray-400 max-w-2xl text-center mb-16">
        Whether you have a project idea, a collaboration offer, or just want to say hi,
        feel free to reach out. I'm always open to discussing new opportunities.
      </p>

      {/* Social Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {socialLinks.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link-card flex flex-col items-center justify-center p-8 rounded-2xl cursor-pointer bg-gradient-to-r ${item.color} text-white font-semibold 
                       transition-all duration-300 transform 
                       shadow-lg hover:scale-[1.05] hover:brightness-110 ${item.hoverShadow}`}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <span className="text-xl font-bold">{item.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
