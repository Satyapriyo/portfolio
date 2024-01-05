import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../assets/myLogo-removebg-preview.png";

const Navbar = () => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.className = mode;
  }, [mode]);
  return (
    <div className=" p-4 font-mono sticky top-0 z-50 bg-slate-200 w-[100vw] dark:bg-slate-700">
      <div className="ml-[1%] flex space-x-6" id="nav">
        {/* <img src="logoPortfolio_prev_ui.png" alt="" className="w-20 h-10 -ml-10 mr-20"/> */}
        <img src={logo} className="h-16" alt="" />
      </div>
      <button
        className="dark:text-white sm:text-[2rem] text-[2rem] md:text-[3rem] lg:text-[3rem]  font-bold right-0 absolute py-[0.3rem] lg:px-[2rem] md:px-[2rem] sm:px-[2px] text-white top-[50%]"
        onClick={toggleMode}
      >
        {mode === "light" ? (
          <i class="fa-sharp fa-solid fa-lightbulb"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
