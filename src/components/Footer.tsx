import React from 'react';
import { motion } from 'framer-motion';
import { navItems } from '../data/navItems';
import { socials } from '../data/socials';
import { Github, Linkedin, Twitter, Briefcase, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const handleNavClick = (path: string) => {
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-dark-200 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* About Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-2" />
              <h3 className="text-xl font-bold text-dark-300 dark:text-white">David.dev</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Fullstack Developer specializing in building exceptional digital experiences. Focused on creating responsive and user-friendly applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-dark-300 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-400 transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {getSocialIcon(social.icon)}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-dark-300 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(item.path)}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-dark-300 dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Lagos, Nigeria
              </li>
              <li>
                <a 
                  href="mailto:david.ojiyovwi@example.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  david.ojiyovwi@example.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+2341234567890" 
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  +234 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} David Eseoghene Ojiyovwi. All rights reserved.
          </p>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <p>Made with</p>
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
            <p>using React & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;