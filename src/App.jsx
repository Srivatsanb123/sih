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
      <header className="bg-white shadow-lg h-20 w-full fixed hidden md:flex z-10">
        <a
          href=""
          className="border flex-shrink-0 flex items-center justify-center px-2 lg:px-4 xl:px-6"
        >
          <img className="h-8" src="img/srijansetu.png" alt="" />
        </a>
        <nav className="header-links contents font-medium  text-xs lg:text-sm">
          <ul className="flex items-center ml-2 xl:ml-4 mr-auto">
            <li className="p-1 font-bold xl:p-2">
              <a href="">
                <span>About</span>
              </a>
            </li>
            <li className="p-1 md:p-2 font-bold">
              <a href="">
                <span>Announcements</span>
              </a>
            </li>
            <li className="p-1 md:p-2 font-bold">
              <a href="">
                <span>Schemes & Policies</span>
              </a>
            </li>
            <li className="p-1 md:p-2 font-bold">
              <a href="">
                <span>IPR Management</span>
              </a>
            </li>
            <li className="p-1 md:p-2 font-bold">
              <a href="">
                <span>Provisions</span>
              </a>
            </li>
            <li className="p-1 md:p-2 font-bold">
              <a href="">
                <span>Network</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Reduced size Search box */}
        <div className="flex items-center mx-2">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-2 py-1 text-xs w-32 lg:w-40 focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
          />
          <button className="ml-1 bg-[#FF9933] text-white px-2 py-1 text-xs rounded-lg hover:bg-[#FF8800]">
            Search
          </button>
        </div>

        <div className="border flex items-center px-2 lg:px-4 xl:px-6">
          <button className="bg-[#FF9933] hover:bg-[#FF8800] text-white font-bold px-2 xl:px-3 py-1 text-xs lg:text-sm rounded mr-1">
            Register
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-bold px-2 xl:px-3 py-1 text-xs lg:text-sm rounded border border-black">
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
              <span className="text-yellow-500">Studying</span> Online is now
              much easier
            </h1>
            <p
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="leading-normal text-2xl mb-8"
            >
              Skilline is an interesting platform that will teach you in a more
              interactive way
            </p>
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="700"
              className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5"
            >
              <button className="lg:mx-0 bg-yellow-500 text-white text-xl font-bold rounded-full py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Join for free
              </button>
              <div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                <button className="bg-white w-14 h-14 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 ml-2"
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
              className="w-10/12 mx-auto 2xl:-mb-20"
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
      <div className="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        {/* Trusted by */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-3 text-gray-400 font-medium">
            Trusted by 5,000+ Companies Worldwide
          </h1>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
            <img className="h-7" src="img/company/google.svg" alt="Google" />
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
        </div>

        {/* All-In-One Cloud Software */}
        <div data-aos="flip-up" className="max-w-xl mx-auto text-center mt-24">
          <h1 className="font-bold text-darken my-3 text-2xl">
            All-In-One <span className="text-yellow-500">Cloud Software.</span>
          </h1>
          <p className="leading-relaxed text-gray-500">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>

        {/* Card */}
        <div className="grid md:grid-cols-3 gap-14 md:gap-5 mt-20">
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
              Online Billing, Invoicing, & Contracts
            </h1>
            <p className="px-4 text-gray-500">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts
            </p>
          </div>
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
                <path
                  d="M29.1429 21.4285H25.7143V28.2857C25.7143 29.2325 26.4818 30 27.4286 30C28.3754 30 29.1429 29.2325 29.1429 28.2857V21.4285Z"
                  fill="#F5F5FC"
                />
              </svg>
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
              Online Learning & Education
            </h1>
            <p className="px-4 text-gray-500">
              Online courses, interactive quizzes, and a complete learning
              management system to make your institution more effective.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white shadow-xl p-6 text-center rounded-xl"
          >
            <div
              style={{ background: "#1F81F3" }}
              className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C7.1625 0 0 7.1625 0 16C0 24.8375 7.1625 32 16 32C24.8375 32 32 24.8375 32 16C32 7.1625 24.8375 0 16 0ZM16 30.7C8.35437 30.7 2.3 24.6456 2.3 17C2.3 9.35437 8.35437 3.3 16 3.3C23.6456 3.3 29.7 9.35437 29.7 17C29.7 24.6456 23.6456 30.7 16 30.7ZM19.6 14.7C19.6 14.2167 19.2167 13.8333 18.7333 13.8333C18.25 13.8333 17.8667 14.2167 17.8667 14.7V17.8667H14.7V14.7C14.7 14.2167 14.3167 13.8333 13.8333 13.8333C13.35 13.8333 12.9667 14.2167 12.9667 14.7V17.8667H9.8V14.7C9.8 14.2167 9.41667 13.8333 8.93333 13.8333C8.45 13.8333 8.06667 14.2167 8.06667 14.7V17.8667H5.26667C4.78333 17.8667 4.4 18.25 4.4 18.7333C4.4 19.2167 4.78333 19.6 5.26667 19.6H8.06667V22.7667C8.06667 23.25 8.45 23.6333 8.93333 23.6333C9.41667 23.6333 9.8 23.25 9.8 22.7667V19.6H12.9667V22.7667C12.9667 23.25 13.35 23.6333 13.8333 23.6333C14.3167 23.6333 14.7 23.25 14.7 22.7667V19.6H17.8667V22.7667C17.8667 23.25 18.25 23.6333 18.7333 23.6333C19.2167 23.6333 19.6 23.25 19.6 22.7667V19.6H22.7667C23.25 19.6 23.6333 19.2167 23.6333 18.7333C23.6333 18.25 23.25 17.8667 22.7667 17.8667H19.6V14.7Z"
                  fill="white"
                />
              </svg>
            </div>
            <h1 className="font-medium text-xl mb-3 lg:px-14 text-darken">
              Flexible & Scalable Integration
            </h1>
            <p className="px-4 text-gray-500">
              Fully customizable and scalable solutions to integrate with your
              existing infrastructure and third-party applications.
            </p>
          </div>
        </div>
      </div>
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
                  Our courses are designed to keep you engaged with interactive
                  lessons and quizzes.
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
              <span className="text-yellow-500">Tools</span> For Teachers And
              Learners
            </h1>
            <p className="text-gray-500 my-4 lg:pr-32">
              Class has a dynamic set of teaching tools built to be deployed and
              used during class. Teachers can handout assignments in real-time
              for students to complete and submit.
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
              <span className="text-yellow-500">Class Management</span> Tools
              for Educators
            </h1>
            <p className="my-5 lg:pr-14">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
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
              One-on-One <span className="text-yellow-500">Discussions</span>
            </h1>
            <p className="text-gray-500 my-5 lg:pr-24">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
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
              Stay updated with the latest news and access valuable resources to
              enhance your learning experience.
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
