import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"
const Navbar = () => {
  return (
    <div className=" p-4 font-mono sticky top-0 z-50 bg-slate-200 w-[100vw] dark:bg-slate-700">
      <div className="ml-[3%] flex space-x-6">
        <NavLink to={"/"}>
          <div className="hover:bg-slate-900 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
          <i className="fa-doutone fa-house"></i>
          <div className="mx-2">Home</div>
            
          </div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className="hover:bg-slate-900 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
          <i className="fa-regular fa-book"></i>
          <div className="mx-3">about</div>
          </div>
        </NavLink>
        <NavLink to={"/projects"}>
          <div className="hover:bg-slate-900 p-2 rounded-md shadow-2xl hover:text-white duration-300 cursor-pointer flex">
          <i className="fa-solid fa-wrench"></i>
            <div className="mx-2">Projects</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
