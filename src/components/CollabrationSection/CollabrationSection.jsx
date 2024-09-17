import React from "react";

const CollabrationSection = () => {
  return (
    <>
      <div className=" 2xl:container mx-auto">
        <div className=" w-[90%] mx-auto ">
          <div className="px-24 py-10 pb-24 sm:flex items-center sm:space-x-8 mt-36">
            <div data-aos="fade-right" className="sm:w-1/2 relative">
              <div className="bg-yellow-500 rounded-full absolute w-12 h-12 z-0 -left-4 -top-3 animate-pulse"></div>
              <h1 className="font-semibold text-2xl relative z-50 text-darken lg:pr-10">
                Everything You Can Do in a R&D Ecosystem,{" "}
                <span className="text-yellow-500">
                  You Can Do with SrijanSetu
                </span>
              </h1>
              <p className="py-5 lg:pr-32">
                SrijanSetu is a unified platform that connects researchers,
                innovators, entrepreneurs, policy makers, investors, and
                incubators, providing a seamless space to collaborate, share
                resources, and drive innovation.
              </p>
              <a href="#" className="underline">
                Learn More
              </a>
            </div>
            <div
              data-aos="fade-left"
              className="sm:w-1/2 relative mt-10 sm:mt-0"
            >
              <div
                style={{ background: "#23BDEE" }}
                className="floating w-24 h-24 absolute rounded-lg z-0 -top-3 -left-3"
              ></div>
              <img
                className="rounded-xl z-40 relative"
                src="img/rnd.png"
                alt="Teacher explaining"
              />
              <div className="bg-yellow-500 w-40 h-40 floating absolute rounded-lg z-10 -bottom-3 -right-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollabrationSection;
