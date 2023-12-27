import React from "react";
import Footer from "../components/Footer";
const Experimant = () => {
  return (
    <>
      <div className="grid bg-slate-700 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="bg-red-300 h-80 w-96 rounded-md  p-3 my-5 mx-auto text-white">
          1
        </div>
        <div className="bg-teal-300 h-80 w-96 rounded-md p-3 my-5 mx-auto  text-white ">
          2
        </div>
        <div className="bg-sky-300 h-80 w-96 rounded-md p-3 my-5  mx-auto text-white">
          3
        </div>
        <div className="bg-orange-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          4
        </div>
        <div className="bg-red-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          1
        </div>
        <div className="bg-teal-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          2
        </div>
        <div className="bg-sky-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          3
        </div>
        <div className="bg-orange-300 h-80 w-96 rounded-md  p-3 my-5  mx-auto text-white">
          4
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experimant;
