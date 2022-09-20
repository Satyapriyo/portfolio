import React from "react";
import "../index.css";
import Marquee from "react-fast-marquee";
const About = () => {
  return (
    <>
      <div className="w-20 bg-slate-600 mx-auto p-2 rounded mt-20 text-lg  font-extrabold text-white">
        Skills
      </div>
      <Marquee pauseOnHover="true" speed="40">
        <div className="text-white font-bold flex mt-[20vh] ">
          <div className="section bg-orange-400 w-48 h-32 pt-10 text-center my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>Html</div>
          </div>
          <div className="section bg-sky-400 w-48 h-32 pt-10 text-center my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>Css</div>
          </div>
          <div className="section bg-yellow-400 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>Javascript</div>
          </div>
          <div className="section bg-blue-400 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>ReactJs</div>
          </div>
          <div className="section bg-green-500 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>Tailwind Css</div>
          </div>
          <div className="section bg-violet-500 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>Bootstrap</div>
          </div>
          <div className="section bg-slate-500 w-48 h-32 text-center pt-10 my-[2vh] hover:scale-105 duration-200 rounded mx-20">
            <div>Git & GitHub</div>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default About;
