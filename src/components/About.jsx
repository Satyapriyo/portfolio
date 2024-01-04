import React from "react";
import "../index.css";
import Marquee from "react-fast-marquee";
import tailwindIcon from "../tailwindIcon.svg";
import { motion } from "framer-motion";
const containerVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
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
const About = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="p-4 text-black dark:text-white font-bold w-[60%]  rounded mx-auto lg:text-3xl md:text-2xl sm:text-xl mt-4 text-center">
        I am front end ethusiast , curious to learn to and apply my learnings in
        different projects.{" "}
      </div>
      <div className="w-20 bg-slate-900 mx-auto hover:scale-110 cursor-pointer duration-300 p-2 rounded mt-20 text-lg  font-extrabold text-white">
        Skills
      </div>
      <Marquee pauseOnHover="true" speed="40">
        <div
          className="text-white text-4xl font-bold flex mt-[5vh]"
          id="marqueeId"
        >
          <div className="section bg-orange-400 w-48 h-32 pt-10 text-center my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>
              <i className="techIcons fa-brands fa-html5"></i>
            </div>
          </div>
          <div className=" section bg-sky-400 w-48 h-32 pt-10 text-center my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>
              <i className="techIcons fa-brands fa-css3"></i>
            </div>
          </div>
          <div className="section bg-yellow-400 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>
              <i className="techIcons fa-brands fa-js"></i>
            </div>
          </div>
          <div className="section bg-blue-400 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>
              <i className="techIcons fa-brands fa-react"></i>
            </div>
          </div>
          <div className="section bg-teal-500 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>
              <img
                src={tailwindIcon}
                className="w-16 text-white items-center mx-auto justify-center"
                alt=""
              />
            </div>
          </div>
          <div className="section bg-violet-500 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>
              <i className=" techIcons fa-brands fa-bootstrap"></i>
            </div>
          </div>
          <div className="section bg-slate-500 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>
              <i className="techIcons fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </Marquee>
    </motion.div>
  );
};

export default About;
