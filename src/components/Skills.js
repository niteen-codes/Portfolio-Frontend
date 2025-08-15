import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { 
      name: "Java", 
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png", 
      description: "High-level, object-oriented programming language for enterprise applications",
      link: "https://www.java.com/",
      category: "Backend",
      level: 90,
      color: "from-red-500 to-orange-500"
    },
    { 
      name: "J2EE", 
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      description: "Platform for developing distributed, multitier architecture applications",
      link: "https://www.oracle.com/java/technologies/java-ee-glance.html",
      category: "Backend",
      level: 85,
      color: "from-red-600 to-pink-600"
    },
    { 
      name: "Hibernate", 
      logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      description: "ORM framework for Java, simplifying database interactions",
      link: "https://hibernate.org/",
      category: "Backend",
      level: 80,
      color: "from-amber-500 to-yellow-500"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      description: "Versatile programming language for interactive web applications",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      category: "Frontend",
      level: 95,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      name: "SQL", 
      logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
      description: "Language for managing and manipulating relational databases",
      link: "https://www.w3schools.com/sql/",
      category: "Database",
      level: 88,
      color: "from-blue-600 to-indigo-600"
    },
    { 
      name: "HTML", 
      logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      description: "Standard markup language for structuring web pages",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      category: "Frontend",
      level: 98,
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "CSS", 
      logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      description: "Style sheet language for designing web page layouts",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      category: "Frontend",
      level: 92,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Bootstrap", 
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      description: "Frontend framework for developing responsive websites",
      link: "https://getbootstrap.com/",
      category: "Frontend",
      level: 85,
      color: "from-purple-600 to-violet-600"
    },
    { 
      name: "SDLC", 
      logo: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
      description: "Software development lifecycle methodology and best practices",
      link: "https://www.tutorialspoint.com/sdlc",
      category: "Methodology",
      level: 82,
      color: "from-gray-600 to-slate-600"
    },
    { 
      name: "Spring Boot", 
      logo: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
      description: "Java framework for creating production-ready applications",
      link: "https://spring.io/projects/spring-boot",
      category: "Backend",
      level: 87,
      color: "from-green-600 to-emerald-600"
    },
    { 
      name: "React", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "JavaScript library for building modern user interfaces",
      link: "https://reactjs.org/",
      category: "Frontend",
      level: 90,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Methodology"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getCategoryColor = (category) => {
    const colors = {
      Frontend: "from-blue-500 to-cyan-500",
      Backend: "from-green-500 to-emerald-500",
      Database: "from-purple-500 to-violet-500",
      Methodology: "from-orange-500 to-red-500"
    };
    return colors[category] || "from-gray-500 to-slate-500";
  };

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
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 rounded-full text-sm font-medium mb-6 border border-blue-200/50 gradient-shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text-primary font-semibold">Technical Expertise</span>
            </motion.div>

            {/* Cover Image */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src="https://static.vecteezy.com/system/resources/previews/008/826/724/non_2x/programmer-developer-engineer-with-laptop-sitting-at-the-office-desk-holding-a-pen-while-coding-and-developing-concept-illustration-free-vector.jpg"
                alt="Skills Cover"
                className="w-64 h-64 object-contain rounded-2xl shadow-lg"
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
              Skills &{' '}
              <span className="text-gradient">Technologies</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              🚀 Mastering Technologies: Innovating, Building, and Enhancing Digital Solutions 💡
            </motion.p>

            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? "gradient-primary text-white shadow-lg gradient-shadow"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-md gradient-hover"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="section-padding skills-section" style={{
        backgroundColor: 'var(--bg-secondary)'
      }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="professional-card p-6 h-full relative hover-lift">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${skill.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Category Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(skill.category)} text-white text-xs font-medium rounded-full shadow-sm`}>
                        {skill.category}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-xs ${
                              i < Math.floor(skill.level / 20) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Skill Icon */}
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-16 h-16 object-contain"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300`} />
                      </motion.div>
                    </div>

                    {/* Skill Info */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {skill.description}
                      </p>
                    </div>

                    {/* Skill Level */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Proficiency</span>
                        <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <motion.a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-secondary text-sm py-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Learn More
                    </motion.a>
                  </div>
                </div>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to leverage these technologies for your next project? 
              Let's collaborate and create innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
                  Let's Work Together
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/projects" className="btn-secondary text-lg px-8 py-4">
                  View My Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
