import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Experimant from "../pages/Experimant";
import Footer from "./Footer";
const Routs = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiment" element={<Experimant />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Routs;
