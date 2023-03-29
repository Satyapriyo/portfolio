import React from "react";
import "../index.css";
import Footer from "./Footer";
import Marquee from "react-fast-marquee";
const Projects = () => {
  const AllProjects = [
    {
      id: 1,
      name: "Twitter Login page clone",
      type: "frontend",
      description: "This is a Twitter login page clone",
      link: "https://twitter-login.vercel.app/",
      repository: "https://github.com/Satyapriyo/TwitterLogIn8",
      color: "bg_light",
    },
    {
      id: 2,
      name: "React-restaurentapp",
      type: "frontend",
      description:
        "It's a simple react resutaurent app build while learing hooks.",
      link: "https://react-restaurentapp.vercel.app/",
      repository: "https://github.com/Satyapriyo/react-restaurentapp",
      color: "bg-mid",
    },
    {
      id: 3,
      name: "HappyMindsWeb",
      type: "frontend",
      description:
        "this is a website to reduce stress in your daily life . feel free and take a break.",
      link: "https://happymindsweb.vercel.app/",
      repository: "https://github.com/Satyapriyo/happyMindsWeb",
      color: "bg-special",
    },
    {
      id: 4,
      name: "Markdown Preview",
      type: "frontend",
      description: "This is a way to preview markdown online .",
      link: "https://markdown-preview-ruby.vercel.app/",
      repository: "https://github.com/Satyapriyo/TYPO_CODER",
      color: "bg-04",
    },
    {
      id: 4,
      name: "TYPO CODER",
      type: "frontend",
      description:
        "This is a tying speed testing website that helps programmers to increase their coding speed 🚀🚀.",
      link: "https://typo-coder.vercel.app/",
      repository: "https://github.com/Satyapriyo/Markdown_preview",
      color: "bg-05",
    },
    {
      id: 4,
      name: "Chat_gpt lite",
      type: "frontend",
      description:
        "Its a lite version of chatgpt , made using openai,s davinchi api.",
      link: "https://chatgpt-lite.vercel.app/",
      repository: "https://github.com/Satyapriyo/Chatgpt_lite",
      color: "bg-06",
    },
  ];
  return (
    <>
      <div className="w-28 bg-slate-600 mx-auto my-16 p-2 rounded mt-20 text-lg  font-extrabold text-white">
        Projects
      </div>
      <div className="flex">
        <Marquee pauseOnHover="true" speed="30" className="h-[40vh]">
          {AllProjects.map((e) => {
            return (
              <>
                <div
                  className={` w-80  mx-8 p-4 rounded hover:scale-110 duration-700 ease-in-out ${e.color}`}
                  key={e.id}
                >
                  <div className=" p-2 sm:text-md text-xl text-center font-bold">
                    {e.name}
                  </div>
                  <div className="mx-auto w-32 sm:text-sm text-center text-md font-bold">
                    {e.type}
                  </div>
                  <div className="h-48 m-2 p-7 text-white ">
                    {e.description}
                    <br />
                    <div className="flex mt-14 hover: text-blact">
                      <div>
                        <a className="p-4" href={e.link}>
                          live
                        </a>
                      </div>
                      <a href={e.repository}>
                        <i className="fa-brands fa-github p-2 cursor-pointer"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Marquee>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
