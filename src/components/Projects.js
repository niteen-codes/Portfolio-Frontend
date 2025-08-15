import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaReact, FaJs, FaNodeJs, FaPython, FaJava, FaCss3, FaHtml5, FaDatabase, FaExternalLinkAlt, FaGithub, FaArrowRight, FaEye, FaCode } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiFlask, SiFirebase, SiRedux, SiMysql, SiBootstrap, SiTailwindcss, SiSpring } from 'react-icons/si';
import Travel from '../assets/Travel.jpg';
import Fashion from '../assets/fashion.jpeg';
import Sellwell from '../assets/SellWell.png';

const techIcons = {
    'React': { icon: <FaReact />, color: 'from-blue-500 to-cyan-500' },
    'JavaScript': { icon: <FaJs />, color: 'from-yellow-500 to-orange-500' },
    'Node.js': { icon: <FaNodeJs />, color: 'from-green-500 to-emerald-500' },
    'React Native': { icon: <FaReact />, color: 'from-blue-500 to-cyan-500' },
    'Firebase': { icon: <SiFirebase />, color: 'from-orange-500 to-red-500' },
    'Redux': { icon: <SiRedux />, color: 'from-purple-500 to-violet-500' },
    'Python': { icon: <FaPython />, color: 'from-blue-600 to-indigo-600' },
    'TensorFlow': { icon: <SiTensorflow />, color: 'from-orange-600 to-red-600' },
    'Keras': { icon: <SiKeras />, color: 'from-red-500 to-pink-500' },
    'Flask': { icon: <SiFlask />, color: 'from-gray-700 to-slate-700' },
    'Java': { icon: <FaJava />, color: 'from-red-600 to-orange-600' },
    'CSS': { icon: <FaCss3 />, color: 'from-blue-500 to-cyan-500' },
    'HTML': { icon: <FaHtml5 />, color: 'from-orange-500 to-red-500' },
    'Hibernate': { icon: <FaDatabase />, color: 'from-gray-600 to-slate-600' },
    'SQL': { icon: <SiMysql />, color: 'from-blue-600 to-indigo-600' },
    'Bootstrap': { icon: <SiBootstrap />, color: 'from-purple-600 to-violet-600' },
    'Spring Boot': { icon: <SiSpring />, color: 'from-green-600 to-emerald-600' },
    'Tailwind': { icon: <SiTailwindcss />, color: 'from-teal-500 to-cyan-500' },
    'CORS': { icon: <FaDatabase />, color: 'from-gray-500 to-slate-500' }
};

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Tourist Destination',
            description: 'A comprehensive platform showcasing prime tourist attractions worldwide. Features detailed destination information, cultural significance, and natural beauty highlights to inspire travelers and promote tourism.',
            image: Travel,
            demoLink: '#',
            githubLink: '#',
            techStack: ['React', 'JavaScript', 'CSS', 'Java', 'SQL', 'Bootstrap', 'Hibernate'],
            category: 'Full Stack',
            status: 'Completed',
            features: ['Responsive Design', 'Interactive Maps', 'User Reviews', 'Booking System']
        },
        {
            id: 2,
            title: 'Fashion Factory',
            description: 'A modern e-commerce platform offering curated fashion collections. Features responsive design, secure payment integration, and an intuitive shopping experience for fashion enthusiasts.',
            image: Fashion,
            demoLink: '#',
            githubLink: '#',
            techStack: ['React', 'SQL', 'Spring Boot', 'Hibernate', 'JavaScript', 'HTML', 'Tailwind'],
            category: 'E-commerce',
            status: 'In Progress',
            features: ['Payment Gateway', 'Inventory Management', 'User Authentication', 'Admin Dashboard']
        },
        {
            id: 3,
            title: 'SellWell',
            description: 'An elegant e-commerce solution for premium crockery and kitchenware. Built with robust backend architecture and modern UI/UX principles for seamless customer experience.',
            image: Sellwell,
            demoLink: '#',
            githubLink: '#',
            techStack: ['Java', 'Spring Boot', 'SQL', 'CSS', 'Bootstrap', 'CORS'],
            category: 'E-commerce',
            status: 'Completed',
            features: ['Product Catalog', 'Shopping Cart', 'Order Tracking', 'Customer Support']
        },
    ];

    const getStatusColor = (status) => {
        return status === 'Completed' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-cyan-500';
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
                            className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Portfolio Showcase
                        </motion.div>

                        {/* Cover Image */}
                        <motion.div
                            className="flex justify-center mb-8"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.img
                                src="https://dhruvilrathod.me/assets/illustrations/ProjectsCover.svg"
                                alt="Projects Cover"
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
                            Featured{' '}
                            <span className="text-gradient">Projects</span>
                        </motion.h1>
                        
                        <motion.p
                            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            My projects leverage a diverse range of cutting-edge technology tools. 
                            I specialize in building scalable solutions and deploying them as robust 
                            web applications using modern cloud infrastructure.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid Section */}
            <section className="section-padding projects-section" style={{
                backgroundColor: 'var(--bg-secondary)'
            }}>
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="group relative overflow-hidden"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="professional-card h-full relative group">
                                    {/* Project Image */}
                                    <div className="relative overflow-hidden rounded-t-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Overlay Buttons */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <motion.a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-ghost px-4 py-2 text-sm"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaEye className="mr-2" />
                                                Preview
                                            </motion.a>
                                            <motion.a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-ghost px-4 py-2 text-sm"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <FaCode className="mr-2" />
                                                Code
                                            </motion.a>
                                        </div>

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(project.status)} text-white text-xs font-medium rounded-full shadow-lg`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-white/90 text-gray-800 text-xs font-medium rounded-full shadow-lg">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {project.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                                                        <span className="text-xs text-gray-600">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Tech Stack:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, techIndex) => (
                                                    <motion.div
                                                        key={techIndex}
                                                        className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${techIcons[tech]?.color || 'from-gray-500 to-slate-500'} text-white text-xs font-medium rounded-full shadow-sm`}
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {techIcons[tech]?.icon}
                                                        {tech}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <motion.a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 btn-primary text-center text-sm py-3 group/btn"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FaExternalLinkAlt className="inline mr-2 group-hover/btn:rotate-12 transition-transform" />
                                                Live Demo
                                            </motion.a>
                                            
                                            <motion.a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 btn-secondary text-center text-sm py-3 group/btn"
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FaGithub className="inline mr-2 group-hover/btn:rotate-12 transition-transform" />
                                                Source Code
                                            </motion.a>
                                        </div>
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
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Interested in working together or want to see more projects? 
                            Let's collaborate and create innovative solutions that make a real impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
                                    Start a Project
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/skills" className="btn-secondary text-lg px-8 py-4">
                                    View My Skills
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;

