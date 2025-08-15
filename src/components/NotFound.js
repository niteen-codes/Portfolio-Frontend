import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen gradient-animated flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-effect p-12 rounded-3xl professional-shadow max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.h1
            className="heading-xl gradient-text-tech mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            404
          </motion.h1>
          
          {/* Error Message */}
          <motion.h2
            className="heading-lg text-white mb-4 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            className="body-lg text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="btn-professional px-8 py-4 flex items-center gap-3">
                <FaHome />
                Go Home
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => window.history.back()}
                className="glass-effect text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center gap-3"
              >
                <FaArrowLeft />
                Go Back
              </button>
            </motion.div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 gradient-primary rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 gradient-secondary rounded-full opacity-40"></div>
          <div className="absolute top-1/2 -right-8 w-6 h-6 gradient-success rounded-full opacity-50"></div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 gradient-primary rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 gradient-secondary rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;