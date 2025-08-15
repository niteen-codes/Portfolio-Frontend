import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/niteen-codes",
            label: "GitHub",
            color: "hover:text-gray-900"
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/niteen-jha-35a594264",
            label: "LinkedIn",
            color: "hover:text-blue-600"
        },
        {
            icon: FaWhatsapp,
            href: "https://wa.me/+917977572797",
            label: "WhatsApp",
            color: "hover:text-green-500"
        },
        {
            icon: FaInstagram,
            href: "https://instagram.com",
            label: "Instagram",
            color: "hover:text-pink-500"
        }
    ];

    return (
        <footer className="footer text-white relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
            color: 'white'
        }}>
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-indigo-900/10"></div>
            <div className="container-custom py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center gradient-shadow">
                                <span className="text-white font-bold text-sm">NJ</span>
                            </div>
                            <span className="text-xl font-bold">Niteen Jha</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Full-Stack Developer & UI/UX Designer
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 ${social.color} transition-colors duration-300`}
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                aria-label={social.label}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-1">
                            Made with <FaHeart className="text-red-500 text-xs" /> by Niteen Jha
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            &copy; 2025 All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Bottom border */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="text-center">
                        <p className="text-gray-500 text-xs">
                            Crafted with passion • Designed for impact • Built to inspire
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
