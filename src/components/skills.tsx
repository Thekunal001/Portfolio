"use client";

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'SQL'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Automation Frameworks',
      skills: ['Selenium WebDriver', 'Playwright', 'Pytest'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'API & Tools',
      skills: ['Postman', 'Requests', 'REST API', 'GraphQL'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['Jenkins', 'Git', 'GitHub', 'GitLab'],
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Development Tools',
      skills: ['VS Code', 'PyCharm', 'Postman', 'Docker'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Testing Types',
      skills: ['Sanity Testing', 'Regression Testing', 'E2E Testing', 'White-box Testing', 'Black-box Testing'],
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Project Management',
      skills: ['JIRA', 'Agile', 'Scrum', 'Test Planning'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      title: 'Security & Standards',
      skills: ['OWASP Top 10', 'Security Testing', 'Vulnerability Assessment'],
      color: 'from-cyan-500 to-cyan-600',
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
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
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-2 rounded-lg"
                  >
                    <span className="text-lg">✓</span>
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;