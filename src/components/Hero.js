import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaPalette, FaMobile, FaDatabase } from 'react-icons/fa';
import FullstackDev from '../assets/FullStackDevelopment.svg';
import AppDev from '../assets/AppDevelopment.jpeg';
import UIUX from '../assets/UIUXDesign.svg';
import Database from '../assets/database-for-web-applications.webp';

const Hero = () => {
    const services = [
        {
            title: "Fullstack Development",
            icon: FaCode,
            image: FullstackDev,
            color: "from-blue-500 to-cyan-500",
            features: [
                "Building responsive website front-end using React, HTML, CSS, Tailwind",
                "Developing custom and interactive modern websites",
                "Creating robust application backend in Java, JavaScript & Python",
                "Managing data safely with PostgreSQL, MongoDB, and OracleDB"
            ]
        },
        {
            title: "UI/UX Design",
            icon: FaPalette,
            image: UIUX,
            color: "from-purple-500 to-pink-500",
            features: [
                "Designing highly attractive and responsive user interfaces",
                "Creating modern logo designs and brand identity from scratch",
                "Optimizing user experience through intuitive application flows",
                "Implementing accessibility and usability best practices"
            ]
        },
        {
            title: "App Development",
            icon: FaMobile,
            image: AppDev,
            color: "from-green-500 to-emerald-500",
            features: [
                "Creating wireframes, prototypes, and modern UI/UX designs",
                "Building cross-platform mobile applications",
                "Ensuring responsive design across all devices",
                "Collaborating with teams to deliver high-quality applications"
            ]
        },
        {
            title: "Database Management",
            icon: FaDatabase,
            image: Database,
            color: "from-orange-500 to-red-500",
            features: [
                "Designing and implementing scalable database schemas",
                "Writing optimized SQL queries and stored procedures",
                "Integrating databases with modern applications",
                "Ensuring data security and performance optimization"
            ]
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 gradient-animated">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
                    
                    {/* Floating Elements */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
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
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl"
                        animate={{
                            x: [-50, 50, -50],
                            y: [-30, 30, -30],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                    />
                </div>

                <div className="relative z-10 container-custom text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-5xl mx-auto"
                    >
                        {/* Greeting */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="mb-6"
                        >
                            <span className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 gradient-shadow">
                                <div className="status-online"></div>
                                👋 Welcome to my portfolio
                            </span>
                        </motion.div>

                        {/* Professional Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mb-4"
                        >
                            <div className="flex items-center justify-center gap-2 text-gray-300">
                                <span className="text-sm">Currently:</span>
                                <motion.span 
                                    className="text-green-400 font-medium"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    Available for new opportunities
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            className="heading-xl mb-8 text-white hero-text-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Hi, I'm{' '}
                            <motion.span
                                className="gradient-text-tech"
                                style={{
                                    backgroundSize: '200% 200%'
                                }}
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                Niteen Jha
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="body-lg text-gray-200 mb-12 max-w-4xl mx-auto hero-text-shadow"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            A passionate{' '}
                            <motion.span
                                className="text-blue-400 font-semibold"
                                animate={{ color: ['#60a5fa', '#a78bfa', '#34d399', '#60a5fa'] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                Full-Stack Developer
                            </motion.span>
                            {' '}specializing in building modern, scalable, and user-centric web applications 
                            that deliver exceptional digital experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/projects" className="btn-professional text-lg px-10 py-5 group relative overflow-hidden">
                                    <span className="relative z-10 flex items-center">
                                        View My Work
                                        <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/contact" className="glass-effect text-white text-lg px-10 py-5 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30">
                                    Let's Connect
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            {[
                                { number: "2+", label: "Years Experience" },
                                { number: "10+", label: "Projects Completed" },
                                { number: "5+", label: "Technologies" },
                                { number: "100%", label: "Client Satisfaction" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                                >
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                    >
                        <motion.div
                            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            <motion.div
                                className="w-1 h-3 bg-white rounded-full mt-2"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-gradient-to-br from-white to-gray-50">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            What I Do
                        </motion.div>
                        <h2 className="heading-secondary mb-6">
                            Comprehensive Digital Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            I specialize in creating end-to-end digital experiences that combine 
                            cutting-edge technology with exceptional user-centered design.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="group relative"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="gradient-card p-8 h-full relative overflow-hidden">
                                    {/* Background Gradient */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
                                    
                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                                                <service.icon className="text-xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {service.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="flex justify-center mb-6">
                                            <motion.img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-24 h-24 object-contain"
                                                animate={{ y: [0, -10, 0] }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: index * 0.5
                                                }}
                                            />
                                        </div>

                                        {/* Features */}
                                        <ul className="space-y-4">
                                            {service.features.map((feature, featureIndex) => (
                                                <motion.li
                                                    key={featureIndex}
                                                    className="flex items-start gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 + featureIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mt-2 flex-shrink-0`} />
                                                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        className="text-center mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-600 mb-8">
                            Ready to bring your ideas to life with cutting-edge technology?
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                                Start Your Project
                                <FaArrowRight className="ml-2" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;