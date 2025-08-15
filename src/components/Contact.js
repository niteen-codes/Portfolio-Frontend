import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const API_URL = process.env.REACT_APP_API_URL || 'https://my-app-backend-porfolio.onrender.com';

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
            setStatus("Please fill in all the fields.");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/contact/send-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus(result.message || "Email sent successfully!");
                setFormData({ name: '', email: '', mobile: '', message: '' });
            } else {
                setStatus(result.message || "Failed to send email.");
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus("An error occurred while sending the email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: FaEnvelope,
            title: "Email",
            value: process.env.REACT_APP_CONTACT_EMAIL || "niteenjha190@gmail.com",
            href: `mailto:${process.env.REACT_APP_CONTACT_EMAIL || "niteenjha190@gmail.com"}`
        },
        {
            icon: FaPhone,
            title: "Phone",
            value: process.env.REACT_APP_PHONE || "+91 7977572797",
            href: `tel:${process.env.REACT_APP_PHONE || "+917977572797"}`
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            value: "India",
            href: null
        }
    ];

    return (
        <div className="min-h-screen bg-theme-primary" style={{
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
                            Let's Connect
                        </motion.div>

                        <motion.h1
                            className="heading-primary mb-6 text-theme-primary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Get In{' '}
                            <span className="text-gradient">Touch</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl max-w-3xl mx-auto leading-relaxed text-theme-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
                            and create something amazing that makes a real impact.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding contact-section" style={{
                backgroundColor: 'var(--bg-secondary)'
            }}>
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Let's Start a Conversation
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    I'm always interested in hearing about new projects and opportunities.
                                    Whether you're a company looking to hire, or you're someone looking to build something amazing,
                                    I'd love to hear from you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        className="group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300">
                                            <motion.div
                                                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <info.icon className="text-white text-lg" />
                                            </motion.div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                    {info.title}
                                                </h4>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600 font-medium">{info.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <motion.div
                                className="mt-12 pt-8 border-t border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h4>
                                <div className="flex space-x-4">
                                    {[
                                        { href: "https://github.com/niteen-codes", label: "GitHub", color: "hover:text-gray-900" },
                                        { href: "https://www.linkedin.com/in/niteen-jha-35a594264", label: "LinkedIn", color: "hover:text-blue-600" },
                                        { href: "https://wa.me/+917977572797", label: "WhatsApp", color: "hover:text-green-500" }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg`}
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <span className="sr-only">{social.label}</span>
                                            <div className="w-5 h-5 bg-current rounded" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="professional-card relative overflow-hidden"
                        >
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send me a message</h3>
                                    <p className="text-gray-600">I'll get back to you within 24 hours</p>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <label htmlFor="name" className="form-label">
                                                Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input hover:border-blue-400 focus:scale-[1.02] transition-all duration-200"
                                                placeholder="Your full name"
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            viewport={{ once: true }}
                                        >
                                            <label htmlFor="email" className="form-label">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="form-input hover:border-blue-400 focus:scale-[1.02] transition-all duration-200"
                                                placeholder="your.email@example.com"
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="mobile" className="form-label">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            required
                                            pattern="[0-9]{10}"
                                            title="Enter a valid 10-digit mobile number"
                                            className="form-input hover:border-blue-400 focus:scale-[1.02] transition-all duration-200"
                                            placeholder="+91 XXXXXXXXXX"
                                        />
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <label htmlFor="message" className="form-label">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            className="form-textarea hover:border-blue-400 focus:scale-[1.02] transition-all duration-200"
                                            placeholder="Tell me about your project, timeline, and requirements..."
                                        />
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg py-4"
                                        whileHover={{ scale: loading ? 1 : 1.02 }}
                                        whileTap={{ scale: loading ? 1 : 0.98 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                <span>Sending Message...</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </motion.button>
                                </form>

                                {/* Status Message */}
                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            transition: {
                                                type: "spring",
                                                damping: 15,
                                                stiffness: 300,
                                                duration: 0.6
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            scale: 0.8,
                                            transition: { duration: 0.3 }
                                        }}
                                        className={`mt-6 relative overflow-hidden ${status.includes("successfully") || status.includes("Thank you")
                                            ? "status-success-enhanced"
                                            : "status-error-enhanced"
                                            }`}
                                    >
                                        {/* Background Animation */}
                                        {(status.includes("successfully") || status.includes("Thank you")) && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "100%" }}
                                                transition={{
                                                    duration: 2,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    repeatDelay: 3
                                                }}
                                            />
                                        )}

                                        {/* Success Icon and Message */}
                                        <div className="relative z-10 flex items-center justify-center space-x-3">
                                            {(status.includes("successfully") || status.includes("Thank you")) ? (
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -180 }}
                                                    animate={{
                                                        scale: 1,
                                                        rotate: 0,
                                                        transition: {
                                                            type: "spring",
                                                            damping: 10,
                                                            stiffness: 200,
                                                            delay: 0.2
                                                        }
                                                    }}
                                                    className="flex-shrink-0"
                                                >
                                                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                                                        <motion.svg
                                                            className="w-5 h-5 text-white"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            initial={{ pathLength: 0 }}
                                                            animate={{ pathLength: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                        >
                                                            <motion.path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2.5}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </motion.svg>
                                                    </div>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="flex-shrink-0"
                                                >
                                                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </div>
                                                </motion.div>
                                            )}

                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4, duration: 0.5 }}
                                                className="flex-1"
                                            >
                                                <motion.p
                                                    className="font-semibold text-lg leading-relaxed"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.5 }}
                                                >
                                                    {(status.includes("successfully") || status.includes("Thank you")) ? (
                                                        <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                                                            🎉 {status}
                                                        </span>
                                                    ) : (
                                                        <span className="text-red-700">
                                                            {status}
                                                        </span>
                                                    )}
                                                </motion.p>

                                                {(status.includes("successfully") || status.includes("Thank you")) && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.7, duration: 0.5 }}
                                                        className="text-sm text-green-600 mt-1 font-medium"
                                                    >
                                                        I'll respond within 24 hours ⚡
                                                    </motion.p>
                                                )}
                                            </motion.div>
                                        </div>

                                        {/* Floating particles for success */}
                                        {(status.includes("successfully") || status.includes("Thank you")) && (
                                            <>
                                                {[...Array(6)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="absolute w-2 h-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"
                                                        initial={{
                                                            opacity: 0,
                                                            x: Math.random() * 300 - 150,
                                                            y: Math.random() * 100 - 50
                                                        }}
                                                        animate={{
                                                            opacity: [0, 1, 0],
                                                            y: [0, -30, -60],
                                                            x: [0, Math.random() * 40 - 20, Math.random() * 80 - 40],
                                                            scale: [0, 1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            delay: 0.8 + i * 0.1,
                                                            ease: "easeOut"
                                                        }}
                                                        style={{
                                                            left: `${20 + i * 12}%`,
                                                            top: '50%'
                                                        }}
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;