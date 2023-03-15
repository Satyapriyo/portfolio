import React from "react";
import "../index.css";
import Footer from "./Footer";
const Projects = () => {
  const AllProjects = [
    {
      id: 1,
      name: "Twitter Login page clone",
      type: "frontend",
      description: "This is a Twitter login page clone (frontend)",
      link: "https://twitter-login.vercel.app/",
      repository: "https://github.com/Satyapriyo/TwitterLogIn8",
      color: "bg_light",
    },
    {
      id: 2,
      name: "react-restaurentapp",
      type: "frontend",
      description:
        "It's a simple react resutaurent app build while learing hooks.",
      link: "https://react-restaurentapp.vercel.app/",
      repository: "https://github.com/Satyapriyo/react-restaurentapp",
      color: "bg-mid",
    },
    {
      id: 3,
      name: "happyMindsWeb",
      type: "frontend",
      description:
        "this is a website to reduce stress in your daily life . feel free and take a break.",
      link: "https://happymindsweb.vercel.app/",
      repository: "https://github.com/Satyapriyo/happyMindsWeb",
      color: "bg-special",
    },
  ];
  return (
    <>
      <div className="w-28 bg-slate-600 mx-auto my-16 p-2 rounded mt-20 text-lg  font-extrabold text-white" >
        Projects
      </div>
      <div className="flex  w-[80%] mx-[10%]">
        {AllProjects.map((e) => {
          return (
            <>
              <div className={`md:w-64 w-48 lg:w-96 mx-auto p-4 rounded hover:scale-125 duration-700 ease-in-out ${e.color}`} key={e.id} >
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
      </div>
      <Footer />
    </>
  );
};

export default Projects;

{
  /* <div className="md:w-64 w-48 lg:w-96 mx-auto p-4 rounded hover:scale-125 duration-700 ease-in-out bg-special">
  <div className=" p-2 sm:text-md text-xl text-center font-bold">
    Twitter Login page clone
  </div>
  <div className="mx-auto w-32 sm:text-sm text-center text-md font-bold">
    front end{" "}
  </div>
  <div className="h-48 m-2 p-7 text-white ">
    This is a Twitter login page clone (frontend)
    <br />
    <div className="flex mt-14 hover: text-blact">
      <div>
        <a className="p-4" href="https://twitter-login.vercel.app/">
          live
        </a>
      </div>
      <a href="https://github.com/Satyapriyo/TwitterLogIn8">
        <i className="fa-brands fa-github p-2 cursor-pointer"></i>
      </a>
    </div>
  </div>
</div>; */
}

{
  /* <div className="md:w-64 w-48 lg:w-96 mx-auto p-4 rounded hover:scale-125 duration-700 ease-in-out bg-mid">
          <div className=" p-2 sm:text-md text-xl text-center font-bold">
            react-restaurentapp
          </div>
          <div className="mx-auto w-32 sm:text-sm text-center text-md font-bold">
            front end{" "}
          </div>
          <div className="h-48 m-2 p-7 text-white ">
            It's a simple react resutaurent app build while learing hooks.
            <br />
            <div className="flex mt-14 hover: text-blact">
              <div>
                <a className="p-4" href="https://twitter-login.vercel.app/">
                  live
                </a>
              </div>
              <a href="https://github.com/Satyapriyo/TwitterLogIn8">
                <i className="fa-brands fa-github p-2 cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div> */
}

{
  /* <div className="md:w-64 w-48 lg:w-96 mx-auto p-4 rounded hover:scale-125 duration-700 ease-in-out bg_light">
          <div className=" p-2 sm:text-md text-xl text-center font-bold">
            happyMindsWeb
          </div>
          <div className="mx-auto w-32 sm:text-sm text-center text-md font-bold">
            front end{" "}
          </div>
          <div className="h-48 m-2 p-7 text-white ">
            this is a website to reduce stress in your daily life . feel free
            and take a break.
            <br />
            <div className="flex mt-14 hover: text-blact">
              <div>
                <a
                  className="p-4"
                  href="https://react-restaurentapp.vercel.app/"
                >
                  live
                </a>
              </div>
              <a href="https://github.com/Satyapriyo/react-restaurentapp">
                <i className="fa-brands fa-github p-2 cursor-pointer"></i>
              </a>
            </div>
          </div>
        </div> */
}
