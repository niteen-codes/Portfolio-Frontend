import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const FeatureTest = () => {
  const { isDark, toggleTheme } = useTheme();
  
  const testGradient = () => {
    console.log('Testing gradient animation...');
  };

  const testGlass = () => {
    console.log('Testing glass effect...');
  };
  
  const testTheme = () => {
    console.log('Current theme:', isDark ? 'dark' : 'light');
    toggleTheme();
  };

  return (
    <div style={{ 
      padding: '2rem', 
      background: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      minHeight: '100vh'
    }}>
      <h2>Feature Test Component</h2>
      <p>Current theme: {isDark ? 'Dark' : 'Light'}</p>
      
      {/* Theme Test Button */}
      <button 
        onClick={testTheme}
        style={{
          padding: '1rem 2rem',
          margin: '1rem 0',
          background: 'var(--card-bg)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Toggle Theme (Current: {isDark ? 'Dark' : 'Light'})
      </button>
      
      {/* Test Gradient */}
      <div 
        onClick={testGradient}
        style={{
          width: '200px',
          height: '100px',
          background: 'linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 3s ease infinite',
          margin: '1rem 0',
          borderRadius: '10px',
          cursor: 'pointer'
        }}
      >
        <p style={{ color: 'white', textAlign: 'center', lineHeight: '100px' }}>
          Gradient Test
        </p>
      </div>

      {/* Test Glass Effect */}
      <div 
        onClick={testGlass}
        style={{
          width: '200px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '10px',
          margin: '1rem 0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p>Glass Effect Test</p>
      </div>

      {/* Test Professional Card */}
      <motion.div 
        whileHover={{ y: -8, scale: 1.02 }}
        style={{
          width: '200px',
          height: '100px',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '16px',
          padding: '1rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <p>Professional Card Test</p>
      </motion.div>
    </div>
  );
};

export default FeatureTest;