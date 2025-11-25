"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Automation Suite',
      description: 'Comprehensive end-to-end test automation framework for e-commerce platform covering checkout, payment, and user workflows.',
      tech: ['Selenium', 'Python', 'Pytest', 'Jenkins'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🧪',
    },
    {
      title: 'API Testing Framework',
      description: 'Robust REST API testing framework with extensive coverage for microservices, including security and performance testing.',
      tech: ['Postman', 'Python', 'Requests', 'API Testing'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🔗',
    },
    {
      title: 'Mobile App Automation',
      description: 'Mobile application automation framework using Playwright for cross-browser testing and device compatibility validation.',
      tech: ['Playwright', 'JavaScript', 'BDD', 'Cucumber'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '📱',
    },
    {
      title: 'CI/CD Pipeline Integration',
      description: 'Automated testing pipeline integrated with Jenkins, enabling continuous deployment and quality assurance.',
      tech: ['Jenkins', 'Git', 'Docker', 'Python'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '⚙️',
    },
    {
      title: 'Security Testing Toolkit',
      description: 'OWASP Top 10 compliant security testing toolkit for identifying vulnerabilities and security flaws.',
      tech: ['OWASP', 'Python', 'Security Testing', 'Burp Suite'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🔒',
    },
    {
      title: 'Performance Test Suite',
      description: 'Load and performance testing suite for validating system behavior under stress conditions.',
      tech: ['JMeter', 'Python', 'Performance Testing', 'Analytics'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '⚡',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 justify-center bg-slate-900 dark:bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 flex-1 justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} /> View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;