import React from "react";
const AboutMe = () => {
  return (
    <>
      <div className="p-8 rounded-2xl sm:w-[100%] md:w-[70%] lg:w-[60%] text-center sm:mt-0 md:mt-[5vh] lg:mt-[5vh] text-lg  lg:border-2 md:border-2 sm:border-0 sm:shadow-none  lg:shadow-xl md:shadow-xl mx-auto lg:h-[50vh]  md:h-[50vh] sm:h-[100vh]">
        <img
          src="myLogo.png"
          alt=""
          className=" sm:mx-auto h-[7vw] md:mx-0 lg:mx-0 shadow-xl z-20 rounded-full animate-bounce"
        />
        <div className="mx-auto sm:mt-[20vh] mt-[20vh] md:mt-0 lg:mt-0">
          <p className="lg:text-[5vh] md:text-[3vh] sm:text-[3vh] font-bold intro">
            hello ! I am{" "}
            <span
              id="name"
              className="lg:text-[4rem] md:text-[3rem] sm:text-[2rem] mx-3"
            >
              Satyapriyo
            </span>{" "}
            👋🏻
          </p>
          <div className="me">
            <br />
            <p> I am a front end developer and a creative human</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
