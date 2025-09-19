"use client";

import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-slate-900 text-white px-6 pt-28 md:pt-0" 
      // ↑ pt-28 pushes content below navbar on mobile
    >
      {/* Left Side - Profile Image */}
      <div className="flex justify-center md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://i.ibb.co/FLV89Hs6/Whats-Appme.jpg"
          alt="Junaid Profile"
          className="w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-purple-500 shadow-lg object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-500 mb-4">
          Hi, I’m Junaid
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          <Typewriter
            words={[
              "MERN Stack Developer",
              "WordPress Elementor Expert",
              "Freelancer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-300 max-w-md mx-auto md:mx-0 mb-6">
          I build modern web applications with React, Node.js, and WordPress.
          Passionate about creating user-friendly designs and scalable solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row gap-4 justify-center md:justify-start flex-wrap">
          {/* Download CV */}
          <a
            href="/Junaid_CV.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 transition-all duration-300 shadow-md transform hover:scale-105"
          >
            <FaDownload />
            Download CV
          </a>

          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/923278001312?text=Hi%20Junaid,%20I%20found%20your%20portfolio%20and%20want%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md transform hover:scale-105"
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
