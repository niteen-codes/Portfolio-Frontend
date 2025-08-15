import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Technology from "./components/Technology";
import Education from './components/Education';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import NotFound from './components/NotFound';
import { ThemeProvider } from './contexts/ThemeContext';
import FeatureTest from './components/FeatureTest';
import './index.css';
import './App.css';

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Hero />
          </motion.div>
        } />
        <Route path="/experience" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Experience />
          </motion.div>
        } />
        <Route path="/projects" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Projects />
          </motion.div>
        } />
        <Route path="/skills" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Skills />
          </motion.div>
        } />
        <Route path="/technology/:name" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Technology />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Contact />
          </motion.div>
        } />
        <Route path="/education" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Education />
          </motion.div>
        } />
        <Route path="/test" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <FeatureTest />
          </motion.div>
        } />
        <Route path="*" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <NotFound />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container min-h-screen flex flex-col smooth-scroll">
          <ScrollToTop />
          <Navbar />
          
          {/* Theme Toggle */}
          <div className="fixed top-20 right-4 md:top-24 md:right-8 z-40">
            <ThemeToggle />
          </div>
          
          <main className="content flex-1 relative overflow-hidden">
            <Suspense fallback={<LoadingSpinner />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;