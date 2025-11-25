"use client";

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior QA Automation Engineer',
      company: 'Catalogus',
      period: 'Jan 2025 – Present',
      description: 'Lead end-to-end QA initiatives, authored comprehensive test plans and checklists, built robust automation suites using Python/Selenium/Playwright, established Jenkins CI pipeline, and performed white-box and black-box testing.',
      skills: ['Python', 'Selenium', 'Playwright', 'Jenkins', 'OWASP Top 10'],
    },
    {
      title: 'QA Automation Engineer',
      company: 'Inuvest Technologies',
      period: 'Jan 2023 – Dec 2024',
      description: 'Designed and executed manual test cases, automated testing workflows using Selenium, Python, and Pytest, performed sanity, regression, and E2E testing, reported bugs with detailed steps, and maintained scalable test suites.',
      skills: ['Selenium', 'Python', 'Pytest', 'API Testing', 'JIRA'],
    },
    {
      title: 'QA Engineer',
      company: 'GoMechanic',
      period: 'Sept 2022 – Jan 2023',
      description: 'Performed comprehensive manual testing, designed test cases for various features, executed sanity and regression testing cycles, and ensured product quality across releases.',
      skills: ['Manual Testing', 'Test Case Design', 'JIRA', 'Postman'],
    },
  ];

  const education = [
    {
      title: 'Bachelor of Science',
      institution: 'Delhi University',
      period: '2018 – 2021',
      description: 'Completed comprehensive coursework in computer science fundamentals, data structures, and software development.',
    },
    {
      title: 'Senior Secondary (12th)',
      institution: 'CBSE Board',
      period: '2016 – 2018',
      description: 'Completed high school education with focus on science and mathematics.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <Briefcase className="text-blue-600" /> Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="text-purple-600" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-600"
              >
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.title}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">{edu.institution}</p>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">{edu.description}</p>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;