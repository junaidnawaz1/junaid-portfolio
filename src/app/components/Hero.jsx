"use client";

import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-slate-900 text-white px-6 py-12 md:py-0"
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
            words={["MERN Stack Developer", "WordPress Elementor Expert", "Freelancer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-gray-300 max-w-md mx-auto md:mx-0">
          I build modern web applications with React, Node.js, and WordPress. 
          Passionate about creating user-friendly designs and scalable solutions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
