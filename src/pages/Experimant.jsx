import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  animate: {
    opacity: 1,
    y: "0",
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
const Experimant = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="grid bg-slate-700 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div className="bg-red-300 h-80 w-96 rounded-md  p-3 my-5 mx-auto text-white">
          1
        </div>
        <div className="bg-teal-300 h-80 w-96 rounded-md p-3 my-5 mx-auto  text-white ">
          2
        </div>
        <div className="bg-sky-300 h-80 w-96 rounded-md p-3 my-5  mx-auto text-white">
          3
        </div>
        <div className="bg-orange-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          4
        </div>
        <div className="bg-red-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          1
        </div>
        <div className="bg-teal-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          2
        </div>
        <div className="bg-sky-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          3
        </div>
        <div className="bg-orange-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          4
        </div>
      </motion.div>
    </>
  );
};

export default Experimant;
