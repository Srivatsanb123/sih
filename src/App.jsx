import React from "react";
import "tailwindcss/tailwind.css";
import AOS from "aos";
import "aos/dist/aos.css";

const LandingPage = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="antialiased">
      {/* Navbar */}
      <header className="bg-white shadow-lg h-20 w-full fixed hidden md:flex z-10 px-4 py-2 lg:px-6 lg:py-3 items-center font-poppins">
        <a
          href=""
          className="flex-shrink-0 flex items-center justify-center mx-2"
        >
          <img className="h-8 md:h-10" src="img/srijansetu.png" alt="Logo" />
        </a>
        <nav className="header-links flex-grow font-medium text-xs md:text-sm mx-2">
          <ul className="flex items-center justify-center ml-2 xl:ml-4 mr-auto space-x-2 lg:space-x-4">
            <li className="p-1 font-medium text-xs md:text-sm">
              <a href="">
                <span>About</span>
              </a>
            </li>
            <li className="p-1 font-medium text-xs md:text-sm">
              <a href="">
                <span>Announcements</span>
              </a>
            </li>
            <li className="p-1 font-medium text-xs md:text-sm">
              <a href="">
                <span>Schemes & Policies</span>
              </a>
            </li>
            <li className="p-1 font-medium text-xs md:text-sm">
              <a href="">
                <span>IPR Management</span>
              </a>
            </li>
            <li className="p-1 font-medium text-xs md:text-sm">
              <a href="">
                <span>Provisions</span>
              </a>
            </li>
            <li className="p-1 font-medium text-xs md:text-sm">
              <a href="">
                <span>Network</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Search Box */}
        <div className="relative border px-4 py-2 flex items-center w-auto h-10 rounded-lg focus-within:shadow-lg bg-white mx-2">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 text-[#FF8800]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF8800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="peer h-full w-full outline-none text-sm text-[#FF8800] pl-10 pr-2"
            type="text"
            id="search"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center px-2 space-x-2 lg:px-4">
          <button className="bg-[#FF9933] hover:bg-[#FF8800] text-white font-medium px-4 py-2 text-xs md:text-sm rounded">
            Register
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-medium px-4 py-2 text-xs md:text-sm rounded border border-[#FF8800]">
            Login
          </button>
        </div>
      </header>
      {/* Hero Section */}
      <div className="bg-cream pt-40">
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
                  Connecting researchers, entrepreneurs, policymakers,
                  investors, and IPR professionals for a collaborative future.
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
                    <span className="cursor-pointer">Watch how it works</span>
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
                Seamlessly connect startups with investors, incubators, and intellectual property experts, fostering collaborations for innovation.  
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
                Comprehensive market reports offering critical insights to empower your strategic decisions and accelerate growth. 
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
                Track and manage your startup’s growth with a customized dashboard that adapts to your business needs.  
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
                Analyze feedback data to provide actionable insights for policymakers, enhancing decision-making and policy formation.
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
                A secure digital wallet designed to help you monitor and manage funds for your startup, ensuring smooth financial operations.    
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
          
          {/* Section: Manage Your Learning */}
          <section className="bg-white">
            <div className="max-w-screen-xl px-8 py-16 mx-auto">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-darken mb-4">
                  Manage Your Learning with Ease
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Skilline's unique features make learning and tracking progress
                  straightforward.
                </p>
              </div>
              <div className="flex flex-wrap -mx-4">
                {/* Feature 1 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-yellow-500 p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Interactive Courses
                    </h3>
                    <p className="text-white">
                      Our courses are designed to keep you engaged with
                      interactive lessons and quizzes.
                    </p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-blue-500 p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Track Your Progress
                    </h3>
                    <p className="text-white">
                      Easily monitor your progress with detailed analytics and
                      feedback.
                    </p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-green-500 p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Expert Guidance
                    </h3>
                    <p className="text-white">
                      Get help from industry experts and experienced mentors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Hero Section */}
          <section className="mt-16">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
              <div data-aos="fade-right" className="md:w-6/12 lg:pl-14">
                <h1 className="text-darken font-semibold text-3xl lg:pr-56">
                  <span className="text-yellow-500">Tools</span> For Teachers
                  And Learners
                </h1>
                <p className="text-gray-500 my-4 lg:pr-32">
                  Class has a dynamic set of teaching tools built to be deployed
                  and used during class. Teachers can handout assignments in
                  real-time for students to complete and submit.
                </p>
              </div>
              <img
                data-aos="fade-left"
                className="md:w-6/12"
                src="img/girl-with-books.png"
                alt="Teaching Tools"
              />
            </div>
          </section>

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
                  Assessments, <span className="text-yellow-500">Quizzes</span>,
                  Tests
                </h1>
                <p className="text-gray-500 my-5 lg:pr-52">
                  Easily launch live assignments, quizzes, and tests. Student
                  results are automatically entered in the online gradebook.
                </p>
              </div>
            </div>
          </section>

          {/* Class Management Section */}
          <section className="mt-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-10">
              <div data-aos="fade-right" className="md:w-5/12">
                <h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
                  <span className="text-yellow-500">Class Management</span>{" "}
                  Tools for Educators
                </h1>
                <p className="my-5 lg:pr-14">
                  Class provides tools to help run and manage the class such as
                  Class Roster, Attendance, and more. With the Gradebook,
                  teachers can review and grade tests and quizzes in real-time.
                </p>
              </div>
              <img
                data-aos="fade-left"
                className="md:w-7/12"
                src="img/gradebook.png"
                alt="Class Management"
              />
            </div>
          </section>

          {/* Discussions Section */}
          <section className="mt-24">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:space-x-10">
              <div data-aos="fade-right" className="md:w-7/12">
                <img
                  className="md:w-11/12"
                  src="img/discussion.png"
                  alt="One-on-One Discussions"
                />
              </div>
              <div
                data-aos="fade-left"
                className="md:w-5/12 md:transform md:-translate-y-6"
              >
                <h1 className="font-semibold text-darken text-3xl lg:pr-64">
                  One-on-One{" "}
                  <span className="text-yellow-500">Discussions</span>
                </h1>
                <p className="text-gray-500 my-5 lg:pr-24">
                  Teachers and teacher assistants can talk with students
                  privately without leaving the Zoom environment.
                </p>
              </div>
            </div>
          </section>

          {/* See More Features Button */}
          <section className="my-14">
            <div className="container mx-auto text-center">
              <button
                data-aos="flip-up"
                className="px-5 py-3 border border-yellow-500 text-yellow-500 font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out rounded-full"
              >
                See more features
              </button>
            </div>
          </section>
          {/* Latest News and Resources Section */}
          <section className="mt-24 bg-gray-100 py-16">
            <div className="container mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-darken mb-4">
                  Latest News and Resources
                </h2>
                <p className="text-xl text-gray-700">
                  Stay updated with the latest news and access valuable
                  resources to enhance your learning experience.
                </p>
              </div>
              <div className="flex flex-wrap -mx-4">
                {/* News Item 1 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      src="img/news1.jpg"
                      alt="News 1"
                    />
                    <h3 className="text-2xl font-semibold text-darken mb-2">
                      Exciting New Features
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We have introduced new features to make your learning
                      experience even better. Discover what's new and how it can
                      benefit you.
                    </p>
                    <a
                      href="#"
                      className="text-yellow-500 font-medium hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                {/* News Item 2 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      src="img/news2.jpg"
                      alt="News 2"
                    />
                    <h3 className="text-2xl font-semibold text-darken mb-2">
                      Upcoming Webinars
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Join our upcoming webinars to learn more about the latest
                      trends and techniques in your field.
                    </p>
                    <a
                      href="#"
                      className="text-yellow-500 font-medium hover:underline"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
                {/* News Item 3 */}
                <div className="w-full md:w-1/3 px-4 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                      className="w-full h-40 object-cover rounded-lg mb-4"
                      src="img/news3.jpg"
                      alt="News 3"
                    />
                    <h3 className="text-2xl font-semibold text-darken mb-2">
                      New Resource Library
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Explore our new resource library filled with articles,
                      e-books, and tools to help you stay ahead.
                    </p>
                    <a
                      href="#"
                      className="text-yellow-500 font-medium hover:underline"
                    >
                      Explore Library
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Partners */}
      {/* <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden"> */}
      {/* Trusted by */}
      {/* <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-3 text-gray-400 font-medium">
            Trusted by 5,000+ Companies Worldwide
          </h1>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
            <img className="h-24" src="img/DPIIT.svg" alt="Google" />
            <img className="h-7" src="img/company/netflix.svg" alt="Netflix" />
            <img className="h-7" src="img/company/airbnb.svg" alt="Airbnb" />
            <img
              className="h-7 transform translate-y-2"
              src="img/company/amazon.svg"
              alt="Amazon"
            />
            <img
              className="h-7"
              src="img/company/facebook.svg"
              alt="Facebook"
            />
            <img className="h-7" src="img/company/grab.svg" alt="Grab" />
          </div>
        </div> */}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-screen-xl px-8 mx-auto text-center">
          <div className="mb-8">
            <a href="#" className="text-2xl font-bold">
              Skilline
            </a>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white">
              Careers
            </a>
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white">
              Blog
            </a>
            <a href="#" className="px-4 py-2 text-gray-300 hover:text-white">
              About Us
            </a>
          </div>
          <div className="text-gray-400">
            &copy; 2024 Skilline. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
