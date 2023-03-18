import React from "react";
const AboutMe = () => {
  return (
    <>
      <div className="p-8 rounded-2xl w-[60%] text-center mt-[5vh] text-lg  border-2 shadow-xl mx-auto h-[50vh] ">
        <img
          src="logo192.png"
          alt=""
          className=" sm:mx-auto h-[7vw] md:mx-0 shadow-xl z-20 rounded-full animate-bounce"
        />
        <div className="mx-auto ">
          <p className="text-[5vh] font-bold intro">
            hello ! I am <span id="name">Satyapriyo</span> 👋🏻
          </p>
          <div className=" me">
            <br />
            <p> I am a front end developer and a creative human</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
