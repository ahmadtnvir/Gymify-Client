import { useState } from "react";

import toast from "react-hot-toast";
import { FiUser } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../assets/Images/Nav-Logo2.png";
import Btn from "../Btn";

const Navbar = () => {
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const { user, signoutUser } = useAuth();
  // TODO: Theme controller functionality
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);
  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // console.log(theme);
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="hover:text-white transition-all duration-200"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allTrainer"}
          className="hover:text-white transition-all duration-200"
        >
          All Trainer
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allClasses"}
          className="hover:text-white transition-all duration-200"
        >
          All Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/community"}
          className="hover:text-white transition-all duration-200"
        >
          Community
        </NavLink>
      </li>
      {/* TODO: Theme controller */}
      {/* <li>
        <label className="grid cursor-pointer place-items-center">
          <input
            onChange={handleToggle}
            type="checkbox"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li> */}
    </>
  );

  const handleSignOut = () => {
    signoutUser()
      .then(() => {
        toast.success("Sign out successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

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
          <div
            className={` ${
              user ? "flex" : "hidden"
            }  items-center gap-3 cursor-pointer relative`}
            onClick={() => setAccountMenuOpen(!accountMenuOpen)}
          >
            {/* Avatar with online status */}
            <div className="relative">
              <img
                src={user?.photoURL}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#ac1929] shadow-md"
              />
              <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0 border-2 border-black"></div>
            </div>

            {/* User name */}
            <h1 className="text-base font-semibold text-gray-300 sm:block hidden">
              {user?.displayName}
            </h1>

            {/* Dropdown menu */}
            <div
              className={`${
                accountMenuOpen
                  ? "translate-y-0 opacity-100 z-10"
                  : "translate-y-2 opacity-0 z-[-1]"
              } bg-black rounded-xl shadow-lg absolute top-[60px] right-0 w-48 p-3 flex flex-col transition-all duration-300 ease-in-out border border-[#ac1929]`}
            >
              <p className="text-gray-300 cursor-default py-2 mb-2 border-b border-gray-700">
                {user?.email}
              </p>
              <p className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#ac1929] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200">
                <FiUser className="text-lg" />
                View Profile
              </p>
              <p className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#ac1929] px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200">
                <MdOutlineSpaceDashboard className="text-lg" />
                Dashboard
              </p>
              <div className="mt-2 border-t border-gray-700 pt-2">
                <p
                  onClick={handleSignOut}
                  className="flex items-center gap-3 text-red-500 hover:text-white hover:bg-red-500 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200"
                >
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
          <div
            className={`${
              user ? "hidden" : "flex"
            }  justify-between items-center gap-3`}
          >
            <Link to={"/signin"}>
              <Btn content={"Sign In"}></Btn>
            </Link>
            <Link to={"/signup"}>
              <Btn content={"Sign Up"}></Btn>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
