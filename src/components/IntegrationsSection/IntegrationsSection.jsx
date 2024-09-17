import React from "react";

const IntegrationsSection = () => {
  return (
    <>
      <div className=" 2xl:container mx-auto">
              <div className=" w-[90%] mx-auto ">
                  {/* Integrated Tools Section */}
<section className="mt-12">
  <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10">
    <div data-aos="fade-right" className="md:w-5/12">
      <h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
        Integrated Tools for All Users
      </h1>
      <p className="my-5 lg:pr-14">
        SrijanSetu integrates with over 200 educational and research platforms, empowering academicians, policy makers, and IPR professionals.
      </p>
      <button className="text-yellow-500 underline font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
        See All Integrations
      </button>
    </div>
    <img
      data-aos="fade-left"
      className="md:w-7/12"
      src="img/integrations.png"
      alt="Integrated Tools"
    />
  </div>
</section>
        </div>
      </div>
    </>
  );
};

export default IntegrationsSection;
