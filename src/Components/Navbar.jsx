import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [toggle, setToggle] = useState("Home");

  const handleToggle = (id) => {
    setToggle(id);
  };

  // Active & inactive styles
  const activeStyle = `
    relative font-semibold text-transparent bg-clip-text 
    bg-gradient-to-bl from-[#632EE3] to-[#9F62F2]
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:w-full after:h-[2px]
    after:bg-gradient-to-bl after:from-[#632EE3] after:to-[#9F62F2]
    after:rounded-full after:transition-all after:duration-300
  `;

  const inactiveStyle = `
    relative text-gray-700 hover:text-transparent hover:bg-clip-text 
    hover:bg-gradient-to-bl hover:from-[#632EE3] hover:to-[#9F62F2]
    after:content-[''] after:absolute after:left-1/2 after:-bottom-1
    after:w-0 after:h-[2px]
    after:bg-gradient-to-bl after:from-[#632EE3] after:to-[#9F62F2]
    after:rounded-full after:transition-all after:duration-300
    hover:after:left-0 hover:after:w-full
  `;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown Menu (Mobile) */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to={"/"}
                onClick={() => handleToggle("Home")}
                className={toggle === "Home" ? activeStyle : inactiveStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/apps"}
                onClick={() => handleToggle("Apps")}
                className={toggle === "Apps" ? activeStyle : inactiveStyle}
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/installs"}
                onClick={() => handleToggle("Installs")}
                className={toggle === "Installs" ? activeStyle : inactiveStyle}
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <NavLink to={"/"}>
          <div className="flex justify-center items-center gap-2">
            <img className="w-10" src="/logo.png" alt="Logo" />
            <span className="text-3xl font-bold bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Eagle
            </span>
          </div>
        </NavLink>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-8">
          <li>
            <NavLink
              to={"/"}
              onClick={() => handleToggle("Home")}
              className={toggle === "Home" ? activeStyle : inactiveStyle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/apps"}
              onClick={() => handleToggle("Apps")}
              className={toggle === "Apps" ? activeStyle : inactiveStyle}
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/installs"}
              onClick={() => handleToggle("Installs")}
              className={toggle === "Installs" ? activeStyle : inactiveStyle}
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End (GitHub Button) */}
      <div className="navbar-end">
        <a
          href="https://github.com/jubayer-bd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 text-white font-semibold rounded-lg bg-gradient-to-bl from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
        >
          <i className="fa-brands fa-github text-lg"></i>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
