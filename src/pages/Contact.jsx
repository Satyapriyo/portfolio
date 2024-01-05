import React from "react";
import { motion } from "framer-motion";
import "../index.css";
const containerVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    x: "50vw",
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    x: "50vw",
    scale: 0,
    transition: { ease: "easeInOut" },
  },
};
const Contact = () => {
  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-[60vh]"
      >
        <h1 className="text-3xl mt-3 text-center font-serif">Contact</h1>
        <form class="max-w-md mx-auto mt-10 h-[60vh]  rounded-md bg-slate-200 dark:bg-slate-800 p-10">
          <div class="mb-5 mt-10">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="message"
              rows="10"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-12"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;
