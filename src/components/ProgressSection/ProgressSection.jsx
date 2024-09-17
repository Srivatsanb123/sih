import React from "react";

const ProgressSection = () => {
  return (
    <>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row items-center mt-12 px-16">
            <div data-aos="fade-right" className="md:w-5/12">
              <h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
                <span className="text-yellow-500">
                Growth Tracking System with </span> Personalized Dashboards
              </h1>
              <p className="my-5 lg:pr-14">
              Startups can upload project details, track progress, collaborate with peers, and access resources to bring ideas to life efficiently. </p>
            </div>
            <img data-aos="fade-left" className="md:w-7/12" src="img/gradebook.png" alt="Gradebook" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressSection;
