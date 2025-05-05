import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { navItems } from "../data/navItems";
import { Menu, X, Moon, Sun, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuClick = (path: string) => {
    const el = document.getElementById(path);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navbarClasses = `
    fixed w-full z-50 transition-all duration-300
    ${
      scrolled
        ? "backdrop-blur-md bg-white/70 dark:bg-black/50 shadow-md"
        : "bg-transparent"
    }
  `;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-yellow-800 dark:text-yellow-100">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="flex items-center space-x-2">
            <Briefcase className="w-7 h-7 text-primary-600 dark:text-primary-400" />
            <span className="text-xl font-semibold tracking-tight">
              David.dev
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleMenuClick(item.path)}
                  className="text-base font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-transform duration-200 transform hover:-translate-y-1"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>

          <motion.button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-yellow-100 dark:bg-yellow-700 hover:scale-105 transition-transform"
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-yellow-900" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-3">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-yellow-900" />
            )}
          </motion.button>

          <button
            onClick={toggleMenu}
            className="text-yellow-700 dark:text-yellow-500"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-yellow-900 shadow-md"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleMenuClick(item.path)}
                    className="block w-full text-left py-2 px-3 text-yellow-800 dark:text-yellow-200 hover:text-primary-600 dark:hover:text-primary-400 rounded-md transition"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
