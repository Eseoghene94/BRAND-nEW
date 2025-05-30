import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, payment processing, and admin dashboard. Built with Next.js, React, Node.js, and PostgreSQL.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe",
    ],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/eseoghene94/ecommerce",
    featured: true,
  },
  {
    id: "2",
    title: "Job Matching Platform",
    description:
      "A platform that matches job seekers with potential employers using AI algorithms. Features include resume parsing, job recommendations, and interview scheduling.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Express", "MongoDB", "TensorFlow.js"],
    liveUrl: "https://example.com/jobmatch",
    githubUrl: "https://github.com/eseoghene94/jobmatch",
    featured: true,
  },
  {
    id: "3",
    title: "Educational Website-Educare",
    description:
      "An interactive learning platform with course management, video lectures, quizzes, and progress tracking. Built with Django, React, and PostgreSQL.",
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Django", "React", "PostgreSQL", "AWS S3", "Redux"],
    liveUrl: "https://example.com/eduwebsite",
    githubUrl: "https://github.com/eseoghene94/edusite",
    featured: true,
  },
  {
    id: "4",
    title: "Stock Predictor",
    description:
      "A machine learning-based application that predicts stock market trends and provides investment recommendations. Features include real-time data visualization and alerts.",
    image:
      "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Python", "Django", "React", "TensorFlow", "D3.js"],
    liveUrl: "https://example.com/stockpredictor",
    githubUrl: "https://github.com/eseoghene94/stockpredictor",
    featured: true,
  },
  {
    id: "5",
    title: "Social Media Dashboard",
    description:
      "A comprehensive dashboard for managing multiple social media accounts with analytics, post scheduling, and engagement tracking.",
    image:
      "https://images.pexels.com/photos/5053739/pexels-photo-5053739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    liveUrl: "https://example.com/socialdashboard",
    githubUrl: "https://github.com/eseoghene94/socialdashboard",
    featured: false,
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description:
      "A mobile-responsive application for tracking fitness activities, diet plans, and health metrics with visualization of progress over time.",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    liveUrl: "https://example.com/fitnesstracker",
    githubUrl: "https://github.com/eseoghene94/fitnesstracker",
    featured: false,
  },
];
