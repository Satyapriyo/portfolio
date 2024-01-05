import React from "react";
import AboutMe from "./AboutMe";

import { motion } from "framer-motion";
const containerVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="dark:bg-dark">
        <div className="bg">
          <AboutMe />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
