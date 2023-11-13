import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence  location={location} key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
