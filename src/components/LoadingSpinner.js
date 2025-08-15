import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{
      background: 'var(--bg-primary)',
      backgroundImage: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-tertiary) 100%)'
    }}>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div>
      <motion.div
        className="text-center relative z-10 glass-effect p-12 rounded-3xl professional-shadow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Logo */}
        <motion.div
          className="w-20 h-20 gradient-primary rounded-3xl flex items-center justify-center mb-8 mx-auto professional-shadow"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="text-white font-bold text-2xl">NJ</span>
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="heading-md text-white mb-2 text-shadow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading Portfolio
        </motion.h2>
        
        <motion.p
          className="text-white/80 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Preparing an amazing experience for you...
        </motion.p>

        {/* Loading Dots */}
        <div className="loading-dots">
          <motion.div
            className="w-3 h-3 bg-blue-600 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-3 h-3 bg-blue-600 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-3 h-3 bg-blue-600 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full mt-8 mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;