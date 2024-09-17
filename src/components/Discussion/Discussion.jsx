import React from "react";

const Discussion = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="mt-24 flex flex-col-reverse md:flex-row items-center md:space-x-10 pt-10 px-14">
          <div data-aos="fade-right" className="md:w-7/12">
            <img
              className="md:w-11/12"
              src="img/discussion.png"
              alt="Discussion Image"
            />
          </div>
          <div
            data-aos="fade-left"
            className="md:w-5/12 md:transform md:-translate-y-6"
          >
            <h1 className="font-semibold text-darken text-3xl lg:pr-64">
              One-on-One <span className="text-yellow-500">Discussions</span>
            </h1>
            <p className="text-gray-500 my-5 lg:pr-24">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>

        <button
          data-aos="flip-up"
          className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium my-14 focus:outline-none transition-transform hover:scale-110 duration-300 ease-in-out rounded-full mx-auto block"
        >
          See more features
        </button>
      </div>
    </div>
  );
};

export default Discussion;
