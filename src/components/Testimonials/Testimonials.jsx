import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className=" 2xl:container mx-auto">
        <div className=" w-[90%] mx-auto ">
          {/* Testimonials Section */}
          <section className="mt-24">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
              <div data-aos="fade-right" className="md:w-7/12">
                <img
                  className="md:w-11/12"
                  src="img/testimonials.png"
                  alt="What They Say"
                />
              </div>
              <div
                data-aos="fade-left"
                className="md:w-5/12 md:transform md:-translate-y-6"
              >
                <h1 className="font-semibold text-darken text-3xl lg:pr-64">
                  What <span className="text-yellow-500">They Say</span>
                </h1>
                <p className="text-gray-500 my-5 lg:pr-24">
                  SrijanSetu has empowered countless researchers, entrepreneurs,
                  and investors with streamlined collaboration and idea
                  validation. Join them today!
                </p>
                <button className="text-yellow-500 underline font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
                  Write Your Review
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
