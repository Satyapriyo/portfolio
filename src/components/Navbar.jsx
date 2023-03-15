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
        <NavLink to={"/"}>
          <div className="hover:bg-slate-700 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <i className="fa-doutone fa-house text-white"></i>
            <div className="mx-2 text-white">Home</div>
          </div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className="hover:bg-slate-700 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <i className="fa-regular fa-book text-white"></i>
            <div className="mx-3 text-white">about</div>
          </div>
        </NavLink>
        <NavLink to={"/projects"}>
          <div className="hover:bg-slate-700 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
            <i className="fa-solid fa-wrench text-white"></i>
            <div className="mx-2 text-white">Projects</div>
          </div>
        </NavLink>
      </div>
      <button onClick={toggleMode}>button</button>
    </div>
  );
};

export default Navbar;
