import React from "react";

const WhySrijanSetu = () => {
  return (
    <>
      <div className=" 2xl:container mx-auto">
        <div className=" w-[90%] mx-auto ">
          <div className="mt-28">
            <div
              data-aos="flip-down"
              className="text-center max-w-screen-md mx-auto"
            >
              <h1 className="text-3xl font-bold mb-4">
                Get Started with
                <span className="text-yellow-500"> SrijanSetu</span>
              </h1>
              <p className="text-gray-500">
                SrijanSetu offers dynamic tools for innovation management,
                research collaboration, and startup support. From resource
                allocation to IPR management, you can track, manage, and
                collaborate all in one place.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-6 lg:space-x-10 mt-7"
            >
              <div className="relative md:w-5/12">
                <img
                  className="rounded-2xl"
                  src="img/indian_students.jpg"
                  alt="Instructor's class interface"
                />
                <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                      FOR YOUNG MINDS
                    </h1>
                    <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                      Make your dream Real - Click here to begin
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative md:w-5/12">
                <img
                  className="rounded-2xl"
                  src="img/academicians.png"
                  alt="Student's access interface"
                />
                <div className="absolute bg-black bg-opacity-20 bottom-0 left-0 right-0 w-full h-full rounded-2xl">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
                      FOR ACADEMICIANS
                    </h1>
                    <button
                      className="rounded-full text-white text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                      style={{ background: "rgba(35, 189, 238, 0.9)" }}
                    >
                      Get your access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhySrijanSetu;
