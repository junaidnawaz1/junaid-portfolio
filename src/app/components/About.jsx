"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);
  const scrollContentRef = useRef(null);
  const cardsRef = useRef([]);

  const aboutContentBlock = (
    <div className="text-gray-200 space-y-6 leading-relaxed">
      <p>
        Hi, I'm <span className="text-purple-400 font-semibold">Junaid</span>, a{" "}
        <span className="text-pink-400 font-semibold">MERN Stack & WordPress Developer</span> with
        a passion for building impactful digital solutions. I prioritize modern, clean, and well-documented code in every project I undertake.
      </p>
      <p>
        My expertise lies in{" "}
        <span className="text-purple-400 font-semibold">
          React.js, Next.js, Node.js, Express.js, and MongoDB
        </span>
        , enabling me to build full-stack applications that perform and scale efficiently.
      </p>
      <p>
        I’m the creator of <span className="text-purple-400 font-semibold">Snipix</span>, a SaaS
        link shortener with authentication, analytics, and a great user experience. This project pushed me to master optimization and secure deployment practices in a real-world environment.
      </p>
      <p>
        Alongside SaaS development, I craft modern, responsive{" "}
        <span className="text-pink-400 font-semibold">WordPress websites</span> using Elementor
        that empower brands and businesses with powerful, custom designs and robust e-commerce capabilities. I believe in pixel-perfect design combined with solid performance.
      </p>

      {/* Focus Points are now inside the scroll content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
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
        ].map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-start bg-slate-800/60 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-slate-700/40"
          >
            {card.icon}
            <h3 className="font-bold text-xl mb-2 text-white">{card.title}</h3>
            <p className="text-gray-400 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PINNING: Pin the entire split-layout container for the duration of the right content scroll
      if (pinContainerRef.current) {
        ScrollTrigger.create({
          trigger: pinContainerRef.current,
          start: "top top",
          end: "bottom bottom", 
          pin: true,
          pinSpacing: false,
          // markers: true, // For debugging
        });
      }

      // 2. CONTENT REVEAL: Staggered reveal for the main content blocks as they scroll into view
      gsap.utils.toArray(".scroll-block").forEach((block) => {
        gsap.fromTo(
          block, 
          { opacity: 0, y: 100 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%", // Start animation when block enters bottom 15% of viewport
              end: "top 20%",
              toggleActions: "play none none reverse",
              // markers: true, // For debugging
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full text-white overflow-hidden bg-slate-900"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-20 animated-bg"></div>

      {/* Floating Bubbles - Now relies on global.css for styles */}
      <div className="bubbles-container -z-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="bubble"></span>
        ))}
      </div>

      {/* Outer container for Pinning. This container height dictates how long the title is fixed. */}
      <div 
        id="about-pin-container" 
        ref={pinContainerRef} 
        className="pt-20 md:pt-0"
        // On desktop, min-h-300vh ensures a long scroll. On mobile, it's just min-h-screen.
        style={{ minHeight: '100vh', '@media (min-width: 768px)': { minHeight: '300vh' } }}
      >
          
          {/* Split Layout Container */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-full">
              
              {/* 1. Left Fixed Column (The "About Junaid" Title) */}
              <div className="md:w-1/3 flex justify-center items-start md:items-center py-10 md:py-0 md:sticky md:top-0 h-auto md:h-screen">
                  <h2 className="about-title text-4xl sm:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center md:text-left transition duration-500">
                      About Junaid
                  </h2>
              </div>

              {/* 2. Right Scrollable Content Column */}
              <div 
                  ref={scrollContentRef} 
                  className="md:w-2/3 md:ml-12 py-10 md:py-40 space-y-20 md:space-y-40 flex flex-col items-center md:items-start"
              >
                  {/* Content Blocks - We need several large blocks to fill the scroll height */}
                  
                  {/* Block 1: MERN Stack Focus */}
                  <div className="scroll-block max-w-xl md:max-w-none bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">
                      <h3 className="text-3xl font-bold text-pink-400 mb-4">MERN Stack Mastery</h3>
                      {aboutContentBlock}
                  </div>
                  
                  {/* Block 2: SaaS & E-commerce */}
                  <div className="scroll-block max-w-xl md:max-w-none bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">
                      <h3 className="text-3xl font-bold text-purple-400 mb-4">SaaS & E-commerce Architect</h3>
                      <p className="text-gray-200">
                          My real-world experience building the <span className="text-cyan-400 font-semibold">Snipix</span> link shortener required deep dives into backend scalability, database optimization, and secure user authentication. This foundation allows me to architect robust, production-ready applications, whether it's a multi-vendor e-commerce platform or a custom B2B application.
                      </p>
                      <p className="text-gray-200 mt-4">
                          I bridge the gap between complex functionality and beautiful design, ensuring every product is fast, secure, and delightful to use.
                      </p>
                  </div>
                  
                  {/* Block 3: Philosophy & Future */}
                  <div className="scroll-block max-w-xl md:max-w-none bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">
                      <h3 className="text-3xl font-bold text-cyan-400 mb-4">My Development Philosophy</h3>
                      <p className="text-gray-200">
                          My goal is simple: to create memorable web experiences. By combining modern frameworks like Next.js with advanced libraries like GSAP, I ensure that your project doesn't just function—it stands out. I am constantly exploring new ways to enhance performance and user engagement.
                      </p>
                      <p className="text-gray-200 mt-4">
                          I believe that collaboration and clear communication are the keys to project success. Let's start a conversation about your next great idea.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default About;
