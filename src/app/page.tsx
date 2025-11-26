"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-white dark:bg-slate-950">
      {/* Hero */}
      <section id="hero" className="min-h-screen bg-slate-900 flex items-center justify-center px-4 pt-20 overflow-hidden relative">
        
        {/* 3D Grid Background - Subtle Diagonal */}
        <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
          {/* Animated Diagonal Grid */}
          <motion.div
            animate={{ 
              backgroundPosition: ["0px 0px", "50px 50px"]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 24%, rgba(59, 130, 246, 0.08) 25%, rgba(59, 130, 246, 0.08) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.08) 75%, rgba(59, 130, 246, 0.08) 76%, transparent 77%, transparent),
                linear-gradient(-45deg, transparent 24%, rgba(59, 130, 246, 0.08) 25%, rgba(59, 130, 246, 0.08) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.08) 75%, rgba(59, 130, 246, 0.08) 76%, transparent 77%, transparent)
              `,
              backgroundSize: "70px 70px",
              backgroundPosition: "0px 0px"
            }}
          />

          {/* Subtle Glow */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)"
          }} />

          {/* Vignette Effect */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)"
          }} />
        </div>

        {/* Content */}
        <motion.div
          className="text-center max-w-4xl relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Avatar */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.7)",
                  "0 0 0 10px rgba(59, 130, 246, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg"
            >
              KS
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Kunal Singla
          </motion.h1>

          {/* Designation with Animated Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 min-h-[60px]"
          >
            <motion.div className="text-3xl md:text-4xl font-bold">
              <span className="text-blue-600 dark:text-blue-400">
                {"QA Automation Engineer".split("").map((char, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.02 }}
                  >
                    {char}
                  </motion.span>
                ))}

              </span>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            🚀 Delivering reliable systems with automation, precision, and quality at scale
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-3 flex-wrap mb-8"
          >
            {["Python", "Selenium", "Playwright", "Jest"].map((tech, idx) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 dark:text-slate-400 mb-2">Scroll to explore</p>
            <svg className="w-6 h-6 mx-auto text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 space-y-4"
          >
            <p className="text-lg text-slate-700 dark:text-slate-300">
              I'm an experienced QA Automation Engineer with 2.5+ years of expertise in building robust testing frameworks and ensuring software quality at scale. With deep knowledge of Python, Selenium, Playwright, and modern testing methodologies, I've successfully delivered comprehensive automation solutions across multiple organizations.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              My approach combines technical excellence with strategic thinking, focusing on end-to-end testing, API testing, and security-focused quality assurance following OWASP Top 10 standards. I'm proficient in CI/CD pipeline integration, agile methodologies, and maintaining scalable test suites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-6">
            {[{
              role: "QA Automation Engineer",
              company: "Catalogus",
              period: "Jan 2025 – Present",
              desc: "Lead end-to-end QA initiatives, author test plans, build automation suites with Python/Selenium/Playwright, establish Jenkins CI pipelines",
              tech: ["Python", "Selenium", "Playwright", "Jenkins"],
            },
            {
              role: "QA Automation Engineer",
              company: "Inuvest Technologies",
              period: "Jan 2023 – Dec 2024",
              desc: "Designed test cases, automated workflows, performed sanity/regression/E2E testing, reported bugs with detailed steps",
              tech: ["Python", "Selenium", "Pytest", "JIRA"],
            },
            {
              role: "QA Engineer",
              company: "GoMechanic",
              period: "Sept 2022 – Jan 2023",
              desc: "Manual testing, test case design, sanity and regression testing cycles, quality assurance across releases",
              tech: ["Manual Testing", "JIRA", "Postman"],
            }].map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-blue-600 shadow-md"
              >
                <div className="flex justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-3">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Programming Languages", items: ["Python", "JavaScript", "Java"] },
              { title: "Test Automation", items: ["Selenium", "Playwright", "Jest", "Pytest"] },
              { title: "API Testing", items: ["Postman", "Requests", "REST APIs"] },
              { title: "DevOps", items: ["Jenkins", "Git", "GitHub", "JIRA"] },
              { title: "Tools", items: ["VS Code", "PyCharm", "Docker"] },
              { title: "Testing Types", items: ["E2E", "Regression", "Sanity", "Security"] },
            ].map((skill, idx) => (
               <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white shadow-lg"
              >
                <h3 className="font-bold mb-3">{skill.title}</h3>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-2 rounded">
                      <span>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[

              { title: "E-Commerce Automation", desc: "End-to-end test automation with Selenium & Playwright", tech: ["Selenium", "Python", "Pytest"] },
              { title: "API Testing Framework", desc: "REST API testing with Postman & security validation", tech: ["Postman", "Python", "OWASP"] },
              { title: "Mobile App QA", desc: "Cross-platform mobile automation testing", tech: ["Playwright", "Mobile", "Testing"] },
              { title: "CI/CD Pipeline", desc: "Jenkins integration for automated testing", tech: ["Jenkins", "Git", "Docker"] },
            ].map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{proj.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded text-sm hover:bg-slate-800">
                    <Github size={14} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    <ExternalLink size={14} /> View
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 space-y-6"
          >
            <div className="text-center">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Feel free to reach out via email or phone
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:singlakunal659@gmail.com"
                  className="block text-blue-600 dark:text-blue-400 hover:underline font-semibold text-lg"
                >
                  📧 singlakunal659@gmail.com
                </a>
                <a
                  href="tel:+919873603964"
                  className="block text-blue-600 dark:text-blue-400 hover:underline font-semibold text-lg"
                >
                  📱 +91 9873603964
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}