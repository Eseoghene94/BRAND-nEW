"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
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

  const displayedProjects = showAll
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <div className="container mx-auto px-6 py-2">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-4">
            My{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-yellow-600 dark:bg-yellow-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 dark:text-gray-300">
            Showcasing my best work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More/Less Button */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? "Show Less" : "View All Projects"}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
