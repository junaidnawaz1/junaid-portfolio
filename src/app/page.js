import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";


export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* Skills Section */}
      <Skills/>  
      {/* Projects Section */}
      <About />

      <Projects/>  
        {/* contact  */}
        <Contact/>
        {/* Footer */}
        <Footer/>
    </main>
  );
}
