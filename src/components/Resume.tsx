"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, Briefcase, GraduationCap, X } from "lucide-react";
import { experiences, education } from "../data/experiences";

const Resume: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleDownload = () => {
    // Replace with your actual PDF file path
    const pdfUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "David_Ojiyovwi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-6 py-2">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-4">
            My{" "}
            <span className="text-yellow-600 dark:text-yellow-400">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-600 dark:bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 dark:text-gray-300">
            Professional experience and qualifications
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-8"
        >
          {/* Experience Section */}
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center text-black dark:text-white">
                <Briefcase className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                Work Experience
              </h3>

              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-6 border-l-2 border-yellow-600 dark:border-yellow-400"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-yellow-600 dark:bg-yellow-400"></div>
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      {exp.role}
                    </h4>
                    <div className="flex items-center text-sm text-gray-800 dark:text-gray-400 mb-2">
                      <span>{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.duration}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                          +{exp.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center text-black dark:text-white">
                <GraduationCap className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                Education
              </h3>

              <div className="space-y-8">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative pl-6 border-l-2 border-yellow-600 dark:border-yellow-400"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-yellow-600 dark:bg-yellow-400"></div>
                    <h4 className="text-lg font-semibold text-black dark:text-white">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-sm text-gray-800 dark:text-gray-400 mb-2">
                      <span>{edu.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.duration}</span>
                    </div>
                    <p className="text-sm text-gray-800 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download Button */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Download Resume
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-6">
                Get a copy of my detailed resume to learn more about my
                experience, skills, and qualifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={openModal}
                  className="px-6 py-3 border-2 border-yellow-600 dark:border-yellow-400 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Resume</span>
                </motion.button>
                <motion.button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span>Download PDF</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-6 max-w-4xl w-full h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  title="Close"
                  className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-black dark:text-white" />
                </button>
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
                  David Eseoghene Ojiyovwi - Resume
                </h2>

                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <p className="text-gray-800 dark:text-gray-300">
                        Email: eseoghenedavid1@gmail.com
                      </p>
                      <p className="text-gray-800 dark:text-gray-300">
                        Phone: +234 123 456 7890
                      </p>
                      <p className="text-gray-800 dark:text-gray-300">
                        Location: Lagos, Nigeria
                      </p>
                      <p className="text-gray-800 dark:text-gray-300">
                        LinkedIn: /in/davidojiyovwi
                      </p>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      Professional Summary
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300">
                      Fullstack Developer with 7+ years of experience in
                      building responsive web applications using modern
                      JavaScript frameworks. Strong expertise in frontend
                      technologies like React, Next.js, and TypeScript, as well
                      as backend technologies such as Node.js, Express, Django,
                      and PostgreSQL. Passionate about creating intuitive user
                      experiences and robust architectural solutions.
                    </p>
                  </div>

                  {/* Work Experience */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                      Work Experience
                    </h3>
                    <div className="space-y-6">
                      {experiences.map((exp) => (
                        <div
                          key={exp.id}
                          className="border-l-2 border-yellow-600 dark:border-yellow-400 pl-4"
                        >
                          <h4 className="text-lg font-semibold text-black dark:text-white">
                            {exp.role}
                          </h4>
                          <div className="text-sm text-gray-800 dark:text-gray-400 mb-2">
                            {exp.company} | {exp.duration}
                          </div>
                          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-sm">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                      Education
                    </h3>
                    <div className="space-y-4">
                      {education.map((edu) => (
                        <div
                          key={edu.id}
                          className="border-l-2 border-yellow-600 dark:border-yellow-400 pl-4"
                        >
                          <h4 className="text-lg font-semibold text-black dark:text-white">
                            {edu.degree}
                          </h4>
                          <div className="text-sm text-gray-800 dark:text-gray-400 mb-2">
                            {edu.institution} | {edu.duration}
                          </div>
                          <p className="text-sm text-gray-800 dark:text-gray-300">
                            {edu.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "React",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                        "Node.js",
                        "Express",
                        "PostgreSQL",
                        "Django",
                        "REST APIs",
                        "GraphQL",
                        "Git",
                        "Docker",
                        "AWS",
                        "CI/CD",
                        "Agile Development",
                      ].map((skill, i) => (
                        <span
                          key={i}
                          className="text-sm px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Resume;
