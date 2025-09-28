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



  const aboutContent = (

    <div className="text-gray-200 space-y-6 leading-relaxed">

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

        , enabling me to build full-stack applications that perform and scale. I prioritize modern, clean, and well-documented code.

      </p>

      <p>

        I’m the creator of <span className="text-purple-400 font-semibold">Snipix</span>, a SaaS

        link shortener with authentication, analytics, and a great user experience. This project pushed me to master optimization and secure deployment practices.

      </p>

      <p>

        Alongside SaaS development, I craft modern, responsive{" "}

        <span className="text-pink-400 font-semibold">WordPress websites</span> using Elementor

        that empower brands and businesses with powerful, custom designs and e-commerce capabilities.

      </p>

      <p>

        I am dedicated to continuous learning and applying new technologies like GSAP and complex UI effects to deliver truly unique user experiences. Let's build something exceptional together!

      </p>



      {/* Focus Points - Moved inside the scrollable content */}

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

            ref={(el) => (cardsRef.current[i] = el)}

            className="flex flex-col items-start bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-slate-700/40 hover:-translate-y-1 transition-all duration-500"

          >

            {card.icon}

            <h3 className="font-bold text-2xl mb-2">{card.title}</h3>

            <p className="text-gray-400 text-base">{card.desc}</p>

          </div>

        ))}

      </div>

    </div>

  );



  useEffect(() => {

    const ctx = gsap.context(() => {

      

      // Pinning the container for the split-screen effect

      if (pinContainerRef.current) {

        ScrollTrigger.create({

          trigger: pinContainerRef.current,

          start: "top top",

          end: "bottom bottom", 

          pin: true, // This pins the entire container

          pinSpacing: false, // Prevents extra space after pinning

          // markers: true, // Uncomment for debugging

        });

      }



      // Title animation (will now run on content scroll)

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

      

      // Content fading in as it enters the view

      gsap.utils.toArray(scrollContentRef.current.children).forEach((child, index) => {

        gsap.fromTo(child, 

          { opacity: 0, y: 50 }, 

          { 

            opacity: 1, y: 0, duration: 1, ease: "power2.out",

            scrollTrigger: {

              trigger: child,

              start: "top 90%",

              end: "bottom 80%",

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

        /* --- Bubble Animation Styling --- */

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

        

        /* --- Gradient Background Styling --- */

        .animated-bg {

            background: linear-gradient(-45deg, #6a00f4, #2400ff, #00d4ff, #ff00d4);

            background-size: 400% 400%;

            animation: gradientMove 12s ease infinite;

        }

        @keyframes gradientMove {

            0% { background-position: 0% 50%; }

            50% { background-position: 100% 50%; }

            100% { background-position: 0% 50%; }

        }

        

        /* --- Pinning Styles (For better mobile/desktop handling) --- */

        /* Ensure the pin-container takes up necessary height on mobile */

        #about-pin-container {

            min-height: 100vh; /* Minimum height for pinning */

        }

        @media (min-width: 768px) {

            /* On desktop, the container needs extra height to allow scrolling of the right content */

            #about-pin-container {

                min-height: 250vh; /* Adjust this to control scroll length */

            }

        }

      `}</style>

      

      <section

        id="about"

        ref={sectionRef}

        className="relative w-full text-white overflow-hidden bg-slate-900"

      >

        {/* Gradient Background */}

        <div className="absolute inset-0 -z-20 animated-bg"></div>



        {/* Floating Bubbles */}

        <div className="bubbles-container -z-10">

          {Array.from({ length: 12 }).map((_, i) => (

            <span key={i} className="bubble"></span>

          ))}

        </div>



        {/* Outer container for Pinning */}

        <div id="about-pin-container" ref={pinContainerRef} className="pt-24 md:pt-40">

            

            {/* Split Layout Container */}

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row min-h-[100vh] px-6">

                

                {/* 1. Left Fixed Column (The "About Junaid" Title) */}

                <div className="md:w-1/3 flex justify-center items-start md:items-center md:h-screen sticky top-0 md:sticky md:top-0 py-8 md:py-0">

                    <h2 className="about-title text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center md:text-left md:sticky md:top-1/2 md:transform md:-translate-y-1/2">

                        About Junaid

                    </h2>

                </div>



                {/* 2. Right Scrollable Content Column */}

                <div 

                    ref={scrollContentRef} 

                    // On desktop, this column controls the overall scroll height

                    className="md:w-2/3 md:ml-10 py-10 md:py-0 space-y-12 md:space-y-20 flex flex-col justify-center items-center md:items-start"

                >

                    {/* The content is repeated multiple times to ensure the right column is taller than the viewport, enabling the scroll and pin effect */}

                    <div className="bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">

                        <h3 className="text-3xl font-bold text-pink-400 mb-4">MERN Expertise</h3>

                        {aboutContent}

                    </div>

                    

                    <div className="bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">

                        <h3 className="text-3xl font-bold text-pink-400 mb-4">SaaS & Beyond</h3>

                        {aboutContent}

                    </div>

                    

                    <div className="bg-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 sm:p-10 border border-slate-700/50">

                        <h3 className="text-3xl font-bold text-pink-400 mb-4">Commitment</h3>

                        {aboutContent}

                    </div>



                </div>

            </div>

        </div>

      </section>

    </>

  );

};



export default About;
