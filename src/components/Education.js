import React from "react";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, 
  FaBookOpen, FaCertificate, FaBuilding, FaAward, FaMedal
} from "react-icons/fa"; 
import EducationCover from '../assets/EducationCover.svg';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      shortDegree: "MCA",
      institution: "Audyogik Sikshan Mandal's Institute of Management & Computer Studies",
      location: "Thane, Maharashtra",
      university: "University of Mumbai",
      year: "2021 - 2023",
      grade: "First Class",
      description:
        "Comprehensive postgraduate program focusing on advanced computer science concepts, application development, software engineering, and modern programming paradigms.",
      highlights: [
        "Advanced Software Engineering",
        "Database Management Systems",
        "Web Technologies & Frameworks",
        "Data Structures & Algorithms"
      ]
    },
    {
      degree: "Bachelor of Science in Information Technology",
      shortDegree: "B.Sc. IT",
      institution: "G.R. Patil College of Arts, Science, Commerce and B.M.S",
      location: "Dombivli, Maharashtra",
      university: "University of Mumbai",
      year: "2016 - 2019",
      grade: "First Class",
      description:
        "Undergraduate program covering fundamental IT concepts including software development, database systems, networking, and web technologies with hands-on practical experience.",
      highlights: [
        "Programming Fundamentals",
        "Database Systems",
        "Network Administration",
        "Web Development"
      ]
    },
  ];

  const certificationsData = [
    {
      title: "Java Full Stack Development",
      institution: "JSpiders",
      location: "Thane, Maharashtra",
      duration: "Aug 2023 - May 2024",
      type: "Professional Certification",
      description:
        "Comprehensive full-stack development program covering Java ecosystem, Spring Boot, Hibernate, REST APIs, React.js, and modern database management techniques.",
      skills: ["Java", "Spring Boot", "Hibernate", "React.js", "REST APIs", "MySQL"]
    },
    {
      title: "Cloud Computing",
      institution: "National Programme on Technology Enhanced Learning (NPTEL)",
      location: "Online",
      duration: "Mar 2023 - May 2023",
      type: "Academic Certification",
      description:
        "In-depth study of cloud computing fundamentals, service models, deployment strategies, and hands-on experience with major cloud platforms.",
      skills: ["AWS", "Cloud Architecture", "Virtualization", "Distributed Systems"]
    },
  ];

  return (
    <section className="section-padding education-section text-white" style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
      color: 'white'
    }}>
      <div className="container-custom">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <motion.img
              src={EducationCover}
              alt="Education Cover"
              className="w-64 h-64 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & Certifications
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaGraduationCap className="text-blue-400" />
            Academic Qualifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center gradient-shadow">
                        <FaGraduationCap className="text-white text-xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{edu.shortDegree}</h4>
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-300 text-sm rounded-full border border-green-400/30">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-2">{edu.degree}</h3>
                  </div>
                </div>

                {/* Institution Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaSchool className="text-blue-400" />
                    <div>
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-400">{edu.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaUniversity className="text-blue-400" />
                    <span>{edu.university}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaCalendarAlt className="text-blue-400" />
                    <span>{edu.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div>
                  <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <FaBookOpen className="text-blue-400" />
                    Key Subjects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaCertificate className="text-yellow-400" />
            Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center gradient-shadow">
                        <FaAward className="text-white text-xl" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  </div>
                </div>

                {/* Institution Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaBuilding className="text-yellow-400" />
                    <div>
                      <p className="font-medium">{cert.institution}</p>
                      <p className="text-sm text-gray-400">{cert.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <FaCalendarAlt className="text-yellow-400" />
                    <span>{cert.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <FaMedal className="text-yellow-400" />
                    Skills Acquired
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to know more about my educational background or discuss collaboration opportunities?
          </p>
          <motion.a
            href="/contact"
            className="btn-primary text-lg px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
