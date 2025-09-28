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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(backgroundRef.current, {
        y: (pinContainerRef.current.offsetHeight * 0.2),
        ease: "none",
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animate each content block on scroll
      gsap.utils.toArray(scrollContentRef.current.children).forEach((child) => {
        gsap.fromTo(
          child,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: child,
              start: "top 90%",
              end: "center 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
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
          filter: blur(2px);
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

        @media (min-width: 768px) {
          #about-pin-container {
            min-height: 350vh;
          }
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="relative w-full text-white overflow-hidden"
      >
        {/* Gradient Background */}
        <div ref={backgroundRef} className="absolute inset-0 -z-20 animated-bg"></div>

        {/* Floating Bubbles */}
        <div className="bubbles-container -z-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="bubble"></span>
          ))}
        </div>

        {/* Pinned Container */}
        <div id="about-pin-container" ref={pinContainerRef} className="pt-24 md:pt-40">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[100vh] px-6">
            {/* Left Fixed Title */}
            <div className="md:w-1/3 flex justify-center items-start md:items-center md:h-screen py-8 md:py-0">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center md:text-left md:sticky md:top-1/2 md:-translate-y-1/2">
                About Junaid
              </h2>
            </div>

            {/* Right Flowing Content */}
            <div
              ref={scrollContentRef}
              className="md:w-2/3 md:ml-10 py-10 md:py-0 space-y-24 flex flex-col justify-start items-center md:items-start"
            >
              {/* Text Block */}
              <div className="min-h-[70vh] w-full flex flex-col justify-center bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">
                <p>
                  Hi, I'm <span className="text-purple-400 font-semibold">Junaid</span>, a{" "}
                  <span className="text-pink-400 font-semibold">MERN Stack & WordPress Developer</span> with a passion for building impactful digital solutions.
                </p>
                <p className="mt-4">
                  My expertise lies in{" "}
                  <span className="text-purple-400 font-semibold">React.js, Next.js, Node.js, Express.js, and MongoDB</span>, enabling me to build full-stack applications that perform and scale.
                </p>
                <p className="mt-4">
                  I’m the creator of <span className="text-purple-400 font-semibold">Snipix</span>, a SaaS link shortener with authentication, analytics, and a great user experience.
                </p>
                <p className="mt-4">
                  Alongside SaaS, I craft modern, responsive{" "}
                  <span className="text-pink-400 font-semibold">WordPress websites</span> using Elementor that empower brands and businesses.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
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
                    className="flex flex-col items-start bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-slate-700/40 hover:-translate-y-1 transition-all duration-500"
                  >
                    {card.icon}
                    <h3 className="font-bold text-2xl mb-2">{card.title}</h3>
                    <p className="text-gray-400 text-base">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
