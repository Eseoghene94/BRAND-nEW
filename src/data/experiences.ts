import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Senior Fullstack Developer',
    company: 'Tech Innovators Inc.',
    duration: 'Jan 2022 - Present',
    description: [
      'Lead developer for the company\'s flagship e-commerce platform, resulting in a 40% increase in user engagement',
      'Architected and implemented a microservices-based backend using Node.js and Express',
      'Developed responsive frontend interfaces using Next.js, React, and Tailwind CSS',
      'Mentored junior developers and conducted code reviews to ensure code quality'
    ],
    skills: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Microservices', 'AWS'],
  },
  {
    id: '2',
    role: 'Fullstack Developer',
    company: 'Digital Solutions Ltd.',
    duration: 'Mar 2020 - Dec 2021',
    description: [
      'Designed and built a job matching platform that used AI to match candidates with job openings',
      'Implemented RESTful APIs using Node.js and Express with PostgreSQL database',
      'Created responsive and interactive UIs with React and Tailwind CSS',
      'Integrated third-party services for authentication, payment processing, and data analytics'
    ],
    skills: ['React', 'Node.js', 'Express', 'PostgreSQL', 'RESTful APIs', 'Docker'],
  },
  {
    id: '3',
    role: 'Frontend Developer',
    company: 'Web Creators Agency',
    duration: 'Jun 2018 - Feb 2020',
    description: [
      'Developed responsive websites and web applications for various clients',
      'Created interactive UIs with React and implemented state management with Redux',
      'Collaborated with designers to transform wireframes and mockups into functional websites',
      'Optimized web applications for maximum speed and scalability'
    ],
    skills: ['React', 'Redux', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    id: '4',
    role: 'Petroleum Engineer',
    company: 'Energy Corp.',
    duration: 'Aug 2015 - May 2018',
    description: [
      'Analyzed drilling data and created technical reports for management',
      'Developed Excel tools to automate routine calculations',
      'Collaborated with cross-functional teams to optimize drilling operations',
      'Transitioned to software development by creating internal tools for data analysis'
    ],
    skills: ['Data Analysis', 'Technical Reporting', 'Team Collaboration', 'Problem Solving'],
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Lagos',
    degree: 'B.Eng in Petroleum Engineering',
    duration: '2011 - 2015',
    description: 'Graduated with First Class Honors. Specialized in Reservoir Engineering and Simulation.'
  },
  {
    id: '2',
    institution: 'Coursera & Udemy',
    degree: 'Web Development Bootcamp Certifications',
    duration: '2017 - 2018',
    description: 'Completed multiple comprehensive web development courses focusing on modern JavaScript frameworks and backend technologies.'
  },
];