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
  const backgroundRef = useRef(null);

  const FocusPoints = (
    <div className="grid grid-cols-1 gap-10 mt-16 max-w-5xl w-full pt-10">
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
            // Removed cardsRef and its specific animation as it conflicts with the main flow animation
            className="flex flex-col items-start bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-slate-700/40 hover:-translate-y-1 transition-all duration-500"
          >
            {card.icon}
            <h3 className="font-bold text-2xl mb-2">{card.title}</h3>
            <p className="text-gray-400 text-base">{card.desc}</p>
          </div>
        ))}
      </div>
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Pinning the main container to enable the split-screen effect
      const pinTrigger = ScrollTrigger.create({
        trigger: pinContainerRef.current,
        start: "top top",
        end: "bottom bottom", 
        pin: true,
        pinSpacing: false,
        // markers: true,
      });

      // Parallax Background Animation (moves slower than the scroll)
      gsap.to(backgroundRef.current, {
          y: (pinContainerRef.current.offsetHeight * 0.2), // Move background 20% of the pinned container height
          ease: "none",
          scrollTrigger: {
              trigger: pinContainerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
          }
      });

      // Title animation (can optionally change color/scale during scroll if needed)
      gsap.fromTo(
        ".about-title",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
      
      // Content flowing/fading in as it enters the view
      // We target the direct children of the scrollContentRef (the three main boxes)
      gsap.utils.toArray(scrollContentRef.current.children).forEach((child) => {
        gsap.fromTo(child, 
          { opacity: 0, y: 100 }, 
          { 
            opacity: 1, y: 0, duration: 1, ease: "power2.out",
            scrollTrigger: {
              trigger: child,
              start: "top 90%", // Start animating when top of content block hits 90% of viewport
              end: "center 50%", 
              toggleActions: "play none none reverse", // Play animation once, reverse when scrolling up
              // markers: true,
            }
          }
        );
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        /* --- Bubble Animation Styling (Moved to component for self-contained use) --- */
        .bubbles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
        }
        .bubble {
            position: absolute;
            bottom: -150px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            animation: rise 15s linear infinite;
            filter: blur(2px); /* Soften the bubbles */
        }
        .bubble:nth-child(1) { left: 10%; width: 40px; height: 40px; animation-duration: 18s; }
        .bubble:nth-child(2) { left: 20%; width: 20px; height: 20px; animation-duration: 12s; }
        .bubble:nth-child(3) { left: 35%; width: 50px; height: 50px; animation-duration: 20s; }
        .bubble:nth-child(4) { left: 50%; width: 25px; height: 25px; animation-duration: 10s; }
        .bubble:nth-child(5) { left: 65%; width: 60px; height: 60px; animation-duration: 22s; }
        .bubble:nth-child(6) { left: 75%; width: 30px; height: 30px; animation-duration: 16s; }
        .bubble:nth-child(7) { left: 85%; width: 15px; height: 15px; animation-duration: 8s; }
        .bubble:nth-child(8) { left: 90%; width: 45px; height: 45px; animation-duration: 19s; }
        .bubble:nth-child(9) { left: 5%; width: 55px; height: 55px; animation-duration: 25s; }
        .bubble:nth-child(10) { left: 95%; width: 35px; height: 35px; animation-duration: 14s; }
        .bubble:nth-child(11) { left: 25%; width: 10px; height: 10px; animation-duration: 13s; }
        .bubble:nth-child(12) { left: 70%; width: 70px; height: 70px; animation-duration: 21s; }

        @keyframes rise {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            50% { opacity: 0.6; }
            100% { transform: translateY(-120vh) scale(1.2); opacity: 0; }
        }
        
        /* --- Pinning Styles (For better mobile/desktop handling) --- */
        /* IMPORTANT: Height must be much longer than 100vh to allow the content to flow */
        @media (min-width: 768px) {
            #about-pin-container {
                min-height: 350vh; /* Increased scroll length to make content flow clearly */
            }
        }
      `}</style>
      
      <section
        id="about"
        ref={sectionRef}
        className="relative w-full text-white overflow-hidden bg-slate-900"
      >
        {/* Animated Background Container (Parallax Target) */}
        <div ref={backgroundRef} className="absolute inset-0 -z-20 animated-bg">
            {/* The background will move slightly slower than the scroll */}
        </div>

        {/* Floating Bubbles */}
        <div className="bubbles-container -z-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="bubble"></span>
          ))}
        </div>

        {/* Outer container for Pinning (Trigger) */}
        <div id="about-pin-container" ref={pinContainerRef} className="pt-24 md:pt-40">
            
            {/* Split Layout Container */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[100vh] px-6">
                
                {/* 1. Left Fixed Column (The "About Junaid" Title) */}
                {/* Fixed in the center of the viewport when pinned */}
                <div className="md:w-1/3 flex justify-center items-start md:items-center md:h-screen py-8 md:py-0">
                    <h2 className="about-title text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center md:text-left md:sticky md:top-1/2 md:transform md:-translate-y-1/2">
                        About Junaid
                    </h2>
                </div>

                {/* 2. Right Scrollable Content Column (The Flowing Text) */}
                <div 
                    ref={scrollContentRef} 
                    className="md:w-2/3 md:ml-10 py-10 md:py-0 space-y-24 flex flex-col justify-start items-center md:items-start"
                >
                    
                    {/* Content Block 1: MERN Expertise */}
                    <div className="min-h-[70vh] w-full flex flex-col justify-center bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">
                        <h3 className="text-4xl font-bold text-pink-400 mb-6">MERN Stack Mastery</h3>
                        <p className="text-gray-200 text-lg space-y-6 leading-relaxed">
                            My expertise lies in{" "}
                            <span className="text-purple-400 font-semibold">
                                React.js, Next.js, Node.js, Express.js, and MongoDB
                            </span>
                            , enabling me to build full-stack applications that perform and scale. I prioritize modern, clean, and well-documented code.
                        </p>
                        {FocusPoints}
                    </div>
                    
                    {/* Content Block 2: SaaS & Beyond */}
                    <div className="min-h-[70vh] w-full flex flex-col justify-center bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">
                        <h3 className="text-4xl font-bold text-pink-400 mb-6">SaaS & WordPress Solutions</h3>
                        <p className="text-gray-200 text-lg space-y-6 leading-relaxed">
                            I’m the creator of <span className="text-purple-400 font-semibold">Snipix</span>, a SaaS
                            link shortener with authentication, analytics, and a great user experience. This project pushed me to master optimization and secure deployment practices. Alongside SaaS development, I craft modern, responsive{" "}
                            <span className="text-pink-400 font-semibold">WordPress websites</span> using Elementor
                            that empower brands and businesses with powerful, custom designs and e-commerce capabilities.
                        </p>
                    </div>
                    
                    {/* Content Block 3: Commitment */}
                    <div className="min-h-[70vh] w-full flex flex-col justify-center bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">
                        <h3 className="text-4xl font-bold text-pink-400 mb-6">Let's Build Together</h3>
                        <p className="text-gray-200 text-lg space-y-6 leading-relaxed">
                            I am dedicated to continuous learning and applying new technologies like GSAP and complex UI effects to deliver truly unique user experiences. My goal is to transform your vision into a high-performance, beautiful, and functional reality.
                        </p>
                        <p className="text-xl text-purple-400 font-semibold mt-6">
                            Ready to start a project? Let's connect!
                        </p>
                    </div>

                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
