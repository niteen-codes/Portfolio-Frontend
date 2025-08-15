import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      applyDarkTheme();
    } else {
      setIsDark(false);
      applyLightTheme();
    }
  }, []);

  const applyDarkTheme = () => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
    document.documentElement.style.setProperty('--bg-primary', '#0f172a');
    document.documentElement.style.setProperty('--bg-secondary', '#1e293b');
    document.documentElement.style.setProperty('--bg-tertiary', '#334155');
    document.documentElement.style.setProperty('--text-primary', '#f8fafc');
    document.documentElement.style.setProperty('--text-secondary', '#cbd5e1');
    document.documentElement.style.setProperty('--text-tertiary', '#94a3b8');
    document.documentElement.style.setProperty('--border-color', '#475569');
    document.documentElement.style.setProperty('--card-bg', 'rgba(30, 41, 59, 0.8)');
    document.documentElement.style.setProperty('--glass-bg', 'rgba(15, 23, 42, 0.8)');
  };

  const applyLightTheme = () => {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
    document.documentElement.style.setProperty('--bg-primary', '#ffffff');
    document.documentElement.style.setProperty('--bg-secondary', '#f8fafc');
    document.documentElement.style.setProperty('--bg-tertiary', '#f1f5f9');
    document.documentElement.style.setProperty('--text-primary', '#0f172a');
    document.documentElement.style.setProperty('--text-secondary', '#334155');
    document.documentElement.style.setProperty('--text-tertiary', '#64748b');
    document.documentElement.style.setProperty('--border-color', '#e2e8f0');
    document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.9)');
    document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.1)');
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      applyDarkTheme();
      localStorage.setItem('theme', 'dark');
    } else {
      applyLightTheme();
      localStorage.setItem('theme', 'light');
    }
  };

  const value = {
    isDark,
    toggleTheme,
    mounted
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};