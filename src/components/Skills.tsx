"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDjango,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobephotoshop,
  SiPython,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiDocker,
  SiJest,
  SiTestinglibrary,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  // SiVisualstudiocode, // Removed as it is not a valid export
  SiPostman,
} from "react-icons/si";
import { FaServer, FaDatabase, FaPaintBrush } from "react-icons/fa";
import { skills } from "../data/skills";

type SkillCategory = "all" | "frontend" | "backend" | "tools";

const iconComponents: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  django: SiDjango,
  tailwindcss: SiTailwindcss,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  photoshop: SiAdobephotoshop,
  python: SiPython,
  html5: SiHtml5,
  css3: SiCss3,
  redux: SiRedux,
  graphql: SiGraphql,
  firebase: SiFirebase,
  docker: SiDocker,
  jest: SiJest,
  testinglibrary: SiTestinglibrary,
  webpack: SiWebpack,
  babel: SiBabel,
  eslint: SiEslint,
  prettier: SiPrettier,
  // vscode: SiVisualstudiocode, // Removed as it is not a valid export
  postman: SiPostman,
  server: FaServer,
  database: FaDatabase,
  design: FaPaintBrush,
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("all");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getIconComponent = (iconName: string) => {
    const Icon = iconComponents[iconName.toLowerCase()] || FaPaintBrush;
    return <Icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />;
  };

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const tabs: SkillCategory[] = ["all", "frontend", "backend", "tools"];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 dark:text-white mb-4">
            My{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-yellow-500 dark:bg-yellow-400 rounded"></div>
          <p className="text-lg text-yellow-500 dark:text-gray-300">
            A comprehensive showcase of my technical expertise
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 md:gap-6 mb-12"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            const tabClass =
              tab === "tools"
                ? isActive
                  ? "bg-yellow-500 text-white"
                  : "bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-600"
                : isActive
                ? "bg-primary-600 text-white"
                : "bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-dark-400";

            return (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${tabClass}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name + index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-6 transition-all duration-300 border border-transparent hover:border-yellow-400 dark:hover:border-yellow-500"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">{getIconComponent(skill.icon)}</div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-black">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-800 dark:text-gray-900 capitalize">
                    {skill.category}
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-dark-300 rounded-full h-2.5 mb-2">
                <motion.div
                  className="bg-yellow-500 dark:bg-yellow-400 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-700 dark:text-gray-900">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-yellow-600 dark:text-blue-700 mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Django",
              "Tailwind CSS",
              "Framer Motion",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="py-2 px-4 bg-white dark:bg-dark-200 rounded-lg shadow-md border border-yellow-300 dark:border-yellow-600 text-black dark:text-black font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: Math.random() > 0.5 ? 6 : -6,
                  transition: { duration: 0.2 },
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
