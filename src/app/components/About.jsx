"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        ".about-title",
        { opacity: 0, y: -60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Paragraphs flowing effect
      gsap.fromTo(
        textRef.current.querySelectorAll("p"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards animation with z-axis scale
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.25,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen relative flex flex-col items-center justify-center py-24 px-6 text-white overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-20 animated-bg"></div>

      {/* Floating Bubbles */}
      <div className="bubbles-container -z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* Title */}
      <h2 className="about-title text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
        Who is Junaid?
      </h2>

      {/* Content */}
      <div
        ref={textRef}
        className="max-w-4xl text-center leading-relaxed text-lg text-gray-200 space-y-6 bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-10 border border-slate-700/50"
      >
        <p>
          Hi, I'm <span className="text-purple-400 font-semibold">Junaid</span>, a{" "}
          <span className="text-pink-400 font-semibold">MERN Stack & WordPress Developer</span> with
          a passion for building impactful digital solutions.
        </p>
        <p>
          My expertise lies in{" "}
          <span className="text-purple-400 font-semibold">
            React.js, Next.js, Node.js, Express.js, and MongoDB
          </span>
          , enabling me to build full-stack applications that perform and scale.
        </p>
        <p>
          I’m the creator of <span className="text-purple-400 font-semibold">Snipix</span>, a SaaS
          link shortener with authentication, analytics, and a great user experience.
        </p>
        <p>
          Alongside SaaS, I craft modern, responsive{" "}
          <span className="text-pink-400 font-semibold">WordPress websites</span> using Elementor
          that empower brands and businesses.
        </p>
      </div>

      {/* Focus Points */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 max-w-5xl w-full">
        {[
          {
            icon: <FaCode className="text-5xl text-purple-400 mb-4" />,
            title: "Clean Code & Performance",
            desc: "Writing scalable and maintainable code for long-term success.",
          },
          {
            icon: <FaPaintBrush className="text-5xl text-pink-400 mb-4" />,
            title: "Attractive Design",
            desc: "Crafting modern, responsive, and user-friendly UI/UX.",
          },
          {
            icon: <FaRocket className="text-5xl text-cyan-400 mb-4" />,
            title: "Scalable Solutions",
            desc: "Building robust applications ready to grow with your business.",
          },
        ].map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="flex flex-col items-center bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-slate-700/40 hover:-translate-y-2 transition-all duration-500"
          >
            {card.icon}
            <h3 className="font-bold text-xl mb-2">{card.title}</h3>
            <p className="text-gray-400 text-base text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
