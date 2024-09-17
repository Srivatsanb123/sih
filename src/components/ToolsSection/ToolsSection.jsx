import React from "react";

const ToolsSection = () => {
  return (
    <>
      <div className=" 2xl:container mx-auto">
              <div className=" w-[90%] mx-auto ">
              <section className="mt-16">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
    <div data-aos="fade-right" className="md:w-6/12 lg:pl-14">
      <h1 className="text-darken font-semibold text-3xl lg:pr-56">
        <span className="text-yellow-500">Tools</span> for Innovators and Entrepreneurs
      </h1>
      <p className="text-gray-500 my-4 lg:pr-32">
        SrijanSetu offers dynamic tools for innovation management, research collaboration, and startup support. From resource allocation to IPR management, you can track, manage, and collaborate all in one place.
      </p>
      {/* <ul className="text-gray-500 my-4 font-medium">
        <li>• Efficient Resource Allocation</li>
        <li>• IPR Management</li>
        <li>• Data-Driven Insights</li>
        <li>• Collaboration Tools for unified growth</li>
      </ul> */}
      <button className="text-yellow-500  underline font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
        Start Innovating
      </button>
    </div>
    <img
      data-aos="fade-left"
      className="md:w-6/12 mt-44"
      src="img/girl-with-books.png"
      alt="Tools for Innovators"
    />
  </div>
</section>
        </div>
      </div>
    </>
  );
};

export default ToolsSection;
