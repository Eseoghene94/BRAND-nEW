import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { motion } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-space-100">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-primary-400"
        >
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-space-100 text-white">
        {/* Stars background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="star"
              data-random-width={Math.random() * 3 + 1}
              data-random-height={Math.random() * 3 + 1}
              data-random-top={Math.random() * 100}
              data-random-left={Math.random() * 100}
            />
          ))}
        </div>

        <Navbar />
        <main className="relative">
          <section id="home">
            <Hero />
          </section>
          <section id="about" className="py-20">
            <About />
          </section>
          <section id="skills" className="py-20 bg-space-200">
            <Skills />
          </section>
          <section id="projects" className="py-20">
            <Projects />
          </section>
          <section id="resume" className="py-20 bg-space-200">
            <Resume />
          </section>
          <section id="contact" className="py-20">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
