import React from "react";
const Footer = () => {
  const details = [
    {
      id: 1,
      name: "Gmail",
      icon: "fa-solid fa-envelope",
      link: "Satyapriyobiswas01@gmail.com"
    },
    {
      id: 2,
      name: "Twitter",
      icon: "fa-brands fa-twitter",
      link: "Satyapriyobiswas01@gmail.com"
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      link: "Satyapriyobiswas01@gmail.com"
    },
    {
      id: 4,
      name: "Github",
      icon: "fa-brands fa-github",
      link: "Satyapriyobiswas01@gmail.com"
    },
  ];
  return (
    <div className="absolute bottom-[0px] w-[100vw] bg-slate-200 h-[15vh] dark:bg-slate-800">
      <div className="flex mx-auto sm:w-[20vw] md:w-[20vw] lg:w-[20vw] justify-between p-2">
        {details.map((item) => {
          const { id, name, icon } = item;
          return (
            <div key={id}>
              <p className="m-2 cursor-pointer hover:font-bold">
                <i className={`fa-solid ${icon} mx-2`}></i>
                <a href={details.link}>{name}</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
