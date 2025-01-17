import { useState } from "react";

// react icons
import { IoIosArrowUp } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Images/Nav-Logo2.png";
import Btn from "../Btn";

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="hover:text-white transition-all duration-200"
          // activeClassName="text-white border-b-2 border-[#ac1929]"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allTrainer"}
          className="hover:text-white transition-all duration-200"
          // activeClassName="text-white border-b-2 border-[#ac1929]"
        >
          All Trainer
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allClasses"}
          className="hover:text-white transition-all duration-200"
          // activeClassName="text-white border-b-2 border-[#ac1929]"
        >
          All Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/community"}
          className="hover:text-white transition-all duration-200"
          // activeClassName="text-white border-b-2 border-[#ac1929]"
        >
          Community
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-black via-gray-900 to-black shadow-lg">
      <div className="navbar text-gray-300 max-w-7xl mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden flex items-center justify-center rounded-full hover:bg-gray-700 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gradient-to-b from-gray-800 to-black text-gray-300 rounded-xl mt-3 w-52 p-2 shadow-xl transition-transform duration-300 ease-in-out transform scale-95 origin-top-right"
            >
              {links}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a className="btn btn-ghost text-xl cursor-default flex-shrink-0">
              <img
                className="w-[50px] h-[35px] sm:w-[70px] sm:h-[50px] object-cover"
                src={logo}
                alt="logo"
              />
            </a>
            <div className="text-white text-center sm:text-left">
              <h1 className="text-lg sm:text-2xl font-bold tracking-widest">
                GYMIFY
              </h1>
              <p className="uppercase text-[8px] sm:text-[10px] text-[#ff2b2b] tracking-wide">
                Healthy Lifestyle
              </p>
            </div>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-300 space-x-6">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <div className="flex justify-between items-center gap-3">
            <Link to={"/signin"}>
              <Btn content={"Sign In"}></Btn>
            </Link>
            <Link to={"/signup"}>
              <Btn content={"Sign Up"}></Btn>
            </Link>
          </div>
          <div
            className="hidden flex items-center gap-3 cursor-pointer relative"
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          >
            {/* Avatar with online status */}
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#ac1929] shadow-md"
              />
              <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-black"></div>
            </div>

            {/* User name */}
            <h1 className="text-base font-semibold text-gray-300 sm:block hidden">
              Dhon Deo
            </h1>

            {/* Dropdown menu */}
            <div
              className={`${
                accountMenuOpen
                  ? "translate-y-0 opacity-100 z-10"
                  : "translate-y-2 opacity-0 z-[-1]"
              } bg-black rounded-xl shadow-lg absolute top-[60px] right-0 w-48 p-3 flex flex-col transition-all duration-300 ease-in-out border border-[#ac1929]`}
            >
              <p className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#ac1929] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200">
                <FiUser className="text-lg" />
                View Profile
              </p>
              <p className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#ac1929] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200">
                <IoSettingsOutline className="text-lg" />
                Settings
              </p>
              <div className="mt-2 border-t border-gray-700 pt-2">
                <p className="flex items-center gap-3 text-red-500 hover:text-white hover:bg-red-500 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200">
                  <TbLogout2 className="text-lg" />
                  Logout
                </p>
              </div>
            </div>

            {/* Arrow indicator */}
            <IoIosArrowUp
              className={`${
                accountMenuOpen ? "rotate-0" : "rotate-180"
              } transition-transform duration-300 text-gray-300 text-lg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
