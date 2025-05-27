import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import PreLoader from "./PreLoader";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const Loading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    };
    Loading();

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {isLoading ? (
        <PreLoader />
      ) : (
        <Router>
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <About />
                </motion.div>
              } />
              <Route path="/work" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Work />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              } />
            </Routes>

          </div>
        </Router>
      )}
    </div>
  );
};

export default App;
