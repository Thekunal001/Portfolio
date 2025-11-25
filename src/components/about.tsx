"use client";

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            I'm an experienced QA Automation Engineer with a passion for building robust testing frameworks and ensuring software quality at scale. With expertise in Python, Selenium, Playwright, and modern testing methodologies, I've successfully delivered comprehensive automation solutions across multiple organizations.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            My approach combines technical excellence with strategic thinking, focusing on end-to-end testing, API testing, and security-focused quality assurance following OWASP Top 10 standards. I'm proficient in CI/CD pipeline integration, agile methodologies, and maintaining scalable test suites.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Throughout my career at Catalogus, Inuvest Technologies, and GoMechanic, I've driven quality initiatives that reduced bugs by 40% and improved release confidence through comprehensive automation strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Experience', value: '2.5+', desc: 'Years' },
            { label: 'Projects', value: '15+', desc: 'Completed' },
            { label: 'Tests', value: '1000+', desc: 'Automated' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-center text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm opacity-90">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;