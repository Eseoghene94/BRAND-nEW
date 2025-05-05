import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Code, Server, Layout } from "lucide-react";
import Tilt from "react-parallax-tilt";

const Hero: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Shooting star animation
  useEffect(() => {
    const createShootingStar = () => {
      if (!containerRef.current) return;

      const star = document.createElement("div");
      star.className =
        "absolute w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]";
      const startX = Math.random() * 100;
      const startY = Math.random() * 20;
      const endX = startX + (Math.random() * 40 - 20);
      const endY = startY + 50 + Math.random() * 30;

      star.style.left = `${startX}%`;
      star.style.top = `${startY}%`;

      containerRef.current.appendChild(star);

      const duration = 0.5 + Math.random() * 1.5;

      star.animate(
        [
          { transform: "translate(0, 0) scale(1)", opacity: 1 },
          {
            transform: `translate(${endX - startX}vw, ${
              endY - startY
            }vh) scale(${0.2 + Math.random() * 0.8})`,
            opacity: 0,
          },
        ],
        {
          duration: duration * 1000,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        }
      );

      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };

    const starInterval = setInterval(createShootingStar, 800);
    return () => clearInterval(starInterval);
  }, []);

  // Text animation
  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    };
    sequence();
  }, [controls]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex items-center bg-black"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
        <motion.div
          className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-yellow-500/5 to-yellow-600/5 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 z-10 pt-16 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text section */}
          <motion.div
            className="lg:w-3/5 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
          >
            <motion.p
              className="text-yellow-400 font-medium mb-4 text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-yellow-400">David</span> Eseoghene Ojiyovwi
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Senior{" "}
              <span className="text-yellow-400">Fullstack Developer</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              With over a decade of experience crafting{" "}
              <span className="text-yellow-400 font-medium">
                exceptional digital experiences
              </span>
              . Specializing in building innovative, scalable web applications
              with cutting-edge technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-500/40"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(234, 179, 8, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Redesigned tech cards */}

          <motion.div
            className="lg:w-2/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            ref={scrollRef}
          >
            {[
              {
                icon: <Code size={32} />,
                label: "Frontend",
                color: "from-pink-500 to-yellow-500",
              },
              {
                icon: <Server size={32} />,
                label: "Backend",
                color: "from-purple-600 to-blue-500",
              },
              {
                icon: <Layout size={32} />,
                label: "UI/UX",
                color: "from-green-400 to-teal-500",
              },
            ].map(({ icon, label, color }, i) => (
              <Tilt
                key={i}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable
                glareColor="#ffffff22"
              >
                <motion.div
                  className={`group bg-gradient-to-br ${color} p-[2px] rounded-xl shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-black rounded-xl p-6 flex flex-col items-center text-center h-full hover:bg-opacity-90 transition duration-500">
                    <div className="text-yellow-400 group-hover:animate-pulse">
                      {icon}
                    </div>
                    <h3 className="text-white text-xl font-semibold mt-4">
                      {label}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2">
                      {label === "Frontend"
                        ? "React, Next.js, Tailwind, TypeScript"
                        : label === "Backend"
                        ? "Node.js, Django, PostgreSQL"
                        : "Figma, Framer Motion, ShadCN/UI"}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
