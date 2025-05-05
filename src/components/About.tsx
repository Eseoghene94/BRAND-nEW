"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Code,
} from "lucide-react";
import { experiences, education } from "../data/experiences";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-3 tracking-tight">
            About{" "}
            <span className="text-yellow-600 dark:text-yellow-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-600 dark:bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-400 dark:text-white max-w-2xl mx-auto">
            From Petroleum Engineering to Fullstack Wizardry — here's a glimpse
            of my journey.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Personal Info Card */}
          <motion.div variants={itemVariants} className="col-span-1">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
                Personal Info
              </h3>
              <ul className="space-y-5 text-sm">
                {[
                  {
                    icon: <Calendar className="w-5 h-5" />,
                    label: "Experience",
                    value: "3+ Years",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Location",
                    value: "Lagos, Nigeria",
                  },
                  {
                    icon: <Award className="w-5 h-5" />,
                    label: "Education",
                    value: "B.Eng Petroleum Engineering",
                  },
                  {
                    icon: <Code className="w-5 h-5" />,
                    label: "Interests",
                    value: "Web Dev, AI, Open Source",
                  },
                ].map(({ icon, label, value }, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mt-1 text-yellow-600 dark:text-yellow-400 mr-3">
                      {icon}
                    </span>
                    <div>
                      <p className="font-medium text-black dark:text-white">
                        {label}
                      </p>
                      <p className="text-gray-800 dark:text-gray-300">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Journey Card */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-5 text-black dark:text-white">
                My Journey
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                I began in Petroleum Engineering, automating complex engineering
                tasks. This sparked my love for programming. Over time, I
                transitioned into fullstack development, mastering both frontend
                polish and backend architecture to build impactful digital
                experiences.
              </p>

              <div className="relative border-l-4 border-yellow-600 dark:border-yellow-400 pl-6 ml-2 space-y-10">
                {/* Work Experience */}
                <div>
                  <h4 className="flex items-center text-lg font-semibold text-black dark:text-white mb-4">
                    <Briefcase className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                    Work Experience
                  </h4>
                  <div className="space-y-6">
                    {experiences.slice(0, 2).map((exp) => (
                      <motion.div
                        key={exp.id}
                        whileHover={{ x: 5 }}
                        className="relative"
                      >
                        <span className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-yellow-600 dark:bg-yellow-400 shadow-md"></span>
                        <h5 className="text-md font-semibold text-black dark:text-white">
                          {exp.role}
                        </h5>
                        <div className="text-sm text-gray-800 dark:text-gray-400 mb-1">
                          {exp.company} • {exp.duration}
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-300">
                          {exp.description[0]}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="flex items-center text-lg font-semibold text-black dark:text-white mb-4">
                    <GraduationCap className="w-5 h-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                    Education
                  </h4>
                  <div className="space-y-6">
                    {education.map((edu) => (
                      <motion.div
                        key={edu.id}
                        whileHover={{ x: 5 }}
                        className="relative"
                      >
                        <span className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-yellow-600 dark:bg-yellow-400 shadow-md"></span>
                        <h5 className="text-md font-semibold text-black dark:text-white">
                          {edu.degree}
                        </h5>
                        <div className="text-sm text-gray-800 dark:text-gray-400 mb-1">
                          {edu.institution} • {edu.duration}
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-300">
                          {edu.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
