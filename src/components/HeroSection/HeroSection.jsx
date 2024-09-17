import React from "react";

const HeroSection = () => {
  return (
      <>
          
      <div className=" 2xl:container mx-auto bg-cream">
        <div className=" w-[90%] mx-auto ">
      {/* Hero Section */}
      <div className=" pt-40">
        <div className="max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
            <h1
              data-aos="fade-right"
              data-aos-once="true"
              className="my-4 text-5xl font-bold leading-tight text-darken"
            >
              <span className="text-yellow-500">Bridging </span> Innovation{" "}
              <br></br> with Opportunity
            </h1>
            <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="leading-normal text-lg mb-8"
            >
              Connecting researchers, entrepreneurs, policymakers, investors,
              and IPR professionals for a collaborative future.
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
            >
              <button className="lg:mx-0 bg-yellow-500 text-white text-base font-medium rounded-md py-2 px-4 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Register Now
              </button>
              <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                <button className="bg-white px-2 py-3 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 ml-2"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                      fill="#23BDEE"
                    />
                  </svg>
                </button>
                <a href="https://youtu.be/3wYxF8stvv0" target="_blank" className="cursor-pointer">Watch how it works</a>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="relative w-full lg:w-6/12 lg:-mt-10" id="girl">
            <img
              data-aos="fade-up"
              data-aos-once="true"
              className="w-10/12 mx-auto 2xl:-mb-20 mb-14"
              src="img/india.png"
            />
            {/* Calendar */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              className="absolute top-20 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:-left-0 lg:top-52 floating"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/startups.png"
              />
            </div>
            {/* Red Square */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              className="absolute top-28 left-10 floating"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/investors.png"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              className="absolute top-44 left-80 floating"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/researches.png"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              className="absolute top-64 right-20 floating"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/patents.png"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
              className="absolute top-80 left-10 floating"
            >
              <img
                className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                src="img/incubators.png"
              />
            </div>
          </div>
        </div>
                  </div>
              </div>
              </div>
    </>
  );
};

export default HeroSection;
