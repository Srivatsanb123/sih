import React from 'react'

const Assessments = () => {
  return (
    <>
    <div className=" 2xl:container mx-auto">
              <div className=" w-[90%] mx-auto ">
                  {/* Assessments Section */}
<section className="mt-20">
  <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
    <div data-aos="fade-right" className="md:w-6/12">
      <img
        className="md:w-11/12"
        src="img/true-false.png"
        alt="Assessments"
      />
    </div>
    <div
      data-aos="fade-left"
      className="md:w-6/12 md:transform md:-translate-y-20"
    >
      <h1 className="font-semibold text-darken text-3xl lg:pr-64">
        Assessments, Feedback, and Discussions
      </h1>
      <p className="text-gray-500 my-5 lg:pr-52">
        Real-time idea validation by investors, funding agencies, and incubators. One-on-one discussions and assessments for validating new projects.
      </p>
      <ul className="text-gray-500 my-4">
        <li>• One-on-One Discussions between investors and startups</li>
        <li>• Assessments for real-time validation and feedback</li>
      </ul>
      <button className="text-yellow-500 underline font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full">
        Validate Your Idea Now
      </button>
    </div>
  </div>
</section>
      </div>
    </div>
  </>
  )
}

export default Assessments