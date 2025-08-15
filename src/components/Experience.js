import React from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaExternalLinkAlt, FaCode, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoAngular, IoLogoJavascript } from "react-icons/io";
import { SiIonic, SiMysql, SiBootstrap } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ExperienceCover from '../assets/ExperienceCover.svg';

const Experience = () => {
  const experiences = [
    {
      title: "Trainee Software Engineer",
      company: "Igmite Solutions Pvt Ltd.",
      companyLink: "https://igmite.in/",
      duration: "Jan 2023 - Jun 2023",
      location: "Mumbai, India",
      type: "Internship",
      description:
        "Developed scalable web applications using modern technologies including Ionic, Angular, PHP, MySQL, and Bootstrap. Led the development of multiple features while ensuring seamless integration with backend systems and maintaining high code quality standards.",
      achievements: [
        "Built responsive web applications serving 1000+ users",
        "Implemented efficient database queries reducing load time by 40%",
        "Collaborated with cross-functional teams on 3 major projects",
        "Maintained 95% code coverage through comprehensive testing"
      ],
      technologies: [
        { name: "Ionic", icon: <SiIonic />, color: "from-blue-500 to-cyan-500" },
        { name: "Angular", icon: <IoLogoAngular />, color: "from-red-500 to-pink-500" },
        { name: "MySQL", icon: <SiMysql />, color: "from-blue-600 to-indigo-600" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "from-purple-600 to-violet-600" },
        { name: "JavaScript", icon: <IoLogoJavascript />, color: "from-yellow-500 to-orange-500" },
      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{
      background: 'var(--bg-primary)',
      backgroundImage: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%)'
    }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Professional Journey
            </motion.div>

            {/* Cover Image */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src={ExperienceCover}
                alt="Experience Cover"
                className="w-64 h-64 object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.h1
              className="heading-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Professional{' '}
              <span className="text-gradient">Experience</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              💼 From Corporate Giants to Creative Freelance Projects: A Journey Through 
              Internships, Challenges, Innovation and Community Involvements
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="section-padding experience-section" style={{
        backgroundColor: 'var(--bg-secondary)'
      }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full"></div>
                
                {/* Experience Card */}
                <motion.div
                  className="relative professional-card p-8 ml-20 group hover-lift"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute -left-12 top-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaBriefcase className="text-white text-sm" />
                  </motion.div>
                  
                  {/* Background Gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {exp.title}
                          </h3>
                          <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium rounded-full shadow-sm">
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-3 text-gray-600">
                            <FaBuilding className="text-blue-500" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <FaCalendarAlt className="text-purple-500" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <FaMapMarkerAlt className="text-red-500" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {exp.companyLink && (
                        <motion.a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary mt-4 lg:mt-0 group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="mr-2 group-hover:rotate-12 transition-transform" />
                          Visit Company
                        </motion.a>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <FaCode className="text-white text-sm" />
                          </div>
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              className="flex items-start gap-4 p-3 bg-white/50 rounded-xl border border-blue-100"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-4">
                        {exp.technologies.map((tech, i) => (
                          <motion.div
                            key={i}
                            className={`group relative overflow-hidden bg-gradient-to-r ${tech.color} p-4 rounded-xl text-white shadow-lg`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{tech.icon}</span>
                              <span className="font-semibold">{tech.name}</span>
                            </div>
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-secondary mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Interested in my professional journey or want to discuss opportunities? 
              Let's connect and explore how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
                  Get In Touch
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" className="btn-secondary text-lg px-8 py-4">
                  View My Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
