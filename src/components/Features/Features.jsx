import React from "react";

const Features = () => {
  return (
    <>
      <div className=" 2xl:container mx-auto">
        <div className=" w-[90%] mx-auto ">
          {/* All-In-One Cloud Software */}

          <div className="min-h-screen flex flex-col items-center">
            {/* All-In-One Cloud Software Section */}
            <div
              data-aos="flip-up"
              className="max-w-xl mx-auto text-center mt-24 px-6"
            >
              <h1 className="font-bold text-darken my-3 text-2xl md:text-3xl">
                All-In-One{" "}
                <span className="text-yellow-500">Platform</span>
              </h1>
              <p className="leading-relaxed text-gray-500">
                Srijansetu is an unified platform for integrating Startups, Investors, Intellectual property rights, Researchers and academicians, encouraging their growth and reducing the fragmentation.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20 space-y-3">
              {/* Card 1 */}
              <div
                data-aos="fade-up"
                className="bg-white shadow-xl p-6 text-center rounded-xl"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto transform -translate-y-12"
                >
                  <img src="img/search.png" alt="" />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Wise Searches for Academicians
                </h1>
                <p className="px-4 text-gray-500">
                  Advanced search algorithms tailored for academicians to access
                  research papers, journals, and academic resources
                  effortlessly.
                </p>
              </div>

              {/* Card 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="bg-white shadow-xl p-6 text-center rounded-xl"
              >
                <div
                  
                  className=" w-16 h-16 flex items-center justify-center mx-auto  transform -translate-y-12"
                ><img src="img/match.png" alt="" />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Intuitive Matchmaking for Collabration
                </h1>
                <p className="px-4 text-gray-500">
                  Seamlessly connect startups with investors, incubators, and
                  intellectual property experts, fostering collaborations for
                  innovation.
                </p>
              </div>

              {/* Card 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white shadow-xl p-6 text-center rounded-xl"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                ><img src="img/analytics.png" alt="" />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Market Analysis Report empowering
                </h1>
                <p className="px-4 text-gray-500">
                  Comprehensive market reports offering critical insights to
                  empower your strategic decisions and accelerate growth.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20 space-y-3">
              {/* Card 1 */}
              <div
                data-aos="fade-up"
                className="bg-white shadow-xl p-6 text-center rounded-xl"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                ><img src="img/growth.png" alt="" />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Growth Management System
                </h1>
                <p className="px-4 text-gray-500">
                  Track and manage your startup’s growth with a customized
                  dashboard that adapts to your business needs.
                </p>
              </div>

              {/* Card 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="bg-white shadow-xl p-6 text-center rounded-xl"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                ><img src="img/size.png" alt="" />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Feedback Analysis for Policymakers
                </h1>
                <p className="px-4 text-gray-500">
                  Analyze feedback data to provide actionable insights for
                  policymakers, enhancing decision-making and policy formation.
                </p>
              </div>

              {/* Card 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white shadow-xl p-6 text-center rounded-xl"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                ><img src="img/track.png" alt="" />
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Wallet for Tracking Funds
                </h1>
                <p className="px-4 text-gray-500">
                  A secure digital wallet designed to help you monitor and
                  manage funds for your startup, ensuring smooth financial
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
