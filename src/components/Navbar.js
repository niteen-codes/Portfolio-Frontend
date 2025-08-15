import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const closeNav = () => setIsNavOpen(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/experience', label: 'Experience' },
        { path: '/education', label: 'Education' },
        { path: '/projects', label: 'Projects' },
        { path: '/skills', label: 'Skills' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'glass-card professional-shadow border-b border-theme navbar-scrolled' 
                    : 'bg-transparent'
            }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2" onClick={closeNav}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center gradient-shadow">
                                <span className="text-white font-bold text-sm">NJ</span>
                            </div>
                            <span className={`font-bold text-xl ${
                                scrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                                Portfolio
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                                    location.pathname === item.path
                                        ? scrolled 
                                            ? 'text-blue-600' 
                                            : 'text-white'
                                        : scrolled
                                            ? 'text-gray-700 hover:text-blue-600'
                                            : 'text-gray-200 hover:text-white'
                                }`}
                            >
                                {item.label}
                                {location.pathname === item.path && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 gradient-primary rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleNav}
                        className={`lg:hidden p-2 rounded-md transition-colors ${
                            scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                        }`}
                        aria-label="Toggle navigation"
                    >
                        <motion.div
                            animate={isNavOpen ? "open" : "closed"}
                            className="w-6 h-6 flex flex-col justify-center items-center"
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 6 }
                                }}
                                className="w-6 h-0.5 bg-current block mb-1.5 origin-center transition-all"
                            />
                            <motion.span
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                className="w-6 h-0.5 bg-current block mb-1.5 transition-all"
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -6 }
                                }}
                                className="w-6 h-0.5 bg-current block transition-all"
                            />
                        </motion.div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isNavOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50"
                        >
                            <div className="px-4 py-6 space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={closeNav}
                                            className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                                                location.pathname === item.path
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
