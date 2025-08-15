import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div style={{
        width: '48px',
        height: '24px',
        backgroundColor: '#D1D5DB',
        borderRadius: '12px',
        padding: '2px'
      }}>
        <div style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '10px'
        }}></div>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      style={{
        position: 'relative',
        width: '48px',
        height: '24px',
        backgroundColor: isDark ? '#4B5563' : '#D1D5DB',
        borderRadius: '12px',
        padding: '2px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        outline: 'none'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
        animate={{
          x: isDark ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <FaMoon style={{ fontSize: '10px', color: '#2563EB' }} />
          ) : (
            <FaSun style={{ fontSize: '10px', color: '#EAB308' }} />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;