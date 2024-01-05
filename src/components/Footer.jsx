import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="fixed  right-5 top-72 text-black  bg-slate-200  dark:bg-slate-800 rounded-3xl">
      <div className=" mx-autojustify-between p-2">
        <NavLink to={"/"}>
          <div className="hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full mt-20 p-1 py-2 shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <div className="mx-[1vw] sm:text-[0.8vw] md:text-sm lg:text-lg ">
              <i className="fa-solid fa-house sm:text-[1vw] md:text-sm lg:text-lg dark:text-white text-black"></i>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className="hover:bg-slate-300 dark:hover:bg-slate-700 mt-8 rounded-full p-1 py-2 shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <div className="mx-[1vw] sm:text-[0.8vw] md:text-sm lg:text-lg text-white">
              <i className=" fa-solid fa-user-large sm:text-[1vw] md:text-sm lg:text-lg dark:text-white text-black"></i>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/projects"}>
          <div className="hover:bg-slate-300 dark:hover:bg-slate-700 rounded-full mt-8 p-1 py-2 shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <div className="mx-[1vw] sm:text-[0.8vw] md:text-sm lg:text-lg text-white">
              <i className="fa-solid fa-wrench sm:text-[1vw] md:text-sm lg:text-lg dark:text-white text-black"></i>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/contact"}>
          <div className="hover:bg-slate-300 dark:hover:bg-slate-700  rounded-full shadow-2xl p-1 py-2 mt-8 mb-20 hover:text-white duration-300 cursor-pointer flex">
            <div className="mx-[1vw] sm:text-[0.8vw] md:text-sm lg:text-lg text-white">
              <i className="fa-solid fa-envelope sm:text-[1vw] md:text-sm lg:text-lg dark:text-white text-black"></i>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Footer;
