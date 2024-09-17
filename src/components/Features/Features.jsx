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
                <span className="text-yellow-500">Cloud Software.</span>
              </h1>
              <p className="leading-relaxed text-gray-500">
                Skilline is one powerful online software suite that combines all
                the tools needed to run a successful school or office.
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
                  style={{ background: "#5B72EE" }}
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 33 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                      fill="white"
                    />
                  </svg>
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
                  style={{ background: "#F48C06" }}
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M13.7142 21.4285H10.2857V28.2857C10.2857 29.2325 11.0532 30 11.9999 30C12.9467 30 13.7142 29.2325 13.7142 28.2857V21.4285Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M21.4286 21.4285H17.9999V28.2857C17.9999 29.2325 18.7674 30 19.7142 30C20.661 30 21.4286 29.2325 21.4286 28.2857V21.4285Z"
                      fill="#F5F5FC"
                    />
                  </svg>
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
                  style={{ background: "#F1C40F" }}
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 5.3V2H6v3.3C2.7 5.7 0 8.5 0 12.8 0 17.3 3.5 21 8.2 21h7v-3H8.2C5 18 3 15.5 3 12.8c0-2.3 1.6-4.2 3.8-4.8V10h1.6V8.2H6.8c0-1.6 1.3-3 3-3h4.4c1.6 0 3 1.3 3 3h-1.6v1.6h1.6v1.6h1.6c.4-2.3 2.1-4 4.2-4.2z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
                  Market Analysis Report for
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
                  style={{ background: "#5B72EE" }}
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 33 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                      fill="white"
                    />
                  </svg>
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
                  style={{ background: "#F48C06" }}
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M13.7142 21.4285H10.2857V28.2857C10.2857 29.2325 11.0532 30 11.9999 30C12.9467 30 13.7142 29.2325 13.7142 28.2857V21.4285Z"
                      fill="#F5F5FC"
                    />
                    <path
                      d="M21.4286 21.4285H17.9999V28.2857C17.9999 29.2325 18.7674 30 19.7142 30C20.661 30 21.4286 29.2325 21.4286 28.2857V21.4285Z"
                      fill="#F5F5FC"
                    />
                  </svg>
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
                  style={{ background: "#F1C40F" }}
                  className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 5.3V2H6v3.3C2.7 5.7 0 8.5 0 12.8 0 17.3 3.5 21 8.2 21h7v-3H8.2C5 18 3 15.5 3 12.8c0-2.3 1.6-4.2 3.8-4.8V10h1.6V8.2H6.8c0-1.6 1.3-3 3-3h4.4c1.6 0 3 1.3 3 3h-1.6v1.6h1.6v1.6h1.6c.4-2.3 2.1-4 4.2-4.2z"
                      fill="white"
                    />
                  </svg>
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
