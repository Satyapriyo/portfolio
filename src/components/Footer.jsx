import React from "react";
const Footer = () => {
  const details = [
    {
      id: 1,
      name: "Gmail",
      icon: "fa-envelope",
    },
    {
      id: 2,
      name: "Twitter",
      icon: "fa-twitter",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: "fa-linkedin",
    },
    {
      id: 4,
      name: "Github",
      icon: "fa-square-github",
    },
  ];
  return (
    <div className="absolute bottom-[0px] w-[100vw] bg-slate-200 h-[15vh]">
      <div className="flex mx-auto sm:w-[20vw] md:w-[20vw] lg:w-[20vw] justify-between p-2">
        {details.map((item) => {
          const {id, name, icon} = item;
          return (
            <div key={id}>
              <p className="m-2 cursor-pointer hover:font-bold">
                <i className={`fa-solid ${icon} mx-2`}></i>
                {name}
              </p>
            </div>
          );
        })}
        {/* <div>
          <p className="m-2 cursor-pointer hover:font-bold">
            <i className="fa-solid fa-envelope mx-2"></i>
            Gmail
          </p>
        </div>
        <div>
          <p className="m-2 cursor-pointer hover:font-bold">
            <i className="fa-brands fa-twitter mx-2"></i>
            Tweeter
          </p>
        </div>
        <div>
          <p className="m-2 cursor-pointer hover:font-bold">
          <i className="fa-brands fa-linkedin mx-2"></i>
            LinkedIn</p>
        </div>
        <div>
          <p className="m-2 cursor-pointer hover:font-bold">
          <i className="fa-brands fa-square-github mx-2"></i>
            GitHub</p>
        </div> */}
      </div>
    </div>
  );
};
export default Footer;
