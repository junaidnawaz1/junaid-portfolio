"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    // Timeline for smooth staggered animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Image Animation: Scale, Opacity, and a subtle clip-path reveal for a modern look
    tl.fromTo(
      ".hero-img-container", // Target the container for the clip-path effect
      { scale: 0.9, opacity: 0, clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { scale: 1, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.4 }
    )
      // Staggered Text Animations with a tighter, faster-paced entrance
      .fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.7")
      .fromTo(".hero-subtitle", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.4")
      .fromTo(".hero-desc", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      // Buttons last
      .fromTo(".hero-buttons", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
  }, []);

  return (
    <section
      id="home"
      // Change: Switched from bg-slate-950 to bg-slate-900
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-slate-900 text-white px-6 pt-28 md:pt-0 relative overflow-hidden"
    >
      {/* Background Effect: Subtle radial gradient and a grid pattern for a tech feel */}
      {/* Change: Adjusted opacity of the overlay to maintain color consistency */}
      <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
      <div className="absolute inset-0 z-0 opacity-15" style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '25px 25px'
      }}></div>

      {/* Left Side - Profile Image */}
      <div className="flex justify-center md:w-1/2 mb-12 md:mb-0 z-10">
        <div className="hero-img-container rounded-full shadow-2xl shadow-purple-500/50">
          <img
            src="https://i.ibb.co/FLV89Hs6/Whats-Appme.jpg"
            alt="Junaid Profile"
            className="hero-img w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-purple-600 object-cover transform transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-center md:text-left z-10">
        <h1 className="hero-title text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4 tracking-tighter">
          Hi, I’m Junaid
        </h1>

        <h2 className="hero-subtitle text-xl md:text-3xl font-light mb-6 text-gray-200">
          A passionate{' '}
          <span className="font-semibold text-purple-400">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "WordPress Elementor Expert",
                "Freelancer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </span>
        </h2>

        <p className="hero-desc text-gray-400 max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
          I build modern, high-performance web applications with **React**, **Node.js**, and **WordPress**. Passionate about creating **user-friendly designs** and **scalable solutions**.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons flex flex-row gap-4 justify-center md:justify-start flex-wrap">
          {/* Download CV */}
          <a
            href="/Junaid_CV.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 shadow-xl shadow-purple-600/30 transform hover:scale-[1.05] hover:shadow-purple-600/50 border-2 border-transparent hover:border-white/20"
          >
            <FaDownload />
            Download CV
          </a>

          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/923278001312?text=Hi%20Junaid,%20I%20found%20your%20portfolio%20and%20want%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-all duration-300 shadow-xl shadow-green-500/30 transform hover:scale-[1.05] hover:shadow-green-500/50 border-2 border-transparent hover:border-white/20"
          >
            <FaWhatsapp />
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;