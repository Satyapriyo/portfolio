import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Experimant from "../pages/Experimant";
const Routs = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiment" element={<Experimant />} />
      </Routes>
    </>
  );
};

export default Routs;
