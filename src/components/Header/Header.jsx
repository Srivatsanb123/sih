import React from "react";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
