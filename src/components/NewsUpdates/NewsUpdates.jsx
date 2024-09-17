import React from 'react'

const NewsUpdates = () => {
  return (
    <>
    <div className=" 2xl:container mx-auto  ">
              <div className=" w-[90%] mx-auto ">
                  {/* Latest News and Resources Section */}
<section className="mt-24py-16">
  <div className="container mx-auto px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-darken mb-4">
        Latest News and Resources
      </h2>
      <p className="text-xl text-gray-700">
        Stay updated on the latest developments, funding rounds, and insights into research and innovation.
      </p>
    </div>
<div data-aos="zoom-in-up" className="my-14 flex flex-col lg:flex-row lg:space-x-20">
  <div className="lg:w-6/12">
    <img className="w-full mb-6" src="img/laptop-news.png" alt="Laptop News" />
    <span className="bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full">NEWS</span>
    <h1 className="text-gray-800 font-semibold my-3 text-xl">
      SrijanSetu adds $50 million to accelerate innovation and collaboration
    </h1>
    <p className="text-gray-500 mb-3">
      SrijanSetu secures funding to fuel research, entrepreneurship, and partnerships between academia and investors...
    </p>
    <a href="#" className="underline">Read more</a>
  </div>
  <div className="lg:w-7/12 flex flex-col justify-between mt-12 space-y-5 lg:space-y-0 lg:mt-0">
    <div className="flex space-x-5">
      <div className="w-4/12">
        <div className="relative">
          <img className="rounded-xl w-full" src="img/children-laptop.png" alt="Children with Laptop" />
          <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
            PRESS RELEASE
          </span>
        </div>
      </div>
      <div className="w-8/12">
        <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
          SrijanSetu Closes $50 Million Series B to Enhance Collaborative Innovation
        </h1>
        <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
          SrijanSetu continues to drive growth and strategic partnerships, enabling researchers and entrepreneurs to innovate seamlessly...
        </p>
      </div>
    </div>
    <div className="flex space-x-5">
      <div className="w-4/12">
        <div className="relative">
          <img className="rounded-xl w-full" src="img/girl-laptop.png" alt="Girl with Laptop" />
          <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
            NEWS
          </span>
        </div>
      </div>
      <div className="w-8/12">
        <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
          Investors Back SrijanSetu's Vision for Innovation in Education and Research
        </h1>
        <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
          SrijanSetu attracts attention from leading investors, further advancing its mission to support startups and researchers...
        </p>
      </div>
    </div>
    <div className="flex space-x-5">
      <div className="w-4/12">
        <div className="relative">
          <img className="rounded-xl w-full" src="img/cat-laptop.png" alt="Cat with Laptop" />
          <span className="absolute bottom-2 right-2 bg-yellow-300 text-darken font-semibold px-4 py-px text-sm rounded-full hidden sm:block">
            NEWS
          </span>
        </div>
      </div>
      <div className="w-8/12">
        <h1 className="text-gray-800 text-sm sm:text-lg font-semibold">
          SrijanSetu Drives Innovation, Raising $50M to Enhance Global Collaboration
        </h1>
        <p className="text-gray-500 my-2 sm:my-4 text-xs sm:text-md">
          With a new round of funding, SrijanSetu empowers researchers, educators, and entrepreneurs to innovate together for a better future...
        </p>
      </div>
    </div>
  </div>
</div>

  </div>
</section>
      </div>
    </div>
  </>
  )
}

export default NewsUpdates