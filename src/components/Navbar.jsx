import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
const Navbar = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  useEffect(()=>{
    localStorage.setItem("mode", mode);
    document.body.className = mode;
  }, [mode])
  return (
    <div className=" p-4 font-mono sticky top-0 z-50 bg-slate-900 w-[100vw] dark:bg-slate-700">
      
      <div className="ml-[3%] flex space-x-6" id="nav">
      {/* <img src="logoPortfolio_prev_ui.png" alt="" className="w-20 h-10 -ml-10 mr-20"/> */}
        <NavLink to={"/"}>
          <div className="hover:bg-slate-700 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <i className="fa-doutone fa-house sm:text-[1vw] md:text-sm lg:text-lg text-white"></i>
            <div className="mx-[1vw] sm:text-[1vw] md:text-sm lg:text-lg text-white">Home</div>
          </div>
        </NavLink>
        <NavLink to={"/about"}> 
          <div className="hover:bg-slate-700 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <i className="fa-regular sm:text-[1vw] md:text-sm lg:text-lg fa-book text-white"></i>
            <div className="mx-[1vw] sm:text-[1vw] md:text-sm lg:text-lg text-white">about</div>
          </div>
        </NavLink>
        <NavLink to={"/projects"}>
          <div className="hover:bg-slate-700 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <i className="fa-solid sm:text-[1vw] md:text-sm lg:text-lg fa-wrench text-white"></i>
            <div className="mx-[1vw] sm:text-[1vw] md:text-sm lg:text-lg text-white">Projects</div>
          </div>
        </NavLink>
      </div>
      <button  className="dark:text-white text-[3rem]  font-bold right-0 top-[2rem] absolute py-[0.3rem] lg:px-[2rem] md:px-[2rem] sm:px-[2px] text-white" onClick={toggleMode}>☀️</button>
    </div>
  );
};

export default Navbar;
